namespace server.Models.Interface
{
    public interface IDish
    {
        public int Id { get; set; }

        public string DishName { get; set; }

        public int Price { get; set; }
    }
}