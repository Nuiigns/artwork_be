import { Injectable } from '@nestjs/common';
import { MongoRepository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { response } from 'express';
import * as bcrypt from 'bcrypt';
import * as jwt from 'jsonwebtoken';
import { Hash } from 'crypto';

@Injectable()
export class AuthService {
    @InjectRepository(User)
    private userRepository: MongoRepository<User>;

    async register(user: User) {
        const userVerify = await this.userRepository.find({
            email: user.email
        })
        console.log(userVerify);

        if (userVerify.length == 0) {
            const HashedPassword = await bcrypt.hash(user.password, 12);
            return await this.userRepository.save({
                firstname: user.firstname,
                lastname: user.lastname,
                email: user.email,
                password: HashedPassword,
                createdAt: Date(),

            })
        } else if (userVerify.length !== 0) {
            const status = response.status(422);
            const msg = (response.statusMessage =
                'This email has already been registered.');
            return status;
        }

    }
}

