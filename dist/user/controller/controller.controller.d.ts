/// <reference types="multer" />
import { UserDto } from '../dto/user.dto';
import { UserService } from '../service/user/user.service';
export declare class ControllerController {
    private userServices;
    constructor(userServices: UserService);
    uploadFile(file: Express.Multer.File): Express.Multer.File;
    create(user: UserDto): UserDto;
    findall(): UserDto[];
    remove(name: String): UserDto;
}
