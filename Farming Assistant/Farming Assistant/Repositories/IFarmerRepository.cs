using Farming_Assistant.DTO;
using Farming_Assistant.Entites;
using Farming_Assistant.Models;
using System.Collections.Generic;

namespace Farming_Assistant.Repositories
{
    public interface IFarmerRepository
    {
        //Method for Viewing Farmer Details by id
        FarmerDTO viewFarmerById(long AdminId);

        //Method for adding New Farmer
        FeedBack addFarmer(Farmer farmer, Role role);

        //Change Password moethod for Farmer
        FeedBack changePassword(ChangePasswordDTO changePasswordDTO);

        //Forgot Password moethod for Farmer
        FeedBack forgetPassword(ForgetPasswordDTO forgetPasswordDTO);

        //Method for Checking Farmer Credentials with database
        Farmer validateFarmer(LoginModel login);

        //Method for getting token for farmer
        string getTokenForFarmer(Farmer person);

        //Method for Getting all Complaints
        List<Complaint> getComplaints();

        //Method for Adding Complaints to database
        void addComplaint(Complaint complaint, ComplaintStatus status);

        //Method for Getting all crops details
        List<Crop> getCrops();

        //Method for Adding Crop details to database
        void addCropDetails(Crop crop, CropStatus status);

        //Method for Deleting Crop Details from database
        void deleteCropDetails(long cropId);

        //Method for Getting all Advertisements
        List<Advertisement> getAdvertisements();

        //Method for Updating Advertisement Status
        FeedBack updateAdvertisementStatus(long advertisementId, AdvertisementStatus status);

        //Method for Getting all FarmingTips
        List<FarmingTips> getFarmingTips();
    }
}
