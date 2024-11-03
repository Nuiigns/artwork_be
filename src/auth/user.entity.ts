import {Entity, Column, ObjectIdColumn} from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';


@Entity({name: "user"})
export class User {
    @ObjectIdColumn()
    _id: string;

    @ApiProperty()
    @Column()
    firstname: string;
    
    @ApiProperty()
    @Column()
    lastname: string;
    
    @ApiProperty()
    @Column()
    tel: string;

    @ApiProperty()
    @Column()
    email: string;

    @ApiProperty()
    @Column()
    password: string;

    
    @Column({default: null})
    createdAt: string;

        
    @Column({default: null})
    createdBy: string;
}