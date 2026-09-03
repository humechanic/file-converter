import { Injectable } from "@nestjs/common";
import { AuthLoginDTO } from "./dto/auth-login.dto";
import { AuthRegisterDTO } from "./dto/auth-register.dto";
import { AuthLogoutDTO } from "./dto/auth-logout.dto";

@Injectable()
export class AuthService {
    async login(loginDto: AuthLoginDTO) {
        const isEmail = loginDto.login.includes('@');

        let user;
        if (isEmail) {
            // user = await this.userRepository.findByEmail(loginDto.login);
        } else {
            // user = await this.userRepository.findByUsername(loginDto.login);
        }
    }

    async register(authRegisterDTO: AuthRegisterDTO) {
        // return this.usersService.createUser(authRegisterDTO);
    }

    async logout(authLogoutDTO: AuthLogoutDTO) {
        // return this.usersService.remove(authLogoutDTO.id);
    }
}