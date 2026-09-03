import { Injectable, Logger } from "@nestjs/common";

@Injectable()
export class LoggerService extends Logger {
    constructor() {
        super();
    }

    setContext(context: string) {
        this.context = context;
    }

    log(message: string, context?: string) {
        super.log(message, context);
    }

    error(message: string, context?: string) {
        super.error(message, context);
    }

    warn(message: string, context?: string) {
        super.warn(message, context);
    }

    debug(message: string, context?: string) {
        super.debug(message, context);
    }

    verbose(message: string, context?: string) {
        super.verbose(message, context);
    }
}