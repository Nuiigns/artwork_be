import { Controller, Post, Body } from '@nestjs/common';
import { User } from './user.entity';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) { }

    @Post()
    async register(@Body() user: User) {
        const register = await this.authService.register(user);
        return register;
    }

}
