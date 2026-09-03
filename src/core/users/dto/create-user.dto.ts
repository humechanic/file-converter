import { IUserBaseDTO } from "@/src/shared/entities/users/users";
import { IsEmail, IsString, MinLength } from "class-validator";
import { ApiProperty } from "@nestjs/swagger";


export class CreateUserDTO implements Pick<IUserBaseDTO, "username" | "email"> {
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