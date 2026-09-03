
import { Body, Controller, Post } from "@nestjs/common";
import { AuthService } from "./auth.service.js";
import { ApiTags, ApiResponse } from "@nestjs/swagger";
import { AuthRegisterDTO } from "./dto/auth-register.dto.js";
import { AuthLoginDTO } from "./dto/auth-login.dto.js";
import { AuthLogoutDTO } from "./dto/auth-logout.dto.js";

@ApiTags('Auth')
@Controller()
export class AuthController {
    constructor(private readonly authService: AuthService) { }

    /**
     * Register a new user.
     */
    @Post('register')
    @ApiResponse({
        status: 201,
        description: 'User registered successfully',
    })
    @ApiResponse({
        status: 400,
        description: 'Invalid request body',
    })
    register(@Body() authRegisterDTO: AuthRegisterDTO) {
        return this.authService.register(authRegisterDTO);
    }

    /**
     * Login a user.
     */
    @Post('login')
    @ApiResponse({
        status: 201,
        description: 'User logged in successfully',
    })
    @ApiResponse({
        status: 400,
        description: 'Invalid request body',
    })
    login(@Body() authLoginDTO: AuthLoginDTO) {
        return this.authService.login(authLoginDTO);
    }

    /**
     * Logout a user.
     */
    @Post('logout')
    @ApiResponse({
        status: 201,
        description: 'User logged out successfully',
    })
    @ApiResponse({
        status: 400,
        description: 'Invalid request body',
    })
    logout(@Body() authLogoutDTO: AuthLogoutDTO) {
        return this.authService.logout(authLogoutDTO);
    }
}
