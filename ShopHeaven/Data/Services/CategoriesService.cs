﻿using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using ShopHeaven.Data.Models;
using ShopHeaven.Data.Services.Contracts;
using ShopHeaven.Models.Requests;
using ShopHeaven.Models.Responses.Categories;
using ShopHeaven.Models.Responses.Subcategories;
using System.Linq;

namespace ShopHeaven.Data.Services
{
    public class CategoriesService : ICategoriesService
    {
        private readonly UserManager<User> userManager;
        private readonly IStorageService storageService;
        private readonly ShopDbContext db;

        public CategoriesService(UserManager<User> userManager, IStorageService storageService, ShopDbContext db)
        {
            this.userManager = userManager;
            this.storageService = storageService;
            this.db = db;
        }

        public async Task CreateCategory(CreateCategoryRequestModel model)
        {
            bool isUserExists = await this.db.Users.AnyAsync(x => x.Id == model.CreatedBy && x.IsDeleted != true);

            if (isUserExists == false)
            {
                throw new ArgumentException(GlobalConstants.UserDoesNotExist);
            }

            var category = await this.db.MainCategories.FirstOrDefaultAsync(x => x.Name == model.Name);

            if (category != null)
            {
                throw new ArgumentException(GlobalConstants.CategoryWithThisNameAlreadyExist);
            }

            //implement logic for image

            var imageUrls = await this.storageService.UploadImageAsync(new List<IFormFile> { model.Image });
            string categoryImageUrl = imageUrls[0];

            Image categoryImage = new Image()
            {
                CreatedById = model.CreatedBy,
                Url = categoryImageUrl,
            };

            MainCategory newCategory = new MainCategory
            {
                Name = model.Name.Trim(),
                Description = model.Description.Trim(),
                CreatedById = model.CreatedBy,
                IsDeleted = false,
                Image = categoryImage,
            };

            await this.db.Images.AddAsync(categoryImage);
            await this.db.MainCategories.AddAsync(newCategory);

            await this.db.SaveChangesAsync();
        }

        public async Task<string> DeleteCategory(DeleteCategoryRequestModel model)
        {
            User user = await this.db.Users.FirstOrDefaultAsync(x => x.Id == model.UserId && x.IsDeleted != true);

            if (user == null)
            {
                throw new ArgumentException(GlobalConstants.UserDoesNotExist);
            }

            var userRoles = await this.userManager.GetRolesAsync(user);

            if (!userRoles.Any(x => x == GlobalConstants.AdministratorRoleName))
            {
                throw new InvalidOperationException(GlobalConstants.UserHaveNoPermissionsToDeleteCategories);
            }

            MainCategory category = await this.db.MainCategories
                .Where(x => x.Id == model.CategoryId && x.IsDeleted != true)
                .Include(x => x.SubCategories
                     .Where(x => x.IsDeleted != true))
                .ThenInclude(x => x.Products
                     .Where(x => x.IsDeleted != true))
                .FirstOrDefaultAsync();


            if (category == null)
            {
                throw new ArgumentException(GlobalConstants.CategoryWithThisIdDoesntExist);
            }

            //delete mapping entities between main category and product
            //delete product entity and almost all related to it
            foreach (SubCategory subCategory in category.SubCategories)
            {
                foreach (Product product in subCategory.Products)
                {
                    foreach (var tag in product.Tags)
                    {
                        tag.IsDeleted = true;
                    }

                    foreach (var image in product.Images)
                    {
                        image.IsDeleted = true;
                    }

                    foreach (var review in product.Reviews)
                    {
                        review.IsDeleted = true;
                    }

                    foreach (var productCart in product.Carts)
                    {
                        productCart.IsDeleted = true;
                    }

                    foreach (var productWishlist in product.Wishlists)
                    {
                        productWishlist.IsDeleted = true;
                    }

                    foreach (var productLabels in product.Labels)
                    {
                        productLabels.IsDeleted = true;
                    }

                    foreach (var productSpecifications in product.Specifications)
                    {
                        productSpecifications.IsDeleted = true;
                    }

                    //delete product
                    product.IsDeleted = true;
                }

                //delete ProductMainCategory
                subCategory.IsDeleted = true;
            }


            //delete main category
            category.IsDeleted = true;

            await this.db.SaveChangesAsync();

            return category.Name;
        }

        public async Task<List<GetCategoriesResponseModel>> GetAllCategories()
        {
            List<GetCategoriesResponseModel> allCategories = await this.db.MainCategories
                .Where(x => x.IsDeleted != true)
                .Include(x => x.SubCategories)
                .Select(x => new GetCategoriesResponseModel
                {
                    Id = x.Id,
                    Name = x.Name,
                    Subcategories = x.SubCategories
                    .Where(s => s.IsDeleted != true)
                    .Select(x => new SubcategoriesBaseResponseModel
                    {
                        Name = x.Name,
                        Id = x.Id,
                    })
                    .ToList()
                })
                .ToListAsync();

            return allCategories;
        }

        public async Task<GetCategoryResponseModel> GetCategoryById(string id)
        {
            GetCategoryResponseModel getCategoryResponseModel = await this.db.MainCategories
                .Where(x => x.Id == id && x.IsDeleted != true)
                .Include(x => x.Image)
                .Select(x => new GetCategoryResponseModel
                {
                    Id = x.Id,
                    Name = x.Name,
                    Description = x.Description,
                    ImageUrl = x.Image.Url
                })
                .FirstOrDefaultAsync();

            return getCategoryResponseModel;
        }
    }
}