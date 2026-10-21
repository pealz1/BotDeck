/* Copyright Elysia © 2025. All rights reserved */

import { Router } from "express";
import Constants from "src/AppCore/Constants";

const app = Router({ mergeParams: true });

app.get("/", (req, res) => {
    res.send({
        code: 0,
        message: "OK",
        version: globalThis.botClient.app.getVersion(),
        isBotClient: req.headers["user-agent"]?.includes(Constants.AppName) || false,
    });
});

export default app;
