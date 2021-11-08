import {
  Body,
  Controller,
  Delete,
  Get,
  HttpStatus,
  Param,
  Post,
  Put,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { CreateCatDto } from './dtos/create-cat.dto';
import { Cat } from './interfaces/cat.interface';
import { CatsService } from './services/cats.service';

@Controller('cats')
export class CatController {
  constructor(private catsService: CatsService) {}

  @Post()
  async create(@Body() createCatDto: CreateCatDto) {
    this.catsService.create(createCatDto);
  }

  @Post('errou')
  errou(@Res() res: Response) {
    res.status(HttpStatus.BAD_REQUEST).send();
  }

  @Post('acertou')
  acertou(@Res({ passthrough: true }) res: Response) {
    res.status(HttpStatus.OK).json([]);

    return [];
  }

  @Get()
  findAll(): Promise<Cat[]> {
    return this.catsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `this action returns a #${id} cat`;
  }

  @Put(':id')
  update(@Param('id') id: string) {
    return `this action updates a #${id} cat`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `this action remove a #${id} cat`;
  }
}
