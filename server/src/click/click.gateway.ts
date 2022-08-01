import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ClickService } from './click.service';

@WebSocketGateway()
export class ClickGateway {
  @WebSocketServer()
  server: Server;
  constructor(private readonly clickService: ClickService) {}

  @SubscribeMessage('handleClick')
  async handleClick(
    @MessageBody() clickInterface: clickInterface,
    @ConnectedSocket() client: Socket,
  ) {
    // hande click event
    const clickData = await this.clickService.handleClick(clickInterface);
    console.log(clickData);
    // after 5s, send data to chart page for displaying
    setTimeout(async () => {
      client.broadcast.emit('send data to chart', clickData);
    }, 5000);
  }
}
