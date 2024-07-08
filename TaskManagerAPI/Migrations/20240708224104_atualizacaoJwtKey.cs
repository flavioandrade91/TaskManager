using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TaskManagerAPI.Migrations
{
    /// <inheritdoc />
    public partial class atualizacaoJwtKey : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "Id",
                keyValue: new Guid("368fdb5f-4ef4-45da-a08d-dfed683b024a"));

            migrationBuilder.InsertData(
                table: "user",
                columns: new[] { "Id", "CreatedAt", "Email", "Name", "PasswordHash" },
                values: new object[] { new Guid("cd555e8d-795e-4d02-ac5b-cdda1f3db8d4"), new DateTime(2024, 7, 8, 19, 41, 4, 369, DateTimeKind.Local).AddTicks(8751), "admin@email.com", "admin", "$2a$11$prhIzRK.01/TJ1BUyGjQjOvw3lBBiplTzMsD3zzhL3Znj01kHKPiC" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "Id",
                keyValue: new Guid("cd555e8d-795e-4d02-ac5b-cdda1f3db8d4"));

            migrationBuilder.InsertData(
                table: "user",
                columns: new[] { "Id", "CreatedAt", "Email", "Name", "PasswordHash" },
                values: new object[] { new Guid("368fdb5f-4ef4-45da-a08d-dfed683b024a"), new DateTime(2024, 7, 8, 19, 24, 37, 443, DateTimeKind.Local).AddTicks(7867), "admin@email.com", "admin", "$2a$11$HnreNGYq0REoE30r3jdnjekMFndGt94U/kDLvNQtY3VyDWRyzbzSm" });
        }
    }
}
