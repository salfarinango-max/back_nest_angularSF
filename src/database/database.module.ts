import { Module } from '@nestjs/common';
import { databaseProvider } from './database.providers.js';
import { ConfigService } from '../config/config.service.js';

@Module({
  providers: [...databaseProvider, ConfigService],
  exports: [...databaseProvider],
})
export class DatabaseModule {}