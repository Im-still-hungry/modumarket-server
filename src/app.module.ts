import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { WebsiteModule } from './website/website.module';

@Module({
  imports: [UserModule, WebsiteModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
