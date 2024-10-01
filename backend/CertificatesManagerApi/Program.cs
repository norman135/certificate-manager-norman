using CertificatesManagerApi.Contexts;
using CertificatesManagerApi.Repository;
using CertificatesManagerApi.Services;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

// Add services to the container.

builder.Services.AddControllers();
// Learn more about configuring Swagger/OpenAPI at https://aka.ms/aspnetcore/swashbuckle
builder.Services.AddEndpointsApiExplorer();
builder.Services.AddSwaggerGen();

builder.Services.AddDbContext<CertificateManagerContext>(options =>
    options.UseNpgsql(builder.Configuration.GetConnectionString("Postgres")));

builder.Services.AddScoped<CertificateRepository>();
builder.Services.AddScoped<CertificateTypeRepository>();
builder.Services.AddScoped<SupplierRepository>();
builder.Services.AddScoped<UserRepository>();
builder.Services.AddScoped<CommentRepository>();

builder.Services.AddScoped<CertificateService>();
builder.Services.AddScoped<CertificateTypeService>();
builder.Services.AddScoped<SupplierService>();
builder.Services.AddScoped<UserService>();
builder.Services.AddScoped<CommentService>();

var app = builder.Build();

// Configure the HTTP request pipeline.
if (app.Environment.IsDevelopment())
{
    app.UseSwagger();
    app.UseSwaggerUI();
}

app.UseHttpsRedirection();

app.UseAuthorization();

app.MapControllers();

app.Run();
