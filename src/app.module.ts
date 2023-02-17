import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { EntitiesModule } from './entities/entities.module';

@Module({
  imports: [AuthModule, EntitiesModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
