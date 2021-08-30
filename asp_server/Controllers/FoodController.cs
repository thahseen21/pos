using System;
using System.Collections.Generic;
using Microsoft.AspNetCore.Mvc;
using asp_server.Data;
using asp_server.Models;

namespace asp_server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FoodController : ControllerBase
    {
        private readonly ApplicationDbContext _db;

        public FoodController(ApplicationDbContext db)
        {
            this._db = db;
        }

        [HttpGet("category")]
        public IActionResult Category()
        {
            try
            {
                IEnumerable<Category> categoryList = _db.Category;
                return Ok(categoryList);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"{ex}");
                
                return StatusCode(500, "Internal server error");
            }
        }

        [HttpGet("dish")]
        public IActionResult Dish()
        {
            try
            {
                IEnumerable<Dish> dishList = _db.Dish;
                return Ok(dishList);
            }
            catch (Exception ex)
            {
                Console.WriteLine($"{ex}");
                
                return StatusCode(500,"Internal server error");
            }
        }
    }
}
