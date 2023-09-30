import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from './App';
import reportWebVitals from './reportWebVitals';
import  Drawer  from "./component/Drawer"
import Main from "./component/Main/Main";
import Infor from './component/Infor/Infor';
import { CreateTeam } from './component/CreateTeam/CreateTeam';
import { JoinTeamByCode } from './component/JoinTeam/JoinTeamByCode';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Drawer />}>
        <Route path="Main" element={<Main />} />
        <Route path="Infor" element={<Infor />} />
        <Route path="CreateTeam" element={<CreateTeam />} />
        <Route path="joinTeamByCode" element={<JoinTeamByCode />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
