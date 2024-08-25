import { Injectable } from '@nestjs/common';
import { MongoRepository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Artist } from './artist.entity';
import { response } from 'express'


@Injectable()
export class ArtistService {
    @InjectRepository(Artist)
    private artistRepository: MongoRepository<Artist>;

    async addArtist(artist: Artist){
        return await this.artistRepository.save({
          firstname: artist.firstname,
          lastname: artist.lastname,
          imageURL: artist.imageURL,
          bio: artist.bio,
          createdAt: Date(),
          createdBy: artist.createdBy,
        })
    }
    async getAllArtistData(){
        return await this.artistRepository.find();
}
}
