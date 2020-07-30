import { Controller, Get, Param, Post, Body, Delete, Put } from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from '../db/models';

@Controller({
  path: 'users'
})
export class UsersController {
  constructor(private readonly UsersService: UsersService) {}

  // Get /users で全てのデータを取得
  @Get()
  getUsers(): Promise<User[]> {
    return this.UsersService.findAll();
  }

  // Get /users/:id で対象idのレコードを取得
  @Get(':id')
  getUser(@Param('id') id: number):  Promise<User> {
    return this.UsersService.findByPk(id);
  }

  // Post /users でレコードを追加（name:new user）
  @Post()
  userCreate(){
    this.UsersService.create();
  }

  // Delete /users/:id で対象idのレコードを削除
  @Delete(':id')
  userDestroy(@Param('id') id: number){
    this.UsersService.destroy(id);
  }

  // Put /users/:id -d 'name=**' で対象idのnameを更新
  @Put(':id')
  update(@Param('id') id:number , @Body('name') name:string){
    this.UsersService.update(id,name);
  }

}