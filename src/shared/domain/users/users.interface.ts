import { ROLES } from "../../constants/roles/roles";
import { PERMISSIONS } from "../../constants/roles/permissions";

export interface IUserBase {
    id: string;
    username: string;
    email: string;
    role: ROLES;
    createdAt: Date;
    updatedAt: Date;
    permissions?: PERMISSIONS[];
    isActive: boolean;
}