using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace CardAPI.Migrations
{
    /// <inheritdoc />
    public partial class _4mig : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<string>(
                name: "Status",
                table: "CardRequests",
                type: "nvarchar(100)",
                nullable: false,
                defaultValue: "");
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Status",
                table: "CardRequests");
        }
    }
}
