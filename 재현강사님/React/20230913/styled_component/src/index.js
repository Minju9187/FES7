import React from "react";
// import ReactDOM from 'react-dom'; //구버전
import { createRoot } from "react-dom/client";
// import App from "./App";
// import App1 from "./App1";
// import App2 from "./App2";
// import App3 from "./App3";
// import App4 from "./App4";
// import App5 from "./App5";
import Practice from "./Practice";

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<Practice />);
