// DEV API functions ==> add function is in the component herself
// authentication API functions

import Developer from "../../models/Developer";
import axios from 'axios'
import { MYSERVER } from "../../env"; 

// dev reg
export function DevReg(username: string, password:string, email:string) {
  return new Promise<{ data: any}>((resolve) => 
  axios.post(MYSERVER + "dev_register", { username, password, email }).then(res => resolve({ data: res.data })))}

// send token - login
export function login(username: string, password:string) {
  return new Promise<{ data: any}>((resolve) => 
  axios.post(MYSERVER + "login", { username, password }).then(res => resolve({ data: res.data })))}

// logout
  export function logout() {
    return new Promise<{ data: any}>((resolve) => 
    axios.get(MYSERVER + "logout").then(res => resolve({ data: res.data })))}

// check who logged 
export function checkType(token:string) {
  const config = {
    headers: {
        Authorization: `Bearer ${token}`,
    }}
  return new Promise<{data: string }>((resolve) => 
  axios.get(MYSERVER + "test" , config).then(res => resolve({ data: res.data })))}

// get email for create profile
export function getEmail(token:string) {
  const config = {
    headers: {
        Authorization: `Bearer ${token}`,
    }}
  return new Promise<{data: string }>((resolve) => 
  axios.get(MYSERVER + "getEmail" , config).then(res => resolve({ data: res.data })))}

  
// get all devs 
export function getAllDev() {
  return new Promise<{ data: Developer[]}>((resolve) => 
  axios.get(MYSERVER + "get_all_dev").then(res => resolve({ data: res.data })))}

// get your dev profile 
export function getMyDevProfile(token:string) {
  const config = {
    headers: {
        Authorization: `Bearer ${token}`,
    }
  }; 
  return new Promise<{ data: Developer}>((resolve) => 
  axios.get(MYSERVER + "get_my_dev_profile", config).then(res => resolve({ data: res.data })))}

// delete developer
export function delDev(token:string) {
  const config = {
    headers: {
        Authorization: `Bearer ${token}`
    }
  }; 
  return new Promise<{ data: number}>((resolve) => 
  axios.delete(MYSERVER + "dev", config ).then(res => resolve({ data: res.data })))}

//  update developer profile
export function EditDevProfile(dev: Developer, token:string) {
  const config = {
    headers: {
        Authorization: `Bearer ${token}`
    }
  }; 
  return new Promise<{ data: Developer}>((resolve) => 
  axios.put(MYSERVER + "dev", config ).then(res => resolve({ data: res.data })))}
