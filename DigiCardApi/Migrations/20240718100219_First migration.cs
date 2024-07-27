using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CardAPI.Migrations
{
    /// <inheritdoc />
    public partial class Firstmigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "CardRequests",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    CompanyName = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    AccountLabel = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    AccountNumber = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    NumberOfCards = table.Column<int>(type: "int", nullable: false),
                    Comment = table.Column<string>(type: "nvarchar(100)", nullable: false),
                    CGU = table.Column<bool>(type: "bit", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_CardRequests", x => x.Id);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "CardRequests");
        }
    }
}
