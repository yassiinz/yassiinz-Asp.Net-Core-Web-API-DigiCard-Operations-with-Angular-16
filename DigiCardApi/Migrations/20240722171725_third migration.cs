using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CardAPI.Migrations
{
    /// <inheritdoc />
    public partial class thirdmigration : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AccountLabel",
                table: "CardRequests");

            migrationBuilder.DropColumn(
                name: "AccountNumber",
                table: "CardRequests");

            migrationBuilder.DropColumn(
                name: "CompanyName",
                table: "CardRequests");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "AccountLabel",
                table: "CardRequests",
                type: "nvarchar(100)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "AccountNumber",
                table: "CardRequests",
                type: "nvarchar(100)",
                nullable: false,
                defaultValue: "");

            migrationBuilder.AddColumn<string>(
                name: "CompanyName",
                table: "CardRequests",
                type: "nvarchar(100)",
                nullable: false,
                defaultValue: "");
        }
    }
}
