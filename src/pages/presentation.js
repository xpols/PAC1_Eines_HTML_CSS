import '../styles/presentation.scss';

export const presentation = () => {
    const wrapper = document.createElement("section");
    wrapper.classList = "presentation";
    const p = document.createElement("p");
    const titleH2 = document.createElement("h2");
    titleH2.innerText = "PRESENTACIÓN";

    const p1 = document.createElement("p");
    p1.textContent = "Anthony Edward Stark, también conocido como Tony Stark', nació de dos agentes de S.H.I.E.L.D., Amanda Armstrong y Jude. Jude era un doble agente secreto de Hydra que no tenía en cuenta a nadie más que a sí mismo y que habitualmente vendía a sus compañeros de S.H.I.E.L.D. Estuvo a punto de provocar la muerte de Amanda a manos de un asesino. Sin embargo, se enamoró de Amanda antes de enviarla a la muerte y decidió salvarla. Después de este incidente se conocieron y comenzaron una relación. Dos años después, Amanda se quedó embarazada. Una semana antes de dar a luz al bebé, Jude decidió revelar su verdadera lealtad a Amanda y sus implicaciones en la oportuna intervención de Jude que salvó su vida. La discusión posterior se intensificó y Amanda mató a Jude.";

    const p2 = document.createElement("p");
    p2.textContent = "Traumatizada por este hecho, Amanda pidió a S.H.I.E.L.D. que se asegurara de que su futuro bebé encontrara un hogar seguro y feliz. Sin embargo, el director Nick Fury siguió el mismo procedimiento utilizado para los embarazos no deseados en la agencia, y el bebé fue dejado en un orfanato en Sofía, Bulgaria después de que Amanda lo diera a luz en un hospital local. El socio de Furia y famoso industrial Howard Stark se enteró de esto y decidió encontrar al bebé y adoptarlo, manteniendo el nombre que Amanda deseaba que conservara: Anthony.";

    const divIframeV1 = document.createElement("div");
    divIframeV1.classList = "iframeVideo";
    const iframeV1 = document.createElement("iframe");
    iframeV1.width = 560;
    iframeV1.height = 315;
    iframeV1.src = "https://www.youtube.com/embed/RLiO7pt8MbU";
    iframeV1.title="YouTube video player";
    iframeV1.frameborder="0";
    iframeV1.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    
    divIframeV1.appendChild(iframeV1);

    const p3 = document.createElement("p");
    p3.textContent = "Además de que Howard y su esposa Maria sufrieran la incapacidad de esta última para volver a dar a luz, necesitaban encontrar un niño sano que actuara como señuelo en lugar de su primogénito secreto, Arno Stark. La gestación de Arno había sido extremadamente difícil, y su nacimiento sólo fue posible con la ayuda de un robot alienígena, el Rigellian Recorder. 451, que había accedido a ayudar al bebé a sobrevivir a cambio de la oportunidad de bioingeniería, para poder acelerar el crecimiento tecnológico de la humanidad en el futuro.";

    const p4 = document.createElement("p");
    p4.textContent = "Sin embargo, mientras 451 modificaba genéticamente al bebé en el vientre materno, Howard había descubierto que el robot escondía una especie de interruptor de muerte, que comprometería la vida de su hijo en el futuro, por lo que Stark desarrolló un 'biococktail' para interferir con él a espaldas de 451. Una vez nacido Arno, 451 abandonó la Tierra. En un giro de los acontecimientos, la interferencia de Howard en las maquinaciones de 451 hizo que el recién nacido enfermara mortalmente. Los Stark decidieron mantener al bebé oculto en la Fundación María Stark Hospice. Además de llenar el vacío dejado por la enfermedad mortal de Arno, la adopción por parte de Tony evitaría que 451 se enterara de la intromisión de Howard si alguna vez volvía a la Tierra.";

    const divIframeV2 = document.createElement("div");
    divIframeV2.classList = "iframeVideo";
    const iframeV2 = document.createElement("iframe");
    iframeV2.width = 560;
    iframeV2.height = 315;
    iframeV2.src = "https://www.youtube.com/embed/qO8tZiX4U8A";
    iframeV2.title="YouTube video player";
    iframeV2.frameborder="0";
    iframeV2.allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";
    
    divIframeV2.appendChild(iframeV2);

    const p5 = document.createElement("p");
    p5.textContent = "Tony creció sin saber de la existencia de Arno ni de que era adoptado. Aunque era amado incondicionalmente por María, Tony sufría de una relación tensa con su padre, tanto por el contraste de la naturaleza sensible y reclusa de Tony con la glorificación de las proezas físicas por parte de Howard, como por los hábitos de consumo de alcohol cada vez mayores de Howard, que le hacían abusar verbalmente de Tony y sufrir cambios de humor. Este último factor hizo que Tony recurriera a la electrónica como mecanismo de supervivencia con apenas cinco años, ya que empezó a creer que el hardware era comprensible y fiable, mientras que las personas eran imprevisibles y difíciles de entender. El mundo de Tony no encontraba orden, pero las cosas que construía sí lo hacían.";

    const p6 = document.createElement("p");
    p6.textContent = "Para endurecer a su hijo, Howard envió a Tony a un internado a la edad de siete años, para consternación de María. En los años siguientes, Tony aprendió de la disciplina del cuerpo y de la fuerza del carácter como pretendía Howard, mientras pasaba su tiempo libre leyendo solo. A los trece años, las historias de las leyendas artúricas le abrieron a Tony las puertas de un nuevo mundo de dedicación a una causa mayor que uno mismo, de caballerosidad, honor y héroes con armadura.";
    
    wrapper.appendChild(titleH2);
    wrapper.appendChild(p1);
    wrapper.appendChild(p2);
    wrapper.appendChild(divIframeV1);
    wrapper.appendChild(p3);
    wrapper.appendChild(p4);
    wrapper.appendChild(divIframeV2);
    wrapper.appendChild(p5);
    wrapper.appendChild(p6);


    return wrapper;
}