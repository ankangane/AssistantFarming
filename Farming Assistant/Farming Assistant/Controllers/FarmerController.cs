using Farming_Assistant.DTO;
using Farming_Assistant.Entites;
using Farming_Assistant.Models;
using Farming_Assistant.Repositories;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;

namespace Farming_Assistant.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
   [Authorize(Roles = "FARMER")]
    public class FarmerController : ControllerBase
    {
        private IFarmerRepository repository;
        public FarmerController(IFarmerRepository repository)
        {
            this.repository = repository;

        }

        //Change Password Module for Farmer
        [HttpPost]
        [Route("changePassword")]
        public IActionResult changePassword(ChangePasswordDTO changePasswordDTO)
        {
            FeedBack feedback = repository.changePassword(changePasswordDTO);
            if (feedback.Result == true) { return Ok(feedback.Message); }
            else { return NotFound(feedback.Message); }

        }

        //Get All Complaints
        [HttpGet]
        [Route("getComplaints")]
        public List<Complaint> getComplaints()
        {
            return repository.getComplaints();
        }

        //Add New Complaaint
        [HttpPost]
        [Route("addComplaint")]
        public string addComplaint(Complaint complaint, ComplaintStatus status)
        {
            repository.addComplaint(complaint, status);
            return "Complaint Added.";
        }

        //Get All Crop details
        [HttpGet]
        [Route("getCropsDetails")]
        public List<Crop> getCrops()
        {
            return repository.getCrops();
        }

        //Add New Crop Details
        [HttpPost]
        [Route("addCropDetails")]
        public string addCropDetails(Crop crop, CropStatus status)
        {
            repository.addCropDetails(crop, status);
            return "Crop Added.";
        }

        //Delete Crop details
        [HttpDelete]
        [Route("deleteCropDetails/{cropId}")]
        public IActionResult deleteCropDetails(long cropId)
        {
            try
            {
                repository.deleteCropDetails(cropId);
                return Ok("Crop details Deleted");
            }
            catch (Exception)
            {
                return BadRequest("Crop Id Not Found");
            }
        }

        //Get All Advertisements
        [HttpGet]
        [Route("getAdvertisements")]
        public List<Advertisement> getAdvertisements()
        {
            return repository.getAdvertisements();
        }

        //Update Advertisement Status
        [HttpPut]
        [Route("updateAdvertisementStatus")]
        public IActionResult updateAdvertisementStatus(int adertisementId, AdvertisementStatus status)
        {
            FeedBack feedback = repository.updateAdvertisementStatus(adertisementId, status);
            return Ok(feedback.Message);
        }

        //Get All FarmingTips
        [HttpGet]
        [Route("getFarmingTips")]
        public List<FarmingTips> getFarmingTips()
        {
            return repository.getFarmingTips();
        }
    }
}
