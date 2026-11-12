
import { Body, Controller, Post } from '@nestjs/common';
import { RegisterAuthDto } from './dto/register-auth.dto.js';
import { LoginAuthDto } from './dto/login-auth.dto.js';
import { AuthService } from './auth.service.js';

@Controller('auth')
export class AuthController {

    constructor(private authservice: AuthService) {}

    @Post('register')
    registerUser(@Body() userObj: RegisterAuthDto) {
        console.log(userObj.email);
        return userObj;
    }

    @Post('login')
    login(@Body() credenciales: LoginAuthDto) {
        return this.authservice.login(credenciales);
    }
}

