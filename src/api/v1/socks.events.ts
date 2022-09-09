import { Server } from "socket.io";
import { DefaultEventsMap } from "socket.io/dist/typed-events";

export default function registerSocketEvents(
  io: Server<DefaultEventsMap, DefaultEventsMap, DefaultEventsMap, any>
) {
  io.on("connection", (socket) => {
    console.log(socket.id, "User Connected");
  });
}