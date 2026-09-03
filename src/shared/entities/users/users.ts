import { ROLES } from "../roles/roles";
import { PERMISSIONS } from "../roles/permissions";

export interface IUserBaseDTO {
    id: string;
    username: string;
    email: string;
    role: ROLES;
    createdAt: Date;
    updatedAt: Date;
    permissions?: PERMISSIONS[];
    isActive: boolean;
}