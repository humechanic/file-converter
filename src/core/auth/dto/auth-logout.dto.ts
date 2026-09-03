import { IsString, MinLength, IsEmail } from "class-validator";
import { IUserBaseDTO } from "@/src/shared/entities/users/users";

export class AuthLogoutDTO implements Pick<IUserBaseDTO, "id"> {
    @IsString()
    @MinLength(1, { message: "ID must be at least 1 character long" })
    readonly id: string;
}