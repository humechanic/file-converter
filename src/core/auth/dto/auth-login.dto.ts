import { IsString, MinLength } from "class-validator";

export class AuthLoginDTO {
    /**
     * @example john@example.com (or johndoe123)
     */
    @IsString()
    readonly login: string;

    /**
     * @example password123
     */
    @IsString()
    @MinLength(8, { message: "Password must be at least 8 characters long" })
    readonly password: string;
}