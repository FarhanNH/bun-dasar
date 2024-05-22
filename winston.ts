import winston from "winston";

const logger = winston.createLogger({
    level: "debug",
    format: winston.format.json(),
    transports: [
        new winston.transports.Console(),
    ],
});

logger.info("Hello Bun");
logger.warn("Hello Bun");
logger.error("Hello Bun");