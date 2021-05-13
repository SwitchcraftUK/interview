import express from "express";
import { ApiError } from "./api-error.interface";
import { appLogger } from "./app-logger";
import { handleApiErrors } from "./handle-error";

const app = express();
app.use(express.json());

app.use((req, res, next) => {
  appLogger.trace({
    url: req.url,
    body: req.body as {},
    params: req.params,
    query: req.query
  }, "Got request");
  next();
});

app.get<{
  readonly input: string;
}, {
  readonly success: true;
}>("/test", (req, res) => {
  const { input } = req.query;
  if (!input) {
    throw new ApiError({
      code: 500,
      message: "Input is not defined"
    });
  }
  return res.json({ success: true });
});

app.use(handleApiErrors);

export { app };
