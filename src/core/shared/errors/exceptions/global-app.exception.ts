import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";
import { Request, Response } from "express";
import { LoggerService } from "../../logger/logger.service";
import { BaseAppException } from "./base-app.exception";

@Catch()
export class GlobalExceptionsFilter implements ExceptionFilter {
    constructor(private readonly loggerService: LoggerService) { }

    catch(exception: unknown, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();
        let status = HttpStatus.INTERNAL_SERVER_ERROR;
        let message: string | string[] = "Internal server error";
        let errorCode = "INTERNAL_SERVER_ERROR";

        if (exception instanceof BaseAppException) {
            status = exception.getStatus();
            message = exception.message;
            errorCode = exception.errorCode;

        } else if (exception instanceof HttpException) {
            status = exception.getStatus();
            const exceptionResponse = exception.getResponse() as any;

            message = exceptionResponse.message || exception.message;

            errorCode = exceptionResponse.error
                ? exceptionResponse.error.toUpperCase().replace(/\s/g, '_')
                : "HTTP_EXCEPTION";
        }
        this.loggerService.error(
            `Path: ${request.url} | Status: ${status} | Code: ${errorCode} | Error: ${JSON.stringify(message)}`,
            GlobalExceptionsFilter.name
        );
        response.status(status).json({
            statusCode: status,
            errorCode: errorCode,
            message: message,
            path: request.url,
            timestamp: new Date().toISOString(),
        });
    }
}