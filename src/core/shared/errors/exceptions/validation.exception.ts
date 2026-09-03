import { HttpStatus } from "@nestjs/common";
import { BaseAppException } from "./base-app.exception";

export class ValidationException extends BaseAppException {
    constructor(public readonly validationErrors: Record<string, string[]>) {
        super('VALIDATION_ERROR', 'Validation failed', HttpStatus.BAD_REQUEST);
    }
}