namespace Farming_Assistant.DTO
{
    public class SignUpDTO
    {
        public string Role { get; set; }
        public long Id { get; set; } //Primary key
        public string Name { get; set; } //Name
        public string Email { get; set; }  //EmailId which will be used for LogIn purpose
        public string securityQuestion { get; set; } //Security Question 
        public string securityAnswer { get; set; } //Security Answer 
        public string Address { get; set; }  //Address
        public string ContanctNo { get; set; } //Contanct
        public string password { get; set; } //Password which will be used for LogIn purpose
        
    }
}
