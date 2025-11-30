import { Injectable, NotFoundException } from '@nestjs/common';
import { Request } from 'express';
import { buildApiBaseUrl, buildResourceUrl } from '../common/url.utils';
import { POKEMON_DATA, Pokemon } from './pokemon.data';

@Injectable()
export class PokemonService {
  private readonly data: Pokemon[] = POKEMON_DATA;

  findAll(req: Request, limit?: number, offset?: number) {
    const safeLimit =
      typeof limit === 'number' && Number.isFinite(limit) && limit > 0
        ? limit
        : 20;
    const safeOffset =
      typeof offset === 'number' && Number.isFinite(offset) && offset >= 0
        ? offset
        : 0;
    const total = this.data.length;
    const slice = this.data.slice(safeOffset, safeOffset + safeLimit);
    const baseUrl = buildResourceUrl(req, '/pokemon');
    const nextOffset =
      safeOffset + safeLimit < total ? safeOffset + safeLimit : null;
    const prevOffset =
      safeOffset - safeLimit >= 0 ? safeOffset - safeLimit : null;

    return {
      count: total,
      next:
        nextOffset === null
          ? null
          : `${baseUrl}?offset=${nextOffset}&limit=${safeLimit}`,
      previous:
        prevOffset === null
          ? null
          : `${baseUrl}?offset=${prevOffset}&limit=${safeLimit}`,
      results: slice.map((p) => ({
        name: p.name,
        url: `${baseUrl}/${p.name}/`,
      })),
    };
  }

  findByName(req: Request, name: string) {
    const pokemon = this.data.find(
      (p) => p.name.toLowerCase() === name.toLowerCase(),
    );
    if (!pokemon) {
      throw new NotFoundException(`Pokemon ${name} not found`);
    }

    const apiBase = buildApiBaseUrl(req);

    return {
      id: pokemon.id,
      name: pokemon.name,
      base_experience: pokemon.baseExperience ?? null,
      height: pokemon.height,
      is_default: true,
      order: pokemon.id,
      weight: pokemon.weight,
      abilities: (pokemon.abilities ?? []).map((ability) => ({
        ability: {
          name: ability.name,
          url: `${apiBase}/ability/${ability.name}/`,
        },
        is_hidden: ability.isHidden ?? false,
        slot: ability.slot,
      })),
      forms: [
        {
          name: pokemon.name,
          url: `${apiBase}/pokemon-form/${pokemon.id}/`,
        },
      ],
      game_indices: [],
      held_items: [],
      location_area_encounters: `${apiBase}/pokemon/${pokemon.id}/encounters`,
      moves: [],
      past_types: [],
      species: {
        name: pokemon.name,
        url: `${apiBase}/pokemon-species/${pokemon.id}/`,
      },
      sprites: {
        front_default: pokemon.sprite,
        front_female: null,
        front_shiny: null,
        front_shiny_female: null,
        other: {
          'official-artwork': {
            front_default: pokemon.sprite,
            front_shiny: null,
          },
        },
      },
      stats: [],
      types: pokemon.types.map((typeName, index) => ({
        slot: index + 1,
        type: {
          name: typeName,
          url: `${apiBase}/type/${typeName}/`,
        },
      })),
    };
  }
}
