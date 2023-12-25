require('dotenv').config()

import { app } from "./app";
import { logger } from "./logger/logger";
import { ServerPresenter } from "./server/presenters/server.presenter";
import { RANDOM_PORT } from "./server/constants/server.constants";

const server = app.listen(process.env.PORT ?? RANDOM_PORT, () => {
  const serverProperties = new ServerPresenter(server);
  logger.info(`Server listening @ ${serverProperties.address}`);
});
