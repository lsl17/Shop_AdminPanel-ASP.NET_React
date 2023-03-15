﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ShopHeaven.Data.Models
{
    public class Image : GuidModel, IBaseModel, ICreatableModel, IDeletableModel
    {
        public Image()
        {
            CreatedOn = DateTime.UtcNow;
        }

        [Required]
        public string Url { get; set; }

        public int ProductId { get; set; }

        public Product Product { get; set; }

        public DateTime CreatedOn { get; set; }

        public DateTime? ModifiedOn { get; set; }

        public bool IsDeleted { get; set; }

        public DateTime? DeletedOn { get; set; }

        public int CreatedById { get; set; }

        [ForeignKey(nameof(CreatedById))]
        [InverseProperty("Images")]
        public User CreatedBy { get; set; }

    }
}
