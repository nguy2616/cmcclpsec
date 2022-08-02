import {
  WebSocketGateway,
  SubscribeMessage,
  MessageBody,
  ConnectedSocket,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server, Socket } from 'socket.io';
import { ClickService } from './click.service';

@WebSocketGateway({
  cors: {
    origin: '*',
  },
})
export class ClickSocket {
  @WebSocketServer()
  server: Server;
  constructor(private readonly clickService: ClickService) {}

  @SubscribeMessage('initData')
  async initData(@ConnectedSocket() client: Socket) {
    // notify to client to reset data to 0
    client.broadcast.emit('returnInitData');
  }

  @SubscribeMessage('handleClick')
  async handleClick(
    @MessageBody() clickInterface: clickInterface,
    @ConnectedSocket() client: Socket,
  ) {
    // hande click event
    const clickData = this.clickService.handleClick(clickInterface);
    // after 5s, send data to chart page for displaying
    setTimeout(() => {
      client.broadcast.emit('sendToClient', clickData);
    }, 5000);
  }
}
