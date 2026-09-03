import { IUserBase } from "@/src/shared/domain/users/users.interface";
import { IsEmail, IsString, MinLength } from "class-validator";


export class CreateUserDTO implements Pick<IUserBase, "username" | "email"> {
    /**
     * @example johndoe123
     */
    @IsString()
    @MinLength(3, { message: "Username must be at least 3 characters long" })
    readonly username: string;
    /**
     * @example john@example.com
     */
    @IsEmail()
    readonly email: string;
    /**
     * @example password123
     */
    @IsString()
    @MinLength(8, { message: "Password must be at least 8 characters long" })
    readonly password: string;
    /**
     * @example password123
     */
    @IsString()
    @MinLength(8, { message: "Confirm Password must be at least 8 characters long" })
    readonly confirmPassword: string;
}