using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Farming_Assistant.Entites
{
    [Table("crop")]
    public class Crop
    {
        [Key]
        public long cropId { get; set; } //Primary Key

        [Column(TypeName = "varchar")]
        [Required(ErrorMessage = "Please Enter Crop Name ")]
        [StringLength(50)]
        public string cropName { get; set; } //Crop Name

        [Column(TypeName = "varchar")]
        [Required(ErrorMessage = "Please Enter Crop Quantity ")]
        [StringLength(50)]
        public string cropQuantity { get; set; } //Crop Quantity

        [Column(TypeName = "varchar")]
        [Required(ErrorMessage = "Please Enter Crop Category ")]
        [StringLength(50)]
        public string cropCategory { get; set; } //Crop Category

        public string cropStatus { get; set; } //Crop Status

        [Column(TypeName = "varchar")]
        [Required(ErrorMessage = "Please Enter Price ")]
        public double cropPriceInRupeesPerKg { get; set; } //Crop Price

        [ForeignKey("farmerId")]
        public long farmerId { get; set; }
    }
}
