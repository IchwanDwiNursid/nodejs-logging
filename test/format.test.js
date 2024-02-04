import winston, { format } from "winston";

describe("Winston", () => {
  it("Can use transport formar", () => {
    const logger = winston.createLogger({
      level: "info",
      // format: winston.format.json(),
      // format: winston.format.simple(),
      format: winston.format.logstash(),
      //   format: winston.format.printf((log) => {
      //     return `${new Date()} : ${log.level.toUpperCase()}: ${log.message}`;
      //   }),
      transports: [new winston.transports.Console({})],
    });

    logger.info("Hello Format");
    logger.warn("Hello Format");
    logger.error("Hello Format");
  });

  it("Cant Use longstash format", () => {
    const logger = winston.createLogger({
      level: "info",
      // format: winston.format.json(),
      // format: winston.format.simple(),
      format: winston.format.logstash(),
      transports: [new winston.transports.Console({})],
    });

    logger.info("Hello Format");
  });
});
