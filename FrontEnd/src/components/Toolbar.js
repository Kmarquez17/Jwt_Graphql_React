import React from "react";
import { Link } from "react-router-dom";

const Toolbar = () => [
  <Link key={1} to={"/"}>Home   </Link>,
  <Link key={2} to={"/register"}>Register</Link>
];

export default Toolbar;
