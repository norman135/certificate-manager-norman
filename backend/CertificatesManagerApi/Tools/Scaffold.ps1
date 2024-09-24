$connectionString = "Host=localhost;Database=certificatemanager;Username=postgres;Password=password"
$provider = "Npgsql.EntityFrameworkCore.PostgreSQL"
$entitiesDir = "Entities"
$contextDir = "Contexts"
$contextName = "CertificateManagerContext"

dotnet-ef dbcontext scaffold $connectionString  -output-dir $entitiesDir -context-dir $contextDir  -context $contextName