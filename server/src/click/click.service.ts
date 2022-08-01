import { Injectable } from '@nestjs/common';

@Injectable()
export class ClickService {
  handleClick(clickInterface: clickInterface) {
    // if start = false, count + 1
    if (!clickInterface.start) {
      clickInterface.count = clickInterface.count + 1;
    }
    console.log(clickInterface.color, clickInterface.count);
    return clickInterface;
  }
}
