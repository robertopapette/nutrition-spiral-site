import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import InternationalWIP from "./pages/InternationalWIP.jsx";
import ItalianWIP from "./pages/ItalianWIP.jsx";


const hostname = window.location.hostname;
const isItalianPublicPage = /^\/it(?:\/(?:index\.html)?)?$/.test(window.location.pathname);

const isIT =
  hostname === "nutritionspiral.it" ||
  hostname === "www.nutritionspiral.it";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    {isIT || isItalianPublicPage ? <ItalianWIP /> : <InternationalWIP />}
  </React.StrictMode>
);
