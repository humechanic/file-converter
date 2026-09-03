import { IUserBaseDTO } from "@/src/shared/entities/users/users";
import { IsString, IsEmail, IsStrongPassword } from "class-validator";
import { IsStringMatches } from "../decorators/match.decorator";

export class AuthRegisterDTO implements Pick<IUserBaseDTO, "email"> {
    /** 
     * @example john@example.com
     */
    @IsEmail()
    readonly email: string;
    /**
     * Example: Password123! 
     */
    @IsStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
    }, { message: "Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character" })
    @IsString()
    readonly password: string;
    /**
     * Example: Password123! 
     */
    @IsStrongPassword({
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
    }, { message: "Confirm Password must be at least 8 characters long and contain at least one lowercase letter, one uppercase letter, one number, and one special character" })
    @IsString()
    @IsStringMatches('password', { message: 'Passwords do not match' })
    readonly confirmPassword: string;
}