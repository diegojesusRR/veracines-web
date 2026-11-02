-- Unifica peliculas.edad_recomendada en las calificaciones oficiales de España (ICAA).
-- Valores calculados con TMDB (calificación de España de cada película) el 2026-11-02;
-- si TMDB no la tenía, se tradujo el texto anterior. 34 películas cambian.
-- Después, una restricción impide valores fuera de la lista.

begin;

update public.peliculas as p
set edad_recomendada = v.edad
from (values
    ('a-complete-unknown', 'No recomendada menores 16 años'),  -- A Complete Unknown: No recomendada menores 12 años (TMDB 16)
    ('al-otro-barrio', 'No recomendada menores 12 años'),  -- Al otro barrio: Todos los públicos (TMDB 12)
    ('alien-romulus', 'No recomendada menores 18 años'),  -- Alien: Romulus: No recomendada menores 16 años (TMDB 18)
    ('bad-boys-ride-or-die', 'No recomendada menores 18 años'),  -- Bad Boys: Ride or Die: No recomendada menores 16 años (TMDB 18)
    ('blancanieves', 'No recomendada menores 7 años'),  -- Blancanieves: Todos los públicos (TMDB 7)
    ('conclave', 'No recomendada menores 12 años'),  -- Conclave: No recomendada menores 7 años (TMDB 12)
    ('cuerpo-escombro', 'No recomendada menores 12 años'),  -- Cuerpo Escombro: No recomendada menores 7 años (TMDB 12)
    ('deadpool-y-lobezno', 'No recomendada menores 18 años'),  -- Deadpool y Lobezno: No recomendada menores 16 años (TMDB 18)
    ('el-cautivo', 'No recomendada menores 16 años'),  -- El Cautivo: No recomendada menores 12 años (TMDB 16)
    ('el-final-de-oak-street', 'No recomendada menores 12 años'),  -- El final de Oak Street: No recomendada menores 13 años (TMDB 12)
    ('el-padrino-ii', 'No recomendada menores 18 años'),  -- El padrino. Parte II: No recomendada para menores de 18 años (TMDB 18)
    ('f1-la-pelicula', 'No recomendada menores 12 años'),  -- F1: La película: No recomendada menores 13 años (TMDB 12)
    ('gladiator-2', 'No recomendada menores 16 años'),  -- Gladiator II: No recomendada menores 12 años (TMDB 16)
    ('haciendo-amigos', 'No recomendada menores 12 años'),  -- Haciendo Amigos: No recomendada menores 7 años (TMDB 12)
    ('karate-kid-leyendas', 'No recomendada menores 7 años'),  -- Karate Kid: Leyendas: No recomendada menores 12 años (TMDB 7)
    ('la-asistenta', 'No recomendada menores 18 años'),  -- La asistenta: No recomendada menores 16 años (TMDB 18)
    ('la-bola-negra', 'No recomendada menores 16 años'),  -- La bola negra: No recomendada para menores de 16 años (TMDB 16)
    ('la-odisea', 'No recomendada menores 16 años'),  -- La odisea: No recomendada menores 7 años (TMDB 16)
    ('patrulla-canina-dino-pelicula', 'No recomendada menores 7 años'),  -- La Patrulla Canina: La dino película: Todos los públicos (TMDB 7)
    ('los-tipos-malos-2', 'Todos los públicos'),  -- Los tipos malos 2: No recomendada menores 7 años (TMDB Ai)
    ('mikaela', 'No recomendada menores 16 años'),  -- Mikaela: No recomendada menores 12 años (TMDB 16)
    ('minions-and-monsters', 'No recomendada menores 7 años'),  -- Minions & Monsters: Todos los públicos (TMDB 7)
    ('nadie-2', 'No recomendada menores 16 años'),  -- Nadie 2: No recomendada menores 18 años (TMDB 16)
    ('parpadea-dos-veces', 'No recomendada menores 18 años'),  -- Parpadea dos veces: Pendiente de calificación (TMDB 18)
    ('proyecto-salvacion', 'No recomendada menores 12 años'),  -- Proyecto Salvación: No recomendada menores 7 años (TMDB 12)
    ('sonic-3', 'No recomendada menores 7 años'),  -- Sonic 3: La Película: Todos los públicos (TMDB 7)
    ('super-mario-galaxy', 'Todos los públicos'),  -- Super Mario Galaxy: La película: No recomendada menores 7 años (TMDB Ai)
    ('superman-2025', 'No recomendada menores 12 años'),  -- Superman: No recomendada menores 13 años (TMDB 12)
    ('un-lugar-tranquilo-dia-1', 'No recomendada menores 12 años'),  -- Un Lugar Tranquilo: Dia 1: Pendiente de Calificación (TMDB 12)
    ('una-pelicula-de-minecraft', 'No recomendada menores 7 años'),  -- Una película de Minecraft: Todos los públicos (TMDB 7)
    ('vaiana', 'No recomendada menores 7 años'),  -- Vaiana: No recomendada menores 3 años (TMDB 7)
    ('voy-a-pasarmelo-mejor', 'No recomendada menores 12 años'),  -- Voy a pasarmelo mejor: No recomendada menores 7 años (TMDB 12)
    ('wicked', 'Todos los públicos'),  -- Wicked: No recomendada menores 7 años (TMDB A)
    ('zootropolis-2', 'No recomendada menores 7 años')   -- Zootrópolis 2: Todos los públicos (TMDB 7)
) as v (id, edad)
where p.id = v.id;

alter table public.peliculas
    add constraint peliculas_edad_recomendada_valida check (edad_recomendada in (
        'Todos los públicos',
        'No recomendada menores 7 años',
        'No recomendada menores 12 años',
        'No recomendada menores 16 años',
        'No recomendada menores 18 años',
        'Pendiente de calificación'
    ));

commit;
