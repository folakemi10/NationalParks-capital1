import React from 'react'
import{BrowserRouter, Routes, Route} from "react-router-dom";
import App from "../App";
import ParkDeets from "./ParkDeets";

const Router = () => (
    <BrowserRouter>
      <Routes>
        <Route path="/" component={App} exact/>
        <Route path="/parkDeets/:id" component={ParkDeets}/>
      </Routes>
    </BrowserRouter>
);

export default Router;

