import {Entity, PrimaryGeneratedColumn, Column} from "typeorm";

@Entity('users')
export default class User {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    name: string;

    @Column()
    avatar: string;

    @Column()
    whatsapp: string;

    @Column()
    bio: string;

}
