using Farming_Assistant.DTO;
using Farming_Assistant.Entites;
using Farming_Assistant.Models;
using System.Collections.Generic;

namespace Farming_Assistant.Repositories
{
    public interface IAdminRepository
    {
        //Method for Viewing Admin Details
        AdminDTO viewAdminById(long AdminId);

        //Method for Showing list of farmers
        List<FarmerDTO> viewFarmers();

        //Method for Showing List of Suppliers
        List<SupplierDTO> viewSuppliers();

        //Change Password method for Admin
        FeedBack changePassword(ChangePasswordDTO changePasswordDTO);

        //Forgot Password method for Admin
        FeedBack forgetPassword (ForgetPasswordDTO forgetPasswordDTO);

        //Method for Checking Admin Credentials with database
        Admin validateAdmin(LoginModel login);

        //Generate token for admin
        string getTokenForAdmin(Admin person);

        //Method for Showing List of Complaints
        List<Complaint> getComplaints();

        //Method for Updating Complaint Status
        FeedBack updateComplaintStatus(long complaintId, ComplaintStatus status);

        //Method for adding Farming Tips to database
        void addFarmingTips(FarmingTips farmingTips);
    }
}
