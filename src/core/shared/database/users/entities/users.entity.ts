import {
    Entity,
    PrimaryGeneratedColumn,
    Column,
    CreateDateColumn,
    UpdateDateColumn
} from 'typeorm';
import { IUserBase } from '@/shared/domain/users/users.interface';
import { PERMISSIONS } from '@/shared/constants/roles/permissions';
import { ROLES } from '@/shared/constants/roles/roles';

@Entity('users')
export class UsersEntity implements Pick<IUserBase, 'id' | 'email' | 'username' | 'createdAt' | 'updatedAt'> {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column({ type: 'varchar', length: 255, unique: true })
    email: string;

    @Column({ type: 'varchar', length: 50, unique: true, nullable: true })
    username: string;

    @Column({ nullable: false, name: 'password_hash' })
    passwordHash: string;

    @Column()
    role: ROLES;

    @Column({ name: 'is_active', default: true })
    isActive: boolean;

    @Column({ name: 'permissions', nullable: true })
    permissions?: PERMISSIONS[];

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;
}