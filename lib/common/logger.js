const { createLogger, format, transports } = require('winston');
const { combine, timestamp, label, printf } = format;

exports.getLogger = function getLogger() {
    const myFormat = printf(({ level, message, timestamp }) => {
        return `${timestamp} ${level.toUpperCase()}: ${message}`;
    });
    const logLevel = process.env.LOG_LEVEL;
    const logger = createLogger({
        level: logLevel || "info",
        format: combine(timestamp(), myFormat),
        transports: [new transports.Console()],
    });
    return logger;
}

