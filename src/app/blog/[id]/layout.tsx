import type { Metadata } from "next";
import { getAllPosts, getCertainPost } from "@/lib/posts";

export async function generateStaticParams() {
	const posts = await getAllPosts();
	return posts.map((post) => ({ id: post.id }));
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
	const post = await getCertainPost(params.id);
	return { title: post.title };
}

const PostLayout = ({ children }: T_layout) => {
	return <main className="bg-slate-100 dark:bg-slate-800">{children}</main>;
};

export default PostLayout;
