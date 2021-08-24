import io, {Socket} from "socket.io-client";


class SocketClass{
    private socket: Socket;

    constructor(){
        this.socket = io('http://localhost:9000', {path: "/mysubdir/socket.io"})
        this.socket.on('broadcast', (dataFromServer: any) => {
            console.log(dataFromServer);
        });

    }
    listenToEvent(topic: string, callback: (dataFromServer: any)=>void){
        this.socket.on(topic, callback);
    }
}

const socketIO = new SocketClass()
export default socketIO;
