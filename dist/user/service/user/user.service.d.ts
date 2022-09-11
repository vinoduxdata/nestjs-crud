import { UserDto } from 'src/user/dto/user.dto';
export declare class UserService {
    update(userDto: UserDto): void;
    users: Array<UserDto>;
    create(user: UserDto): UserDto;
    findall(): UserDto[];
    remove(): UserDto;
}
