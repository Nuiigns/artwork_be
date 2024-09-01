import { Injectable } from '@nestjs/common';
import { MongoRepository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Artwork } from './artwork.entity'
import { response } from 'express';
import { Artist } from 'src/artist/artist.entity';


@Injectable()
export class ArtworkService {
    @InjectRepository(Artwork)
    private artworkRepository: MongoRepository<Artwork>;

    async addArtwork(artwork: Artwork){
        return await this.artworkRepository.save({
            artistId: artwork.artistId,
            imageURL: artwork.imageURL,
            like: 0,
            createdAt: Date(),
            createdBy: artwork.createdBy,

        })
    }
    async getAllArtworkData(){
        return await this.artworkRepository.find();
    }
 }
