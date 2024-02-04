import winston from "winston";

describe("File transport", () => {
  it("can use file tranport for logging", () => {
    const logger = winston.createLogger({
      level: "info",
      transports: [
        new winston.transports.Console({}),
        new winston.transports.File({
          filename: "application.log",
        }),
        new winston.transports.File({
          filename: "ichwan.log",
        }),
      ],
    });

    // for (let i = 0; i < 10; i++) {
    //   logger.info(`Hello World ${i}`);
    //   logger.info("Hello World");
    //   logger.info("Hello World");
    //   logger.info("Hello World");
    //   logger.info("Hello World");
    // }
  });
});
