import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

// Required ONLY if you are using TypeORM (or any ORM)
@Entity()
export class AuthEntity {
    @PrimaryGeneratedColumn()
    UserId:number

    @Column()
    UserName:string

    @Column()
    Email:string

    @Column()
    Password:string

    @Column({
    type:'enum',
    enum:['Admin','User'],
    default:'User'
    })
    Role: string
}
