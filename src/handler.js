import serverless from "serverless-http";
import app from "./index.js";

export const config = {
  runtime: "nodejs18.x",
};

export const handler = serverless(app);
