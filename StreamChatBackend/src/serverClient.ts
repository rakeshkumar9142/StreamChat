import { StreamChat } from "stream-chat";

export const apikey = process.env.STREAM_API_KEY as string;
export const apiSecret = process.env.STREAM_API_SECRET as string;

if(!apikey || !apiSecret) {
    throw new Error("Missingrequired enviroment variables for STREAM_API_KEY and STREAM_API_SECRET");

}

export const serverClient = new StreamChat(apikey,apiSecret);