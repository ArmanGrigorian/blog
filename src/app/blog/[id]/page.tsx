"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ChangeEvent, FormEvent, useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/redux/hooks";
import { blogSelector, getPost, setIsEditable, setPost } from "@/redux/slices/blogSlice";
import { deleteCertainPost, putCertainPost } from "@/lib/posts";

const PostPage = ({ params }: { params: { id: string } }) => {
	const dispatch = useAppDispatch();
	const router = useRouter();
	const { post, isEditable } = useAppSelector(blogSelector);

	useEffect(() => {
		dispatch(getPost(params.id));
	}, [dispatch, params.id]);

	///////// FUNCTIONS /////////

	function handleChange(e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
		const target = e.target as HTMLInputElement | HTMLTextAreaElement;

		switch (target.name) {
			case "input_title":
				dispatch(setPost({ title: target.value }));
				break;
			case "input_body":
				dispatch(setPost({ body: target.value }));
				break;
			default:
				break;
		}
	}

	function handleSubmit(e: FormEvent<HTMLFormElement>) {
		e.preventDefault();
		dispatch(setIsEditable(false));
		putCertainPost(post);
	}

	function handleDelete() {
		deleteCertainPost(post.id);
		router.replace("/blog");
	}

	///////// RENDER /////////

	return (
		<>
			{isEditable ? (
				<form
					className="flex flex-col justify-center items-center gap-5 p-5"
					onSubmit={handleSubmit}>
					<input
						className="rounded drop-shadow-md w-1/3 px-2 py-1 border-neutral-100 text-neutral-800 dark:text-neutral-100 bg-neutral-100 dark:bg-neutral-800"
						type="text"
						name="input_title"
						value={post.title}
						onChange={handleChange}
					/>

					<textarea
						className="rounded resize-none drop-shadow-md w-1/3 h-60 px-2 py-1 text-neutral-800 dark:text-neutral-100 bg-neutral-100 dark:bg-neutral-800"
						name="input_body"
						value={post.body}
						onChange={handleChange}></textarea>

					<input
						className="rounded drop-shadow-md w-1/3 py-[2px] text-neutral-800 dark:text-neutral-100 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-800 hover:text-neutral-100 dark:hover:bg-neutral-100 dark:hover:text-neutral-800 active:scale-95"
						type="submit"
						value="SAVE"
					/>

					<button
						className="rounded drop-shadow-md w-1/3 py-[2px] text-lg select-none border-neutral-100 text-neutral-800 dark:text-neutral-100 bg-neutral-100 dark:bg-neutral-800  hover:bg-neutral-800 dark:hover:bg-neutral-100 active:scale-95"
						type="button"
						onClick={() => dispatch(setIsEditable(false))}>
						🔙
					</button>
				</form>
			) : (
				<div className="">
					<h2 className="text-neutral-800 dark:text-neutral-100">{post.title}</h2>

					<div className="flex justify-between">
						<p className="text-neutral-800 dark:text-neutral-100">{post.body}</p>

						<div className="flex flex-col gap-3">
							<Link
								className="border border-neutral-100 dark:border-neutral-800 drop-shadow-md rounded p-2 select-none bg-neutral-100  hover:bg-neutral-800 dark:hover:bg-neutral-800 active:scale-95"
								href="/blog">
								🔙
							</Link>

							<button
								className="border border-neutral-100 dark:border-neutral-800 drop-shadow-md rounded p-2 select-none  bg-neutral-100  hover:bg-neutral-800 dark:hover:bg-neutral-800 active:scale-95"
								title="edit"
								type="button"
								onClick={() => dispatch(setIsEditable(true))}>
								📝
							</button>

							<button
								className="border border-neutral-100 dark:border-neutral-800 drop-shadow-md rounded p-2 select-none  bg-neutral-100  hover:bg-neutral-800 dark:hover:bg-neutral-800 active:scale-95"
								title="delete"
								type="button"
								onClick={handleDelete}>
								🗑️
							</button>
						</div>
					</div>
				</div>
			)}
		</>
	);
};

export default PostPage;
