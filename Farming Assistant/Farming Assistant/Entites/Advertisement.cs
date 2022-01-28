using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Farming_Assistant.Entites
{
    [Table("advertisement")]
    public class Advertisement
    {
        [Key]
        public long advertisementId { get; set; } //Primary key

        [Column(TypeName = "varchar")]
        [Required(ErrorMessage = "Please Enter Addertisement Message ")]
        [StringLength(50)]
        public string advertisementMessage { get; set; } //Advertisement Message Entered by supplier

        public string advertisementStatus { get; set; } //Advertisement status
    }
}
