import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClickModule } from './click/click.module';

@Module({
  imports: [ClickModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
