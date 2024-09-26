import React from "react";
import ReactDOM from "react-dom/client";
import { Greeting } from "./Greeting";
import { TaskCard } from "./Task";
import { Posts } from "./Posts";

//elemento raiz
const root = ReactDOM.createRoot(document.getElementById("root"));
//funcion que espera elementos hijo


root.render(
  <>
    <Posts/>
    
  </>

);
