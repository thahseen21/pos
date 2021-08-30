using System;

namespace asp_server.Models
{
    public class Order
    {
        public int Id { get; set; }

        public int Table { get; set; }

        public DateTime CreatedAt { get; set; }

        public string TransactionMode { get; set; }

        public bool isPaid { get; set; }
    }
}
