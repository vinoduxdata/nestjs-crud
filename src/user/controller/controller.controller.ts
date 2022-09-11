import { Controller, Get, Post, Put, Delete, Body, Param, UseInterceptors, UploadedFile } from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { create } from 'domain';
import { get } from 'http';
import { UserDto } from '../dto/user.dto';
import { UserService } from '../service/user/user.service';

@Controller('user')
export class ControllerController {
    constructor(private userServices: UserService) { }


    @Post('/upload')
    @UseInterceptors(FileInterceptor('file'))
    uploadFile(@UploadedFile() file: Express.Multer.File) {
        console.log(file);
        return file;
    }
    @Post('/user')
    create(@Body() user: UserDto): UserDto {
        return this.userServices.create(user);
    };
    @Get('/')
    findall(): UserDto[] {
        return this.userServices.findall();
    }
    @Delete('/:name')
    remove(@Param('name') name: String) {
        return this.userServices.remove()
    }
    // @Put('/name')
    // update(@Param('name') name: String, @Body() userDto: UserDto) {
    //     return this.userServices.update(userDto);


    //}

}
