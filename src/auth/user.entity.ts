import {Entity, Column, ObjectIdColumn} from 'typeorm';

@Entity({name: "user"})
export class User {
    @ObjectIdColumn()
    _id: string;

    @Column()
    firstname: string;
    
    @Column()
    lastname: string;
    
    @Column()
    tel: string;

    @Column()
    email: string;

    @Column()
    password: string;

    
    @Column({default: null})
    createdAt: string;

        
    @Column({default: null})
    createdBy: string;
}