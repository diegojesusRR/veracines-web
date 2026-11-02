-- Bucket público para carteles y logos: se suben desde el panel de Supabase
-- (Storage → Veracines Storage) sin desplegar la web. El bucket se creó desde el
-- panel; este script lo deja igual (útil para recrearlo en otro proyecto).
--
--   peliculas/<fichero>       ← peliculas.imagen = '<fichero>'
--   colaboraciones/<fichero>  ← programaciones.colaboracion_logo = '<fichero>'
--
-- Al ser público, cualquiera puede leer por URL. No hay políticas de escritura:
-- solo suben ficheros el panel de Supabase y la service role.

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
    'Veracines Storage',
    'Veracines Storage',
    true,
    10 * 1024 * 1024,
    array['image/jpeg', 'image/png', 'image/webp', 'image/avif']
)
on conflict (id) do update set
    public             = excluded.public,
    file_size_limit    = excluded.file_size_limit,
    allowed_mime_types = excluded.allowed_mime_types;
