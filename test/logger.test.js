import winston from "winston";

describe("sholud can use logger with winstone", () => {
  it("create new logger with console transport", () => {
    const logger = winston.createLogger({
      level: "info",
      transports: [new winston.transports.Console({})],
    });

    logger.log({
      level: "info",
      message: "Hello Logging",
    });
  });
});
