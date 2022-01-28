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
    public class SupplierRepository : ISupplierRepository
    {
        private FarmingAssistantDbContext context;
        public SupplierRepository(FarmingAssistantDbContext context)
        {
            this.context = context;
        }

        //Method for adding New Supplier
        public FeedBack addSupplier(Supplier supplier, Role role)
        {
            FeedBack feedback = null;
            try
            {
                //Check if Supplier already exists by matching Email
                Supplier supplier2 = context.Suppliers.SingleOrDefault(s => s.supplierEmail == supplier.supplierEmail);
                if (supplier2 == null)
                {
                    //Add Supplier
                    supplier.Role = role.ToString();
                    context.Suppliers.Add(supplier);
                    context.SaveChanges();
                    feedback = new FeedBack() { Result = true, Message = "Supplier Added" };
                }
                else
                {
                    feedback = new FeedBack() { Result = false, Message = "Supplier with same EmailID already exists" };

                }

            }
            catch (Exception ex)
            {
                feedback = new FeedBack() { Result = false, Message = ex.Message };

            }
            return feedback;
        }

        //Change Password moethod for Supplier
        public FeedBack changePassword(ChangePasswordDTO changePasswordDTO)
        {
            Supplier supplier1 = context.Suppliers.SingleOrDefault(s => s.supplierEmail == changePasswordDTO.email);
            if (supplier1 != null)
            {
                if (changePasswordDTO.oldPassword == supplier1.password)
                {
                    supplier1.password = changePasswordDTO.newPassword;
                    context.Suppliers.Update(supplier1);
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
                FeedBack feedback = new FeedBack { Result = false, Message = "Supplier Email not registered!" };
                return feedback;
            }
        }

        //Forget Password moethod for Supplier
        public FeedBack forgetPassword(ForgetPasswordDTO forgetPasswordDTO)
        {
            Supplier supplier1 = context.Suppliers.SingleOrDefault(s => s.supplierEmail == forgetPasswordDTO.email);
            if (supplier1 != null)
            {
                if (forgetPasswordDTO.securityAnswer == supplier1.supplierAnswer)
                {
                    supplier1.password = forgetPasswordDTO.newPassword;
                    context.Suppliers.Update(supplier1);
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
                FeedBack feedback = new FeedBack { Result = false, Message = "Supplier Email not registered!" };
                return feedback;
            }
        }

        //Method for Checking Supplier Credentials with database
        public Supplier validateSupplier(LoginModel login)
        {
            return context.Suppliers.SingleOrDefault(u => u.supplierEmail == login.Email && u.password == login.Password);
        }

        //Method for getting token for supplier
        public string getTokenForSupplier(Supplier person)
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

            //    var token = new JwtSecurityToken(issuer: issuer,
            //audience: audience,

            //expires: DateTime.Now.AddMinutes(120),
            //signingCredentials: credentials);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new Claim[]
                   {
                    new Claim(ClaimTypes.NameIdentifier, person.supplierId.ToString()),
                    new Claim(ClaimTypes.Name, person.supplierEmail.ToString()),
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

        //Method for viewing Supplier Details
        public SupplierDTO viewSupplierById(int supplierId)
        {
            Supplier supplier = context.Suppliers.SingleOrDefault(s => s.supplierId == supplierId); ;
            if (supplier != null)
            {
                SupplierDTO supplierDTO = new SupplierDTO();
                supplierDTO.supplierId = supplier.supplierId;
                supplierDTO.role = supplier.Role;
                supplierDTO.supplierName = supplier.supplierName;
                supplierDTO.supplierEmail = supplier.supplierEmail;
                supplierDTO.supplierContanctNo = supplier.supplierContanctNo;
                supplierDTO.supplierAddress = supplier.supplierAddress;
                if (supplierDTO != null)
                {
                    return supplierDTO;
                }
                else { return null; }
            }
            else { return null; }
        }

        //Method for getting all crops
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

        //Method for Updating Crop Status
        public FeedBack updateCropStatus(long cropId, CropStatus status)
        {
            Crop crop = context.Crops.SingleOrDefault(s => s.cropId == cropId);
            if (crop != null)
            {
                FeedBack feedback = new FeedBack();
                crop.cropStatus = status.ToString();
                context.Crops.Update(crop);
                context.SaveChanges();


                if (crop.cropStatus == "RECIEVED")
                {
                    feedback = new FeedBack { Result = true, Message = "Crops RECIEVED" };

                }
                else if (crop.cropStatus == "REJECTED")
                {
                    feedback = new FeedBack { Result = true, Message = "Crops REJECTED" };
                }
                else
                {
                    feedback = new FeedBack { Result = true, Message = "Crops SENT" };

                }
                return feedback;
            }
            else
            {
                FeedBack feedback = new FeedBack { Result = false, Message = "Invalid Crop Id" };
                return feedback;
            }
        }

        //Method for adding Advertisement details to database
        public void addAdvertisement(Advertisement advertisement, AdvertisementStatus status)
        {
            advertisement.advertisementStatus = status.ToString();
            context.Advertisements.Add(advertisement);
            context.SaveChanges();
        }

        //method for getting all Advertisements
        public List<Advertisement> getAdvertisements()
        {
            try
            {
                List<Advertisement> advertisements = context.Advertisements.FromSqlRaw("sp_GetAdvertisements").ToList(); //implemented stored procedure
                return advertisements;
            }
            catch (Exception)
            {
                return null;
            }
        }

        //Method for deleting Advertisement Details from database
        public void advertisementDetails(long advertisementId)
        {
            Advertisement advertisement = context.Advertisements.SingleOrDefault(s => s.advertisementId == advertisementId);
            context.Advertisements.Remove(advertisement);
            context.SaveChanges();
        }
    }
}
