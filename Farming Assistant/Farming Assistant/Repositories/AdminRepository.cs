using Farming_Assistant.Context;
using Farming_Assistant.DTO;
using Farming_Assistant.Entites;
using Farming_Assistant.Models;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.IO;
using System.Linq;
using System.Security.Claims;
using System.Text;

namespace Farming_Assistant.Repositories
{
    public class AdminRepository : IAdminRepository
    {
        private FarmingAssistantDbContext context;
        public AdminRepository(FarmingAssistantDbContext context)
        {
            this.context = context;
        }

        //Change Password method for Admin
        public FeedBack changePassword(ChangePasswordDTO changePasswordDTO)
        {
            Admin admin1 = context.Admins.SingleOrDefault(s => s.adminEmail == changePasswordDTO.email);
            if (admin1 != null)
            {
                if (changePasswordDTO.oldPassword == admin1.password)
                {
                    admin1.password = changePasswordDTO.newPassword;
                    context.Admins.Update(admin1);
                    context.SaveChanges();
                    FeedBack feedback = new FeedBack { Result = true, Message = "Password Changed" };
                    return feedback;
                }
                else
                {
                    FeedBack feedback = new FeedBack { Result = false, Message = "Incorrect Password" };
                    return feedback;
                }
            }
            else
            {
                FeedBack feedback = new FeedBack { Result = false, Message = "Admin Email not registered!" };
                return feedback;
            }
        }

        //Forgot Password method for Admin
        public FeedBack forgetPassword(ForgetPasswordDTO forgetPasswordDTO)
        {
            Admin admin1 = context.Admins.SingleOrDefault(s => s.adminEmail == forgetPasswordDTO.email);
            if (admin1 != null)
            {
                if (forgetPasswordDTO.securityAnswer == admin1.adminAnswer)
                {
                    admin1.password = forgetPasswordDTO.newPassword;
                    context.Admins.Update(admin1);
                    context.SaveChanges();
                    FeedBack feedback = new FeedBack { Result = true, Message = "Password has been reset!" };
                    return feedback;
                }
                else
                {
                    FeedBack feedback = new FeedBack { Result = false, Message = "Incorrect Answer!" };
                    return feedback;
                }
            }
            else
            {
                FeedBack feedback = new FeedBack { Result = false, Message = "Admin Email not registered!" };
                return feedback;
            }
        }

        //Method for Checking Admin Credentials with database
        public Admin validateAdmin(LoginModel login)
        {
            return context.Admins.SingleOrDefault(u => u.adminEmail == login.Email && u.password == login.Password);
        }

        //Method for Getting token for Authorization for admin
        public string getTokenForAdmin(Admin person)
        {
            var _config = new ConfigurationBuilder()
                              .SetBasePath(Directory.GetCurrentDirectory())
                              .AddJsonFile("appsettings.json").Build();
            var issuer = _config["Jwt:Issuer"];
            var audience = _config["Jwt:Audience"];
            var expiry = DateTime.Now.AddMinutes(2);
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                   {
                    new Claim(ClaimTypes.NameIdentifier, person.adminId.ToString()),
                    new Claim(ClaimTypes.Name, person.adminEmail.ToString()),
                    new Claim(ClaimTypes.Role, person.role)
                   }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256Signature)
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var stringToken = tokenHandler.WriteToken(token);
            return stringToken;
        }

        //Method for Viewing Admin Details
        public AdminDTO viewAdminById(long AdminId)
        {

            Admin admin = context.Admins.SingleOrDefault(s => s.adminId == AdminId);
            if (admin != null)
            {
                AdminDTO adminDTO = new AdminDTO();
                adminDTO.adminId = admin.adminId;
                adminDTO.Role = admin.role;
                adminDTO.adminName = admin.adminName;
                adminDTO.adminEmail = admin.adminEmail;
                adminDTO.adminContanctNo = admin.adminContanctNo;
                if (adminDTO != null)
                {
                    return adminDTO;
                }
                else { return null; }
            }
            else { return null; }

        }

        //Method for Showing list of farmers
        public List<FarmerDTO> viewFarmers()
        {
            List<Farmer> farmer = context.Farmers.ToList();
            List<FarmerDTO> farmers = new List<FarmerDTO>();
            
            if(farmer != null)
            {
                foreach (Farmer x in farmer)
                {
                    FarmerDTO farmerDTO = new FarmerDTO();
                    farmerDTO.farmerId = x.farmerId;
                    farmerDTO.farmerName = x.farmerName;
                    farmerDTO.farmerEmail = x.farmerEmail;
                    farmerDTO.farmerAddress = x.farmerAddress;
                    farmerDTO.farmerContanctNo = x.farmerContanctNo;
                    farmerDTO.role = x.Role;
                    farmers.Add(farmerDTO);
                }
               return farmers;
            }
            else
            {
                return null;
            }
        }

        //Method for Showing List of Suppliers
        public List<SupplierDTO> viewSuppliers()
        {
            List<Supplier> supplier = context.Suppliers.ToList();
            List<SupplierDTO> suppliers = new List<SupplierDTO>();

            if (supplier != null)
            {
                foreach (Supplier x in supplier)
                {
                    SupplierDTO supplierDTO = new SupplierDTO();
                    supplierDTO.supplierId = x.supplierId;
                    supplierDTO.supplierName = x.supplierName;
                    supplierDTO.supplierEmail = x.supplierEmail;
                    supplierDTO.supplierAddress = x.supplierAddress;
                    supplierDTO.supplierContanctNo = x.supplierContanctNo;
                    supplierDTO.role = x.Role;
                    suppliers.Add(supplierDTO);
                }
                return suppliers;
            }
            else
            {
                return null;
            }
        }

        //Method for Showing List of Complaints
        public List<Complaint> getComplaints()
        {
            try
            {
                List<Complaint> complaint = context.Complaints.FromSqlRaw("sp_GetComplaints").ToList(); //implemented stored procedure
                return complaint;
            }
            catch (Exception)
            {
                return null;
            }
        }

        //Method for Updating Complaint Status
        public FeedBack updateComplaintStatus(long complaintId, ComplaintStatus status)
        {
            Complaint complaint = context.Complaints.SingleOrDefault(s => s.complaintsId == complaintId);
            if (complaint != null)
            {
                complaint.complaintStatus = status.ToString();
                context.Complaints.Update(complaint);
                context.SaveChanges();
                FeedBack feedback = new FeedBack { Result = true, Message = "Complaint Status Updated" };
                return feedback;
            }
            else
            {
                FeedBack feedback = new FeedBack { Result = false, Message = "Invalid Complaint Id" };
                return feedback;
            }
        }

        //Method for adding Farming Tips to database
        public void addFarmingTips(FarmingTips farmingTips)
        {
            context.FarmingTips.Add(farmingTips);
            context.SaveChanges();
        }
    }
}
