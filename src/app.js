import { home } from "./pages/home";
import { header } from "./pages/partials/header";

console.log("JavaScript is ready to run");

const pageHeader = document.createElement("div");
pageHeader.setAttribute("id", "header");
pageHeader.appendChild(header());
document.body.appendChild(pageHeader);

const app = document.createElement("div");
app.setAttribute("id", "app");
app.appendChild(home());
document.body.appendChild(app);

