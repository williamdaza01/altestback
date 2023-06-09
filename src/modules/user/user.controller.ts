import { Controller, Post, Res, HttpStatus, Body } from '@nestjs/common';
import {CreateUserDTO} from './dto/user.dto'; 
import { UserService } from './user.service';

@Controller('user/')
export class UserController {

    constructor( private userService: UserService) {}

    @Post('create-user')
    async signUp(@Res() res, @Body() createUserDTO: CreateUserDTO){
        const user = await this.userService.createUser(createUserDTO)
        return res.status(HttpStatus.OK).json({
            message: "User Successfully Created",
            user: user
        })
    }
}
