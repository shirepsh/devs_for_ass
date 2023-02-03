import React from "react";
import { createRoot } from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./app/store";
import App from "./App";
import "./bootstrap.min.css";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Developer } from "./components/DevelopersProfile/Developer";
import HomePage from "./components/Other/HomePage";
import AddDeveloper from "./components/DevelopersProfile/AddDevProfile";
import DevPersonalProfile from "./components/DevelopersProfile/DevPersonalProfile";
import EditDevProfile from "./components/DevelopersProfile/EditDevProfile";
import DevReg from "./components/DevelopersProfile/DevReg";
import AssReg from "./components/AssociationsProfile/AssReg";
import AddAssProfile from "./components/AssociationsProfile/AddAssProfile";
import EditAssProfile from "./components/AssociationsProfile/EditAssProfile";
import AssPersonalProfile from "./components/AssociationsProfile/AssPersonalProfile";
import { Association } from "./components/AssociationsProfile/Association";
import AboutUs from "./components/Other/AboutUs";
import QandA from "./components/Other/QandA";
import Posts from "./components/AssociationPosts/Posts";
import MyPosts from "./components/AssociationPosts/MyPosts";
import AddPost from "./components/AssociationPosts/AddPost";
import Login from "./components/Other/Login";


const container = document.getElementById('root')!;
const root = createRoot(container)


root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <Routes>

          <Route path="/" element={<App />}>
            <Route index element={<HomePage />} /> 
            <Route path="/homePage" element={<HomePage/>} />
            <Route path="/AboutUs" element={<AboutUs/>} />
            <Route path="/QandA" element={<QandA />} />
            <Route path="/login" element={<Login />} />

            <Route path="/devReg" element={<DevReg />} />
            <Route path="/developer" element={<Developer />} />
            <Route path="/devPersonalProfile" element={<DevPersonalProfile/>} />
            <Route path="/addDev" element={<AddDeveloper />} />
            <Route path="/editDevProfile" element={<EditDevProfile />} />

            <Route path="/AssReg" element={<AssReg />} />
            <Route path="/Association" element={<Association />} />
            <Route path="/AssPersonalProfile" element={<AssPersonalProfile/>} />
            <Route path="/addAss" element={<AddAssProfile />} />
            <Route path="/editAssProfile" element={<EditAssProfile />} />

            <Route path="/Posts" element={<Posts />} />
            <Route path="/MyPosts" element={<MyPosts />} />
            <Route path="/AddPost" element={<AddPost />} />
      
          </Route>
        </Routes>
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);

