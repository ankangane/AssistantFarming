using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Farming_Assistant.Entites
{
    [Table("admins")]
    public class Admin
    {
        [Key]
        public long adminId { get; set; } //Primary key

        [Required]
        public string role { get; set; } //Role of the person

        [Required]
        public string adminQuestion { get; set; } //Security Question Of Admin

        [Required]
        public string adminAnswer { get; set; } //Security Answer Of Admin

        [Required]
        public string adminName { get; set; } //Name of the Admin

        [Required]
        [EmailAddress]
        public string adminEmail { get; set; }  //EmailId of the Admin which will be used for LogIn purpose

        [Required(ErrorMessage = "Please create a password")]
        public string password { get; set; } //Password of the Admin which will be used for LogIn purpose

        [Required]
        [Phone]
        public string adminContanctNo { get; set; } //Contanct number of the Admin
    }
}
