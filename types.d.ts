type T_layout = {
	children: ReactNode;
};

type T_post = {
	id: string;
	title: string;
	body: string;
};

interface I_blogSlice {
	posts: T_post[];
	post: T_post;
	isEditable: boolean;
}
