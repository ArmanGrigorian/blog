import { RootState } from "../store";
import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const getPost = createAsyncThunk("blog/getPost", async (id: string) => {
	const postData = await fetch("http://localhost:3300/posts/" + id);
	const post = await postData.json();
	return post;
});

const initialState: I_blogSlice = {
	posts: [],
	post: { id: "", title: "", body: "" },
	isEditable: false,
};

const blogSlice = createSlice({
	name: "blog",
	initialState: initialState,
	reducers: {
		setPost: (state, { payload }) => {
			state.post = { ...state.post, ...payload } as T_post;
		},

		setIsEditable: (state, { payload }) => {
			state.isEditable = payload;
		},
	},

	extraReducers(builder) {
		builder.addCase(getPost.fulfilled, (state, { payload }) => {
			state.post = payload;
		});
	},
});

export const blogSelector = (state: RootState) => state.blog;
export const { setPost, setIsEditable } = blogSlice.actions;
export default blogSlice.reducer;
