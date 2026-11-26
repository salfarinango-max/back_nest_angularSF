import { Body, Controller, Post } from '@nestjs/common';
import { RegisterAuthDto } from './dto/register-auth.dto.js';
import { LoginAuthDto } from './dto/login-auth.dto.js';
import { AuthService } from './autch.service.js';

@Controller('autch')
export class AutchController {
    constructor(private authService: AuthService){

    }
    @Post('register')
    registerUser(@Body() userObj: RegisterAuthDto) {
        console.log(userObj);
        return userObj;
    }

    @Post('login')
    login(@Body() credenciales: LoginAuthDto) {
       return this.authService.login(credenciales)

        
    }
}
