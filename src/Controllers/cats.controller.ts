import { Controller, Get, Query, Post, Body, Put, Param, Delete } from '@nestjs/common';
import { CreateCatDto, UpdateCatDto } from '../dto/cat.dto';

//https://docs.nestjs.com/controllers
@Controller('cats')
export class CatsController {


    @Post()
    create(@Body() createCatDto: CreateCatDto) {
        //localhost:3000/cats/
        /* body json 
        {
        "name": "meow",
        "age": 1,
        "breed": "string"
        }
        */
        return 'This action adds a new cat name: ' + createCatDto.name;
    }


    @Get()
    findAll() {
        return `This action returns all cats`;
    }

    @Get('search')
    search(@Query('name') name: string, @Query('age') age: number) {
        //localhost:3000/cats/search?name=meow
        //localhost:3000/cats/search?name=meow&age=2
        //localhost:3000/cats/search?age=2&name=meow
        //localhost:3000/cats/search?age=2
        let result = `This action returns all cats have name: ${name}`;
        if (age)
            result += `and ${age} years old`;

        return result;

    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        //localhost:3000/cats/1
        return `This action returns a #${id} cat`;
    }

    @Put(':id')
    update(@Param('id') id: string, @Body() updateCatDto: UpdateCatDto) {
        //localhost:3000/cats/1
        /* body json 
          {
          "name": "string",
          "age": 1,
          "breed": "string"
          }
      */
        return `This action updates a #${id} cat ${updateCatDto.name}`;
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        //localhost:3000/cats/1
        return `This action removes a #${id} cat`;
    }
}