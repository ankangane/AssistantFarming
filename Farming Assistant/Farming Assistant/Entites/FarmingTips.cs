using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Farming_Assistant.Entites
{
    [Table("farmingTips")]
    public class FarmingTips
    {
        [Key]
        public long farmingTipsId { get; set; } //Primary Key

        [Column(TypeName = "varchar")]
        [Required(ErrorMessage = "Please Enter Farming Tips Message ")]
        [StringLength(50)]
        public string farmingTipsMessage { get; set; } //Farming tips entered by Admin
    }
}
