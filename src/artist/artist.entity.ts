import { Entity, Column, ObjectIdColumn} from "typeorm";

@Entity({name: "artist"})
export class Artist{
    @ObjectIdColumn()
    _id: string;

    @Column()
    firstname: string;

    @Column()
    lastname: string;
    
    @Column()
    imageURL: string;

    @Column()
    bio: string;

    @Column({default: null})
    createdAt: string;

    @Column({default: null})
    createdBy: string;

}