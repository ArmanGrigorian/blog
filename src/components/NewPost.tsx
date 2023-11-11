"use client";

import { postNewPost } from "@/lib/posts";
import { FormEvent } from "react";

const NewPost = () => {

   function handleSubmit(e: FormEvent<HTMLFormElement>) {
      e.preventDefault();

		const target = e.target as HTMLFormElement;

		const newPost = {
			id: crypto.randomUUID(),
			title: target.input_title.value,
			body: target.input_body.value,
		};

		postNewPost(newPost);
	}

	return (
      <form
         onSubmit={handleSubmit}
         className="flex flex-col justify-center items-center gap-3">
			<input
				placeholder="title..."
				className="italic rounded drop-shadow-md w-1/3 px-2 py-1 border-neutral-100 text-neutral-800 dark:text-neutral-100 bg-neutral-100 dark:bg-neutral-800"
				type="text"
				autoFocus
				name="input_title"
			/>

			<textarea
				placeholder="post..."
				className="italic rounded resize-none drop-shadow-md w-1/3 h-60 px-2 py-1 text-neutral-800 dark:text-neutral-100 bg-neutral-100 dark:bg-neutral-800"
				name="input_body"></textarea>

			<input
				className="animate-pulse rounded drop-shadow-md w-1/3 py-[2px] text-neutral-800 dark:text-neutral-100 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-800 hover:text-neutral-100 dark:hover:bg-neutral-100 dark:hover:text-neutral-800 active:scale-95"
				type="submit"
				value="POST"
			/>
		</form>
	);
};

export default NewPost;
