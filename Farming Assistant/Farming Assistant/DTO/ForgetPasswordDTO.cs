namespace Farming_Assistant.DTO
{
    public class ForgetPasswordDTO
    {
        public string role { get; set; } //role of user
        public string email { get; set; } //email of user
        public string securityAnswer { get; set; } //security answer of user
        public string newPassword { get; set; } //new password of user 
    }
}
