using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Farming_Assistant.Entites
{
    [Table("complaints")]
    public class Complaint
    {
        [Key]
        public long complaintsId { get; set; } //Primary key

        [Column(TypeName = "varchar")]
        [Required(ErrorMessage = "Please Enter Complaint Message ")]
        [StringLength(50)]
        public string complaintMessage { get; set; } //Complaint Message Entered by famrer

        public string complaintStatus { get; set; } //Complaint status 
    }
}
