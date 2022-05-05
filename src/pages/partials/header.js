import { home } from "../home";
import { category } from "../categoy";
import { presentation } from "../presentation";
import { links } from "../links";
import imgLogo from "../../assets/images/iron-man.svg";

import '../../styles/style.scss';

export const header = () => {
    const wrapper = document.createElement("header");
    wrapper.classList = "header";
    wrapper.setAttribute('id','header');

    const divTitle = document.createElement("div");
    const title = document.createElement("h1");
    title.innerText = "IRON MAN";
    const imgHeader = document.createElement("img");
    imgHeader.src = imgLogo;
    imgHeader.alt = "Casco Iron Man";
    divTitle.appendChild(imgHeader);
    divTitle.appendChild(title);

    const nav = document.createElement("nav");
    const ul = document.createElement("ul");

    const liHome = document.createElement("li");
    const spanHome = document.createElement("span");
    const pHome = document.createElement("span");
    spanHome.innerText ="star_border";
    spanHome.classList = "menu-item material-icons-outlined";
    liHome.appendChild(spanHome);
    pHome.innerText = "home";
    liHome.appendChild(pHome);
    ul.appendChild(liHome);

    const liCat = document.createElement("li");
    const spanCat = document.createElement("span");
    const pCat = document.createElement("span");
    spanCat.innerText ="star_border";
    spanCat.classList = "menu-item material-icons-outlined";
    liCat.appendChild(spanCat);
    pCat.innerText = "categorias";
    liCat.appendChild(pCat);
    ul.appendChild(liCat);

    const liPresentation = document.createElement("li");
    const spanPresentation = document.createElement("span");
    const pPresentation = document.createElement("span");
    spanPresentation.innerText ="star_border";
    spanPresentation.classList = "menu-item material-icons-outlined";
    liPresentation.appendChild(spanPresentation);
    pPresentation.innerText = "presentación";
    liPresentation.appendChild(pPresentation);
    ul.appendChild(liPresentation);

    const liLinks = document.createElement("li");
    const spanLinks = document.createElement("span");
    const pLinks = document.createElement("span");
    spanLinks.innerText ="star_border";
    spanLinks.classList = "menu-item material-icons-outlined";
    liLinks.appendChild(spanLinks);
    pLinks.innerText = "links";
    liLinks.appendChild(pLinks);
    ul.appendChild(liLinks);

    nav.appendChild(ul);
    
    
    wrapper.appendChild(divTitle);
    wrapper.appendChild(nav);

    initListener(liHome, home());
    initListener(liCat, category());
    initListener(liPresentation, presentation());
    initListener(liLinks, links());

    return wrapper;
}

function initListener(el, page) {
    el.addEventListener("click", function() {
        let app = document.getElementById("app");
        app.innerHTML = "";
        app.appendChild(page);
    }, false);
}