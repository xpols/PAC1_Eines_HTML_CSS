import { home } from "./pages/home";
import { header } from "./pages/partials/header";
import { footer } from "./pages/partials/footer";

document.body.appendChild(header());

const app = document.createElement("main");
app.setAttribute("id", "app");
app.appendChild(home());
document.body.appendChild(app);

document.body.appendChild(footer());

