@echo off
echo Scaffolding the DbContext and entities...

Scaffold-DbContext "Host=localhost;Database=certificatemanager;Username=postgres;Password=password" Npgsql.EntityFrameworkCore.PostgreSQL -OutputDir Entities -ContextDir Contexts -Context CertificateManagerContext

echo Scaffold complete!
