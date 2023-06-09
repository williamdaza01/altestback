import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose'
import { InjectModel } from '@nestjs/mongoose'

import { User } from './interfaces/user.interface';
import { CreateUserDTO } from './dto/user.dto'

@Injectable()
export class UserService {

    constructor(@InjectModel('User') private userModel: Model<User>){}
    
    async createUser(createUserDTO: CreateUserDTO): Promise<User>{
        const user = new this.userModel(createUserDTO);
        return await user.save();
    }
}