using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace asp_server.Migrations
{
    public partial class InitialMigration : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder
                .CreateTable(name: "Category",
                columns: table =>
                    new {
                        Id =
                            table
                                .Column<int>(type: "int", nullable: false)
                                .Annotation("SqlServer:Identity", "1, 1"),
                        CategoryName =
                            table
                                .Column<string>(type: "nvarchar(max)",
                                nullable: true)
                    },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Category", x => x.Id);
                });

            migrationBuilder
                .CreateTable(name: "Order",
                columns: table =>
                    new {
                        Id =
                            table
                                .Column<int>(type: "int", nullable: false)
                                .Annotation("SqlServer:Identity", "1, 1"),
                        Table = table.Column<int>(type: "int", nullable: false),
                        CreatedAt =
                            table
                                .Column<DateTime>(type: "datetime2",
                                nullable: true,
                                defaultValueSql: "GetDate()"),
                        TransactionMode =
                            table
                                .Column<string>(type: "nvarchar(max)",
                                nullable: true),
                        isPaid =
                            table.Column<bool>(type: "bit", nullable: true,defaultValueSql:"false")
                    },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Order", x => x.Id);
                });

            migrationBuilder
                .CreateTable(name: "Dish",
                columns: table =>
                    new {
                        Id =
                            table
                                .Column<int>(type: "int", nullable: false)
                                .Annotation("SqlServer:Identity", "1, 1"),
                        CategoryId =
                            table.Column<int>(type: "int", nullable: false),
                        Name =
                            table
                                .Column<string>(type: "nvarchar(max)",
                                nullable: true),
                        Price = table.Column<int>(type: "int", nullable: false)
                    },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Dish", x => x.Id);
                    table
                        .ForeignKey(name: "FK_Dish_Category_CategoryId",
                        column: x => x.CategoryId,
                        principalTable: "Category",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder
                .CreateTable(name: "OrderMapper",
                columns: table =>
                    new {
                        Id =
                            table
                                .Column<int>(type: "int", nullable: false)
                                .Annotation("SqlServer:Identity", "1, 1"),
                        OrderId =
                            table.Column<int>(type: "int", nullable: false),
                        DishId =
                            table.Column<int>(type: "int", nullable: false),
                        Cout =
                            table.Column<byte>(type: "tinyint", nullable: false)
                    },
                constraints: table =>
                {
                    table.PrimaryKey("PK_OrderMapper", x => x.Id);
                    table
                        .ForeignKey(name: "FK_OrderMapper_Dish_DishId",
                        column: x => x.DishId,
                        principalTable: "Dish",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                    table
                        .ForeignKey(name: "FK_OrderMapper_Order_OrderId",
                        column: x => x.OrderId,
                        principalTable: "Order",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder
                .CreateIndex(name: "IX_Dish_CategoryId",
                table: "Dish",
                column: "CategoryId");

            migrationBuilder
                .CreateIndex(name: "IX_OrderMapper_DishId",
                table: "OrderMapper",
                column: "DishId");

            migrationBuilder
                .CreateIndex(name: "IX_OrderMapper_OrderId",
                table: "OrderMapper",
                column: "OrderId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(name: "OrderMapper");

            migrationBuilder.DropTable(name: "Dish");

            migrationBuilder.DropTable(name: "Order");

            migrationBuilder.DropTable(name: "Category");
        }
    }
}
