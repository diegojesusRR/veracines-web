-- Generado por scripts/generate-seed-sql.ts a partir de src/consts. No editar a mano.
-- 2 cines, 96 películas, 24 programaciones.

begin;

do $$
begin
    if exists (select 1 from public.programaciones) then
        raise exception 'programaciones ya tiene datos: este seed solo se aplica sobre tablas vacías';
    end if;
end $$;

insert into public.cines (id, nombre, corto, color, imagen, telefono, hora_fija_proyeccion, venta_online, url_venta_online, direccion, descripcion, ciudad, provincia, codigo_postal, pais, maps_embed_key, temporada_inicio, temporada_fin, dias_semana, hora_apertura, hora_cierre, orden) values
    ('vera', 'Cine Terraza de Verano de Vera', 'Vera', 'primary', 'https://www.veracines.es/img/veracines-logo.png', '+34660391365', '22:00', false, null, 'C. Antonio de Torres, 2, 04620 Vera, Almería', 'Situado junto al colegio Reyes Católicos, en la calle Antonio de Torres, el cine de verano de Vera es un lugar ideal para disfrutar de una película al aire libre en Vera.', 'Vera', 'Almería', '04620', 'ES', '!1m18!1m12!1m3!1d6352.183416503645!2d-1.8651944235623443!3d37.24553154246919!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7ad505dc0deb95%3A0x20c4e16b3ec9e8ba!2sCine%20de%20Vera!5e0!3m2!1ses!2ses!4v1715622722058!5m2!1ses!2ses', '06-23', '09-10', array['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']::text[], '21:00', '00:30', 0),
    ('regio', 'Cine Regio de Vera', 'Regio', 'secondary', 'https://www.veracines.es/img/veracines-logo.png', '+34660391365', null, true, 'https://kinetike.com:83/views/init.aspx?cine=REGIO', 'C. Radio Nacional, s/n, 04620 Vera, Almería', 'Situado en pleno centro de Vera, junto a la Plaza Mayor, en Cine Regio de Ver podrás disfrutar de las mejores películas durante todo el año en un ambiente único.', 'Vera', 'Almería', '04620', 'ES', '!1m18!1m12!1m3!1d3176.0496114881794!2d-1.8706054238921004!3d37.24653037212324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd7ad503b6424b21%3A0xb294666e35a7e06c!2sC.%20Radio%20Nacional%2C%20s%2Fn%2C%2004620%20Vera%2C%20Almer%C3%ADa!5e0!3m2!1ses!2ses!4v1716051070703!5m2!1ses!2ses', '10-01', '05-01', array['Friday', 'Saturday', 'Sunday']::text[], '17:30', '22:30', 1)
on conflict (id) do update set
    nombre = excluded.nombre,
    corto = excluded.corto,
    color = excluded.color,
    imagen = excluded.imagen,
    telefono = excluded.telefono,
    hora_fija_proyeccion = excluded.hora_fija_proyeccion,
    venta_online = excluded.venta_online,
    url_venta_online = excluded.url_venta_online,
    direccion = excluded.direccion,
    descripcion = excluded.descripcion,
    ciudad = excluded.ciudad,
    provincia = excluded.provincia,
    codigo_postal = excluded.codigo_postal,
    pais = excluded.pais,
    maps_embed_key = excluded.maps_embed_key,
    temporada_inicio = excluded.temporada_inicio,
    temporada_fin = excluded.temporada_fin,
    dias_semana = excluded.dias_semana,
    hora_apertura = excluded.hora_apertura,
    hora_cierre = excluded.hora_cierre,
    orden = excluded.orden;

insert into public.peliculas (id, nombre, descripcion, imagen, edad_recomendada, video_url) values
    ('el-reino-del-planeta-de-los-simios', 'El reino del planeta de los simios', 'Ambientada varias generaciones en el futuro tras el reinado de César, en la que los simios son la especie dominante que vive en armonía y los humanos se han visto reducidos a vivir en la sombra. Mientras un nuevo y tiránico líder simio construye su imperio, un joven simio emprende un angustioso viaje que le llevará a cuestionarse todo lo que sabe sobre el pasado y a tomar decisiones que definirán el futuro de simios y humanos por igual. ', 'el-reino-del-planeta-de-los-simios.jpeg', 'No recomendada menores 12 años', 'https://www.youtube.com/embed/fWWrW_VLjws'),
    ('un-lugar-tranquilo-dia-1', 'Un Lugar Tranquilo: Dia 1', 'Una mujer llamada Sam trata de sobrevivir a una invasión en la ciudad de Nueva York por criaturas alienígenas sedientas de sangre con oídos ultrasónicos. Tercera entrega de la saga.', 'un-lugar-tranquilo-dia-1.jpeg', 'Pendiente de Calificación', 'https://www.youtube.com/embed/G0HL9dFjm5E'),
    ('gru-4-mi-villano-favorito', 'Gru 4. Mi villano favorito', 'Gru, Lucy y las niñas -Margo, Edith y Agnes- dan la bienvenida a un nuevo miembro en la familia: Gru Junior, que parece llegar con el propósito de ser un suplicio para su padre. Gru tendrá que enfrentarse en esta ocasión a su nueva némesis Maxime Le Mal y su sofisticada y malévola novia Valentina, lo que obligará a la familia a tener que darse a la fuga. Cuarta entrega de ''Gru, mi villano favorito''.', 'gru-4-mi-villano-favorito.jpeg', 'Todos los públicos', 'https://www.youtube.com/embed/zUFt9_WOoPc'),
    ('bad-boys-ride-or-die', 'Bad Boys: Ride or Die', 'Los policías más famosos del mundo regresan con su icónica mezcla de acción al límite y comedia escandalosa, pero esta vez con un giro inesperado: ¡Los mejores de Miami se dan a la fuga! Cuarta entrega de la saga ''Dos policías rebeldes''.', 'bad-boys-ride-or-die.jpeg', 'No recomendada menores 16 años', 'https://www.youtube.com/embed/LOZqqEXURzg'),
    ('inside-out-2', 'Inside Out 2', 'Secuela de ''Del revés (Inside Out)''. Riley tiene ahora 17 años y ha dejado de ser la niña de la película original. La historia se centrará en las emociones de un nuevo personaje, una niña de 12 años llamada Riley Anderson, que vive en Minnesota y que está pasando por un momento difícil en su vida.', 'inside-out-2.webp', 'Todos los públicos', 'https://www.youtube.com/embed/ahogVfXzqs4'),
    ('fly-by-the-moon', 'Fly by the Moon', 'Ambientada en el histórico alunizaje del Apolo 11, en 1969. Llamados para mejorar la imagen pública de la NASA, las chispas vuelan en todas las direcciones cuando la prodigio del marketing Kelly Jones (Johansson) causa estragos en la ya difícil tarea del director del lanzamiento Cole Davis (Tatum). Cuando la Casa Blanca considera que la misión es demasiado importante para fracasar, Jones recibe la orden de simular un alunizaje falso como respaldo, comenzando la verdadera cuenta atrás...', 'fly-by-the-moon.jpg', 'No recomendada menores 12 años', 'https://www.youtube.com/embed/2Myr0oKRPUU'),
    ('padre-no-hay-mas-que-uno-4', 'Padre no hay más que uno 4', '¿Qué efecto tendría en unos padres que el mismo día que su hija mayor cumple 18 años su novio le proponga matrimonio y ella acepte de inmediato?', 'padre-no-hay-mas-que-uno-4.webp', 'Todos los públicos', 'https://www.youtube.com/embed/dPsUo_D-iO4'),
    ('twisters', 'Twisters', 'Una actualización de la película de 1996 ''Twister'', centrada en un par de cazadores de tormentas que arriesgan sus vidas en un intento de probar un sistema experimental de alerta meteorológica.', 'twisters.jpeg', 'No recomendada menores 12 años', 'https://www.youtube.com/embed/gUBCmS1H8O4'),
    ('garfield', 'Garfield: La Pelicula', 'El mundialmente famoso Garfield, el gato casero que odia los lunes y que adora la lasaña, está a punto de vivir una aventura ¡en el salvaje mundo exterior! Tras una inesperada reunión con su largamente perdido padre –el desaliñado gato callejero Vic– Garfield y su amigo canino Odie se ven forzados a abandonar sus perfectas y consentidas vidas al unirse a Vic en un hilarante y muy arriesgado atraco.', 'garfield.jpeg', 'Todos los públicos', 'https://www.youtube.com/embed/w5OVkrlQdxg'),
    ('deadpool-y-lobezno', 'Deadpool y Lobezno', 'Tercera entrega de la saga "Deadpool", ahora integrada en el Universo Cinematográfico de Marvel (MCU) pero manteniendo su enfoque para adultos, con calificación R. En septiembre de 2022 se confirmó la aparición de Hugh Jackman como Lobezno, por primera vez desde "Logan".', 'deadpool-y-lobezno.jpeg', 'No recomendada menores 16 años', 'https://www.youtube.com/embed/tTM5weeCFvQ'),
    ('cuerpo-escombro', 'Cuerpo Escombro', 'Ante los problemas para encontrar trabajo y liado por su hermano Fermín, Javi se hace pasar por discapacitado para conseguir un puesto que necesita desesperadamente. Pero fingir parálisis cerebral es más complicado de lo que parece, sobre todo cuando se enamora de su jefa.', 'cuerpo-escombro.jpg', 'No recomendada menores 7 años', 'https://www.youtube.com/embed/l-W4M9QrhS8'),
    ('la-trampa', 'La Trampa', 'Un padre y su hija adolescente asisten a un concierto de música pop, donde se dan cuenta de que están en el centro de un oscuro y siniestro suceso.', 'la-trampa.jpg', 'No recomendada menores 12 años', 'https://www.youtube.com/embed/v7BpWoDJDaI'),
    ('buffalo-kids', 'Buffalo Kids', 'Tom y Mary, dos hermanos huérfanos, desembarcan en Nueva York a finales del siglo XIX. Para reunirse con su tío, se aventuran como polizones en un tren por el Salvaje Oeste donde conocerán a Nick, un nuevo y extraordinario amigo que cambiará sus vidas para siempre. Juntos se embarcarán en un peligroso viaje, enfrentándose a malvados villanos, haciendo inesperados amigos y viviendo situaciones únicas.', 'buffalo-kids.jpg', 'Todos los públicos', 'https://www.youtube.com/embed/JyEU5-a4G44'),
    ('parpadea-dos-veces', 'Parpadea dos veces', 'Cuando el magnate de la tecnología Slater King (Channing Tatum) conoce a la camarera Frida (Naomi Ackie) en su gala de recaudación de fondos, saltan chispas. Él la invita a acompañarle a él y a sus amigos a unas vacaciones de ensueño en su isla privada. Un auténtico paraíso. Las noches salvajes se mezclan con mañanas bañadas por el sol y todo el mundo se lo pasa en grande. Nadie quiere que el viaje termine, pero cuando empiezan a suceder cosas extrañas, Frida intuye que algo anda mal en ese lugar. Tendrá que descubrir la verdad si quiere salir viva de la fiesta.', 'parpadea-dos-veces.jpg', 'Pendiente de calificación', 'https://www.youtube.com/embed/5yZOzi5h54U'),
    ('odio-el-verano', 'Odio el verano', 'Alonso (barrendero; Roberto Álamo) y Marisa (tarotista; Malena Alterio), Torres y Fátima (propietarios de una charcutería; Jordi Sánchez y María Botto) y Calatrava (cirujano estético; Julián López) y Vicky (influencer; Kira Miró) han reservado una casa aislada en Canarias para pasar las mejores vacaciones de su vida con sus respectivas familias. Lo que no saben es que, por un error de la agencia, han alquilado la misma casa. Ninguno está dispuesto a renunciar a ella y tampoco hay muchas alternativas, por lo que se ven obligados a compartir habitáculo durante todas sus vacaciones. Las patentes diferencias entre cada uno de sus miembros convierten esos días en un caótico cúmulo de divertidas y desmadradas situaciones. A pesar de ello, tienen que aprender a convivir y comprender a toda esa gente tan distinta... Y a ellos mismos.', 'odio-el-verano.jpg', 'No recomendada menores 12 años', 'https://www.youtube.com/embed/eNkDXNfmzzs'),
    ('romper-el-circulo', 'Romper el círculo', 'Lily Bloom (Blake Lively) es una mujer que se sobrepone a una infancia traumática para embarcarse en una nueva vida en Boston y perseguir su sueño de abrir su propio negocio. Un encuentro casual con el encantador neurocirujano Ryle Kincaid (Justin Baldoni) desata una intensa conexión entre ellos, pero al tiempo que ambos se enamoran profundamente, Lily comienza a ver en Ryle aspectos que le recuerdan la relación que tenían sus padres. Cuando el primer amor de Lily, Atlas Corrigan (Brandon Sklenar), repentinamente reaparece en su vida, su relación con Ryle da un vuelco, y Lily se da cuenta de que debe aprender a confiar en su propia fuerza para tomar una difícil elección para su futuro.', 'romper-el-circulo.jpg', 'No recomendada menores 12 años', 'https://www.youtube.com/embed/aT_IzP2eJaU'),
    ('alien-romulus', 'Alien: Romulus', 'Mientras rebuscan en las profundidades de una estación espacial abandonada, un grupo de jóvenes colonizadores del espacio se encuentra cara a cara con la forma de vida más aterradora del universo.', 'alien-romulus.jpg', 'No recomendada menores 16 años', 'https://www.youtube.com/embed/HCjuv9STNps'),
    ('gladiator-2', 'Gladiator II', 'Años después de presenciar la muerte del admirado héroe Máximo a manos de su tío, Lucio (Paul Mescal) se ve forzado a entrar en el Coliseo tras ser testigo de la conquista de su hogar por parte de los tiránicos emperadores que dirigen Roma con puño de hierro. Con un corazón desbordante de furia y el futuro del imperio en juego, Lucio debe rememorar su pasado en busca de la fuerza y el honor que devuelvan al pueblo la gloria perdida de Roma.', 'gladiator-2.jpg', 'No recomendada menores 12 años', 'https://www.youtube.com/embed/HCjuv9STNps'),
    ('wicked', 'Wicked', 'La historia de cómo una mujer de piel verde esmeralda se convierte en la Malvada Bruja del Oeste; largometraje basado en el musical de Broadway.', 'wicked.jpg', 'No recomendada menores 7 años', 'https://www.youtube.com/embed/UNHQgy3jawI'),
    ('la-infiltrada', 'La infiltrada', 'Basada en la historia real de Aranzazu Berradre Marín, pseudónimo con el que se infiltró una agente de la Policía nacional en la banda terrorista ETA, durante 8 años. Cuando contaba apenas 20 años, la joven consiguió adentrarse en la izquierda abertzale, siendo la única mujer que convivió en un piso con dirigentes de ETA. Durante su infiltración se vio obligada a cortar totalmente lazos familiares, todo para poder desarticular el comando Donosti en un momento crucial en el que la banda declaraba falsamente estar en tregua. Es la historia de una mujer valiente, que cambió su vida para intentar salvar la de otros.
', 'la-infiltrada.jpg', 'No recomendada menores 12 años', 'https://www.youtube.com/embed/_eAYhtaEQGM'),
    ('vaiana-2', 'Vaiana 2', 'Tras recibir una inesperada llamada de sus antepasados, Vaiana debe viajar a los lejanos mares de Oceanía y adentrarse en peligrosas aguas perdidas para vivir una aventura sin precedentes. Secuela de "Vaiana".
', 'vaiana-2.jpeg', 'Todos los públicos', 'https://www.youtube.com/embed/O5lPAcMEKvE'),
    ('mufasa', 'Mufasa: El Rey León', 'Rafiki debe transmitir la leyenda de Mufasa a la joven cachorro de león Kiara, hija de Simba y Nala, con Timón y Pumba aportando su estilo característico. La historia se cuenta en flashbacks y presenta a Mufasa como un cachorro huérfano, perdido y solo hasta que conoce a un simpático león llamado Taka, heredero de un linaje real. Este encuentro casual pone en marcha un viaje de un extraordinario grupo de inadaptados que buscan su destino. Y sus vínculos se pondrán a prueba mientras trabajan juntos para escapar de un enemigo amenazador y letal.
', 'mufasa.jpg', 'Todos los públicos', 'https://www.youtube.com/embed/_mxeKCt4_Zs'),
    ('sonic-3', 'Sonic 3: La Película', 'Sonic, Knuckles y Tails se reúnen para enfrentarse a un nuevo y poderoso adversario, Shadow, un misterioso villano cuyos poderes no se parecen a nada de lo que nuestros héroes han conocido hasta ahora. Con sus facultades superadas en todos los sentidos, el Equipo Sonic tendrá que establecer una insólita alianza con la esperanza de detener a Shadow y proteger el planeta.', 'sonic-3.jpg', 'Todos los públicos', 'https://www.youtube.com/embed/2YJXP8CKrNE'),
    ('un-lio-de-millones', 'Un lío de millones', 'En un pueblo de la Sierra de Madrid, Bego (Gracia Olayo) y Agustín (Antonio Resines) viven una jubilación tranquila entre recetas, su huerto, la pelu y los juegos de cartas con los amigos. Pero desde que sus hijos, Miguel (Alberto Olmo) y Carla (Clara Lago), se independizaron para irse a vivir a la ciudad, el síndrome del nido vacío parece haberse instalado en el matrimonio, y empiezan a comprobar, con tristeza, que sus hijos se han empezado a olvidar de ellos. Para colmo, los muy sinvergüenzas no aparecen a la comida que Bego había preparado por el cumple de su hijo, y acto seguido anuncian que no irán a casa por Navidad, lo que lleva a sus padres a idear un arriesgado plan para que vuelvan a su lado: fingirán que han ganado la lotería y que son multimillonarios. Remake de la película francesa ''Mes Très Chers Enfants'' de Alexandra Leclère.', 'un-lio-de-millones.jpg', 'No recomendada menores 7 años', 'https://www.youtube.com/embed/2kLLWjs6SoM'),
    ('conclave', 'Conclave', 'Tras la inesperada muerte del Sumo Pontífice, el cardenal Lawrence es designado como responsable para liderar uno de los rituales más secretos y antiguos del mundo: la elección de un nuevo Papa. Cuando los líderes más poderosos de la Iglesia Católica se reúnen en los salones del Vaticano, Lawrence se ve atrapado dentro de una compleja conspiración a la vez que descubre un secreto que podría sacudir los cimientos de la Iglesia.', 'conclave.jpg', 'No recomendada menores 7 años', 'https://www.youtube.com/embed/aMiOsqSkcYg'),
    ('al-otro-barrio', 'Al otro barrio', 'Intentar engañar a Hacienda ha sido una opción demasiado tentadora para Andrés (Quim Gutiérrez), pero no contaba con que le acabaran pillando. Y eso es exactamente lo que le ha sucedido. Además de la multa millonaria que le ha caído encima, ahora debe trasladar sus oficinas al barrio de Los Caños, en el extrarradio más marginal de la capital, o eso le parece a él. Pero es que Andrés estaba aprovechándose de una jugosa subvención por tener allí su sede, sin que hubiese puesto jamás los pies en el barrio. A regañadientes, él y sus empleados se trasladan a Los Caños y aquello no es tan malo como esperaban... Es peor.', 'al-otro-barrio.jpg', 'Todos los públicos', 'https://www.youtube.com/embed/1Sp7NbEf4HQ'),
    ('the-brutalist', 'The Brutalist', 'Huyendo de la Europa de la posguerra, el visionario arquitecto László Toth llega a Estados Unidos para reconstruir su vida, su obra y su matrimonio con su esposa Erzsébet tras verse obligados a separarse durante la guerra a causa de los cambios de fronteras y regímenes. Solo y en un nuevo país totalmente desconocido para él, László se establece en Pensilvania, donde el adinerado y prominente empresario industrial Harrison Lee Van Buren reconoce su talento para la arquitectura. Pero amasar poder y forjarse un legado tiene su precio...', 'the-brutalist.jpg', 'No recomendada menores 16 años', 'https://www.youtube.com/embed/vna5bN96xJg'),
    ('mikaela', 'Mikaela', 'En la víspera del día de Reyes una tormenta de nieve sin precedentes asola España. En medio del caos de una autopista colapsada, un grupo de atracadores aprovecha la oportunidad para asaltar un furgón blindado. A escasos metros se encuentra Leo (Antonio Resines), un policía en las últimas que no tiene nada que perder. Con la ayuda inesperada de una joven (Natalia Azahara) tratarán de evitar que la banda huya con el botín en una persecución a contrarreloj en medio de la tempestad.', 'mikaela.jpg', 'No recomendada menores 12 años', 'https://www.youtube.com/embed/iAJcJqPY4zI'),
    ('polican', 'Policán', 'Un fiel perro policía y su agente humano sufren graves heridas mientras cumplen con su deber, y solo se les puede salvar mediante una operación descabellada en la que ambos se fusionan en uno, convirtiéndose en Policán. El nuevo agente jura proteger y servir, pero también sabe buscar, sentarse y dar la patita. Policán acepta su nueva identidad y se esfuerza en complacer a su Jefe. Ahora debe detener las malvadas intenciones del supervillano felino Perico. El último plan de Perico es clonarse para crear al gatito Periquillo y disponer del doble de posibilidades para cometer fechorías. Pero las cosas se complicarán cuando Periquillo y Policán se hacen amigos inesperadamente. Adaptación del fenómeno literario de Dav Pilkey.', 'polican.jpg', 'Todos los públicos', 'https://www.youtube.com/embed/86o3-BJ8YqU'),
    ('bridget-jones', 'Bridget Jones: Loca por él', 'Bridget está sola después de enviudar hace cuatro años, cuando Mark murió durante una misión humanitaria en Sudán. Es la madre de Billy, de nueve años, y de Mabel, de cuatro, y se encuentra en una especie de limbo emocional mientras cuida a los niños con la ayuda de sus mejores amigos y de un antiguo amante, Daniel Cleaver. Presionada por su familia urbana, compuesta por Shazzer, Jude y Tom, su compañera de trabajo, Miranda, su madre y su ginecóloga, la Dra. Rawlings, se siente obligada a interesarse por la vida y el amor. Trabaja de nuevo e incluso prueba con una app de citas, a través de la cual conoce a un soñador bastante más joven que ella. Mujer trabajadora, ama de casa, madre y enamorada (a medias), Bridget se enfrenta al enjuiciamiento de las madres perfectas en el colegio, se preocupa por Billy, que no acaba de acostumbrarse a no tener un padre, y mantiene una extraña relación con el muy racional profesor de Ciencias de su hijo.
', 'bridget-jones.jpg', 'No recomendada menores 12 años', 'https://www.youtube.com/embed/o6F5Mnm9sNM'),
    ('capitan-america-un-mundo-nuevo', 'Capitán América: Un mundo nuevo', 'Tras reunirse con el recién elegido presidente de Estados Unidos Thaddeus Ross (Harrison Ford), Sam se encuentra en medio de un incidente internacional. Debe descubrir la razón detrás de un nefasto complot global antes de que la verdadera mente maestra tenga al mundo entero viendo rojo. Cuarta película de la franquicia del Capitán América.', 'capitan-america-un-mundo-nuevo.webp', 'No recomendada menores 12 años', 'https://www.youtube.com/embed/wl2I9HOovUQ'),
    ('paddington-aventura-en-la-selva', 'Paddington: Aventura en la selva', 'Paddington y la familia Brown visitan a la tía Lucy en Perú, pero un misterio los envía a la selva amazónica y a las montañas peruanas.', 'paddington-aventura-en-la-selva.jpg', 'Todos los públicos', 'https://www.youtube.com/embed/W0p9jThOHEU'),
    ('a-complete-unknown', 'A Complete Unknown', 'Ambientada en la influyente escena musical de Nueva York de principios de los años 60, ''A Complete Unknown'' cuenta la historia del meteórico ascenso del músico de Minnesota Bob Dylan, un cantante de folk de 19 años, hasta las salas de conciertos y lo más alto de las listas de éxitos. Las canciones y la mística de Dylan, de nombre Robert Allen Zimmerman, se convirtieron en un fenómeno mundial que culminó en 1965 con su transgresora actuación de rock eléctrico en el Newport Folk Festival.', 'a-complete-unknown.jpg', 'No recomendada menores 12 años', 'https://www.youtube.com/embed/5WGNuAR__NM'),
    ('wolfgang', 'Wolfgang (Extraordinario)', 'Wolfgang, un niño de diez años con un cociente intelectual de 152 y trastorno del espectro autista, se ve obligado a vivir con su padre, Carles, a quien no ha visto nunca, tras la repentina muerte de su madre. Carles afronta el reto con ganas y voluntad, pero Wolfgang no soporta su desorden ni su desorganización y lo considera un “bajocien” por su falta de intelecto. Así que, a escondidas, Wolfgang planea conseguir su sueño: entrar en la academia de música Grimald de París, donde estudió su madre, y convertirse en el mejor pianista del mundo. Cuando Carles lo descubre, debe decidir entre su gran oportunidad como actor o convertirse en el padre que necesita un niño como Wolfgang.', 'wolfgang.jpg', 'No recomendada menores 7 años', 'https://www.youtube.com/embed/Wm9o1N69WY0'),
    ('blancanieves', 'Blancanieves', 'Una adaptación en acción real del clásico cuento de hadas sobre una hermosa joven princesa que, mientras es acosada por una reina celosa, busca refugio en la casa de siete enanos en la campiña alemana', 'blancanieves.avif', 'Todos los públicos', 'https://www.youtube.com/embed/Iqhf2jglRdc'),
    ('a-working-man', 'A Working Man', 'Levon Cade ha dejado atrás su profesión para ser "honrado" y trabajar en la construcción. Quiere vivir una vida sencilla y ser un buen padre para su hija. Pero cuando Jenny, la hija adolescente de su jefe, desaparece, se ve obligado a volver a emplear las habilidades que le convirtieron en una figura legendaria en el oscuro mundo de las operaciones encubiertas. Su búsqueda de la universitaria desaparecida le lleva al corazón de una siniestra conspiración criminal que creará una reacción en cadena que amenazará su nueva forma de vida.', 'a-working-man.jpg', 'No recomendada menores 16 años', 'https://www.youtube.com/embed/gGOXUdcE6hk'),
    ('tierra-de-nadie', 'Tierra de nadie', 'La historia de tres viejos amigos. Mateo "el Gallego", un heroico -a su pesar- guardia civil, Juan "el Antxale", un pescador convertido en narco por la mala suerte y el paro, y Benito "el Yeye", un resignado e inteligente depositario judicial siempre a medio camino entre la ley y la delincuencia. Tres amigos separados por un lugar, Cádiz, y un momento, el presente. Atrapados los tres entre el abandono de las instituciones, el violento e imparable ascenso del narco en la provincia y el peligroso aumento del descontento social. Tres amigos atrapados en un polvorín que pondrá a prueba su amistad. El traslado rutinario de un yate incautado a un peligroso cártel se convierte en una aventura entre la vida y la muerte.', 'tierra-de-nadie.jpg', 'No recomendada menores 16 años', 'https://www.youtube.com/embed/G_t2mTodCpk'),
    ('una-pelicula-de-minecraft', 'Una película de Minecraft', 'Bienvenido al mundo de Minecraft, donde la creatividad no sólo ayuda a crear, sino que es esencial para la supervivencia. Cuatro inadaptados -Garrett "El Basurero" Garrison (Momoa), Henry (Hansen), Natalie (Myers) y Dawn (Brooks)- se encuentran luchando con problemas ordinarios cuando de repente se ven arrastrados a través de un misterioso portal al Mundo Exterior: un extraño país de las maravillas cúbico que se nutre de la imaginación. Para volver a casa, tendrán que dominar este mundo (y protegerlo de cosas malvadas como Piglins y Zombies, también) mientras se embarcan en una búsqueda mágica con un inesperado experto artesano, Steve (Black). Juntos, su aventura desafiará a los cinco a ser audaces y a volver a conectar con las cualidades que hacen que cada uno de ellos sea único y creativo... las mismas habilidades que necesitan para prosperar en el mundo real.', 'una-pelicula-de-minecraft.jpg', 'Todos los públicos', 'https://www.youtube.com/embed/yxrjSE8XddA'),
    ('un-funeral-de-locos', 'Un funeral de locos', 'Los miembros de una familia acuden a despedir al patriarca, recién fallecido. Pero lo que debería ser un sentido velatorio se convierte en una reunión enloquecida cuando uno de los asistentes saca a la luz el secreto mejor guardado del difunto.', 'un-funeral-de-locos.jpg', 'No recomendada menores 12 años', 'https://www.youtube.com/embed/mI2j6-PyB1E'),
    ('padre-no-hay-mas-que-uno-5', 'Padre no hay más que uno 5: Nido repleto', 'Algunos padres experimentan la angustia del “nido vacío” cuando los hijos empiezan a abandonar el hogar. Javier, en cambio, sufre el trauma del “nido repleto”: nadie se va de casa.', 'padre-no-hay-mas-que-uno-5.jpg', 'Todos los públicos', 'https://www.youtube.com/embed/Os5EVDLcTx8'),
    ('jurassic-world-el-renacer', 'Jurassic World: El renacer', 'Cinco años después de los acontecimientos de Jurassic World Dominion, la ecología del planeta Tierra ha demostrado ser insoportable para los dinosaurios. Los pocos que quedan viven en ambientes aislados en las regiones ecuatoriales, donde el clima se parece al que conocieron antaño. Las tres criaturas más grandes dentro de esta biosfera tropical tienen en su ADN la clave para fabricar un medicamento que aportará beneficios milagrosos a la raza humana. Zora Bennett, una experta en operaciones encubiertas, es contratada para dirigir a un equipo de especialistas en una misión secreta cuyo objetivo es conseguir el material genético. Pero la operación liderada por Zora se cruzará con una familia cuyo barco volcó por culpa de unos dinosaurios acuáticos y todos acabarán en una isla prohibida donde se ubicó hace años un centro de investigación ultrasecreto del Parque Jurásico. Allí, en un lugar poblado por dinosaurios de numerosas especies, se enfrentarán a un descubrimiento tan sorprendente como siniestro que lleva décadas escondido.', 'jurassic-world-el-renacer.jpg', 'No recomendada menores 12 años', 'https://www.youtube.com/embed/1R3LTANp7hw'),
    ('como-entrenar-a-tu-dragon-la-pelicula', 'Cómo entrenar a tu dragón', 'En la escarpada Isla Mema, donde vikingos y dragones han mantenido una amarga enemistad durante generaciones, Hipo es un muchacho diferente a los demás. El ingenioso y subestimado hijo del jefe Estoico el Inmenso desafía siglos de tradición haciéndose amigo de Desdentao, un temido dragón Furia Nocturna. Su insospechado vínculo desvelará la verdadera naturaleza de los dragones, poniendo a prueba los cimientos de la sociedad vikinga. En compañía de la feroz y ambiciosa Astrid y Bocón, el estrafalario herrero del pueblo, Hipo planta cara a un mundo dividido por el miedo y la incomprensión. Pero cuando surge una ancestral amenaza que pone en peligro tanto a vikingos como a dragones, la amistad de Hipo con Desdentao se convertirá en la clave para forjar un nuevo futuro. Juntos, deberán recorrer la delicada senda hacia la paz, volando más allá de los límites de sus mundos y redefiniendo para siempre el significado de ser un héroe y un líder.', 'como-entrenar-a-tu-dragon-la-pelicula.jpg', 'No recomendada menores 7 años', 'https://www.youtube.com/embed/Os5EVDLcTx8'),
    ('lilo-y-stitch', 'Lilo y Stitch', 'Remake en imagen real de "Lilo & Stitch". Narra la historia de una niña hawaiana solitaria y un extraterrestre fugitivo que la ayuda a recomponer su rota familia.', 'lilo-y-stitch.jpg', 'Todos los públicos', 'https://www.youtube.com/embed/HeTE7j9dcGg'),
    ('f1-la-pelicula', 'F1: La película', 'Apodado “el más grande de todos los tiempos”, Sonny Hayes fue el fenómeno más prometedor de la Fórmula 1 en la década de 1990 hasta que un accidente en la pista casi acaba con su carrera. Treinta años después, es un piloto nómada a sueldo al que contacta su antiguo compañero de equipo Rubén Cervantes, propietario de un equipo de Fórmula 1 en apuros que está al borde de la quiebra. Rubén convence a Sonny para volver a la Fórmula 1 y tener una última oportunidad para salvar al equipo y ser el mejor del mundo. Su compañero será el novato Joshua Pearce, el piloto estrella del equipo que está decidido a imponer su propio ritmo.', 'f1-la-pelicula.jpeg', 'No recomendada menores 13 años', 'https://www.youtube.com/embed/H4qYzIrxRds'),
    ('elio', 'Elio', 'La historia de Elio, un niño de 11 años con una imaginación desbordante y una enorme obsesión por los extraterrestres, que lucha por encajar hasta que de repente es transportado al espacio y es identificado por error como el embajador galáctico de la Tierra.', 'elio.jpg', 'Todos los públicos', 'https://www.youtube.com/embed/7CPDmA4nGo'),
    ('superman-2025', 'Superman', 'Nueva película de Superman, escrita por James Gunn, que "no será una historia de origen". Con su estilo característico, Gunn aborda al superhéroe original en el recién imaginado universo DC con una singular mezcla de acción épica, humor y corazón, ofreciendo un Superman impulsado por la compasión y una creencia inherente en la bondad de la humanidad.', 'superman-2025.jpg', 'No recomendada menores 13 años', 'https://www.youtube.com/embed/_EjMNSH9-p4'),
    ('pitufos-2025', 'Pitufos', 'Película musical de animación centrada en las icónicas creaciones de Peyo. Cuando Papá Pitufo es secuestrado de forma misteriosa por los malvados brujos Razamel y Gargamel, Pitufina lleva a los Pitufos a una misión al mundo real para salvarle. Con la ayuda de nuevos amigos, los Pitufos deberán descubrir qué define su destino para salvar el universo.', 'pitufos-2025.jpg', 'Todos los públicos', 'https://www.youtube.com/embed/jYtjerVhaSA'),
    ('los-4-fantasticos-primeros-pasos', 'Los Cuatro Fantásticos: Primeros pasos', 'Ambientada en el vibrante telón de fondo de un mundo retro-futurista inspirado en los años 60, presenta a la Primera Familia de Marvel mientras se enfrentan a su desafío más terrorífico hasta la fecha. Obligados a equilibrar sus roles como héroes con la fortaleza de su vínculo familiar, deben defender la Tierra de un dios espacial voraz llamado Galactus y su enigmático Heraldo, Silver Surfer. Y si el plan de Galactus de devorar todo el planeta y a todos en él no fuera lo suficientemente malo, de repente se vuelve muy personal. Estreno de "Los 4 Fantásticos" en el MCU.', 'los-4-fantasticos-primeros-pasos.jpg', 'No recomendada menores 7 años', 'https://www.youtube.com/embed/BV0pwHEkU_I'),
    ('mision-imposible-sentencia-final', 'Misión imposible: Sentencia final', 'El agente Ethan Hunt continúa su misión de impedir que Gabriel controle el tecnológicamente omnipotente programa de IA conocido como "la Entidad".', 'mision-imposible-sentencia-final.jpg', 'No recomendada menores 12 años', 'https://www.youtube.com/embed/mHV67lQviME'),
    ('los-tipos-malos-2', 'Los tipos malos 2', 'Un genial equipo de animales que no respetan la ley, los ahora muy reformados Tipos Malos, se esfuerzan (mucho, muchísimo) en ser buenos, pero se ven envueltos involuntariamente en un golpe de envergadura mundial planeado por un inesperado grupo de criminales: las Tipas Malas.', 'los-tipos-malos-2.jpg', 'No recomendada menores 7 años', 'https://www.youtube.com/embed/PnUcgVUuYjs'),
    ('karate-kid-leyendas', 'Karate Kid: Leyendas', 'Tras una tragedia familiar, el prodigio del kung fu Li Fong se ve obligado a abandonar su hogar en Pekín y trasladarse a Nueva York con su madre. Li lucha por dejar atrás su pasado mientras intenta encajar con sus nuevos compañeros de clase y, aunque no quiere pelear, los problemas parecen encontrarle en todas partes. Cuando un nuevo amigo necesita su ayuda, Li se presenta a una competición de kárate, pero sus habilidades no son suficientes. El profesor de kung fu de Li, el Sr. Han, pide ayuda al Karate Kid original, Daniel LaRusso, y Li aprende una nueva forma de luchar, fusionando sus dos estilos en uno solo para el enfrentamiento definitivo de artes marciales. Nueva película de la saga "Karate Kid", conectada al universo de "Cobra Kai".', 'karate-kid-leyendas.jpg', 'No recomendada menores 12 años', 'https://www.youtube.com/embed/rL0Ec_v4zVw'),
    ('voy-a-pasarmelo-mejor', 'Voy a pasarmelo mejor', 'Es 1991 y los Pitus, al llegar el verano, se van de campamento. Al ritmo de las canciones más exitosas del año, cada uno de ellos se enamorará con la ilusión que sólo se tiene a los catorce y quince años.', 'voy-a-pasarmelo-mejor.jpg', 'No recomendada menores 7 años', 'https://www.youtube.com/embed/NfhooptQD0E'),
    ('se-lo-que-hicisteis-el-ultimo-verano', 'Se lo que hicisteis el ultimo verano', 'Cuando cinco amigos provocan sin querer un accidente de coche mortal, encubren su implicación y hacen un pacto para mantenerlo en secreto en lugar de afrontar las consecuencias. Un año después, su pasado vuelve para atormentarlos y se ven obligados a enfrentarse a una aterradora verdad: alguien sabe lo que hicieron el último verano... y está empeñado en vengarse. A medida que los amigos son acechados uno a uno por un asesino, descubren que esto ya ha sucedido antes, y recurren a dos supervivientes de la legendaria Masacre de Southport de 1997 en busca de ayuda.', 'se-lo-que-hicisteis-el-ultimo-verano.jpg', 'No recomendada menores 16 años', 'https://www.youtube.com/embed/UMmsBLH1cxw'),
    ('los-futbolisimos-2', 'Los futbolísimos 2. El misterio del tesoro pirata', 'Pakete y sus compañeros del Soto Alto FC forman una pandilla inseparable, pero el pacto de Los Futbolísimos peligra: una estafa inmobiliaria les ha dejado sin campo donde jugar y a su pueblo sumido en la ruina. Para seguir en la liga intercentros tendrán que ganar al equipo de Los Justos, unos rivales especialmente complicados, con una capitana un tanto “pirata” que les meterá en más de un lío: Se verán involucrados en el robo a un banco y el padre de Pakete verá peligrar su trabajo de policía. Para superar todo esto, Los Futbolísimos tendrán que agudizar su ingenio y permanecer más unidos que nunca…', 'los-futbolisimos-2.webp', 'Todos los públicos', 'https://www.youtube.com/embed/CAED02oRLjI'),
    ('materialistas', 'Materialistas', 'El lucrativo negocio de una casamentera se complica cuando cae en un tóxico triángulo amoroso que amenaza a sus clientes.', 'materialistas.jpg', 'Pendiente de calificación', 'https://www.youtube.com/embed/NilkoW-qN3g'),
    ('freaker-friday', 'Ponte en mi lugar de nuevo', 'Secuela de "Ponte en mi lugar" (2003). La historia se desarrolla años después de que Tess (Curtis) y Anna (Lohan) sufrieran una crisis de identidad. Anna tiene ahora una hija propia y una futura hijastra. Mientras se enfrentan a los innumerables desafíos que surgen cuando dos familias se fusionan, Tess y Anna descubren que la venganza puede ser dulce.', 'freaker-friday.jpeg', 'Todos los públicos', 'https://www.youtube.com/embed/thctDWzwjY0'),
    ('nadie-2', 'Nadie 2', 'Cuatro años después de enfrentarse involuntariamente a la mafia rusa, Hutch sigue manteniendo con la organización criminal una deuda de 30 millones de dólares que trata de saldar poco a poco con una serie interminable de golpes contra matones internacionales. Pese a disfrutar como siempre de la faceta más trepidante y física de su «trabajo», Hutch y su esposa Becca se sienten agotados y distanciados. Para intentar remediarlo, deciden llevarse a sus hijos de escapada al mismo lugar al que Hutch iba de vacaciones con su hermano Harry cuando eran pequeños.', 'nadie-2.jpg', 'No recomendada menores 18 años', 'https://www.youtube.com/embed/Qe_0NUZTST0'),
    ('weapons', 'Weapons', 'Cuando todos los alumnos de una misma clase, salvo uno, desaparecen misteriosamente la misma noche y exactamente a la misma hora, la pequeña ciudad donde viven se pregunta quién o qué está detrás de su desaparición.', 'weapons.jpg', 'No recomendada menores 18 años', 'https://www.youtube.com/embed/7slpWWzuE3s'),
    ('sin-cobertura', 'Sin cobertura', 'Rita es la menor de la familia y está harta de que sus padres y hermanos estén siempre mirando el móvil y no le hagan caso. En un viaje al pueblo de su abuela conoce a una pitonisa que le concede un deseo: que desaparezcan los móviles. A la salida del pueblo una intensa niebla rodea el coche y se quedan sin cobertura. El deseo de Rita se ha hecho realidad, pero no exactamente como ella había imaginado... y es que acaban de viajar en el tiempo y están en plena Edad Media. La familia tendrá que usar su ingenio y buscar la forma de volver al presente mientras tratan de sobrevivir en un pueblo feudal en plena Reconquista.', 'sin-cobertura.jpg', 'Todos los públicos', 'https://www.youtube.com/embed/oxymkDDPgCc'),
    ('el-cautivo', 'El Cautivo', 'Año 1575. El joven soldado Miguel de Cervantes es capturado en alta mar por corsarios árabes y llevado a Argel como rehén. Consciente de que allí le espera una cruel muerte si su familia no paga pronto su rescate, Miguel encontrará refugio en su pasión por contar historias. Sus fascinantes relatos devuelven la esperanza a sus compañeros de prisión y acaban por llamar la atención de Hasán, el misterioso y temido Bajá de Argel, con el que comienza a desarrollar una extraña afinidad. Mientras los conflictos crecen entre sus compañeros, Miguel, llevado por su inquebrantable optimismo, comenzará a idear un arriesgado plan de fuga.', 'el-cautivo.jpg', 'No recomendada menores 12 años', 'https://www.youtube.com/embed/Zy4GBAoS7l4'),
    ('la-cena', 'La Cena', 'Dos semanas después de acabar la Guerra Civil, Franco solicita una cena de celebración en el Hotel Palace. Un joven teniente, un maître meticuloso y un grupo de prisioneros republicanos expertos en cocina, deben preparar un banquete impecable en tiempo récord. Todo parece ir sobre ruedas, pero en la cocina se trama algo más que un menú. Adaptación de la obra de José Luis Alonso de Santos.', 'la-cena.jpg', 'No recomendada menores 12 años', 'https://www.youtube.com/embed/x_rRg-TB2f4'),
    ('los-domingos', 'Los Domingos', 'Ainara (Blanca Soroa), una joven idealista y brillante de 17 años, ha de decidir qué carrera universitaria estudiará. O, al menos, eso espera su familia que haga. Sin embargo, la chica manifiesta que se siente cada vez más cerca de Dios y que se plantea abrazar la vida de monja de clausura. La noticia pilla por sorpresa a toda la familia, provocando un abismo y una prueba de fuego para todos.', 'los-domingos.jpg', 'No recomendada menores 12 años', 'https://www.youtube.com/embed/fSRrZVzDTVA'),
    ('downton-abbey-el-gran-final', 'Downton Abbey: El gran final', 'Secuela de ''Downton Abbey: Una nueva era''. Sigue a la familia Crawley y a su personal a medida que se adentran en la década de 1930. Mientras deciden cómo conducir Downton Abbey hacia el futuro, todos deben aceptar el cambio y dar la bienvenida a un nuevo capítulo.', 'downton-abbey-el-gran-final.jpg', 'No recomendada menores 7 años', 'https://www.youtube.com/embed/SN9ntBjM2Vo'),
    ('ahora-me-ves-3', 'Ahora me ves 3', 'Tercera entrega de la franquicia "Ahora me ves". Los Cuatro Jinetes regresan junto a una nueva generación de ilusionistas en una extraordinaria aventura que contiene giros asombrosos, sorpresas alucinantes y trucos de magia nunca vistos en la gran pantalla. AHORA ME VES 3 vuelve a reunir el elenco original de la saga mientras incorpora nuevos rostros jóvenes y una villana de altos vuelos, Veronika Vanderberg, interpretada por la nominada al Oscar® Rosamund Pike.', 'ahora-me-ves-3.jpg', 'No recomendada menores 12 años', 'https://www.youtube.com/embed/yKEpr38-YHY'),
    ('wicked-2', 'Wicked: Parte II', 'Segunda parte de la adaptación cinematográfica del musical de Broadway. El capítulo final de la historia jamás contada de las brujas de Oz comienza con Elphaba y Glinda distanciadas y viviendo las consecuencias de sus respectivas decisiones. Mientras la multitud alza su clamor contra la Bruja Malvada, ambas deberán unirse una vez más. Con su singular amistad convertida en el punto de inflexión de su futuro, tendrán que mirarse a los ojos con honestidad y compasión para afrontar su transformación personal y cambiar el destino de todo Oz.', 'wicked-2.jpg', 'No recomendada menores 7 años', 'https://www.youtube.com/embed/wweDnEbMvtY'),
    ('todos-los-lados-de-la-cama', 'Todos los lados de la cama', 'Tras décadas sin verse, Javier (Ernesto Alterio) y Carlota (Pilar Castro) montan en cólera cuando descubren que sus hijos Óscar (Jan Buxaderas) y Julia (Lucía Caraballo) planean casarse. ¿Quién a su edad tiene una relación heteronormativa y exclusiva en 2025 con todo lo que les queda por experimentar? ¿Es que no les han enseñado nada como padres? Ni Paula (Natalia Verbeke), madre de Óscar; ni Rafa (Alberto San Juan), convertido en gurú contra las relaciones tóxicas; ni Pilar (María Esteve), wedding planner; ni su amigo Carlos (Secun de la Rosa), sirven de mucha ayuda a Javier y Carlota en su firme propósito de impedir la boda. Y aunque Julia y Óscar pertenecen a una generación en la que el amor, el sexo y las relaciones son más libres y respetuosas que las de sus padres, las tretas ruines de Javier y Carlota ponen todo patas arriba a medida que la fecha de la boda se acerca. Porque por mucho que todos ellos hayan explorado Todos los lados de la cama, en el amor y el sexo la única certeza es que nadie sabe nada.', 'todos-los-lados-de-la-cama.jpg', 'No recomendada menores 12 años', 'https://www.youtube.com/embed/Cdjtuio0a28'),
    ('nuremberg', 'Nuremberg', 'Tras el fin de la II Guerra Mundial, con ocasión de los cruciales juicios de Nuremberg de los Aliados contra el derrotado régimen nazi, el psiquiatra estadounidense Douglas Kelley (Malek), encargado de determinar si los prisioneros oficiales nazis son aptos para ser juzgados por sus crímenes de guerra, se ve inmerso en una compleja batalla de ingenio con Hermann Göring (Crowe), mano derecha de Hitler. Basada en el libro "El nazi y el psiquiatra" de Jack El-Hai.', 'nuremberg.jpg', 'No recomendada menores 16 años', 'https://www.youtube.com/embed/n3Ht0sBjv4g'),
    ('zootropolis-2', 'Zootrópolis 2', 'Judy y Nick se encuentran tras la retorcida pista de un misterioso reptil que llega a Zootopia y pone patas arriba la metrópolis de los mamíferos. Para resolver el caso, Judy y Nick deben ir de incógnito a nuevas partes inesperadas de la ciudad, donde su creciente asociación se pone a prueba como nunca antes.', 'zootropolis-2.jpg', 'Todos los públicos', 'https://www.youtube.com/embed/io6VfjLpgaU'),
    ('avatar-3', 'Avatar: Fuego y ceniza', 'Tercera entrega de la saga "Avatar". Presenta al Pueblo de las Cenizas, un clan Na''vi no tan pacífico que utilizará la violencia si lo necesita para conseguir sus objetivos, aunque sea contra otros clanes.', 'avatar-3.jpg', 'No recomendada menores 12 años', 'https://www.youtube.com/embed/bf38f_JINyw'),
    ('la-asistenta', 'La asistenta', 'Una joven (Sydney Sweeney), con un pasado complicado comienza a trabajar como asistenta en la lujosa casa de los Winchester. A medida que se adentra en la vida de la familia, descubrirá secretos oscuros que pondrán en peligro su seguridad, pero quizá ya sea demasiado tarde... Adaptación de la novela de Freida McFadden.', 'la-asistenta.webp', 'No recomendada menores 16 años', 'https://www.youtube.com/embed/IMrebLqjVVQ'),
    ('abuela-tremenda', 'Abuela tremenda', 'Toñi no es una abuela cualquiera. Es un torbellino, un alma libre que se mete siempre en líos. A su hija Daniela la trae un poco de cabeza, pero su nieta Alexia la adora. Por eso, cuando Daniela se lleva a Alexia a un retiro rural de su empresa, Toñi no duda en presentarse allí con su caravana para pasar tiempo con su nieta y animar el cotarro a toda costa. Toñi pondrá patas arriba el retiro y el trabajo de Daniela y, sin querer, también pondrá algunas cosas en su sitio.', 'abuela-tremenda.jpg', 'No recomendada menores 12 años', 'https://www.youtube.com/embed/Hg7odkhWUtc'),
    ('idolos', 'Ídolos', 'Edu es un joven piloto de motos muy agresivo en quien ningún equipo confía. Eli, jefe del equipo de Aspar Team en Moto2, le ofrece una oportunidad con la condición de que sea su padre, Antonio Belardi, quien le entrene. Edu lleva muchos años sin ver a su padre, un expiloto que se retiró de las pistas tras provocar la muerte de otro piloto durante una carrera. Aunque Edu odia a su padre por haberle abandonado, sabe que sólo con él puede llegar a alcanzar su sueño. Edu se someterá al estricto control de preparación que le exige Antonio, el cual incluye dejar a un lado el amor… Hasta que conoce a Luna, una joven artista que acaba de abrir un salón de tatuajes justo debajo de su casa.', 'idolos.jpg', 'No recomendada menores 12 años', 'https://www.youtube.com/embed/SyB6LKFvjro'),
    ('hamnet', 'Hamnet', 'La historia de Agnes, la esposa de William Shakespeare, en su lucha por superar la tragedia familiar que irrumpe en su vida. Una historia con el telón de fondo de la creación de una de las más conocidas e importantes obras de Shakespeare, ''Hamlet''.', 'hamnet.jpg', 'No recomendada menores 12 años', 'https://www.youtube.com/embed/Ith7z6FzLe0'),
    ('aida-y-vuelta', 'Aida y vuelta', '''Aída y vuelta'' aborda el rodaje de un capítulo de la serie con tramas que transcurren tanto dentro de la ficción, con los personajes de ''Aída'', como fuera de ella con los propios actores y sus relaciones, que dan pie a reflexionar sobre temas como los límites del humor, el trabajo del cómico o la fama.', 'aida-y-vuelta.jpg', 'No recomendada menores 12 años', 'https://www.youtube.com/embed/O82ibLC4bmM'),
    ('cumbres-borrascosas', 'Cumbres borrascosas', 'Narra la intensa y romántica relación entre Heathcliff y Catherine Earnshaw en los páramos del condado inglés de Yorkshire. Tras ser criados juntos, su romance se ve pronto frustrado por las barreras sociales, y su pasión prohibida se transforma de romántica a intoxicante en una épica historia de lujuria, amor y locura.', 'cumbres-borrascosas.jpeg', 'No recomendada menores 16 años', 'https://www.youtube.com/embed/RNynG8dMp5w'),
    ('como-cabras', 'Como cabras', 'Will es una pequeña cabra con grandes sueños que recibe una oportunidad única en la vida para unirse a los profesionales y jugar al rugebol, un deporte de alta intensidad, mixto y de contacto total dominado por los animales más rápidos y feroces del mundo. A los nuevos compañeros de equipo de Will no les entusiasma tener a una cabrita en su plantilla, pero Will está decidido a revolucionar el deporte y demostrar de una vez por todas que ''¡los pequeños saben jugar!''.', 'como-cabras.jpg', 'Todos los públicos', 'https://www.youtube.com/embed/q56pw-zFDP8'),
    ('torrente-presidente', 'Torrente Presidente', '*Nota informativa: la película no tendrá ni tráiler ni cartel ni se mostrará en pases de prensa previos a su estreno en cines, en una estrategia de marketing de Santiago Segura y la distribuidora, con el fin -según han declarado- de preservar las sorpresas y cameos hasta que los fans la puedan ver el día de su estreno en cines en España (13 de marzo). Tampoco hay información oficial sobre el reparto ni detalles de la trama. Cuando contemos con esa información actualizaremos y completaremos la ficha.', 'torrente-presidente.jpg', 'No recomendada menores 16 años', 'https://www.youtube.com/embed/ju0iKNvSlog'),
    ('amarga-navidad', 'Amarga Navidad', 'Elsa es una directora de publicidad cuya madre muere durante un largo puente del mes de diciembre. Encuentra refugio en el trabajo, aunque es más bien una huida hacia adelante. Trabaja sin parar y, sin darse cuenta, no se concede el tiempo necesario para guardar el duelo por la ausencia materna. Hasta que una crisis de pánico la obliga a detenerse e imponerse un descanso. Su pareja, Bonifacio, es su tabla de salvación en esos momentos de crisis. Elsa decide viajar a la isla de Lanzarote acompañada por su amiga Patricia, que también necesita alejarse de Madrid, mientras que Bonifacio se queda en la ciudad.', 'amarga-navidad.jpg', 'No recomendada menores 12 años', 'https://www.youtube.com/embed/SNbVMk-nLu4'),
    ('super-mario-galaxy', 'Super Mario Galaxy: La película', 'Secuela de ''Super Mario Bros: La película'', basada en la saga ''Mario Galaxy''. Los hermanos Mario y Luigi y la princesa Peach emprenden una aventura hasta los confines del espacio y a través de la galaxia.', 'super-mario-galaxy.jpg', 'No recomendada menores 7 años', 'https://www.youtube.com/embed/VaGc3NrsfBI'),
    ('proyecto-salvacion', 'Proyecto Salvación', 'El profesor de ciencias Ryland Grace (Ryan Gosling) se despierta en una nave espacial a años luz de casa sin recordar quién es ni cómo ha llegado hasta allí. A medida que recupera la memoria, empieza a descubrir su misión: resolver el enigma de la misteriosa sustancia que provoca la extinción del sol. Deberá recurrir a sus conocimientos científicos y a sus ideas poco ortodoxas para salvar todo lo que hay en la Tierra de la extinción... pero una amistad inesperada significa que quizá no tenga que hacerlo solo.', 'proyecto-salvacion.jpg', 'No recomendada menores 7 años', 'https://www.youtube.com/embed/in-lUuKi0eE'),
    ('el-padrino', 'El Padrino', 'América, años 40. Don Vito Corleone (Marlon Brando) es el respetado y temido jefe de una de las cinco familias de la mafia de Nueva York. Tiene cuatro hijos: Connie (Talia Shire), el impulsivo Sonny (James Caan), el pusilánime Fredo (John Cazale) y Michael (Al Pacino), que no quiere saber nada de los negocios de su padre. Cuando Corleone, en contra de los consejos de ''Il consigliere'' Tom Hagen (Robert Duvall), se niega a participar en el negocio de las drogas, el jefe de otra banda ordena su asesinato. Empieza entonces una violenta y cruenta guerra entre las familias mafiosas.', 'el-padrino.webp', 'No recomendada menores 16 años', 'https://www.youtube.com/embed/gCVj1LeYnsc'),
    ('incontrolable', 'Incontrolable', 'La historia real de John Davidson. Diagnosticado con el síndrome de Tourette a los 15 años, señalado como loco por sus compañeros -dos de sus principales síntomas son sus espasmos y su incontinencia con los insultos-, John luchó con una condición que pocos conocían. Ya adulto, hizo campaña en favor de las personas con síndrome de Tourette.', 'incontrolable.webp', 'No recomendada menores 12 años', 'https://www.youtube.com/embed/DCFhVU8UIRg'),
    ('minions-and-monsters', 'Minions & Monsters', 'La historia de cómo los Minions conquistaron Hollywood, se convirtieron en estrellas de cine, lo perdieron todo, desataron monstruos en el mundo y luego se unieron para intentar salvar al planeta del caos que acababan de crear.', 'minions-y-monsters.jpg', 'Todos los públicos', 'https://www.youtube.com/embed/-_Ajqzp5iIQ'),
    ('el-dia-de-la-revelacion', 'El día de la Revelación', 'Si descubrieras secretos que han permanecido deliberadamente ocultos durante décadas, y alguien te abriera los ojos y te lo demostrase, ¿qué harías?, ¿y te asustarías? Este verano, la verdad será revelada a más de ocho mil millones de personas. Llega... el día de la revelación.', 'el-dia-de-la-revelacion.webp', 'No recomendada menores 12 años', 'https://www.youtube.com/embed/XXZgYygh40'),
    ('haciendo-amigos', 'Haciendo Amigos', 'Antonio y Félix son una pareja de atracadores de poca monta que, huyendo de la policía tras atracar una joyería, se cruzan con Eva, monitora de un grupo de teatro formado por personas con discapacidad, que confunde a Félix con Ángel, un nuevo miembro del grupo al cual no conoce y al que están esperando. Aprovechando la confusión, Félix y Antonio consiguen escabullirse sin saber que les espera un retiro creativo de una semana con el entrañable grupo.', 'haciendo-amigos.jpg', 'No recomendada menores 7 años', 'https://www.youtube.com/embed/SNl1zrF3AG8'),
    ('toy-story-5', 'Toy Story 5', 'Los juguetes están de vuelta. Esta vez, Buzz Lightyear, Woody, Jessie y el resto de la pandilla se enfrentan a un nuevo reto cuando conocen a Lilypad, una nueva tablet que llega con sus propias ideas disruptivas sobre lo que es mejor para Bonnie. ¿Volverá a ser lo mismo la hora de jugar?', 'toy-story-5.jpeg', 'Todos los públicos', 'https://www.youtube.com/embed/w56cHtfyGT8'),
    ('la-odisea', 'La odisea', 'Epopeya mitológica que sigue la historia de Odiseo y su largo viaje a casa, de 10 años de duración, tras la guerra de Troya.', 'la-odisea.jpg', 'No recomendada menores 7 años', 'https://www.youtube.com/embed/WgDj3heU4YI'),
    ('michael', 'Michael', 'El viaje de Michael Jackson más allá de la música, desde el descubrimiento de su extraordinario talento como líder de los Jackson Five hasta convertirse en una visionaria estrella cuya ambición creativa despertó un incansable afán por consagrarse como el mayor icono de la industria del entretenimiento.', 'michael.jpg', 'No recomendada menores 12 años', 'https://www.youtube.com/embed/o1HQSh6zZ8s'),
    ('vaiana', 'Vaiana', 'Vaiana (Catherine Lagaʻaia) responde a la llamada del océano y, por primera vez, viaja más allá del arrecife de su isla de Motunui con el semidiós Maui (Dwayne Johnson) en un viaje inolvidable para devolver la prosperidad a su pueblo.', 'vaiana.jpeg', 'No recomendada menores 3 años', 'https://www.youtube.com/embed/oqS3Lpu1ZqI'),
    ('spiderman-new-day', 'Spider-Man: Brand New Day', 'Han pasado cuatro años desde los acontecimientos de No Way Home, y Peter Parker ahora es un adulto que vive completamente solo, ha desaparecido voluntariamente de las vidas y recuerdos de quienes ama. Combatiendo el crimen en una Nueva York que ya no conoce su nombre, se ha dedicado por completo a proteger su ciudad—un Spider-Man a tiempo completo—, pero a medida que aumentan las exigencias sobre él, la presión desencadena una evolución física que amenaza su existencia, al mismo tiempo que un extraño nuevo patrón de crímenes da lugar a una de las amenazas más poderosas a las que se ha enfrentado.', 'spiderman-new-day.jpeg', 'No recomendada menores 12 años', 'https://www.youtube.com/embed/owfWVJoxXR4'),
    ('patrulla-canina-dino-pelicula', 'La Patrulla Canina: La dino película', 'Después de que su barco quede atrapado en una misteriosa tormenta, los cachorros de la Patrulla Canina naufragan en una isla tropical inexplorada repleta de dinosaurios. Allí conocen a Rex, un cachorro que lleva años varado en la isla y que se ha convertido en un auténtico experto en todo lo relacionado con los dinos. Cuando el archienemigo de la Patrulla Canina, el alcalde Humdinger, comienza a explotar la isla de forma imprudente con la intención de aprovechar sus recursos naturales, provoca accidentalmente la erupción de un enorme volcán inactivo. Los cachorros de la Patrulla Canina se enfrentan a sus rescates más importantes hasta ahora y deben detener a Humdinger antes de que la isla desaparezca.', 'patrulla-canina-dino-pelicula.jpg', 'Todos los públicos', 'https://www.youtube.com/embed/N-jJORZ3TF4'),
    ('obsession', 'Obsession', 'El anhelo romántico desesperado de un chico por su amor platónico de toda la vida desencadena un siniestro hechizo: Niki se vuelve irracionalmente obsesiva hasta convertirse en la sombra de Bear. Una fantasía aparentemente inofensiva que se convertirá en una perturbadora pesadilla.', 'obsession.jpg', 'No recomendada menores 18 años', 'https://www.youtube.com/embed/KjoR2pVaEvY'),
    ('el-final-de-oak-street', 'El final de Oak Street', 'Después de que un misterioso fenómeno cósmico arranque Oak Street de su entorno suburbano y transporte a sus habitantes a un lugar desconocido, la familia Platt pronto descubre que su propia supervivencia depende de que permanezcan unidos mientras se orientan en un entorno que ya no reconocen.', 'el-final-de-oak-street.jpg', 'No recomendada menores 13 años', 'https://www.youtube.com/embed/pKtm-_iOivI'),
    ('tadeo-jones-y-la-lampara-maravillosa', 'Tadeo Jones y la lámpara maravillosa', 'Cuarta entrega de la saga ''Tadeo Jones''. Tadeo y Sara son ahora padres de Olimpia (Oli), una adorable e intrépida niña de dos años. Y Momia no lleva nada bien haber dejado de ser el centro de atención. Mientras están de vacaciones en Londres, Sara sigue la pista hacia un objeto único: la lámpara maravillosa de Las mil y una noches. Y Momia, presa de los celos, pide un deseo: viajar en el tiempo hasta el momento en que era joven y todos le querían. Tadeo y Sara tienen que unir fuerzas para evitar que Momia cambie el curso de la historia y traer al grupo (Jeff, Belzoni y Ramona incluidos) de vuelta a casa, a su época. Esta nueva aventura los llevará a cruzar el Océano Atlántico desde Perú hasta Grecia, y de allí a lo más profundo de Oriente Medio, hasta la misma cueva de Ali Babá y los cuarenta ladrones.', 'tadeo-jones-y-la-lampara-maravillosa.jpeg', 'Todos los públicos', 'https://www.youtube.com/embed/pKtm-_iOivI'),
    ('el-padrino-ii', 'El padrino. Parte II', 'Segunda entrega de la saga de los Corleone, contada a través de dos historias que avanzan en paralelo. Por un lado, Michael Corleone ya está al frente de los negocios de la familia y trata de consolidar y ampliar su poder mientras sospecha que alguien de su entorno lo ha traicionado. Por otro, se narran los orígenes de su padre, Vito Corleone, desde su infancia en Sicilia hasta su llegada a Estados Unidos, donde, partiendo de la nada, acaba convirtiéndose en uno de los jefes mafiosos más poderosos de Nueva York.', 'el-padrino-ii.jpg', 'No recomendada para menores de 18 años', 'https://www.youtube.com/embed/Ts1lHOyWNSE'),
    ('la-bola-negra', 'La bola negra', 'Las vidas interconectadas de tres hombres en tres épocas distintas. Tres existencias íntimamente ligadas por la sexualidad y el deseo, el dolor y la herencia, y por una de las últimas obras, inacabada, de Federico García Lorca.', 'la-bola-negra.jpg', 'No recomendada para menores de 16 años', 'https://www.youtube.com/embed/9NNU-vSeOB0')
on conflict (id) do update set
    nombre = excluded.nombre,
    descripcion = excluded.descripcion,
    imagen = excluded.imagen,
    edad_recomendada = excluded.edad_recomendada,
    video_url = excluded.video_url;

with p as (
    insert into public.programaciones (cine_id, pelicula_id, entradas_espanol, entradas_vose, colaboracion_nombre, colaboracion_logo)
    values ('vera', 'michael', null, null, null, null)
    returning id
)
insert into public.sesiones (programacion_id, fecha, hora, vose)
select p.id, s.fecha::date, s.hora, s.vose
from p, (values
    ('2026-06-26', '22:00', false),
    ('2026-06-27', '22:00', false)
) as s (fecha, hora, vose);

with p as (
    insert into public.programaciones (cine_id, pelicula_id, entradas_espanol, entradas_vose, colaboracion_nombre, colaboracion_logo)
    values ('vera', 'torrente-presidente', null, null, null, null)
    returning id
)
insert into public.sesiones (programacion_id, fecha, hora, vose)
select p.id, s.fecha::date, s.hora, s.vose
from p, (values
    ('2026-06-28', '22:00', false),
    ('2026-06-29', '22:00', false)
) as s (fecha, hora, vose);

with p as (
    insert into public.programaciones (cine_id, pelicula_id, entradas_espanol, entradas_vose, colaboracion_nombre, colaboracion_logo)
    values ('vera', 'incontrolable', null, null, 'Asprodalba', null)
    returning id
)
insert into public.sesiones (programacion_id, fecha, hora, vose)
select p.id, s.fecha::date, s.hora, s.vose
from p, (values
    ('2026-06-30', '22:00', false)
) as s (fecha, hora, vose);

with p as (
    insert into public.programaciones (cine_id, pelicula_id, entradas_espanol, entradas_vose, colaboracion_nombre, colaboracion_logo)
    values ('vera', 'minions-and-monsters', null, null, null, null)
    returning id
)
insert into public.sesiones (programacion_id, fecha, hora, vose)
select p.id, s.fecha::date, s.hora, s.vose
from p, (values
    ('2026-07-01', '22:00', false),
    ('2026-07-02', '22:00', false),
    ('2026-07-03', '22:00', false),
    ('2026-07-04', '22:00', false),
    ('2026-07-05', '22:00', false),
    ('2026-07-06', '22:00', false)
) as s (fecha, hora, vose);

with p as (
    insert into public.programaciones (cine_id, pelicula_id, entradas_espanol, entradas_vose, colaboracion_nombre, colaboracion_logo)
    values ('vera', 'el-dia-de-la-revelacion', null, null, null, null)
    returning id
)
insert into public.sesiones (programacion_id, fecha, hora, vose)
select p.id, s.fecha::date, s.hora, s.vose
from p, (values
    ('2026-07-07', '22:00', false),
    ('2026-07-08', '22:00', false),
    ('2026-07-09', '22:00', false)
) as s (fecha, hora, vose);

with p as (
    insert into public.programaciones (cine_id, pelicula_id, entradas_espanol, entradas_vose, colaboracion_nombre, colaboracion_logo)
    values ('vera', 'haciendo-amigos', null, null, null, null)
    returning id
)
insert into public.sesiones (programacion_id, fecha, hora, vose)
select p.id, s.fecha::date, s.hora, s.vose
from p, (values
    ('2026-07-10', '22:00', false),
    ('2026-07-11', '22:00', false),
    ('2026-07-12', '22:00', false),
    ('2026-07-13', '22:00', false)
) as s (fecha, hora, vose);

with p as (
    insert into public.programaciones (cine_id, pelicula_id, entradas_espanol, entradas_vose, colaboracion_nombre, colaboracion_logo)
    values ('vera', 'toy-story-5', null, null, null, null)
    returning id
)
insert into public.sesiones (programacion_id, fecha, hora, vose)
select p.id, s.fecha::date, s.hora, s.vose
from p, (values
    ('2026-07-14', '22:00', false),
    ('2026-07-15', '22:00', false),
    ('2026-07-16', '22:00', false)
) as s (fecha, hora, vose);

with p as (
    insert into public.programaciones (cine_id, pelicula_id, entradas_espanol, entradas_vose, colaboracion_nombre, colaboracion_logo)
    values ('vera', 'vaiana', null, null, null, null)
    returning id
)
insert into public.sesiones (programacion_id, fecha, hora, vose)
select p.id, s.fecha::date, s.hora, s.vose
from p, (values
    ('2026-07-17', '22:00', false),
    ('2026-07-18', '22:00', false),
    ('2026-07-19', '22:00', false),
    ('2026-07-20', '22:00', false)
) as s (fecha, hora, vose);

with p as (
    insert into public.programaciones (cine_id, pelicula_id, entradas_espanol, entradas_vose, colaboracion_nombre, colaboracion_logo)
    values ('vera', 'minions-and-monsters', null, null, null, null)
    returning id
)
insert into public.sesiones (programacion_id, fecha, hora, vose)
select p.id, s.fecha::date, s.hora, s.vose
from p, (values
    ('2026-07-21', '22:00', false),
    ('2026-07-22', '22:00', false),
    ('2026-07-23', '22:00', false)
) as s (fecha, hora, vose);

with p as (
    insert into public.programaciones (cine_id, pelicula_id, entradas_espanol, entradas_vose, colaboracion_nombre, colaboracion_logo)
    values ('vera', 'la-odisea', null, null, null, null)
    returning id
)
insert into public.sesiones (programacion_id, fecha, hora, vose)
select p.id, s.fecha::date, s.hora, s.vose
from p, (values
    ('2026-07-24', '22:00', false),
    ('2026-07-25', '22:00', false),
    ('2026-07-26', '22:00', false),
    ('2026-07-27', '22:00', false)
) as s (fecha, hora, vose);

with p as (
    insert into public.programaciones (cine_id, pelicula_id, entradas_espanol, entradas_vose, colaboracion_nombre, colaboracion_logo)
    values ('vera', 'toy-story-5', null, null, null, null)
    returning id
)
insert into public.sesiones (programacion_id, fecha, hora, vose)
select p.id, s.fecha::date, s.hora, s.vose
from p, (values
    ('2026-07-28', '22:00', false),
    ('2026-07-29', '22:00', false),
    ('2026-07-30', '22:00', false)
) as s (fecha, hora, vose);

with p as (
    insert into public.programaciones (cine_id, pelicula_id, entradas_espanol, entradas_vose, colaboracion_nombre, colaboracion_logo)
    values ('vera', 'spiderman-new-day', null, null, null, null)
    returning id
)
insert into public.sesiones (programacion_id, fecha, hora, vose)
select p.id, s.fecha::date, s.hora, s.vose
from p, (values
    ('2026-07-31', '22:00', false),
    ('2026-08-01', '22:00', false),
    ('2026-08-02', '22:00', false),
    ('2026-08-03', '22:00', false),
    ('2026-08-04', '22:00', false)
) as s (fecha, hora, vose);

with p as (
    insert into public.programaciones (cine_id, pelicula_id, entradas_espanol, entradas_vose, colaboracion_nombre, colaboracion_logo)
    values ('vera', 'el-dia-de-la-revelacion', null, null, null, null)
    returning id
)
insert into public.sesiones (programacion_id, fecha, hora, vose)
select p.id, s.fecha::date, s.hora, s.vose
from p, (values
    ('2026-08-05', '22:00', false),
    ('2026-08-06', '22:00', false)
) as s (fecha, hora, vose);

with p as (
    insert into public.programaciones (cine_id, pelicula_id, entradas_espanol, entradas_vose, colaboracion_nombre, colaboracion_logo)
    values ('vera', 'patrulla-canina-dino-pelicula', null, null, null, null)
    returning id
)
insert into public.sesiones (programacion_id, fecha, hora, vose)
select p.id, s.fecha::date, s.hora, s.vose
from p, (values
    ('2026-08-07', '22:00', false),
    ('2026-08-08', '22:00', false),
    ('2026-08-09', '22:00', false)
) as s (fecha, hora, vose);

with p as (
    insert into public.programaciones (cine_id, pelicula_id, entradas_espanol, entradas_vose, colaboracion_nombre, colaboracion_logo)
    values ('vera', 'la-odisea', null, null, null, null)
    returning id
)
insert into public.sesiones (programacion_id, fecha, hora, vose)
select p.id, s.fecha::date, s.hora, s.vose
from p, (values
    ('2026-08-10', '22:00', false),
    ('2026-08-11', '22:00', false),
    ('2026-08-12', '22:00', false),
    ('2026-08-13', '22:00', false)
) as s (fecha, hora, vose);

with p as (
    insert into public.programaciones (cine_id, pelicula_id, entradas_espanol, entradas_vose, colaboracion_nombre, colaboracion_logo)
    values ('vera', 'minions-and-monsters', null, null, null, null)
    returning id
)
insert into public.sesiones (programacion_id, fecha, hora, vose)
select p.id, s.fecha::date, s.hora, s.vose
from p, (values
    ('2026-08-14', '22:00', false),
    ('2026-08-15', '22:00', false)
) as s (fecha, hora, vose);

with p as (
    insert into public.programaciones (cine_id, pelicula_id, entradas_espanol, entradas_vose, colaboracion_nombre, colaboracion_logo)
    values ('vera', 'spiderman-new-day', null, null, null, null)
    returning id
)
insert into public.sesiones (programacion_id, fecha, hora, vose)
select p.id, s.fecha::date, s.hora, s.vose
from p, (values
    ('2026-08-16', '22:00', false),
    ('2026-08-17', '22:00', false),
    ('2026-08-18', '22:00', false)
) as s (fecha, hora, vose);

with p as (
    insert into public.programaciones (cine_id, pelicula_id, entradas_espanol, entradas_vose, colaboracion_nombre, colaboracion_logo)
    values ('vera', 'obsession', null, null, null, null)
    returning id
)
insert into public.sesiones (programacion_id, fecha, hora, vose)
select p.id, s.fecha::date, s.hora, s.vose
from p, (values
    ('2026-08-19', '22:00', false),
    ('2026-08-20', '22:00', false)
) as s (fecha, hora, vose);

with p as (
    insert into public.programaciones (cine_id, pelicula_id, entradas_espanol, entradas_vose, colaboracion_nombre, colaboracion_logo)
    values ('vera', 'toy-story-5', null, null, null, null)
    returning id
)
insert into public.sesiones (programacion_id, fecha, hora, vose)
select p.id, s.fecha::date, s.hora, s.vose
from p, (values
    ('2026-08-21', '22:00', false),
    ('2026-08-22', '22:00', false)
) as s (fecha, hora, vose);

with p as (
    insert into public.programaciones (cine_id, pelicula_id, entradas_espanol, entradas_vose, colaboracion_nombre, colaboracion_logo)
    values ('vera', 'el-final-de-oak-street', null, null, null, null)
    returning id
)
insert into public.sesiones (programacion_id, fecha, hora, vose)
select p.id, s.fecha::date, s.hora, s.vose
from p, (values
    ('2026-08-23', '22:00', false),
    ('2026-08-24', '22:00', false),
    ('2026-08-25', '22:00', false)
) as s (fecha, hora, vose);

with p as (
    insert into public.programaciones (cine_id, pelicula_id, entradas_espanol, entradas_vose, colaboracion_nombre, colaboracion_logo)
    values ('vera', 'tadeo-jones-y-la-lampara-maravillosa', null, null, null, null)
    returning id
)
insert into public.sesiones (programacion_id, fecha, hora, vose)
select p.id, s.fecha::date, s.hora, s.vose
from p, (values
    ('2026-08-26', '22:00', false),
    ('2026-08-27', '22:00', false),
    ('2026-08-28', '22:00', false),
    ('2026-08-29', '22:00', false),
    ('2026-08-30', '22:00', false)
) as s (fecha, hora, vose);

with p as (
    insert into public.programaciones (cine_id, pelicula_id, entradas_espanol, entradas_vose, colaboracion_nombre, colaboracion_logo)
    values ('regio', 'el-padrino-ii', null, null, null, null)
    returning id
)
insert into public.sesiones (programacion_id, fecha, hora, vose)
select p.id, s.fecha::date, s.hora, s.vose
from p, (values
    ('2026-10-24', '18:00', false)
) as s (fecha, hora, vose);

with p as (
    insert into public.programaciones (cine_id, pelicula_id, entradas_espanol, entradas_vose, colaboracion_nombre, colaboracion_logo)
    values ('regio', 'la-bola-negra', null, null, null, null)
    returning id
)
insert into public.sesiones (programacion_id, fecha, hora, vose)
select p.id, s.fecha::date, s.hora, s.vose
from p, (values
    ('2026-10-30', '20:00', false),
    ('2026-10-31', '17:30', false),
    ('2026-11-01', '17:30', false),
    ('2026-10-31', '20:30', false),
    ('2026-11-01', '20:30', false)
) as s (fecha, hora, vose);

with p as (
    insert into public.programaciones (cine_id, pelicula_id, entradas_espanol, entradas_vose, colaboracion_nombre, colaboracion_logo)
    values ('regio', 'la-bola-negra', null, null, null, null)
    returning id
)
insert into public.sesiones (programacion_id, fecha, hora, vose)
select p.id, s.fecha::date, s.hora, s.vose
from p, (values
    ('2026-11-06', '20:00', false),
    ('2026-11-07', '17:30', false),
    ('2026-11-08', '17:30', false),
    ('2026-11-07', '20:30', false),
    ('2026-11-08', '20:30', false)
) as s (fecha, hora, vose);

commit;
