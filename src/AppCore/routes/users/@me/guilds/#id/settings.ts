/* Copyright Elysia © 2025. All rights reserved */

import { Router } from "express";

const app = Router({ mergeParams: true });

// #293: bots cannot use this endpoint; the plugin keeps these settings per bot in IndexedDB.
// The client ignores the body, and a 200 lets it clear its pending updates.
app.all("/", (req, res) => {
    res.send({});
});

export default app;
