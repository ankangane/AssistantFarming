using Farming_Assistant.DTO;
using Farming_Assistant.Entites;
using Farming_Assistant.Models;
using Farming_Assistant.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Collections.Generic;

namespace Farming_Assistant.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize(Roles = "ADMIN")]
    public class AdminController : ControllerBase
    {
        private IAdminRepository repository;
        public AdminController(IAdminRepository repository)
        {
            this.repository = repository;
        }

        //Change Password Module for Admin
        [HttpPost]
        [Route("changePassword")]
        public IActionResult changePassword(ChangePasswordDTO changePasswordDTO)
        {
            FeedBack feedback = repository.changePassword(changePasswordDTO);
            if (feedback.Result == true) { return Ok(feedback); }
            else { return NotFound(feedback.Message); }

        }

        //View Admin Details on the basis of adminId
        [HttpGet]
        [Route("viewAdmin/{adminId}")]
        public IActionResult viewAdmin(long adminId)
        {
            AdminDTO adminDTO = repository.viewAdminById(adminId);
            if (adminDTO != null)
            {
                return Ok(adminDTO);
            }
            else
            {
                return NotFound("Invalid Admin ID");
            }
        }

        //View All Farmers registered in this system
        [HttpGet]
        [Route("viewFarmer")]
        public List<FarmerDTO> viewFarmer()
        {
            return repository.viewFarmers();
        }

        //View All Suppliers registered in this system
        [HttpGet]
        [Route("viewSupplier")]
        public List<SupplierDTO> viewSupplier()
        {
            return repository.viewSuppliers();
        }

        //Get All Complaints by farmer
        [HttpGet]
        [Route("getComplaints")]
        public List<Complaint> getComplaints()
        {
            return repository.getComplaints();
        }

        //Update Complaint status
        [HttpPut]
        [Route("updateComplaintsStatus")]
        public IActionResult updateComplaintsStatus(long complaintId, ComplaintStatus status)
        {
            FeedBack feedback = repository.updateComplaintStatus(complaintId, status);
            return Ok(feedback.Message);
        }

        //Add New Farming tips
        [HttpPost]
        [Route("addFarmingTips")]
        public string addFarmingTips(FarmingTips ft)
        {
            repository.addFarmingTips(ft);
            return "Farming Tips Added.";
        }
    }
}
