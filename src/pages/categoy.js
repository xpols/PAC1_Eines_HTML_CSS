import '../styles/category.css';
import imgResource1 from "../assets/images/cat-70s.jpeg";
import imgResource2 from "../assets/images/cat-80s.jpeg";
import imgResource3 from "../assets/images/cat-00s.jpeg";
import imgResource4 from "../assets/images/cat-10s.jpeg";
import { detail } from "./detail";

export const category = () => {
    const wrapper = document.createElement("section");
    wrapper.classList = "categories";
    const titleH2 = document.createElement("h2");
    titleH2.innerText = "PERIODOS";
    //70s
    const cat1 = document.createElement("article");
    cat1.setAttribute('id','cat1');
    cat1.classList = "category";
    const titleCat1 = document.createElement("h3");
    titleCat1.textContent = "De 1970 y principios de 1980";
    cat1.appendChild(titleCat1);
    const divCat1 = document.createElement("div");
    divCat1.classList = "cat-main";
    const imgCat1 = document.createElement("img");
    imgCat1.src = imgResource1;
    const divPCat1 = document.createElement("div");
    divPCat1.classList = "cat-text";
    const pCat1 = document.createElement("p");
    pCat1.textContent = "Más tarde, Stark expande los diseños de su armadura y empieza a construir su arsenal de armaduras especializadas para situaciones particulares como los viajes espaciales y el sigilo.Sin embargo, Stark también desarrolla una dependencia grave del alcohol, en la historia de 'Demon in a Bottle'.La primera vez que se convierte en un problema es cuando Stark descubre que S.H.I.E.L.D. ha estado comprando una participación mayoritaria en su compañía con el fin de garantizar el desarrollo continuo de armas de Stark para ellos. Al mismo tiempo, el empresario rival de Tony, Justin Hammer contrató a varios supervillanos para atacar a Stark. En un momento, la armadura de Iron Man es robada y utilizada para asesinar a un diplomático. Aunque Iron Man no está bajo sospecha, Stark se ve obligado a entregar sus armas a las autoridades. Finalmente Stark y Rhodes, que ahora es su piloto personal y confidente, localizan y derrotan a los responsables, a pesar de que Hammer volvería a acosar a Stark. Con el apoyo de su entonces novia, Bethany Cabe, sus amigos y sus empleados, Stark supera esta crisis y su dependencia del alcohol. Estos eventos fueron recolectados y publicados como Demon in a Bottle. Incluso mientras se recupera de este terrible juicio personal, la vida de Stark se complica aún más cuando tiene un enfrentamiento con el Doctor Doom, el cual es interrumpido por un enemigo oportunista, enviándolos al tiempo del Rey Arturo. Una vez allí, Iron Man frustra el intento de Doom para solicitar la ayuda de Morgan Le Fay, y el gobernante de Latveria jura una venganza mortal - la cual entregó poco después de la tregua necesaria para volver a su propio tiempo. Este incidente fue recolectado y publicado como Doomquest.";
    const aCat1 = document.createElement("a");
    aCat1.textContent = "Ver más [+]";
    divCat1.appendChild(imgCat1);
    divPCat1.appendChild(pCat1);
    divPCat1.appendChild(aCat1);
    divCat1.appendChild(divPCat1);
    cat1.appendChild(divCat1);

    //80s
    const cat2 = document.createElement("article");
    cat2.setAttribute('id','cat2');
    cat2.classList = "category";
    const titleCat2 = document.createElement("h3");
    titleCat2.textContent = "Finales de 1980 y 1990";
    cat2.appendChild(titleCat2);
    const divCat2 = document.createElement("div");
    divCat2.classList = "cat-main";
    const imgCat2 = document.createElement("img");
    imgCat2.src = imgResource2;
    const divPCat2 = document.createElement("div");
    divPCat2.classList = "cat-text";
    const pCat2 = document.createElement("p");
    pCat2.textContent = "En un intento para impedir que otras personas hagan mal uso de sus diseños, Stark trata de deshabilitar a otros héroes y villanos blindados que están utilizando armaduras basadas en la tecnología de Iron Man, de los cuales sus diseños fueron robados por su enemigo Spymaster. Su búsqueda para destruir todas las instancias de la tecnología robada daña su reputación como Iron Man. Después de atacar y deshabilitar a una serie de villanos como Stilt-Man, él ataca y derrota al agente del gobierno conocido como Stingray. La situación empeora cuando Stark se da cuenta de que la armadura de Stingray no incorpora ninguno de sus diseños. Él despide públicamente a Iron Man mientras seguía secretamente su rutina. Él utiliza la coartada de querer ayudar a desactivar al renegado Iron Man para infiltrarse y desactivar las armaduras de los agentes de S.H.I.E.L.D. conocidos como los Mandroides, y también la armadura de los Guardias. En el proceso, Iron Man y Jim Rhodes permiten que escapen algunos de los villanos de la Bóveda. Esto lleva al gobierno de los Estados Unidos a declarar a Iron Man un peligro y un proscrito, y corrompe gravemente la relación de Stark con Steve Rogers (Capitán América, que estaba en su personalidad de 'Capitán' en ese momento). Iron Man viaja a Rusia, donde inadvertidamente provoca la muerte del soviético Hombre de Titanio durante una pelea. Al regresar a los Estados Unidos, se enfrenta a un enemigo encargado por el gobierno llamado Firepower. Incapaz de derrotarlo de frente, Stark falsifica la desaparición de Iron Man, con la intención de retirar el traje de forma permanente. Cuando Firepower se vuelve pícaro, Stark crea un nuevo traje, afirmando que una nueva persona está en la armadura.";
    const aCat2 = document.createElement("a");
    aCat2.textContent = "Ver más [+]";
    divCat2.appendChild(imgCat2);
    divPCat2.appendChild(pCat2);
    divPCat2.appendChild(aCat2);
    divCat2.appendChild(divPCat2);
    cat2.appendChild(divCat2);

    //00s
    const cat3 = document.createElement("article");
    cat3.setAttribute('id','cat3');
    cat3.classList = "category";
    const titleCat3 = document.createElement("h3");
    titleCat3.textContent = "2000";
    cat3.appendChild(titleCat3);
    const divCat3 = document.createElement("div");
    divCat3.classList = "cat-main";
    const imgCat3 = document.createElement("img");
    imgCat3.src = imgResource3;
    const divPCat3 = document.createElement("div");
    divPCat3.classList = "cat-text";
    const pCat3 = document.createElement("p");
    pCat3.textContent = "En un momento dado, la armadura de Stark se vuelve sensible a pesar de las cajas de seguridad para evitar que sus sistemas informáticos cada vez más sofisticados lo hagan. Inicialmente, Stark le da la bienvenida a esta armadura 'viva' por sus habilidades tácticas mejoradas. La armadura comienza a ser más agresiva, matando indiscriminada y eventualmente deseando reemplazar a Stark por completo. En la confrontación final en una isla desierta, Stark sufre otro ataque al corazón. La armadura sacrifica su propia existencia para salvar la vida de su creador, renunciando a componentes esenciales para darle a Stark un corazón nuevo y artificial. Este nuevo corazón resuelve los problemas de salud de Stark, pero no tiene una fuente de alimentación interna, por lo que Stark se vuelve una vez más dependiente de la recarga periódica. El incidente de la armadura sensible perturba tanto a Stark que vuelve temporalmente a usar una versión de modelo anterior poco sofisticada de su armadura para evitar un incidente repetido. Él incursiona con el uso de circuitos de metal líquido conocido como SKIN que se forma en una cubierta protectora alrededor de su cuerpo, pero eventualmente regresa a armaduras de metal duro más convencionales.";
    const aCat3 = document.createElement("a");
    aCat3.textContent = "Ver más [+]";
    divCat3.appendChild(imgCat3);
    divPCat3.appendChild(pCat3);
    divPCat3.appendChild(aCat3);
    divCat3.appendChild(divPCat3);
    cat3.appendChild(divCat3);

    //10s
    const cat4 = document.createElement("article");
    cat4.setAttribute('id','cat4');
    cat4.classList = "category";
    const titleCat4 = document.createElement("h3");
    titleCat4.textContent = "Iron Man Superior";
    cat4.appendChild(titleCat4);
    const divCat4 = document.createElement("div");
    divCat4.classList = "cat-main";
    const imgCat4 = document.createElement("img");
    imgCat4.src = imgResource4;
    const divPCat4 = document.createElement("div");
    divPCat4.classList = "cat-text";
    const pCat4 = document.createElement("p");
    pCat4.textContent = "La personalidad de Tony Stark se invierte debido a los acontecimientos de AXIS, resaltando los aspectos más oscuros de sí mismo como la irresponsabilidad, el egoísmo y el alcoholismo. Stark se traslada a San Francisco y construye una nueva armadura completamente blanca. Suministra a los ciudadanos de San Francisco con la aplicación Extremis 3.0, una versión del virus tecnológico que ofrece belleza, salud e incluso inmortalidad, de forma gratuita. Cuando cada persona en la ciudad veía a Iron Man como un mesías por hacer realidad sus sueños, terminó el modo de prueba gratuita y comenzó a cobrar una tarifa diaria de $99.99, lo que hizo que muchos recurrieran a la delincuencia como forma de pagar la mejora. Daredevil se enfrenta a Stark en su nueva isla de Alcatraz ático, pero es fácilmente cepillado. Iron Man usa Extremis 3.0 para restaurar temporalmente la vista de Daredevil, solo para probar su punto. Daredevil deduce que Stark había agregado Extremis al suministro de agua y los teléfonos solo transmiten una señal de activación, pero Stark somete a Murdock a un daño cerebral menor para evitar que comparta esta revelación con otros. Después de descubrir que el nuevo villano Abominación Adolescente es el hijo de Happy Hogan, Stark decide ayudarlo, pero este acto menor de redención es demasiado tarde para Pepper Potts, quien ataca a Stark con la ayuda de una IA basada en la mente de Stark. Esto culmina en una confrontación entre los dos Starks, ya que Stark recurre a la ayuda involuntaria de todos los 'infectados' con la mejora de Extremis, mientras que la IA usa las varias armaduras antiguas de Stark para atacarlo. Aunque técnicamente Stark gana la batalla mientras destruye sus otras armaduras y elimina la copia de seguridad de AI, Pepper afirma que planea revelar la verdad sobre sus objetivos con Extremis, informándole sin rodeos que si continúa su proyecto de actualización de Extremis, tendrá que hacerlo solo, aceptando su destino de ser considerado como un monstruo por todos los que lo conocen.";
    const aCat4 = document.createElement("a");
    aCat4.textContent = "Ver más [+]";
    divCat4.appendChild(imgCat4);
    divPCat4.appendChild(pCat4);
    divPCat4.appendChild(aCat4);
    divCat4.appendChild(divPCat4);
    cat4.appendChild(divCat4);


    

    wrapper.appendChild(titleH2);
    wrapper.appendChild(cat1);
    wrapper.appendChild(cat2);
    wrapper.appendChild(cat3);
    wrapper.appendChild(cat4);

    initListener(aCat1, 1);
    initListener(aCat2, 2);
    initListener(aCat3, 3);
    initListener(aCat4, 4);

    return wrapper;
}

function initListener(el, category_id) {
    el.addEventListener("click", function() {
        let app = document.getElementById("app");
        app.innerHTML = "";
        app.appendChild(detail(category_id));
    }, false);
}
