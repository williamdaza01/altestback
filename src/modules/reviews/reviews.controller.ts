import { Controller, Get } from '@nestjs/common';
import { ReviewsService } from './reviews.service';

@Controller('reviews')
export class ReviewsController {

    constructor(private reviewsService: ReviewsService) {}

    @Get('load-reviews')
    async getDocuments(){
      return await this.reviewsService.getReviews();
    }
}
