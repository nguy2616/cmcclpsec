import { io } from 'socket.io-client';
const baseURL = 'http://localhost:3005';
export const socket = io(baseURL);