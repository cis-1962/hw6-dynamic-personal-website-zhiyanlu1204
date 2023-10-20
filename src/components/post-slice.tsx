import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface Post {
  id: number;
  title: string;
  imageUrl: string;
  description: string;
}

const initialState = {
  // title: 'Enter the title of the post',
  // imageUrl: 'Enter image url',
  // description: 'Enter description',
  posts: [] as Post[],
  id: 0,
};

export const postSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
    incID: (state) => {
      state.id += 1;
    },
    createPost: (state, action: PayloadAction<Post>) => {
      state.posts.push(action.payload);
    },
    updatePost: (state, action: PayloadAction<Post>) => {
      const modifiedPost: Post = action.payload;
      // const filteredPosts: Post[] = state.posts.filter(
      //   (p) => p.id !== modifiedPost.id,
      // );
      state.posts.forEach((post, i) => {
        if (post.id === modifiedPost.id) {
          console.log('changing modified copy in redux');
          state.posts[i] = modifiedPost;
        }
      });
    },
  },
});

export const { incID, createPost, updatePost } = postSlice.actions;

export default postSlice.reducer;