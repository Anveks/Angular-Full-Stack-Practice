import express from "express";
import cors from "cors";
import dataRoutes from "./6-routes/data-routes";
import routeNotFound from "./3-middleware/route-not-found";
import catchAll from "./3-middleware/catch-all";
import appConfig from "./4-utils/app-config";
import dal from "./4-utils/dal";

const server = express();

server.use(cors());
server.use(express.json());
server.use("/api", dataRoutes);
server.use(routeNotFound);
server.use(catchAll);

server.listen(appConfig.port, async () => {
  await dal.connect();
  console.log("Listening on http://localhost:" + appConfig.port);
});