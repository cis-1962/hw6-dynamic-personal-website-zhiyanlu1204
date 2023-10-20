// import { createSlice } from '@reduxjs/toolkit';
// import type { PayloadAction } from '@reduxjs/toolkit';
// import { MediaInputState } from './media-input-slice';

// export interface PostState {
//   mediaInputState: MediaInputState;
// }

// const initialState: PostState = {
//   mediaInputState: {
//     title: 'Enter the title of the post',
//     imageUrl: 'Enter image url',
//     description: 'Enter description',
//   },
// };

// export const postSlice = createSlice({
//   name: 'post',
//   initialState,
//   reducers: {
//     createPost: (state, action: PayloadAction<MediaInputState>) => {
//       state.mediaInputState = action.payload;
//     },
//     updatePost: (state, action: PayloadAction<MediaInputState>) => {
//       state.mediaInputState = action.payload;
//     },
//     deletePost: (state, action: PayloadAction<MediaInputState>) => {
//       // don't know what to do here
//     },
//   },
// });

// export const { createPost, updatePost, deletePost } = postSlice.actions;

// export default postSlice.reducer;
