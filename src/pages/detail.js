import '../styles/detail.scss';

import imgResource1Detail from "../assets/images/cat-70s_detail.webp";
import imgResource1DetailX2 from "../assets/images/cat-70s_detail_x2.webp";
import imgResource2Detail from "../assets/images/cat-80s_detail.webp";
import imgResource2DetailX2 from "../assets/images/cat-80s_detail_x2.webp";
import imgResource3Detail from "../assets/images/cat-00s_detail.webp";
import imgResource3DetailX2 from "../assets/images/cat-00s_detail_x2.webp";
import imgResource4Detail from "../assets/images/cat-10s_detail.webp";
import imgResource4DetailX2 from "../assets/images/cat-10s_detail_x2.webp";

import imgResource1Detail_2 from "../assets/images/cat-80s_detail.webp";
import imgResource1Detail_2X2 from "../assets/images/cat-80s_detail_x2.webp";
import imgResource2Detail_2 from "../assets/images/cat-00s_detail.webp";
import imgResource2Detail_2X2 from "../assets/images/cat-00s_detail_x2.webp";
import imgResource3Detail_2 from "../assets/images/cat-70s_detail.webp";
import imgResource3Detail_2X2 from "../assets/images/cat-70s_detail_x2.webp";
import imgResource4Detail_2 from "../assets/images/cat-70s_detail.webp";
import imgResource4Detail_2X2 from "../assets/images/cat-70s_detail_x2.webp";

import imgResourceCasco from "../assets/images/casco_x1.png";
import imgResourceCascoX2 from "../assets/images/casco_x2.png";

const cat1_info = {
    id: "catMainImg1",
    title: "De 1970 y principios de 1980",
    paragraphs : [
        "Stan Lee y Jack Kirby crearon a Iron Man en 1963, en plena guerra del Vietnam, aunque sus múltiples compromisos les obligaron a dejar el personaje en manos de Larry Lieber, hermano de Lee, y el eficaz dibujante Don Heck que usó a Errol Flynn como modelo de Tony Stark.",
        "Y Steve Ditko, el creador gráfico de Spiderman, rediseñó la armadura que, con sucesivas mejoras y modificaciones, ha llegado hasta nuestros días.",
        "Desde entonces el personaje ha atravesado etapas magníficas, como la del dibujante Gene Colan, y otras perfectamente olvidables, pero la mejor de todas fue la de finales de los 70 y principios de los 80 en la que David Micheline (Guionista), Bob Layton (co-argumentista y entintador) y John Romita Jr. (Dibujante) llevaron al personaje hasta cotas insospechadas, cautivando a los aficionados y acumulando premios."
    ],
    featuredTitle: "Titulos destacados de la epoca",
    featuredTitles: ["El demonio en una botella","Ejecutar programa", "Yo soy Iron man"],
    image: imgResource1Detail,
    image_2: imgResource1Detail_2,
    alt: "Imagen comic iron man decada de los 70s",
    alt_2: "Imagen comic iron man decada de los 80s",
    srcset: imgResource1Detail + " 600w, " + imgResource1DetailX2 + " 1200w",
    sizes: "(max-width: 550px) 90vw, (min-width: 551px) 45vw, 45vw",
    srcset_2: imgResource1Detail_2 + " 740w, " + imgResource1Detail_2X2 + " 1480w",
    sizes_2: "(max-width: 550px) 90vw, (min-width: 551px) 45vw, 45vw"
}

const cat2_info = {
    id: "catMainImg2",
    title: "Finales de 1980 y inicios de 1990",
    paragraphs : [
        "En un intento para impedir que otras personas hagan mal uso de sus diseños, Stark trata de deshabilitar a otros héroes y villanos blindados que están utilizando armaduras basadas en la tecnología de Iron Man, de los cuales sus diseños fueron robados por su enemigo Spymaster. Su búsqueda para destruir todas las instancias de la tecnología robada daña su reputación como Iron Man. Después de atacar y deshabilitar a una serie de villanos como Stilt-Man, él ataca y derrota al agente del gobierno conocido como Stingray. La situación empeora cuando Stark se da cuenta de que la armadura de Stingray no incorpora ninguno de sus diseños. Él despide públicamente a Iron Man mientras seguía secretamente su rutina. Él utiliza la coartada de querer ayudar a desactivar al renegado Iron Man para infiltrarse y desactivar las armaduras de los agentes de S.H.I.E.L.D. conocidos como los Mandroides, y también la armadura de los Guardias. En el proceso, Iron Man y Jim Rhodes permiten que escapen algunos de los villanos de la Bóveda. Esto lleva al gobierno de los Estados Unidos a declarar a Iron Man un peligro y un proscrito, y corrompe gravemente la relación de Stark con Steve Rogers (Capitán América, que estaba en su personalidad de 'Capitán' en ese momento). Iron Man viaja a Rusia, donde inadvertidamente provoca la muerte del soviético Hombre de Titanio durante una pelea. Al regresar a los Estados Unidos, se enfrenta a un enemigo encargado por el gobierno llamado Firepower. Incapaz de derrotarlo de frente, Stark falsifica la desaparición de Iron Man, con la intención de retirar el traje de forma permanente. Cuando Firepower se vuelve pícaro, Stark crea un nuevo traje, afirmando que una nueva persona está en la armadura.",
        "Poco después, Stark es casi asesinado por Kathy Dare, una ex amante mentalmente desequilibrada. Ella le dispara en el centro de su torso, lo que lastima su columna vertebral, paralizándolo.Stark se somete a una cirugía especial para que le implanten un chip nervioso en la columna vertebral para recuperar su movilidad. Desconocido para el industrial, el chip nervioso es un medio clandestino por el cual puede ganar control sobre su cuerpo. Los hombres de negocios rivales, gemelos Marrs y su cohorte Kearson DeWitt están detrás de las maquinaciones en lo que se conoció como 'Armor Wars II'. Después de varias pruebas exitosas de DeWitt para manipular a Stark, Tony descubre que usar su armadura de encéfalo puede contrarrestar los controles de DeWitt. En respuesta, DeWitt repentinamente libera su control, lo que resulta en una agonía insoportable en todo el cuerpo de Stark. La constante 'batalla' por el control del sistema nervioso de Stark y la subsiguiente abdicación en el extremo de DeWitt llevan a un daño masivo en los nervios de todo el cuerpo de Tony. El sistema nervioso de Stark continúa su deslizamiento hacia el fracaso, y construye una 'piel' formada por circuitos de nervios artificiales para ayudarlo. Stark comienza a pilotar una armadura de Iron Man a control remoto, pero cuando se enfrenta a los Maestros del Silencio, la demanda de telepresencia es inadecuada. Stark diseña una versión más armada del traje para usar, el 'Traje de batalla de respuesta de amenaza variable'. En última instancia, el daño a su sistema nervioso se vuelve demasiado extenso. Fingiendo su muerte, Stark se coloca en animación suspendida para curarse mientras Rhodes se hace cargo tanto de Stark Enterprises como del manto de Iron Man, aunque usa la armadura War Machine. Stark finalmente se recupera completamente al usar un chip para crear un sistema nervioso (artificial) y se reanuda como Iron Man en una nueva armadura de telepresencia. Cuando Rhodes se entera de que Stark ha manipulado a sus amigos fingiendo su propia muerte, se enfurece y los dos amigos se separan. Rhodes continúa como War Machine en una carrera en solitario.",
        "El argumento de 'La travesía/La encrucijada' nos muestra a Iron Man como un traidor entre los Vengadores, debido a que años antes Kang el Conquistador había logrado manipularlo mentalmente. Por órdenes de Kang, Stark, mata a Marilla, la niñera de Luna (la hija de Quicksilver y Crystal), así como a Rita DeMara, la Chaqueta Amarilla, y luego a Amanda Chaney, una aliada de los Vengadores. La serie limitada 'Avengers Forever' vuelve a considerar estos eventos como el trabajo de un Immortus disfrazado, no de Kang, y de que el control mental había retrocedido solo unos pocos meses.",
        "Necesitando ayuda para vencer a Stark y Kang, el equipo viaja en el tiempo para reclutar a un adolescente Anthony Stark de una línea de tiempo alternativa para ayudarlos. El joven Stark roba un traje de Iron Man para ayudar a los Vengadores contra su yo mayor. La vista de su yo más joven sorprende al mayor Stark lo suficiente como para que recupere el control momentáneo de sus acciones, y sacrifica su vida para detener a Kang. El joven Stark luego construye su propio traje para convertirse en el nuevo Iron Man y permanece en el presente.",
        "En la batalla contra la entidad Onslaught, Stark junto con muchos otros héroes, fallecieron. Los poderes de Franklin Richards le permitieron crear un universo alterno en Heroes Reborn en el que Stark es una vez más un héroe adulto; Franklin recrea a los héroes en el universo de bolsillo en las formas con las que está más familiarizado que en lo que son en el presente. El Stark adulto renacido, al regresar al Universo Marvel normal, se fusiona con el Stark original, que había muerto durante 'La travesía/La encrucijada' pero fue resucitado por Franklin Richards. Este nuevo Anthony Stark posee los recuerdos del original y el adolescente Anthony Stark, y, por lo tanto, se considera esencialmente ambos, recupera su fortuna y, con Stark Enterprises vendida a Fujikawa Corporation tras la muerte de Stark, crea una nueva compañía, Stark Solutions. Regresa del universo de bolsillo con un corazón restaurado y sano. Después de la reforma de los Vengadores, Stark exige que se convoque una audiencia para analizar sus acciones justo antes del incidente de Onslaught. Despejado de malas acciones, se reincorpora a los Vengadores."
    ],
    featuredTitle: "Titulos destacados de la epoca",
    featuredTitles: ["El gritop de la bestia","Stark Wars I", "Revelaciones", "Stark Wars Epilogo", "Duelo de hierro"],
    image: imgResource2Detail,
    image_2: imgResource2Detail_2,
    alt: "Imagen comic iron man decada de los 80s",
    alt_2: "Imagen comic iron man decada de los 00s",
    srcset: imgResource2Detail + " 740w, " + imgResource2DetailX2 + " 1480w",
    sizes: "(max-width: 550px) 90vw, (min-width: 551px) 45vw, 45vw",
    srcset_2: imgResource2Detail_2 + " 850w, " + imgResource2Detail_2X2 + " 1700w",
    sizes_2: "(max-width: 550px) 90vw, (min-width: 551px) 45vw, 45vw"
}

const cat3_info = {
    id: "catMainImg3",
    title: "Edad dorada año 2000 (UCM)",
    paragraphs : [
        "En un momento dado, la armadura de Stark se vuelve sensible a pesar de las cajas de seguridad para evitar que sus sistemas informáticos cada vez más sofisticados lo hagan. Inicialmente, Stark le da la bienvenida a esta armadura 'viva' por sus habilidades tácticas mejoradas. La armadura comienza a ser más agresiva, matando indiscriminada y eventualmente deseando reemplazar a Stark por completo. En la confrontación final en una isla desierta, Stark sufre otro ataque al corazón. La armadura sacrifica su propia existencia para salvar la vida de su creador, renunciando a componentes esenciales para darle a Stark un corazón nuevo y artificial. Este nuevo corazón resuelve los problemas de salud de Stark, pero no tiene una fuente de alimentación interna, por lo que Stark se vuelve una vez más dependiente de la recarga periódica. El incidente de la armadura sensible perturba tanto a Stark que vuelve temporalmente a usar una versión de modelo anterior poco sofisticada de su armadura para evitar un incidente repetido. Él incursiona con el uso de circuitos de metal líquido conocido como SKIN que se forma en una cubierta protectora alrededor de su cuerpo, pero eventualmente regresa a armaduras de metal duro más convencionales.",
        "Después de las acciones de los superhéroes inexpertos, los Nuevos Guerreros resultan en la destrucción de varias cuadras de la ciudad en Stamford, Connecticut, hay una protesta en todo Estados Unidos contra los superhumanos. Al conocer los planes propuestos por el gobierno, Tony Stark sugiere un nuevo plan para instigar una Ley de Registro de Superhumanos. La Ley obligaría a todas las personas con superpoderes en los EE. UU. a registrar su identidad con el gobierno y actuar como agentes autorizados. La Ley obligaría a los superhumanos inexpertos a recibir capacitación sobre cómo usar y controlar sus habilidades, algo en lo que Tony cree firmemente. Desde su lucha contra el alcoholismo, Stark ha cargado con una tremenda carga de culpa después de casi matar a un inocente espectador mientras pilotaba la armadura borracho. Mientras que Reed Richards y el Dr. Henry 'Hank' Pym están de acuerdo con la propuesta de Stark, no todos lo hacen. Después de que al Capitán América se le ordena que traiga a cualquiera que se niegue a registrarse, él y otros superhéroes anti-registro se deshacen, entrando en conflicto con los héroes pro-registro, liderados por Iron Man. La guerra termina cuando el Capitán América se rinde para evitar más daños colaterales y víctimas civiles, aunque él había derrotado a Stark al desactivar su armadura. Stark es nombrado nuevo director de S.H.I.E.L.D., y organiza un nuevo grupo de Vengadores aprobado por el gobierno. Poco después, el Capitán América es asesinado mientras se encuentra bajo custodia. Esto deja a Stark con una gran cantidad de culpa y dudas sobre el costo de su victoria. Luego en su funeral pronunció unas palabras, «nunca supuse que terminaría así». Después, Iron Man sabrá que el Capitán América será revivido en Captain América: Reborn.",
        "Para unirse al largometraje de Iron Man de 2008, Marvel lanzó una nueva serie en curso de Iron Man, The Invincible Iron Man, con el escritor Matt Fraction y el artista Salvador Larroca. La historia inaugural de la serie de seis partes fue 'Las cinco pesadillas', que vio a Stark como blanco de Ezekiel Stane, el hijo del antiguo némesis de Stark, Obadiah Stane. En esta historia, después de que Tony Stark sobrevive a un intento de Ultron para hacerse cargo de su cuerpo, Spider-Woman lo enfrenta en el hospital, sosteniendo el cadáver de un Skrull haciéndose pasar por Elektra. Al darse cuenta de que esto es el comienzo de una invasión de los Skrull, Tony revela el cadáver a los Illuminati y declara que están en guerra. Después de que Black Bolt se revela como un Skrull y es asesinado por Namor, un escuadrón de Skrulls atacó, obligando a Tony a evacuar a los otros miembros Illuminati y destruir el área, matando a todos los Skrulls. Al darse cuenta de que son incapaces de confiar entre sí, todos los miembros se separan para formar planes individuales para la invasión que se aproxima. Stark está desacreditado y públicamente vilipendiado por su incapacidad para anticipar o prevenir la infiltración e invasión secreta de la Tierra por parte de los Skrull, y por la desactivación de Skrull de su tecnología StarkTech, que tenía un virtual monopolio en la defensa mundial. Después de la invasión, el gobierno de los Estados Unidos lo destituye como jefe de S.H.I.E.L.D. y disuelve a los Vengadores, entregando el control de la Iniciativa a Norman Osborn.",
        "Al fallar sus poderes Extremis, Stark carga un virus para destruir todos los registros de la Ley de Registro, lo que evita que Osborn descubra las identidades de sus compañeros héroes y cualquier cosa que Osborn pueda usar, incluidos los generadores repulsores. La única copia de la base de datos se encuentra en el cerebro de Stark, que intenta eliminar mientras huye de Osborn. Stark va tan lejos como para infligirse daño cerebral a sí mismo con el fin de garantizar que la información relevante se borre. Cuando Osborn alcanza al debilitado Stark y lo golpea salvajemente, Pepper Potts transmite las palizas en todo el mundo, lo que le cuesta a Osborn la credibilidad y le da a Stark la compasión pública. Stark entra en un estado vegetativo, habiendo otorgado previamente a Donald Blake (alter ego del superhéroe Thor) poder notarial. Un mensaje holográfico almacenado en la armadura de Pepper revela que Stark había desarrollado un medio para 'reiniciar' su mente desde su estado actual antes de su destrucción de la base de datos, y Blake y Bucky decidieron usarla para restablecer la normalidad. Mientras tanto, Stark está atrapado en su subconsciente, donde los hechos de su propia mente le impiden regresar al mundo de vigilia. Cuando el procedimiento no funciona, Bucky llama al Doctor Strange, quien logra restaurar la conciencia de Stark. La copia de seguridad que Stark creó se realizó antes de la Guerra Civil y, como tal, no recuerda nada de lo que ocurrió durante el evento, aunque aún después de revisar sus acciones pasadas, concluye que no habría hecho nada diferente. Su daño cerebral significa que ahora depende de un reactor de arco para mantener las funciones autónomas de su cuerpo.",
    ],
    featuredTitle: "Titulos destacados de la epoca",
    featuredTitles: ["La Guerra Civil","Invasión Secreta", "Reinado Oscuro"],
    image: imgResource3Detail,
    image: imgResource3Detail_2,
    alt: "Imagen comic iron man decada de los 00s",
    alt_2: "Imagen comic iron man superior",
    srcset: imgResource3Detail + " 850w, " + imgResource3DetailX2 + " 1700w",
    sizes: "(max-width: 550px) 90vw, (min-width: 551px) 45vw, 45vw",
    srcset_2: imgResource3Detail_2 + " 600w, " + imgResource3Detail_2X2 + " 1200w",
    sizes_2: "(max-width: 550px) 90vw, (min-width: 551px) 45vw, 45vw"
}

const cat4_info = {
    id: "catMainImg4",
    title: "Iron Man Superior",
    paragraphs : [
        "En la historia 'Asedio', Tony Stark está bajo el cuidado del Dr. Donald Blake y Maria Hill, cuando Asgard es atacado. Thor es emboscado por Osborn y Sentry, pero rescatado por Hill. Osborn declara la ley marcial y libera a Daken y Sentry en Broxton para erradicar a Thor y Hill. Hill regresa al escondite de Stark para trasladarlo a un lugar más seguro y se les une Veloz de los Jóvenes Vengadores, que tiene un conjunto de armaduras MK III de Iron Man que Edwin Jarvis le había dado al Capitán América. Mientras Osborn está luchando contra los Nuevos Vengadores, Stark aparece y desactiva la armadura del Patriota de hierro de Osborn. Osborn le ordena a Sentry que aniquile a Asgard, en lugar de permitir que los Vengadores lo tengan. Después de que Asgard se cae, Stark se pone de pie junto a sus compañeros héroes, mientras Osborn exclama que todos están condenados y que él 'los estaba salvando de él' apuntando hacia un Vigía Sentry poseído. Mientras el Vacío desgarra a los equipos, Loki les da el poder de luchar a través de las Piedras Norn. El Vigía mata a Loki, enfureciendo a Thor. Tony le dice a Thor que retire el vacío de Asgard, lo que le permite dejar caer un helicóptero H.A.M.M.E.R. en el vacío. Thor se ve obligado a matar a Sentry cuando el Vigía reaparece. Algún tiempo después, se deroga la Ley de registro de superhumanos y se devuelve a Tony su compañía y su armadura. Como símbolo de sus actos heroicos y su nueva unidad, Thor coloca una torre asgardiana en la Torre Stark, donde una vez estuvo la Atalaya.",
        "En la historia de 'Fear Itself' de 2011, la Tierra es atacada por la Serpiente, el Dios del Miedo y el hermano olvidado de Odín. En París, Iron Man lucha contra Gárgola Gris, que se ha convertido en Mokk, Destructor de la Fe, uno de los Dignos de la Serpiente. Mokk deja a Iron Man inconsciente y transforma a Detroit Steel y a los ciudadanos de París en piedra. Para derrotar al ejército de la Serpiente, Tony bebe una botella de vino (por lo tanto, 'sacrificando' su sobriedad) para obtener una audiencia con Odín, quien le permite a Tony ingresar al reino de Svartalfheim. Tony y los enanos de Svartalfheim construyen armas encantadas. Tony mejora su armadura con encantamientos infundidos con uru y entrega las armas terminadas a los Vengadores, quienes las usan para la batalla final contra las fuerzas de la Serpiente. Iron Man observa mientras Thor mata a la Serpiente, pero muere en el proceso. Una vez que finaliza la batalla, Tony derrite las armas que creó y repara el escudo del Capitán América, que había sido roto por la Serpiente, y se lo devuelve al Capitán América. Durante una discusión posterior con Odín sobre la falta de participación de los dioses en la reciente crisis, Odín le da a Tony una breve oportunidad para ver la inmensidad del universo de la manera en que lo ve. Como agradecimiento por el papel de Tony en la reciente crisis, Odín restaura a todas las personas que mató la Gárgola Gris durante su alboroto.",
        "En la historia 'Demonio' y 'La larga caída', Stark es citado por el gobierno de los EE. UU. Después de que aparecieran evidencias de su uso de la armadura Iron Man mientras estaba bajo la influencia. Mandarín y Zeke Stane actualizan a algunos de los viejos enemigos de Iron Man y los envían a cometer actos de terrorismo en todo el mundo, con la intención de desacreditar a Iron Man. El general Bruce Babbage obliga a Stark a usar un gobernador tecnológico, un dispositivo que le permite a Babbage desactivar la armadura de Stark cuando quiera. Para defenderse, Tony se somete a un procedimiento quirúrgico que expulsa la tecnología Bleeding Edge de su cuerpo y reemplaza su nodo repulsor con un nuevo modelo, lo que obliga a Babbage a retirar al gobernador tecnológico de su pecho. Anuncia su retiro como Iron Man, fingiendo la muerte de Rhodes y dándole una nueva armadura para que se convierta en el nuevo Iron Man. Esto conduce a la siguiente historia, 'El Futuro', en la que el mandarín toma el control de la mente de Stark y lo utiliza para crear nuevos cuerpos blindados para los espíritus alienígenas que habitan en sus anillos, pero Stark se alía con algunos de sus viejos enemigos, que tienen También ha sido encarcelado por el mandarín, y logra derrotarlo. El último número de esta historia concluyó la serie de Matt Fraction.",
        "En la serie en curso que se estrenó en 2012 como parte del relanzamiento Marvel NOW!, Tony Stark ha alcanzado un techo tecnológico. Después de la muerte de la Dra. Maya Hansen y la destrucción de todos los kits de la versión 2 de Extremis que se vendían en el mercado negro, Tony decide que la Tierra no está segura sin que él sepa más de lo que está en la frontera final. Toma su nuevo traje, mejorado con una inteligencia artificial llamada P.E.P.P.E.R. y se une a Peter Quill y Los Guardianes de la Galaxia después de ayudar a frustrar un ataque Badoon en la Tierra."
    ],
    featuredTitle: "Titulos destacados de la epoca",
    featuredTitles: ["El regreso del Mandarín", "Marvel NOW!","El tiempo se agota", "Existiendo como una I.A."],
    image: imgResource4Detail,
    image: imgResource4Detail_2,
    alt: "Imagen comic iron man superior",
    alt_2: "Imagen comic iron man decada de los 70s",
    srcset: imgResource4Detail + " 245w, " + imgResource4DetailX2 + " 490w",
    sizes: "(max-width: 550px) 90vw, (min-width: 551px) 45vw, 45vw",
    srcset_2: imgResource4Detail_2 + " 600w, " + imgResource4Detail_2X2 + " 1200w",
    sizes_2: "(max-width: 550px) 90vw, (min-width: 551px) 45vw, 45vw"
}

export const detail = (category_id) => {
    const wrapper = document.createElement("section");
    wrapper.classList = "details";
    
    switch (category_id) {
        case 1:
            categoryDetail(wrapper, cat1_info)
            break;
        case 2:
            categoryDetail(wrapper, cat2_info)
            break;
        case 3:
            categoryDetail(wrapper, cat3_info)
            break;
        case 4:
            categoryDetail(wrapper, cat4_info)
            break;
        default:
            break;
    }
    return wrapper;
}

function categoryDetail(wrapper, cat_info) {
    const divTitle = document.createElement("div");
    divTitle.classList = "block-title";
    const titleH2 = document.createElement("h2");
    titleH2.innerText = cat_info.title;

    const imgCasco = document.createElement("img");
    imgCasco.setAttribute('id','casco');
    imgCasco.src = imgResourceCasco;
    imgCasco.alt = "Casco Iron Man";
    imgCasco.loading="lazy";
    divTitle.appendChild(imgCasco);
    divTitle.appendChild(titleH2);
    wrapper.appendChild(divTitle);

    cat_info.paragraphs.forEach(function (value) {
        let pCat = document.createElement("p");
        pCat.textContent = value;
        wrapper.appendChild(pCat);
    });

    const titleH3 = document.createElement("h3");
    titleH3.innerText = cat_info.featuredTitle;
    wrapper.appendChild(titleH3);

    const ul = document.createElement("ul");
    cat_info.featuredTitles.forEach(function (value) {
        let li = document.createElement("li");
        li.textContent = value;
        ul.appendChild(li);
    });

    wrapper.appendChild(ul);

    const divImg = document.createElement("div");
    divImg.classList = "block-img";
    const imgCat = document.createElement("img");
    imgCat.setAttribute('id',cat_info.id);
    imgCat.src = cat_info.image;
    imgCat.alt = cat_info.alt;
    imgCat.srcset = cat_info.srcset;
    imgCat.sizes = cat_info.sizes;
    imgCat.loading="lazy";

    const imgCat2 = document.createElement("img");
    imgCat2.setAttribute('id',cat_info.id+"_2");
    imgCat2.src = cat_info.image_2;
    imgCat2.alt = cat_info.alt_2;
    imgCat2.srcset = cat_info.srcset_2;
    imgCat2.sizes = cat_info.sizes_2;
    imgCat2.loading="lazy";

    divImg.appendChild(imgCat);
    divImg.appendChild(imgCat2);

    wrapper.appendChild(divImg);
}
