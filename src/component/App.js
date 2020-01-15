import React from "react";
import "./App.less";
import logo from "../images/webpack.jpg";

export default function App() {
  return (
    <div className="text">
      <img src={logo} alt="" />
      <p>
        hello,<span>world</span>！
      </p>
    </div>
  );
}
