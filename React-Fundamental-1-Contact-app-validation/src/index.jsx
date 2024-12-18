import React from "react";
import { createRoot } from "react-dom/client";
import ContactApp from "./component/ContactApp";
import './style/style.css';


 const root = createRoot(document.querySelector('#root'));
 root.render(<ContactApp/>);