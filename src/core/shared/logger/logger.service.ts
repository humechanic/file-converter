import { Injectable, Logger } from "@nestjs/common";

@Injectable()
export class LoggerService extends Logger {
    constructor() {
        super();
    }

    log(message: string, context?: string) {
        super.log(`[${context}] ${message}`);
    }
    error(message: string, context?: string) {
        super.error(`[${context}] ${message}`);
    }
    warn(message: string, context?: string) {
        super.warn(`[${context}] ${message}`);
    }
    debug(message: string, context?: string) {
        super.debug(`[${context}] ${message}`);
    }
    verbose(message: string, context?: string) {
        super.verbose(`[${context}] ${message}`);
    }
}