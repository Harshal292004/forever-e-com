import winston from "winston"
const {combine,timestamp,printf}=winston.format

const customFormat= printf(({level,message,timestamp})=>{
    return `${timestamp} [${level}]: ${message}`
})

// in production this will  log errors and warnings to Files 
// in dev this will log all messages in colorized format to the console 
const logger=winston.createLogger(
    {
        level:process.env.NODE_ENV === 'production' ? 'warn' : 'debug',
        format:combine(
            timestamp(),
            customFormat
        ),
        transports:[
            new winston.transports.Console(
                {
                    format:combine(winston.format.colorize(),customFormat)
                }
            ),
            new winston.transports.File(
                {
                    filename:'logs/application.log'
                }
            )
        ]
    }
)

export default logger