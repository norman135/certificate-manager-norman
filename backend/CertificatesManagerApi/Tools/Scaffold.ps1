$appSettingsFile = "appsettings.json"

$appSettings = Get-Content $appSettingsFile -Raw | ConvertFrom-Json

$connectionString = $appSettings.ConnectionStrings.DefaultConnection

$provider = "Npgsql.EntityFrameworkCore.PostgreSQL"
$entitiesDir = "Entities"
$contextDir = "Contexts"
$contextName = "CertificateManagerContext"

dotnet-ef dbcontext scaffold $connectionString  --output-dir $entitiesDir --context-dir $contextDir  --context $contextName