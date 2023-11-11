import Link from "next/link";

const PostItem = ({ post }: { post: T_post }) => {
	return (
		<h4 className="select-none text-neutral-800 dark:text-neutral-100 font-semibold hover:opacity-80">
			<Link href={"/blog/" + post.id}>{post.title}</Link>
		</h4>
	);
};

export default PostItem;
