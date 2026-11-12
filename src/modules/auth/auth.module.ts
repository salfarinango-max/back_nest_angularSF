import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller.js';
import { AuthService } from './auth.service.js';
import { JwtModule} from '@nestjs/jwt'

@Module({
  imports: [
    JwtModule.register({
      secret: "MI CODIGO SECRETO",
      signOptions:{expiresIn: '60'}
    })
  ],
  controllers: [AuthController],
  providers:[AuthService]
  
})
export class AuthModule {}
