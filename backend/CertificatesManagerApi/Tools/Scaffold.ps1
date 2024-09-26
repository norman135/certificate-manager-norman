$appSettingsFile = "appsettings.Development.json"

$appSettings = Get-Content $appSettingsFile -Raw | ConvertFrom-Json

$connectionString = $appSettings.ConnectionStrings.Postgres

$provider = 'Npgsql.EntityFrameworkCore.PostgreSQL'
$entitiesDir = 'Entities'
$contextDir = 'Contexts'
$contextName = 'CertificateManagerContext'

dotnet-ef dbcontext scaffold $connectionString $provider --output-dir $entitiesDir --context-dir $contextDir  --context $contextName --force