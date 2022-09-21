import { Student } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { StudentDto } from './student.dto';
export declare class StudentController {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    findAll(): Promise<StudentDto[]>;
    findUnique(id: any): Promise<Student>;
    create({ id, name, course }: StudentDto): Promise<Student>;
    updatePost(id: any): Promise<Student>;
    deleteStudent({ id }: Student): Promise<Student>;
}
