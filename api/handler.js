import app from "../../src/index.js";
import { createServer } from "@vercel/node";
import { Server } from "http";

export default function handler(req, res) {
  const server = createServer(app);
  server.emit('request', req, res);
}
