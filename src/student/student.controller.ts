import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Prisma, Student } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { StudentDto } from './student.dto';

@Controller('student')
export class StudentController {
    constructor(private readonly prismaService: PrismaService) { }

    @Get()
    findAll(): Promise<StudentDto[]> {
        return this.prismaService.student.findMany()
    }

    @Get('stu')

    findUnique(@Param('id') id): Promise<Student> {
        console.log('id' + id);
        return this.prismaService.student.findUnique({
            where: {
                id
            }
        })

    }


    @Post()
    create(@Body() { id, name, course }: StudentDto): Promise<Student> {
        return this.prismaService.student.create({ data: { id, name, course } })
    }



    @Put('stu/:id')
    async updatePost(@Param('id') id): Promise<Student> {
        return this.prismaService.student.update({
            where: {
                id
            },
            data: StudentDto
        });
    }



    @Delete()
    deleteStudent(@Param() { id }: Student): Promise<Student> {
        return this.prismaService.student.delete({
            where: { id: Number(id) }
        })
    }

}
