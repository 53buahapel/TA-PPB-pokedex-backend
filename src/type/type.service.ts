import { Injectable, NotFoundException } from '@nestjs/common';
import { Request } from 'express';
import { buildApiBaseUrl, buildResourceUrl } from '../common/url.utils';
import { TYPE_LIST } from './type.data';
import { POKEMON_DATA } from '../pokemon/pokemon.data';

@Injectable()
export class TypeService {
  findAll(req: Request) {
    const baseUrl = buildResourceUrl(req, '/type');
    return {
      count: TYPE_LIST.length,
      next: null,
      previous: null,
      results: TYPE_LIST.map((type) => ({
        name: type.name,
        url: `${baseUrl}/${type.name}/`,
      })),
    };
  }

  findByName(req: Request, name: string) {
    const type = TYPE_LIST.find(
      (t) => t.name.toLowerCase() === name.toLowerCase(),
    );
    if (!type) {
      throw new NotFoundException(`Type ${name} not found`);
    }

    const apiBase = buildApiBaseUrl(req);
    const pokemon = POKEMON_DATA.filter((p) =>
      p.types.map((t) => t.toLowerCase()).includes(name.toLowerCase()),
    ).map((p) => ({
      pokemon: {
        name: p.name,
        url: `${apiBase}/pokemon/${p.name}/`,
      },
      slot: 1,
    }));

    return {
      damage_relations: {
        double_damage_from: [],
        double_damage_to: [],
        half_damage_from: [],
        half_damage_to: [],
        no_damage_from: [],
        no_damage_to: [],
      },
      game_indices: [],
      generation: {
        name: 'generation-i',
        url: `${apiBase}/generation/1/`,
      },
      id: type.id,
      move_damage_class: {
        name: 'special',
        url: `${apiBase}/move-damage-class/3/`,
      },
      name: type.name,
      names: [
        {
          language: {
            name: 'en',
            url: `${apiBase}/language/9/`,
          },
          name: type.name,
        },
      ],
      past_damage_relations: [],
      pokemon,
      moves: [],
    };
  }
}
