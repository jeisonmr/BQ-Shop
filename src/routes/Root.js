import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../containers/login/views/Login";
import { Recovery } from "../containers/recovery/views/recovery";
import React from "react";
import { Error404 } from "../containers/home/views/Error404"
import { Home } from "../containers/home/views/Home";

export const Root = () => {
  return (
    <BrowserRouter>
    <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/recovery" element={<Recovery/>} />
        <Route path="*" element={<Error404/>} />
    </Routes>
    </BrowserRouter>
  );
};