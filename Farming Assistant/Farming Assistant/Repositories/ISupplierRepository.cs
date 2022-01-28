using Farming_Assistant.DTO;
using Farming_Assistant.Entites;
using Farming_Assistant.Models;
using System.Collections.Generic;

namespace Farming_Assistant.Repositories
{
    public interface ISupplierRepository
    {
        //Method for viewing Supplier Details
        SupplierDTO viewSupplierById(int CustomerId);

        //Method for adding New Supplier
        FeedBack addSupplier(Supplier supplier, Role role);

        //Change Password moethod for Supplier
        FeedBack changePassword(ChangePasswordDTO changePasswordDTO);

        //Forget Password moethod for Supplier
        FeedBack forgetPassword(ForgetPasswordDTO forgetPasswordDTO);

        //Method for Checking Supplier Credentials with database
        Supplier validateSupplier(LoginModel login);

        //Method for getting token for supplier
        string getTokenForSupplier(Supplier person);

        //Method for getting all crops
        List<Crop> getCrops();

        //Method for Updating Crop Status
        FeedBack updateCropStatus(long cropId, CropStatus status);

        //method for getting all Advertisements
        List<Advertisement> getAdvertisements();

        //Method for adding Advertisement details to database
        void addAdvertisement(Advertisement advertisement, AdvertisementStatus status);

        //Method for deleting Advertisement Details from database
        void advertisementDetails(long advertisementId);
    }
}
