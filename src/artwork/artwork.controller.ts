import { Controller, Post, Get, Body, UseGuards } from '@nestjs/common';
import { Artwork } from './artwork.entity';
import { ArtworkService } from './artwork.service';
import { Authorize } from 'src/authorize.guard';


@Controller('artwork')
export class ArtworkController {
    constructor(private artworkService: ArtworkService) { }

    @Post()
    @UseGuards(Authorize)
    async addArtwork(@Body() artwork: Artwork) {
        const addArtwork = await this.artworkService.addArtwork(artwork);
        return addArtwork;
    }

@Get()
    @UseGuards(Authorize)
    async getAllArtworktData() { return await this.artworkService.getAllArtworkData(); }
}

