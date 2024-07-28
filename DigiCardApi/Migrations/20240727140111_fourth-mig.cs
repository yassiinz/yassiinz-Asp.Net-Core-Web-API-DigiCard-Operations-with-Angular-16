using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CardAPI.Migrations
{
    /// <inheritdoc />
    public partial class fourthmig : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Delivrance",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Nom = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    Prenom = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    NumDeCarte = table.Column<int>(type: "int", nullable: false),
                    NumCin = table.Column<int>(type: "int", nullable: false),
                    DateDeNaissance = table.Column<DateOnly>(type: "date", nullable: false),
                    GSM = table.Column<int>(type: "int", nullable: false),
                    Email = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Delivrance", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Delivrance");
        }
    }
}
