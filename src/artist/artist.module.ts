import { Module } from '@nestjs/common';
import { ArtistController } from './artist.controller';
import { ArtistService } from './artist.service';
import { Artist } from './artist.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';



@Module({
  imports:[
      TypeOrmModule.forFeature([Artist]), ConfigModule.forRoot({isGlobal: true}),
  ],
  controllers: [ArtistController],
  providers: [ArtistService]
})
export class ArtistModule {}
