
import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDTO } from "./dto/create-user.dto";
import { ApiTags, ApiOperation, ApiResponse, ApiBody } from '@nestjs/swagger';

@ApiTags('Users')
@Controller()
export class UsersController {
    constructor(private readonly usersService: UsersService) { }

    /**
     * Get current user.
     */
    @Get('me')
    @ApiResponse({ status: 200, description: 'User fetched successfully' })
    @ApiResponse({ status: 401, description: 'Unauthorized' })
    getMe() {
        return this.usersService;
    }

    /**
     * Get all users.
     */
    @Get('users')
    @ApiResponse({ status: 200, description: 'Users fetched successfully' })
    @ApiResponse({ status: 401, description: 'Unauthorized' })
    getAll() {
        return this.usersService;
    }

    /**
     * Get user by ID.
     */
    @Get('users/:id')
    @ApiResponse({ status: 200, description: 'User fetched successfully' })
    @ApiResponse({ status: 401, description: 'Unauthorized' })
    @ApiResponse({ status: 404, description: 'User not found' })
    getUser(@Param('id') id: string) {
        return this.usersService;
    }

    /**
     * Create new user.
     */
    @Post('users')
    @ApiResponse({ status: 201, description: 'User created' })
    @ApiResponse({ status: 400, description: 'Validation error' })
    @ApiBody({ type: CreateUserDTO })
    createUser(@Body() createUserDTO: CreateUserDTO) {
        return this.usersService.createUser(createUserDTO);
    }

    /**
     * Update user by ID.
     */
    @Put('users/:id')
    @ApiResponse({ status: 200, description: 'User updated successfully' })
    @ApiResponse({ status: 401, description: 'Unauthorized' })
    @ApiResponse({ status: 404, description: 'User not found' })
    updateUser(@Param('id') id: string) {
        return this.usersService;
    }

    /**
     * Delete user by ID.
     */
    @Delete('users/:id')
    @ApiResponse({ status: 200, description: 'User deleted successfully' })
    @ApiResponse({ status: 401, description: 'Unauthorized' })
    @ApiResponse({ status: 404, description: 'User not found' })
    deleteUser(@Param('id') id: string) {
        return this.usersService;
    }
}

