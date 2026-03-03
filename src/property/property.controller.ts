import { Controller, Get, Param, Post } from '@nestjs/common';
import { get } from 'http';

@Controller('property')
export class PropertyController {
  @Get()
  findAll() {
    return 'This action returns all properties';
  }

  @Get(':id/:star')
  findOne(@Param('id') id, @Param('star') star) {
    return `id = ${id} star = ${star}`;
  }

  @Post()
  create() {
    return 'This action creates a new property';
  }
}
