using System;
namespace server.Models.Interface
{
    public interface IOrder
    {
        public int Id { get; set; }

        public int Table { get; set; }

        public DateTime CreatedAt { get; set; }

        public string Transaction { get; set; }

        public bool IsPaid { get; set; }


    }
}