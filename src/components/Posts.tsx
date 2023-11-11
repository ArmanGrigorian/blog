import { getAllPosts } from "@/lib/posts";
import PostItem from "./PostItem";

const Posts = async () => {
	const posts = await getAllPosts();

	return (
		<article className="py-5">
			{posts.map((post) => (
				<PostItem key={post.id} post={post} />
			))}
		</article>
	);
};

export default Posts;
