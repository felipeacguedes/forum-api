/* eslint-disable @typescript-eslint/no-unsafe-return */
import {
  Body,
  Controller,
  Get,
  HttpCode,
  Param,
  ParseBoolPipe,
  ParseIntPipe,
  Post,
  Query,
} from '@nestjs/common';
import { CreatePropertyDto } from './dto/createProperty.dto';

@Controller('property')
export class PropertyController {
  @Get()
  findAll() {
    return 'All properties';
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id, @Query('sort', ParseBoolPipe) sort) {
    console.log(typeof id);
    console.log(typeof sort);
    return id;
  }

  @Post()
  @HttpCode(202)
  create(@Body() body: CreatePropertyDto) {
    return body;
  }
}
