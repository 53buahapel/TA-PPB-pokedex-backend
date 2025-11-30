import { Controller, Get, Param, Query, Req } from '@nestjs/common';
import type { Request } from 'express';
import { PokemonService } from './pokemon.service';

@Controller('pokemon')
export class PokemonController {
  constructor(private readonly pokemonService: PokemonService) {}

  @Get()
  getPokemonList(
    @Req() req: Request,
    @Query('limit') limit?: string,
    @Query('offset') offset?: string,
  ) {
    const parsedLimit = limit ? parseInt(limit, 10) : undefined;
    const parsedOffset = offset ? parseInt(offset, 10) : undefined;
    return this.pokemonService.findAll(req, parsedLimit, parsedOffset);
  }

  @Get(':name')
  getPokemonDetail(@Param('name') name: string, @Req() req: Request) {
    return this.pokemonService.findByName(req, name);
  }
}
