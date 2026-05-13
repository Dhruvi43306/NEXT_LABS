import { Controller, Delete, Get, HttpCode, Post, Put, Req,Res } from '@nestjs/common';
import { AppService } from './app.service';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  get() {
    return this.appService.getHello()
  }
  //hanging request because nest say you send the response but devloper not send manualy response so
  //so requeat are hanging that means it is not compilation errro it is runtime if you can write res so
  //devloper specify write res.send('') otherwise server can stuck
  // @Get()
  // get(@Req() req:Request, @Res() res:Response) {
  //   return this.appService.getHello()
  // }


}
