import { home } from "../home";
import { category } from "../categoy";
import { presentation } from "../presentation";
import { links } from "../links";

import imgLogoFooter from "../../assets/images/iron-man-footer.svg";

export const footer = () => {
    const wrapper = document.createElement("footer");
    wrapper.classList = "footer";
    wrapper.setAttribute('id','footer')

    const ul = document.createElement("ul");

    const liHome = document.createElement("li");
    const pHome = document.createElement("span");
    pHome.innerText = "home";
    liHome.appendChild(pHome);
    ul.appendChild(liHome);

    const liCat = document.createElement("li");
    const pCat = document.createElement("span");
    pCat.innerText = "categorias";
    liCat.appendChild(pCat);
    ul.appendChild(liCat);

    const liPresentation = document.createElement("li");
    const pPresentation = document.createElement("span");
    pPresentation.innerText = "presentación";
    liPresentation.appendChild(pPresentation);
    ul.appendChild(liPresentation);

    const liLinks = document.createElement("li");
    const pLinks = document.createElement("span");
    pLinks.innerText = "links";
    liLinks.appendChild(pLinks);
    ul.appendChild(liLinks);
    wrapper.appendChild(ul);

    initListener(liHome, home());
    initListener(liCat, category());
    initListener(liPresentation, presentation());
    initListener(liLinks, links());

    const imgFooter = document.createElement("img");
    imgFooter.src = imgLogoFooter;
    imgFooter.alt = "Casco Iron Man";
    imgFooter.style.height = "77px";
    imgFooter.style.width = "50px";
    wrapper.appendChild(imgFooter);



    return wrapper;
}

function initListener(el, page) {
    el.addEventListener("click", function() {
        let app = document.getElementById("app");
        app.innerHTML = "";
        app.appendChild(page);
    }, false);
}
