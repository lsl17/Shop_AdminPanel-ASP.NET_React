﻿using System.ComponentModel.DataAnnotations;

namespace ShopHeaven.Models.Requests
{
    public class DeleteCategoryRequestModel
    {
        [Required]
        public string UserId { get; set; }

        [Required]
        public string CategoryId { get; set; }
    }
}