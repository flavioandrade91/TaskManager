using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TaskManagerAPI.Migrations
{
    /// <inheritdoc />
    public partial class AtualizacaoAdmin : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "Id",
                keyValue: new Guid("5117e30b-0e80-437d-a299-001dcf6682cf"));

            migrationBuilder.InsertData(
                table: "user",
                columns: new[] { "Id", "CreatedAt", "Email", "Name", "PasswordHash" },
                values: new object[] { new Guid("368fdb5f-4ef4-45da-a08d-dfed683b024a"), new DateTime(2024, 7, 8, 19, 24, 37, 443, DateTimeKind.Local).AddTicks(7867), "admin@email.com", "admin", "$2a$11$HnreNGYq0REoE30r3jdnjekMFndGt94U/kDLvNQtY3VyDWRyzbzSm" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "Id",
                keyValue: new Guid("368fdb5f-4ef4-45da-a08d-dfed683b024a"));

            migrationBuilder.InsertData(
                table: "user",
                columns: new[] { "Id", "CreatedAt", "Email", "Name", "PasswordHash" },
                values: new object[] { new Guid("5117e30b-0e80-437d-a299-001dcf6682cf"), new DateTime(2024, 7, 8, 22, 18, 31, 217, DateTimeKind.Utc).AddTicks(1751), "admin@email.com", "admin", "$2a$11$YMxZFumx2P7SU64iZKIuMucS1atIoE3xDmWkMTpiVJTjSmDJ8NKTu" });
        }
    }
}
