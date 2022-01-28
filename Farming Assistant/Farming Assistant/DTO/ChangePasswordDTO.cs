namespace Farming_Assistant.DTO
{
    public class ChangePasswordDTO
    {
        public string email { get; set; } //email
        public string oldPassword { get; set; } //oldPassword
        public string newPassword { get; set; } //newPassword
    }
}
