import { Module } from '@nestjs/common';
import { ClickService } from './click.service';
import { ClickGateway } from './click.gateway';

@Module({
  providers: [ClickGateway, ClickService],
})
export class ClickModule {}
