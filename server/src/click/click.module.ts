import { Module } from '@nestjs/common';
import { ClickService } from './click.service';
import { ClickSocket } from './click.socket';

@Module({
  providers: [ClickSocket, ClickService],
})
export class ClickModule {}
