import { Server } from "../app"
import config from "../configs/index"

const port = config.port

const server = new Server()

server.initialize(port)