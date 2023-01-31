// ASS API functions ==> add function is in the component herself

import axios from 'axios'
import { MYSERVER } from '../../../env';
import Post from '../../../models/Post';

// get all posts 
export function getAllPosts() {
  return new Promise<{ data: Post[]}>((resolve) => 
  axios.get(MYSERVER + "get_all_posts").then(res => resolve({ data: res.data })))}

// get your posts for association 
export function getMyAssPosts(token:string) {
  const config = {
    headers: {
        Authorization: `Bearer ${token}`,
    }
  }; 
  return new Promise<{ data: Post[]}>((resolve) => 
  axios.get(MYSERVER + "get_my_posts", config).then(res => resolve({ data: res.data })))}

// delete post
export function delPost(token:string, id:number) {
  const config = {
    headers: {
        Authorization: `Bearer ${token}`
    }
  };
  return new Promise<{ data: any}>((resolve) => 
  axios.delete(MYSERVER + "post/" + id, config ).then(res => resolve({ data: res.data })))}

// export function delPost(id:number) {
//   return new Promise<{ data: number}>((resolve) => 
//   axios.delete(MYSERVER + "post/" + id ).then(res => resolve({ data: res.data })))}

