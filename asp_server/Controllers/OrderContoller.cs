using System;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using asp_server.Data;
using asp_server.Models;
using asp_server.ViewModels;
using System.Collections.Generic;
using System.Linq;

namespace asp_server.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class OrderContoller : Controller
    {
        private readonly ApplicationDbContext _db;

        public OrderContoller(ApplicationDbContext db)
        {
            this._db = db;
        }

        [HttpPost("neworder")]
        public async Task<IActionResult> NewOrder([FromBody] Order data)
        {
            data.CreatedAt = DateTime.Now;
            await this._db.Order.AddAsync(data);
            await this._db.SaveChangesAsync();
            return Ok(data);
        }


        [HttpPut("settleorder")]
        public async Task<IActionResult> SettleOrder([FromBody] Order data)
        {
            if (data != null)
            {
                Order temp = _db.Order.FirstOrDefault(order => order.Id == data.Id);
                temp.TransactionMode = data.TransactionMode;
                temp.isPaid = data.isPaid;

                this._db.Order.Update(temp);
                await this._db.SaveChangesAsync();
                return Ok(temp);
            }else{
                return Ok("something went wrong");
            }
        }
    }
}
