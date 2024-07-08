using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TaskManagerAPI.Migrations
{
    /// <inheritdoc />
    public partial class atualizacaoJwtKey128OK : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "Id",
                keyValue: new Guid("7a2fe48a-d87c-40c0-8ea7-b78c553e91aa"));

            migrationBuilder.InsertData(
                table: "user",
                columns: new[] { "Id", "CreatedAt", "Email", "Name", "PasswordHash" },
                values: new object[] { new Guid("047d515f-c054-465d-916a-786fc6ff733b"), new DateTime(2024, 7, 8, 20, 7, 27, 799, DateTimeKind.Local).AddTicks(8985), "admin@email.com", "admin", "$2a$11$QCDm7JNdlOPqZbTEdfC.o.A/wnRpiTzrH/bfXy2Q/sX8e0LDD3/9W" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "Id",
                keyValue: new Guid("047d515f-c054-465d-916a-786fc6ff733b"));

            migrationBuilder.InsertData(
                table: "user",
                columns: new[] { "Id", "CreatedAt", "Email", "Name", "PasswordHash" },
                values: new object[] { new Guid("7a2fe48a-d87c-40c0-8ea7-b78c553e91aa"), new DateTime(2024, 7, 8, 19, 44, 26, 171, DateTimeKind.Local).AddTicks(82), "admin@email.com", "admin", "$2a$11$H9BETYIe37cI0EP2rE5kz.ZXiX9PoGS2ywlYtZinliDQKsC1jCPW6" });
        }
    }
}
