import { ValueOf } from "@/src/shared/utils/value-of.js";

export const ROLES = {
    ADMIN: "ADMIN",
    GUEST: "GUEST",
    USER: "USER"
} as const;
export type ROLES = ValueOf<typeof ROLES>;