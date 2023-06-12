import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Review } from './interfaces/reviews.interface';

@Injectable()
export class ReviewsService {
    constructor(
        @InjectModel('Reviews') private revModel: Model<Review>,
      ) {}

    async getReviews() {
        try {
          const revs = await this.revModel.find().exec();
          return { success: true, data: revs };
        } catch (error) {
          return { success: false, error: error.message };
        }
      }
}
