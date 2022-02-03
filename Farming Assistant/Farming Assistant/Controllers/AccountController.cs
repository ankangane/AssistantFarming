using Farming_Assistant.DTO;
using Farming_Assistant.Entites;
using Farming_Assistant.Models;
using Farming_Assistant.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace Farming_Assistant.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountController : ControllerBase
    {
        private IAdminRepository adminRepository = null;
        private IFarmerRepository farmerRepository = null;
        private ISupplierRepository supplierRepository = null;
        public AccountController(IAdminRepository adminRepository, IFarmerRepository farmerRepository, ISupplierRepository supplierRepository)
        {
            this.farmerRepository = farmerRepository;
            this.supplierRepository = supplierRepository;
            this.adminRepository = adminRepository;
        }

        //Signing up for All users..
        [HttpPost]
        [Route("SignUp")]
        public IActionResult SignUp(SignUpDTO signindto)
        {
            if (signindto.Role == "SUPPLIER" | signindto.Role == "supplier")
            {
                Supplier supplier = new Supplier();
                supplier.Role = signindto.Role;
                supplier.supplierId = signindto.Id;
                supplier.supplierName = signindto.Name;
                supplier.supplierQuestion = signindto.securityQuestion;
                supplier.supplierAnswer = signindto.securityAnswer;
                supplier.supplierEmail = signindto.Email;
                supplier.password = signindto.password;
                supplier.supplierContanctNo = signindto.ContanctNo;
                supplier.supplierAddress = signindto.Address;
                FeedBack feedback = supplierRepository.addSupplier(supplier, Role.SUPPLIER);
                if (feedback.Result == true)
                {
                    return Ok(feedback);
                }
                else
                {
                    return BadRequest(feedback);
                }
            }
            else if (signindto.Role == "FARMER" | signindto.Role == "farmer")
            {
                Farmer farmer = new Farmer();
                farmer.Role = signindto.Role;
                farmer.farmerId = signindto.Id;
                farmer.farmerName = signindto.Name;
                farmer.farmerQuestion = signindto.securityQuestion;
                farmer.farmerAnswer = signindto.securityAnswer;
                farmer.farmerEmail = signindto.Email;
                farmer.password = signindto.password;
                farmer.farmerContanctNo = signindto.ContanctNo;
                farmer.farmerAddress = signindto.Address;
                FeedBack feedback = farmerRepository.addFarmer(farmer, Role.FARMER);
                if (feedback.Result == true)
                {
                    return Ok(feedback);
                }
                else
                {
                    return BadRequest(feedback);
                }
            }
            else if (signindto.Role == "ADMIN" | signindto.Role == "admin")
            {
                return NotFound("Can't Use Admin Privileges");
            }
            else
            {
                return BadRequest("Invalid Role");
            }
        }

        //Logging in as Amin or Farmer or Supplier
        [Route("Login")]
        [HttpPost]
        public IActionResult Login([FromBody] LoginModel login)
        {
            if (login == null )
            {
                return BadRequest("Invalid client request");
            }
            LoggedUserModel model = new LoggedUserModel();
            //Validating Login credentials
            Admin admin = adminRepository.validateAdmin(login);
            if (admin != null)
            {
                string token = adminRepository.getTokenForAdmin(admin);
                model = new LoggedUserModel() {EmailID = admin.adminEmail, Message = "Hi "+admin.adminName+" Welcome to Farming Assistant Portal.", Token = token, Role = admin.role };
                return Ok(model);
            }
            else
            {
                Farmer farmer = farmerRepository.validateFarmer(login);
                if (farmer != null)
                {
                    string token = farmerRepository.getTokenForFarmer(farmer);
                    model = new LoggedUserModel() {EmailID = farmer.farmerEmail, Message = "Hi "+farmer.farmerName+" , Welcome to Farming Assistant Portal.", Token = token, Role = farmer.Role };
                    return Ok(model);
                }
                else
                {
                    Supplier supplier = supplierRepository.validateSupplier(login);
                    if (supplier != null)
                    {
                        string token = supplierRepository.getTokenForSupplier(supplier);
                        model = new LoggedUserModel() {EmailID = supplier.supplierEmail, Message = "Hi "+supplier.supplierName+", Welcome to Farming Assistant Portal.", Token = token, Role = supplier.Role };
                        return Ok(model);
                    }
                    else
                    {
                        return BadRequest("Invalid Credentials");
                    }
                }

            }
        }

        //Forgot Password module
        [Route("ForgetPassword")]
        [HttpPost]
        public IActionResult ForgetPassword(ForgetPasswordDTO forgetPassword)
        {
            if (forgetPassword.role == Role.ADMIN.ToString())
            {
                FeedBack feedback = adminRepository.forgetPassword(forgetPassword);
                if (feedback.Result == true)
                {
                    return Ok(feedback);
                }
                else
                {
                    return BadRequest(feedback);
                }
            }
            else if (forgetPassword.role == Role.FARMER.ToString())
            {
                FeedBack feedback = farmerRepository.forgetPassword(forgetPassword);
                if (feedback.Result == true)
                {
                    return Ok(feedback);
                }
                else
                {
                    return BadRequest(feedback);
                }
            }
            else if (forgetPassword.role == Role.SUPPLIER.ToString())
            {
                FeedBack feedback = supplierRepository.forgetPassword(forgetPassword);
                if (feedback.Result == true)
                {
                    return Ok(feedback);
                }
                else
                {
                    return BadRequest(feedback);
                }
            }
            else
            {
                return BadRequest("Email has not been registered!");
            }
        }
    }
}
