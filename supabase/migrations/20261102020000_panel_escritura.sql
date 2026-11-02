-- Panel de gestión (repo veracines-form): permisos de escritura.
--
-- Los usuarios del panel son los de Supabase Auth (Authentication → Users).
-- Cualquier usuario con sesión puede editar la cartelera, así que el registro
-- público DEBE estar desactivado: Authentication → Sign In / Providers →
-- "Allow new users to sign up" = off. Las cuentas se crean a mano en
-- Authentication → Users → Add user.
--
-- Las escrituras se hacen con la sesión del usuario (clave anon + JWT), nunca con
-- la service role, así que RLS es quien decide.

-- ─── Escritura en la cartelera ──────────────────────────────────────────────
create policy "Usuarios con sesión insertan" on public.peliculas      for insert to authenticated with check (true);
create policy "Usuarios con sesión editan"   on public.peliculas      for update to authenticated using (true) with check (true);
create policy "Usuarios con sesión borran"   on public.peliculas      for delete to authenticated using (true);

create policy "Usuarios con sesión insertan" on public.programaciones for insert to authenticated with check (true);
create policy "Usuarios con sesión editan"   on public.programaciones for update to authenticated using (true) with check (true);
create policy "Usuarios con sesión borran"   on public.programaciones for delete to authenticated using (true);

create policy "Usuarios con sesión insertan" on public.sesiones       for insert to authenticated with check (true);
create policy "Usuarios con sesión editan"   on public.sesiones       for update to authenticated using (true) with check (true);
create policy "Usuarios con sesión borran"   on public.sesiones       for delete to authenticated using (true);

-- ─── Subida de carteles y logos ─────────────────────────────────────────────
create policy "Usuarios con sesión suben imágenes" on storage.objects
    for insert to authenticated
    with check (bucket_id = 'Veracines Storage');

create policy "Usuarios con sesión reemplazan imágenes" on storage.objects
    for update to authenticated
    using (bucket_id = 'Veracines Storage')
    with check (bucket_id = 'Veracines Storage');

create policy "Usuarios con sesión borran imágenes" on storage.objects
    for delete to authenticated
    using (bucket_id = 'Veracines Storage');
