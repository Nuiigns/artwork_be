import { Controller, Post, Get, Body, UseGuards } from '@nestjs/common';
import { Artist } from './artist.entity';
import { ArtistService } from './artist.service';
import { Authorize } from 'src/authorize.guard';


@Controller('artist')
export class ArtistController {
    constructor(private artistService: ArtistService) { }

    @Post()
    @UseGuards(Authorize)
    async addArtist(@Body() artist: Artist) {
        const addArtist = await this.artistService.addArtist(artist);
        return addArtist;

    }

    @Get()
    @UseGuards(Authorize)
    async getAllArtistData() { return await this.artistService.getAllArtistData(); }
}


