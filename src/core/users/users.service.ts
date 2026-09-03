import { Injectable } from "@nestjs/common";
import { CreateUserDTO } from "./dto/create-user.dto";

@Injectable()
export class UsersService {
    constructor() { }
    getMe() {
        return {};
    }
    getUser(id: string) {
        return {};
    }
    getAll() {
        return {};
    }
    createUser(data: CreateUserDTO) {
        console.log('Data from service: ', data);
        return data;
    }
    updateUser(data: any) {
        return {};
    }
    deleteUser(data: any) {
        return {};
    }

}
