import { Controller, Post, Get, Body, UseGuards } from '@nestjs/common';
import { User } from './user.entity';
import { AuthService } from './auth.service';
import { Authorize } from 'src/authorize.guard';
 
@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post('register')
    async register(@Body() user: User) {
        const register = await this.authService.register(user);
        return register;
    }

    @Post('login')
    async logIn(@Body() user: User) {
        console.log(user)
        const logIn = await this.authService.login(user);
        return logIn;
    }


    @Get()
    @UseGuards(Authorize)
    async getAllUserData() {
        return await this.authService.getAllUserData();

    }
}


