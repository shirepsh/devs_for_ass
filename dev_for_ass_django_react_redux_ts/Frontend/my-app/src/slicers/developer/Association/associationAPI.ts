// ASS API functions ==> add function is in the component herself

import axios from 'axios'
import { MYSERVER } from '../../../env';
import Association from '../../../models/Association'; 

// ass reg
export function AssReg(username: string, password:string, email:string) {
  return new Promise<{ data: any}>((resolve) => 
  axios.post(MYSERVER + "ass_register", { username, password, email }).then(res => resolve({ data: res.data })))}
  
// get all ass 
export function getAllAss() {
  return new Promise<{ data: Association[]}>((resolve) => 
  axios.get(MYSERVER + "get_all_ass").then(res => resolve({ data: res.data })))}

// get your ass profile 
export function getMyAssProfile(token:string) {
  const config = {
    headers: {
        Authorization: `Bearer ${token}`,
    }
  }; 
  return new Promise<{ data: Association}>((resolve) => 
  axios.get(MYSERVER + "get_my_ass_profile", config).then(res => resolve({ data: res.data })))}

// delete ass
export function delAss(token:string) {
  const config = {
    headers: {
        Authorization: `Bearer ${token}`
    }
  }; 
  return new Promise<{ data: number}>((resolve) => 
  axios.delete(MYSERVER + "ass", config ).then(res => resolve({ data: res.data })))}

//  update developer profile
export function EditAssProfile(dev: Association, token:string) {
  const config = {
    headers: {
        Authorization: `Bearer ${token}`
    }
  }; 
  return new Promise<{ data: Association}>((resolve) => 
  axios.put(MYSERVER + "ass", config ).then(res => resolve({ data: res.data })))}
