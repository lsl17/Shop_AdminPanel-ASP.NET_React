﻿namespace ShopHeaven.Models.Responses.Wishlists
{
    public class WishlistProductResponseModel
    {
        public string Id { get; set; }

        public string Name { get; set; }

        public string Description { get; set; }

        public decimal Price { get; set; }

        public decimal Discount { get; set; }

        public string Image { get; set; }

        public bool IsAvailable { get; set; }

        public bool HasGuarantee { get; set; }

        public int InStockQuantity { get; set; }
    }
}
