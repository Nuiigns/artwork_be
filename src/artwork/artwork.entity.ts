import { Entity, Column, ObjectIdColumn } from "typeorm";

@Entity({ name: "artwork" })
export class Artwork {
    @ObjectIdColumn()
    _id: string;

    @Column()
    artistId: string;

    @Column()
    imageURL: string;

    @Column()
    like: number;

    @Column({ default: null })
    createdAt: string;

    @Column({ default: null })
    createdBy: string;


}