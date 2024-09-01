import { Module } from '@nestjs/common';
import { ArtworkController } from './artwork.controller';
import { ArtworkService } from './artwork.service';
import { Artwork } from './artwork.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';  


@Module({
  imports:[
    TypeOrmModule.forFeature([Artwork]), ConfigModule.forRoot({isGlobal: true})
  ],
  controllers: [ArtworkController],
  providers: [ArtworkService]
})
export class ArtworkModule {}
