// this sclier is developer & authentication 
// add function is in the component herself

import { createAsyncThunk, createSlice, current } from '@reduxjs/toolkit';
import { createSecureContext } from 'tls';
import { RootState } from '../../app/store';
import Developer from '../../models/Developer';
import {  checkType, delDev, DevReg, EditDevProfile, getAllDev, getEmail, getMyDevProfile, login, logout } from './developerAPI';


// #######################################################################################################################
// define here developer as a developers list
export interface DeveloperState {
  developers: Developer[]
  token : string 
  //   for introduce one profile
  loggedDev: Developer
  IsLogged: Boolean
  checkTypeLogged : string
  emailLogged: string
}

// #####################################################################################################################
// initial Variables as an empty == you cant inital it at the inter face
const initialState: DeveloperState = {
  // developers : [{full_name:"shani epshtain", email_from_reg:"shani@a.com", contact_phone_number:"",description:"",GitHub_url:"", linkdin_url:"",profile_picture:"",years_of_experience:0}]
  developers: [],
  token : " ", 
  loggedDev: {email_from_reg:""},
  IsLogged: false,
  checkTypeLogged : "",
  emailLogged: ""
};
// #####################################################################################################################
// create the async functions
export const DevRegAsync = createAsyncThunk(
  'developer/DevReg',
  async (creds:{username:string, password:string, email:string}) => {
    const response = await DevReg(creds.username, creds.password, creds.email);
    return response.data;
  });

export const loginAsync = createAsyncThunk(
  'developer/login',
  async (creds:{username:string, password:string}) => {
    const response = await login(creds.username, creds.password);
    return response.data;
  });

export const logOutAsync = createAsyncThunk(
  'developer/logout',
  async() => {
    const response = await logout()
    return response.data
  }
)

export const checkTypeAsync = createAsyncThunk(
  'developer/checkType',
  async (token: string) => {
    const response = await checkType(token);
    console.log(response.data)
    return response.data;
  });

export const getEmailAsync = createAsyncThunk(
  'developer/getEmail',
  async (token: string) => {
    const response = await getEmail(token);
    console.log(response.data)
    return response.data;
  });

export const getAllDevAsync = createAsyncThunk(
  'developer/getAllDev',
  async () => {
    const response = await getAllDev();
    return response.data;
  });

  export const getMyDevProfileAsync = createAsyncThunk(
    'developer/getMyDevProfile',
    async (token: string) => {
      const response = await getMyDevProfile(token);
      return response.data;
    });

export const delDevAsync = createAsyncThunk(
    'developer/delDev',
    async (token:string) => {
      const response = await delDev(token);
      return response.data;
    });

export const EditDevAsync = createAsyncThunk(
  'developer/EditDevProfile',
  async (data: {dev: Developer ,token:string}) => {
    const response = await EditDevProfile(data.dev, data.token);
    return response.data;
  });

// ############################################################################################################
// create the regular functions (not async) and settings
export const developerSlice = createSlice({
  name: 'developer',
  initialState,
  reducers: {
    // updTok: (state, action) => {state.token = action.payload.token }
    getToken : (state) => {if(localStorage.getItem("token") || ""){state.token = localStorage.getItem("token") || ""}}
  },

  // #################################################################################################################
  // the answers for the async functions
  extraReducers: (builder) => {
    builder.addCase(DevRegAsync.fulfilled, (state, action) => {
      console.log(action.payload)
      state.IsLogged = true
    }).addCase(loginAsync.fulfilled, (state, action) => {
      console.log(action.payload)
      state.token = action.payload.access
      localStorage.setItem("token", JSON.stringify(state.token))
      state.IsLogged = true
      state.loggedDev = {email_from_reg: ""}
    }).addCase(logOutAsync.fulfilled, (state, action) => {
      state.token = ""
      localStorage.clear()
      state.IsLogged = false
      state.loggedDev = {email_from_reg:""}
    }).addCase(checkTypeAsync.fulfilled, (state, action) => {
      console.log(action.payload)
      state.checkTypeLogged = action.payload
    }).addCase(getEmailAsync.fulfilled, (state, action) => {
      state.emailLogged = action.payload
      console.log(current(state))
    }).addCase(getAllDevAsync.fulfilled, (state, action) => {
      console.log(action.payload)
      state.developers = action.payload
    }).addCase(getMyDevProfileAsync.fulfilled, (state, action) => {
      console.log(action.payload)
      state.loggedDev = action.payload
    }).addCase(delDevAsync.fulfilled, (state, action) => {
      console.log(action.payload)
      state.developers.filter((x) => x.id !== action.payload)
      state.loggedDev = {email_from_reg:""}
    }).addCase(EditDevAsync.fulfilled, (state, action) => {
      console.log(action.payload)
      state.developers.filter((x) => x.email_from_reg !== action.payload.email_from_reg) 
      state.developers.push(action.payload)
    })
  }, })


// ###############################################################################################################33
// export for everything (but the async function -- that we did them export in their part)
export const {getToken} = developerSlice.actions
export const selectDevelopers = (state: RootState) => state.developer.developers;
export const selectToken = (state: RootState) => state.developer.token;
export const selectLoggedDev = (state: RootState) => state.developer.loggedDev;
export const selectIsLogged = (state: RootState) => state.developer.IsLogged;
export const selectTypeLogged = (state: RootState) => state.developer.checkTypeLogged;
export const selectEmailLogged = (state: RootState) => state.developer.emailLogged;


export default developerSlice.reducer;
