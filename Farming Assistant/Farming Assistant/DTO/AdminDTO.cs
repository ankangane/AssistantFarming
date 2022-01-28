namespace Farming_Assistant.DTO
{
    public class AdminDTO
    {
        public long adminId { get; set; } //Primary key
        public string Role { get; set; }   //Role of the person
        public string adminName { get; set; }   //Name of the admin
        public string adminEmail { get; set; }   //EmailId of the admin Used for LogIn purpose
        public string adminContanctNo { get; set; } //Contanct number of the admin
    }
}
