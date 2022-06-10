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
    divIframeV1.innerHTML = '<svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 1080 1080" style="enable-background:new 0 0 1080 1080;" xml:space="preserve"><g><path id="interior" d="M540.02,230.71c-170.82,0-309.31,138.49-309.31,309.31c0,170.78,138.49,309.27,309.31,309.27c170.78,0,309.27-138.49,309.27-309.27C849.29,369.2,710.8,230.71,540.02,230.71z M773.03,359.95H635.06l20.91-90.69C702.34,289.1,742.59,320.57,773.03,359.95z M547.97,793.15v-96.38l122.2-214.35l103.26-54.48c8.82-4.66,18.11,5.3,12.93,13.76L567.73,798.73C562.12,807.9,547.97,803.9,547.97,793.15z M307.17,427.94l103.26,54.48l122.2,214.35v96.38c0,10.75-14.15,14.75-19.77,5.57L294.24,441.7C289.06,433.24,298.35,423.28,307.17,427.94z M333.34,378.84h415.57c11.82,0,16.68,15.1,7.12,21.98l-87.61,63.25H420.39l-93.81-63.02C316.62,394.38,321.36,378.84,333.34,378.84z M530.69,603.98c0-4.39,2.41-8.18,5.93-10.2l-36.65-63.53c-1.74,0.99-3.76,1.62-5.89,1.62c-6.52,0-11.82-5.3-11.82-11.82c0-6.52,5.3-11.82,11.82-11.82c6.52,0,11.82,5.3,11.82,11.82h73.26c0-6.52,5.3-11.82,11.82-11.82c6.52,0,11.82,5.3,11.82,11.82c0,6.52-5.3,11.82-11.82,11.82c-2.17,0-4.15-0.63-5.89-1.62l-36.69,63.53c3.52,2.02,5.93,5.81,5.93,10.2c0,6.52-5.3,11.82-11.82,11.82C535.99,615.81,530.69,610.51,530.69,603.98z M534.41,245.54c21.82-0.4,43.13,1.58,63.65,5.69l-14.67,108.72H501.2l-10.91-110.22C504.68,247.24,519.42,245.81,534.41,245.54z M428.38,267.6l16.92,92.35H307.41C338.79,319.5,380.46,287.4,428.38,267.6z M245.54,534.41c0.63-33.56,6.96-65.78,18.07-95.75l68.71,116.82l-83.26,30.36C246.41,569.12,245.22,551.92,245.54,534.41z M264.04,643.04l92.39-46.65l43.84,74.52l-84.52,59.97C293.77,705.07,276.13,675.42,264.04,643.04z M361.65,774.33l67.76-53.84l65.03,110.5C445.02,823.32,399.72,803.35,361.65,774.33z M585.6,830.95l66.46-112.99l65.7,56.37C679.77,803.31,634.66,823.28,585.6,830.95z M761.8,733.18h-0.04l-83.22-60.21l42.93-72.94l93.22,45.86C802.2,678.07,784.14,707.56,761.8,733.18z M749.23,552.87l67.29-114.41c12.26,33.29,18.66,69.42,17.95,107.14c-0.24,13.64-1.46,27.08-3.56,40.24L749.23,552.87z"/><path id="exterior" d="M540.02,161.13c-209.25,0-378.89,169.64-378.89,378.89c0,209.21,169.64,378.85,378.89,378.85c209.21,0,378.85-169.64,378.85-378.85C918.87,330.77,749.23,161.13,540.02,161.13z M540.02,868.3c-181.34,0-328.32-146.99-328.32-328.29c0-181.34,146.99-328.32,328.32-328.32c181.3,0,328.29,146.99,328.29,328.32C868.3,721.32,721.32,868.3,540.02,868.3z"/></g></svg>';

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
    iframeV2.loading="lazy";
    
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