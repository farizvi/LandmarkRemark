using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace LandmarkRemark.Persistence.Migrations
{
    public partial class NoteEntityAdded : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Notes",
                columns: table => new
                {
                    Id = table.Column<Guid>(nullable: false),
                    MarkerId = table.Column<Guid>(nullable: false),
                    Username = table.Column<string>(nullable: true),
                    NoteText = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Notes", x => x.Id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Notes");
        }
    }
}
