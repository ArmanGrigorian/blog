import Posts from "@/components/Posts";
import NewPost from "@/components/NewPost";

const BlogPage = () => {
	return (
		<main className="bg-slate-100 dark:bg-slate-800">
			<h2 className="text-neutral-800 dark:text-neutral-100">Blog</h2>
			<NewPost/>
			<Posts />
		</main>
	);
};

export default BlogPage;
