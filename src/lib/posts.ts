export async function getAllPosts(): Promise<T_post[]> {
	const postsData = await fetch("http://localhost:3300/posts", {
		next: { revalidate: 0 },
	});
	const posts: T_post[] = await postsData.json();
	return posts;
}

export async function getCertainPost(id: string): Promise<T_post> {
	const postData = await fetch("http://localhost:3300/posts/" + id, {
		next: { revalidate: 0 },
	});
	const post: T_post = await postData.json();
	return post;
}

export async function postNewPost(post: T_post): Promise<void> {
	await fetch("http://localhost:3300/posts", {
		method: "POST",
		headers: {
			"Content-type": "application/json",
		},
		body: JSON.stringify(post),
	});
}

export async function putCertainPost(post: T_post): Promise<void> {
	await fetch("http://localhost:3300/posts/" + post.id, {
		method: "PUT",
		headers: {
			"Content-type": "application/json",
		},
		body: JSON.stringify(post),
	});
}

export async function deleteCertainPost(id: string): Promise<void> {
	await fetch("http://localhost:3300/posts/" + id, {
		method: "DELETE",
	});
}
