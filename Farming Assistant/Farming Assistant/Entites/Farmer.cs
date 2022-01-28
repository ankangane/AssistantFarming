using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Farming_Assistant.Entites
{
    [Table("farmer")]
    public class Farmer
    {
        [Key]
        public long farmerId { get; set; } //Primary Key

        public string Role { get; set; } //Role of the User

        [Required]
        public string farmerQuestion { get; set; } //Security Question Of Farmer

        [Required]
        public string farmerAnswer { get; set; } //Security Answer Of Farmer

        [Required(ErrorMessage = "Please Enter your name")]
        public string farmerName { get; set; } //Name of the Farmer

        [Required(ErrorMessage = "Please Enter an Email address")]
        [EmailAddress(ErrorMessage = "Enter a valid Email Address")]
        public string farmerEmail { get; set; } //EmailId of the Farmer which will be used for LogIn purpose

        [Required(ErrorMessage = "Please create a password")]
        public string password { get; set; } //Password of the Farmer which will be used for LogIn purpose

        [Required(ErrorMessage = "Please Enter your Contanct Number")]
        [Phone(ErrorMessage = "Contanct no format not Correct")]
        public string farmerContanctNo { get; set; } //Contanct number of the Farmer

        [Required(ErrorMessage = "Please Enter your address")]
        public string farmerAddress { get; set; }  //Address of the Farmer
    }
}
