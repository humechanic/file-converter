import { ArgumentsHost, Catch, ExceptionFilter, HttpException, HttpStatus } from "@nestjs/common";
import { Request, Response } from "express";
import { LoggerService } from "../../logger/logger.service";
import { BaseAppException } from "../exceptions/base-app.exception";
import { ValidationException } from "../exceptions/validation.exception";

interface NormalizedError {
    status: HttpStatus;
    errorCode: string;
    message: string | string[];
    errorsDetails?: Record<string, string[]>;
}

@Catch()
export class GlobalExceptionsFilter implements ExceptionFilter {
    constructor(private readonly loggerService: LoggerService) { }

    catch(exception: unknown, host: ArgumentsHost) {
        const ctx = host.switchToHttp();
        const response = ctx.getResponse<Response>();
        const request = ctx.getRequest<Request>();

        const normalizedError = this.normalizeException(exception);

        const errorResponse: any = {
            statusCode: normalizedError.status,
            errorCode: normalizedError.errorCode,
            message: normalizedError.message,
            path: request.url,
            timestamp: new Date().toISOString(),
        };

        if (normalizedError.errorsDetails) {
            errorResponse.errors = normalizedError.errorsDetails;
        }

        this.loggerService.error(
            `Path: ${request.url} | Status: ${normalizedError.status} | Code: ${normalizedError.errorCode} | Error: ${JSON.stringify(normalizedError.message)}`,
            GlobalExceptionsFilter.name
        );
        response.status(normalizedError.status).json(errorResponse);
    }

    private normalizeException(exception: unknown): NormalizedError {

        if (exception instanceof ValidationException) {
            return {
                status: exception.getStatus(),
                message: exception.message,
                errorCode: exception.errorCode,
                errorsDetails: exception.validationErrors,
            }
        }
        if (exception instanceof BaseAppException) {
            return {
                status: exception.getStatus(),
                message: exception.message,
                errorCode: exception.errorCode,
            }
        }
        if (exception instanceof HttpException) {
            const exceptionResponse = exception.getResponse() as any;
            return {
                status: exception.getStatus(),
                message: exceptionResponse.message || exception.message,
                errorCode: exceptionResponse.error
                    ? exceptionResponse.error.toUpperCase().replace(/\s/g, '_')
                    : "HTTP_EXCEPTION",
            }
        }
        return {
            status: HttpStatus.INTERNAL_SERVER_ERROR,
            message: "Internal server error",
            errorCode: "INTERNAL_SERVER_ERROR",
        };

    }
}

