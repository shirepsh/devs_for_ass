// this sclier is posts of associations 
// add function is in the component herself

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { RootState } from '../../../app/store';
import Post from '../../../models/Post';
import { delPost, getAllPosts, getMyAssPosts } from './postsAPI';

// #######################################################################################################################
// define here Association as a Association list
export interface PostState {
  Posts: Post[]
//   token : string 
  loggedAssPosts: Post[]
}

// #####################################################################################################################
// initial Variables as an empty == you cant inital it at the inter face
const initialState: PostState = {
  Posts: [],
//   token : " ", 
  loggedAssPosts: []
};
// #####################################################################################################################
// create the async functions
export const getAllPostsAsync = createAsyncThunk(
  'post/getAllPosts',
  async () => {
    const response = await getAllPosts();
    return response.data;
  });

  export const getMyAssPostsAsync = createAsyncThunk(
    'post/getMyAssPosts',
    async (token: string) => {
      const response = await getMyAssPosts(token);
      return response.data;
    });

export const delPostAsync = createAsyncThunk(
    'post/delPost',
    async (token:string) => {
      const response = await delPost(token);
      return response.data;
    });

// ############################################################################################################
// create the regular functions (not async) and settings
export const postsSlice = createSlice({
  name: 'post',
  initialState,
  reducers: {
  },

  // #################################################################################################################
  // the answers for the async functions
  extraReducers: (builder) => {
    builder.addCase(getAllPostsAsync.fulfilled, (state, action) => {
      console.log(action.payload)
      state.Posts = action.payload
    }).addCase(getMyAssPostsAsync.fulfilled, (state, action) => {
      console.log(action.payload)
      state.loggedAssPosts = action.payload
    }).addCase(delPostAsync.fulfilled, (state, action) => {
      console.log(action.payload)
      state.Posts.filter((x) => x.id !== action.payload)
      state.loggedAssPosts.filter((x) => x.id !== action.payload)
    })
  }, })


// ###############################################################################################################33
// export for everything (but the async function -- that we did them export in their part)
export const selectPost = (state: RootState) => state.post.Posts;
// export const selectToken = (state: RootState) => state.post.token;
export const selectLoggedAssPosts = (state: RootState) => state.post.loggedAssPosts;
export default postsSlice.reducer;
