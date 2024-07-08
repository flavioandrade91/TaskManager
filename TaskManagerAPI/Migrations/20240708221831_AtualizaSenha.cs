using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TaskManagerAPI.Migrations
{
    /// <inheritdoc />
    public partial class AtualizaSenha : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "Id",
                keyValue: new Guid("b17a1e83-580d-4579-a0db-b5828718ff75"));

            migrationBuilder.InsertData(
                table: "user",
                columns: new[] { "Id", "CreatedAt", "Email", "Name", "PasswordHash" },
                values: new object[] { new Guid("5117e30b-0e80-437d-a299-001dcf6682cf"), new DateTime(2024, 7, 8, 22, 18, 31, 217, DateTimeKind.Utc).AddTicks(1751), "admin@email.com", "admin", "$2a$11$YMxZFumx2P7SU64iZKIuMucS1atIoE3xDmWkMTpiVJTjSmDJ8NKTu" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "Id",
                keyValue: new Guid("5117e30b-0e80-437d-a299-001dcf6682cf"));

            migrationBuilder.InsertData(
                table: "user",
                columns: new[] { "Id", "CreatedAt", "Email", "Name", "PasswordHash" },
                values: new object[] { new Guid("b17a1e83-580d-4579-a0db-b5828718ff75"), new DateTime(2024, 7, 8, 20, 42, 24, 246, DateTimeKind.Utc).AddTicks(8084), "admin@email.com", "admin", "$2a$11$LnHnMu6cEcblCvYe9gmMyOvI8JnhoCn7W2vgroyubkFw1GxZ17Ola" });
        }
    }
}
