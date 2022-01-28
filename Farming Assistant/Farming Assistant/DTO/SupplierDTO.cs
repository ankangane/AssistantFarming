namespace Farming_Assistant.DTO
{
    public class SupplierDTO
    {
        public long supplierId { get; set; } //Primary key
        public string role { get; set; }  //Role of the person
        public string supplierName { get; set; } //Name of the supplier
        public string supplierEmail { get; set; } //EmailId of the supplier 
        public string supplierContanctNo { get; set; } //Contanct supplier of the farmer
        public string supplierAddress { get; set; }  //Address of the supplier
    }
}
