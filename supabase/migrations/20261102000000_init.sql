-- Esquema inicial de Veracines: cines, películas, programaciones y sesiones.
-- Equivale a src/consts/{cines,peliculas,proyecciones}.ts.

-- ─── Cines ──────────────────────────────────────────────────────────────────
create table public.cines (
    id                    text primary key,              -- slug de URL: /cartelera-<id>
    nombre                text not null,
    corto                 text not null,
    color                 text not null check (color in ('primary', 'secondary')),
    imagen                text not null,
    telefono              text not null,
    hora_fija_proyeccion  text,                          -- 'HH:MM'
    venta_online          boolean not null default false,
    url_venta_online      text,

    -- Localización
    direccion             text not null,
    descripcion           text not null,
    ciudad                text not null,
    provincia             text not null,
    codigo_postal         text not null,
    pais                  text not null default 'ES',
    maps_embed_key        text not null,                 -- parámetro pb= del embed de Google Maps

    -- Temporada: se guarda sin año ('MM-DD'); si fin < inicio, cruza de año
    temporada_inicio      text not null check (temporada_inicio ~ '^\d{2}-\d{2}$'),
    temporada_fin         text not null check (temporada_fin ~ '^\d{2}-\d{2}$'),
    dias_semana           text[] not null,               -- 'Monday'…'Sunday' (schema.org)
    hora_apertura         text not null,
    hora_cierre           text not null,

    activo                boolean not null default true,
    orden                 smallint not null default 0,
    created_at            timestamptz not null default now()
);

-- ─── Películas ──────────────────────────────────────────────────────────────
create table public.peliculas (
    id                text primary key,                  -- slug de URL: /peliculas/<id>
    nombre            text not null,
    descripcion       text not null,
    imagen            text not null,                     -- fichero en public/img/peliculas
    edad_recomendada  text not null,
    video_url         text,                              -- embed de YouTube
    created_at        timestamptz not null default now()
);

-- ─── Programaciones (una película en un cine durante un periodo) ────────────
create table public.programaciones (
    id                   bigint generated always as identity primary key,
    cine_id              text not null references public.cines (id) on update cascade,
    pelicula_id          text not null references public.peliculas (id) on update cascade,
    entradas_espanol     text,
    entradas_vose        text,
    colaboracion_nombre  text,
    colaboracion_logo    text,                           -- ruta relativa a /public
    created_at           timestamptz not null default now()
);

create index programaciones_cine_idx on public.programaciones (cine_id);
create index programaciones_pelicula_idx on public.programaciones (pelicula_id);

-- ─── Sesiones ───────────────────────────────────────────────────────────────
create table public.sesiones (
    id                bigint generated always as identity primary key,
    programacion_id   bigint not null references public.programaciones (id) on delete cascade,
    fecha             date not null,
    hora              text not null check (hora ~ '^\d{2}:\d{2}$'),
    vose              boolean not null default false,
    unique (programacion_id, fecha, hora)
);

create index sesiones_fecha_idx on public.sesiones (fecha);

-- ─── Seguridad ──────────────────────────────────────────────────────────────
-- Lectura pública (clave anon). Las escrituras solo con la service role,
-- que se salta RLS: desde el panel de Supabase o scripts/seed-supabase.ts.
alter table public.cines          enable row level security;
alter table public.peliculas      enable row level security;
alter table public.programaciones enable row level security;
alter table public.sesiones       enable row level security;

create policy "Lectura pública" on public.cines          for select using (true);
create policy "Lectura pública" on public.peliculas      for select using (true);
create policy "Lectura pública" on public.programaciones for select using (true);
create policy "Lectura pública" on public.sesiones       for select using (true);
