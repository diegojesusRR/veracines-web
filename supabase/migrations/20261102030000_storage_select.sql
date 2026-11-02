-- El panel sube carteles y logos con upsert, y Storage exige para eso permisos
-- de INSERT, UPDATE y también SELECT sobre storage.objects. Que el bucket sea
-- público no cuenta: eso solo afecta a las URLs públicas, no a RLS.
-- Sin esta política, la subida falla con "new row violates row-level security policy".

create policy "Usuarios con sesión leen imágenes" on storage.objects
    for select to authenticated
    using (bucket_id = 'Veracines Storage');
