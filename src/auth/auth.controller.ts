import {
  Body,
  Controller,
  Delete,
  ForbiddenException,
  Get,
  Param,
  Post,
  Put,
  Req,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import { CreateAuthDto } from './dto/create-auth.dto/create-auth.dto';
import { UpdateAuthDto } from './dto/update-auth.dto/update-auth.dto';
import { AuthGuard } from '@nestjs/passport';
import { RolesGuard } from './guard/roles.guard';
import { Roles } from './decorators/roles.decorator';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Get()
   @UseGuards(AuthGuard('jwt'),RolesGuard)
   @Roles('Admin')
  findAll() {
    return this.authService.findAll();
  }

  @Get(':id')
  @UseGuards(AuthGuard('jwt'))
  findOne(@Param('id') id: string,@Req() req) {
    const user = req.user
    if(user.role == 'User'){
      throw new ForbiddenException('You can only access your own data') 
    }
    else{ 
      return this.authService.findOne(+id);
    }
  }

  @Post('register')
  create(@Body() createAuthDto: CreateAuthDto) {
    return this.authService.create(createAuthDto);
  }

  @Post('/login')
  @UseGuards(AuthGuard('local'))
  login(@Req() req) {
    return this.authService.login(req.user);
  }

  @Put(':id')
  @UseGuards(AuthGuard('jwt'))
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(+id, updateAuthDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}
