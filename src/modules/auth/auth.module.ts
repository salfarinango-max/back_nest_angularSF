import { Module } from '@nestjs/common';
import { AutchController } from '../autch/autch.controller.js';
import { AuthService } from '../autch/autch.service.js';
import { JwtModule } from '@nestjs/jwt';
import { JwtStrategy } from '../autch/jwt.strategy.js';

@Module({
    imports: [
        JwtModule.register({
            secret: "MI_CODIGO_SECRETO",
            signOptions: { expiresIn: '1h' }
        })
    ],
    controllers: [AutchController],
    providers: [AuthService, JwtStrategy]
})
export class AuthModule {}