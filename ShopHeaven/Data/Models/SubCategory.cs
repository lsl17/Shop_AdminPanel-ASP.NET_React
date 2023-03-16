﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using ShopHeaven.Data.Models.Common;

namespace ShopHeaven.Data.Models
{
    public class SubCategory : BaseModel, ICreatableModel
    {
        public SubCategory()
        {
            this.Products = new HashSet<ProductSubCategory>();
        }

        [Required(ErrorMessage = "SubCategory name cannot be null or empty")]
        [MinLength(1)]
        public string Name { get; set; }

        public string Description { get; set; }

        [Required]
        public int MainCategoryId { get; set; }

        public MainCategory MainCategory { get; set; } // this is main category of the current category

        public ICollection<ProductSubCategory> Products { get; set; } // this subcategory contains these products

        public int CreatedById { get; set; }

        [ForeignKey(nameof(CreatedById))]
        [InverseProperty("SubCategories")]
        public User CreatedBy { get; set; }
    }
}