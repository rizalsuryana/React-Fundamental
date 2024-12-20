import React from "react";
import { createRoot } from "react-dom/client";
import ContactApp from "./component/ContactApp";
import { BrowserRouter } from "react-router-dom";

// styling
import './style/style.css';


 const root = createRoot(document.querySelector('#root'));
 root.render(
 <BrowserRouter>
 <ContactApp/>
 </BrowserRouter>

);