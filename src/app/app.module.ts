import { Module } from '@nestjs/common';
import { AuthModule } from '@/core/auth/auth.module';
import { UsersModule } from '@/core/users/users.module';
import { APP_FILTER } from '@nestjs/core';
import { LoggerModule } from '@/core/shared/logger/logger.module';
import { AppConfigModule } from '@/core/config/config.module';
import { GlobalExceptionsFilter } from '@/core/shared/errors/filters/global-exceptions.filter';

@Module({
  imports: [
    LoggerModule,
    AppConfigModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [],
  providers: [{
    provide: APP_FILTER,
    useClass: GlobalExceptionsFilter,
  }],
})
export class AppModule { }
