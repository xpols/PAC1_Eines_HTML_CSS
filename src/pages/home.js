import '../styles/home.scss';

import imgResourceI from "../assets/images/I.webp";
import imgResourceR from "../assets/images/R.webp";
import imgResourceO from "../assets/images/O.webp";
import imgResourceN from "../assets/images/N.webp";


import imgResourcePicture1 from "../assets/images/picture-iron-man-detaill.webp";
import imgResourcePicture2 from "../assets/images/picture-iron-man-big.webp";

export const home = () => {
    const wrapper = document.createElement("section");
    wrapper.classList = "home";
    const heroe = document.createElement("div");
    heroe.classList = "heroe-home";
    const titleH2 = document.createElement("h2");
    titleH2.innerText = "Biografia";

    heroe.appendChild(titleH2);
    
    wrapper.appendChild(heroe);

    const p1 = document.createElement("p");
    p1.classList = "margin-top";
    const p2 = document.createElement("p");
    const p3 = document.createElement("p");
    const p4 = document.createElement("p");
    p1.innerText = "Anthony Edward Stark es el hijo del jefe de Industrias Stark, Howard Stark y su esposa Maria Stark. Un niño genio que ingresa al MIT a la edad de 15 años para estudiar ingeniería eléctrica (cabe recalcar que es ingeniero eléctrico según su origen en el comic más no ingeniero mecánico como se lo suele asociar usualmente), luego recibe maestrías en ingeniería eléctrica y física. Después de que sus padres mueren en un accidente automovilístico, hereda la compañía de su padre.";
    p2.innerText = "Mientras observaba los efectos de su tecnología experimental en el esfuerzo bélico estadounidense, Tony Stark es herido por una bomba y capturado por Wong-Chu, quien le ordena diseñar armas. Sin embargo, las lesiones de Stark son graves y la metralla se dirige a su corazón. Su compañero prisionero, Ho Yinsen, un físico ganador del Premio Nobel, cuyo trabajo se había ganado la admiración de Stark en el colegio, construye una placa pectoral magnética para evitar que la metralla alcance el corazón de Stark, manteniéndolo vivo. En secreto, Stark y Yinsen utilizan el taller para diseñar y construir una armadura de poder, la cual utiliza Stark para escapar. Sin embargo, durante el escape, Yinsen sacrifica su vida para salvar a Stark, distrayendo al enemigo para que Tony recargara. Stark se venga de sus secuestradores y escapa para reunirse con las fuerzas estadounidenses, conociendo en su camino a un piloto herido de la marina estadounidense, James 'Rhodey' Rhodes.";
    p3.innerText = "De vuelta a casa, Stark descubre que el fragmento de metralla alojado en su pecho no se puede quitar sin matarlo, y él se ve obligado a utilizar la placa del pecho debajo de la ropa para actuar como un regulador para su corazón. También tiene que recargar la placa todos los días o de lo contrario corre el riesgo de que la metralla lo mate. La portada para Iron Man dice que él es el guardaespaldas de Stark y la mascota de su empresa. Con ese fin, Iron Man lucha contra las amenazas a su empresa, (como la oponente comunista Natasha Romanoff, el Dínamo Carmesí y el Hombre de Titanio), así como villanos independientes como el Mandarín, quien finalmente se convertiría en su peor enemigo. Nadie sospecha de que Stark es Iron Man, ya que cultiva su imagen como un millonario y empresario. Dos miembros notables del reparto de la serie, en este punto, son su chófer personal Harold 'Happy' Hogan, y su secretaria Virginia 'Pepper' Potts, a quienes finalmente les revela su identidad secreta. Mientras tanto, James Rhodes encuentra su propio lugar como el piloto personal de Stark, revelándose como un hombre de extraordinaria habilidad y audaz por derecho propio.";
    p4.innerText = "El cómic tuvo una postura anticomunista en sus primeros años, que se suavizó conforme subió la oposición a la Guerra de Vietnam.6​Este cambio evolucionó en una serie de historias en las que Stark reconsidera sus opiniones políticas y la moralidad de la fabricación de armas para el ejército estadounidense. Stark se muestra a sí mismo como arrogante de vez en cuando, y dispuesto a actuar sin ética para 'dejar que los fines justifiquen los medios'. Esto lleva a conflictos personales con las personas que lo rodean, tanto en sus identidades civiles como de superhéroes. Stark usa su gran fortuna personal no solo para equipar su propia armadura, sino también para desarrollar armas para S.H.I.E.L.D.; otras tecnologías (por ejemplo, Quinjets utilizados por los Vengadores); y los inductores de imagen utilizados por los X-Men. Finalmente, la afección cardíaca de Stark se resuelve con un trasplante artificial de corazón.";

    wrapper.appendChild(p1);
    wrapper.appendChild(p2);

    const picture = document.createElement("picture");
    const source1 = document.createElement("source");
    source1.media = "(max-width: 550px)";
    source1.srcset = imgResourcePicture1;
    const source2 = document.createElement("source");
    source2.media = "(min-width: 551px)";
    source2.srcset = imgResourcePicture2;
    picture.appendChild(source1);
    picture.appendChild(source2);
    const imgPicture = document.createElement("img");
    imgPicture.classList = "imgPicture";
    imgPicture.src = imgResourcePicture2;
    imgPicture.alt = "diagrama IronMan";
    imgPicture.loading="lazy";
    imgPicture.style.height = "759px";
    imgPicture.style.width = "1350px";
    picture.appendChild(imgPicture);
    wrapper.appendChild(picture);

    wrapper.appendChild(p3);
    wrapper.appendChild(p4);

    const ironClip = document.createElement("div");
    ironClip.classList = "iron-clip";

    const imgI = document.createElement("img");
    imgI.classList = "imgI";
    imgI.src = imgResourceI;
    imgI.alt = "Fotografia armadura IronMan recortada en forma de I";
    imgI.loading="lazy";

    ironClip.appendChild(imgI);

    const imgR = document.createElement("img");
    imgR.classList = "imgR";
    imgR.src = imgResourceR;
    imgR.alt = "Dibujo casco IronMan recortado en forma de R";
    imgR.loading="lazy";

    ironClip.appendChild(imgR);

    const imgO = document.createElement("img");
    imgO.classList = "imgO";
    imgO.src = imgResourceO;
    imgO.alt = "Fotografia reactor ARC recortada en forma de O";
    imgO.loading="lazy";

    ironClip.appendChild(imgO);

    const imgN = document.createElement("img");
    imgN.classList = "imgN";
    imgN.src = imgResourceN;
    imgR.alt = "Dibujo armaduro IronMan recortado en forma de N";
    imgR.loading="lazy";

    ironClip.appendChild(imgN);

    wrapper.appendChild(ironClip);

    return wrapper;
}