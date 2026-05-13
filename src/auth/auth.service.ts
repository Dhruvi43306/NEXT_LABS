import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AuthEntity } from './entities/auth.entity/auth.entity';
import { CreateAuthDto } from './dto/create-auth.dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto/update-auth.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        @InjectRepository(AuthEntity)
        private authRepo:Repository<AuthEntity>,
        private jwtService:JwtService
    ){}

    findAll(){
        return this.authRepo.find()
    }
    findOne(UserId:number){
        return this.authRepo.findOneBy({ UserId })
    }

    async create(createAuthDto : CreateAuthDto){
        const hashedPassword = await bcrypt.hash(createAuthDto.Password,10)
        const user = this.authRepo.create({
            ...createAuthDto,
            Password:hashedPassword,
            Role:createAuthDto.Role 
        })

        return this.authRepo.save(user)
    }

    async validateUser(Email:string,Password:string){
        const user = await this.authRepo.findOne({where:{ Email }})
       console.log("User:",user)
        if (user && await bcrypt.compare(Password,user.Password)){
            return user
        }
        throw new UnauthorizedException('Invalid credentials');
    }
    async login(user:any){
        const payload = {email: user.Email, sub: user.UserId,Role:user.Role }
         console.log("Email:",user?.Email)
        console.log("Password:",user?.Password)
        return{
            access_token : this.jwtService.sign(payload)
        }
    }
    

    update(UserId:number,updateAuthDto:UpdateAuthDto){
        return this.authRepo.update({ UserId },updateAuthDto)
    }

    remove(UserId:number){
        return this.authRepo.delete({UserId})
    }
}
