import { ConsoleLogger, EmailLogger, FileLogger, LogLevel } from "./chain_of_responsibility";

describe("Chain of responsibility", () => {

  it("should chain calls", () => {

    const logger = new ConsoleLogger(LogLevel.All);
    const emailLogger = logger.setNext(new EmailLogger(LogLevel.Error));
    emailLogger.setNext(new FileLogger(LogLevel.Debug));

    /*
    logger.message("Logging warning", DiscountLevel.Warning);
    logger.message("Emailing error", DiscountLevel.Error);
    logger.message("Debug info", DiscountLevel.Debug);
    */
  });
});
