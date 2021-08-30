namespace asp_server.Models
{
    public class Dish
    {
        public int Id { get; set; }

        public int CategoryId { get; set; }

        public Category Category { get; set; }

        public string Name { get; set; }

        public int Price { get; set; }
    }
}
