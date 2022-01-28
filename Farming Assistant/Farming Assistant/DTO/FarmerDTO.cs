namespace Farming_Assistant.DTO
{
    public class FarmerDTO
    {
        public long farmerId { get; set; } //Primary key
        public string role { get; set; }  //Role of the person
        public string farmerName { get; set; } //Name of the farmer
        public string farmerEmail { get; set; } //EmailId of the farmer 
        public string farmerContanctNo { get; set; } //Contanct number of the farmer
        public string farmerAddress { get; set; } //Address of the farmer
    }
}
