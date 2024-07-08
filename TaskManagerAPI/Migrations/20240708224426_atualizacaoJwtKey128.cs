using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TaskManagerAPI.Migrations
{
    /// <inheritdoc />
    public partial class atualizacaoJwtKey128 : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "Id",
                keyValue: new Guid("cd555e8d-795e-4d02-ac5b-cdda1f3db8d4"));

            migrationBuilder.InsertData(
                table: "user",
                columns: new[] { "Id", "CreatedAt", "Email", "Name", "PasswordHash" },
                values: new object[] { new Guid("7a2fe48a-d87c-40c0-8ea7-b78c553e91aa"), new DateTime(2024, 7, 8, 19, 44, 26, 171, DateTimeKind.Local).AddTicks(82), "admin@email.com", "admin", "$2a$11$H9BETYIe37cI0EP2rE5kz.ZXiX9PoGS2ywlYtZinliDQKsC1jCPW6" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "Id",
                keyValue: new Guid("7a2fe48a-d87c-40c0-8ea7-b78c553e91aa"));

            migrationBuilder.InsertData(
                table: "user",
                columns: new[] { "Id", "CreatedAt", "Email", "Name", "PasswordHash" },
                values: new object[] { new Guid("cd555e8d-795e-4d02-ac5b-cdda1f3db8d4"), new DateTime(2024, 7, 8, 19, 41, 4, 369, DateTimeKind.Local).AddTicks(8751), "admin@email.com", "admin", "$2a$11$prhIzRK.01/TJ1BUyGjQjOvw3lBBiplTzMsD3zzhL3Znj01kHKPiC" });
        }
    }
}
