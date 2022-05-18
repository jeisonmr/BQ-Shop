import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login } from "../views/Login";
import { PasswordRecovery } from "../views/PasswordRecovery";
import { NewPassword } from "../views/NewPassword";
import { Home } from "../views/Home";
import { MyAccount } from "../views/MyAccount";
import { CreateAccount } from "../views/CreateAccount";
import { Checkout } from "../views/Checkout";
import { SendEmail } from "../views/SendEmail";
import { Orders } from "../views/Orders";
import { NotFound } from "../views/NotFound";


export const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/recovery" element={<PasswordRecovery />} />
        {/* <Route exzct path="/send-email" element={<SendEmail />}/>
        <Route exact path="/new-password" element={<NewPassword />} />
        <Route exzct path="/my-account" element={<MyAccount />} />
        <Routes path="/create-account" element={<CreateAccount />} />
        <Routes path="/checkout" element={<Checkout />} />
        <Routes path="/Orders" element={<Orders />} /> */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};
