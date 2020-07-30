import { Injectable, Inject, Param, Req } from '@nestjs/common';
import { User } from '../db/models';

@Injectable()
export class UsersService {
  constructor(
    @Inject('USERS_REPOSITORY') private readonly USERS_REPOSITORY: typeof User) {}
 
  async findAll(): Promise<User[]> {
    return await this.USERS_REPOSITORY.findAll<User>();
  }

  async findByPk(id: number): Promise<User> {
    return await this.USERS_REPOSITORY.findByPk<User>(id);
  }

  async create() {
    await this.USERS_REPOSITORY.create({
      name:'new user'
    });
  }

　async destroy(id: number){
    await this.USERS_REPOSITORY.destroy(
      {where: { id:id }}
    );
  }

　async update(id: number, name:string){
    await this.USERS_REPOSITORY.update(
      {name: name},
      {where: {id: id} }
    );
  }

}