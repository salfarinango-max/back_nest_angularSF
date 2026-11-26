import { Module } from '@nestjs/common';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { AuthModule } from './modules/auth/auth.module.js';
import { UsersModule } from './modules/users/users.module.js';
import { AutchController } from './modules/autch/autch.controller.js';
import { AuthService } from './modules/autch/autch.service.js';

@Module({
  imports: [AuthModule, UsersModule],

  controllers: [AppController],

  providers: [AppService],
})
export class AppModule {}
