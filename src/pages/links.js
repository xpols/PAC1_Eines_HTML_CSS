import '../styles/links.scss';

export const links = () => {
    const wrapper = document.createElement("section");
    wrapper.classList = "links";
    const p = document.createElement("p");
    const titleH2 = document.createElement("h2");
    titleH2.innerText = "LINKS";

    const p1 = document.createElement("p");
    p1.innerText = "Todas las imagenes y videos empleados en este sitio web tienen una licencia de uso libre para productos sin finalidad comercial. A contincuacion se detallan la fuentes de datos consultadas, agrupadas por informacion relativa al personaje y referencias tecnicas";

    const titleH3Fuentes = document.createElement("h3");
    titleH3Fuentes.innerText = "Fuentes información";
    
    const links = [
        {name: 'Wikipedia', url: 'https://es.wikipedia.org/wiki/Iron_Man'},
        {name: 'Marvel Wiki', url: 'https://marvel.fandom.com/es/wiki/Anthony_Stark_(Tierra-616)'},
        {name: 'Marvel Database', url: 'https://marvel.fandom.com/wiki/Marvel_Database'},
        {name: 'Youtube', url: 'https://es.wikipedia.org/wiki/Iron_Man'},
        {name: 'Zona Negativa', url: 'https://www.zonanegativa.com/marvel-gold-iron-man-demonio-una-botella/'},
        {name: 'Comic critico', url: 'https://comicritico.blogspot.com/2013/03/iron-man-origen-y-todos-sus-trajes-y.html'}
    ];

    const titleH3FuentesTecnicas = document.createElement("h3");
    titleH3FuentesTecnicas.innerText = "Fuentes información tecnica";

    const linksTecnicos = [
        {name: 'Parcel', url: 'https://parceljs.org/'},
        {name: 'Babel', url: 'https://babeljs.io/'},
        {name: 'Tutoriales ParcelJS', url: 'https://lenguajejs.com/automatizadores/parcel/guia-tutorial-inicial-de-parcel/'},
        {name: 'Introducción al Parcel', url: 'https://www.adictosaltrabajo.com/2020/01/22/introduccion-a-parcel/'},
        {name: 'Introducción al Parcel - 2', url: 'https://www.codeinwp.com/blog/introduction-to-parcel-js/'},
        {name: 'Introducción al Parcel - 3', url: 'https://flaviocopes.com/parcel/'},
        {name: 'PostCSS', url: 'https://www.arsys.es/blog/postcss'},
        {name: 'PostCSS - 2', url: 'https://lenguajecss.com/postcss/introduccion/que-es/'}
        
    ];

    const ulLinks = document.createElement("ul");

    links.forEach(function(it) {
        const liItem = document.createElement("li");
        const divItem = document.createElement("div");
        const pItem = document.createElement("p");
        const pItem2 = document.createElement("p");
        const aItem = document.createElement("a");
        pItem.innerText = it.name;
        aItem.href = it.url;
        aItem.innerText = "Link"
        pItem2.appendChild(aItem);
        pItem2.classList = "link-externo";
        divItem.appendChild(pItem);
        divItem.appendChild(pItem2);
        liItem.appendChild(divItem);
        ulLinks.appendChild(liItem);
    });

    const ulLinksTech = document.createElement("ul");

    linksTecnicos.forEach(function(it) {
        const liItem = document.createElement("li");
        const divItem = document.createElement("div");
        const pItem = document.createElement("p");
        const pItem2 = document.createElement("p");
        const aItem = document.createElement("a");
        pItem.innerText = it.name;
        aItem.href = it.url;
        aItem.innerText = "Link"
        pItem2.appendChild(aItem);
        pItem2.classList = "link-externo";
        divItem.appendChild(pItem);
        divItem.appendChild(pItem2);
        liItem.appendChild(divItem);
        ulLinksTech.appendChild(liItem);
    });
    

    wrapper.appendChild(titleH2);
    wrapper.appendChild(p1);
    wrapper.appendChild(titleH3Fuentes);
    wrapper.appendChild(ulLinks);
    wrapper.appendChild(titleH3FuentesTecnicas);
    wrapper.appendChild(ulLinksTech);

    return wrapper;
}