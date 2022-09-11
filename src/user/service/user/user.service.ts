import { Injectable } from '@nestjs/common';
import { UserDto } from 'src/user/dto/user.dto';

@Injectable()
export class UserService {
    update(userDto: UserDto) {
        throw new Error('Method not implemented.');
    }
    public users: Array<UserDto> = [];

    create(user: UserDto): UserDto {
        this.users.push(user);
        return user;
    }

    findall(): UserDto[] {
        return this.users;

    }
    remove(): UserDto {
        return this.users.pop();


    }
    // update(user: UserDto): UserDto {
    //     this.users.push(UserDto)
    //     return user;
    // }
}
