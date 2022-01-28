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
    public class FarmerRepository:IFarmerRepository
    {
        private FarmingAssistantDbContext context;
        public FarmerRepository(FarmingAssistantDbContext context)
        {
            this.context = context;
        }

        //Method for adding New Farmer
        public FeedBack addFarmer(Farmer farmer, Role role)
        {
            FeedBack feedback = null;
            try
            {
                //Check if Farmer already exists by matching Email
                Farmer farmer1 = context.Farmers.SingleOrDefault(s => s.farmerEmail == farmer.farmerEmail);
                if (farmer1 == null)
                {
                    //Add Farmers
                    farmer.Role = role.ToString();
                    context.Farmers.Add(farmer);
                    context.SaveChanges();
                    feedback = new FeedBack() { Result = true, Message = "Farmer Added" };
                }
                else
                {
                    feedback = new FeedBack() { Result = false, Message = "Farmer with same EmailID already exists" };

                }

            }
            catch (Exception ex)
            {
                feedback = new FeedBack() { Result = false, Message = ex.Message };

            }
            return feedback;
        }

        //Change Password moethod for Farmer
        public FeedBack changePassword(ChangePasswordDTO changePasswordDTO)
        {
            Farmer farmer1 = context.Farmers.SingleOrDefault(s => s.farmerEmail == changePasswordDTO.email);
            if (farmer1 != null)
            {
                if (changePasswordDTO.oldPassword == farmer1.password)
                {
                    farmer1.password = changePasswordDTO.newPassword;
                    context.Farmers.Update(farmer1);
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
                FeedBack feedback = new FeedBack { Result = false, Message = "Farmer Email not registered!" };
                return feedback;
            }
        }

        //Forgot Password moethod for Farmer
        public FeedBack forgetPassword(ForgetPasswordDTO forgetPasswordDTO)
        {
            Farmer farmer1 = context.Farmers.SingleOrDefault(s => s.farmerEmail == forgetPasswordDTO.email);
            if (farmer1 != null)
            {
                if (forgetPasswordDTO.securityAnswer == farmer1.farmerAnswer)
                {
                    farmer1.password = forgetPasswordDTO.newPassword;
                    context.Farmers.Update(farmer1);
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
                FeedBack feedback = new FeedBack { Result = false, Message = "Farmer Email not registered!" };
                return feedback;
            }
        }

        //Method for Checking Farmer Credentials with database
        public Farmer validateFarmer(LoginModel login)
        {
            return context.Farmers.SingleOrDefault(u => u.farmerEmail == login.Email && u.password == login.Password);
        }

        //Method for getting token for farmer
        public string getTokenForFarmer(Farmer person)
        {
            var _config = new ConfigurationBuilder()
                              .SetBasePath(Directory.GetCurrentDirectory())
                              .AddJsonFile("appsettings.json").Build();
            var issuer = _config["Jwt:Issuer"];
            var audience = _config["Jwt:Audience"];
            var expiry = DateTime.Now.AddMinutes(2);
            var securityKey = new SymmetricSecurityKey
        (Encoding.UTF8.GetBytes(_config["Jwt:Key"]));
            var credentials = new SigningCredentials
        (securityKey, SecurityAlgorithms.HmacSha256);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                   {
                    new Claim(ClaimTypes.NameIdentifier, person.farmerId.ToString()),
                    new Claim(ClaimTypes.Name, person.farmerEmail.ToString()),
                    new Claim(ClaimTypes.Role, person.Role)
                   }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256Signature)
            };

            var tokenHandler = new JwtSecurityTokenHandler();
            var token = tokenHandler.CreateToken(tokenDescriptor);
            var stringToken = tokenHandler.WriteToken(token);
            return stringToken;
        }

        //Method for Viewing Farmer Details by id
        public FarmerDTO viewFarmerById(long farmerId)
        {
            Farmer farmer = context.Farmers.SingleOrDefault(s => s.farmerId == farmerId); ;
            if (farmer != null)
            {
                FarmerDTO farmerDTO = new FarmerDTO();
                farmerDTO.farmerId = farmer.farmerId;
                farmerDTO.role = farmer.Role;
                farmerDTO.farmerName = farmer.farmerName;
                farmerDTO.farmerEmail = farmer.farmerEmail;
                farmerDTO.farmerContanctNo = farmer.farmerContanctNo;
                farmerDTO.farmerAddress = farmer.farmerAddress;
                if (farmerDTO != null)
                {
                    return farmerDTO;
                }
                else { return null; }
            }
            else { return null; }
        }

        //Method for Getting all Complaints
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

        //Method for Adding Complaints to database
        public void addComplaint(Complaint complaint, ComplaintStatus status)
        {
            complaint.complaintStatus = status.ToString();
            context.Complaints.Add(complaint);
            context.SaveChanges();
        }

        //Method for Getting all crops details
        public List<Crop> getCrops()
        {
            try
            {
                List<Crop> crop = context.Crops.FromSqlRaw("sp_GetCrops").ToList(); //implemented stored procedure
                return crop;
            }
            catch (Exception)
            {
                return null;
            }
        }

        //Method for Adding Crop details to database
        public void addCropDetails(Crop crop, CropStatus status)
        {
            crop.cropStatus = status.ToString();
            context.Crops.Add(crop);
            context.SaveChanges();
        }

        //Method for Deleting Crop Details from database
        public void deleteCropDetails(long cropId)
        {
            Crop crop = context.Crops.SingleOrDefault(s => s.cropId == cropId);
            context.Crops.Remove(crop);
            context.SaveChanges();
        }

        //Method for Getting all Advertisements
        public List<Advertisement> getAdvertisements()
        {
            try
            {
                List<Advertisement> advertisements = context.Advertisements.FromSqlRaw("sp_GetAdvertisements").ToList(); //implemented stored procedure
                //List<Advertisement> advertisements = context.Advertisements.ToList();
                return advertisements;
            }
            catch (Exception)
            {
                return null;
            }
        }

        //Method for Updating Advertisement Status
        public FeedBack updateAdvertisementStatus(long advertisementId, AdvertisementStatus status)
        {
            Advertisement advertisement = context.Advertisements.SingleOrDefault(s => s.advertisementId == advertisementId);
            if (advertisement != null)
            {
                FeedBack feedback = new FeedBack();
                advertisement.advertisementStatus = status.ToString();
                context.Advertisements.Update(advertisement);
                context.SaveChanges();


                if (advertisement.advertisementStatus == "ACCEPTED")
                {
                    feedback = new FeedBack { Result = true, Message = "Advertisement ACCEPTED" };

                }
                else if (advertisement.advertisementStatus == "REJECTED")
                {
                    feedback = new FeedBack { Result = true, Message = "Advertisement REJECTED" };
                }
                else
                {
                    feedback = new FeedBack { Result = true, Message = "Crops PENDING" };

                }
                return feedback;
            }
            else
            {
                FeedBack feedback = new FeedBack { Result = false, Message = "Invalid Advertisement Id" };
                return feedback;
            }
        }

        //Method for Getting all FarmingTips
        public List<FarmingTips> getFarmingTips()
        {
            try
            {
                List<FarmingTips> farmingTip = context.FarmingTips.FromSqlRaw("sp_GetFarmingTips").ToList(); //implemented stored procedure
                return farmingTip;
            }
            catch (Exception)
            {
                return null;
            }
        }
    }
}
