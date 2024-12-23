import { Injectable } from '@nestjs/common';

@Injectable()
export class UsersService {
  private users: any = [{id: 0, name: "pallav"}];

  findAll() {
    return this.users;
  }

  findById(userId: number) {
    return this.users.find( user => user.id === userId );
  }

  createUser(name: string) {
    const newUser = {id: Date.now(), name};
    this.users.push(newUser);
    return newUser;
  }

  
  
}
