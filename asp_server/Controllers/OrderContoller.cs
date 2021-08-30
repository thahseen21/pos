using Microsoft.AspNetCore.Mvc;
using asp_server.Data;
using System.Threading.Tasks;

namespace asp_server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class OrderContoller : Controller
    {
        private readonly ApplicationDbContext _db;

        [HttpPost("neworder")]
        public async Task<IActionResult> NewOrder([FromBody] object data)
        {
            await this._db.AddAsync(data);
            await this._db.SaveChangesAsync();
            return Ok(data);
        }
    }
}
