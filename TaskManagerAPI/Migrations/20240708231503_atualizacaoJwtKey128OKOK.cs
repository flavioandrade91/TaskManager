using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace TaskManagerAPI.Migrations
{
    /// <inheritdoc />
    public partial class atualizacaoJwtKey128OKOK : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "Id",
                keyValue: new Guid("047d515f-c054-465d-916a-786fc6ff733b"));

            migrationBuilder.InsertData(
                table: "user",
                columns: new[] { "Id", "CreatedAt", "Email", "Name", "PasswordHash" },
                values: new object[] { new Guid("90896eec-2b48-439f-bd2a-959082fb5a33"), new DateTime(2024, 7, 8, 20, 15, 3, 806, DateTimeKind.Local).AddTicks(9817), "admin@email.com", "admin", "$2a$11$2vioAx126n/WqA6CzEpen.VKSWp54c24VCVrgvHxrR37HHsEsGaGu" });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DeleteData(
                table: "user",
                keyColumn: "Id",
                keyValue: new Guid("90896eec-2b48-439f-bd2a-959082fb5a33"));

            migrationBuilder.InsertData(
                table: "user",
                columns: new[] { "Id", "CreatedAt", "Email", "Name", "PasswordHash" },
                values: new object[] { new Guid("047d515f-c054-465d-916a-786fc6ff733b"), new DateTime(2024, 7, 8, 20, 7, 27, 799, DateTimeKind.Local).AddTicks(8985), "admin@email.com", "admin", "$2a$11$QCDm7JNdlOPqZbTEdfC.o.A/wnRpiTzrH/bfXy2Q/sX8e0LDD3/9W" });
        }
    }
}
