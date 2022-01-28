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
    [Authorize(Roles = "SUPPLIER")]
    public class SupplierController : ControllerBase
    {
        private ISupplierRepository repository;
        public SupplierController(ISupplierRepository repository)
        {
            this.repository = repository;
        }

        //Change Password Module for Supplier
        [HttpPost]
        [Route("changePassword")]
        public IActionResult changePassword(ChangePasswordDTO changePasswordDTO)
        {
            FeedBack feedback = repository.changePassword(changePasswordDTO);
            if (feedback.Result == true) { return Ok(feedback.Message); }
            else { return NotFound(feedback.Message); }

        }

        //Get All Crops
        [HttpGet]
        [Route("getCrops")]
        public List<Crop> getCrops()
        {
            return repository.getCrops();
        }

        //Update Status of Crop details
        [HttpPut]
        [Route("updateCropsStatus")]
        public IActionResult updateCropsStatus(int cropId, CropStatus status)
        {
            FeedBack feedback = repository.updateCropStatus(cropId, status);
            return Ok(feedback.Message);
        }

        //Get All Advertisements
        [HttpGet]
        [Route("getAdvertisements")]
        public List<Advertisement> getAdvertisements()
        {
            return repository.getAdvertisements();
        }

        //Add New Advertisement
        [HttpPost]
        [Route("addAdvertisement")]
        public string addAdvertisement(Advertisement advertisement, AdvertisementStatus status)
        {
            repository.addAdvertisement(advertisement, status);
            return "Advertisement Added.";
        }

        //Delete Advertiment details
        [HttpDelete]
        [Route("advertisementDetails/{advertisementId}")]
        public IActionResult advertisementDetails(long advertisementId)
        {
            try
            {
                repository.advertisementDetails(advertisementId);
                return Ok("Advertisement details Deleted");
            }
            catch (Exception)
            {
                return BadRequest("Advertisement Id Not Found");
            }
        }

    }
}
