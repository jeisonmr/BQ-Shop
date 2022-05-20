import React from "react";
import { Header } from "../components/Header";

export const Layaout = ({ children }) => {
  return (
    <div className="Layout">
      <Header />
      {children}
    </div>
  );
};
