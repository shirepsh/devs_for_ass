// this sclier is Associations 
// add function is in the component herself

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import Association from '../../../models/Association';
import { RootState } from '../../../app/store';
import { AssReg , delAss, EditAssProfile, getAllAss, getMyAssProfile} from './associationAPI';
import { loginAsync, logOutAsync } from '../developerSlice';

// #######################################################################################################################
// define here Association as a Association list
export interface AssociationState {
  Associations: Association[]
  token : string 
  loggedAss: Association
  IsAssLogged: Boolean
}

// #####################################################################################################################
// initial Variables as an empty == you cant inital it at the inter face
const initialState: AssociationState = {
  Associations: [],
  token : " ", 
//   for introduce one profile
  loggedAss: {},
  IsAssLogged: false
};
// #####################################################################################################################
// create the async functions
export const AssRegAsync = createAsyncThunk(
  'Association/AssReg',
  async (creds:{username:string, password:string, email:string}) => {
    const response = await AssReg(creds.username, creds.password, creds.email);
    return response.data;
  });

export const getAllAssAsync = createAsyncThunk(
  'Association/getAllAss',
  async () => {
    const response = await getAllAss();
    return response.data;
  });

  export const getMyAssProfileAsync = createAsyncThunk(
    'Association/getMyAssProfile',
    async (token: string) => {
      const response = await getMyAssProfile(token);
      return response.data;
    });

export const delAssAsync = createAsyncThunk(
    'Association/delAss',
    async (token:string) => {
      const response = await delAss(token);
      return response.data;
    });

export const EditAssAsync = createAsyncThunk(
  'Association/EditAssProfile',
  async (data: {ass: Association ,token:string}) => {
    const response = await EditAssProfile(data.ass, data.token);
    return response.data;
  });

// ############################################################################################################
// create the regular functions (not async) and settings
export const associationSlice = createSlice({
  name: 'association',
  initialState,
  reducers: {
    getToken : (state) => {if(localStorage.getItem("token") || ""){state.token = localStorage.getItem("token") || ""}}
  },

  // #################################################################################################################
  // the answers for the async functions
  extraReducers: (builder) => {
    builder.addCase(AssRegAsync.fulfilled, (state, action) => {
      console.log(action.payload)
      state.IsAssLogged = true
    }).addCase(loginAsync.fulfilled, (state, action) => {
      console.log(action.payload)
      state.token = action.payload.access
      localStorage.setItem("token", JSON.stringify(state.token))
      state.IsAssLogged = true
    }).addCase(logOutAsync.fulfilled, (state, action) => {
      console.log(action.payload)
      state.token = ""
      localStorage.setItem("token", JSON.stringify(state.token))
      state.IsAssLogged = false
    }).addCase(getAllAssAsync.fulfilled, (state, action) => {
      console.log(action.payload)
      state.Associations = action.payload
    }).addCase(getMyAssProfileAsync.fulfilled, (state, action) => {
      console.log(action.payload)
      state.loggedAss = action.payload
    }).addCase(delAssAsync.fulfilled, (state, action) => {
      console.log(action.payload)
      state.Associations.filter((x) => x.id !== action.payload)
      state.loggedAss = {}
    }).addCase(EditAssAsync.fulfilled, (state, action) => {
      console.log(action.payload)
      state.Associations.filter((x) => x.email_from_reg !== action.payload.email_from_reg) 
      state.Associations.push(action.payload)
    })
  }, })


// ###############################################################################################################33
// export for everything (but the async function -- that we did them export in their part)
export const {getToken} = associationSlice.actions
export const selectAssociation = (state: RootState) => state.association.Associations;
export const selectToken = (state: RootState) => state.association.token;
export const selectLoggedAss = (state: RootState) => state.association.loggedAss;
export const selectIsAssLogged = (state: RootState) => state.association.IsAssLogged;
export default associationSlice.reducer;
