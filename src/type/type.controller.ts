import { Controller, Get, Param, Req } from '@nestjs/common';
import type { Request } from 'express';
import { TypeService } from './type.service';

@Controller('type')
export class TypeController {
  constructor(private readonly typeService: TypeService) {}

  @Get()
  getTypes(@Req() req: Request) {
    return this.typeService.findAll(req);
  }

  @Get(':name')
  getTypeDetail(@Param('name') name: string, @Req() req: Request) {
    return this.typeService.findByName(req, name);
  }
}
