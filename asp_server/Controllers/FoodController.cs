using System;
using Microsoft.AspNetCore.Mvc;

namespace asp_server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class FoodController : ControllerBase
    {
        public string[]
            Category = { "Biriyani", "Shawarma", "Chick", "Mutton" };

        [HttpGet("category")]
        public IActionResult category()
        {
            return Ok(Category);
        }
    }
}
