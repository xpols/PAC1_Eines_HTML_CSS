import { home } from "./pages/home";
import { header } from "./pages/partials/header";
import { footer } from "./pages/partials/footer";

console.log("JavaScript is ready to run");

document.body.appendChild(header());

const app = document.createElement("main");
app.setAttribute("id", "app");
app.appendChild(home());
document.body.appendChild(app);

document.body.appendChild(footer());

