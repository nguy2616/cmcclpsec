import { Injectable } from '@nestjs/common';

@Injectable()
export class ClickService {
  handleClick(clickInterface: clickInterface) {
    clickInterface.count = clickInterface.count + 1;
    return clickInterface;
  }
}
