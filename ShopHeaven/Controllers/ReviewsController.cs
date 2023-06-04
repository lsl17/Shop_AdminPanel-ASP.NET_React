﻿using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using ShopHeaven.Data.Services.Contracts;
using ShopHeaven.Models.Requests.Reviews;
using ShopHeaven.Models.Responses.Reviews;

namespace ShopHeaven.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReviewsController : ControllerBase
    {
        private readonly IReviewsService reviewsService;

        public ReviewsController(IReviewsService reviewsService)
        {
            this.reviewsService = reviewsService;
        }

        [HttpPost, Authorize(Roles = GlobalConstants.UserRoleName), Route(nameof(Create))]
        public async Task<ActionResult<ReviewResponseModel>> Create([FromBody] CreateReviewRequestModel model)
        {
            if (!ModelState.IsValid) { return BadRequest(ModelState); }

            try
            {
                 var createdReview = await this.reviewsService.CreateReviewAsync(model);
                return Ok(createdReview);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }

        [HttpPost, Route(nameof(AllByProductId))]
        public async Task<ActionResult<PaginatedReviewsResponseModel>> AllByProductId([FromBody] PaginatedReviewRequestModel model)
        {
            if (!ModelState.IsValid) { return BadRequest(ModelState); }

            try
            {
                var paginatedProductReviews = await this.reviewsService.GetReviewsByProductIdAsync(model);
                var totalReviewsCount = await this.reviewsService.GetReviewsCountByProductIdAsync(model.ProductId);

                var reviewsInfoModel = new PaginatedReviewsResponseModel
                {
                    Reviews = paginatedProductReviews,
                    ReviewsCount = totalReviewsCount,
                    PagesCount = (int)Math.Ceiling((double)totalReviewsCount / model.RecordsPerPage),
                };
                
                return Ok(reviewsInfoModel);
            }
            catch (Exception ex)
            {
                return BadRequest(ex.Message);
            }
        }
    }
}