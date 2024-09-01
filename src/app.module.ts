import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { User } from './auth/user.entity';
import { ArtistModule } from './artist/artist.module';
import { Artist } from './artist/artist.entity';
import { ArtworkModule } from './artwork/artwork.module';
import { Artwork } from './artwork/artwork.entity';

@Module({
  imports: [
   TypeOrmModule.forRoot({
    type: 'mongodb',
    url: 'mongodb+srv://wathanyuok:admin@awshowcase.fj5mq.mongodb.net/?retryWrites=true&w=majority&appName=AWshowcase',
    entities: [User, Artist, Artwork],
   }),
    AuthModule,
    ArtistModule,
    ArtworkModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
