using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Farming_Assistant.Entites
{
    [Table("supplier")]
    public class Supplier
    {
        [Key]
        public long supplierId { get; set; } //Primary Key

        public string Role { get; set; } //Role of the User

        [Required]
        public string supplierQuestion { get; set; } //Security Question Of Supplier

        [Required]
        public string supplierAnswer { get; set; }  //Security Answer Of Supplier

        [Required(ErrorMessage = "Please Enter your name")]
        public string supplierName { get; set; } //Name of the Supplier

        [Required(ErrorMessage = "Please Enter an Email address")]
        [EmailAddress(ErrorMessage = "Enter a valid Email Address")]
        public string supplierEmail { get; set; } //EmailId of the Supplier which will be used for LogIn purpose

        [Required(ErrorMessage = "Please create a password")]
        public string password { get; set; } //Password of the Supplier which will be used for LogIn purpose

        [Required(ErrorMessage = "Please Enter your Contanct Number")]
        [Phone(ErrorMessage = "Contanct no format not Correct")]
        public string supplierContanctNo { get; set; } //Contanct number of the Supplier

        [Required(ErrorMessage = "Please Enter your address")]
        public string supplierAddress { get; set; }  //Address of the Supplier
    }
}
