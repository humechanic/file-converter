import { IsString, MinLength, IsEmail } from "class-validator";
import { IUserBase } from "@/src/shared/domain/users/users.interface";

export class AuthLogoutDTO implements Pick<IUserBase, "id"> {
    @IsString()
    @MinLength(1, { message: "ID must be at least 1 character long" })
    readonly id: string;
}