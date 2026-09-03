import { ValidationPipe } from "@nestjs/common";
import { ValidationError } from "class-validator";
import { ValidationException } from "../errors/exceptions/validation.exception";

export class EnhancedValidationPipe extends ValidationPipe {
    constructor() {
        super({
            whitelist: true,
            forbidNonWhitelisted: true,
            transform: true,
            exceptionFactory: (validationErrors: ValidationError[]) => {
                const errors = this.errorResponseBuilder(validationErrors);

                return new ValidationException(errors);
            },
        })
    }

    private errorResponseBuilder(validationErrors: ValidationError[], parentPath = ''): Record<string, string[]> {
        const result: Record<string, string[]> = {};

        validationErrors.forEach((error) => {
            const fieldPath = parentPath ? `${parentPath}.${error.property}` : error.property;

            if (error.constraints && Object.keys(error.constraints).length > 0) {
                result[fieldPath] = Object.values(error.constraints);
            }

            if (error.children && error.children.length > 0) {
                const nestedErrors = this.errorResponseBuilder(error.children, fieldPath);

                Object.assign(result, nestedErrors);
            }
        });

        return result;
    }
}
