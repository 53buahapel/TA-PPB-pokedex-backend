export interface PokemonAbility {
  name: string;
  isHidden?: boolean;
  slot: number;
}

export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  sprite: string;
  types: string[];
  baseExperience?: number | null;
  abilities?: PokemonAbility[];
}

export const POKEMON_DATA: Pokemon[] = [
  {
    "id": 1,
    "name": "bulbasaur",
    "height": 7,
    "weight": 69,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    "types": [
      "grass",
      "poison"
    ],
    "baseExperience": 64,
    "abilities": [
      {
        "name": "overgrow",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "chlorophyll",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 2,
    "name": "ivysaur",
    "height": 10,
    "weight": 130,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png",
    "types": [
      "grass",
      "poison"
    ],
    "baseExperience": 142,
    "abilities": [
      {
        "name": "overgrow",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "chlorophyll",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 3,
    "name": "venusaur",
    "height": 20,
    "weight": 1000,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/3.png",
    "types": [
      "grass",
      "poison"
    ],
    "baseExperience": 236,
    "abilities": [
      {
        "name": "overgrow",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "chlorophyll",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 4,
    "name": "charmander",
    "height": 6,
    "weight": 85,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    "types": [
      "fire"
    ],
    "baseExperience": 62,
    "abilities": [
      {
        "name": "blaze",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "solar-power",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 5,
    "name": "charmeleon",
    "height": 11,
    "weight": 190,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/5.png",
    "types": [
      "fire"
    ],
    "baseExperience": 142,
    "abilities": [
      {
        "name": "blaze",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "solar-power",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 6,
    "name": "charizard",
    "height": 17,
    "weight": 905,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    "types": [
      "fire",
      "flying"
    ],
    "baseExperience": 240,
    "abilities": [
      {
        "name": "blaze",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "solar-power",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 7,
    "name": "squirtle",
    "height": 5,
    "weight": 90,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    "types": [
      "water"
    ],
    "baseExperience": 63,
    "abilities": [
      {
        "name": "torrent",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "rain-dish",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 8,
    "name": "wartortle",
    "height": 10,
    "weight": 225,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/8.png",
    "types": [
      "water"
    ],
    "baseExperience": 142,
    "abilities": [
      {
        "name": "torrent",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "rain-dish",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 9,
    "name": "blastoise",
    "height": 16,
    "weight": 855,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/9.png",
    "types": [
      "water"
    ],
    "baseExperience": 239,
    "abilities": [
      {
        "name": "torrent",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "rain-dish",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10,
    "name": "caterpie",
    "height": 3,
    "weight": 29,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10.png",
    "types": [
      "bug"
    ],
    "baseExperience": 39,
    "abilities": [
      {
        "name": "shield-dust",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "run-away",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 11,
    "name": "metapod",
    "height": 7,
    "weight": 99,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/11.png",
    "types": [
      "bug"
    ],
    "baseExperience": 72,
    "abilities": [
      {
        "name": "shed-skin",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 12,
    "name": "butterfree",
    "height": 11,
    "weight": 320,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/12.png",
    "types": [
      "bug",
      "flying"
    ],
    "baseExperience": 178,
    "abilities": [
      {
        "name": "compound-eyes",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "tinted-lens",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 13,
    "name": "weedle",
    "height": 3,
    "weight": 32,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/13.png",
    "types": [
      "bug",
      "poison"
    ],
    "baseExperience": 39,
    "abilities": [
      {
        "name": "shield-dust",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "run-away",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 14,
    "name": "kakuna",
    "height": 6,
    "weight": 100,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/14.png",
    "types": [
      "bug",
      "poison"
    ],
    "baseExperience": 72,
    "abilities": [
      {
        "name": "shed-skin",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 15,
    "name": "beedrill",
    "height": 10,
    "weight": 295,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/15.png",
    "types": [
      "bug",
      "poison"
    ],
    "baseExperience": 178,
    "abilities": [
      {
        "name": "swarm",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sniper",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 16,
    "name": "pidgey",
    "height": 3,
    "weight": 18,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/16.png",
    "types": [
      "normal",
      "flying"
    ],
    "baseExperience": 50,
    "abilities": [
      {
        "name": "keen-eye",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "tangled-feet",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "big-pecks",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 17,
    "name": "pidgeotto",
    "height": 11,
    "weight": 300,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/17.png",
    "types": [
      "normal",
      "flying"
    ],
    "baseExperience": 122,
    "abilities": [
      {
        "name": "keen-eye",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "tangled-feet",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "big-pecks",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 18,
    "name": "pidgeot",
    "height": 15,
    "weight": 395,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/18.png",
    "types": [
      "normal",
      "flying"
    ],
    "baseExperience": 216,
    "abilities": [
      {
        "name": "keen-eye",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "tangled-feet",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "big-pecks",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 19,
    "name": "rattata",
    "height": 3,
    "weight": 35,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/19.png",
    "types": [
      "normal"
    ],
    "baseExperience": 51,
    "abilities": [
      {
        "name": "run-away",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "guts",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "hustle",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 20,
    "name": "raticate",
    "height": 7,
    "weight": 185,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/20.png",
    "types": [
      "normal"
    ],
    "baseExperience": 145,
    "abilities": [
      {
        "name": "run-away",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "guts",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "hustle",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 21,
    "name": "spearow",
    "height": 3,
    "weight": 20,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/21.png",
    "types": [
      "normal",
      "flying"
    ],
    "baseExperience": 52,
    "abilities": [
      {
        "name": "keen-eye",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sniper",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 22,
    "name": "fearow",
    "height": 12,
    "weight": 380,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/22.png",
    "types": [
      "normal",
      "flying"
    ],
    "baseExperience": 155,
    "abilities": [
      {
        "name": "keen-eye",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sniper",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 23,
    "name": "ekans",
    "height": 20,
    "weight": 69,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/23.png",
    "types": [
      "poison"
    ],
    "baseExperience": 58,
    "abilities": [
      {
        "name": "intimidate",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "shed-skin",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "unnerve",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 24,
    "name": "arbok",
    "height": 35,
    "weight": 650,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/24.png",
    "types": [
      "poison"
    ],
    "baseExperience": 157,
    "abilities": [
      {
        "name": "intimidate",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "shed-skin",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "unnerve",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 25,
    "name": "pikachu",
    "height": 4,
    "weight": 60,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    "types": [
      "electric"
    ],
    "baseExperience": 112,
    "abilities": [
      {
        "name": "static",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "lightning-rod",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 26,
    "name": "raichu",
    "height": 8,
    "weight": 300,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/26.png",
    "types": [
      "electric"
    ],
    "baseExperience": 218,
    "abilities": [
      {
        "name": "static",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "lightning-rod",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 27,
    "name": "sandshrew",
    "height": 6,
    "weight": 120,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/27.png",
    "types": [
      "ground"
    ],
    "baseExperience": 60,
    "abilities": [
      {
        "name": "sand-veil",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sand-rush",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 28,
    "name": "sandslash",
    "height": 10,
    "weight": 295,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/28.png",
    "types": [
      "ground"
    ],
    "baseExperience": 158,
    "abilities": [
      {
        "name": "sand-veil",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sand-rush",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 29,
    "name": "nidoran-f",
    "height": 4,
    "weight": 70,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/29.png",
    "types": [
      "poison"
    ],
    "baseExperience": 55,
    "abilities": [
      {
        "name": "poison-point",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "rivalry",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "hustle",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 30,
    "name": "nidorina",
    "height": 8,
    "weight": 200,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/30.png",
    "types": [
      "poison"
    ],
    "baseExperience": 128,
    "abilities": [
      {
        "name": "poison-point",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "rivalry",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "hustle",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 31,
    "name": "nidoqueen",
    "height": 13,
    "weight": 600,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/31.png",
    "types": [
      "poison",
      "ground"
    ],
    "baseExperience": 227,
    "abilities": [
      {
        "name": "poison-point",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "rivalry",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "sheer-force",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 32,
    "name": "nidoran-m",
    "height": 5,
    "weight": 90,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/32.png",
    "types": [
      "poison"
    ],
    "baseExperience": 55,
    "abilities": [
      {
        "name": "poison-point",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "rivalry",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "hustle",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 33,
    "name": "nidorino",
    "height": 9,
    "weight": 195,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/33.png",
    "types": [
      "poison"
    ],
    "baseExperience": 128,
    "abilities": [
      {
        "name": "poison-point",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "rivalry",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "hustle",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 34,
    "name": "nidoking",
    "height": 14,
    "weight": 620,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/34.png",
    "types": [
      "poison",
      "ground"
    ],
    "baseExperience": 227,
    "abilities": [
      {
        "name": "poison-point",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "rivalry",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "sheer-force",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 35,
    "name": "clefairy",
    "height": 6,
    "weight": 75,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/35.png",
    "types": [
      "fairy"
    ],
    "baseExperience": 113,
    "abilities": [
      {
        "name": "cute-charm",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "magic-guard",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "friend-guard",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 36,
    "name": "clefable",
    "height": 13,
    "weight": 400,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/36.png",
    "types": [
      "fairy"
    ],
    "baseExperience": 217,
    "abilities": [
      {
        "name": "cute-charm",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "magic-guard",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "unaware",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 37,
    "name": "vulpix",
    "height": 6,
    "weight": 99,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/37.png",
    "types": [
      "fire"
    ],
    "baseExperience": 60,
    "abilities": [
      {
        "name": "flash-fire",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "drought",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 38,
    "name": "ninetales",
    "height": 11,
    "weight": 199,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/38.png",
    "types": [
      "fire"
    ],
    "baseExperience": 177,
    "abilities": [
      {
        "name": "flash-fire",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "drought",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 39,
    "name": "jigglypuff",
    "height": 5,
    "weight": 55,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png",
    "types": [
      "normal",
      "fairy"
    ],
    "baseExperience": 95,
    "abilities": [
      {
        "name": "cute-charm",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "competitive",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "friend-guard",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 40,
    "name": "wigglytuff",
    "height": 10,
    "weight": 120,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/40.png",
    "types": [
      "normal",
      "fairy"
    ],
    "baseExperience": 196,
    "abilities": [
      {
        "name": "cute-charm",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "competitive",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "frisk",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 41,
    "name": "zubat",
    "height": 8,
    "weight": 75,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/41.png",
    "types": [
      "poison",
      "flying"
    ],
    "baseExperience": 49,
    "abilities": [
      {
        "name": "inner-focus",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "infiltrator",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 42,
    "name": "golbat",
    "height": 16,
    "weight": 550,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/42.png",
    "types": [
      "poison",
      "flying"
    ],
    "baseExperience": 159,
    "abilities": [
      {
        "name": "inner-focus",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "infiltrator",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 43,
    "name": "oddish",
    "height": 5,
    "weight": 54,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/43.png",
    "types": [
      "grass",
      "poison"
    ],
    "baseExperience": 64,
    "abilities": [
      {
        "name": "chlorophyll",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "run-away",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 44,
    "name": "gloom",
    "height": 8,
    "weight": 86,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/44.png",
    "types": [
      "grass",
      "poison"
    ],
    "baseExperience": 138,
    "abilities": [
      {
        "name": "chlorophyll",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "stench",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 45,
    "name": "vileplume",
    "height": 12,
    "weight": 186,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/45.png",
    "types": [
      "grass",
      "poison"
    ],
    "baseExperience": 221,
    "abilities": [
      {
        "name": "chlorophyll",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "effect-spore",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 46,
    "name": "paras",
    "height": 3,
    "weight": 54,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/46.png",
    "types": [
      "bug",
      "grass"
    ],
    "baseExperience": 57,
    "abilities": [
      {
        "name": "effect-spore",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "dry-skin",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "damp",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 47,
    "name": "parasect",
    "height": 10,
    "weight": 295,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/47.png",
    "types": [
      "bug",
      "grass"
    ],
    "baseExperience": 142,
    "abilities": [
      {
        "name": "effect-spore",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "dry-skin",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "damp",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 48,
    "name": "venonat",
    "height": 10,
    "weight": 300,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/48.png",
    "types": [
      "bug",
      "poison"
    ],
    "baseExperience": 61,
    "abilities": [
      {
        "name": "compound-eyes",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "tinted-lens",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "run-away",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 49,
    "name": "venomoth",
    "height": 15,
    "weight": 125,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/49.png",
    "types": [
      "bug",
      "poison"
    ],
    "baseExperience": 158,
    "abilities": [
      {
        "name": "shield-dust",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "tinted-lens",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "wonder-skin",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 50,
    "name": "diglett",
    "height": 2,
    "weight": 8,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/50.png",
    "types": [
      "ground"
    ],
    "baseExperience": 53,
    "abilities": [
      {
        "name": "sand-veil",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "arena-trap",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "sand-force",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 51,
    "name": "dugtrio",
    "height": 7,
    "weight": 333,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/51.png",
    "types": [
      "ground"
    ],
    "baseExperience": 149,
    "abilities": [
      {
        "name": "sand-veil",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "arena-trap",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "sand-force",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 52,
    "name": "meowth",
    "height": 4,
    "weight": 42,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/52.png",
    "types": [
      "normal"
    ],
    "baseExperience": 58,
    "abilities": [
      {
        "name": "pickup",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "technician",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "unnerve",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 53,
    "name": "persian",
    "height": 10,
    "weight": 320,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/53.png",
    "types": [
      "normal"
    ],
    "baseExperience": 154,
    "abilities": [
      {
        "name": "limber",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "technician",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "unnerve",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 54,
    "name": "psyduck",
    "height": 8,
    "weight": 196,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/54.png",
    "types": [
      "water"
    ],
    "baseExperience": 64,
    "abilities": [
      {
        "name": "damp",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "cloud-nine",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "swift-swim",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 55,
    "name": "golduck",
    "height": 17,
    "weight": 766,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/55.png",
    "types": [
      "water"
    ],
    "baseExperience": 175,
    "abilities": [
      {
        "name": "damp",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "cloud-nine",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "swift-swim",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 56,
    "name": "mankey",
    "height": 5,
    "weight": 280,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/56.png",
    "types": [
      "fighting"
    ],
    "baseExperience": 61,
    "abilities": [
      {
        "name": "vital-spirit",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "anger-point",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "defiant",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 57,
    "name": "primeape",
    "height": 10,
    "weight": 320,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/57.png",
    "types": [
      "fighting"
    ],
    "baseExperience": 159,
    "abilities": [
      {
        "name": "vital-spirit",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "anger-point",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "defiant",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 58,
    "name": "growlithe",
    "height": 7,
    "weight": 190,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/58.png",
    "types": [
      "fire"
    ],
    "baseExperience": 70,
    "abilities": [
      {
        "name": "intimidate",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "flash-fire",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "justified",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 59,
    "name": "arcanine",
    "height": 19,
    "weight": 1550,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/59.png",
    "types": [
      "fire"
    ],
    "baseExperience": 194,
    "abilities": [
      {
        "name": "intimidate",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "flash-fire",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "justified",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 60,
    "name": "poliwag",
    "height": 6,
    "weight": 124,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/60.png",
    "types": [
      "water"
    ],
    "baseExperience": 60,
    "abilities": [
      {
        "name": "water-absorb",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "damp",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "swift-swim",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 61,
    "name": "poliwhirl",
    "height": 10,
    "weight": 200,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/61.png",
    "types": [
      "water"
    ],
    "baseExperience": 135,
    "abilities": [
      {
        "name": "water-absorb",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "damp",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "swift-swim",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 62,
    "name": "poliwrath",
    "height": 13,
    "weight": 540,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/62.png",
    "types": [
      "water",
      "fighting"
    ],
    "baseExperience": 230,
    "abilities": [
      {
        "name": "water-absorb",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "damp",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "swift-swim",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 63,
    "name": "abra",
    "height": 9,
    "weight": 195,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/63.png",
    "types": [
      "psychic"
    ],
    "baseExperience": 62,
    "abilities": [
      {
        "name": "synchronize",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "inner-focus",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "magic-guard",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 64,
    "name": "kadabra",
    "height": 13,
    "weight": 565,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/64.png",
    "types": [
      "psychic"
    ],
    "baseExperience": 140,
    "abilities": [
      {
        "name": "synchronize",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "inner-focus",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "magic-guard",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 65,
    "name": "alakazam",
    "height": 15,
    "weight": 480,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/65.png",
    "types": [
      "psychic"
    ],
    "baseExperience": 225,
    "abilities": [
      {
        "name": "synchronize",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "inner-focus",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "magic-guard",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 66,
    "name": "machop",
    "height": 8,
    "weight": 195,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/66.png",
    "types": [
      "fighting"
    ],
    "baseExperience": 61,
    "abilities": [
      {
        "name": "guts",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "no-guard",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "steadfast",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 67,
    "name": "machoke",
    "height": 15,
    "weight": 705,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/67.png",
    "types": [
      "fighting"
    ],
    "baseExperience": 142,
    "abilities": [
      {
        "name": "guts",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "no-guard",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "steadfast",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 68,
    "name": "machamp",
    "height": 16,
    "weight": 1300,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/68.png",
    "types": [
      "fighting"
    ],
    "baseExperience": 227,
    "abilities": [
      {
        "name": "guts",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "no-guard",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "steadfast",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 69,
    "name": "bellsprout",
    "height": 7,
    "weight": 40,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/69.png",
    "types": [
      "grass",
      "poison"
    ],
    "baseExperience": 60,
    "abilities": [
      {
        "name": "chlorophyll",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "gluttony",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 70,
    "name": "weepinbell",
    "height": 10,
    "weight": 64,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/70.png",
    "types": [
      "grass",
      "poison"
    ],
    "baseExperience": 137,
    "abilities": [
      {
        "name": "chlorophyll",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "gluttony",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 71,
    "name": "victreebel",
    "height": 17,
    "weight": 155,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/71.png",
    "types": [
      "grass",
      "poison"
    ],
    "baseExperience": 221,
    "abilities": [
      {
        "name": "chlorophyll",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "gluttony",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 72,
    "name": "tentacool",
    "height": 9,
    "weight": 455,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/72.png",
    "types": [
      "water",
      "poison"
    ],
    "baseExperience": 67,
    "abilities": [
      {
        "name": "clear-body",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "liquid-ooze",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "rain-dish",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 73,
    "name": "tentacruel",
    "height": 16,
    "weight": 550,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/73.png",
    "types": [
      "water",
      "poison"
    ],
    "baseExperience": 180,
    "abilities": [
      {
        "name": "clear-body",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "liquid-ooze",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "rain-dish",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 74,
    "name": "geodude",
    "height": 4,
    "weight": 200,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/74.png",
    "types": [
      "rock",
      "ground"
    ],
    "baseExperience": 60,
    "abilities": [
      {
        "name": "rock-head",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sturdy",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "sand-veil",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 75,
    "name": "graveler",
    "height": 10,
    "weight": 1050,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/75.png",
    "types": [
      "rock",
      "ground"
    ],
    "baseExperience": 137,
    "abilities": [
      {
        "name": "rock-head",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sturdy",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "sand-veil",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 76,
    "name": "golem",
    "height": 14,
    "weight": 3000,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/76.png",
    "types": [
      "rock",
      "ground"
    ],
    "baseExperience": 223,
    "abilities": [
      {
        "name": "rock-head",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sturdy",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "sand-veil",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 77,
    "name": "ponyta",
    "height": 10,
    "weight": 300,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/77.png",
    "types": [
      "fire"
    ],
    "baseExperience": 82,
    "abilities": [
      {
        "name": "run-away",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "flash-fire",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "flame-body",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 78,
    "name": "rapidash",
    "height": 17,
    "weight": 950,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/78.png",
    "types": [
      "fire"
    ],
    "baseExperience": 175,
    "abilities": [
      {
        "name": "run-away",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "flash-fire",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "flame-body",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 79,
    "name": "slowpoke",
    "height": 12,
    "weight": 360,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/79.png",
    "types": [
      "water",
      "psychic"
    ],
    "baseExperience": 63,
    "abilities": [
      {
        "name": "oblivious",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "own-tempo",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "regenerator",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 80,
    "name": "slowbro",
    "height": 16,
    "weight": 785,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/80.png",
    "types": [
      "water",
      "psychic"
    ],
    "baseExperience": 172,
    "abilities": [
      {
        "name": "oblivious",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "own-tempo",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "regenerator",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 81,
    "name": "magnemite",
    "height": 3,
    "weight": 60,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/81.png",
    "types": [
      "electric",
      "steel"
    ],
    "baseExperience": 65,
    "abilities": [
      {
        "name": "magnet-pull",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sturdy",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "analytic",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 82,
    "name": "magneton",
    "height": 10,
    "weight": 600,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/82.png",
    "types": [
      "electric",
      "steel"
    ],
    "baseExperience": 163,
    "abilities": [
      {
        "name": "magnet-pull",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sturdy",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "analytic",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 83,
    "name": "farfetchd",
    "height": 8,
    "weight": 150,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/83.png",
    "types": [
      "normal",
      "flying"
    ],
    "baseExperience": 132,
    "abilities": [
      {
        "name": "keen-eye",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "inner-focus",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "defiant",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 84,
    "name": "doduo",
    "height": 14,
    "weight": 392,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/84.png",
    "types": [
      "normal",
      "flying"
    ],
    "baseExperience": 62,
    "abilities": [
      {
        "name": "run-away",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "early-bird",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "tangled-feet",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 85,
    "name": "dodrio",
    "height": 18,
    "weight": 852,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/85.png",
    "types": [
      "normal",
      "flying"
    ],
    "baseExperience": 165,
    "abilities": [
      {
        "name": "run-away",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "early-bird",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "tangled-feet",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 86,
    "name": "seel",
    "height": 11,
    "weight": 900,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/86.png",
    "types": [
      "water"
    ],
    "baseExperience": 65,
    "abilities": [
      {
        "name": "thick-fat",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "hydration",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "ice-body",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 87,
    "name": "dewgong",
    "height": 17,
    "weight": 1200,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/87.png",
    "types": [
      "water",
      "ice"
    ],
    "baseExperience": 166,
    "abilities": [
      {
        "name": "thick-fat",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "hydration",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "ice-body",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 88,
    "name": "grimer",
    "height": 9,
    "weight": 300,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/88.png",
    "types": [
      "poison"
    ],
    "baseExperience": 65,
    "abilities": [
      {
        "name": "stench",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sticky-hold",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "poison-touch",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 89,
    "name": "muk",
    "height": 12,
    "weight": 300,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/89.png",
    "types": [
      "poison"
    ],
    "baseExperience": 175,
    "abilities": [
      {
        "name": "stench",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sticky-hold",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "poison-touch",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 90,
    "name": "shellder",
    "height": 3,
    "weight": 40,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/90.png",
    "types": [
      "water"
    ],
    "baseExperience": 61,
    "abilities": [
      {
        "name": "shell-armor",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "skill-link",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "overcoat",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 91,
    "name": "cloyster",
    "height": 15,
    "weight": 1325,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/91.png",
    "types": [
      "water",
      "ice"
    ],
    "baseExperience": 184,
    "abilities": [
      {
        "name": "shell-armor",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "skill-link",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "overcoat",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 92,
    "name": "gastly",
    "height": 13,
    "weight": 1,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/92.png",
    "types": [
      "ghost",
      "poison"
    ],
    "baseExperience": 62,
    "abilities": [
      {
        "name": "levitate",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 93,
    "name": "haunter",
    "height": 16,
    "weight": 1,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/93.png",
    "types": [
      "ghost",
      "poison"
    ],
    "baseExperience": 142,
    "abilities": [
      {
        "name": "levitate",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 94,
    "name": "gengar",
    "height": 15,
    "weight": 405,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/94.png",
    "types": [
      "ghost",
      "poison"
    ],
    "baseExperience": 225,
    "abilities": [
      {
        "name": "cursed-body",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 95,
    "name": "onix",
    "height": 88,
    "weight": 2100,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/95.png",
    "types": [
      "rock",
      "ground"
    ],
    "baseExperience": 77,
    "abilities": [
      {
        "name": "rock-head",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sturdy",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "weak-armor",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 96,
    "name": "drowzee",
    "height": 10,
    "weight": 324,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/96.png",
    "types": [
      "psychic"
    ],
    "baseExperience": 66,
    "abilities": [
      {
        "name": "insomnia",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "forewarn",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "inner-focus",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 97,
    "name": "hypno",
    "height": 16,
    "weight": 756,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/97.png",
    "types": [
      "psychic"
    ],
    "baseExperience": 169,
    "abilities": [
      {
        "name": "insomnia",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "forewarn",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "inner-focus",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 98,
    "name": "krabby",
    "height": 4,
    "weight": 65,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/98.png",
    "types": [
      "water"
    ],
    "baseExperience": 65,
    "abilities": [
      {
        "name": "hyper-cutter",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "shell-armor",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "sheer-force",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 99,
    "name": "kingler",
    "height": 13,
    "weight": 600,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/99.png",
    "types": [
      "water"
    ],
    "baseExperience": 166,
    "abilities": [
      {
        "name": "hyper-cutter",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "shell-armor",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "sheer-force",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 100,
    "name": "voltorb",
    "height": 5,
    "weight": 104,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/100.png",
    "types": [
      "electric"
    ],
    "baseExperience": 66,
    "abilities": [
      {
        "name": "soundproof",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "static",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "aftermath",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 101,
    "name": "electrode",
    "height": 12,
    "weight": 666,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/101.png",
    "types": [
      "electric"
    ],
    "baseExperience": 172,
    "abilities": [
      {
        "name": "soundproof",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "static",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "aftermath",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 102,
    "name": "exeggcute",
    "height": 4,
    "weight": 25,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/102.png",
    "types": [
      "grass",
      "psychic"
    ],
    "baseExperience": 65,
    "abilities": [
      {
        "name": "chlorophyll",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "harvest",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 103,
    "name": "exeggutor",
    "height": 20,
    "weight": 1200,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/103.png",
    "types": [
      "grass",
      "psychic"
    ],
    "baseExperience": 186,
    "abilities": [
      {
        "name": "chlorophyll",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "harvest",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 104,
    "name": "cubone",
    "height": 4,
    "weight": 65,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/104.png",
    "types": [
      "ground"
    ],
    "baseExperience": 64,
    "abilities": [
      {
        "name": "rock-head",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "lightning-rod",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "battle-armor",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 105,
    "name": "marowak",
    "height": 10,
    "weight": 450,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/105.png",
    "types": [
      "ground"
    ],
    "baseExperience": 149,
    "abilities": [
      {
        "name": "rock-head",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "lightning-rod",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "battle-armor",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 106,
    "name": "hitmonlee",
    "height": 15,
    "weight": 498,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/106.png",
    "types": [
      "fighting"
    ],
    "baseExperience": 159,
    "abilities": [
      {
        "name": "limber",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "reckless",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "unburden",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 107,
    "name": "hitmonchan",
    "height": 14,
    "weight": 502,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/107.png",
    "types": [
      "fighting"
    ],
    "baseExperience": 159,
    "abilities": [
      {
        "name": "keen-eye",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "iron-fist",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "inner-focus",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 108,
    "name": "lickitung",
    "height": 12,
    "weight": 655,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/108.png",
    "types": [
      "normal"
    ],
    "baseExperience": 77,
    "abilities": [
      {
        "name": "own-tempo",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "oblivious",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "cloud-nine",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 109,
    "name": "koffing",
    "height": 6,
    "weight": 10,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/109.png",
    "types": [
      "poison"
    ],
    "baseExperience": 68,
    "abilities": [
      {
        "name": "levitate",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "neutralizing-gas",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "stench",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 110,
    "name": "weezing",
    "height": 12,
    "weight": 95,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/110.png",
    "types": [
      "poison"
    ],
    "baseExperience": 172,
    "abilities": [
      {
        "name": "levitate",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "neutralizing-gas",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "stench",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 111,
    "name": "rhyhorn",
    "height": 10,
    "weight": 1150,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/111.png",
    "types": [
      "ground",
      "rock"
    ],
    "baseExperience": 69,
    "abilities": [
      {
        "name": "lightning-rod",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "rock-head",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "reckless",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 112,
    "name": "rhydon",
    "height": 19,
    "weight": 1200,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/112.png",
    "types": [
      "ground",
      "rock"
    ],
    "baseExperience": 170,
    "abilities": [
      {
        "name": "lightning-rod",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "rock-head",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "reckless",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 113,
    "name": "chansey",
    "height": 11,
    "weight": 346,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/113.png",
    "types": [
      "normal"
    ],
    "baseExperience": 395,
    "abilities": [
      {
        "name": "natural-cure",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "serene-grace",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "healer",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 114,
    "name": "tangela",
    "height": 10,
    "weight": 350,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/114.png",
    "types": [
      "grass"
    ],
    "baseExperience": 87,
    "abilities": [
      {
        "name": "chlorophyll",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "leaf-guard",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "regenerator",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 115,
    "name": "kangaskhan",
    "height": 22,
    "weight": 800,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/115.png",
    "types": [
      "normal"
    ],
    "baseExperience": 172,
    "abilities": [
      {
        "name": "early-bird",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "scrappy",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "inner-focus",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 116,
    "name": "horsea",
    "height": 4,
    "weight": 80,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/116.png",
    "types": [
      "water"
    ],
    "baseExperience": 59,
    "abilities": [
      {
        "name": "swift-swim",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sniper",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "damp",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 117,
    "name": "seadra",
    "height": 12,
    "weight": 250,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/117.png",
    "types": [
      "water"
    ],
    "baseExperience": 154,
    "abilities": [
      {
        "name": "poison-point",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sniper",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "damp",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 118,
    "name": "goldeen",
    "height": 6,
    "weight": 150,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/118.png",
    "types": [
      "water"
    ],
    "baseExperience": 64,
    "abilities": [
      {
        "name": "swift-swim",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "water-veil",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "lightning-rod",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 119,
    "name": "seaking",
    "height": 13,
    "weight": 390,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/119.png",
    "types": [
      "water"
    ],
    "baseExperience": 158,
    "abilities": [
      {
        "name": "swift-swim",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "water-veil",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "lightning-rod",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 120,
    "name": "staryu",
    "height": 8,
    "weight": 345,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/120.png",
    "types": [
      "water"
    ],
    "baseExperience": 68,
    "abilities": [
      {
        "name": "illuminate",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "natural-cure",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "analytic",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 121,
    "name": "starmie",
    "height": 11,
    "weight": 800,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/121.png",
    "types": [
      "water",
      "psychic"
    ],
    "baseExperience": 182,
    "abilities": [
      {
        "name": "illuminate",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "natural-cure",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "analytic",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 122,
    "name": "mr-mime",
    "height": 13,
    "weight": 545,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/122.png",
    "types": [
      "psychic",
      "fairy"
    ],
    "baseExperience": 161,
    "abilities": [
      {
        "name": "soundproof",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "filter",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "technician",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 123,
    "name": "scyther",
    "height": 15,
    "weight": 560,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/123.png",
    "types": [
      "bug",
      "flying"
    ],
    "baseExperience": 100,
    "abilities": [
      {
        "name": "swarm",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "technician",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "steadfast",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 124,
    "name": "jynx",
    "height": 14,
    "weight": 406,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/124.png",
    "types": [
      "ice",
      "psychic"
    ],
    "baseExperience": 159,
    "abilities": [
      {
        "name": "oblivious",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "forewarn",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "dry-skin",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 125,
    "name": "electabuzz",
    "height": 11,
    "weight": 300,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/125.png",
    "types": [
      "electric"
    ],
    "baseExperience": 172,
    "abilities": [
      {
        "name": "static",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "vital-spirit",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 126,
    "name": "magmar",
    "height": 13,
    "weight": 445,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/126.png",
    "types": [
      "fire"
    ],
    "baseExperience": 173,
    "abilities": [
      {
        "name": "flame-body",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "vital-spirit",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 127,
    "name": "pinsir",
    "height": 15,
    "weight": 550,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/127.png",
    "types": [
      "bug"
    ],
    "baseExperience": 175,
    "abilities": [
      {
        "name": "hyper-cutter",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "mold-breaker",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "moxie",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 128,
    "name": "tauros",
    "height": 14,
    "weight": 884,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/128.png",
    "types": [
      "normal"
    ],
    "baseExperience": 172,
    "abilities": [
      {
        "name": "intimidate",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "anger-point",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "sheer-force",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 129,
    "name": "magikarp",
    "height": 9,
    "weight": 100,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/129.png",
    "types": [
      "water"
    ],
    "baseExperience": 40,
    "abilities": [
      {
        "name": "swift-swim",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "rattled",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 130,
    "name": "gyarados",
    "height": 65,
    "weight": 2350,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/130.png",
    "types": [
      "water",
      "flying"
    ],
    "baseExperience": 189,
    "abilities": [
      {
        "name": "intimidate",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "moxie",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 131,
    "name": "lapras",
    "height": 25,
    "weight": 2200,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/131.png",
    "types": [
      "water",
      "ice"
    ],
    "baseExperience": 187,
    "abilities": [
      {
        "name": "water-absorb",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "shell-armor",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "hydration",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 132,
    "name": "ditto",
    "height": 3,
    "weight": 40,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png",
    "types": [
      "normal"
    ],
    "baseExperience": 101,
    "abilities": [
      {
        "name": "limber",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "imposter",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 133,
    "name": "eevee",
    "height": 3,
    "weight": 65,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/133.png",
    "types": [
      "normal"
    ],
    "baseExperience": 65,
    "abilities": [
      {
        "name": "run-away",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "adaptability",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "anticipation",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 134,
    "name": "vaporeon",
    "height": 10,
    "weight": 290,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/134.png",
    "types": [
      "water"
    ],
    "baseExperience": 184,
    "abilities": [
      {
        "name": "water-absorb",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "hydration",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 135,
    "name": "jolteon",
    "height": 8,
    "weight": 245,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/135.png",
    "types": [
      "electric"
    ],
    "baseExperience": 184,
    "abilities": [
      {
        "name": "volt-absorb",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "quick-feet",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 136,
    "name": "flareon",
    "height": 9,
    "weight": 250,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/136.png",
    "types": [
      "fire"
    ],
    "baseExperience": 184,
    "abilities": [
      {
        "name": "flash-fire",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "guts",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 137,
    "name": "porygon",
    "height": 8,
    "weight": 365,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/137.png",
    "types": [
      "normal"
    ],
    "baseExperience": 79,
    "abilities": [
      {
        "name": "trace",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "download",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "analytic",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 138,
    "name": "omanyte",
    "height": 4,
    "weight": 75,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/138.png",
    "types": [
      "rock",
      "water"
    ],
    "baseExperience": 71,
    "abilities": [
      {
        "name": "swift-swim",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "shell-armor",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "weak-armor",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 139,
    "name": "omastar",
    "height": 10,
    "weight": 350,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/139.png",
    "types": [
      "rock",
      "water"
    ],
    "baseExperience": 173,
    "abilities": [
      {
        "name": "swift-swim",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "shell-armor",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "weak-armor",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 140,
    "name": "kabuto",
    "height": 5,
    "weight": 115,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/140.png",
    "types": [
      "rock",
      "water"
    ],
    "baseExperience": 71,
    "abilities": [
      {
        "name": "swift-swim",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "battle-armor",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "weak-armor",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 141,
    "name": "kabutops",
    "height": 13,
    "weight": 405,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/141.png",
    "types": [
      "rock",
      "water"
    ],
    "baseExperience": 173,
    "abilities": [
      {
        "name": "swift-swim",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "battle-armor",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "weak-armor",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 142,
    "name": "aerodactyl",
    "height": 18,
    "weight": 590,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/142.png",
    "types": [
      "rock",
      "flying"
    ],
    "baseExperience": 180,
    "abilities": [
      {
        "name": "rock-head",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "pressure",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "unnerve",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 143,
    "name": "snorlax",
    "height": 21,
    "weight": 4600,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/143.png",
    "types": [
      "normal"
    ],
    "baseExperience": 189,
    "abilities": [
      {
        "name": "immunity",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "thick-fat",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "gluttony",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 144,
    "name": "articuno",
    "height": 17,
    "weight": 554,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/144.png",
    "types": [
      "ice",
      "flying"
    ],
    "baseExperience": 261,
    "abilities": [
      {
        "name": "pressure",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "snow-cloak",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 145,
    "name": "zapdos",
    "height": 16,
    "weight": 526,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/145.png",
    "types": [
      "electric",
      "flying"
    ],
    "baseExperience": 261,
    "abilities": [
      {
        "name": "pressure",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "static",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 146,
    "name": "moltres",
    "height": 20,
    "weight": 600,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/146.png",
    "types": [
      "fire",
      "flying"
    ],
    "baseExperience": 261,
    "abilities": [
      {
        "name": "pressure",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "flame-body",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 147,
    "name": "dratini",
    "height": 18,
    "weight": 33,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/147.png",
    "types": [
      "dragon"
    ],
    "baseExperience": 60,
    "abilities": [
      {
        "name": "shed-skin",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "marvel-scale",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 148,
    "name": "dragonair",
    "height": 40,
    "weight": 165,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/148.png",
    "types": [
      "dragon"
    ],
    "baseExperience": 147,
    "abilities": [
      {
        "name": "shed-skin",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "marvel-scale",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 149,
    "name": "dragonite",
    "height": 22,
    "weight": 2100,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/149.png",
    "types": [
      "dragon",
      "flying"
    ],
    "baseExperience": 270,
    "abilities": [
      {
        "name": "inner-focus",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "multiscale",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 150,
    "name": "mewtwo",
    "height": 20,
    "weight": 1220,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/150.png",
    "types": [
      "psychic"
    ],
    "baseExperience": 306,
    "abilities": [
      {
        "name": "pressure",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "unnerve",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 151,
    "name": "mew",
    "height": 4,
    "weight": 40,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/151.png",
    "types": [
      "psychic"
    ],
    "baseExperience": 270,
    "abilities": [
      {
        "name": "synchronize",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 152,
    "name": "chikorita",
    "height": 9,
    "weight": 64,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/152.png",
    "types": [
      "grass"
    ],
    "baseExperience": 64,
    "abilities": [
      {
        "name": "overgrow",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "leaf-guard",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 153,
    "name": "bayleef",
    "height": 12,
    "weight": 158,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/153.png",
    "types": [
      "grass"
    ],
    "baseExperience": 142,
    "abilities": [
      {
        "name": "overgrow",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "leaf-guard",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 154,
    "name": "meganium",
    "height": 18,
    "weight": 1005,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/154.png",
    "types": [
      "grass"
    ],
    "baseExperience": 236,
    "abilities": [
      {
        "name": "overgrow",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "leaf-guard",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 155,
    "name": "cyndaquil",
    "height": 5,
    "weight": 79,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/155.png",
    "types": [
      "fire"
    ],
    "baseExperience": 62,
    "abilities": [
      {
        "name": "blaze",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "flash-fire",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 156,
    "name": "quilava",
    "height": 9,
    "weight": 190,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/156.png",
    "types": [
      "fire"
    ],
    "baseExperience": 142,
    "abilities": [
      {
        "name": "blaze",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "flash-fire",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 157,
    "name": "typhlosion",
    "height": 17,
    "weight": 795,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/157.png",
    "types": [
      "fire"
    ],
    "baseExperience": 240,
    "abilities": [
      {
        "name": "blaze",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "flash-fire",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 158,
    "name": "totodile",
    "height": 6,
    "weight": 95,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/158.png",
    "types": [
      "water"
    ],
    "baseExperience": 63,
    "abilities": [
      {
        "name": "torrent",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sheer-force",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 159,
    "name": "croconaw",
    "height": 11,
    "weight": 250,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/159.png",
    "types": [
      "water"
    ],
    "baseExperience": 142,
    "abilities": [
      {
        "name": "torrent",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sheer-force",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 160,
    "name": "feraligatr",
    "height": 23,
    "weight": 888,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/160.png",
    "types": [
      "water"
    ],
    "baseExperience": 239,
    "abilities": [
      {
        "name": "torrent",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sheer-force",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 161,
    "name": "sentret",
    "height": 8,
    "weight": 60,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/161.png",
    "types": [
      "normal"
    ],
    "baseExperience": 43,
    "abilities": [
      {
        "name": "run-away",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "keen-eye",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "frisk",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 162,
    "name": "furret",
    "height": 18,
    "weight": 325,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/162.png",
    "types": [
      "normal"
    ],
    "baseExperience": 145,
    "abilities": [
      {
        "name": "run-away",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "keen-eye",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "frisk",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 163,
    "name": "hoothoot",
    "height": 7,
    "weight": 212,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/163.png",
    "types": [
      "normal",
      "flying"
    ],
    "baseExperience": 52,
    "abilities": [
      {
        "name": "insomnia",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "keen-eye",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "tinted-lens",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 164,
    "name": "noctowl",
    "height": 16,
    "weight": 408,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/164.png",
    "types": [
      "normal",
      "flying"
    ],
    "baseExperience": 158,
    "abilities": [
      {
        "name": "insomnia",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "keen-eye",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "tinted-lens",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 165,
    "name": "ledyba",
    "height": 10,
    "weight": 108,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/165.png",
    "types": [
      "bug",
      "flying"
    ],
    "baseExperience": 53,
    "abilities": [
      {
        "name": "swarm",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "early-bird",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "rattled",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 166,
    "name": "ledian",
    "height": 14,
    "weight": 356,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/166.png",
    "types": [
      "bug",
      "flying"
    ],
    "baseExperience": 137,
    "abilities": [
      {
        "name": "swarm",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "early-bird",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "iron-fist",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 167,
    "name": "spinarak",
    "height": 5,
    "weight": 85,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/167.png",
    "types": [
      "bug",
      "poison"
    ],
    "baseExperience": 50,
    "abilities": [
      {
        "name": "swarm",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "insomnia",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "sniper",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 168,
    "name": "ariados",
    "height": 11,
    "weight": 335,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/168.png",
    "types": [
      "bug",
      "poison"
    ],
    "baseExperience": 140,
    "abilities": [
      {
        "name": "swarm",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "insomnia",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "sniper",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 169,
    "name": "crobat",
    "height": 18,
    "weight": 750,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/169.png",
    "types": [
      "poison",
      "flying"
    ],
    "baseExperience": 241,
    "abilities": [
      {
        "name": "inner-focus",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "infiltrator",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 170,
    "name": "chinchou",
    "height": 5,
    "weight": 120,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/170.png",
    "types": [
      "water",
      "electric"
    ],
    "baseExperience": 66,
    "abilities": [
      {
        "name": "volt-absorb",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "illuminate",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "water-absorb",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 171,
    "name": "lanturn",
    "height": 12,
    "weight": 225,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/171.png",
    "types": [
      "water",
      "electric"
    ],
    "baseExperience": 161,
    "abilities": [
      {
        "name": "volt-absorb",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "illuminate",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "water-absorb",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 172,
    "name": "pichu",
    "height": 3,
    "weight": 20,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/172.png",
    "types": [
      "electric"
    ],
    "baseExperience": 41,
    "abilities": [
      {
        "name": "static",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "lightning-rod",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 173,
    "name": "cleffa",
    "height": 3,
    "weight": 30,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/173.png",
    "types": [
      "fairy"
    ],
    "baseExperience": 44,
    "abilities": [
      {
        "name": "cute-charm",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "magic-guard",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "friend-guard",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 174,
    "name": "igglybuff",
    "height": 3,
    "weight": 10,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/174.png",
    "types": [
      "normal",
      "fairy"
    ],
    "baseExperience": 42,
    "abilities": [
      {
        "name": "cute-charm",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "competitive",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "friend-guard",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 175,
    "name": "togepi",
    "height": 3,
    "weight": 15,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/175.png",
    "types": [
      "fairy"
    ],
    "baseExperience": 49,
    "abilities": [
      {
        "name": "hustle",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "serene-grace",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "super-luck",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 176,
    "name": "togetic",
    "height": 6,
    "weight": 32,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/176.png",
    "types": [
      "fairy",
      "flying"
    ],
    "baseExperience": 142,
    "abilities": [
      {
        "name": "hustle",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "serene-grace",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "super-luck",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 177,
    "name": "natu",
    "height": 2,
    "weight": 20,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/177.png",
    "types": [
      "psychic",
      "flying"
    ],
    "baseExperience": 64,
    "abilities": [
      {
        "name": "synchronize",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "early-bird",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "magic-bounce",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 178,
    "name": "xatu",
    "height": 15,
    "weight": 150,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/178.png",
    "types": [
      "psychic",
      "flying"
    ],
    "baseExperience": 165,
    "abilities": [
      {
        "name": "synchronize",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "early-bird",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "magic-bounce",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 179,
    "name": "mareep",
    "height": 6,
    "weight": 78,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/179.png",
    "types": [
      "electric"
    ],
    "baseExperience": 56,
    "abilities": [
      {
        "name": "static",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "plus",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 180,
    "name": "flaaffy",
    "height": 8,
    "weight": 133,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/180.png",
    "types": [
      "electric"
    ],
    "baseExperience": 128,
    "abilities": [
      {
        "name": "static",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "plus",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 181,
    "name": "ampharos",
    "height": 14,
    "weight": 615,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/181.png",
    "types": [
      "electric"
    ],
    "baseExperience": 230,
    "abilities": [
      {
        "name": "static",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "plus",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 182,
    "name": "bellossom",
    "height": 4,
    "weight": 58,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/182.png",
    "types": [
      "grass"
    ],
    "baseExperience": 221,
    "abilities": [
      {
        "name": "chlorophyll",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "healer",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 183,
    "name": "marill",
    "height": 4,
    "weight": 85,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/183.png",
    "types": [
      "water",
      "fairy"
    ],
    "baseExperience": 88,
    "abilities": [
      {
        "name": "thick-fat",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "huge-power",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "sap-sipper",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 184,
    "name": "azumarill",
    "height": 8,
    "weight": 285,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/184.png",
    "types": [
      "water",
      "fairy"
    ],
    "baseExperience": 189,
    "abilities": [
      {
        "name": "thick-fat",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "huge-power",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "sap-sipper",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 185,
    "name": "sudowoodo",
    "height": 12,
    "weight": 380,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/185.png",
    "types": [
      "rock"
    ],
    "baseExperience": 144,
    "abilities": [
      {
        "name": "sturdy",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "rock-head",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "rattled",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 186,
    "name": "politoed",
    "height": 11,
    "weight": 339,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/186.png",
    "types": [
      "water"
    ],
    "baseExperience": 225,
    "abilities": [
      {
        "name": "water-absorb",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "damp",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "drizzle",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 187,
    "name": "hoppip",
    "height": 4,
    "weight": 5,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/187.png",
    "types": [
      "grass",
      "flying"
    ],
    "baseExperience": 50,
    "abilities": [
      {
        "name": "chlorophyll",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "leaf-guard",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "infiltrator",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 188,
    "name": "skiploom",
    "height": 6,
    "weight": 10,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/188.png",
    "types": [
      "grass",
      "flying"
    ],
    "baseExperience": 119,
    "abilities": [
      {
        "name": "chlorophyll",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "leaf-guard",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "infiltrator",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 189,
    "name": "jumpluff",
    "height": 8,
    "weight": 30,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/189.png",
    "types": [
      "grass",
      "flying"
    ],
    "baseExperience": 207,
    "abilities": [
      {
        "name": "chlorophyll",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "leaf-guard",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "infiltrator",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 190,
    "name": "aipom",
    "height": 8,
    "weight": 115,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/190.png",
    "types": [
      "normal"
    ],
    "baseExperience": 72,
    "abilities": [
      {
        "name": "run-away",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "pickup",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "skill-link",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 191,
    "name": "sunkern",
    "height": 3,
    "weight": 18,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/191.png",
    "types": [
      "grass"
    ],
    "baseExperience": 36,
    "abilities": [
      {
        "name": "chlorophyll",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "solar-power",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "early-bird",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 192,
    "name": "sunflora",
    "height": 8,
    "weight": 85,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/192.png",
    "types": [
      "grass"
    ],
    "baseExperience": 149,
    "abilities": [
      {
        "name": "chlorophyll",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "solar-power",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "early-bird",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 193,
    "name": "yanma",
    "height": 12,
    "weight": 380,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/193.png",
    "types": [
      "bug",
      "flying"
    ],
    "baseExperience": 78,
    "abilities": [
      {
        "name": "speed-boost",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "compound-eyes",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "frisk",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 194,
    "name": "wooper",
    "height": 4,
    "weight": 85,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/194.png",
    "types": [
      "water",
      "ground"
    ],
    "baseExperience": 42,
    "abilities": [
      {
        "name": "damp",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "water-absorb",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "unaware",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 195,
    "name": "quagsire",
    "height": 14,
    "weight": 750,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/195.png",
    "types": [
      "water",
      "ground"
    ],
    "baseExperience": 151,
    "abilities": [
      {
        "name": "damp",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "water-absorb",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "unaware",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 196,
    "name": "espeon",
    "height": 9,
    "weight": 265,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/196.png",
    "types": [
      "psychic"
    ],
    "baseExperience": 184,
    "abilities": [
      {
        "name": "synchronize",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "magic-bounce",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 197,
    "name": "umbreon",
    "height": 10,
    "weight": 270,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/197.png",
    "types": [
      "dark"
    ],
    "baseExperience": 184,
    "abilities": [
      {
        "name": "synchronize",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "inner-focus",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 198,
    "name": "murkrow",
    "height": 5,
    "weight": 21,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/198.png",
    "types": [
      "dark",
      "flying"
    ],
    "baseExperience": 81,
    "abilities": [
      {
        "name": "insomnia",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "super-luck",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "prankster",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 199,
    "name": "slowking",
    "height": 20,
    "weight": 795,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/199.png",
    "types": [
      "water",
      "psychic"
    ],
    "baseExperience": 172,
    "abilities": [
      {
        "name": "oblivious",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "own-tempo",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "regenerator",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 200,
    "name": "misdreavus",
    "height": 7,
    "weight": 10,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/200.png",
    "types": [
      "ghost"
    ],
    "baseExperience": 87,
    "abilities": [
      {
        "name": "levitate",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 201,
    "name": "unown",
    "height": 5,
    "weight": 50,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/201.png",
    "types": [
      "psychic"
    ],
    "baseExperience": 118,
    "abilities": [
      {
        "name": "levitate",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 202,
    "name": "wobbuffet",
    "height": 13,
    "weight": 285,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/202.png",
    "types": [
      "psychic"
    ],
    "baseExperience": 142,
    "abilities": [
      {
        "name": "shadow-tag",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "telepathy",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 203,
    "name": "girafarig",
    "height": 15,
    "weight": 415,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/203.png",
    "types": [
      "normal",
      "psychic"
    ],
    "baseExperience": 159,
    "abilities": [
      {
        "name": "inner-focus",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "early-bird",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "sap-sipper",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 204,
    "name": "pineco",
    "height": 6,
    "weight": 72,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/204.png",
    "types": [
      "bug"
    ],
    "baseExperience": 58,
    "abilities": [
      {
        "name": "sturdy",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "overcoat",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 205,
    "name": "forretress",
    "height": 12,
    "weight": 1258,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/205.png",
    "types": [
      "bug",
      "steel"
    ],
    "baseExperience": 163,
    "abilities": [
      {
        "name": "sturdy",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "overcoat",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 206,
    "name": "dunsparce",
    "height": 15,
    "weight": 140,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/206.png",
    "types": [
      "normal"
    ],
    "baseExperience": 145,
    "abilities": [
      {
        "name": "serene-grace",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "run-away",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "rattled",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 207,
    "name": "gligar",
    "height": 11,
    "weight": 648,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/207.png",
    "types": [
      "ground",
      "flying"
    ],
    "baseExperience": 86,
    "abilities": [
      {
        "name": "hyper-cutter",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sand-veil",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "immunity",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 208,
    "name": "steelix",
    "height": 92,
    "weight": 4000,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/208.png",
    "types": [
      "steel",
      "ground"
    ],
    "baseExperience": 179,
    "abilities": [
      {
        "name": "rock-head",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sturdy",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "sheer-force",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 209,
    "name": "snubbull",
    "height": 6,
    "weight": 78,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/209.png",
    "types": [
      "fairy"
    ],
    "baseExperience": 60,
    "abilities": [
      {
        "name": "intimidate",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "run-away",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "rattled",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 210,
    "name": "granbull",
    "height": 14,
    "weight": 487,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/210.png",
    "types": [
      "fairy"
    ],
    "baseExperience": 158,
    "abilities": [
      {
        "name": "intimidate",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "quick-feet",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "rattled",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 211,
    "name": "qwilfish",
    "height": 5,
    "weight": 39,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/211.png",
    "types": [
      "water",
      "poison"
    ],
    "baseExperience": 88,
    "abilities": [
      {
        "name": "poison-point",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "swift-swim",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "intimidate",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 212,
    "name": "scizor",
    "height": 18,
    "weight": 1180,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/212.png",
    "types": [
      "bug",
      "steel"
    ],
    "baseExperience": 175,
    "abilities": [
      {
        "name": "swarm",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "technician",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "light-metal",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 213,
    "name": "shuckle",
    "height": 6,
    "weight": 205,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/213.png",
    "types": [
      "bug",
      "rock"
    ],
    "baseExperience": 177,
    "abilities": [
      {
        "name": "sturdy",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "gluttony",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "contrary",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 214,
    "name": "heracross",
    "height": 15,
    "weight": 540,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/214.png",
    "types": [
      "bug",
      "fighting"
    ],
    "baseExperience": 175,
    "abilities": [
      {
        "name": "swarm",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "guts",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "moxie",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 215,
    "name": "sneasel",
    "height": 9,
    "weight": 280,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/215.png",
    "types": [
      "dark",
      "ice"
    ],
    "baseExperience": 86,
    "abilities": [
      {
        "name": "inner-focus",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "keen-eye",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "pickpocket",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 216,
    "name": "teddiursa",
    "height": 6,
    "weight": 88,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/216.png",
    "types": [
      "normal"
    ],
    "baseExperience": 66,
    "abilities": [
      {
        "name": "pickup",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "quick-feet",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "honey-gather",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 217,
    "name": "ursaring",
    "height": 18,
    "weight": 1258,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/217.png",
    "types": [
      "normal"
    ],
    "baseExperience": 175,
    "abilities": [
      {
        "name": "guts",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "quick-feet",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "unnerve",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 218,
    "name": "slugma",
    "height": 7,
    "weight": 350,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/218.png",
    "types": [
      "fire"
    ],
    "baseExperience": 50,
    "abilities": [
      {
        "name": "magma-armor",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "flame-body",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "weak-armor",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 219,
    "name": "magcargo",
    "height": 8,
    "weight": 550,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/219.png",
    "types": [
      "fire",
      "rock"
    ],
    "baseExperience": 151,
    "abilities": [
      {
        "name": "magma-armor",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "flame-body",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "weak-armor",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 220,
    "name": "swinub",
    "height": 4,
    "weight": 65,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/220.png",
    "types": [
      "ice",
      "ground"
    ],
    "baseExperience": 50,
    "abilities": [
      {
        "name": "oblivious",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "snow-cloak",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "thick-fat",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 221,
    "name": "piloswine",
    "height": 11,
    "weight": 558,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/221.png",
    "types": [
      "ice",
      "ground"
    ],
    "baseExperience": 158,
    "abilities": [
      {
        "name": "oblivious",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "snow-cloak",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "thick-fat",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 222,
    "name": "corsola",
    "height": 6,
    "weight": 50,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/222.png",
    "types": [
      "water",
      "rock"
    ],
    "baseExperience": 144,
    "abilities": [
      {
        "name": "hustle",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "natural-cure",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "regenerator",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 223,
    "name": "remoraid",
    "height": 6,
    "weight": 120,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/223.png",
    "types": [
      "water"
    ],
    "baseExperience": 60,
    "abilities": [
      {
        "name": "hustle",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sniper",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "moody",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 224,
    "name": "octillery",
    "height": 9,
    "weight": 285,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/224.png",
    "types": [
      "water"
    ],
    "baseExperience": 168,
    "abilities": [
      {
        "name": "suction-cups",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sniper",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "moody",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 225,
    "name": "delibird",
    "height": 9,
    "weight": 160,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/225.png",
    "types": [
      "ice",
      "flying"
    ],
    "baseExperience": 116,
    "abilities": [
      {
        "name": "vital-spirit",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "hustle",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "insomnia",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 226,
    "name": "mantine",
    "height": 21,
    "weight": 2200,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/226.png",
    "types": [
      "water",
      "flying"
    ],
    "baseExperience": 170,
    "abilities": [
      {
        "name": "swift-swim",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "water-absorb",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "water-veil",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 227,
    "name": "skarmory",
    "height": 17,
    "weight": 505,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/227.png",
    "types": [
      "steel",
      "flying"
    ],
    "baseExperience": 163,
    "abilities": [
      {
        "name": "keen-eye",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sturdy",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "weak-armor",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 228,
    "name": "houndour",
    "height": 6,
    "weight": 108,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/228.png",
    "types": [
      "dark",
      "fire"
    ],
    "baseExperience": 66,
    "abilities": [
      {
        "name": "early-bird",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "flash-fire",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "unnerve",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 229,
    "name": "houndoom",
    "height": 14,
    "weight": 350,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/229.png",
    "types": [
      "dark",
      "fire"
    ],
    "baseExperience": 175,
    "abilities": [
      {
        "name": "early-bird",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "flash-fire",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "unnerve",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 230,
    "name": "kingdra",
    "height": 18,
    "weight": 1520,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/230.png",
    "types": [
      "water",
      "dragon"
    ],
    "baseExperience": 243,
    "abilities": [
      {
        "name": "swift-swim",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sniper",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "damp",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 231,
    "name": "phanpy",
    "height": 5,
    "weight": 335,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/231.png",
    "types": [
      "ground"
    ],
    "baseExperience": 66,
    "abilities": [
      {
        "name": "pickup",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sand-veil",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 232,
    "name": "donphan",
    "height": 11,
    "weight": 1200,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/232.png",
    "types": [
      "ground"
    ],
    "baseExperience": 175,
    "abilities": [
      {
        "name": "sturdy",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sand-veil",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 233,
    "name": "porygon2",
    "height": 6,
    "weight": 325,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/233.png",
    "types": [
      "normal"
    ],
    "baseExperience": 180,
    "abilities": [
      {
        "name": "trace",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "download",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "analytic",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 234,
    "name": "stantler",
    "height": 14,
    "weight": 712,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/234.png",
    "types": [
      "normal"
    ],
    "baseExperience": 163,
    "abilities": [
      {
        "name": "intimidate",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "frisk",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "sap-sipper",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 235,
    "name": "smeargle",
    "height": 12,
    "weight": 580,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/235.png",
    "types": [
      "normal"
    ],
    "baseExperience": 88,
    "abilities": [
      {
        "name": "own-tempo",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "technician",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "moody",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 236,
    "name": "tyrogue",
    "height": 7,
    "weight": 210,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/236.png",
    "types": [
      "fighting"
    ],
    "baseExperience": 42,
    "abilities": [
      {
        "name": "guts",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "steadfast",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "vital-spirit",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 237,
    "name": "hitmontop",
    "height": 14,
    "weight": 480,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/237.png",
    "types": [
      "fighting"
    ],
    "baseExperience": 159,
    "abilities": [
      {
        "name": "intimidate",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "technician",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "steadfast",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 238,
    "name": "smoochum",
    "height": 4,
    "weight": 60,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/238.png",
    "types": [
      "ice",
      "psychic"
    ],
    "baseExperience": 61,
    "abilities": [
      {
        "name": "oblivious",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "forewarn",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "hydration",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 239,
    "name": "elekid",
    "height": 6,
    "weight": 235,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/239.png",
    "types": [
      "electric"
    ],
    "baseExperience": 72,
    "abilities": [
      {
        "name": "static",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "vital-spirit",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 240,
    "name": "magby",
    "height": 7,
    "weight": 214,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/240.png",
    "types": [
      "fire"
    ],
    "baseExperience": 73,
    "abilities": [
      {
        "name": "flame-body",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "vital-spirit",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 241,
    "name": "miltank",
    "height": 12,
    "weight": 755,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/241.png",
    "types": [
      "normal"
    ],
    "baseExperience": 172,
    "abilities": [
      {
        "name": "thick-fat",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "scrappy",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "sap-sipper",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 242,
    "name": "blissey",
    "height": 15,
    "weight": 468,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/242.png",
    "types": [
      "normal"
    ],
    "baseExperience": 608,
    "abilities": [
      {
        "name": "natural-cure",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "serene-grace",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "healer",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 243,
    "name": "raikou",
    "height": 19,
    "weight": 1780,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/243.png",
    "types": [
      "electric"
    ],
    "baseExperience": 261,
    "abilities": [
      {
        "name": "pressure",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "inner-focus",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 244,
    "name": "entei",
    "height": 21,
    "weight": 1980,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/244.png",
    "types": [
      "fire"
    ],
    "baseExperience": 261,
    "abilities": [
      {
        "name": "pressure",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "inner-focus",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 245,
    "name": "suicune",
    "height": 20,
    "weight": 1870,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/245.png",
    "types": [
      "water"
    ],
    "baseExperience": 261,
    "abilities": [
      {
        "name": "pressure",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "inner-focus",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 246,
    "name": "larvitar",
    "height": 6,
    "weight": 720,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/246.png",
    "types": [
      "rock",
      "ground"
    ],
    "baseExperience": 60,
    "abilities": [
      {
        "name": "guts",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sand-veil",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 247,
    "name": "pupitar",
    "height": 12,
    "weight": 1520,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/247.png",
    "types": [
      "rock",
      "ground"
    ],
    "baseExperience": 144,
    "abilities": [
      {
        "name": "shed-skin",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 248,
    "name": "tyranitar",
    "height": 20,
    "weight": 2020,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/248.png",
    "types": [
      "rock",
      "dark"
    ],
    "baseExperience": 270,
    "abilities": [
      {
        "name": "sand-stream",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "unnerve",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 249,
    "name": "lugia",
    "height": 52,
    "weight": 2160,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/249.png",
    "types": [
      "psychic",
      "flying"
    ],
    "baseExperience": 306,
    "abilities": [
      {
        "name": "pressure",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "multiscale",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 250,
    "name": "ho-oh",
    "height": 38,
    "weight": 1990,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/250.png",
    "types": [
      "fire",
      "flying"
    ],
    "baseExperience": 306,
    "abilities": [
      {
        "name": "pressure",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "regenerator",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 251,
    "name": "celebi",
    "height": 6,
    "weight": 50,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/251.png",
    "types": [
      "psychic",
      "grass"
    ],
    "baseExperience": 270,
    "abilities": [
      {
        "name": "natural-cure",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 252,
    "name": "treecko",
    "height": 5,
    "weight": 50,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/252.png",
    "types": [
      "grass"
    ],
    "baseExperience": 62,
    "abilities": [
      {
        "name": "overgrow",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "unburden",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 253,
    "name": "grovyle",
    "height": 9,
    "weight": 216,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/253.png",
    "types": [
      "grass"
    ],
    "baseExperience": 142,
    "abilities": [
      {
        "name": "overgrow",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "unburden",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 254,
    "name": "sceptile",
    "height": 17,
    "weight": 522,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/254.png",
    "types": [
      "grass"
    ],
    "baseExperience": 239,
    "abilities": [
      {
        "name": "overgrow",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "unburden",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 255,
    "name": "torchic",
    "height": 4,
    "weight": 25,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/255.png",
    "types": [
      "fire"
    ],
    "baseExperience": 62,
    "abilities": [
      {
        "name": "blaze",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "speed-boost",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 256,
    "name": "combusken",
    "height": 9,
    "weight": 195,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/256.png",
    "types": [
      "fire",
      "fighting"
    ],
    "baseExperience": 142,
    "abilities": [
      {
        "name": "blaze",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "speed-boost",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 257,
    "name": "blaziken",
    "height": 19,
    "weight": 520,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/257.png",
    "types": [
      "fire",
      "fighting"
    ],
    "baseExperience": 239,
    "abilities": [
      {
        "name": "blaze",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "speed-boost",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 258,
    "name": "mudkip",
    "height": 4,
    "weight": 76,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/258.png",
    "types": [
      "water"
    ],
    "baseExperience": 62,
    "abilities": [
      {
        "name": "torrent",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "damp",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 259,
    "name": "marshtomp",
    "height": 7,
    "weight": 280,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/259.png",
    "types": [
      "water",
      "ground"
    ],
    "baseExperience": 142,
    "abilities": [
      {
        "name": "torrent",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "damp",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 260,
    "name": "swampert",
    "height": 15,
    "weight": 819,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/260.png",
    "types": [
      "water",
      "ground"
    ],
    "baseExperience": 241,
    "abilities": [
      {
        "name": "torrent",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "damp",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 261,
    "name": "poochyena",
    "height": 5,
    "weight": 136,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/261.png",
    "types": [
      "dark"
    ],
    "baseExperience": 56,
    "abilities": [
      {
        "name": "run-away",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "quick-feet",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "rattled",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 262,
    "name": "mightyena",
    "height": 10,
    "weight": 370,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/262.png",
    "types": [
      "dark"
    ],
    "baseExperience": 147,
    "abilities": [
      {
        "name": "intimidate",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "quick-feet",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "moxie",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 263,
    "name": "zigzagoon",
    "height": 4,
    "weight": 175,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/263.png",
    "types": [
      "normal"
    ],
    "baseExperience": 56,
    "abilities": [
      {
        "name": "pickup",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "gluttony",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "quick-feet",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 264,
    "name": "linoone",
    "height": 5,
    "weight": 325,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/264.png",
    "types": [
      "normal"
    ],
    "baseExperience": 147,
    "abilities": [
      {
        "name": "pickup",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "gluttony",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "quick-feet",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 265,
    "name": "wurmple",
    "height": 3,
    "weight": 36,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/265.png",
    "types": [
      "bug"
    ],
    "baseExperience": 56,
    "abilities": [
      {
        "name": "shield-dust",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "run-away",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 266,
    "name": "silcoon",
    "height": 6,
    "weight": 100,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/266.png",
    "types": [
      "bug"
    ],
    "baseExperience": 72,
    "abilities": [
      {
        "name": "shed-skin",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 267,
    "name": "beautifly",
    "height": 10,
    "weight": 284,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/267.png",
    "types": [
      "bug",
      "flying"
    ],
    "baseExperience": 178,
    "abilities": [
      {
        "name": "swarm",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "rivalry",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 268,
    "name": "cascoon",
    "height": 7,
    "weight": 115,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/268.png",
    "types": [
      "bug"
    ],
    "baseExperience": 72,
    "abilities": [
      {
        "name": "shed-skin",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 269,
    "name": "dustox",
    "height": 12,
    "weight": 316,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/269.png",
    "types": [
      "bug",
      "poison"
    ],
    "baseExperience": 173,
    "abilities": [
      {
        "name": "shield-dust",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "compound-eyes",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 270,
    "name": "lotad",
    "height": 5,
    "weight": 26,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/270.png",
    "types": [
      "water",
      "grass"
    ],
    "baseExperience": 44,
    "abilities": [
      {
        "name": "swift-swim",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "rain-dish",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "own-tempo",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 271,
    "name": "lombre",
    "height": 12,
    "weight": 325,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/271.png",
    "types": [
      "water",
      "grass"
    ],
    "baseExperience": 119,
    "abilities": [
      {
        "name": "swift-swim",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "rain-dish",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "own-tempo",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 272,
    "name": "ludicolo",
    "height": 15,
    "weight": 550,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/272.png",
    "types": [
      "water",
      "grass"
    ],
    "baseExperience": 216,
    "abilities": [
      {
        "name": "swift-swim",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "rain-dish",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "own-tempo",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 273,
    "name": "seedot",
    "height": 5,
    "weight": 40,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/273.png",
    "types": [
      "grass"
    ],
    "baseExperience": 44,
    "abilities": [
      {
        "name": "chlorophyll",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "early-bird",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "pickpocket",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 274,
    "name": "nuzleaf",
    "height": 10,
    "weight": 280,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/274.png",
    "types": [
      "grass",
      "dark"
    ],
    "baseExperience": 119,
    "abilities": [
      {
        "name": "chlorophyll",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "early-bird",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "pickpocket",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 275,
    "name": "shiftry",
    "height": 13,
    "weight": 596,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/275.png",
    "types": [
      "grass",
      "dark"
    ],
    "baseExperience": 216,
    "abilities": [
      {
        "name": "chlorophyll",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "wind-rider",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "pickpocket",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 276,
    "name": "taillow",
    "height": 3,
    "weight": 23,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/276.png",
    "types": [
      "normal",
      "flying"
    ],
    "baseExperience": 54,
    "abilities": [
      {
        "name": "guts",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "scrappy",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 277,
    "name": "swellow",
    "height": 7,
    "weight": 198,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/277.png",
    "types": [
      "normal",
      "flying"
    ],
    "baseExperience": 159,
    "abilities": [
      {
        "name": "guts",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "scrappy",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 278,
    "name": "wingull",
    "height": 6,
    "weight": 95,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/278.png",
    "types": [
      "water",
      "flying"
    ],
    "baseExperience": 54,
    "abilities": [
      {
        "name": "keen-eye",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "hydration",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "rain-dish",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 279,
    "name": "pelipper",
    "height": 12,
    "weight": 280,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/279.png",
    "types": [
      "water",
      "flying"
    ],
    "baseExperience": 154,
    "abilities": [
      {
        "name": "keen-eye",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "drizzle",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "rain-dish",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 280,
    "name": "ralts",
    "height": 4,
    "weight": 66,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/280.png",
    "types": [
      "psychic",
      "fairy"
    ],
    "baseExperience": 40,
    "abilities": [
      {
        "name": "synchronize",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "trace",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "telepathy",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 281,
    "name": "kirlia",
    "height": 8,
    "weight": 202,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/281.png",
    "types": [
      "psychic",
      "fairy"
    ],
    "baseExperience": 97,
    "abilities": [
      {
        "name": "synchronize",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "trace",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "telepathy",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 282,
    "name": "gardevoir",
    "height": 16,
    "weight": 484,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/282.png",
    "types": [
      "psychic",
      "fairy"
    ],
    "baseExperience": 233,
    "abilities": [
      {
        "name": "synchronize",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "trace",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "telepathy",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 283,
    "name": "surskit",
    "height": 5,
    "weight": 17,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/283.png",
    "types": [
      "bug",
      "water"
    ],
    "baseExperience": 54,
    "abilities": [
      {
        "name": "swift-swim",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "rain-dish",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 284,
    "name": "masquerain",
    "height": 8,
    "weight": 36,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/284.png",
    "types": [
      "bug",
      "flying"
    ],
    "baseExperience": 159,
    "abilities": [
      {
        "name": "intimidate",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "unnerve",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 285,
    "name": "shroomish",
    "height": 4,
    "weight": 45,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/285.png",
    "types": [
      "grass"
    ],
    "baseExperience": 59,
    "abilities": [
      {
        "name": "effect-spore",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "poison-heal",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "quick-feet",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 286,
    "name": "breloom",
    "height": 12,
    "weight": 392,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/286.png",
    "types": [
      "grass",
      "fighting"
    ],
    "baseExperience": 161,
    "abilities": [
      {
        "name": "effect-spore",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "poison-heal",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "technician",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 287,
    "name": "slakoth",
    "height": 8,
    "weight": 240,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/287.png",
    "types": [
      "normal"
    ],
    "baseExperience": 56,
    "abilities": [
      {
        "name": "truant",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 288,
    "name": "vigoroth",
    "height": 14,
    "weight": 465,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/288.png",
    "types": [
      "normal"
    ],
    "baseExperience": 154,
    "abilities": [
      {
        "name": "vital-spirit",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 289,
    "name": "slaking",
    "height": 20,
    "weight": 1305,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/289.png",
    "types": [
      "normal"
    ],
    "baseExperience": 252,
    "abilities": [
      {
        "name": "truant",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 290,
    "name": "nincada",
    "height": 5,
    "weight": 55,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/290.png",
    "types": [
      "bug",
      "ground"
    ],
    "baseExperience": 53,
    "abilities": [
      {
        "name": "compound-eyes",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "run-away",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 291,
    "name": "ninjask",
    "height": 8,
    "weight": 120,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/291.png",
    "types": [
      "bug",
      "flying"
    ],
    "baseExperience": 160,
    "abilities": [
      {
        "name": "speed-boost",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "infiltrator",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 292,
    "name": "shedinja",
    "height": 8,
    "weight": 12,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/292.png",
    "types": [
      "bug",
      "ghost"
    ],
    "baseExperience": 83,
    "abilities": [
      {
        "name": "wonder-guard",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 293,
    "name": "whismur",
    "height": 6,
    "weight": 163,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/293.png",
    "types": [
      "normal"
    ],
    "baseExperience": 48,
    "abilities": [
      {
        "name": "soundproof",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "rattled",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 294,
    "name": "loudred",
    "height": 10,
    "weight": 405,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/294.png",
    "types": [
      "normal"
    ],
    "baseExperience": 126,
    "abilities": [
      {
        "name": "soundproof",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "scrappy",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 295,
    "name": "exploud",
    "height": 15,
    "weight": 840,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/295.png",
    "types": [
      "normal"
    ],
    "baseExperience": 221,
    "abilities": [
      {
        "name": "soundproof",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "scrappy",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 296,
    "name": "makuhita",
    "height": 10,
    "weight": 864,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/296.png",
    "types": [
      "fighting"
    ],
    "baseExperience": 47,
    "abilities": [
      {
        "name": "thick-fat",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "guts",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "sheer-force",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 297,
    "name": "hariyama",
    "height": 23,
    "weight": 2538,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/297.png",
    "types": [
      "fighting"
    ],
    "baseExperience": 166,
    "abilities": [
      {
        "name": "thick-fat",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "guts",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "sheer-force",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 298,
    "name": "azurill",
    "height": 2,
    "weight": 20,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/298.png",
    "types": [
      "normal",
      "fairy"
    ],
    "baseExperience": 38,
    "abilities": [
      {
        "name": "thick-fat",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "huge-power",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "sap-sipper",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 299,
    "name": "nosepass",
    "height": 10,
    "weight": 970,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/299.png",
    "types": [
      "rock"
    ],
    "baseExperience": 75,
    "abilities": [
      {
        "name": "sturdy",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "magnet-pull",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "sand-force",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 300,
    "name": "skitty",
    "height": 6,
    "weight": 110,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/300.png",
    "types": [
      "normal"
    ],
    "baseExperience": 52,
    "abilities": [
      {
        "name": "cute-charm",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "normalize",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "wonder-skin",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 301,
    "name": "delcatty",
    "height": 11,
    "weight": 326,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/301.png",
    "types": [
      "normal"
    ],
    "baseExperience": 140,
    "abilities": [
      {
        "name": "cute-charm",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "normalize",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "wonder-skin",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 302,
    "name": "sableye",
    "height": 5,
    "weight": 110,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/302.png",
    "types": [
      "dark",
      "ghost"
    ],
    "baseExperience": 133,
    "abilities": [
      {
        "name": "keen-eye",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "stall",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "prankster",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 303,
    "name": "mawile",
    "height": 6,
    "weight": 115,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/303.png",
    "types": [
      "steel",
      "fairy"
    ],
    "baseExperience": 133,
    "abilities": [
      {
        "name": "hyper-cutter",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "intimidate",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "sheer-force",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 304,
    "name": "aron",
    "height": 4,
    "weight": 600,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/304.png",
    "types": [
      "steel",
      "rock"
    ],
    "baseExperience": 66,
    "abilities": [
      {
        "name": "sturdy",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "rock-head",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "heavy-metal",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 305,
    "name": "lairon",
    "height": 9,
    "weight": 1200,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/305.png",
    "types": [
      "steel",
      "rock"
    ],
    "baseExperience": 151,
    "abilities": [
      {
        "name": "sturdy",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "rock-head",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "heavy-metal",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 306,
    "name": "aggron",
    "height": 21,
    "weight": 3600,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/306.png",
    "types": [
      "steel",
      "rock"
    ],
    "baseExperience": 239,
    "abilities": [
      {
        "name": "sturdy",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "rock-head",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "heavy-metal",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 307,
    "name": "meditite",
    "height": 6,
    "weight": 112,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/307.png",
    "types": [
      "fighting",
      "psychic"
    ],
    "baseExperience": 56,
    "abilities": [
      {
        "name": "pure-power",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "telepathy",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 308,
    "name": "medicham",
    "height": 13,
    "weight": 315,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/308.png",
    "types": [
      "fighting",
      "psychic"
    ],
    "baseExperience": 144,
    "abilities": [
      {
        "name": "pure-power",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "telepathy",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 309,
    "name": "electrike",
    "height": 6,
    "weight": 152,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/309.png",
    "types": [
      "electric"
    ],
    "baseExperience": 59,
    "abilities": [
      {
        "name": "static",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "lightning-rod",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "minus",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 310,
    "name": "manectric",
    "height": 15,
    "weight": 402,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/310.png",
    "types": [
      "electric"
    ],
    "baseExperience": 166,
    "abilities": [
      {
        "name": "static",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "lightning-rod",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "minus",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 311,
    "name": "plusle",
    "height": 4,
    "weight": 42,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/311.png",
    "types": [
      "electric"
    ],
    "baseExperience": 142,
    "abilities": [
      {
        "name": "plus",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "lightning-rod",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 312,
    "name": "minun",
    "height": 4,
    "weight": 42,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/312.png",
    "types": [
      "electric"
    ],
    "baseExperience": 142,
    "abilities": [
      {
        "name": "minus",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "volt-absorb",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 313,
    "name": "volbeat",
    "height": 7,
    "weight": 177,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/313.png",
    "types": [
      "bug"
    ],
    "baseExperience": 151,
    "abilities": [
      {
        "name": "illuminate",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "swarm",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "prankster",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 314,
    "name": "illumise",
    "height": 6,
    "weight": 177,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/314.png",
    "types": [
      "bug"
    ],
    "baseExperience": 151,
    "abilities": [
      {
        "name": "oblivious",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "tinted-lens",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "prankster",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 315,
    "name": "roselia",
    "height": 3,
    "weight": 20,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/315.png",
    "types": [
      "grass",
      "poison"
    ],
    "baseExperience": 140,
    "abilities": [
      {
        "name": "natural-cure",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "poison-point",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "leaf-guard",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 316,
    "name": "gulpin",
    "height": 4,
    "weight": 103,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/316.png",
    "types": [
      "poison"
    ],
    "baseExperience": 60,
    "abilities": [
      {
        "name": "liquid-ooze",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sticky-hold",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "gluttony",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 317,
    "name": "swalot",
    "height": 17,
    "weight": 800,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/317.png",
    "types": [
      "poison"
    ],
    "baseExperience": 163,
    "abilities": [
      {
        "name": "liquid-ooze",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sticky-hold",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "gluttony",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 318,
    "name": "carvanha",
    "height": 8,
    "weight": 208,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/318.png",
    "types": [
      "water",
      "dark"
    ],
    "baseExperience": 61,
    "abilities": [
      {
        "name": "rough-skin",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "speed-boost",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 319,
    "name": "sharpedo",
    "height": 18,
    "weight": 888,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/319.png",
    "types": [
      "water",
      "dark"
    ],
    "baseExperience": 161,
    "abilities": [
      {
        "name": "rough-skin",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "speed-boost",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 320,
    "name": "wailmer",
    "height": 20,
    "weight": 1300,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/320.png",
    "types": [
      "water"
    ],
    "baseExperience": 80,
    "abilities": [
      {
        "name": "water-veil",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "oblivious",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "pressure",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 321,
    "name": "wailord",
    "height": 145,
    "weight": 3980,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/321.png",
    "types": [
      "water"
    ],
    "baseExperience": 175,
    "abilities": [
      {
        "name": "water-veil",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "oblivious",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "pressure",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 322,
    "name": "numel",
    "height": 7,
    "weight": 240,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/322.png",
    "types": [
      "fire",
      "ground"
    ],
    "baseExperience": 61,
    "abilities": [
      {
        "name": "oblivious",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "simple",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "own-tempo",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 323,
    "name": "camerupt",
    "height": 19,
    "weight": 2200,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/323.png",
    "types": [
      "fire",
      "ground"
    ],
    "baseExperience": 161,
    "abilities": [
      {
        "name": "magma-armor",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "solid-rock",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "anger-point",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 324,
    "name": "torkoal",
    "height": 5,
    "weight": 804,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/324.png",
    "types": [
      "fire"
    ],
    "baseExperience": 165,
    "abilities": [
      {
        "name": "white-smoke",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "drought",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "shell-armor",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 325,
    "name": "spoink",
    "height": 7,
    "weight": 306,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/325.png",
    "types": [
      "psychic"
    ],
    "baseExperience": 66,
    "abilities": [
      {
        "name": "thick-fat",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "own-tempo",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "gluttony",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 326,
    "name": "grumpig",
    "height": 9,
    "weight": 715,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/326.png",
    "types": [
      "psychic"
    ],
    "baseExperience": 165,
    "abilities": [
      {
        "name": "thick-fat",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "own-tempo",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "gluttony",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 327,
    "name": "spinda",
    "height": 11,
    "weight": 50,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/327.png",
    "types": [
      "normal"
    ],
    "baseExperience": 126,
    "abilities": [
      {
        "name": "own-tempo",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "tangled-feet",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "contrary",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 328,
    "name": "trapinch",
    "height": 7,
    "weight": 150,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/328.png",
    "types": [
      "ground"
    ],
    "baseExperience": 58,
    "abilities": [
      {
        "name": "hyper-cutter",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "arena-trap",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "sheer-force",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 329,
    "name": "vibrava",
    "height": 11,
    "weight": 153,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/329.png",
    "types": [
      "ground",
      "dragon"
    ],
    "baseExperience": 119,
    "abilities": [
      {
        "name": "levitate",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 330,
    "name": "flygon",
    "height": 20,
    "weight": 820,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/330.png",
    "types": [
      "ground",
      "dragon"
    ],
    "baseExperience": 234,
    "abilities": [
      {
        "name": "levitate",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 331,
    "name": "cacnea",
    "height": 4,
    "weight": 513,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/331.png",
    "types": [
      "grass"
    ],
    "baseExperience": 67,
    "abilities": [
      {
        "name": "sand-veil",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "water-absorb",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 332,
    "name": "cacturne",
    "height": 13,
    "weight": 774,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/332.png",
    "types": [
      "grass",
      "dark"
    ],
    "baseExperience": 166,
    "abilities": [
      {
        "name": "sand-veil",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "water-absorb",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 333,
    "name": "swablu",
    "height": 4,
    "weight": 12,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/333.png",
    "types": [
      "normal",
      "flying"
    ],
    "baseExperience": 62,
    "abilities": [
      {
        "name": "natural-cure",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "cloud-nine",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 334,
    "name": "altaria",
    "height": 11,
    "weight": 206,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/334.png",
    "types": [
      "dragon",
      "flying"
    ],
    "baseExperience": 172,
    "abilities": [
      {
        "name": "natural-cure",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "cloud-nine",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 335,
    "name": "zangoose",
    "height": 13,
    "weight": 403,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/335.png",
    "types": [
      "normal"
    ],
    "baseExperience": 160,
    "abilities": [
      {
        "name": "immunity",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "toxic-boost",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 336,
    "name": "seviper",
    "height": 27,
    "weight": 525,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/336.png",
    "types": [
      "poison"
    ],
    "baseExperience": 160,
    "abilities": [
      {
        "name": "shed-skin",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "infiltrator",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 337,
    "name": "lunatone",
    "height": 10,
    "weight": 1680,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/337.png",
    "types": [
      "rock",
      "psychic"
    ],
    "baseExperience": 161,
    "abilities": [
      {
        "name": "levitate",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 338,
    "name": "solrock",
    "height": 12,
    "weight": 1540,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/338.png",
    "types": [
      "rock",
      "psychic"
    ],
    "baseExperience": 161,
    "abilities": [
      {
        "name": "levitate",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 339,
    "name": "barboach",
    "height": 4,
    "weight": 19,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/339.png",
    "types": [
      "water",
      "ground"
    ],
    "baseExperience": 58,
    "abilities": [
      {
        "name": "oblivious",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "anticipation",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "hydration",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 340,
    "name": "whiscash",
    "height": 9,
    "weight": 236,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/340.png",
    "types": [
      "water",
      "ground"
    ],
    "baseExperience": 164,
    "abilities": [
      {
        "name": "oblivious",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "anticipation",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "hydration",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 341,
    "name": "corphish",
    "height": 6,
    "weight": 115,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/341.png",
    "types": [
      "water"
    ],
    "baseExperience": 62,
    "abilities": [
      {
        "name": "hyper-cutter",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "shell-armor",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "adaptability",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 342,
    "name": "crawdaunt",
    "height": 11,
    "weight": 328,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/342.png",
    "types": [
      "water",
      "dark"
    ],
    "baseExperience": 164,
    "abilities": [
      {
        "name": "hyper-cutter",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "shell-armor",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "adaptability",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 343,
    "name": "baltoy",
    "height": 5,
    "weight": 215,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/343.png",
    "types": [
      "ground",
      "psychic"
    ],
    "baseExperience": 60,
    "abilities": [
      {
        "name": "levitate",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 344,
    "name": "claydol",
    "height": 15,
    "weight": 1080,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/344.png",
    "types": [
      "ground",
      "psychic"
    ],
    "baseExperience": 175,
    "abilities": [
      {
        "name": "levitate",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 345,
    "name": "lileep",
    "height": 10,
    "weight": 238,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/345.png",
    "types": [
      "rock",
      "grass"
    ],
    "baseExperience": 71,
    "abilities": [
      {
        "name": "suction-cups",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "storm-drain",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 346,
    "name": "cradily",
    "height": 15,
    "weight": 604,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/346.png",
    "types": [
      "rock",
      "grass"
    ],
    "baseExperience": 173,
    "abilities": [
      {
        "name": "suction-cups",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "storm-drain",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 347,
    "name": "anorith",
    "height": 7,
    "weight": 125,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/347.png",
    "types": [
      "rock",
      "bug"
    ],
    "baseExperience": 71,
    "abilities": [
      {
        "name": "battle-armor",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "swift-swim",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 348,
    "name": "armaldo",
    "height": 15,
    "weight": 682,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/348.png",
    "types": [
      "rock",
      "bug"
    ],
    "baseExperience": 173,
    "abilities": [
      {
        "name": "battle-armor",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "swift-swim",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 349,
    "name": "feebas",
    "height": 6,
    "weight": 74,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/349.png",
    "types": [
      "water"
    ],
    "baseExperience": 40,
    "abilities": [
      {
        "name": "swift-swim",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "oblivious",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "adaptability",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 350,
    "name": "milotic",
    "height": 62,
    "weight": 1620,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/350.png",
    "types": [
      "water"
    ],
    "baseExperience": 189,
    "abilities": [
      {
        "name": "marvel-scale",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "competitive",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "cute-charm",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 351,
    "name": "castform",
    "height": 3,
    "weight": 8,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/351.png",
    "types": [
      "normal"
    ],
    "baseExperience": 147,
    "abilities": [
      {
        "name": "forecast",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 352,
    "name": "kecleon",
    "height": 10,
    "weight": 220,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/352.png",
    "types": [
      "normal"
    ],
    "baseExperience": 154,
    "abilities": [
      {
        "name": "color-change",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "protean",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 353,
    "name": "shuppet",
    "height": 6,
    "weight": 23,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/353.png",
    "types": [
      "ghost"
    ],
    "baseExperience": 59,
    "abilities": [
      {
        "name": "insomnia",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "frisk",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "cursed-body",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 354,
    "name": "banette",
    "height": 11,
    "weight": 125,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/354.png",
    "types": [
      "ghost"
    ],
    "baseExperience": 159,
    "abilities": [
      {
        "name": "insomnia",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "frisk",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "cursed-body",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 355,
    "name": "duskull",
    "height": 8,
    "weight": 150,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/355.png",
    "types": [
      "ghost"
    ],
    "baseExperience": 59,
    "abilities": [
      {
        "name": "levitate",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "frisk",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 356,
    "name": "dusclops",
    "height": 16,
    "weight": 306,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/356.png",
    "types": [
      "ghost"
    ],
    "baseExperience": 159,
    "abilities": [
      {
        "name": "pressure",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "frisk",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 357,
    "name": "tropius",
    "height": 20,
    "weight": 1000,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/357.png",
    "types": [
      "grass",
      "flying"
    ],
    "baseExperience": 161,
    "abilities": [
      {
        "name": "chlorophyll",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "solar-power",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "harvest",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 358,
    "name": "chimecho",
    "height": 6,
    "weight": 10,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/358.png",
    "types": [
      "psychic"
    ],
    "baseExperience": 159,
    "abilities": [
      {
        "name": "levitate",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 359,
    "name": "absol",
    "height": 12,
    "weight": 470,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/359.png",
    "types": [
      "dark"
    ],
    "baseExperience": 163,
    "abilities": [
      {
        "name": "pressure",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "super-luck",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "justified",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 360,
    "name": "wynaut",
    "height": 6,
    "weight": 140,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/360.png",
    "types": [
      "psychic"
    ],
    "baseExperience": 52,
    "abilities": [
      {
        "name": "shadow-tag",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "telepathy",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 361,
    "name": "snorunt",
    "height": 7,
    "weight": 168,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/361.png",
    "types": [
      "ice"
    ],
    "baseExperience": 60,
    "abilities": [
      {
        "name": "inner-focus",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "ice-body",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "moody",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 362,
    "name": "glalie",
    "height": 15,
    "weight": 2565,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/362.png",
    "types": [
      "ice"
    ],
    "baseExperience": 168,
    "abilities": [
      {
        "name": "inner-focus",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "ice-body",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "moody",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 363,
    "name": "spheal",
    "height": 8,
    "weight": 395,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/363.png",
    "types": [
      "ice",
      "water"
    ],
    "baseExperience": 58,
    "abilities": [
      {
        "name": "thick-fat",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "ice-body",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "oblivious",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 364,
    "name": "sealeo",
    "height": 11,
    "weight": 876,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/364.png",
    "types": [
      "ice",
      "water"
    ],
    "baseExperience": 144,
    "abilities": [
      {
        "name": "thick-fat",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "ice-body",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "oblivious",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 365,
    "name": "walrein",
    "height": 14,
    "weight": 1506,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/365.png",
    "types": [
      "ice",
      "water"
    ],
    "baseExperience": 239,
    "abilities": [
      {
        "name": "thick-fat",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "ice-body",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "oblivious",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 366,
    "name": "clamperl",
    "height": 4,
    "weight": 525,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/366.png",
    "types": [
      "water"
    ],
    "baseExperience": 69,
    "abilities": [
      {
        "name": "shell-armor",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "rattled",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 367,
    "name": "huntail",
    "height": 17,
    "weight": 270,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/367.png",
    "types": [
      "water"
    ],
    "baseExperience": 170,
    "abilities": [
      {
        "name": "swift-swim",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "water-veil",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 368,
    "name": "gorebyss",
    "height": 18,
    "weight": 226,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/368.png",
    "types": [
      "water"
    ],
    "baseExperience": 170,
    "abilities": [
      {
        "name": "swift-swim",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "hydration",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 369,
    "name": "relicanth",
    "height": 10,
    "weight": 234,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/369.png",
    "types": [
      "water",
      "rock"
    ],
    "baseExperience": 170,
    "abilities": [
      {
        "name": "swift-swim",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "rock-head",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "sturdy",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 370,
    "name": "luvdisc",
    "height": 6,
    "weight": 87,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/370.png",
    "types": [
      "water"
    ],
    "baseExperience": 116,
    "abilities": [
      {
        "name": "swift-swim",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "hydration",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 371,
    "name": "bagon",
    "height": 6,
    "weight": 421,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/371.png",
    "types": [
      "dragon"
    ],
    "baseExperience": 60,
    "abilities": [
      {
        "name": "rock-head",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sheer-force",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 372,
    "name": "shelgon",
    "height": 11,
    "weight": 1105,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/372.png",
    "types": [
      "dragon"
    ],
    "baseExperience": 147,
    "abilities": [
      {
        "name": "rock-head",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "overcoat",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 373,
    "name": "salamence",
    "height": 15,
    "weight": 1026,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/373.png",
    "types": [
      "dragon",
      "flying"
    ],
    "baseExperience": 270,
    "abilities": [
      {
        "name": "intimidate",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "moxie",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 374,
    "name": "beldum",
    "height": 6,
    "weight": 952,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/374.png",
    "types": [
      "steel",
      "psychic"
    ],
    "baseExperience": 60,
    "abilities": [
      {
        "name": "clear-body",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "light-metal",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 375,
    "name": "metang",
    "height": 12,
    "weight": 2025,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/375.png",
    "types": [
      "steel",
      "psychic"
    ],
    "baseExperience": 147,
    "abilities": [
      {
        "name": "clear-body",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "light-metal",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 376,
    "name": "metagross",
    "height": 16,
    "weight": 5500,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/376.png",
    "types": [
      "steel",
      "psychic"
    ],
    "baseExperience": 270,
    "abilities": [
      {
        "name": "clear-body",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "light-metal",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 377,
    "name": "regirock",
    "height": 17,
    "weight": 2300,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/377.png",
    "types": [
      "rock"
    ],
    "baseExperience": 261,
    "abilities": [
      {
        "name": "clear-body",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sturdy",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 378,
    "name": "regice",
    "height": 18,
    "weight": 1750,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/378.png",
    "types": [
      "ice"
    ],
    "baseExperience": 261,
    "abilities": [
      {
        "name": "clear-body",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "ice-body",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 379,
    "name": "registeel",
    "height": 19,
    "weight": 2050,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/379.png",
    "types": [
      "steel"
    ],
    "baseExperience": 261,
    "abilities": [
      {
        "name": "clear-body",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "light-metal",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 380,
    "name": "latias",
    "height": 14,
    "weight": 400,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/380.png",
    "types": [
      "dragon",
      "psychic"
    ],
    "baseExperience": 270,
    "abilities": [
      {
        "name": "levitate",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 381,
    "name": "latios",
    "height": 20,
    "weight": 600,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/381.png",
    "types": [
      "dragon",
      "psychic"
    ],
    "baseExperience": 270,
    "abilities": [
      {
        "name": "levitate",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 382,
    "name": "kyogre",
    "height": 45,
    "weight": 3520,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/382.png",
    "types": [
      "water"
    ],
    "baseExperience": 302,
    "abilities": [
      {
        "name": "drizzle",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 383,
    "name": "groudon",
    "height": 35,
    "weight": 9500,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/383.png",
    "types": [
      "ground"
    ],
    "baseExperience": 302,
    "abilities": [
      {
        "name": "drought",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 384,
    "name": "rayquaza",
    "height": 70,
    "weight": 2065,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/384.png",
    "types": [
      "dragon",
      "flying"
    ],
    "baseExperience": 306,
    "abilities": [
      {
        "name": "air-lock",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 385,
    "name": "jirachi",
    "height": 3,
    "weight": 11,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/385.png",
    "types": [
      "steel",
      "psychic"
    ],
    "baseExperience": 270,
    "abilities": [
      {
        "name": "serene-grace",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 386,
    "name": "deoxys-normal",
    "height": 17,
    "weight": 608,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/386.png",
    "types": [
      "psychic"
    ],
    "baseExperience": 270,
    "abilities": [
      {
        "name": "pressure",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 387,
    "name": "turtwig",
    "height": 4,
    "weight": 102,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/387.png",
    "types": [
      "grass"
    ],
    "baseExperience": 64,
    "abilities": [
      {
        "name": "overgrow",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "shell-armor",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 388,
    "name": "grotle",
    "height": 11,
    "weight": 970,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/388.png",
    "types": [
      "grass"
    ],
    "baseExperience": 142,
    "abilities": [
      {
        "name": "overgrow",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "shell-armor",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 389,
    "name": "torterra",
    "height": 22,
    "weight": 3100,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/389.png",
    "types": [
      "grass",
      "ground"
    ],
    "baseExperience": 236,
    "abilities": [
      {
        "name": "overgrow",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "shell-armor",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 390,
    "name": "chimchar",
    "height": 5,
    "weight": 62,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/390.png",
    "types": [
      "fire"
    ],
    "baseExperience": 62,
    "abilities": [
      {
        "name": "blaze",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "iron-fist",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 391,
    "name": "monferno",
    "height": 9,
    "weight": 220,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/391.png",
    "types": [
      "fire",
      "fighting"
    ],
    "baseExperience": 142,
    "abilities": [
      {
        "name": "blaze",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "iron-fist",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 392,
    "name": "infernape",
    "height": 12,
    "weight": 550,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/392.png",
    "types": [
      "fire",
      "fighting"
    ],
    "baseExperience": 240,
    "abilities": [
      {
        "name": "blaze",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "iron-fist",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 393,
    "name": "piplup",
    "height": 4,
    "weight": 52,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/393.png",
    "types": [
      "water"
    ],
    "baseExperience": 63,
    "abilities": [
      {
        "name": "torrent",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "competitive",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 394,
    "name": "prinplup",
    "height": 8,
    "weight": 230,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/394.png",
    "types": [
      "water"
    ],
    "baseExperience": 142,
    "abilities": [
      {
        "name": "torrent",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "competitive",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 395,
    "name": "empoleon",
    "height": 17,
    "weight": 845,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/395.png",
    "types": [
      "water",
      "steel"
    ],
    "baseExperience": 239,
    "abilities": [
      {
        "name": "torrent",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "competitive",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 396,
    "name": "starly",
    "height": 3,
    "weight": 20,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/396.png",
    "types": [
      "normal",
      "flying"
    ],
    "baseExperience": 49,
    "abilities": [
      {
        "name": "keen-eye",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "reckless",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 397,
    "name": "staravia",
    "height": 6,
    "weight": 155,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/397.png",
    "types": [
      "normal",
      "flying"
    ],
    "baseExperience": 119,
    "abilities": [
      {
        "name": "intimidate",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "reckless",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 398,
    "name": "staraptor",
    "height": 12,
    "weight": 249,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/398.png",
    "types": [
      "normal",
      "flying"
    ],
    "baseExperience": 218,
    "abilities": [
      {
        "name": "intimidate",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "reckless",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 399,
    "name": "bidoof",
    "height": 5,
    "weight": 200,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/399.png",
    "types": [
      "normal"
    ],
    "baseExperience": 50,
    "abilities": [
      {
        "name": "simple",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "unaware",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "moody",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 400,
    "name": "bibarel",
    "height": 10,
    "weight": 315,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/400.png",
    "types": [
      "normal",
      "water"
    ],
    "baseExperience": 144,
    "abilities": [
      {
        "name": "simple",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "unaware",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "moody",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 401,
    "name": "kricketot",
    "height": 3,
    "weight": 22,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/401.png",
    "types": [
      "bug"
    ],
    "baseExperience": 39,
    "abilities": [
      {
        "name": "shed-skin",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "run-away",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 402,
    "name": "kricketune",
    "height": 10,
    "weight": 255,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/402.png",
    "types": [
      "bug"
    ],
    "baseExperience": 134,
    "abilities": [
      {
        "name": "swarm",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "technician",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 403,
    "name": "shinx",
    "height": 5,
    "weight": 95,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/403.png",
    "types": [
      "electric"
    ],
    "baseExperience": 53,
    "abilities": [
      {
        "name": "rivalry",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "intimidate",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "guts",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 404,
    "name": "luxio",
    "height": 9,
    "weight": 305,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/404.png",
    "types": [
      "electric"
    ],
    "baseExperience": 127,
    "abilities": [
      {
        "name": "rivalry",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "intimidate",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "guts",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 405,
    "name": "luxray",
    "height": 14,
    "weight": 420,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/405.png",
    "types": [
      "electric"
    ],
    "baseExperience": 235,
    "abilities": [
      {
        "name": "rivalry",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "intimidate",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "guts",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 406,
    "name": "budew",
    "height": 2,
    "weight": 12,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/406.png",
    "types": [
      "grass",
      "poison"
    ],
    "baseExperience": 56,
    "abilities": [
      {
        "name": "natural-cure",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "poison-point",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "leaf-guard",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 407,
    "name": "roserade",
    "height": 9,
    "weight": 145,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/407.png",
    "types": [
      "grass",
      "poison"
    ],
    "baseExperience": 232,
    "abilities": [
      {
        "name": "natural-cure",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "poison-point",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "technician",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 408,
    "name": "cranidos",
    "height": 9,
    "weight": 315,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/408.png",
    "types": [
      "rock"
    ],
    "baseExperience": 70,
    "abilities": [
      {
        "name": "mold-breaker",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sheer-force",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 409,
    "name": "rampardos",
    "height": 16,
    "weight": 1025,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/409.png",
    "types": [
      "rock"
    ],
    "baseExperience": 173,
    "abilities": [
      {
        "name": "mold-breaker",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sheer-force",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 410,
    "name": "shieldon",
    "height": 5,
    "weight": 570,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/410.png",
    "types": [
      "rock",
      "steel"
    ],
    "baseExperience": 70,
    "abilities": [
      {
        "name": "sturdy",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "soundproof",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 411,
    "name": "bastiodon",
    "height": 13,
    "weight": 1495,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/411.png",
    "types": [
      "rock",
      "steel"
    ],
    "baseExperience": 173,
    "abilities": [
      {
        "name": "sturdy",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "soundproof",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 412,
    "name": "burmy",
    "height": 2,
    "weight": 34,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/412.png",
    "types": [
      "bug"
    ],
    "baseExperience": 45,
    "abilities": [
      {
        "name": "shed-skin",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "overcoat",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 413,
    "name": "wormadam-plant",
    "height": 5,
    "weight": 65,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/413.png",
    "types": [
      "bug",
      "grass"
    ],
    "baseExperience": 148,
    "abilities": [
      {
        "name": "anticipation",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "overcoat",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 414,
    "name": "mothim",
    "height": 9,
    "weight": 233,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/414.png",
    "types": [
      "bug",
      "flying"
    ],
    "baseExperience": 148,
    "abilities": [
      {
        "name": "swarm",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "tinted-lens",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 415,
    "name": "combee",
    "height": 3,
    "weight": 55,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/415.png",
    "types": [
      "bug",
      "flying"
    ],
    "baseExperience": 49,
    "abilities": [
      {
        "name": "honey-gather",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "hustle",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 416,
    "name": "vespiquen",
    "height": 12,
    "weight": 385,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/416.png",
    "types": [
      "bug",
      "flying"
    ],
    "baseExperience": 166,
    "abilities": [
      {
        "name": "pressure",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "unnerve",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 417,
    "name": "pachirisu",
    "height": 4,
    "weight": 39,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/417.png",
    "types": [
      "electric"
    ],
    "baseExperience": 142,
    "abilities": [
      {
        "name": "run-away",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "pickup",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "volt-absorb",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 418,
    "name": "buizel",
    "height": 7,
    "weight": 295,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/418.png",
    "types": [
      "water"
    ],
    "baseExperience": 66,
    "abilities": [
      {
        "name": "swift-swim",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "water-veil",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 419,
    "name": "floatzel",
    "height": 11,
    "weight": 335,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/419.png",
    "types": [
      "water"
    ],
    "baseExperience": 173,
    "abilities": [
      {
        "name": "swift-swim",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "water-veil",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 420,
    "name": "cherubi",
    "height": 4,
    "weight": 33,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/420.png",
    "types": [
      "grass"
    ],
    "baseExperience": 55,
    "abilities": [
      {
        "name": "chlorophyll",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 421,
    "name": "cherrim",
    "height": 5,
    "weight": 93,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/421.png",
    "types": [
      "grass"
    ],
    "baseExperience": 158,
    "abilities": [
      {
        "name": "flower-gift",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 422,
    "name": "shellos",
    "height": 3,
    "weight": 63,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/422.png",
    "types": [
      "water"
    ],
    "baseExperience": 65,
    "abilities": [
      {
        "name": "sticky-hold",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "storm-drain",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "sand-force",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 423,
    "name": "gastrodon",
    "height": 9,
    "weight": 299,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/423.png",
    "types": [
      "water",
      "ground"
    ],
    "baseExperience": 166,
    "abilities": [
      {
        "name": "sticky-hold",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "storm-drain",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "sand-force",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 424,
    "name": "ambipom",
    "height": 12,
    "weight": 203,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/424.png",
    "types": [
      "normal"
    ],
    "baseExperience": 169,
    "abilities": [
      {
        "name": "technician",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "pickup",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "skill-link",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 425,
    "name": "drifloon",
    "height": 4,
    "weight": 12,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/425.png",
    "types": [
      "ghost",
      "flying"
    ],
    "baseExperience": 70,
    "abilities": [
      {
        "name": "aftermath",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "unburden",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "flare-boost",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 426,
    "name": "drifblim",
    "height": 12,
    "weight": 150,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/426.png",
    "types": [
      "ghost",
      "flying"
    ],
    "baseExperience": 174,
    "abilities": [
      {
        "name": "aftermath",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "unburden",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "flare-boost",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 427,
    "name": "buneary",
    "height": 4,
    "weight": 55,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/427.png",
    "types": [
      "normal"
    ],
    "baseExperience": 70,
    "abilities": [
      {
        "name": "run-away",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "klutz",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "limber",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 428,
    "name": "lopunny",
    "height": 12,
    "weight": 333,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/428.png",
    "types": [
      "normal"
    ],
    "baseExperience": 168,
    "abilities": [
      {
        "name": "cute-charm",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "klutz",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "limber",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 429,
    "name": "mismagius",
    "height": 9,
    "weight": 44,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/429.png",
    "types": [
      "ghost"
    ],
    "baseExperience": 173,
    "abilities": [
      {
        "name": "levitate",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 430,
    "name": "honchkrow",
    "height": 9,
    "weight": 273,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/430.png",
    "types": [
      "dark",
      "flying"
    ],
    "baseExperience": 177,
    "abilities": [
      {
        "name": "insomnia",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "super-luck",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "moxie",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 431,
    "name": "glameow",
    "height": 5,
    "weight": 39,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/431.png",
    "types": [
      "normal"
    ],
    "baseExperience": 62,
    "abilities": [
      {
        "name": "limber",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "own-tempo",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "keen-eye",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 432,
    "name": "purugly",
    "height": 10,
    "weight": 438,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/432.png",
    "types": [
      "normal"
    ],
    "baseExperience": 158,
    "abilities": [
      {
        "name": "thick-fat",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "own-tempo",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "defiant",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 433,
    "name": "chingling",
    "height": 2,
    "weight": 6,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/433.png",
    "types": [
      "psychic"
    ],
    "baseExperience": 57,
    "abilities": [
      {
        "name": "levitate",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 434,
    "name": "stunky",
    "height": 4,
    "weight": 192,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/434.png",
    "types": [
      "poison",
      "dark"
    ],
    "baseExperience": 66,
    "abilities": [
      {
        "name": "stench",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "aftermath",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "keen-eye",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 435,
    "name": "skuntank",
    "height": 10,
    "weight": 380,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/435.png",
    "types": [
      "poison",
      "dark"
    ],
    "baseExperience": 168,
    "abilities": [
      {
        "name": "stench",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "aftermath",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "keen-eye",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 436,
    "name": "bronzor",
    "height": 5,
    "weight": 605,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/436.png",
    "types": [
      "steel",
      "psychic"
    ],
    "baseExperience": 60,
    "abilities": [
      {
        "name": "levitate",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "heatproof",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "heavy-metal",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 437,
    "name": "bronzong",
    "height": 13,
    "weight": 1870,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/437.png",
    "types": [
      "steel",
      "psychic"
    ],
    "baseExperience": 175,
    "abilities": [
      {
        "name": "levitate",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "heatproof",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "heavy-metal",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 438,
    "name": "bonsly",
    "height": 5,
    "weight": 150,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/438.png",
    "types": [
      "rock"
    ],
    "baseExperience": 58,
    "abilities": [
      {
        "name": "sturdy",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "rock-head",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "rattled",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 439,
    "name": "mime-jr",
    "height": 6,
    "weight": 130,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/439.png",
    "types": [
      "psychic",
      "fairy"
    ],
    "baseExperience": 62,
    "abilities": [
      {
        "name": "soundproof",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "filter",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "technician",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 440,
    "name": "happiny",
    "height": 6,
    "weight": 244,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/440.png",
    "types": [
      "normal"
    ],
    "baseExperience": 110,
    "abilities": [
      {
        "name": "natural-cure",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "serene-grace",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "friend-guard",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 441,
    "name": "chatot",
    "height": 5,
    "weight": 19,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/441.png",
    "types": [
      "normal",
      "flying"
    ],
    "baseExperience": 144,
    "abilities": [
      {
        "name": "keen-eye",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "tangled-feet",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "big-pecks",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 442,
    "name": "spiritomb",
    "height": 10,
    "weight": 1080,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/442.png",
    "types": [
      "ghost",
      "dark"
    ],
    "baseExperience": 170,
    "abilities": [
      {
        "name": "pressure",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "infiltrator",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 443,
    "name": "gible",
    "height": 7,
    "weight": 205,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/443.png",
    "types": [
      "dragon",
      "ground"
    ],
    "baseExperience": 60,
    "abilities": [
      {
        "name": "sand-veil",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "rough-skin",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 444,
    "name": "gabite",
    "height": 14,
    "weight": 560,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/444.png",
    "types": [
      "dragon",
      "ground"
    ],
    "baseExperience": 144,
    "abilities": [
      {
        "name": "sand-veil",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "rough-skin",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 445,
    "name": "garchomp",
    "height": 19,
    "weight": 950,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/445.png",
    "types": [
      "dragon",
      "ground"
    ],
    "baseExperience": 270,
    "abilities": [
      {
        "name": "sand-veil",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "rough-skin",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 446,
    "name": "munchlax",
    "height": 6,
    "weight": 1050,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/446.png",
    "types": [
      "normal"
    ],
    "baseExperience": 78,
    "abilities": [
      {
        "name": "pickup",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "thick-fat",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "gluttony",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 447,
    "name": "riolu",
    "height": 7,
    "weight": 202,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/447.png",
    "types": [
      "fighting"
    ],
    "baseExperience": 57,
    "abilities": [
      {
        "name": "steadfast",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "inner-focus",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "prankster",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 448,
    "name": "lucario",
    "height": 12,
    "weight": 540,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/448.png",
    "types": [
      "fighting",
      "steel"
    ],
    "baseExperience": 184,
    "abilities": [
      {
        "name": "steadfast",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "inner-focus",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "justified",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 449,
    "name": "hippopotas",
    "height": 8,
    "weight": 495,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/449.png",
    "types": [
      "ground"
    ],
    "baseExperience": 66,
    "abilities": [
      {
        "name": "sand-stream",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sand-force",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 450,
    "name": "hippowdon",
    "height": 20,
    "weight": 3000,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/450.png",
    "types": [
      "ground"
    ],
    "baseExperience": 184,
    "abilities": [
      {
        "name": "sand-stream",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sand-force",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 451,
    "name": "skorupi",
    "height": 8,
    "weight": 120,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/451.png",
    "types": [
      "poison",
      "bug"
    ],
    "baseExperience": 66,
    "abilities": [
      {
        "name": "battle-armor",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sniper",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "keen-eye",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 452,
    "name": "drapion",
    "height": 13,
    "weight": 615,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/452.png",
    "types": [
      "poison",
      "dark"
    ],
    "baseExperience": 175,
    "abilities": [
      {
        "name": "battle-armor",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sniper",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "keen-eye",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 453,
    "name": "croagunk",
    "height": 7,
    "weight": 230,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/453.png",
    "types": [
      "poison",
      "fighting"
    ],
    "baseExperience": 60,
    "abilities": [
      {
        "name": "anticipation",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "dry-skin",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "poison-touch",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 454,
    "name": "toxicroak",
    "height": 13,
    "weight": 444,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/454.png",
    "types": [
      "poison",
      "fighting"
    ],
    "baseExperience": 172,
    "abilities": [
      {
        "name": "anticipation",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "dry-skin",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "poison-touch",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 455,
    "name": "carnivine",
    "height": 14,
    "weight": 270,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/455.png",
    "types": [
      "grass"
    ],
    "baseExperience": 159,
    "abilities": [
      {
        "name": "levitate",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 456,
    "name": "finneon",
    "height": 4,
    "weight": 70,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/456.png",
    "types": [
      "water"
    ],
    "baseExperience": 66,
    "abilities": [
      {
        "name": "swift-swim",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "storm-drain",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "water-veil",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 457,
    "name": "lumineon",
    "height": 12,
    "weight": 240,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/457.png",
    "types": [
      "water"
    ],
    "baseExperience": 161,
    "abilities": [
      {
        "name": "swift-swim",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "storm-drain",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "water-veil",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 458,
    "name": "mantyke",
    "height": 10,
    "weight": 650,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/458.png",
    "types": [
      "water",
      "flying"
    ],
    "baseExperience": 69,
    "abilities": [
      {
        "name": "swift-swim",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "water-absorb",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "water-veil",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 459,
    "name": "snover",
    "height": 10,
    "weight": 505,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/459.png",
    "types": [
      "grass",
      "ice"
    ],
    "baseExperience": 67,
    "abilities": [
      {
        "name": "snow-warning",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "soundproof",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 460,
    "name": "abomasnow",
    "height": 22,
    "weight": 1355,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/460.png",
    "types": [
      "grass",
      "ice"
    ],
    "baseExperience": 173,
    "abilities": [
      {
        "name": "snow-warning",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "soundproof",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 461,
    "name": "weavile",
    "height": 11,
    "weight": 340,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/461.png",
    "types": [
      "dark",
      "ice"
    ],
    "baseExperience": 179,
    "abilities": [
      {
        "name": "pressure",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "pickpocket",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 462,
    "name": "magnezone",
    "height": 12,
    "weight": 1800,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/462.png",
    "types": [
      "electric",
      "steel"
    ],
    "baseExperience": 241,
    "abilities": [
      {
        "name": "magnet-pull",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sturdy",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "analytic",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 463,
    "name": "lickilicky",
    "height": 17,
    "weight": 1400,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/463.png",
    "types": [
      "normal"
    ],
    "baseExperience": 180,
    "abilities": [
      {
        "name": "own-tempo",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "oblivious",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "cloud-nine",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 464,
    "name": "rhyperior",
    "height": 24,
    "weight": 2828,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/464.png",
    "types": [
      "ground",
      "rock"
    ],
    "baseExperience": 241,
    "abilities": [
      {
        "name": "lightning-rod",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "solid-rock",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "reckless",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 465,
    "name": "tangrowth",
    "height": 20,
    "weight": 1286,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/465.png",
    "types": [
      "grass"
    ],
    "baseExperience": 187,
    "abilities": [
      {
        "name": "chlorophyll",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "leaf-guard",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "regenerator",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 466,
    "name": "electivire",
    "height": 18,
    "weight": 1386,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/466.png",
    "types": [
      "electric"
    ],
    "baseExperience": 243,
    "abilities": [
      {
        "name": "motor-drive",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "vital-spirit",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 467,
    "name": "magmortar",
    "height": 16,
    "weight": 680,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/467.png",
    "types": [
      "fire"
    ],
    "baseExperience": 243,
    "abilities": [
      {
        "name": "flame-body",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "vital-spirit",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 468,
    "name": "togekiss",
    "height": 15,
    "weight": 380,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/468.png",
    "types": [
      "fairy",
      "flying"
    ],
    "baseExperience": 245,
    "abilities": [
      {
        "name": "hustle",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "serene-grace",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "super-luck",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 469,
    "name": "yanmega",
    "height": 19,
    "weight": 515,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/469.png",
    "types": [
      "bug",
      "flying"
    ],
    "baseExperience": 180,
    "abilities": [
      {
        "name": "speed-boost",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "tinted-lens",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "frisk",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 470,
    "name": "leafeon",
    "height": 10,
    "weight": 255,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/470.png",
    "types": [
      "grass"
    ],
    "baseExperience": 184,
    "abilities": [
      {
        "name": "leaf-guard",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "chlorophyll",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 471,
    "name": "glaceon",
    "height": 8,
    "weight": 259,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/471.png",
    "types": [
      "ice"
    ],
    "baseExperience": 184,
    "abilities": [
      {
        "name": "snow-cloak",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "ice-body",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 472,
    "name": "gliscor",
    "height": 20,
    "weight": 425,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/472.png",
    "types": [
      "ground",
      "flying"
    ],
    "baseExperience": 179,
    "abilities": [
      {
        "name": "hyper-cutter",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sand-veil",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "poison-heal",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 473,
    "name": "mamoswine",
    "height": 25,
    "weight": 2910,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/473.png",
    "types": [
      "ice",
      "ground"
    ],
    "baseExperience": 239,
    "abilities": [
      {
        "name": "oblivious",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "snow-cloak",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "thick-fat",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 474,
    "name": "porygon-z",
    "height": 9,
    "weight": 340,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/474.png",
    "types": [
      "normal"
    ],
    "baseExperience": 241,
    "abilities": [
      {
        "name": "adaptability",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "download",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "analytic",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 475,
    "name": "gallade",
    "height": 16,
    "weight": 520,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/475.png",
    "types": [
      "psychic",
      "fighting"
    ],
    "baseExperience": 233,
    "abilities": [
      {
        "name": "steadfast",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sharpness",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "justified",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 476,
    "name": "probopass",
    "height": 14,
    "weight": 3400,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/476.png",
    "types": [
      "rock",
      "steel"
    ],
    "baseExperience": 184,
    "abilities": [
      {
        "name": "sturdy",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "magnet-pull",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "sand-force",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 477,
    "name": "dusknoir",
    "height": 22,
    "weight": 1066,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/477.png",
    "types": [
      "ghost"
    ],
    "baseExperience": 236,
    "abilities": [
      {
        "name": "pressure",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "frisk",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 478,
    "name": "froslass",
    "height": 13,
    "weight": 266,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/478.png",
    "types": [
      "ice",
      "ghost"
    ],
    "baseExperience": 168,
    "abilities": [
      {
        "name": "snow-cloak",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "cursed-body",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 479,
    "name": "rotom",
    "height": 3,
    "weight": 3,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/479.png",
    "types": [
      "electric",
      "ghost"
    ],
    "baseExperience": 154,
    "abilities": [
      {
        "name": "levitate",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 480,
    "name": "uxie",
    "height": 3,
    "weight": 3,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/480.png",
    "types": [
      "psychic"
    ],
    "baseExperience": 261,
    "abilities": [
      {
        "name": "levitate",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 481,
    "name": "mesprit",
    "height": 3,
    "weight": 3,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/481.png",
    "types": [
      "psychic"
    ],
    "baseExperience": 261,
    "abilities": [
      {
        "name": "levitate",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 482,
    "name": "azelf",
    "height": 3,
    "weight": 3,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/482.png",
    "types": [
      "psychic"
    ],
    "baseExperience": 261,
    "abilities": [
      {
        "name": "levitate",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 483,
    "name": "dialga",
    "height": 54,
    "weight": 6830,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/483.png",
    "types": [
      "steel",
      "dragon"
    ],
    "baseExperience": 306,
    "abilities": [
      {
        "name": "pressure",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "telepathy",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 484,
    "name": "palkia",
    "height": 42,
    "weight": 3360,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/484.png",
    "types": [
      "water",
      "dragon"
    ],
    "baseExperience": 306,
    "abilities": [
      {
        "name": "pressure",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "telepathy",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 485,
    "name": "heatran",
    "height": 17,
    "weight": 4300,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/485.png",
    "types": [
      "fire",
      "steel"
    ],
    "baseExperience": 270,
    "abilities": [
      {
        "name": "flash-fire",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "flame-body",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 486,
    "name": "regigigas",
    "height": 37,
    "weight": 4200,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/486.png",
    "types": [
      "normal"
    ],
    "baseExperience": 302,
    "abilities": [
      {
        "name": "slow-start",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 487,
    "name": "giratina-altered",
    "height": 45,
    "weight": 7500,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/487.png",
    "types": [
      "ghost",
      "dragon"
    ],
    "baseExperience": 306,
    "abilities": [
      {
        "name": "pressure",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "telepathy",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 488,
    "name": "cresselia",
    "height": 15,
    "weight": 856,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/488.png",
    "types": [
      "psychic"
    ],
    "baseExperience": 270,
    "abilities": [
      {
        "name": "levitate",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 489,
    "name": "phione",
    "height": 4,
    "weight": 31,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/489.png",
    "types": [
      "water"
    ],
    "baseExperience": 216,
    "abilities": [
      {
        "name": "hydration",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 490,
    "name": "manaphy",
    "height": 3,
    "weight": 14,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/490.png",
    "types": [
      "water"
    ],
    "baseExperience": 270,
    "abilities": [
      {
        "name": "hydration",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 491,
    "name": "darkrai",
    "height": 15,
    "weight": 505,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/491.png",
    "types": [
      "dark"
    ],
    "baseExperience": 270,
    "abilities": [
      {
        "name": "bad-dreams",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 492,
    "name": "shaymin-land",
    "height": 2,
    "weight": 21,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/492.png",
    "types": [
      "grass"
    ],
    "baseExperience": 270,
    "abilities": [
      {
        "name": "natural-cure",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 493,
    "name": "arceus",
    "height": 32,
    "weight": 3200,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/493.png",
    "types": [
      "normal"
    ],
    "baseExperience": 324,
    "abilities": [
      {
        "name": "multitype",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 494,
    "name": "victini",
    "height": 4,
    "weight": 40,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/494.png",
    "types": [
      "psychic",
      "fire"
    ],
    "baseExperience": 270,
    "abilities": [
      {
        "name": "victory-star",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 495,
    "name": "snivy",
    "height": 6,
    "weight": 81,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/495.png",
    "types": [
      "grass"
    ],
    "baseExperience": 62,
    "abilities": [
      {
        "name": "overgrow",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "contrary",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 496,
    "name": "servine",
    "height": 8,
    "weight": 160,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/496.png",
    "types": [
      "grass"
    ],
    "baseExperience": 145,
    "abilities": [
      {
        "name": "overgrow",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "contrary",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 497,
    "name": "serperior",
    "height": 33,
    "weight": 630,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/497.png",
    "types": [
      "grass"
    ],
    "baseExperience": 238,
    "abilities": [
      {
        "name": "overgrow",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "contrary",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 498,
    "name": "tepig",
    "height": 5,
    "weight": 99,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/498.png",
    "types": [
      "fire"
    ],
    "baseExperience": 62,
    "abilities": [
      {
        "name": "blaze",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "thick-fat",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 499,
    "name": "pignite",
    "height": 10,
    "weight": 555,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/499.png",
    "types": [
      "fire",
      "fighting"
    ],
    "baseExperience": 146,
    "abilities": [
      {
        "name": "blaze",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "thick-fat",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 500,
    "name": "emboar",
    "height": 16,
    "weight": 1500,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/500.png",
    "types": [
      "fire",
      "fighting"
    ],
    "baseExperience": 238,
    "abilities": [
      {
        "name": "blaze",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "reckless",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 501,
    "name": "oshawott",
    "height": 5,
    "weight": 59,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/501.png",
    "types": [
      "water"
    ],
    "baseExperience": 62,
    "abilities": [
      {
        "name": "torrent",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "shell-armor",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 502,
    "name": "dewott",
    "height": 8,
    "weight": 245,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/502.png",
    "types": [
      "water"
    ],
    "baseExperience": 145,
    "abilities": [
      {
        "name": "torrent",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "shell-armor",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 503,
    "name": "samurott",
    "height": 15,
    "weight": 946,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/503.png",
    "types": [
      "water"
    ],
    "baseExperience": 238,
    "abilities": [
      {
        "name": "torrent",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "shell-armor",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 504,
    "name": "patrat",
    "height": 5,
    "weight": 116,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/504.png",
    "types": [
      "normal"
    ],
    "baseExperience": 51,
    "abilities": [
      {
        "name": "run-away",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "keen-eye",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "analytic",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 505,
    "name": "watchog",
    "height": 11,
    "weight": 270,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/505.png",
    "types": [
      "normal"
    ],
    "baseExperience": 147,
    "abilities": [
      {
        "name": "illuminate",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "keen-eye",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "analytic",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 506,
    "name": "lillipup",
    "height": 4,
    "weight": 41,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/506.png",
    "types": [
      "normal"
    ],
    "baseExperience": 55,
    "abilities": [
      {
        "name": "vital-spirit",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "pickup",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "run-away",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 507,
    "name": "herdier",
    "height": 9,
    "weight": 147,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/507.png",
    "types": [
      "normal"
    ],
    "baseExperience": 130,
    "abilities": [
      {
        "name": "intimidate",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sand-rush",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "scrappy",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 508,
    "name": "stoutland",
    "height": 12,
    "weight": 610,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/508.png",
    "types": [
      "normal"
    ],
    "baseExperience": 225,
    "abilities": [
      {
        "name": "intimidate",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sand-rush",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "scrappy",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 509,
    "name": "purrloin",
    "height": 4,
    "weight": 101,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/509.png",
    "types": [
      "dark"
    ],
    "baseExperience": 56,
    "abilities": [
      {
        "name": "limber",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "unburden",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "prankster",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 510,
    "name": "liepard",
    "height": 11,
    "weight": 375,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/510.png",
    "types": [
      "dark"
    ],
    "baseExperience": 156,
    "abilities": [
      {
        "name": "limber",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "unburden",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "prankster",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 511,
    "name": "pansage",
    "height": 6,
    "weight": 105,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/511.png",
    "types": [
      "grass"
    ],
    "baseExperience": 63,
    "abilities": [
      {
        "name": "gluttony",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "overgrow",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 512,
    "name": "simisage",
    "height": 11,
    "weight": 305,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/512.png",
    "types": [
      "grass"
    ],
    "baseExperience": 174,
    "abilities": [
      {
        "name": "gluttony",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "overgrow",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 513,
    "name": "pansear",
    "height": 6,
    "weight": 110,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/513.png",
    "types": [
      "fire"
    ],
    "baseExperience": 63,
    "abilities": [
      {
        "name": "gluttony",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "blaze",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 514,
    "name": "simisear",
    "height": 10,
    "weight": 280,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/514.png",
    "types": [
      "fire"
    ],
    "baseExperience": 174,
    "abilities": [
      {
        "name": "gluttony",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "blaze",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 515,
    "name": "panpour",
    "height": 6,
    "weight": 135,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/515.png",
    "types": [
      "water"
    ],
    "baseExperience": 63,
    "abilities": [
      {
        "name": "gluttony",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "torrent",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 516,
    "name": "simipour",
    "height": 10,
    "weight": 290,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/516.png",
    "types": [
      "water"
    ],
    "baseExperience": 174,
    "abilities": [
      {
        "name": "gluttony",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "torrent",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 517,
    "name": "munna",
    "height": 6,
    "weight": 233,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/517.png",
    "types": [
      "psychic"
    ],
    "baseExperience": 58,
    "abilities": [
      {
        "name": "forewarn",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "synchronize",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "telepathy",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 518,
    "name": "musharna",
    "height": 11,
    "weight": 605,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/518.png",
    "types": [
      "psychic"
    ],
    "baseExperience": 170,
    "abilities": [
      {
        "name": "forewarn",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "synchronize",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "telepathy",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 519,
    "name": "pidove",
    "height": 3,
    "weight": 21,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/519.png",
    "types": [
      "normal",
      "flying"
    ],
    "baseExperience": 53,
    "abilities": [
      {
        "name": "big-pecks",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "super-luck",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "rivalry",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 520,
    "name": "tranquill",
    "height": 6,
    "weight": 150,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/520.png",
    "types": [
      "normal",
      "flying"
    ],
    "baseExperience": 125,
    "abilities": [
      {
        "name": "big-pecks",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "super-luck",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "rivalry",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 521,
    "name": "unfezant",
    "height": 12,
    "weight": 290,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/521.png",
    "types": [
      "normal",
      "flying"
    ],
    "baseExperience": 220,
    "abilities": [
      {
        "name": "big-pecks",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "super-luck",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "rivalry",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 522,
    "name": "blitzle",
    "height": 8,
    "weight": 298,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/522.png",
    "types": [
      "electric"
    ],
    "baseExperience": 59,
    "abilities": [
      {
        "name": "lightning-rod",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "motor-drive",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "sap-sipper",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 523,
    "name": "zebstrika",
    "height": 16,
    "weight": 795,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/523.png",
    "types": [
      "electric"
    ],
    "baseExperience": 174,
    "abilities": [
      {
        "name": "lightning-rod",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "motor-drive",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "sap-sipper",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 524,
    "name": "roggenrola",
    "height": 4,
    "weight": 180,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/524.png",
    "types": [
      "rock"
    ],
    "baseExperience": 56,
    "abilities": [
      {
        "name": "sturdy",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "weak-armor",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "sand-force",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 525,
    "name": "boldore",
    "height": 9,
    "weight": 1020,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/525.png",
    "types": [
      "rock"
    ],
    "baseExperience": 137,
    "abilities": [
      {
        "name": "sturdy",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "weak-armor",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "sand-force",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 526,
    "name": "gigalith",
    "height": 17,
    "weight": 2600,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/526.png",
    "types": [
      "rock"
    ],
    "baseExperience": 232,
    "abilities": [
      {
        "name": "sturdy",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sand-stream",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "sand-force",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 527,
    "name": "woobat",
    "height": 4,
    "weight": 21,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/527.png",
    "types": [
      "psychic",
      "flying"
    ],
    "baseExperience": 65,
    "abilities": [
      {
        "name": "unaware",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "klutz",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "simple",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 528,
    "name": "swoobat",
    "height": 9,
    "weight": 105,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/528.png",
    "types": [
      "psychic",
      "flying"
    ],
    "baseExperience": 149,
    "abilities": [
      {
        "name": "unaware",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "klutz",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "simple",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 529,
    "name": "drilbur",
    "height": 3,
    "weight": 85,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/529.png",
    "types": [
      "ground"
    ],
    "baseExperience": 66,
    "abilities": [
      {
        "name": "sand-rush",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sand-force",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "mold-breaker",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 530,
    "name": "excadrill",
    "height": 7,
    "weight": 404,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/530.png",
    "types": [
      "ground",
      "steel"
    ],
    "baseExperience": 178,
    "abilities": [
      {
        "name": "sand-rush",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sand-force",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "mold-breaker",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 531,
    "name": "audino",
    "height": 11,
    "weight": 310,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/531.png",
    "types": [
      "normal"
    ],
    "baseExperience": 390,
    "abilities": [
      {
        "name": "healer",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "regenerator",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "klutz",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 532,
    "name": "timburr",
    "height": 6,
    "weight": 125,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/532.png",
    "types": [
      "fighting"
    ],
    "baseExperience": 61,
    "abilities": [
      {
        "name": "guts",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sheer-force",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "iron-fist",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 533,
    "name": "gurdurr",
    "height": 12,
    "weight": 400,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/533.png",
    "types": [
      "fighting"
    ],
    "baseExperience": 142,
    "abilities": [
      {
        "name": "guts",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sheer-force",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "iron-fist",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 534,
    "name": "conkeldurr",
    "height": 14,
    "weight": 870,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/534.png",
    "types": [
      "fighting"
    ],
    "baseExperience": 227,
    "abilities": [
      {
        "name": "guts",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sheer-force",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "iron-fist",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 535,
    "name": "tympole",
    "height": 5,
    "weight": 45,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/535.png",
    "types": [
      "water"
    ],
    "baseExperience": 59,
    "abilities": [
      {
        "name": "swift-swim",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "hydration",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "water-absorb",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 536,
    "name": "palpitoad",
    "height": 8,
    "weight": 170,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/536.png",
    "types": [
      "water",
      "ground"
    ],
    "baseExperience": 134,
    "abilities": [
      {
        "name": "swift-swim",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "hydration",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "water-absorb",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 537,
    "name": "seismitoad",
    "height": 15,
    "weight": 620,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/537.png",
    "types": [
      "water",
      "ground"
    ],
    "baseExperience": 229,
    "abilities": [
      {
        "name": "swift-swim",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "poison-touch",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "water-absorb",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 538,
    "name": "throh",
    "height": 13,
    "weight": 555,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/538.png",
    "types": [
      "fighting"
    ],
    "baseExperience": 163,
    "abilities": [
      {
        "name": "guts",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "inner-focus",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "mold-breaker",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 539,
    "name": "sawk",
    "height": 14,
    "weight": 510,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/539.png",
    "types": [
      "fighting"
    ],
    "baseExperience": 163,
    "abilities": [
      {
        "name": "sturdy",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "inner-focus",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "mold-breaker",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 540,
    "name": "sewaddle",
    "height": 3,
    "weight": 25,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/540.png",
    "types": [
      "bug",
      "grass"
    ],
    "baseExperience": 62,
    "abilities": [
      {
        "name": "swarm",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "chlorophyll",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "overcoat",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 541,
    "name": "swadloon",
    "height": 5,
    "weight": 73,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/541.png",
    "types": [
      "bug",
      "grass"
    ],
    "baseExperience": 133,
    "abilities": [
      {
        "name": "leaf-guard",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "chlorophyll",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "overcoat",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 542,
    "name": "leavanny",
    "height": 12,
    "weight": 205,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/542.png",
    "types": [
      "bug",
      "grass"
    ],
    "baseExperience": 225,
    "abilities": [
      {
        "name": "swarm",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "chlorophyll",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "overcoat",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 543,
    "name": "venipede",
    "height": 4,
    "weight": 53,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/543.png",
    "types": [
      "bug",
      "poison"
    ],
    "baseExperience": 52,
    "abilities": [
      {
        "name": "poison-point",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "swarm",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "speed-boost",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 544,
    "name": "whirlipede",
    "height": 12,
    "weight": 585,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/544.png",
    "types": [
      "bug",
      "poison"
    ],
    "baseExperience": 126,
    "abilities": [
      {
        "name": "poison-point",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "swarm",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "speed-boost",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 545,
    "name": "scolipede",
    "height": 25,
    "weight": 2005,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/545.png",
    "types": [
      "bug",
      "poison"
    ],
    "baseExperience": 218,
    "abilities": [
      {
        "name": "poison-point",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "swarm",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "speed-boost",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 546,
    "name": "cottonee",
    "height": 3,
    "weight": 6,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/546.png",
    "types": [
      "grass",
      "fairy"
    ],
    "baseExperience": 56,
    "abilities": [
      {
        "name": "prankster",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "infiltrator",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "chlorophyll",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 547,
    "name": "whimsicott",
    "height": 7,
    "weight": 66,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/547.png",
    "types": [
      "grass",
      "fairy"
    ],
    "baseExperience": 168,
    "abilities": [
      {
        "name": "prankster",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "infiltrator",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "chlorophyll",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 548,
    "name": "petilil",
    "height": 5,
    "weight": 66,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/548.png",
    "types": [
      "grass"
    ],
    "baseExperience": 56,
    "abilities": [
      {
        "name": "chlorophyll",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "own-tempo",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "leaf-guard",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 549,
    "name": "lilligant",
    "height": 11,
    "weight": 163,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/549.png",
    "types": [
      "grass"
    ],
    "baseExperience": 168,
    "abilities": [
      {
        "name": "chlorophyll",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "own-tempo",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "leaf-guard",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 550,
    "name": "basculin-red-striped",
    "height": 10,
    "weight": 180,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/550.png",
    "types": [
      "water"
    ],
    "baseExperience": 161,
    "abilities": [
      {
        "name": "reckless",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "adaptability",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "mold-breaker",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 551,
    "name": "sandile",
    "height": 7,
    "weight": 152,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/551.png",
    "types": [
      "ground",
      "dark"
    ],
    "baseExperience": 58,
    "abilities": [
      {
        "name": "intimidate",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "moxie",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "anger-point",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 552,
    "name": "krokorok",
    "height": 10,
    "weight": 334,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/552.png",
    "types": [
      "ground",
      "dark"
    ],
    "baseExperience": 123,
    "abilities": [
      {
        "name": "intimidate",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "moxie",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "anger-point",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 553,
    "name": "krookodile",
    "height": 15,
    "weight": 963,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/553.png",
    "types": [
      "ground",
      "dark"
    ],
    "baseExperience": 234,
    "abilities": [
      {
        "name": "intimidate",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "moxie",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "anger-point",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 554,
    "name": "darumaka",
    "height": 6,
    "weight": 375,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/554.png",
    "types": [
      "fire"
    ],
    "baseExperience": 63,
    "abilities": [
      {
        "name": "hustle",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "inner-focus",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 555,
    "name": "darmanitan-standard",
    "height": 13,
    "weight": 929,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/555.png",
    "types": [
      "fire"
    ],
    "baseExperience": 168,
    "abilities": [
      {
        "name": "sheer-force",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "zen-mode",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 556,
    "name": "maractus",
    "height": 10,
    "weight": 280,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/556.png",
    "types": [
      "grass"
    ],
    "baseExperience": 161,
    "abilities": [
      {
        "name": "water-absorb",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "chlorophyll",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "storm-drain",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 557,
    "name": "dwebble",
    "height": 3,
    "weight": 145,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/557.png",
    "types": [
      "bug",
      "rock"
    ],
    "baseExperience": 65,
    "abilities": [
      {
        "name": "sturdy",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "shell-armor",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "weak-armor",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 558,
    "name": "crustle",
    "height": 14,
    "weight": 2000,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/558.png",
    "types": [
      "bug",
      "rock"
    ],
    "baseExperience": 170,
    "abilities": [
      {
        "name": "sturdy",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "shell-armor",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "weak-armor",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 559,
    "name": "scraggy",
    "height": 6,
    "weight": 118,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/559.png",
    "types": [
      "dark",
      "fighting"
    ],
    "baseExperience": 70,
    "abilities": [
      {
        "name": "shed-skin",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "moxie",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "intimidate",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 560,
    "name": "scrafty",
    "height": 11,
    "weight": 300,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/560.png",
    "types": [
      "dark",
      "fighting"
    ],
    "baseExperience": 171,
    "abilities": [
      {
        "name": "shed-skin",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "moxie",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "intimidate",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 561,
    "name": "sigilyph",
    "height": 14,
    "weight": 140,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/561.png",
    "types": [
      "psychic",
      "flying"
    ],
    "baseExperience": 172,
    "abilities": [
      {
        "name": "wonder-skin",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "magic-guard",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "tinted-lens",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 562,
    "name": "yamask",
    "height": 5,
    "weight": 15,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/562.png",
    "types": [
      "ghost"
    ],
    "baseExperience": 61,
    "abilities": [
      {
        "name": "mummy",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 563,
    "name": "cofagrigus",
    "height": 17,
    "weight": 765,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/563.png",
    "types": [
      "ghost"
    ],
    "baseExperience": 169,
    "abilities": [
      {
        "name": "mummy",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 564,
    "name": "tirtouga",
    "height": 7,
    "weight": 165,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/564.png",
    "types": [
      "water",
      "rock"
    ],
    "baseExperience": 71,
    "abilities": [
      {
        "name": "solid-rock",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sturdy",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "swift-swim",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 565,
    "name": "carracosta",
    "height": 12,
    "weight": 810,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/565.png",
    "types": [
      "water",
      "rock"
    ],
    "baseExperience": 173,
    "abilities": [
      {
        "name": "solid-rock",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sturdy",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "swift-swim",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 566,
    "name": "archen",
    "height": 5,
    "weight": 95,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/566.png",
    "types": [
      "rock",
      "flying"
    ],
    "baseExperience": 71,
    "abilities": [
      {
        "name": "defeatist",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 567,
    "name": "archeops",
    "height": 14,
    "weight": 320,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/567.png",
    "types": [
      "rock",
      "flying"
    ],
    "baseExperience": 177,
    "abilities": [
      {
        "name": "defeatist",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 568,
    "name": "trubbish",
    "height": 6,
    "weight": 310,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/568.png",
    "types": [
      "poison"
    ],
    "baseExperience": 66,
    "abilities": [
      {
        "name": "stench",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sticky-hold",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "aftermath",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 569,
    "name": "garbodor",
    "height": 19,
    "weight": 1073,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/569.png",
    "types": [
      "poison"
    ],
    "baseExperience": 166,
    "abilities": [
      {
        "name": "stench",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "weak-armor",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "aftermath",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 570,
    "name": "zorua",
    "height": 7,
    "weight": 125,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/570.png",
    "types": [
      "dark"
    ],
    "baseExperience": 66,
    "abilities": [
      {
        "name": "illusion",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 571,
    "name": "zoroark",
    "height": 16,
    "weight": 811,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/571.png",
    "types": [
      "dark"
    ],
    "baseExperience": 179,
    "abilities": [
      {
        "name": "illusion",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 572,
    "name": "minccino",
    "height": 4,
    "weight": 58,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/572.png",
    "types": [
      "normal"
    ],
    "baseExperience": 60,
    "abilities": [
      {
        "name": "cute-charm",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "technician",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "skill-link",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 573,
    "name": "cinccino",
    "height": 5,
    "weight": 75,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/573.png",
    "types": [
      "normal"
    ],
    "baseExperience": 165,
    "abilities": [
      {
        "name": "cute-charm",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "technician",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "skill-link",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 574,
    "name": "gothita",
    "height": 4,
    "weight": 58,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/574.png",
    "types": [
      "psychic"
    ],
    "baseExperience": 58,
    "abilities": [
      {
        "name": "frisk",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "competitive",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "shadow-tag",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 575,
    "name": "gothorita",
    "height": 7,
    "weight": 180,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/575.png",
    "types": [
      "psychic"
    ],
    "baseExperience": 137,
    "abilities": [
      {
        "name": "frisk",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "competitive",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "shadow-tag",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 576,
    "name": "gothitelle",
    "height": 15,
    "weight": 440,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/576.png",
    "types": [
      "psychic"
    ],
    "baseExperience": 221,
    "abilities": [
      {
        "name": "frisk",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "competitive",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "shadow-tag",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 577,
    "name": "solosis",
    "height": 3,
    "weight": 10,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/577.png",
    "types": [
      "psychic"
    ],
    "baseExperience": 58,
    "abilities": [
      {
        "name": "overcoat",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "magic-guard",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "regenerator",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 578,
    "name": "duosion",
    "height": 6,
    "weight": 80,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/578.png",
    "types": [
      "psychic"
    ],
    "baseExperience": 130,
    "abilities": [
      {
        "name": "overcoat",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "magic-guard",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "regenerator",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 579,
    "name": "reuniclus",
    "height": 10,
    "weight": 201,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/579.png",
    "types": [
      "psychic"
    ],
    "baseExperience": 221,
    "abilities": [
      {
        "name": "overcoat",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "magic-guard",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "regenerator",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 580,
    "name": "ducklett",
    "height": 5,
    "weight": 55,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/580.png",
    "types": [
      "water",
      "flying"
    ],
    "baseExperience": 61,
    "abilities": [
      {
        "name": "keen-eye",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "big-pecks",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "hydration",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 581,
    "name": "swanna",
    "height": 13,
    "weight": 242,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/581.png",
    "types": [
      "water",
      "flying"
    ],
    "baseExperience": 166,
    "abilities": [
      {
        "name": "keen-eye",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "big-pecks",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "hydration",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 582,
    "name": "vanillite",
    "height": 4,
    "weight": 57,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/582.png",
    "types": [
      "ice"
    ],
    "baseExperience": 61,
    "abilities": [
      {
        "name": "ice-body",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "snow-cloak",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "weak-armor",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 583,
    "name": "vanillish",
    "height": 11,
    "weight": 410,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/583.png",
    "types": [
      "ice"
    ],
    "baseExperience": 138,
    "abilities": [
      {
        "name": "ice-body",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "snow-cloak",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "weak-armor",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 584,
    "name": "vanilluxe",
    "height": 13,
    "weight": 575,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/584.png",
    "types": [
      "ice"
    ],
    "baseExperience": 241,
    "abilities": [
      {
        "name": "ice-body",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "snow-warning",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "weak-armor",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 585,
    "name": "deerling",
    "height": 6,
    "weight": 195,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/585.png",
    "types": [
      "normal",
      "grass"
    ],
    "baseExperience": 67,
    "abilities": [
      {
        "name": "chlorophyll",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sap-sipper",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "serene-grace",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 586,
    "name": "sawsbuck",
    "height": 19,
    "weight": 925,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/586.png",
    "types": [
      "normal",
      "grass"
    ],
    "baseExperience": 166,
    "abilities": [
      {
        "name": "chlorophyll",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sap-sipper",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "serene-grace",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 587,
    "name": "emolga",
    "height": 4,
    "weight": 50,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/587.png",
    "types": [
      "electric",
      "flying"
    ],
    "baseExperience": 150,
    "abilities": [
      {
        "name": "static",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "motor-drive",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 588,
    "name": "karrablast",
    "height": 5,
    "weight": 59,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/588.png",
    "types": [
      "bug"
    ],
    "baseExperience": 63,
    "abilities": [
      {
        "name": "swarm",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "shed-skin",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "no-guard",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 589,
    "name": "escavalier",
    "height": 10,
    "weight": 330,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/589.png",
    "types": [
      "bug",
      "steel"
    ],
    "baseExperience": 173,
    "abilities": [
      {
        "name": "swarm",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "shell-armor",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "overcoat",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 590,
    "name": "foongus",
    "height": 2,
    "weight": 10,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/590.png",
    "types": [
      "grass",
      "poison"
    ],
    "baseExperience": 59,
    "abilities": [
      {
        "name": "effect-spore",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "regenerator",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 591,
    "name": "amoonguss",
    "height": 6,
    "weight": 105,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/591.png",
    "types": [
      "grass",
      "poison"
    ],
    "baseExperience": 162,
    "abilities": [
      {
        "name": "effect-spore",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "regenerator",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 592,
    "name": "frillish",
    "height": 12,
    "weight": 330,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/592.png",
    "types": [
      "water",
      "ghost"
    ],
    "baseExperience": 67,
    "abilities": [
      {
        "name": "water-absorb",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "cursed-body",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "damp",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 593,
    "name": "jellicent",
    "height": 22,
    "weight": 1350,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/593.png",
    "types": [
      "water",
      "ghost"
    ],
    "baseExperience": 168,
    "abilities": [
      {
        "name": "water-absorb",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "cursed-body",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "damp",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 594,
    "name": "alomomola",
    "height": 12,
    "weight": 316,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/594.png",
    "types": [
      "water"
    ],
    "baseExperience": 165,
    "abilities": [
      {
        "name": "healer",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "hydration",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "regenerator",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 595,
    "name": "joltik",
    "height": 1,
    "weight": 6,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/595.png",
    "types": [
      "bug",
      "electric"
    ],
    "baseExperience": 64,
    "abilities": [
      {
        "name": "compound-eyes",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "unnerve",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "swarm",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 596,
    "name": "galvantula",
    "height": 8,
    "weight": 143,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/596.png",
    "types": [
      "bug",
      "electric"
    ],
    "baseExperience": 165,
    "abilities": [
      {
        "name": "compound-eyes",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "unnerve",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "swarm",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 597,
    "name": "ferroseed",
    "height": 6,
    "weight": 188,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/597.png",
    "types": [
      "grass",
      "steel"
    ],
    "baseExperience": 61,
    "abilities": [
      {
        "name": "iron-barbs",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 598,
    "name": "ferrothorn",
    "height": 10,
    "weight": 1100,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/598.png",
    "types": [
      "grass",
      "steel"
    ],
    "baseExperience": 171,
    "abilities": [
      {
        "name": "iron-barbs",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "anticipation",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 599,
    "name": "klink",
    "height": 3,
    "weight": 210,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/599.png",
    "types": [
      "steel"
    ],
    "baseExperience": 60,
    "abilities": [
      {
        "name": "plus",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "minus",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "clear-body",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 600,
    "name": "klang",
    "height": 6,
    "weight": 510,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/600.png",
    "types": [
      "steel"
    ],
    "baseExperience": 154,
    "abilities": [
      {
        "name": "plus",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "minus",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "clear-body",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 601,
    "name": "klinklang",
    "height": 6,
    "weight": 810,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/601.png",
    "types": [
      "steel"
    ],
    "baseExperience": 234,
    "abilities": [
      {
        "name": "plus",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "minus",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "clear-body",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 602,
    "name": "tynamo",
    "height": 2,
    "weight": 3,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/602.png",
    "types": [
      "electric"
    ],
    "baseExperience": 55,
    "abilities": [
      {
        "name": "levitate",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 603,
    "name": "eelektrik",
    "height": 12,
    "weight": 220,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/603.png",
    "types": [
      "electric"
    ],
    "baseExperience": 142,
    "abilities": [
      {
        "name": "levitate",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 604,
    "name": "eelektross",
    "height": 21,
    "weight": 805,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/604.png",
    "types": [
      "electric"
    ],
    "baseExperience": 232,
    "abilities": [
      {
        "name": "levitate",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 605,
    "name": "elgyem",
    "height": 5,
    "weight": 90,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/605.png",
    "types": [
      "psychic"
    ],
    "baseExperience": 67,
    "abilities": [
      {
        "name": "telepathy",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "synchronize",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "analytic",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 606,
    "name": "beheeyem",
    "height": 10,
    "weight": 345,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/606.png",
    "types": [
      "psychic"
    ],
    "baseExperience": 170,
    "abilities": [
      {
        "name": "telepathy",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "synchronize",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "analytic",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 607,
    "name": "litwick",
    "height": 3,
    "weight": 31,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/607.png",
    "types": [
      "ghost",
      "fire"
    ],
    "baseExperience": 55,
    "abilities": [
      {
        "name": "flash-fire",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "flame-body",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "infiltrator",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 608,
    "name": "lampent",
    "height": 6,
    "weight": 130,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/608.png",
    "types": [
      "ghost",
      "fire"
    ],
    "baseExperience": 130,
    "abilities": [
      {
        "name": "flash-fire",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "flame-body",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "infiltrator",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 609,
    "name": "chandelure",
    "height": 10,
    "weight": 343,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/609.png",
    "types": [
      "ghost",
      "fire"
    ],
    "baseExperience": 234,
    "abilities": [
      {
        "name": "flash-fire",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "flame-body",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "infiltrator",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 610,
    "name": "axew",
    "height": 6,
    "weight": 180,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/610.png",
    "types": [
      "dragon"
    ],
    "baseExperience": 64,
    "abilities": [
      {
        "name": "rivalry",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "mold-breaker",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "unnerve",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 611,
    "name": "fraxure",
    "height": 10,
    "weight": 360,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/611.png",
    "types": [
      "dragon"
    ],
    "baseExperience": 144,
    "abilities": [
      {
        "name": "rivalry",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "mold-breaker",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "unnerve",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 612,
    "name": "haxorus",
    "height": 18,
    "weight": 1055,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/612.png",
    "types": [
      "dragon"
    ],
    "baseExperience": 243,
    "abilities": [
      {
        "name": "rivalry",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "mold-breaker",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "unnerve",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 613,
    "name": "cubchoo",
    "height": 5,
    "weight": 85,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/613.png",
    "types": [
      "ice"
    ],
    "baseExperience": 61,
    "abilities": [
      {
        "name": "snow-cloak",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "slush-rush",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "rattled",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 614,
    "name": "beartic",
    "height": 26,
    "weight": 2600,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/614.png",
    "types": [
      "ice"
    ],
    "baseExperience": 177,
    "abilities": [
      {
        "name": "snow-cloak",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "slush-rush",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "swift-swim",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 615,
    "name": "cryogonal",
    "height": 11,
    "weight": 1480,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/615.png",
    "types": [
      "ice"
    ],
    "baseExperience": 180,
    "abilities": [
      {
        "name": "levitate",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 616,
    "name": "shelmet",
    "height": 4,
    "weight": 77,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/616.png",
    "types": [
      "bug"
    ],
    "baseExperience": 61,
    "abilities": [
      {
        "name": "hydration",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "shell-armor",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "overcoat",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 617,
    "name": "accelgor",
    "height": 8,
    "weight": 253,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/617.png",
    "types": [
      "bug"
    ],
    "baseExperience": 173,
    "abilities": [
      {
        "name": "hydration",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sticky-hold",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "unburden",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 618,
    "name": "stunfisk",
    "height": 7,
    "weight": 110,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/618.png",
    "types": [
      "ground",
      "electric"
    ],
    "baseExperience": 165,
    "abilities": [
      {
        "name": "static",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "limber",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "sand-veil",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 619,
    "name": "mienfoo",
    "height": 9,
    "weight": 200,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/619.png",
    "types": [
      "fighting"
    ],
    "baseExperience": 70,
    "abilities": [
      {
        "name": "inner-focus",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "regenerator",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "reckless",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 620,
    "name": "mienshao",
    "height": 14,
    "weight": 355,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/620.png",
    "types": [
      "fighting"
    ],
    "baseExperience": 179,
    "abilities": [
      {
        "name": "inner-focus",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "regenerator",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "reckless",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 621,
    "name": "druddigon",
    "height": 16,
    "weight": 1390,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/621.png",
    "types": [
      "dragon"
    ],
    "baseExperience": 170,
    "abilities": [
      {
        "name": "rough-skin",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sheer-force",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "mold-breaker",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 622,
    "name": "golett",
    "height": 10,
    "weight": 920,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/622.png",
    "types": [
      "ground",
      "ghost"
    ],
    "baseExperience": 61,
    "abilities": [
      {
        "name": "iron-fist",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "klutz",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "no-guard",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 623,
    "name": "golurk",
    "height": 28,
    "weight": 3300,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/623.png",
    "types": [
      "ground",
      "ghost"
    ],
    "baseExperience": 169,
    "abilities": [
      {
        "name": "iron-fist",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "klutz",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "no-guard",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 624,
    "name": "pawniard",
    "height": 5,
    "weight": 102,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/624.png",
    "types": [
      "dark",
      "steel"
    ],
    "baseExperience": 68,
    "abilities": [
      {
        "name": "defiant",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "inner-focus",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "pressure",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 625,
    "name": "bisharp",
    "height": 16,
    "weight": 700,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/625.png",
    "types": [
      "dark",
      "steel"
    ],
    "baseExperience": 172,
    "abilities": [
      {
        "name": "defiant",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "inner-focus",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "pressure",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 626,
    "name": "bouffalant",
    "height": 16,
    "weight": 946,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/626.png",
    "types": [
      "normal"
    ],
    "baseExperience": 172,
    "abilities": [
      {
        "name": "reckless",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sap-sipper",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "soundproof",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 627,
    "name": "rufflet",
    "height": 5,
    "weight": 105,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/627.png",
    "types": [
      "normal",
      "flying"
    ],
    "baseExperience": 70,
    "abilities": [
      {
        "name": "keen-eye",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sheer-force",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "hustle",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 628,
    "name": "braviary",
    "height": 15,
    "weight": 410,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/628.png",
    "types": [
      "normal",
      "flying"
    ],
    "baseExperience": 179,
    "abilities": [
      {
        "name": "keen-eye",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sheer-force",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "defiant",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 629,
    "name": "vullaby",
    "height": 5,
    "weight": 90,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/629.png",
    "types": [
      "dark",
      "flying"
    ],
    "baseExperience": 74,
    "abilities": [
      {
        "name": "big-pecks",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "overcoat",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "weak-armor",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 630,
    "name": "mandibuzz",
    "height": 12,
    "weight": 395,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/630.png",
    "types": [
      "dark",
      "flying"
    ],
    "baseExperience": 179,
    "abilities": [
      {
        "name": "big-pecks",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "overcoat",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "weak-armor",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 631,
    "name": "heatmor",
    "height": 14,
    "weight": 580,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/631.png",
    "types": [
      "fire"
    ],
    "baseExperience": 169,
    "abilities": [
      {
        "name": "gluttony",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "flash-fire",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "white-smoke",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 632,
    "name": "durant",
    "height": 3,
    "weight": 330,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/632.png",
    "types": [
      "bug",
      "steel"
    ],
    "baseExperience": 169,
    "abilities": [
      {
        "name": "swarm",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "hustle",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "truant",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 633,
    "name": "deino",
    "height": 8,
    "weight": 173,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/633.png",
    "types": [
      "dark",
      "dragon"
    ],
    "baseExperience": 60,
    "abilities": [
      {
        "name": "hustle",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 634,
    "name": "zweilous",
    "height": 14,
    "weight": 500,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/634.png",
    "types": [
      "dark",
      "dragon"
    ],
    "baseExperience": 147,
    "abilities": [
      {
        "name": "hustle",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 635,
    "name": "hydreigon",
    "height": 18,
    "weight": 1600,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/635.png",
    "types": [
      "dark",
      "dragon"
    ],
    "baseExperience": 270,
    "abilities": [
      {
        "name": "levitate",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 636,
    "name": "larvesta",
    "height": 11,
    "weight": 288,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/636.png",
    "types": [
      "bug",
      "fire"
    ],
    "baseExperience": 72,
    "abilities": [
      {
        "name": "flame-body",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "swarm",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 637,
    "name": "volcarona",
    "height": 16,
    "weight": 460,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/637.png",
    "types": [
      "bug",
      "fire"
    ],
    "baseExperience": 248,
    "abilities": [
      {
        "name": "flame-body",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "swarm",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 638,
    "name": "cobalion",
    "height": 21,
    "weight": 2500,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/638.png",
    "types": [
      "steel",
      "fighting"
    ],
    "baseExperience": 261,
    "abilities": [
      {
        "name": "justified",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 639,
    "name": "terrakion",
    "height": 19,
    "weight": 2600,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/639.png",
    "types": [
      "rock",
      "fighting"
    ],
    "baseExperience": 261,
    "abilities": [
      {
        "name": "justified",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 640,
    "name": "virizion",
    "height": 20,
    "weight": 2000,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/640.png",
    "types": [
      "grass",
      "fighting"
    ],
    "baseExperience": 261,
    "abilities": [
      {
        "name": "justified",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 641,
    "name": "tornadus-incarnate",
    "height": 15,
    "weight": 630,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/641.png",
    "types": [
      "flying"
    ],
    "baseExperience": 261,
    "abilities": [
      {
        "name": "prankster",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "defiant",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 642,
    "name": "thundurus-incarnate",
    "height": 15,
    "weight": 610,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/642.png",
    "types": [
      "electric",
      "flying"
    ],
    "baseExperience": 261,
    "abilities": [
      {
        "name": "prankster",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "defiant",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 643,
    "name": "reshiram",
    "height": 32,
    "weight": 3300,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/643.png",
    "types": [
      "dragon",
      "fire"
    ],
    "baseExperience": 306,
    "abilities": [
      {
        "name": "turboblaze",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 644,
    "name": "zekrom",
    "height": 29,
    "weight": 3450,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/644.png",
    "types": [
      "dragon",
      "electric"
    ],
    "baseExperience": 306,
    "abilities": [
      {
        "name": "teravolt",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 645,
    "name": "landorus-incarnate",
    "height": 15,
    "weight": 680,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/645.png",
    "types": [
      "ground",
      "flying"
    ],
    "baseExperience": 270,
    "abilities": [
      {
        "name": "sand-force",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sheer-force",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 646,
    "name": "kyurem",
    "height": 30,
    "weight": 3250,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/646.png",
    "types": [
      "dragon",
      "ice"
    ],
    "baseExperience": 297,
    "abilities": [
      {
        "name": "pressure",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 647,
    "name": "keldeo-ordinary",
    "height": 14,
    "weight": 485,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/647.png",
    "types": [
      "water",
      "fighting"
    ],
    "baseExperience": 261,
    "abilities": [
      {
        "name": "justified",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 648,
    "name": "meloetta-aria",
    "height": 6,
    "weight": 65,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/648.png",
    "types": [
      "normal",
      "psychic"
    ],
    "baseExperience": 270,
    "abilities": [
      {
        "name": "serene-grace",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 649,
    "name": "genesect",
    "height": 15,
    "weight": 825,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/649.png",
    "types": [
      "bug",
      "steel"
    ],
    "baseExperience": 270,
    "abilities": [
      {
        "name": "download",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 650,
    "name": "chespin",
    "height": 4,
    "weight": 90,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/650.png",
    "types": [
      "grass"
    ],
    "baseExperience": 63,
    "abilities": [
      {
        "name": "overgrow",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "bulletproof",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 651,
    "name": "quilladin",
    "height": 7,
    "weight": 290,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/651.png",
    "types": [
      "grass"
    ],
    "baseExperience": 142,
    "abilities": [
      {
        "name": "overgrow",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "bulletproof",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 652,
    "name": "chesnaught",
    "height": 16,
    "weight": 900,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/652.png",
    "types": [
      "grass",
      "fighting"
    ],
    "baseExperience": 239,
    "abilities": [
      {
        "name": "overgrow",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "bulletproof",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 653,
    "name": "fennekin",
    "height": 4,
    "weight": 94,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/653.png",
    "types": [
      "fire"
    ],
    "baseExperience": 61,
    "abilities": [
      {
        "name": "blaze",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "magician",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 654,
    "name": "braixen",
    "height": 10,
    "weight": 145,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/654.png",
    "types": [
      "fire"
    ],
    "baseExperience": 143,
    "abilities": [
      {
        "name": "blaze",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "magician",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 655,
    "name": "delphox",
    "height": 15,
    "weight": 390,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/655.png",
    "types": [
      "fire",
      "psychic"
    ],
    "baseExperience": 240,
    "abilities": [
      {
        "name": "blaze",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "magician",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 656,
    "name": "froakie",
    "height": 3,
    "weight": 70,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/656.png",
    "types": [
      "water"
    ],
    "baseExperience": 63,
    "abilities": [
      {
        "name": "torrent",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "protean",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 657,
    "name": "frogadier",
    "height": 6,
    "weight": 109,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/657.png",
    "types": [
      "water"
    ],
    "baseExperience": 142,
    "abilities": [
      {
        "name": "torrent",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "protean",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 658,
    "name": "greninja",
    "height": 15,
    "weight": 400,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/658.png",
    "types": [
      "water",
      "dark"
    ],
    "baseExperience": 239,
    "abilities": [
      {
        "name": "torrent",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "protean",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 659,
    "name": "bunnelby",
    "height": 4,
    "weight": 50,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/659.png",
    "types": [
      "normal"
    ],
    "baseExperience": 47,
    "abilities": [
      {
        "name": "pickup",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "cheek-pouch",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "huge-power",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 660,
    "name": "diggersby",
    "height": 10,
    "weight": 424,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/660.png",
    "types": [
      "normal",
      "ground"
    ],
    "baseExperience": 148,
    "abilities": [
      {
        "name": "pickup",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "cheek-pouch",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "huge-power",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 661,
    "name": "fletchling",
    "height": 3,
    "weight": 17,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/661.png",
    "types": [
      "normal",
      "flying"
    ],
    "baseExperience": 56,
    "abilities": [
      {
        "name": "big-pecks",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "gale-wings",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 662,
    "name": "fletchinder",
    "height": 7,
    "weight": 160,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/662.png",
    "types": [
      "fire",
      "flying"
    ],
    "baseExperience": 134,
    "abilities": [
      {
        "name": "flame-body",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "gale-wings",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 663,
    "name": "talonflame",
    "height": 12,
    "weight": 245,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/663.png",
    "types": [
      "fire",
      "flying"
    ],
    "baseExperience": 175,
    "abilities": [
      {
        "name": "flame-body",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "gale-wings",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 664,
    "name": "scatterbug",
    "height": 3,
    "weight": 25,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/664.png",
    "types": [
      "bug"
    ],
    "baseExperience": 40,
    "abilities": [
      {
        "name": "shield-dust",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "compound-eyes",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "friend-guard",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 665,
    "name": "spewpa",
    "height": 3,
    "weight": 84,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/665.png",
    "types": [
      "bug"
    ],
    "baseExperience": 75,
    "abilities": [
      {
        "name": "shed-skin",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "friend-guard",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 666,
    "name": "vivillon",
    "height": 12,
    "weight": 170,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/666.png",
    "types": [
      "bug",
      "flying"
    ],
    "baseExperience": 185,
    "abilities": [
      {
        "name": "shield-dust",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "compound-eyes",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "friend-guard",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 667,
    "name": "litleo",
    "height": 6,
    "weight": 135,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/667.png",
    "types": [
      "fire",
      "normal"
    ],
    "baseExperience": 74,
    "abilities": [
      {
        "name": "rivalry",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "unnerve",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "moxie",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 668,
    "name": "pyroar",
    "height": 15,
    "weight": 815,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/668.png",
    "types": [
      "fire",
      "normal"
    ],
    "baseExperience": 177,
    "abilities": [
      {
        "name": "rivalry",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "unnerve",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "moxie",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 669,
    "name": "flabebe",
    "height": 1,
    "weight": 1,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/669.png",
    "types": [
      "fairy"
    ],
    "baseExperience": 61,
    "abilities": [
      {
        "name": "flower-veil",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "symbiosis",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 670,
    "name": "floette",
    "height": 2,
    "weight": 9,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/670.png",
    "types": [
      "fairy"
    ],
    "baseExperience": 130,
    "abilities": [
      {
        "name": "flower-veil",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "symbiosis",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 671,
    "name": "florges",
    "height": 11,
    "weight": 100,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/671.png",
    "types": [
      "fairy"
    ],
    "baseExperience": 248,
    "abilities": [
      {
        "name": "flower-veil",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "symbiosis",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 672,
    "name": "skiddo",
    "height": 9,
    "weight": 310,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/672.png",
    "types": [
      "grass"
    ],
    "baseExperience": 70,
    "abilities": [
      {
        "name": "sap-sipper",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "grass-pelt",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 673,
    "name": "gogoat",
    "height": 17,
    "weight": 910,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/673.png",
    "types": [
      "grass"
    ],
    "baseExperience": 186,
    "abilities": [
      {
        "name": "sap-sipper",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "grass-pelt",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 674,
    "name": "pancham",
    "height": 6,
    "weight": 80,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/674.png",
    "types": [
      "fighting"
    ],
    "baseExperience": 70,
    "abilities": [
      {
        "name": "iron-fist",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "mold-breaker",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "scrappy",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 675,
    "name": "pangoro",
    "height": 21,
    "weight": 1360,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/675.png",
    "types": [
      "fighting",
      "dark"
    ],
    "baseExperience": 173,
    "abilities": [
      {
        "name": "iron-fist",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "mold-breaker",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "scrappy",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 676,
    "name": "furfrou",
    "height": 12,
    "weight": 280,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/676.png",
    "types": [
      "normal"
    ],
    "baseExperience": 165,
    "abilities": [
      {
        "name": "fur-coat",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 677,
    "name": "espurr",
    "height": 3,
    "weight": 35,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/677.png",
    "types": [
      "psychic"
    ],
    "baseExperience": 71,
    "abilities": [
      {
        "name": "keen-eye",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "infiltrator",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "own-tempo",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 678,
    "name": "meowstic-male",
    "height": 6,
    "weight": 85,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/678.png",
    "types": [
      "psychic"
    ],
    "baseExperience": 163,
    "abilities": [
      {
        "name": "keen-eye",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "infiltrator",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "prankster",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 679,
    "name": "honedge",
    "height": 8,
    "weight": 20,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/679.png",
    "types": [
      "steel",
      "ghost"
    ],
    "baseExperience": 65,
    "abilities": [
      {
        "name": "no-guard",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 680,
    "name": "doublade",
    "height": 8,
    "weight": 45,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/680.png",
    "types": [
      "steel",
      "ghost"
    ],
    "baseExperience": 157,
    "abilities": [
      {
        "name": "no-guard",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 681,
    "name": "aegislash-shield",
    "height": 17,
    "weight": 530,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/681.png",
    "types": [
      "steel",
      "ghost"
    ],
    "baseExperience": 234,
    "abilities": [
      {
        "name": "stance-change",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 682,
    "name": "spritzee",
    "height": 2,
    "weight": 5,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/682.png",
    "types": [
      "fairy"
    ],
    "baseExperience": 68,
    "abilities": [
      {
        "name": "healer",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "aroma-veil",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 683,
    "name": "aromatisse",
    "height": 8,
    "weight": 155,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/683.png",
    "types": [
      "fairy"
    ],
    "baseExperience": 162,
    "abilities": [
      {
        "name": "healer",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "aroma-veil",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 684,
    "name": "swirlix",
    "height": 4,
    "weight": 35,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/684.png",
    "types": [
      "fairy"
    ],
    "baseExperience": 68,
    "abilities": [
      {
        "name": "sweet-veil",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "unburden",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 685,
    "name": "slurpuff",
    "height": 8,
    "weight": 50,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/685.png",
    "types": [
      "fairy"
    ],
    "baseExperience": 168,
    "abilities": [
      {
        "name": "sweet-veil",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "unburden",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 686,
    "name": "inkay",
    "height": 4,
    "weight": 35,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/686.png",
    "types": [
      "dark",
      "psychic"
    ],
    "baseExperience": 58,
    "abilities": [
      {
        "name": "contrary",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "suction-cups",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "infiltrator",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 687,
    "name": "malamar",
    "height": 15,
    "weight": 470,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/687.png",
    "types": [
      "dark",
      "psychic"
    ],
    "baseExperience": 169,
    "abilities": [
      {
        "name": "contrary",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "suction-cups",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "infiltrator",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 688,
    "name": "binacle",
    "height": 5,
    "weight": 310,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/688.png",
    "types": [
      "rock",
      "water"
    ],
    "baseExperience": 61,
    "abilities": [
      {
        "name": "tough-claws",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sniper",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "pickpocket",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 689,
    "name": "barbaracle",
    "height": 13,
    "weight": 960,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/689.png",
    "types": [
      "rock",
      "water"
    ],
    "baseExperience": 175,
    "abilities": [
      {
        "name": "tough-claws",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sniper",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "pickpocket",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 690,
    "name": "skrelp",
    "height": 5,
    "weight": 73,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/690.png",
    "types": [
      "poison",
      "water"
    ],
    "baseExperience": 64,
    "abilities": [
      {
        "name": "poison-point",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "poison-touch",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "adaptability",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 691,
    "name": "dragalge",
    "height": 18,
    "weight": 815,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/691.png",
    "types": [
      "poison",
      "dragon"
    ],
    "baseExperience": 173,
    "abilities": [
      {
        "name": "poison-point",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "poison-touch",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "adaptability",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 692,
    "name": "clauncher",
    "height": 5,
    "weight": 83,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/692.png",
    "types": [
      "water"
    ],
    "baseExperience": 66,
    "abilities": [
      {
        "name": "mega-launcher",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 693,
    "name": "clawitzer",
    "height": 13,
    "weight": 353,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/693.png",
    "types": [
      "water"
    ],
    "baseExperience": 100,
    "abilities": [
      {
        "name": "mega-launcher",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 694,
    "name": "helioptile",
    "height": 5,
    "weight": 60,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/694.png",
    "types": [
      "electric",
      "normal"
    ],
    "baseExperience": 58,
    "abilities": [
      {
        "name": "dry-skin",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sand-veil",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "solar-power",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 695,
    "name": "heliolisk",
    "height": 10,
    "weight": 210,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/695.png",
    "types": [
      "electric",
      "normal"
    ],
    "baseExperience": 168,
    "abilities": [
      {
        "name": "dry-skin",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sand-veil",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "solar-power",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 696,
    "name": "tyrunt",
    "height": 8,
    "weight": 260,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/696.png",
    "types": [
      "rock",
      "dragon"
    ],
    "baseExperience": 72,
    "abilities": [
      {
        "name": "strong-jaw",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sturdy",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 697,
    "name": "tyrantrum",
    "height": 25,
    "weight": 2700,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/697.png",
    "types": [
      "rock",
      "dragon"
    ],
    "baseExperience": 182,
    "abilities": [
      {
        "name": "strong-jaw",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "rock-head",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 698,
    "name": "amaura",
    "height": 13,
    "weight": 252,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/698.png",
    "types": [
      "rock",
      "ice"
    ],
    "baseExperience": 72,
    "abilities": [
      {
        "name": "refrigerate",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "snow-warning",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 699,
    "name": "aurorus",
    "height": 27,
    "weight": 2250,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/699.png",
    "types": [
      "rock",
      "ice"
    ],
    "baseExperience": 104,
    "abilities": [
      {
        "name": "refrigerate",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "snow-warning",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 700,
    "name": "sylveon",
    "height": 10,
    "weight": 235,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/700.png",
    "types": [
      "fairy"
    ],
    "baseExperience": 184,
    "abilities": [
      {
        "name": "cute-charm",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "pixilate",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 701,
    "name": "hawlucha",
    "height": 8,
    "weight": 215,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/701.png",
    "types": [
      "fighting",
      "flying"
    ],
    "baseExperience": 175,
    "abilities": [
      {
        "name": "limber",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "unburden",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "mold-breaker",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 702,
    "name": "dedenne",
    "height": 2,
    "weight": 22,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/702.png",
    "types": [
      "electric",
      "fairy"
    ],
    "baseExperience": 151,
    "abilities": [
      {
        "name": "cheek-pouch",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "pickup",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "plus",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 703,
    "name": "carbink",
    "height": 3,
    "weight": 57,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/703.png",
    "types": [
      "rock",
      "fairy"
    ],
    "baseExperience": 100,
    "abilities": [
      {
        "name": "clear-body",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sturdy",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 704,
    "name": "goomy",
    "height": 3,
    "weight": 28,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/704.png",
    "types": [
      "dragon"
    ],
    "baseExperience": 60,
    "abilities": [
      {
        "name": "sap-sipper",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "hydration",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "gooey",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 705,
    "name": "sliggoo",
    "height": 8,
    "weight": 175,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/705.png",
    "types": [
      "dragon"
    ],
    "baseExperience": 158,
    "abilities": [
      {
        "name": "sap-sipper",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "hydration",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "gooey",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 706,
    "name": "goodra",
    "height": 20,
    "weight": 1505,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/706.png",
    "types": [
      "dragon"
    ],
    "baseExperience": 270,
    "abilities": [
      {
        "name": "sap-sipper",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "hydration",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "gooey",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 707,
    "name": "klefki",
    "height": 2,
    "weight": 30,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/707.png",
    "types": [
      "steel",
      "fairy"
    ],
    "baseExperience": 165,
    "abilities": [
      {
        "name": "prankster",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "magician",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 708,
    "name": "phantump",
    "height": 4,
    "weight": 70,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/708.png",
    "types": [
      "ghost",
      "grass"
    ],
    "baseExperience": 62,
    "abilities": [
      {
        "name": "natural-cure",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "frisk",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "harvest",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 709,
    "name": "trevenant",
    "height": 15,
    "weight": 710,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/709.png",
    "types": [
      "ghost",
      "grass"
    ],
    "baseExperience": 166,
    "abilities": [
      {
        "name": "natural-cure",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "frisk",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "harvest",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 710,
    "name": "pumpkaboo-average",
    "height": 4,
    "weight": 50,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/710.png",
    "types": [
      "ghost",
      "grass"
    ],
    "baseExperience": 67,
    "abilities": [
      {
        "name": "pickup",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "frisk",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "insomnia",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 711,
    "name": "gourgeist-average",
    "height": 9,
    "weight": 125,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/711.png",
    "types": [
      "ghost",
      "grass"
    ],
    "baseExperience": 173,
    "abilities": [
      {
        "name": "pickup",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "frisk",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "insomnia",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 712,
    "name": "bergmite",
    "height": 10,
    "weight": 995,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/712.png",
    "types": [
      "ice"
    ],
    "baseExperience": 61,
    "abilities": [
      {
        "name": "own-tempo",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "ice-body",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "sturdy",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 713,
    "name": "avalugg",
    "height": 20,
    "weight": 5050,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/713.png",
    "types": [
      "ice"
    ],
    "baseExperience": 180,
    "abilities": [
      {
        "name": "own-tempo",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "ice-body",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "sturdy",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 714,
    "name": "noibat",
    "height": 5,
    "weight": 80,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/714.png",
    "types": [
      "flying",
      "dragon"
    ],
    "baseExperience": 49,
    "abilities": [
      {
        "name": "frisk",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "infiltrator",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "telepathy",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 715,
    "name": "noivern",
    "height": 15,
    "weight": 850,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/715.png",
    "types": [
      "flying",
      "dragon"
    ],
    "baseExperience": 187,
    "abilities": [
      {
        "name": "frisk",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "infiltrator",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "telepathy",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 716,
    "name": "xerneas",
    "height": 30,
    "weight": 2150,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/716.png",
    "types": [
      "fairy"
    ],
    "baseExperience": 306,
    "abilities": [
      {
        "name": "fairy-aura",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 717,
    "name": "yveltal",
    "height": 58,
    "weight": 2030,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/717.png",
    "types": [
      "dark",
      "flying"
    ],
    "baseExperience": 306,
    "abilities": [
      {
        "name": "dark-aura",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 718,
    "name": "zygarde-50",
    "height": 50,
    "weight": 3050,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/718.png",
    "types": [
      "dragon",
      "ground"
    ],
    "baseExperience": 270,
    "abilities": [
      {
        "name": "aura-break",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 719,
    "name": "diancie",
    "height": 7,
    "weight": 88,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/719.png",
    "types": [
      "rock",
      "fairy"
    ],
    "baseExperience": 270,
    "abilities": [
      {
        "name": "clear-body",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 720,
    "name": "hoopa",
    "height": 5,
    "weight": 90,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/720.png",
    "types": [
      "psychic",
      "ghost"
    ],
    "baseExperience": 270,
    "abilities": [
      {
        "name": "magician",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 721,
    "name": "volcanion",
    "height": 17,
    "weight": 1950,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/721.png",
    "types": [
      "fire",
      "water"
    ],
    "baseExperience": 270,
    "abilities": [
      {
        "name": "water-absorb",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 722,
    "name": "rowlet",
    "height": 3,
    "weight": 15,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/722.png",
    "types": [
      "grass",
      "flying"
    ],
    "baseExperience": 64,
    "abilities": [
      {
        "name": "overgrow",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "long-reach",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 723,
    "name": "dartrix",
    "height": 7,
    "weight": 160,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/723.png",
    "types": [
      "grass",
      "flying"
    ],
    "baseExperience": 147,
    "abilities": [
      {
        "name": "overgrow",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "long-reach",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 724,
    "name": "decidueye",
    "height": 16,
    "weight": 366,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/724.png",
    "types": [
      "grass",
      "ghost"
    ],
    "baseExperience": 239,
    "abilities": [
      {
        "name": "overgrow",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "long-reach",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 725,
    "name": "litten",
    "height": 4,
    "weight": 43,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/725.png",
    "types": [
      "fire"
    ],
    "baseExperience": 64,
    "abilities": [
      {
        "name": "blaze",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "intimidate",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 726,
    "name": "torracat",
    "height": 7,
    "weight": 250,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/726.png",
    "types": [
      "fire"
    ],
    "baseExperience": 147,
    "abilities": [
      {
        "name": "blaze",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "intimidate",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 727,
    "name": "incineroar",
    "height": 18,
    "weight": 830,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/727.png",
    "types": [
      "fire",
      "dark"
    ],
    "baseExperience": 239,
    "abilities": [
      {
        "name": "blaze",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "intimidate",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 728,
    "name": "popplio",
    "height": 4,
    "weight": 75,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/728.png",
    "types": [
      "water"
    ],
    "baseExperience": 64,
    "abilities": [
      {
        "name": "torrent",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "liquid-voice",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 729,
    "name": "brionne",
    "height": 6,
    "weight": 175,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/729.png",
    "types": [
      "water"
    ],
    "baseExperience": 147,
    "abilities": [
      {
        "name": "torrent",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "liquid-voice",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 730,
    "name": "primarina",
    "height": 18,
    "weight": 440,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/730.png",
    "types": [
      "water",
      "fairy"
    ],
    "baseExperience": 239,
    "abilities": [
      {
        "name": "torrent",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "liquid-voice",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 731,
    "name": "pikipek",
    "height": 3,
    "weight": 12,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/731.png",
    "types": [
      "normal",
      "flying"
    ],
    "baseExperience": 53,
    "abilities": [
      {
        "name": "keen-eye",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "skill-link",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "pickup",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 732,
    "name": "trumbeak",
    "height": 6,
    "weight": 148,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/732.png",
    "types": [
      "normal",
      "flying"
    ],
    "baseExperience": 124,
    "abilities": [
      {
        "name": "keen-eye",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "skill-link",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "pickup",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 733,
    "name": "toucannon",
    "height": 11,
    "weight": 260,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/733.png",
    "types": [
      "normal",
      "flying"
    ],
    "baseExperience": 218,
    "abilities": [
      {
        "name": "keen-eye",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "skill-link",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "sheer-force",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 734,
    "name": "yungoos",
    "height": 4,
    "weight": 60,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/734.png",
    "types": [
      "normal"
    ],
    "baseExperience": 51,
    "abilities": [
      {
        "name": "stakeout",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "strong-jaw",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "adaptability",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 735,
    "name": "gumshoos",
    "height": 7,
    "weight": 142,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/735.png",
    "types": [
      "normal"
    ],
    "baseExperience": 146,
    "abilities": [
      {
        "name": "stakeout",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "strong-jaw",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "adaptability",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 736,
    "name": "grubbin",
    "height": 4,
    "weight": 44,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/736.png",
    "types": [
      "bug"
    ],
    "baseExperience": 60,
    "abilities": [
      {
        "name": "swarm",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 737,
    "name": "charjabug",
    "height": 5,
    "weight": 105,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/737.png",
    "types": [
      "bug",
      "electric"
    ],
    "baseExperience": 140,
    "abilities": [
      {
        "name": "battery",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 738,
    "name": "vikavolt",
    "height": 15,
    "weight": 450,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/738.png",
    "types": [
      "bug",
      "electric"
    ],
    "baseExperience": 225,
    "abilities": [
      {
        "name": "levitate",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 739,
    "name": "crabrawler",
    "height": 6,
    "weight": 70,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/739.png",
    "types": [
      "fighting"
    ],
    "baseExperience": 68,
    "abilities": [
      {
        "name": "hyper-cutter",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "iron-fist",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "anger-point",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 740,
    "name": "crabominable",
    "height": 17,
    "weight": 1800,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/740.png",
    "types": [
      "fighting",
      "ice"
    ],
    "baseExperience": 167,
    "abilities": [
      {
        "name": "hyper-cutter",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "iron-fist",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "anger-point",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 741,
    "name": "oricorio-baile",
    "height": 6,
    "weight": 34,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/741.png",
    "types": [
      "fire",
      "flying"
    ],
    "baseExperience": 167,
    "abilities": [
      {
        "name": "dancer",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 742,
    "name": "cutiefly",
    "height": 1,
    "weight": 2,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/742.png",
    "types": [
      "bug",
      "fairy"
    ],
    "baseExperience": 61,
    "abilities": [
      {
        "name": "honey-gather",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "shield-dust",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "sweet-veil",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 743,
    "name": "ribombee",
    "height": 2,
    "weight": 5,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/743.png",
    "types": [
      "bug",
      "fairy"
    ],
    "baseExperience": 162,
    "abilities": [
      {
        "name": "honey-gather",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "shield-dust",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "sweet-veil",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 744,
    "name": "rockruff",
    "height": 5,
    "weight": 92,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/744.png",
    "types": [
      "rock"
    ],
    "baseExperience": 56,
    "abilities": [
      {
        "name": "keen-eye",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "vital-spirit",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "steadfast",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 745,
    "name": "lycanroc-midday",
    "height": 8,
    "weight": 250,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/745.png",
    "types": [
      "rock"
    ],
    "baseExperience": 170,
    "abilities": [
      {
        "name": "keen-eye",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sand-rush",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "steadfast",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 746,
    "name": "wishiwashi-solo",
    "height": 2,
    "weight": 3,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/746.png",
    "types": [
      "water"
    ],
    "baseExperience": 61,
    "abilities": [
      {
        "name": "schooling",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 747,
    "name": "mareanie",
    "height": 4,
    "weight": 80,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/747.png",
    "types": [
      "poison",
      "water"
    ],
    "baseExperience": 61,
    "abilities": [
      {
        "name": "merciless",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "limber",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "regenerator",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 748,
    "name": "toxapex",
    "height": 7,
    "weight": 145,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/748.png",
    "types": [
      "poison",
      "water"
    ],
    "baseExperience": 173,
    "abilities": [
      {
        "name": "merciless",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "limber",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "regenerator",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 749,
    "name": "mudbray",
    "height": 10,
    "weight": 1100,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/749.png",
    "types": [
      "ground"
    ],
    "baseExperience": 77,
    "abilities": [
      {
        "name": "own-tempo",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "stamina",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "inner-focus",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 750,
    "name": "mudsdale",
    "height": 25,
    "weight": 9200,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/750.png",
    "types": [
      "ground"
    ],
    "baseExperience": 175,
    "abilities": [
      {
        "name": "own-tempo",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "stamina",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "inner-focus",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 751,
    "name": "dewpider",
    "height": 3,
    "weight": 40,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/751.png",
    "types": [
      "water",
      "bug"
    ],
    "baseExperience": 54,
    "abilities": [
      {
        "name": "water-bubble",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "water-absorb",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 752,
    "name": "araquanid",
    "height": 18,
    "weight": 820,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/752.png",
    "types": [
      "water",
      "bug"
    ],
    "baseExperience": 159,
    "abilities": [
      {
        "name": "water-bubble",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "water-absorb",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 753,
    "name": "fomantis",
    "height": 3,
    "weight": 15,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/753.png",
    "types": [
      "grass"
    ],
    "baseExperience": 50,
    "abilities": [
      {
        "name": "leaf-guard",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "contrary",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 754,
    "name": "lurantis",
    "height": 9,
    "weight": 185,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/754.png",
    "types": [
      "grass"
    ],
    "baseExperience": 168,
    "abilities": [
      {
        "name": "leaf-guard",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "contrary",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 755,
    "name": "morelull",
    "height": 2,
    "weight": 15,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/755.png",
    "types": [
      "grass",
      "fairy"
    ],
    "baseExperience": 57,
    "abilities": [
      {
        "name": "illuminate",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "effect-spore",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "rain-dish",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 756,
    "name": "shiinotic",
    "height": 10,
    "weight": 115,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/756.png",
    "types": [
      "grass",
      "fairy"
    ],
    "baseExperience": 142,
    "abilities": [
      {
        "name": "illuminate",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "effect-spore",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "rain-dish",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 757,
    "name": "salandit",
    "height": 6,
    "weight": 48,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/757.png",
    "types": [
      "poison",
      "fire"
    ],
    "baseExperience": 64,
    "abilities": [
      {
        "name": "corrosion",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "oblivious",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 758,
    "name": "salazzle",
    "height": 12,
    "weight": 222,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/758.png",
    "types": [
      "poison",
      "fire"
    ],
    "baseExperience": 168,
    "abilities": [
      {
        "name": "corrosion",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "oblivious",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 759,
    "name": "stufful",
    "height": 5,
    "weight": 68,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/759.png",
    "types": [
      "normal",
      "fighting"
    ],
    "baseExperience": 68,
    "abilities": [
      {
        "name": "fluffy",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "klutz",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "cute-charm",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 760,
    "name": "bewear",
    "height": 21,
    "weight": 1350,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/760.png",
    "types": [
      "normal",
      "fighting"
    ],
    "baseExperience": 175,
    "abilities": [
      {
        "name": "fluffy",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "klutz",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "unnerve",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 761,
    "name": "bounsweet",
    "height": 3,
    "weight": 32,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/761.png",
    "types": [
      "grass"
    ],
    "baseExperience": 42,
    "abilities": [
      {
        "name": "leaf-guard",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "oblivious",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "sweet-veil",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 762,
    "name": "steenee",
    "height": 7,
    "weight": 82,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/762.png",
    "types": [
      "grass"
    ],
    "baseExperience": 102,
    "abilities": [
      {
        "name": "leaf-guard",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "oblivious",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "sweet-veil",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 763,
    "name": "tsareena",
    "height": 12,
    "weight": 214,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/763.png",
    "types": [
      "grass"
    ],
    "baseExperience": 230,
    "abilities": [
      {
        "name": "leaf-guard",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "queenly-majesty",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "sweet-veil",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 764,
    "name": "comfey",
    "height": 1,
    "weight": 3,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/764.png",
    "types": [
      "fairy"
    ],
    "baseExperience": 170,
    "abilities": [
      {
        "name": "flower-veil",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "triage",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "natural-cure",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 765,
    "name": "oranguru",
    "height": 15,
    "weight": 760,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/765.png",
    "types": [
      "normal",
      "psychic"
    ],
    "baseExperience": 172,
    "abilities": [
      {
        "name": "inner-focus",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "telepathy",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "symbiosis",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 766,
    "name": "passimian",
    "height": 20,
    "weight": 828,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/766.png",
    "types": [
      "fighting"
    ],
    "baseExperience": 172,
    "abilities": [
      {
        "name": "receiver",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "defiant",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 767,
    "name": "wimpod",
    "height": 5,
    "weight": 120,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/767.png",
    "types": [
      "bug",
      "water"
    ],
    "baseExperience": 46,
    "abilities": [
      {
        "name": "wimp-out",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 768,
    "name": "golisopod",
    "height": 20,
    "weight": 1080,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/768.png",
    "types": [
      "bug",
      "water"
    ],
    "baseExperience": 186,
    "abilities": [
      {
        "name": "emergency-exit",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 769,
    "name": "sandygast",
    "height": 5,
    "weight": 700,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/769.png",
    "types": [
      "ghost",
      "ground"
    ],
    "baseExperience": 64,
    "abilities": [
      {
        "name": "water-compaction",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sand-veil",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 770,
    "name": "palossand",
    "height": 13,
    "weight": 2500,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/770.png",
    "types": [
      "ghost",
      "ground"
    ],
    "baseExperience": 168,
    "abilities": [
      {
        "name": "water-compaction",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sand-veil",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 771,
    "name": "pyukumuku",
    "height": 3,
    "weight": 12,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/771.png",
    "types": [
      "water"
    ],
    "baseExperience": 144,
    "abilities": [
      {
        "name": "innards-out",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "unaware",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 772,
    "name": "type-null",
    "height": 19,
    "weight": 1205,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/772.png",
    "types": [
      "normal"
    ],
    "baseExperience": 107,
    "abilities": [
      {
        "name": "battle-armor",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 773,
    "name": "silvally",
    "height": 23,
    "weight": 1005,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/773.png",
    "types": [
      "normal"
    ],
    "baseExperience": 257,
    "abilities": [
      {
        "name": "rks-system",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 774,
    "name": "minior-red-meteor",
    "height": 3,
    "weight": 400,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/774.png",
    "types": [
      "rock",
      "flying"
    ],
    "baseExperience": 154,
    "abilities": [
      {
        "name": "shields-down",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 775,
    "name": "komala",
    "height": 4,
    "weight": 199,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/775.png",
    "types": [
      "normal"
    ],
    "baseExperience": 168,
    "abilities": [
      {
        "name": "comatose",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 776,
    "name": "turtonator",
    "height": 20,
    "weight": 2120,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/776.png",
    "types": [
      "fire",
      "dragon"
    ],
    "baseExperience": 170,
    "abilities": [
      {
        "name": "shell-armor",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 777,
    "name": "togedemaru",
    "height": 3,
    "weight": 33,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/777.png",
    "types": [
      "electric",
      "steel"
    ],
    "baseExperience": 152,
    "abilities": [
      {
        "name": "iron-barbs",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "lightning-rod",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "sturdy",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 778,
    "name": "mimikyu-disguised",
    "height": 2,
    "weight": 7,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/778.png",
    "types": [
      "ghost",
      "fairy"
    ],
    "baseExperience": 167,
    "abilities": [
      {
        "name": "disguise",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 779,
    "name": "bruxish",
    "height": 9,
    "weight": 190,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/779.png",
    "types": [
      "water",
      "psychic"
    ],
    "baseExperience": 166,
    "abilities": [
      {
        "name": "dazzling",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "strong-jaw",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "wonder-skin",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 780,
    "name": "drampa",
    "height": 30,
    "weight": 1850,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/780.png",
    "types": [
      "normal",
      "dragon"
    ],
    "baseExperience": 170,
    "abilities": [
      {
        "name": "berserk",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sap-sipper",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "cloud-nine",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 781,
    "name": "dhelmise",
    "height": 39,
    "weight": 2100,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/781.png",
    "types": [
      "ghost",
      "grass"
    ],
    "baseExperience": 181,
    "abilities": [
      {
        "name": "steelworker",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 782,
    "name": "jangmo-o",
    "height": 6,
    "weight": 297,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/782.png",
    "types": [
      "dragon"
    ],
    "baseExperience": 60,
    "abilities": [
      {
        "name": "bulletproof",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "soundproof",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "overcoat",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 783,
    "name": "hakamo-o",
    "height": 12,
    "weight": 470,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/783.png",
    "types": [
      "dragon",
      "fighting"
    ],
    "baseExperience": 147,
    "abilities": [
      {
        "name": "bulletproof",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "soundproof",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "overcoat",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 784,
    "name": "kommo-o",
    "height": 16,
    "weight": 782,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/784.png",
    "types": [
      "dragon",
      "fighting"
    ],
    "baseExperience": 270,
    "abilities": [
      {
        "name": "bulletproof",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "soundproof",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "overcoat",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 785,
    "name": "tapu-koko",
    "height": 18,
    "weight": 205,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/785.png",
    "types": [
      "electric",
      "fairy"
    ],
    "baseExperience": 257,
    "abilities": [
      {
        "name": "electric-surge",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "telepathy",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 786,
    "name": "tapu-lele",
    "height": 12,
    "weight": 186,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/786.png",
    "types": [
      "psychic",
      "fairy"
    ],
    "baseExperience": 257,
    "abilities": [
      {
        "name": "psychic-surge",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "telepathy",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 787,
    "name": "tapu-bulu",
    "height": 19,
    "weight": 455,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/787.png",
    "types": [
      "grass",
      "fairy"
    ],
    "baseExperience": 257,
    "abilities": [
      {
        "name": "grassy-surge",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "telepathy",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 788,
    "name": "tapu-fini",
    "height": 13,
    "weight": 212,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/788.png",
    "types": [
      "water",
      "fairy"
    ],
    "baseExperience": 257,
    "abilities": [
      {
        "name": "misty-surge",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "telepathy",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 789,
    "name": "cosmog",
    "height": 2,
    "weight": 1,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/789.png",
    "types": [
      "psychic"
    ],
    "baseExperience": 40,
    "abilities": [
      {
        "name": "unaware",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 790,
    "name": "cosmoem",
    "height": 1,
    "weight": 9999,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/790.png",
    "types": [
      "psychic"
    ],
    "baseExperience": 140,
    "abilities": [
      {
        "name": "sturdy",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 791,
    "name": "solgaleo",
    "height": 34,
    "weight": 2300,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/791.png",
    "types": [
      "psychic",
      "steel"
    ],
    "baseExperience": 306,
    "abilities": [
      {
        "name": "full-metal-body",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 792,
    "name": "lunala",
    "height": 40,
    "weight": 1200,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/792.png",
    "types": [
      "psychic",
      "ghost"
    ],
    "baseExperience": 306,
    "abilities": [
      {
        "name": "shadow-shield",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 793,
    "name": "nihilego",
    "height": 12,
    "weight": 555,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/793.png",
    "types": [
      "rock",
      "poison"
    ],
    "baseExperience": 257,
    "abilities": [
      {
        "name": "beast-boost",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 794,
    "name": "buzzwole",
    "height": 24,
    "weight": 3336,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/794.png",
    "types": [
      "bug",
      "fighting"
    ],
    "baseExperience": 257,
    "abilities": [
      {
        "name": "beast-boost",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 795,
    "name": "pheromosa",
    "height": 18,
    "weight": 250,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/795.png",
    "types": [
      "bug",
      "fighting"
    ],
    "baseExperience": 257,
    "abilities": [
      {
        "name": "beast-boost",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 796,
    "name": "xurkitree",
    "height": 38,
    "weight": 1000,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/796.png",
    "types": [
      "electric"
    ],
    "baseExperience": 257,
    "abilities": [
      {
        "name": "beast-boost",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 797,
    "name": "celesteela",
    "height": 92,
    "weight": 9999,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/797.png",
    "types": [
      "steel",
      "flying"
    ],
    "baseExperience": 257,
    "abilities": [
      {
        "name": "beast-boost",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 798,
    "name": "kartana",
    "height": 3,
    "weight": 1,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/798.png",
    "types": [
      "grass",
      "steel"
    ],
    "baseExperience": 257,
    "abilities": [
      {
        "name": "beast-boost",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 799,
    "name": "guzzlord",
    "height": 55,
    "weight": 8880,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/799.png",
    "types": [
      "dark",
      "dragon"
    ],
    "baseExperience": 257,
    "abilities": [
      {
        "name": "beast-boost",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 800,
    "name": "necrozma",
    "height": 24,
    "weight": 2300,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/800.png",
    "types": [
      "psychic"
    ],
    "baseExperience": 270,
    "abilities": [
      {
        "name": "prism-armor",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 801,
    "name": "magearna",
    "height": 10,
    "weight": 805,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/801.png",
    "types": [
      "steel",
      "fairy"
    ],
    "baseExperience": 270,
    "abilities": [
      {
        "name": "soul-heart",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 802,
    "name": "marshadow",
    "height": 7,
    "weight": 222,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/802.png",
    "types": [
      "fighting",
      "ghost"
    ],
    "baseExperience": 270,
    "abilities": [
      {
        "name": "technician",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 803,
    "name": "poipole",
    "height": 6,
    "weight": 18,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/803.png",
    "types": [
      "poison"
    ],
    "baseExperience": 189,
    "abilities": [
      {
        "name": "beast-boost",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 804,
    "name": "naganadel",
    "height": 36,
    "weight": 1500,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/804.png",
    "types": [
      "poison",
      "dragon"
    ],
    "baseExperience": 243,
    "abilities": [
      {
        "name": "beast-boost",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 805,
    "name": "stakataka",
    "height": 55,
    "weight": 8200,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/805.png",
    "types": [
      "rock",
      "steel"
    ],
    "baseExperience": 257,
    "abilities": [
      {
        "name": "beast-boost",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 806,
    "name": "blacephalon",
    "height": 18,
    "weight": 130,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/806.png",
    "types": [
      "fire",
      "ghost"
    ],
    "baseExperience": 257,
    "abilities": [
      {
        "name": "beast-boost",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 807,
    "name": "zeraora",
    "height": 15,
    "weight": 445,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/807.png",
    "types": [
      "electric"
    ],
    "baseExperience": 270,
    "abilities": [
      {
        "name": "volt-absorb",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 808,
    "name": "meltan",
    "height": 2,
    "weight": 80,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/808.png",
    "types": [
      "steel"
    ],
    "baseExperience": 135,
    "abilities": [
      {
        "name": "magnet-pull",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 809,
    "name": "melmetal",
    "height": 25,
    "weight": 8000,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/809.png",
    "types": [
      "steel"
    ],
    "baseExperience": 270,
    "abilities": [
      {
        "name": "iron-fist",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 810,
    "name": "grookey",
    "height": 3,
    "weight": 50,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/810.png",
    "types": [
      "grass"
    ],
    "baseExperience": 62,
    "abilities": [
      {
        "name": "overgrow",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "grassy-surge",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 811,
    "name": "thwackey",
    "height": 7,
    "weight": 140,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/811.png",
    "types": [
      "grass"
    ],
    "baseExperience": 147,
    "abilities": [
      {
        "name": "overgrow",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "grassy-surge",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 812,
    "name": "rillaboom",
    "height": 21,
    "weight": 900,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/812.png",
    "types": [
      "grass"
    ],
    "baseExperience": 265,
    "abilities": [
      {
        "name": "overgrow",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "grassy-surge",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 813,
    "name": "scorbunny",
    "height": 3,
    "weight": 45,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/813.png",
    "types": [
      "fire"
    ],
    "baseExperience": 62,
    "abilities": [
      {
        "name": "blaze",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "libero",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 814,
    "name": "raboot",
    "height": 6,
    "weight": 90,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/814.png",
    "types": [
      "fire"
    ],
    "baseExperience": 147,
    "abilities": [
      {
        "name": "blaze",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "libero",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 815,
    "name": "cinderace",
    "height": 14,
    "weight": 330,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/815.png",
    "types": [
      "fire"
    ],
    "baseExperience": 265,
    "abilities": [
      {
        "name": "blaze",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "libero",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 816,
    "name": "sobble",
    "height": 3,
    "weight": 40,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/816.png",
    "types": [
      "water"
    ],
    "baseExperience": 62,
    "abilities": [
      {
        "name": "torrent",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sniper",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 817,
    "name": "drizzile",
    "height": 7,
    "weight": 115,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/817.png",
    "types": [
      "water"
    ],
    "baseExperience": 147,
    "abilities": [
      {
        "name": "torrent",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sniper",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 818,
    "name": "inteleon",
    "height": 19,
    "weight": 452,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/818.png",
    "types": [
      "water"
    ],
    "baseExperience": 265,
    "abilities": [
      {
        "name": "torrent",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sniper",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 819,
    "name": "skwovet",
    "height": 3,
    "weight": 25,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/819.png",
    "types": [
      "normal"
    ],
    "baseExperience": 55,
    "abilities": [
      {
        "name": "cheek-pouch",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "gluttony",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 820,
    "name": "greedent",
    "height": 6,
    "weight": 60,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/820.png",
    "types": [
      "normal"
    ],
    "baseExperience": 161,
    "abilities": [
      {
        "name": "cheek-pouch",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "gluttony",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 821,
    "name": "rookidee",
    "height": 2,
    "weight": 18,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/821.png",
    "types": [
      "flying"
    ],
    "baseExperience": 49,
    "abilities": [
      {
        "name": "keen-eye",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "unnerve",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "big-pecks",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 822,
    "name": "corvisquire",
    "height": 8,
    "weight": 160,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/822.png",
    "types": [
      "flying"
    ],
    "baseExperience": 128,
    "abilities": [
      {
        "name": "keen-eye",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "unnerve",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "big-pecks",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 823,
    "name": "corviknight",
    "height": 22,
    "weight": 750,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/823.png",
    "types": [
      "flying",
      "steel"
    ],
    "baseExperience": 248,
    "abilities": [
      {
        "name": "pressure",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "unnerve",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "mirror-armor",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 824,
    "name": "blipbug",
    "height": 4,
    "weight": 80,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/824.png",
    "types": [
      "bug"
    ],
    "baseExperience": 36,
    "abilities": [
      {
        "name": "swarm",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "compound-eyes",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "telepathy",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 825,
    "name": "dottler",
    "height": 4,
    "weight": 195,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/825.png",
    "types": [
      "bug",
      "psychic"
    ],
    "baseExperience": 117,
    "abilities": [
      {
        "name": "swarm",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "compound-eyes",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "telepathy",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 826,
    "name": "orbeetle",
    "height": 4,
    "weight": 408,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/826.png",
    "types": [
      "bug",
      "psychic"
    ],
    "baseExperience": 253,
    "abilities": [
      {
        "name": "swarm",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "frisk",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "telepathy",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 827,
    "name": "nickit",
    "height": 6,
    "weight": 89,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/827.png",
    "types": [
      "dark"
    ],
    "baseExperience": 49,
    "abilities": [
      {
        "name": "run-away",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "unburden",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "stakeout",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 828,
    "name": "thievul",
    "height": 12,
    "weight": 199,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/828.png",
    "types": [
      "dark"
    ],
    "baseExperience": 159,
    "abilities": [
      {
        "name": "run-away",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "unburden",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "stakeout",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 829,
    "name": "gossifleur",
    "height": 4,
    "weight": 22,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/829.png",
    "types": [
      "grass"
    ],
    "baseExperience": 50,
    "abilities": [
      {
        "name": "cotton-down",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "regenerator",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "effect-spore",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 830,
    "name": "eldegoss",
    "height": 5,
    "weight": 25,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/830.png",
    "types": [
      "grass"
    ],
    "baseExperience": 161,
    "abilities": [
      {
        "name": "cotton-down",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "regenerator",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "effect-spore",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 831,
    "name": "wooloo",
    "height": 6,
    "weight": 60,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/831.png",
    "types": [
      "normal"
    ],
    "baseExperience": 122,
    "abilities": [
      {
        "name": "fluffy",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "run-away",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "bulletproof",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 832,
    "name": "dubwool",
    "height": 13,
    "weight": 430,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/832.png",
    "types": [
      "normal"
    ],
    "baseExperience": 172,
    "abilities": [
      {
        "name": "fluffy",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "steadfast",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "bulletproof",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 833,
    "name": "chewtle",
    "height": 3,
    "weight": 85,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/833.png",
    "types": [
      "water"
    ],
    "baseExperience": 57,
    "abilities": [
      {
        "name": "strong-jaw",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "shell-armor",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "swift-swim",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 834,
    "name": "drednaw",
    "height": 10,
    "weight": 1155,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/834.png",
    "types": [
      "water",
      "rock"
    ],
    "baseExperience": 170,
    "abilities": [
      {
        "name": "strong-jaw",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "shell-armor",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "swift-swim",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 835,
    "name": "yamper",
    "height": 3,
    "weight": 135,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/835.png",
    "types": [
      "electric"
    ],
    "baseExperience": 54,
    "abilities": [
      {
        "name": "ball-fetch",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "rattled",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 836,
    "name": "boltund",
    "height": 10,
    "weight": 340,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/836.png",
    "types": [
      "electric"
    ],
    "baseExperience": 172,
    "abilities": [
      {
        "name": "strong-jaw",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "competitive",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 837,
    "name": "rolycoly",
    "height": 3,
    "weight": 120,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/837.png",
    "types": [
      "rock"
    ],
    "baseExperience": 48,
    "abilities": [
      {
        "name": "steam-engine",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "heatproof",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "flash-fire",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 838,
    "name": "carkol",
    "height": 11,
    "weight": 780,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/838.png",
    "types": [
      "rock",
      "fire"
    ],
    "baseExperience": 144,
    "abilities": [
      {
        "name": "steam-engine",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "flame-body",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "flash-fire",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 839,
    "name": "coalossal",
    "height": 28,
    "weight": 3105,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/839.png",
    "types": [
      "rock",
      "fire"
    ],
    "baseExperience": 255,
    "abilities": [
      {
        "name": "steam-engine",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "flame-body",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "flash-fire",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 840,
    "name": "applin",
    "height": 2,
    "weight": 5,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/840.png",
    "types": [
      "grass",
      "dragon"
    ],
    "baseExperience": 52,
    "abilities": [
      {
        "name": "ripen",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "gluttony",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "bulletproof",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 841,
    "name": "flapple",
    "height": 3,
    "weight": 10,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/841.png",
    "types": [
      "grass",
      "dragon"
    ],
    "baseExperience": 170,
    "abilities": [
      {
        "name": "ripen",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "gluttony",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "hustle",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 842,
    "name": "appletun",
    "height": 4,
    "weight": 130,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/842.png",
    "types": [
      "grass",
      "dragon"
    ],
    "baseExperience": 170,
    "abilities": [
      {
        "name": "ripen",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "gluttony",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "thick-fat",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 843,
    "name": "silicobra",
    "height": 22,
    "weight": 76,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/843.png",
    "types": [
      "ground"
    ],
    "baseExperience": 63,
    "abilities": [
      {
        "name": "sand-spit",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "shed-skin",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "sand-veil",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 844,
    "name": "sandaconda",
    "height": 38,
    "weight": 655,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/844.png",
    "types": [
      "ground"
    ],
    "baseExperience": 179,
    "abilities": [
      {
        "name": "sand-spit",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "shed-skin",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "sand-veil",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 845,
    "name": "cramorant",
    "height": 8,
    "weight": 180,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/845.png",
    "types": [
      "flying",
      "water"
    ],
    "baseExperience": 166,
    "abilities": [
      {
        "name": "gulp-missile",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 846,
    "name": "arrokuda",
    "height": 5,
    "weight": 10,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/846.png",
    "types": [
      "water"
    ],
    "baseExperience": 56,
    "abilities": [
      {
        "name": "swift-swim",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "propeller-tail",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 847,
    "name": "barraskewda",
    "height": 13,
    "weight": 300,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/847.png",
    "types": [
      "water"
    ],
    "baseExperience": 172,
    "abilities": [
      {
        "name": "swift-swim",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "propeller-tail",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 848,
    "name": "toxel",
    "height": 4,
    "weight": 110,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/848.png",
    "types": [
      "electric",
      "poison"
    ],
    "baseExperience": 48,
    "abilities": [
      {
        "name": "rattled",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "static",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "klutz",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 849,
    "name": "toxtricity-amped",
    "height": 16,
    "weight": 400,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/849.png",
    "types": [
      "electric",
      "poison"
    ],
    "baseExperience": 176,
    "abilities": [
      {
        "name": "punk-rock",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "plus",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "technician",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 850,
    "name": "sizzlipede",
    "height": 7,
    "weight": 10,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/850.png",
    "types": [
      "fire",
      "bug"
    ],
    "baseExperience": 61,
    "abilities": [
      {
        "name": "flash-fire",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "white-smoke",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "flame-body",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 851,
    "name": "centiskorch",
    "height": 30,
    "weight": 1200,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/851.png",
    "types": [
      "fire",
      "bug"
    ],
    "baseExperience": 184,
    "abilities": [
      {
        "name": "flash-fire",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "white-smoke",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "flame-body",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 852,
    "name": "clobbopus",
    "height": 6,
    "weight": 40,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/852.png",
    "types": [
      "fighting"
    ],
    "baseExperience": 62,
    "abilities": [
      {
        "name": "limber",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "technician",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 853,
    "name": "grapploct",
    "height": 16,
    "weight": 390,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/853.png",
    "types": [
      "fighting"
    ],
    "baseExperience": 168,
    "abilities": [
      {
        "name": "limber",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "technician",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 854,
    "name": "sinistea",
    "height": 1,
    "weight": 2,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/854.png",
    "types": [
      "ghost"
    ],
    "baseExperience": 62,
    "abilities": [
      {
        "name": "weak-armor",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "cursed-body",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 855,
    "name": "polteageist",
    "height": 2,
    "weight": 4,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/855.png",
    "types": [
      "ghost"
    ],
    "baseExperience": 178,
    "abilities": [
      {
        "name": "weak-armor",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "cursed-body",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 856,
    "name": "hatenna",
    "height": 4,
    "weight": 34,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/856.png",
    "types": [
      "psychic"
    ],
    "baseExperience": 53,
    "abilities": [
      {
        "name": "healer",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "anticipation",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "magic-bounce",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 857,
    "name": "hattrem",
    "height": 6,
    "weight": 48,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/857.png",
    "types": [
      "psychic"
    ],
    "baseExperience": 130,
    "abilities": [
      {
        "name": "healer",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "anticipation",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "magic-bounce",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 858,
    "name": "hatterene",
    "height": 21,
    "weight": 51,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/858.png",
    "types": [
      "psychic",
      "fairy"
    ],
    "baseExperience": 255,
    "abilities": [
      {
        "name": "healer",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "anticipation",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "magic-bounce",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 859,
    "name": "impidimp",
    "height": 4,
    "weight": 55,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/859.png",
    "types": [
      "dark",
      "fairy"
    ],
    "baseExperience": 53,
    "abilities": [
      {
        "name": "prankster",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "frisk",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "pickpocket",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 860,
    "name": "morgrem",
    "height": 8,
    "weight": 125,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/860.png",
    "types": [
      "dark",
      "fairy"
    ],
    "baseExperience": 130,
    "abilities": [
      {
        "name": "prankster",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "frisk",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "pickpocket",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 861,
    "name": "grimmsnarl",
    "height": 15,
    "weight": 610,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/861.png",
    "types": [
      "dark",
      "fairy"
    ],
    "baseExperience": 255,
    "abilities": [
      {
        "name": "prankster",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "frisk",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "pickpocket",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 862,
    "name": "obstagoon",
    "height": 16,
    "weight": 460,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/862.png",
    "types": [
      "dark",
      "normal"
    ],
    "baseExperience": 260,
    "abilities": [
      {
        "name": "reckless",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "guts",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "defiant",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 863,
    "name": "perrserker",
    "height": 8,
    "weight": 280,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/863.png",
    "types": [
      "steel"
    ],
    "baseExperience": 154,
    "abilities": [
      {
        "name": "battle-armor",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "tough-claws",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "steely-spirit",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 864,
    "name": "cursola",
    "height": 10,
    "weight": 4,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/864.png",
    "types": [
      "ghost"
    ],
    "baseExperience": 179,
    "abilities": [
      {
        "name": "weak-armor",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "perish-body",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 865,
    "name": "sirfetchd",
    "height": 8,
    "weight": 1170,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/865.png",
    "types": [
      "fighting"
    ],
    "baseExperience": 177,
    "abilities": [
      {
        "name": "steadfast",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "scrappy",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 866,
    "name": "mr-rime",
    "height": 15,
    "weight": 582,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/866.png",
    "types": [
      "ice",
      "psychic"
    ],
    "baseExperience": 182,
    "abilities": [
      {
        "name": "tangled-feet",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "screen-cleaner",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "ice-body",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 867,
    "name": "runerigus",
    "height": 16,
    "weight": 666,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/867.png",
    "types": [
      "ground",
      "ghost"
    ],
    "baseExperience": 169,
    "abilities": [
      {
        "name": "wandering-spirit",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 868,
    "name": "milcery",
    "height": 2,
    "weight": 3,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/868.png",
    "types": [
      "fairy"
    ],
    "baseExperience": 54,
    "abilities": [
      {
        "name": "sweet-veil",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "aroma-veil",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 869,
    "name": "alcremie",
    "height": 3,
    "weight": 5,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/869.png",
    "types": [
      "fairy"
    ],
    "baseExperience": 173,
    "abilities": [
      {
        "name": "sweet-veil",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "aroma-veil",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 870,
    "name": "falinks",
    "height": 30,
    "weight": 620,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/870.png",
    "types": [
      "fighting"
    ],
    "baseExperience": 165,
    "abilities": [
      {
        "name": "battle-armor",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "defiant",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 871,
    "name": "pincurchin",
    "height": 3,
    "weight": 10,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/871.png",
    "types": [
      "electric"
    ],
    "baseExperience": 152,
    "abilities": [
      {
        "name": "lightning-rod",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "electric-surge",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 872,
    "name": "snom",
    "height": 3,
    "weight": 38,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/872.png",
    "types": [
      "ice",
      "bug"
    ],
    "baseExperience": 37,
    "abilities": [
      {
        "name": "shield-dust",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "ice-scales",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 873,
    "name": "frosmoth",
    "height": 13,
    "weight": 420,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/873.png",
    "types": [
      "ice",
      "bug"
    ],
    "baseExperience": 166,
    "abilities": [
      {
        "name": "shield-dust",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "ice-scales",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 874,
    "name": "stonjourner",
    "height": 25,
    "weight": 5200,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/874.png",
    "types": [
      "rock"
    ],
    "baseExperience": 165,
    "abilities": [
      {
        "name": "power-spot",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 875,
    "name": "eiscue-ice",
    "height": 14,
    "weight": 890,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/875.png",
    "types": [
      "ice"
    ],
    "baseExperience": 165,
    "abilities": [
      {
        "name": "ice-face",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 876,
    "name": "indeedee-male",
    "height": 9,
    "weight": 280,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/876.png",
    "types": [
      "psychic",
      "normal"
    ],
    "baseExperience": 166,
    "abilities": [
      {
        "name": "inner-focus",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "synchronize",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "psychic-surge",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 877,
    "name": "morpeko-full-belly",
    "height": 3,
    "weight": 30,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/877.png",
    "types": [
      "electric",
      "dark"
    ],
    "baseExperience": 153,
    "abilities": [
      {
        "name": "hunger-switch",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 878,
    "name": "cufant",
    "height": 12,
    "weight": 1000,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/878.png",
    "types": [
      "steel"
    ],
    "baseExperience": 66,
    "abilities": [
      {
        "name": "sheer-force",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "heavy-metal",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 879,
    "name": "copperajah",
    "height": 30,
    "weight": 6500,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/879.png",
    "types": [
      "steel"
    ],
    "baseExperience": 175,
    "abilities": [
      {
        "name": "sheer-force",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "heavy-metal",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 880,
    "name": "dracozolt",
    "height": 18,
    "weight": 1900,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/880.png",
    "types": [
      "electric",
      "dragon"
    ],
    "baseExperience": 177,
    "abilities": [
      {
        "name": "volt-absorb",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "hustle",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "sand-rush",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 881,
    "name": "arctozolt",
    "height": 23,
    "weight": 1500,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/881.png",
    "types": [
      "electric",
      "ice"
    ],
    "baseExperience": 177,
    "abilities": [
      {
        "name": "volt-absorb",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "static",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "slush-rush",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 882,
    "name": "dracovish",
    "height": 23,
    "weight": 2150,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/882.png",
    "types": [
      "water",
      "dragon"
    ],
    "baseExperience": 177,
    "abilities": [
      {
        "name": "water-absorb",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "strong-jaw",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "sand-rush",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 883,
    "name": "arctovish",
    "height": 20,
    "weight": 1750,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/883.png",
    "types": [
      "water",
      "ice"
    ],
    "baseExperience": 177,
    "abilities": [
      {
        "name": "water-absorb",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "ice-body",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "slush-rush",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 884,
    "name": "duraludon",
    "height": 18,
    "weight": 400,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/884.png",
    "types": [
      "steel",
      "dragon"
    ],
    "baseExperience": 187,
    "abilities": [
      {
        "name": "light-metal",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "heavy-metal",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "stalwart",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 885,
    "name": "dreepy",
    "height": 5,
    "weight": 20,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/885.png",
    "types": [
      "dragon",
      "ghost"
    ],
    "baseExperience": 54,
    "abilities": [
      {
        "name": "clear-body",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "infiltrator",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "cursed-body",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 886,
    "name": "drakloak",
    "height": 14,
    "weight": 110,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/886.png",
    "types": [
      "dragon",
      "ghost"
    ],
    "baseExperience": 144,
    "abilities": [
      {
        "name": "clear-body",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "infiltrator",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "cursed-body",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 887,
    "name": "dragapult",
    "height": 30,
    "weight": 500,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/887.png",
    "types": [
      "dragon",
      "ghost"
    ],
    "baseExperience": 300,
    "abilities": [
      {
        "name": "clear-body",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "infiltrator",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "cursed-body",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 888,
    "name": "zacian",
    "height": 28,
    "weight": 1100,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/888.png",
    "types": [
      "fairy"
    ],
    "baseExperience": 335,
    "abilities": [
      {
        "name": "intrepid-sword",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 889,
    "name": "zamazenta",
    "height": 29,
    "weight": 2100,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/889.png",
    "types": [
      "fighting"
    ],
    "baseExperience": 335,
    "abilities": [
      {
        "name": "dauntless-shield",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 890,
    "name": "eternatus",
    "height": 200,
    "weight": 9500,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/890.png",
    "types": [
      "poison",
      "dragon"
    ],
    "baseExperience": 345,
    "abilities": [
      {
        "name": "pressure",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 891,
    "name": "kubfu",
    "height": 6,
    "weight": 120,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/891.png",
    "types": [
      "fighting"
    ],
    "baseExperience": 77,
    "abilities": [
      {
        "name": "inner-focus",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 892,
    "name": "urshifu-single-strike",
    "height": 19,
    "weight": 1050,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/892.png",
    "types": [
      "fighting",
      "dark"
    ],
    "baseExperience": 275,
    "abilities": [
      {
        "name": "unseen-fist",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 893,
    "name": "zarude",
    "height": 18,
    "weight": 700,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/893.png",
    "types": [
      "dark",
      "grass"
    ],
    "baseExperience": 300,
    "abilities": [
      {
        "name": "leaf-guard",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 894,
    "name": "regieleki",
    "height": 12,
    "weight": 1450,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/894.png",
    "types": [
      "electric"
    ],
    "baseExperience": 290,
    "abilities": [
      {
        "name": "transistor",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 895,
    "name": "regidrago",
    "height": 21,
    "weight": 2000,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/895.png",
    "types": [
      "dragon"
    ],
    "baseExperience": 290,
    "abilities": [
      {
        "name": "dragons-maw",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 896,
    "name": "glastrier",
    "height": 22,
    "weight": 8000,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/896.png",
    "types": [
      "ice"
    ],
    "baseExperience": 290,
    "abilities": [
      {
        "name": "chilling-neigh",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 897,
    "name": "spectrier",
    "height": 20,
    "weight": 445,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/897.png",
    "types": [
      "ghost"
    ],
    "baseExperience": 290,
    "abilities": [
      {
        "name": "grim-neigh",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 898,
    "name": "calyrex",
    "height": 11,
    "weight": 77,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/898.png",
    "types": [
      "psychic",
      "grass"
    ],
    "baseExperience": 250,
    "abilities": [
      {
        "name": "unnerve",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 899,
    "name": "wyrdeer",
    "height": 18,
    "weight": 951,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/899.png",
    "types": [
      "normal",
      "psychic"
    ],
    "baseExperience": 263,
    "abilities": [
      {
        "name": "intimidate",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "frisk",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "sap-sipper",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 900,
    "name": "kleavor",
    "height": 18,
    "weight": 890,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/900.png",
    "types": [
      "bug",
      "rock"
    ],
    "baseExperience": 175,
    "abilities": [
      {
        "name": "swarm",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sheer-force",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "sharpness",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 901,
    "name": "ursaluna",
    "height": 24,
    "weight": 2900,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/901.png",
    "types": [
      "ground",
      "normal"
    ],
    "baseExperience": 275,
    "abilities": [
      {
        "name": "guts",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "bulletproof",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "unnerve",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 902,
    "name": "basculegion-male",
    "height": 30,
    "weight": 1100,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/902.png",
    "types": [
      "water",
      "ghost"
    ],
    "baseExperience": 265,
    "abilities": [
      {
        "name": "swift-swim",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "adaptability",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "mold-breaker",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 903,
    "name": "sneasler",
    "height": 13,
    "weight": 430,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/903.png",
    "types": [
      "fighting",
      "poison"
    ],
    "baseExperience": 102,
    "abilities": [
      {
        "name": "pressure",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "unburden",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "poison-touch",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 904,
    "name": "overqwil",
    "height": 25,
    "weight": 605,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/904.png",
    "types": [
      "dark",
      "poison"
    ],
    "baseExperience": 179,
    "abilities": [
      {
        "name": "poison-point",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "swift-swim",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "intimidate",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 905,
    "name": "enamorus-incarnate",
    "height": 16,
    "weight": 480,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/905.png",
    "types": [
      "fairy",
      "flying"
    ],
    "baseExperience": 116,
    "abilities": [
      {
        "name": "cute-charm",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "contrary",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 906,
    "name": "sprigatito",
    "height": 4,
    "weight": 41,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/906.png",
    "types": [
      "grass"
    ],
    "baseExperience": 62,
    "abilities": [
      {
        "name": "overgrow",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "protean",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 907,
    "name": "floragato",
    "height": 9,
    "weight": 122,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/907.png",
    "types": [
      "grass"
    ],
    "baseExperience": 144,
    "abilities": [
      {
        "name": "overgrow",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "protean",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 908,
    "name": "meowscarada",
    "height": 15,
    "weight": 312,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/908.png",
    "types": [
      "grass",
      "dark"
    ],
    "baseExperience": 265,
    "abilities": [
      {
        "name": "overgrow",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "protean",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 909,
    "name": "fuecoco",
    "height": 4,
    "weight": 98,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/909.png",
    "types": [
      "fire"
    ],
    "baseExperience": 62,
    "abilities": [
      {
        "name": "blaze",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "unaware",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 910,
    "name": "crocalor",
    "height": 10,
    "weight": 307,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/910.png",
    "types": [
      "fire"
    ],
    "baseExperience": 144,
    "abilities": [
      {
        "name": "blaze",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "unaware",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 911,
    "name": "skeledirge",
    "height": 16,
    "weight": 3265,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/911.png",
    "types": [
      "fire",
      "ghost"
    ],
    "baseExperience": 265,
    "abilities": [
      {
        "name": "blaze",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "unaware",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 912,
    "name": "quaxly",
    "height": 5,
    "weight": 61,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/912.png",
    "types": [
      "water"
    ],
    "baseExperience": 62,
    "abilities": [
      {
        "name": "torrent",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "moxie",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 913,
    "name": "quaxwell",
    "height": 12,
    "weight": 215,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/913.png",
    "types": [
      "water"
    ],
    "baseExperience": 144,
    "abilities": [
      {
        "name": "torrent",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "moxie",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 914,
    "name": "quaquaval",
    "height": 18,
    "weight": 619,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/914.png",
    "types": [
      "water",
      "fighting"
    ],
    "baseExperience": 265,
    "abilities": [
      {
        "name": "torrent",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "moxie",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 915,
    "name": "lechonk",
    "height": 5,
    "weight": 102,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/915.png",
    "types": [
      "normal"
    ],
    "baseExperience": 51,
    "abilities": [
      {
        "name": "aroma-veil",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "gluttony",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "thick-fat",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 916,
    "name": "oinkologne-male",
    "height": 10,
    "weight": 1200,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/916.png",
    "types": [
      "normal"
    ],
    "baseExperience": 171,
    "abilities": [
      {
        "name": "lingering-aroma",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "gluttony",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "thick-fat",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 917,
    "name": "tarountula",
    "height": 3,
    "weight": 40,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/917.png",
    "types": [
      "bug"
    ],
    "baseExperience": 42,
    "abilities": [
      {
        "name": "insomnia",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "stakeout",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 918,
    "name": "spidops",
    "height": 10,
    "weight": 165,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/918.png",
    "types": [
      "bug"
    ],
    "baseExperience": 141,
    "abilities": [
      {
        "name": "insomnia",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "stakeout",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 919,
    "name": "nymble",
    "height": 2,
    "weight": 10,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/919.png",
    "types": [
      "bug"
    ],
    "baseExperience": 42,
    "abilities": [
      {
        "name": "swarm",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "tinted-lens",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 920,
    "name": "lokix",
    "height": 10,
    "weight": 175,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/920.png",
    "types": [
      "bug",
      "dark"
    ],
    "baseExperience": 158,
    "abilities": [
      {
        "name": "swarm",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "tinted-lens",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 921,
    "name": "pawmi",
    "height": 3,
    "weight": 25,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/921.png",
    "types": [
      "electric"
    ],
    "baseExperience": 48,
    "abilities": [
      {
        "name": "static",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "natural-cure",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "iron-fist",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 922,
    "name": "pawmo",
    "height": 4,
    "weight": 65,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/922.png",
    "types": [
      "electric",
      "fighting"
    ],
    "baseExperience": 123,
    "abilities": [
      {
        "name": "volt-absorb",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "natural-cure",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "iron-fist",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 923,
    "name": "pawmot",
    "height": 9,
    "weight": 410,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/923.png",
    "types": [
      "electric",
      "fighting"
    ],
    "baseExperience": 245,
    "abilities": [
      {
        "name": "volt-absorb",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "natural-cure",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "iron-fist",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 924,
    "name": "tandemaus",
    "height": 3,
    "weight": 18,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/924.png",
    "types": [
      "normal"
    ],
    "baseExperience": 61,
    "abilities": [
      {
        "name": "run-away",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "pickup",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "own-tempo",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 925,
    "name": "maushold-family-of-four",
    "height": 3,
    "weight": 23,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/925.png",
    "types": [
      "normal"
    ],
    "baseExperience": 165,
    "abilities": [
      {
        "name": "friend-guard",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "cheek-pouch",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "technician",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 926,
    "name": "fidough",
    "height": 3,
    "weight": 109,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/926.png",
    "types": [
      "fairy"
    ],
    "baseExperience": 62,
    "abilities": [
      {
        "name": "own-tempo",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "klutz",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 927,
    "name": "dachsbun",
    "height": 5,
    "weight": 149,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/927.png",
    "types": [
      "fairy"
    ],
    "baseExperience": 167,
    "abilities": [
      {
        "name": "well-baked-body",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "aroma-veil",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 928,
    "name": "smoliv",
    "height": 3,
    "weight": 65,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/928.png",
    "types": [
      "grass",
      "normal"
    ],
    "baseExperience": 52,
    "abilities": [
      {
        "name": "early-bird",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "harvest",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 929,
    "name": "dolliv",
    "height": 6,
    "weight": 119,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/929.png",
    "types": [
      "grass",
      "normal"
    ],
    "baseExperience": 124,
    "abilities": [
      {
        "name": "early-bird",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "harvest",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 930,
    "name": "arboliva",
    "height": 14,
    "weight": 482,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/930.png",
    "types": [
      "grass",
      "normal"
    ],
    "baseExperience": 255,
    "abilities": [
      {
        "name": "seed-sower",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "harvest",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 931,
    "name": "squawkabilly-green-plumage",
    "height": 6,
    "weight": 24,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/931.png",
    "types": [
      "normal",
      "flying"
    ],
    "baseExperience": 146,
    "abilities": [
      {
        "name": "intimidate",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "hustle",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "guts",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 932,
    "name": "nacli",
    "height": 4,
    "weight": 160,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/932.png",
    "types": [
      "rock"
    ],
    "baseExperience": 56,
    "abilities": [
      {
        "name": "purifying-salt",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sturdy",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "clear-body",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 933,
    "name": "naclstack",
    "height": 6,
    "weight": 1050,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/933.png",
    "types": [
      "rock"
    ],
    "baseExperience": 124,
    "abilities": [
      {
        "name": "purifying-salt",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sturdy",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "clear-body",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 934,
    "name": "garganacl",
    "height": 23,
    "weight": 2400,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/934.png",
    "types": [
      "rock"
    ],
    "baseExperience": 250,
    "abilities": [
      {
        "name": "purifying-salt",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sturdy",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "clear-body",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 935,
    "name": "charcadet",
    "height": 6,
    "weight": 105,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/935.png",
    "types": [
      "fire"
    ],
    "baseExperience": 51,
    "abilities": [
      {
        "name": "flash-fire",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "flame-body",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 936,
    "name": "armarouge",
    "height": 15,
    "weight": 850,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/936.png",
    "types": [
      "fire",
      "psychic"
    ],
    "baseExperience": 263,
    "abilities": [
      {
        "name": "flash-fire",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "weak-armor",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 937,
    "name": "ceruledge",
    "height": 16,
    "weight": 620,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/937.png",
    "types": [
      "fire",
      "ghost"
    ],
    "baseExperience": 263,
    "abilities": [
      {
        "name": "flash-fire",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "weak-armor",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 938,
    "name": "tadbulb",
    "height": 3,
    "weight": 4,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/938.png",
    "types": [
      "electric"
    ],
    "baseExperience": 54,
    "abilities": [
      {
        "name": "own-tempo",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "static",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "damp",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 939,
    "name": "bellibolt",
    "height": 12,
    "weight": 1130,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/939.png",
    "types": [
      "electric"
    ],
    "baseExperience": 173,
    "abilities": [
      {
        "name": "electromorphosis",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "static",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "damp",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 940,
    "name": "wattrel",
    "height": 4,
    "weight": 36,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/940.png",
    "types": [
      "electric",
      "flying"
    ],
    "baseExperience": 56,
    "abilities": [
      {
        "name": "wind-power",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "volt-absorb",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "competitive",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 941,
    "name": "kilowattrel",
    "height": 14,
    "weight": 386,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/941.png",
    "types": [
      "electric",
      "flying"
    ],
    "baseExperience": 172,
    "abilities": [
      {
        "name": "wind-power",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "volt-absorb",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "competitive",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 942,
    "name": "maschiff",
    "height": 5,
    "weight": 160,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/942.png",
    "types": [
      "dark"
    ],
    "baseExperience": 68,
    "abilities": [
      {
        "name": "intimidate",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "run-away",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "stakeout",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 943,
    "name": "mabosstiff",
    "height": 11,
    "weight": 610,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/943.png",
    "types": [
      "dark"
    ],
    "baseExperience": 177,
    "abilities": [
      {
        "name": "intimidate",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "guard-dog",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "stakeout",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 944,
    "name": "shroodle",
    "height": 2,
    "weight": 7,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/944.png",
    "types": [
      "poison",
      "normal"
    ],
    "baseExperience": 58,
    "abilities": [
      {
        "name": "unburden",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "pickpocket",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "prankster",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 945,
    "name": "grafaiai",
    "height": 7,
    "weight": 272,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/945.png",
    "types": [
      "poison",
      "normal"
    ],
    "baseExperience": 170,
    "abilities": [
      {
        "name": "unburden",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "poison-touch",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "prankster",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 946,
    "name": "bramblin",
    "height": 6,
    "weight": 6,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/946.png",
    "types": [
      "grass",
      "ghost"
    ],
    "baseExperience": 55,
    "abilities": [
      {
        "name": "wind-rider",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "infiltrator",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 947,
    "name": "brambleghast",
    "height": 12,
    "weight": 60,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/947.png",
    "types": [
      "grass",
      "ghost"
    ],
    "baseExperience": 168,
    "abilities": [
      {
        "name": "wind-rider",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "infiltrator",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 948,
    "name": "toedscool",
    "height": 9,
    "weight": 330,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/948.png",
    "types": [
      "ground",
      "grass"
    ],
    "baseExperience": 67,
    "abilities": [
      {
        "name": "mycelium-might",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "mycelium-might",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 949,
    "name": "toedscruel",
    "height": 19,
    "weight": 580,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/949.png",
    "types": [
      "ground",
      "grass"
    ],
    "baseExperience": 180,
    "abilities": [
      {
        "name": "mycelium-might",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "mycelium-might",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 950,
    "name": "klawf",
    "height": 13,
    "weight": 790,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/950.png",
    "types": [
      "rock"
    ],
    "baseExperience": 158,
    "abilities": [
      {
        "name": "anger-shell",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "shell-armor",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "regenerator",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 951,
    "name": "capsakid",
    "height": 3,
    "weight": 30,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/951.png",
    "types": [
      "grass"
    ],
    "baseExperience": 61,
    "abilities": [
      {
        "name": "chlorophyll",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "insomnia",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "klutz",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 952,
    "name": "scovillain",
    "height": 9,
    "weight": 150,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/952.png",
    "types": [
      "grass",
      "fire"
    ],
    "baseExperience": 170,
    "abilities": [
      {
        "name": "chlorophyll",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "insomnia",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "moody",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 953,
    "name": "rellor",
    "height": 2,
    "weight": 10,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/953.png",
    "types": [
      "bug"
    ],
    "baseExperience": 54,
    "abilities": [
      {
        "name": "compound-eyes",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "shed-skin",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 954,
    "name": "rabsca",
    "height": 3,
    "weight": 35,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/954.png",
    "types": [
      "bug",
      "psychic"
    ],
    "baseExperience": 165,
    "abilities": [
      {
        "name": "synchronize",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "telepathy",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 955,
    "name": "flittle",
    "height": 2,
    "weight": 15,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/955.png",
    "types": [
      "psychic"
    ],
    "baseExperience": 51,
    "abilities": [
      {
        "name": "anticipation",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "frisk",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "speed-boost",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 956,
    "name": "espathra",
    "height": 19,
    "weight": 900,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/956.png",
    "types": [
      "psychic"
    ],
    "baseExperience": 168,
    "abilities": [
      {
        "name": "opportunist",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "frisk",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "speed-boost",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 957,
    "name": "tinkatink",
    "height": 4,
    "weight": 89,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/957.png",
    "types": [
      "fairy",
      "steel"
    ],
    "baseExperience": 59,
    "abilities": [
      {
        "name": "mold-breaker",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "own-tempo",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "pickpocket",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 958,
    "name": "tinkatuff",
    "height": 7,
    "weight": 591,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/958.png",
    "types": [
      "fairy",
      "steel"
    ],
    "baseExperience": 133,
    "abilities": [
      {
        "name": "mold-breaker",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "own-tempo",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "pickpocket",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 959,
    "name": "tinkaton",
    "height": 7,
    "weight": 1128,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/959.png",
    "types": [
      "fairy",
      "steel"
    ],
    "baseExperience": 253,
    "abilities": [
      {
        "name": "mold-breaker",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "own-tempo",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "pickpocket",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 960,
    "name": "wiglett",
    "height": 12,
    "weight": 18,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/960.png",
    "types": [
      "water"
    ],
    "baseExperience": 49,
    "abilities": [
      {
        "name": "gooey",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "rattled",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "sand-veil",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 961,
    "name": "wugtrio",
    "height": 12,
    "weight": 54,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/961.png",
    "types": [
      "water"
    ],
    "baseExperience": 149,
    "abilities": [
      {
        "name": "gooey",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "rattled",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "sand-veil",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 962,
    "name": "bombirdier",
    "height": 15,
    "weight": 429,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/962.png",
    "types": [
      "flying",
      "dark"
    ],
    "baseExperience": 243,
    "abilities": [
      {
        "name": "big-pecks",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "keen-eye",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "rocky-payload",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 963,
    "name": "finizen",
    "height": 13,
    "weight": 602,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/963.png",
    "types": [
      "water"
    ],
    "baseExperience": 63,
    "abilities": [
      {
        "name": "water-veil",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "water-veil",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 964,
    "name": "palafin-zero",
    "height": 13,
    "weight": 602,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/964.png",
    "types": [
      "water"
    ],
    "baseExperience": 160,
    "abilities": [
      {
        "name": "zero-to-hero",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "zero-to-hero",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 965,
    "name": "varoom",
    "height": 10,
    "weight": 350,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/965.png",
    "types": [
      "steel",
      "poison"
    ],
    "baseExperience": 60,
    "abilities": [
      {
        "name": "overcoat",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "slow-start",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 966,
    "name": "revavroom",
    "height": 18,
    "weight": 1200,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/966.png",
    "types": [
      "steel",
      "poison"
    ],
    "baseExperience": 175,
    "abilities": [
      {
        "name": "overcoat",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "filter",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 967,
    "name": "cyclizar",
    "height": 16,
    "weight": 630,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/967.png",
    "types": [
      "dragon",
      "normal"
    ],
    "baseExperience": 175,
    "abilities": [
      {
        "name": "shed-skin",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "regenerator",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 968,
    "name": "orthworm",
    "height": 25,
    "weight": 3100,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/968.png",
    "types": [
      "steel"
    ],
    "baseExperience": 240,
    "abilities": [
      {
        "name": "earth-eater",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sand-veil",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 969,
    "name": "glimmet",
    "height": 7,
    "weight": 80,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/969.png",
    "types": [
      "rock",
      "poison"
    ],
    "baseExperience": 70,
    "abilities": [
      {
        "name": "toxic-debris",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "corrosion",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 970,
    "name": "glimmora",
    "height": 15,
    "weight": 450,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/970.png",
    "types": [
      "rock",
      "poison"
    ],
    "baseExperience": 184,
    "abilities": [
      {
        "name": "toxic-debris",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "corrosion",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 971,
    "name": "greavard",
    "height": 6,
    "weight": 350,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/971.png",
    "types": [
      "ghost"
    ],
    "baseExperience": 58,
    "abilities": [
      {
        "name": "pickup",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "fluffy",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 972,
    "name": "houndstone",
    "height": 20,
    "weight": 150,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/972.png",
    "types": [
      "ghost"
    ],
    "baseExperience": 171,
    "abilities": [
      {
        "name": "sand-rush",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "fluffy",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 973,
    "name": "flamigo",
    "height": 16,
    "weight": 370,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/973.png",
    "types": [
      "flying",
      "fighting"
    ],
    "baseExperience": 175,
    "abilities": [
      {
        "name": "scrappy",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "tangled-feet",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "costar",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 974,
    "name": "cetoddle",
    "height": 12,
    "weight": 450,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/974.png",
    "types": [
      "ice"
    ],
    "baseExperience": 67,
    "abilities": [
      {
        "name": "thick-fat",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "snow-cloak",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "sheer-force",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 975,
    "name": "cetitan",
    "height": 45,
    "weight": 7000,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/975.png",
    "types": [
      "ice"
    ],
    "baseExperience": 182,
    "abilities": [
      {
        "name": "thick-fat",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "slush-rush",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "sheer-force",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 976,
    "name": "veluza",
    "height": 25,
    "weight": 900,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/976.png",
    "types": [
      "water",
      "psychic"
    ],
    "baseExperience": 167,
    "abilities": [
      {
        "name": "mold-breaker",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sharpness",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 977,
    "name": "dondozo",
    "height": 120,
    "weight": 2200,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/977.png",
    "types": [
      "water"
    ],
    "baseExperience": 265,
    "abilities": [
      {
        "name": "unaware",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "oblivious",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "water-veil",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 978,
    "name": "tatsugiri-curly",
    "height": 3,
    "weight": 80,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/978.png",
    "types": [
      "dragon",
      "water"
    ],
    "baseExperience": 166,
    "abilities": [
      {
        "name": "commander",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "storm-drain",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 979,
    "name": "annihilape",
    "height": 12,
    "weight": 560,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/979.png",
    "types": [
      "fighting",
      "ghost"
    ],
    "baseExperience": 268,
    "abilities": [
      {
        "name": "vital-spirit",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "inner-focus",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "defiant",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 980,
    "name": "clodsire",
    "height": 18,
    "weight": 2230,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/980.png",
    "types": [
      "poison",
      "ground"
    ],
    "baseExperience": 151,
    "abilities": [
      {
        "name": "poison-point",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "water-absorb",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "unaware",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 981,
    "name": "farigiraf",
    "height": 32,
    "weight": 1600,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/981.png",
    "types": [
      "normal",
      "psychic"
    ],
    "baseExperience": 260,
    "abilities": [
      {
        "name": "cud-chew",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "armor-tail",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "sap-sipper",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 982,
    "name": "dudunsparce-two-segment",
    "height": 36,
    "weight": 392,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/982.png",
    "types": [
      "normal"
    ],
    "baseExperience": 182,
    "abilities": [
      {
        "name": "serene-grace",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "run-away",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "rattled",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 983,
    "name": "kingambit",
    "height": 20,
    "weight": 1200,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/983.png",
    "types": [
      "dark",
      "steel"
    ],
    "baseExperience": 275,
    "abilities": [
      {
        "name": "defiant",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "supreme-overlord",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "pressure",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 984,
    "name": "great-tusk",
    "height": 22,
    "weight": 3200,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/984.png",
    "types": [
      "ground",
      "fighting"
    ],
    "baseExperience": 285,
    "abilities": [
      {
        "name": "protosynthesis",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 985,
    "name": "scream-tail",
    "height": 12,
    "weight": 80,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/985.png",
    "types": [
      "fairy",
      "psychic"
    ],
    "baseExperience": 285,
    "abilities": [
      {
        "name": "protosynthesis",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 986,
    "name": "brute-bonnet",
    "height": 12,
    "weight": 210,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/986.png",
    "types": [
      "grass",
      "dark"
    ],
    "baseExperience": 285,
    "abilities": [
      {
        "name": "protosynthesis",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 987,
    "name": "flutter-mane",
    "height": 14,
    "weight": 40,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/987.png",
    "types": [
      "ghost",
      "fairy"
    ],
    "baseExperience": 285,
    "abilities": [
      {
        "name": "protosynthesis",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 988,
    "name": "slither-wing",
    "height": 32,
    "weight": 920,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/988.png",
    "types": [
      "bug",
      "fighting"
    ],
    "baseExperience": 285,
    "abilities": [
      {
        "name": "protosynthesis",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 989,
    "name": "sandy-shocks",
    "height": 23,
    "weight": 600,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/989.png",
    "types": [
      "electric",
      "ground"
    ],
    "baseExperience": 285,
    "abilities": [
      {
        "name": "protosynthesis",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 990,
    "name": "iron-treads",
    "height": 9,
    "weight": 2400,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/990.png",
    "types": [
      "ground",
      "steel"
    ],
    "baseExperience": 285,
    "abilities": [
      {
        "name": "quark-drive",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 991,
    "name": "iron-bundle",
    "height": 6,
    "weight": 110,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/991.png",
    "types": [
      "ice",
      "water"
    ],
    "baseExperience": 285,
    "abilities": [
      {
        "name": "quark-drive",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 992,
    "name": "iron-hands",
    "height": 18,
    "weight": 3807,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/992.png",
    "types": [
      "fighting",
      "electric"
    ],
    "baseExperience": 285,
    "abilities": [
      {
        "name": "quark-drive",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 993,
    "name": "iron-jugulis",
    "height": 13,
    "weight": 1110,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/993.png",
    "types": [
      "dark",
      "flying"
    ],
    "baseExperience": 285,
    "abilities": [
      {
        "name": "quark-drive",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 994,
    "name": "iron-moth",
    "height": 12,
    "weight": 360,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/994.png",
    "types": [
      "fire",
      "poison"
    ],
    "baseExperience": 285,
    "abilities": [
      {
        "name": "quark-drive",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 995,
    "name": "iron-thorns",
    "height": 16,
    "weight": 3030,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/995.png",
    "types": [
      "rock",
      "electric"
    ],
    "baseExperience": 285,
    "abilities": [
      {
        "name": "quark-drive",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 996,
    "name": "frigibax",
    "height": 5,
    "weight": 170,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/996.png",
    "types": [
      "dragon",
      "ice"
    ],
    "baseExperience": 64,
    "abilities": [
      {
        "name": "thermal-exchange",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "ice-body",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 997,
    "name": "arctibax",
    "height": 8,
    "weight": 300,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/997.png",
    "types": [
      "dragon",
      "ice"
    ],
    "baseExperience": 148,
    "abilities": [
      {
        "name": "thermal-exchange",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "ice-body",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 998,
    "name": "baxcalibur",
    "height": 21,
    "weight": 2100,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/998.png",
    "types": [
      "dragon",
      "ice"
    ],
    "baseExperience": 300,
    "abilities": [
      {
        "name": "thermal-exchange",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "ice-body",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 999,
    "name": "gimmighoul",
    "height": 3,
    "weight": 50,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/999.png",
    "types": [
      "ghost"
    ],
    "baseExperience": 60,
    "abilities": [
      {
        "name": "rattled",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 1000,
    "name": "gholdengo",
    "height": 12,
    "weight": 300,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1000.png",
    "types": [
      "steel",
      "ghost"
    ],
    "baseExperience": 275,
    "abilities": [
      {
        "name": "good-as-gold",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 1001,
    "name": "wo-chien",
    "height": 15,
    "weight": 742,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1001.png",
    "types": [
      "dark",
      "grass"
    ],
    "baseExperience": 285,
    "abilities": [
      {
        "name": "tablets-of-ruin",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 1002,
    "name": "chien-pao",
    "height": 19,
    "weight": 1522,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1002.png",
    "types": [
      "dark",
      "ice"
    ],
    "baseExperience": 285,
    "abilities": [
      {
        "name": "sword-of-ruin",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 1003,
    "name": "ting-lu",
    "height": 27,
    "weight": 6997,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1003.png",
    "types": [
      "dark",
      "ground"
    ],
    "baseExperience": 285,
    "abilities": [
      {
        "name": "vessel-of-ruin",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 1004,
    "name": "chi-yu",
    "height": 4,
    "weight": 49,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1004.png",
    "types": [
      "dark",
      "fire"
    ],
    "baseExperience": 285,
    "abilities": [
      {
        "name": "beads-of-ruin",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 1005,
    "name": "roaring-moon",
    "height": 20,
    "weight": 3800,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1005.png",
    "types": [
      "dragon",
      "dark"
    ],
    "baseExperience": 295,
    "abilities": [
      {
        "name": "protosynthesis",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 1006,
    "name": "iron-valiant",
    "height": 14,
    "weight": 350,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1006.png",
    "types": [
      "fairy",
      "fighting"
    ],
    "baseExperience": 295,
    "abilities": [
      {
        "name": "quark-drive",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 1007,
    "name": "koraidon",
    "height": 25,
    "weight": 3030,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1007.png",
    "types": [
      "fighting",
      "dragon"
    ],
    "baseExperience": 335,
    "abilities": [
      {
        "name": "orichalcum-pulse",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 1008,
    "name": "miraidon",
    "height": 35,
    "weight": 2400,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1008.png",
    "types": [
      "electric",
      "dragon"
    ],
    "baseExperience": 335,
    "abilities": [
      {
        "name": "hadron-engine",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 1009,
    "name": "walking-wake",
    "height": 35,
    "weight": 2800,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1009.png",
    "types": [
      "water",
      "dragon"
    ],
    "baseExperience": 295,
    "abilities": [
      {
        "name": "protosynthesis",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 1010,
    "name": "iron-leaves",
    "height": 15,
    "weight": 1250,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1010.png",
    "types": [
      "grass",
      "psychic"
    ],
    "baseExperience": 295,
    "abilities": [
      {
        "name": "quark-drive",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 1011,
    "name": "dipplin",
    "height": 4,
    "weight": 97,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1011.png",
    "types": [
      "grass",
      "dragon"
    ],
    "baseExperience": 170,
    "abilities": [
      {
        "name": "supersweet-syrup",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "gluttony",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "sticky-hold",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 1012,
    "name": "poltchageist",
    "height": 1,
    "weight": 11,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1012.png",
    "types": [
      "grass",
      "ghost"
    ],
    "baseExperience": 62,
    "abilities": [
      {
        "name": "hospitality",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "heatproof",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 1013,
    "name": "sinistcha",
    "height": 2,
    "weight": 22,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1013.png",
    "types": [
      "grass",
      "ghost"
    ],
    "baseExperience": 178,
    "abilities": [
      {
        "name": "hospitality",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "heatproof",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 1014,
    "name": "okidogi",
    "height": 18,
    "weight": 922,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1014.png",
    "types": [
      "poison",
      "fighting"
    ],
    "baseExperience": 278,
    "abilities": [
      {
        "name": "toxic-chain",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "guard-dog",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 1015,
    "name": "munkidori",
    "height": 10,
    "weight": 122,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1015.png",
    "types": [
      "poison",
      "psychic"
    ],
    "baseExperience": 278,
    "abilities": [
      {
        "name": "toxic-chain",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "frisk",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 1016,
    "name": "fezandipiti",
    "height": 14,
    "weight": 301,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1016.png",
    "types": [
      "poison",
      "fairy"
    ],
    "baseExperience": 278,
    "abilities": [
      {
        "name": "toxic-chain",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "technician",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 1017,
    "name": "ogerpon",
    "height": 12,
    "weight": 398,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1017.png",
    "types": [
      "grass"
    ],
    "baseExperience": 275,
    "abilities": [
      {
        "name": "defiant",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 1018,
    "name": "archaludon",
    "height": 20,
    "weight": 600,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1018.png",
    "types": [
      "steel",
      "dragon"
    ],
    "baseExperience": 300,
    "abilities": [
      {
        "name": "stamina",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sturdy",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "stalwart",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 1019,
    "name": "hydrapple",
    "height": 18,
    "weight": 930,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1019.png",
    "types": [
      "grass",
      "dragon"
    ],
    "baseExperience": 270,
    "abilities": [
      {
        "name": "supersweet-syrup",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "regenerator",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "sticky-hold",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 1020,
    "name": "gouging-fire",
    "height": 35,
    "weight": 5900,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1020.png",
    "types": [
      "fire",
      "dragon"
    ],
    "baseExperience": 295,
    "abilities": [
      {
        "name": "protosynthesis",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 1021,
    "name": "raging-bolt",
    "height": 52,
    "weight": 4800,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1021.png",
    "types": [
      "electric",
      "dragon"
    ],
    "baseExperience": 295,
    "abilities": [
      {
        "name": "protosynthesis",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 1022,
    "name": "iron-boulder",
    "height": 15,
    "weight": 1625,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1022.png",
    "types": [
      "rock",
      "psychic"
    ],
    "baseExperience": 295,
    "abilities": [
      {
        "name": "quark-drive",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 1023,
    "name": "iron-crown",
    "height": 16,
    "weight": 1560,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1023.png",
    "types": [
      "steel",
      "psychic"
    ],
    "baseExperience": 295,
    "abilities": [
      {
        "name": "quark-drive",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 1024,
    "name": "terapagos",
    "height": 2,
    "weight": 65,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1024.png",
    "types": [
      "normal"
    ],
    "baseExperience": 90,
    "abilities": [
      {
        "name": "tera-shift",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 1025,
    "name": "pecharunt",
    "height": 3,
    "weight": 3,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1025.png",
    "types": [
      "poison",
      "ghost"
    ],
    "baseExperience": 300,
    "abilities": [
      {
        "name": "poison-puppeteer",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10001,
    "name": "deoxys-attack",
    "height": 17,
    "weight": 608,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10001.png",
    "types": [
      "psychic"
    ],
    "baseExperience": 270,
    "abilities": [
      {
        "name": "pressure",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10002,
    "name": "deoxys-defense",
    "height": 17,
    "weight": 608,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10002.png",
    "types": [
      "psychic"
    ],
    "baseExperience": 270,
    "abilities": [
      {
        "name": "pressure",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10003,
    "name": "deoxys-speed",
    "height": 17,
    "weight": 608,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10003.png",
    "types": [
      "psychic"
    ],
    "baseExperience": 270,
    "abilities": [
      {
        "name": "pressure",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10004,
    "name": "wormadam-sandy",
    "height": 5,
    "weight": 65,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10004.png",
    "types": [
      "bug",
      "ground"
    ],
    "baseExperience": 148,
    "abilities": [
      {
        "name": "anticipation",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "overcoat",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10005,
    "name": "wormadam-trash",
    "height": 5,
    "weight": 65,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10005.png",
    "types": [
      "bug",
      "steel"
    ],
    "baseExperience": 148,
    "abilities": [
      {
        "name": "anticipation",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "overcoat",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10006,
    "name": "shaymin-sky",
    "height": 4,
    "weight": 52,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10006.png",
    "types": [
      "grass",
      "flying"
    ],
    "baseExperience": 270,
    "abilities": [
      {
        "name": "serene-grace",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10007,
    "name": "giratina-origin",
    "height": 69,
    "weight": 6500,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10007.png",
    "types": [
      "ghost",
      "dragon"
    ],
    "baseExperience": 340,
    "abilities": [
      {
        "name": "levitate",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10008,
    "name": "rotom-heat",
    "height": 3,
    "weight": 3,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10008.png",
    "types": [
      "electric",
      "fire"
    ],
    "baseExperience": 182,
    "abilities": [
      {
        "name": "levitate",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10009,
    "name": "rotom-wash",
    "height": 3,
    "weight": 3,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10009.png",
    "types": [
      "electric",
      "water"
    ],
    "baseExperience": 182,
    "abilities": [
      {
        "name": "levitate",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10010,
    "name": "rotom-frost",
    "height": 3,
    "weight": 3,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10010.png",
    "types": [
      "electric",
      "ice"
    ],
    "baseExperience": 182,
    "abilities": [
      {
        "name": "levitate",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10011,
    "name": "rotom-fan",
    "height": 3,
    "weight": 3,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10011.png",
    "types": [
      "electric",
      "flying"
    ],
    "baseExperience": 182,
    "abilities": [
      {
        "name": "levitate",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10012,
    "name": "rotom-mow",
    "height": 3,
    "weight": 3,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10012.png",
    "types": [
      "electric",
      "grass"
    ],
    "baseExperience": 182,
    "abilities": [
      {
        "name": "levitate",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10013,
    "name": "castform-sunny",
    "height": 3,
    "weight": 8,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10013.png",
    "types": [
      "fire"
    ],
    "baseExperience": 147,
    "abilities": [
      {
        "name": "forecast",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10014,
    "name": "castform-rainy",
    "height": 3,
    "weight": 8,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10014.png",
    "types": [
      "water"
    ],
    "baseExperience": 147,
    "abilities": [
      {
        "name": "forecast",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10015,
    "name": "castform-snowy",
    "height": 3,
    "weight": 8,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10015.png",
    "types": [
      "ice"
    ],
    "baseExperience": 147,
    "abilities": [
      {
        "name": "forecast",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10016,
    "name": "basculin-blue-striped",
    "height": 10,
    "weight": 180,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10016.png",
    "types": [
      "water"
    ],
    "baseExperience": 161,
    "abilities": [
      {
        "name": "rock-head",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "adaptability",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "mold-breaker",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10017,
    "name": "darmanitan-zen",
    "height": 13,
    "weight": 929,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10017.png",
    "types": [
      "fire",
      "psychic"
    ],
    "baseExperience": 189,
    "abilities": [
      {
        "name": "sheer-force",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "zen-mode",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10018,
    "name": "meloetta-pirouette",
    "height": 6,
    "weight": 65,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10018.png",
    "types": [
      "normal",
      "fighting"
    ],
    "baseExperience": 270,
    "abilities": [
      {
        "name": "serene-grace",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10019,
    "name": "tornadus-therian",
    "height": 14,
    "weight": 630,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10019.png",
    "types": [
      "flying"
    ],
    "baseExperience": 290,
    "abilities": [
      {
        "name": "regenerator",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10020,
    "name": "thundurus-therian",
    "height": 30,
    "weight": 610,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10020.png",
    "types": [
      "electric",
      "flying"
    ],
    "baseExperience": 290,
    "abilities": [
      {
        "name": "volt-absorb",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10021,
    "name": "landorus-therian",
    "height": 13,
    "weight": 680,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10021.png",
    "types": [
      "ground",
      "flying"
    ],
    "baseExperience": 300,
    "abilities": [
      {
        "name": "intimidate",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10022,
    "name": "kyurem-black",
    "height": 33,
    "weight": 3250,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10022.png",
    "types": [
      "dragon",
      "ice"
    ],
    "baseExperience": 350,
    "abilities": [
      {
        "name": "teravolt",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10023,
    "name": "kyurem-white",
    "height": 36,
    "weight": 3250,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10023.png",
    "types": [
      "dragon",
      "ice"
    ],
    "baseExperience": 350,
    "abilities": [
      {
        "name": "turboblaze",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10024,
    "name": "keldeo-resolute",
    "height": 14,
    "weight": 485,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10024.png",
    "types": [
      "water",
      "fighting"
    ],
    "baseExperience": 290,
    "abilities": [
      {
        "name": "justified",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10025,
    "name": "meowstic-female",
    "height": 6,
    "weight": 85,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10025.png",
    "types": [
      "psychic"
    ],
    "baseExperience": 163,
    "abilities": [
      {
        "name": "keen-eye",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "infiltrator",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "competitive",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10026,
    "name": "aegislash-blade",
    "height": 17,
    "weight": 530,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10026.png",
    "types": [
      "steel",
      "ghost"
    ],
    "baseExperience": 250,
    "abilities": [
      {
        "name": "stance-change",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10027,
    "name": "pumpkaboo-small",
    "height": 3,
    "weight": 35,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10027.png",
    "types": [
      "ghost",
      "grass"
    ],
    "baseExperience": 67,
    "abilities": [
      {
        "name": "pickup",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "frisk",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "insomnia",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10028,
    "name": "pumpkaboo-large",
    "height": 5,
    "weight": 75,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10028.png",
    "types": [
      "ghost",
      "grass"
    ],
    "baseExperience": 67,
    "abilities": [
      {
        "name": "pickup",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "frisk",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "insomnia",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10029,
    "name": "pumpkaboo-super",
    "height": 8,
    "weight": 150,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10029.png",
    "types": [
      "ghost",
      "grass"
    ],
    "baseExperience": 67,
    "abilities": [
      {
        "name": "pickup",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "frisk",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "insomnia",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10030,
    "name": "gourgeist-small",
    "height": 7,
    "weight": 95,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10030.png",
    "types": [
      "ghost",
      "grass"
    ],
    "baseExperience": 173,
    "abilities": [
      {
        "name": "pickup",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "frisk",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "insomnia",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10031,
    "name": "gourgeist-large",
    "height": 11,
    "weight": 140,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10031.png",
    "types": [
      "ghost",
      "grass"
    ],
    "baseExperience": 173,
    "abilities": [
      {
        "name": "pickup",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "frisk",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "insomnia",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10032,
    "name": "gourgeist-super",
    "height": 17,
    "weight": 390,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10032.png",
    "types": [
      "ghost",
      "grass"
    ],
    "baseExperience": 173,
    "abilities": [
      {
        "name": "pickup",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "frisk",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "insomnia",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10033,
    "name": "venusaur-mega",
    "height": 24,
    "weight": 1555,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10033.png",
    "types": [
      "grass",
      "poison"
    ],
    "baseExperience": 281,
    "abilities": [
      {
        "name": "thick-fat",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10034,
    "name": "charizard-mega-x",
    "height": 17,
    "weight": 1105,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10034.png",
    "types": [
      "fire",
      "dragon"
    ],
    "baseExperience": 285,
    "abilities": [
      {
        "name": "tough-claws",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10035,
    "name": "charizard-mega-y",
    "height": 17,
    "weight": 1005,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10035.png",
    "types": [
      "fire",
      "flying"
    ],
    "baseExperience": 285,
    "abilities": [
      {
        "name": "drought",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10036,
    "name": "blastoise-mega",
    "height": 16,
    "weight": 1011,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10036.png",
    "types": [
      "water"
    ],
    "baseExperience": 284,
    "abilities": [
      {
        "name": "mega-launcher",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10037,
    "name": "alakazam-mega",
    "height": 12,
    "weight": 480,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10037.png",
    "types": [
      "psychic"
    ],
    "baseExperience": 270,
    "abilities": [
      {
        "name": "trace",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10038,
    "name": "gengar-mega",
    "height": 14,
    "weight": 405,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10038.png",
    "types": [
      "ghost",
      "poison"
    ],
    "baseExperience": 270,
    "abilities": [
      {
        "name": "shadow-tag",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10039,
    "name": "kangaskhan-mega",
    "height": 22,
    "weight": 1000,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10039.png",
    "types": [
      "normal"
    ],
    "baseExperience": 207,
    "abilities": [
      {
        "name": "parental-bond",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10040,
    "name": "pinsir-mega",
    "height": 17,
    "weight": 590,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10040.png",
    "types": [
      "bug",
      "flying"
    ],
    "baseExperience": 210,
    "abilities": [
      {
        "name": "aerilate",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10041,
    "name": "gyarados-mega",
    "height": 65,
    "weight": 3050,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10041.png",
    "types": [
      "water",
      "dark"
    ],
    "baseExperience": 224,
    "abilities": [
      {
        "name": "mold-breaker",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10042,
    "name": "aerodactyl-mega",
    "height": 21,
    "weight": 790,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10042.png",
    "types": [
      "rock",
      "flying"
    ],
    "baseExperience": 215,
    "abilities": [
      {
        "name": "tough-claws",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10043,
    "name": "mewtwo-mega-x",
    "height": 23,
    "weight": 1270,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10043.png",
    "types": [
      "psychic",
      "fighting"
    ],
    "baseExperience": 351,
    "abilities": [
      {
        "name": "steadfast",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10044,
    "name": "mewtwo-mega-y",
    "height": 15,
    "weight": 330,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10044.png",
    "types": [
      "psychic"
    ],
    "baseExperience": 351,
    "abilities": [
      {
        "name": "insomnia",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10045,
    "name": "ampharos-mega",
    "height": 14,
    "weight": 615,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10045.png",
    "types": [
      "electric",
      "dragon"
    ],
    "baseExperience": 275,
    "abilities": [
      {
        "name": "mold-breaker",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10046,
    "name": "scizor-mega",
    "height": 20,
    "weight": 1250,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10046.png",
    "types": [
      "bug",
      "steel"
    ],
    "baseExperience": 210,
    "abilities": [
      {
        "name": "technician",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10047,
    "name": "heracross-mega",
    "height": 17,
    "weight": 625,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10047.png",
    "types": [
      "bug",
      "fighting"
    ],
    "baseExperience": 210,
    "abilities": [
      {
        "name": "skill-link",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10048,
    "name": "houndoom-mega",
    "height": 19,
    "weight": 495,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10048.png",
    "types": [
      "dark",
      "fire"
    ],
    "baseExperience": 210,
    "abilities": [
      {
        "name": "solar-power",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10049,
    "name": "tyranitar-mega",
    "height": 25,
    "weight": 2550,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10049.png",
    "types": [
      "rock",
      "dark"
    ],
    "baseExperience": 315,
    "abilities": [
      {
        "name": "sand-stream",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10050,
    "name": "blaziken-mega",
    "height": 19,
    "weight": 520,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10050.png",
    "types": [
      "fire",
      "fighting"
    ],
    "baseExperience": 284,
    "abilities": [
      {
        "name": "speed-boost",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10051,
    "name": "gardevoir-mega",
    "height": 16,
    "weight": 484,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10051.png",
    "types": [
      "psychic",
      "fairy"
    ],
    "baseExperience": 278,
    "abilities": [
      {
        "name": "pixilate",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10052,
    "name": "mawile-mega",
    "height": 10,
    "weight": 235,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10052.png",
    "types": [
      "steel",
      "fairy"
    ],
    "baseExperience": 168,
    "abilities": [
      {
        "name": "huge-power",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10053,
    "name": "aggron-mega",
    "height": 22,
    "weight": 3950,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10053.png",
    "types": [
      "steel"
    ],
    "baseExperience": 284,
    "abilities": [
      {
        "name": "filter",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10054,
    "name": "medicham-mega",
    "height": 13,
    "weight": 315,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10054.png",
    "types": [
      "fighting",
      "psychic"
    ],
    "baseExperience": 179,
    "abilities": [
      {
        "name": "pure-power",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10055,
    "name": "manectric-mega",
    "height": 18,
    "weight": 440,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10055.png",
    "types": [
      "electric"
    ],
    "baseExperience": 201,
    "abilities": [
      {
        "name": "intimidate",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10056,
    "name": "banette-mega",
    "height": 12,
    "weight": 130,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10056.png",
    "types": [
      "ghost"
    ],
    "baseExperience": 194,
    "abilities": [
      {
        "name": "prankster",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10057,
    "name": "absol-mega",
    "height": 12,
    "weight": 490,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10057.png",
    "types": [
      "dark"
    ],
    "baseExperience": 198,
    "abilities": [
      {
        "name": "magic-bounce",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10058,
    "name": "garchomp-mega",
    "height": 19,
    "weight": 950,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10058.png",
    "types": [
      "dragon",
      "ground"
    ],
    "baseExperience": 315,
    "abilities": [
      {
        "name": "sand-force",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10059,
    "name": "lucario-mega",
    "height": 13,
    "weight": 575,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10059.png",
    "types": [
      "fighting",
      "steel"
    ],
    "baseExperience": 219,
    "abilities": [
      {
        "name": "adaptability",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10060,
    "name": "abomasnow-mega",
    "height": 27,
    "weight": 1850,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10060.png",
    "types": [
      "grass",
      "ice"
    ],
    "baseExperience": 208,
    "abilities": [
      {
        "name": "snow-warning",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10061,
    "name": "floette-eternal",
    "height": 2,
    "weight": 9,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10061.png",
    "types": [
      "fairy"
    ],
    "baseExperience": 243,
    "abilities": [
      {
        "name": "flower-veil",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "symbiosis",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10062,
    "name": "latias-mega",
    "height": 18,
    "weight": 520,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10062.png",
    "types": [
      "dragon",
      "psychic"
    ],
    "baseExperience": 315,
    "abilities": [
      {
        "name": "levitate",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10063,
    "name": "latios-mega",
    "height": 23,
    "weight": 700,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10063.png",
    "types": [
      "dragon",
      "psychic"
    ],
    "baseExperience": 315,
    "abilities": [
      {
        "name": "levitate",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10064,
    "name": "swampert-mega",
    "height": 19,
    "weight": 1020,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10064.png",
    "types": [
      "water",
      "ground"
    ],
    "baseExperience": 286,
    "abilities": [
      {
        "name": "swift-swim",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10065,
    "name": "sceptile-mega",
    "height": 19,
    "weight": 552,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10065.png",
    "types": [
      "grass",
      "dragon"
    ],
    "baseExperience": 284,
    "abilities": [
      {
        "name": "lightning-rod",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10066,
    "name": "sableye-mega",
    "height": 5,
    "weight": 1610,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10066.png",
    "types": [
      "dark",
      "ghost"
    ],
    "baseExperience": 168,
    "abilities": [
      {
        "name": "magic-bounce",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10067,
    "name": "altaria-mega",
    "height": 15,
    "weight": 206,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10067.png",
    "types": [
      "dragon",
      "fairy"
    ],
    "baseExperience": 207,
    "abilities": [
      {
        "name": "pixilate",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10068,
    "name": "gallade-mega",
    "height": 16,
    "weight": 564,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10068.png",
    "types": [
      "psychic",
      "fighting"
    ],
    "baseExperience": 278,
    "abilities": [
      {
        "name": "inner-focus",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10069,
    "name": "audino-mega",
    "height": 15,
    "weight": 320,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10069.png",
    "types": [
      "normal",
      "fairy"
    ],
    "baseExperience": 425,
    "abilities": [
      {
        "name": "healer",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10070,
    "name": "sharpedo-mega",
    "height": 25,
    "weight": 1303,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10070.png",
    "types": [
      "water",
      "dark"
    ],
    "baseExperience": 196,
    "abilities": [
      {
        "name": "strong-jaw",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10071,
    "name": "slowbro-mega",
    "height": 20,
    "weight": 1200,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10071.png",
    "types": [
      "water",
      "psychic"
    ],
    "baseExperience": 207,
    "abilities": [
      {
        "name": "shell-armor",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10072,
    "name": "steelix-mega",
    "height": 105,
    "weight": 7400,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10072.png",
    "types": [
      "steel",
      "ground"
    ],
    "baseExperience": 214,
    "abilities": [
      {
        "name": "sand-force",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10073,
    "name": "pidgeot-mega",
    "height": 22,
    "weight": 505,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10073.png",
    "types": [
      "normal",
      "flying"
    ],
    "baseExperience": 261,
    "abilities": [
      {
        "name": "no-guard",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10074,
    "name": "glalie-mega",
    "height": 21,
    "weight": 3502,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10074.png",
    "types": [
      "ice"
    ],
    "baseExperience": 203,
    "abilities": [
      {
        "name": "refrigerate",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10075,
    "name": "diancie-mega",
    "height": 11,
    "weight": 278,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10075.png",
    "types": [
      "rock",
      "fairy"
    ],
    "baseExperience": 315,
    "abilities": [
      {
        "name": "magic-bounce",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10076,
    "name": "metagross-mega",
    "height": 25,
    "weight": 9429,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10076.png",
    "types": [
      "steel",
      "psychic"
    ],
    "baseExperience": 315,
    "abilities": [
      {
        "name": "tough-claws",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10077,
    "name": "kyogre-primal",
    "height": 98,
    "weight": 4300,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10077.png",
    "types": [
      "water"
    ],
    "baseExperience": 347,
    "abilities": [
      {
        "name": "primordial-sea",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10078,
    "name": "groudon-primal",
    "height": 50,
    "weight": 9997,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10078.png",
    "types": [
      "ground",
      "fire"
    ],
    "baseExperience": 347,
    "abilities": [
      {
        "name": "desolate-land",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10079,
    "name": "rayquaza-mega",
    "height": 108,
    "weight": 3920,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10079.png",
    "types": [
      "dragon",
      "flying"
    ],
    "baseExperience": 351,
    "abilities": [
      {
        "name": "delta-stream",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10080,
    "name": "pikachu-rock-star",
    "height": 4,
    "weight": 60,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10080.png",
    "types": [
      "electric"
    ],
    "baseExperience": 112,
    "abilities": [
      {
        "name": "static",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "lightning-rod",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10081,
    "name": "pikachu-belle",
    "height": 4,
    "weight": 60,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10081.png",
    "types": [
      "electric"
    ],
    "baseExperience": 112,
    "abilities": [
      {
        "name": "static",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "lightning-rod",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10082,
    "name": "pikachu-pop-star",
    "height": 4,
    "weight": 60,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10082.png",
    "types": [
      "electric"
    ],
    "baseExperience": 112,
    "abilities": [
      {
        "name": "static",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "lightning-rod",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10083,
    "name": "pikachu-phd",
    "height": 4,
    "weight": 60,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10083.png",
    "types": [
      "electric"
    ],
    "baseExperience": 112,
    "abilities": [
      {
        "name": "static",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "lightning-rod",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10084,
    "name": "pikachu-libre",
    "height": 4,
    "weight": 60,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10084.png",
    "types": [
      "electric"
    ],
    "baseExperience": 112,
    "abilities": [
      {
        "name": "static",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "lightning-rod",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10085,
    "name": "pikachu-cosplay",
    "height": 4,
    "weight": 60,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10085.png",
    "types": [
      "electric"
    ],
    "baseExperience": 112,
    "abilities": [
      {
        "name": "static",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "lightning-rod",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10086,
    "name": "hoopa-unbound",
    "height": 65,
    "weight": 4900,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10086.png",
    "types": [
      "psychic",
      "dark"
    ],
    "baseExperience": 306,
    "abilities": [
      {
        "name": "magician",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10087,
    "name": "camerupt-mega",
    "height": 25,
    "weight": 3205,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10087.png",
    "types": [
      "fire",
      "ground"
    ],
    "baseExperience": 196,
    "abilities": [
      {
        "name": "sheer-force",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10088,
    "name": "lopunny-mega",
    "height": 13,
    "weight": 283,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10088.png",
    "types": [
      "normal",
      "fighting"
    ],
    "baseExperience": 203,
    "abilities": [
      {
        "name": "scrappy",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10089,
    "name": "salamence-mega",
    "height": 18,
    "weight": 1126,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10089.png",
    "types": [
      "dragon",
      "flying"
    ],
    "baseExperience": 315,
    "abilities": [
      {
        "name": "aerilate",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10090,
    "name": "beedrill-mega",
    "height": 14,
    "weight": 405,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10090.png",
    "types": [
      "bug",
      "poison"
    ],
    "baseExperience": 223,
    "abilities": [
      {
        "name": "adaptability",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10091,
    "name": "rattata-alola",
    "height": 3,
    "weight": 38,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10091.png",
    "types": [
      "dark",
      "normal"
    ],
    "baseExperience": 51,
    "abilities": [
      {
        "name": "gluttony",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "hustle",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "thick-fat",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10092,
    "name": "raticate-alola",
    "height": 7,
    "weight": 255,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10092.png",
    "types": [
      "dark",
      "normal"
    ],
    "baseExperience": 145,
    "abilities": [
      {
        "name": "gluttony",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "hustle",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "thick-fat",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10093,
    "name": "raticate-totem-alola",
    "height": 14,
    "weight": 1050,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10093.png",
    "types": [
      "dark",
      "normal"
    ],
    "baseExperience": 145,
    "abilities": [
      {
        "name": "gluttony",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "hustle",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "thick-fat",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10094,
    "name": "pikachu-original-cap",
    "height": 4,
    "weight": 60,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10094.png",
    "types": [
      "electric"
    ],
    "baseExperience": 112,
    "abilities": [
      {
        "name": "static",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "lightning-rod",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10095,
    "name": "pikachu-hoenn-cap",
    "height": 4,
    "weight": 60,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10095.png",
    "types": [
      "electric"
    ],
    "baseExperience": 112,
    "abilities": [
      {
        "name": "static",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "lightning-rod",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10096,
    "name": "pikachu-sinnoh-cap",
    "height": 4,
    "weight": 60,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10096.png",
    "types": [
      "electric"
    ],
    "baseExperience": 112,
    "abilities": [
      {
        "name": "static",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "lightning-rod",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10097,
    "name": "pikachu-unova-cap",
    "height": 4,
    "weight": 60,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10097.png",
    "types": [
      "electric"
    ],
    "baseExperience": 112,
    "abilities": [
      {
        "name": "static",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "lightning-rod",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10098,
    "name": "pikachu-kalos-cap",
    "height": 4,
    "weight": 60,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10098.png",
    "types": [
      "electric"
    ],
    "baseExperience": 112,
    "abilities": [
      {
        "name": "static",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "lightning-rod",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10099,
    "name": "pikachu-alola-cap",
    "height": 4,
    "weight": 60,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10099.png",
    "types": [
      "electric"
    ],
    "baseExperience": 112,
    "abilities": [
      {
        "name": "static",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "lightning-rod",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10100,
    "name": "raichu-alola",
    "height": 7,
    "weight": 210,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10100.png",
    "types": [
      "electric",
      "psychic"
    ],
    "baseExperience": 243,
    "abilities": [
      {
        "name": "surge-surfer",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10101,
    "name": "sandshrew-alola",
    "height": 7,
    "weight": 400,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10101.png",
    "types": [
      "ice",
      "steel"
    ],
    "baseExperience": 60,
    "abilities": [
      {
        "name": "snow-cloak",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "slush-rush",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10102,
    "name": "sandslash-alola",
    "height": 12,
    "weight": 550,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10102.png",
    "types": [
      "ice",
      "steel"
    ],
    "baseExperience": 158,
    "abilities": [
      {
        "name": "snow-cloak",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "slush-rush",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10103,
    "name": "vulpix-alola",
    "height": 6,
    "weight": 99,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10103.png",
    "types": [
      "ice"
    ],
    "baseExperience": 60,
    "abilities": [
      {
        "name": "snow-cloak",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "snow-warning",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10104,
    "name": "ninetales-alola",
    "height": 11,
    "weight": 199,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10104.png",
    "types": [
      "ice",
      "fairy"
    ],
    "baseExperience": 177,
    "abilities": [
      {
        "name": "snow-cloak",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "snow-warning",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10105,
    "name": "diglett-alola",
    "height": 2,
    "weight": 10,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10105.png",
    "types": [
      "ground",
      "steel"
    ],
    "baseExperience": 53,
    "abilities": [
      {
        "name": "sand-veil",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "tangling-hair",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "sand-force",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10106,
    "name": "dugtrio-alola",
    "height": 7,
    "weight": 666,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10106.png",
    "types": [
      "ground",
      "steel"
    ],
    "baseExperience": 149,
    "abilities": [
      {
        "name": "sand-veil",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "tangling-hair",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "sand-force",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10107,
    "name": "meowth-alola",
    "height": 4,
    "weight": 42,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10107.png",
    "types": [
      "dark"
    ],
    "baseExperience": 58,
    "abilities": [
      {
        "name": "pickup",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "technician",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "rattled",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10108,
    "name": "persian-alola",
    "height": 11,
    "weight": 330,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10108.png",
    "types": [
      "dark"
    ],
    "baseExperience": 154,
    "abilities": [
      {
        "name": "fur-coat",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "technician",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "rattled",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10109,
    "name": "geodude-alola",
    "height": 4,
    "weight": 203,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10109.png",
    "types": [
      "rock",
      "electric"
    ],
    "baseExperience": 60,
    "abilities": [
      {
        "name": "magnet-pull",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sturdy",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "galvanize",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10110,
    "name": "graveler-alola",
    "height": 10,
    "weight": 1100,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10110.png",
    "types": [
      "rock",
      "electric"
    ],
    "baseExperience": 137,
    "abilities": [
      {
        "name": "magnet-pull",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sturdy",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "galvanize",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10111,
    "name": "golem-alola",
    "height": 17,
    "weight": 3160,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10111.png",
    "types": [
      "rock",
      "electric"
    ],
    "baseExperience": 223,
    "abilities": [
      {
        "name": "magnet-pull",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sturdy",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "galvanize",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10112,
    "name": "grimer-alola",
    "height": 7,
    "weight": 420,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10112.png",
    "types": [
      "poison",
      "dark"
    ],
    "baseExperience": 65,
    "abilities": [
      {
        "name": "poison-touch",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "gluttony",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "power-of-alchemy",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10113,
    "name": "muk-alola",
    "height": 10,
    "weight": 520,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10113.png",
    "types": [
      "poison",
      "dark"
    ],
    "baseExperience": 175,
    "abilities": [
      {
        "name": "poison-touch",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "gluttony",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "power-of-alchemy",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10114,
    "name": "exeggutor-alola",
    "height": 109,
    "weight": 4156,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10114.png",
    "types": [
      "grass",
      "dragon"
    ],
    "baseExperience": 186,
    "abilities": [
      {
        "name": "frisk",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "harvest",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10115,
    "name": "marowak-alola",
    "height": 10,
    "weight": 340,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10115.png",
    "types": [
      "fire",
      "ghost"
    ],
    "baseExperience": 149,
    "abilities": [
      {
        "name": "cursed-body",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "lightning-rod",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "rock-head",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10116,
    "name": "greninja-battle-bond",
    "height": 15,
    "weight": 400,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10116.png",
    "types": [
      "water",
      "dark"
    ],
    "baseExperience": 239,
    "abilities": [
      {
        "name": "battle-bond",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10117,
    "name": "greninja-ash",
    "height": 15,
    "weight": 400,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10117.png",
    "types": [
      "water",
      "dark"
    ],
    "baseExperience": 288,
    "abilities": [
      {
        "name": "battle-bond",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10118,
    "name": "zygarde-10-power-construct",
    "height": 12,
    "weight": 335,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10118.png",
    "types": [
      "dragon",
      "ground"
    ],
    "baseExperience": 243,
    "abilities": [
      {
        "name": "power-construct",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10119,
    "name": "zygarde-50-power-construct",
    "height": 50,
    "weight": 3050,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10119.png",
    "types": [
      "dragon",
      "ground"
    ],
    "baseExperience": 300,
    "abilities": [
      {
        "name": "power-construct",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10120,
    "name": "zygarde-complete",
    "height": 45,
    "weight": 6100,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10120.png",
    "types": [
      "dragon",
      "ground"
    ],
    "baseExperience": 354,
    "abilities": [
      {
        "name": "power-construct",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10121,
    "name": "gumshoos-totem",
    "height": 14,
    "weight": 600,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10121.png",
    "types": [
      "normal"
    ],
    "baseExperience": 146,
    "abilities": [
      {
        "name": "stakeout",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "strong-jaw",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "adaptability",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10122,
    "name": "vikavolt-totem",
    "height": 26,
    "weight": 1475,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10122.png",
    "types": [
      "bug",
      "electric"
    ],
    "baseExperience": 225,
    "abilities": [
      {
        "name": "levitate",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10123,
    "name": "oricorio-pom-pom",
    "height": 6,
    "weight": 34,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10123.png",
    "types": [
      "electric",
      "flying"
    ],
    "baseExperience": 167,
    "abilities": [
      {
        "name": "dancer",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10124,
    "name": "oricorio-pau",
    "height": 6,
    "weight": 34,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10124.png",
    "types": [
      "psychic",
      "flying"
    ],
    "baseExperience": 167,
    "abilities": [
      {
        "name": "dancer",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10125,
    "name": "oricorio-sensu",
    "height": 6,
    "weight": 34,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10125.png",
    "types": [
      "ghost",
      "flying"
    ],
    "baseExperience": 167,
    "abilities": [
      {
        "name": "dancer",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10126,
    "name": "lycanroc-midnight",
    "height": 11,
    "weight": 250,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10126.png",
    "types": [
      "rock"
    ],
    "baseExperience": 170,
    "abilities": [
      {
        "name": "keen-eye",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "vital-spirit",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "no-guard",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10127,
    "name": "wishiwashi-school",
    "height": 82,
    "weight": 786,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10127.png",
    "types": [
      "water"
    ],
    "baseExperience": 217,
    "abilities": [
      {
        "name": "schooling",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10128,
    "name": "lurantis-totem",
    "height": 15,
    "weight": 580,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10128.png",
    "types": [
      "grass"
    ],
    "baseExperience": 168,
    "abilities": [
      {
        "name": "leaf-guard",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "contrary",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10129,
    "name": "salazzle-totem",
    "height": 21,
    "weight": 810,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10129.png",
    "types": [
      "poison",
      "fire"
    ],
    "baseExperience": 168,
    "abilities": [
      {
        "name": "corrosion",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "oblivious",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10130,
    "name": "minior-orange-meteor",
    "height": 3,
    "weight": 400,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10130.png",
    "types": [
      "rock",
      "flying"
    ],
    "baseExperience": 154,
    "abilities": [
      {
        "name": "shields-down",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10131,
    "name": "minior-yellow-meteor",
    "height": 3,
    "weight": 400,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10131.png",
    "types": [
      "rock",
      "flying"
    ],
    "baseExperience": 154,
    "abilities": [
      {
        "name": "shields-down",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10132,
    "name": "minior-green-meteor",
    "height": 3,
    "weight": 400,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10132.png",
    "types": [
      "rock",
      "flying"
    ],
    "baseExperience": 154,
    "abilities": [
      {
        "name": "shields-down",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10133,
    "name": "minior-blue-meteor",
    "height": 3,
    "weight": 400,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10133.png",
    "types": [
      "rock",
      "flying"
    ],
    "baseExperience": 154,
    "abilities": [
      {
        "name": "shields-down",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10134,
    "name": "minior-indigo-meteor",
    "height": 3,
    "weight": 400,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10134.png",
    "types": [
      "rock",
      "flying"
    ],
    "baseExperience": 154,
    "abilities": [
      {
        "name": "shields-down",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10135,
    "name": "minior-violet-meteor",
    "height": 3,
    "weight": 400,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10135.png",
    "types": [
      "rock",
      "flying"
    ],
    "baseExperience": 154,
    "abilities": [
      {
        "name": "shields-down",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10136,
    "name": "minior-red",
    "height": 3,
    "weight": 3,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10136.png",
    "types": [
      "rock",
      "flying"
    ],
    "baseExperience": 175,
    "abilities": [
      {
        "name": "shields-down",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10137,
    "name": "minior-orange",
    "height": 3,
    "weight": 3,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10137.png",
    "types": [
      "rock",
      "flying"
    ],
    "baseExperience": 175,
    "abilities": [
      {
        "name": "shields-down",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10138,
    "name": "minior-yellow",
    "height": 3,
    "weight": 3,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10138.png",
    "types": [
      "rock",
      "flying"
    ],
    "baseExperience": 175,
    "abilities": [
      {
        "name": "shields-down",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10139,
    "name": "minior-green",
    "height": 3,
    "weight": 3,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10139.png",
    "types": [
      "rock",
      "flying"
    ],
    "baseExperience": 175,
    "abilities": [
      {
        "name": "shields-down",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10140,
    "name": "minior-blue",
    "height": 3,
    "weight": 3,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10140.png",
    "types": [
      "rock",
      "flying"
    ],
    "baseExperience": 175,
    "abilities": [
      {
        "name": "shields-down",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10141,
    "name": "minior-indigo",
    "height": 3,
    "weight": 3,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10141.png",
    "types": [
      "rock",
      "flying"
    ],
    "baseExperience": 175,
    "abilities": [
      {
        "name": "shields-down",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10142,
    "name": "minior-violet",
    "height": 3,
    "weight": 3,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10142.png",
    "types": [
      "rock",
      "flying"
    ],
    "baseExperience": 175,
    "abilities": [
      {
        "name": "shields-down",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10143,
    "name": "mimikyu-busted",
    "height": 2,
    "weight": 7,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10143.png",
    "types": [
      "ghost",
      "fairy"
    ],
    "baseExperience": 167,
    "abilities": [
      {
        "name": "disguise",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10144,
    "name": "mimikyu-totem-disguised",
    "height": 4,
    "weight": 28,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10144.png",
    "types": [
      "ghost",
      "fairy"
    ],
    "baseExperience": 167,
    "abilities": [
      {
        "name": "disguise",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10145,
    "name": "mimikyu-totem-busted",
    "height": 4,
    "weight": 28,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10145.png",
    "types": [
      "ghost",
      "fairy"
    ],
    "baseExperience": 167,
    "abilities": [
      {
        "name": "disguise",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10146,
    "name": "kommo-o-totem",
    "height": 24,
    "weight": 2075,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10146.png",
    "types": [
      "dragon",
      "fighting"
    ],
    "baseExperience": 270,
    "abilities": [
      {
        "name": "bulletproof",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "soundproof",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "overcoat",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10147,
    "name": "magearna-original",
    "height": 10,
    "weight": 805,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10147.png",
    "types": [
      "steel",
      "fairy"
    ],
    "baseExperience": 300,
    "abilities": [
      {
        "name": "soul-heart",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10148,
    "name": "pikachu-partner-cap",
    "height": 4,
    "weight": 60,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10148.png",
    "types": [
      "electric"
    ],
    "baseExperience": 112,
    "abilities": [
      {
        "name": "static",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "lightning-rod",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10149,
    "name": "marowak-totem",
    "height": 17,
    "weight": 980,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10149.png",
    "types": [
      "fire",
      "ghost"
    ],
    "baseExperience": 149,
    "abilities": [
      {
        "name": "cursed-body",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "lightning-rod",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "rock-head",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10150,
    "name": "ribombee-totem",
    "height": 4,
    "weight": 20,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10150.png",
    "types": [
      "bug",
      "fairy"
    ],
    "baseExperience": 162,
    "abilities": [
      {
        "name": "honey-gather",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "shield-dust",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "sweet-veil",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10151,
    "name": "rockruff-own-tempo",
    "height": 5,
    "weight": 92,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10151.png",
    "types": [
      "rock"
    ],
    "baseExperience": 56,
    "abilities": [
      {
        "name": "own-tempo",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10152,
    "name": "lycanroc-dusk",
    "height": 8,
    "weight": 250,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10152.png",
    "types": [
      "rock"
    ],
    "baseExperience": 170,
    "abilities": [
      {
        "name": "tough-claws",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10153,
    "name": "araquanid-totem",
    "height": 31,
    "weight": 2175,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10153.png",
    "types": [
      "water",
      "bug"
    ],
    "baseExperience": 159,
    "abilities": [
      {
        "name": "water-bubble",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "water-absorb",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10154,
    "name": "togedemaru-totem",
    "height": 6,
    "weight": 130,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10154.png",
    "types": [
      "electric",
      "steel"
    ],
    "baseExperience": 152,
    "abilities": [
      {
        "name": "iron-barbs",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "lightning-rod",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "sturdy",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10155,
    "name": "necrozma-dusk",
    "height": 38,
    "weight": 4600,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10155.png",
    "types": [
      "psychic",
      "steel"
    ],
    "baseExperience": 340,
    "abilities": [
      {
        "name": "prism-armor",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10156,
    "name": "necrozma-dawn",
    "height": 42,
    "weight": 3500,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10156.png",
    "types": [
      "psychic",
      "ghost"
    ],
    "baseExperience": 340,
    "abilities": [
      {
        "name": "prism-armor",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10157,
    "name": "necrozma-ultra",
    "height": 75,
    "weight": 2300,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10157.png",
    "types": [
      "psychic",
      "dragon"
    ],
    "baseExperience": 339,
    "abilities": [
      {
        "name": "neuroforce",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10158,
    "name": "pikachu-starter",
    "height": 4,
    "weight": 60,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10158.png",
    "types": [
      "electric"
    ],
    "baseExperience": 86,
    "abilities": [
      {
        "name": "static",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "lightning-rod",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10159,
    "name": "eevee-starter",
    "height": 3,
    "weight": 65,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10159.png",
    "types": [
      "normal"
    ],
    "baseExperience": 87,
    "abilities": [
      {
        "name": "run-away",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "adaptability",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "anticipation",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10160,
    "name": "pikachu-world-cap",
    "height": 4,
    "weight": 60,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10160.png",
    "types": [
      "electric"
    ],
    "baseExperience": 112,
    "abilities": [
      {
        "name": "static",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "lightning-rod",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10161,
    "name": "meowth-galar",
    "height": 4,
    "weight": 75,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10161.png",
    "types": [
      "steel"
    ],
    "baseExperience": 58,
    "abilities": [
      {
        "name": "pickup",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "tough-claws",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "unnerve",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10162,
    "name": "ponyta-galar",
    "height": 8,
    "weight": 240,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10162.png",
    "types": [
      "psychic"
    ],
    "baseExperience": 82,
    "abilities": [
      {
        "name": "run-away",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "pastel-veil",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "anticipation",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10163,
    "name": "rapidash-galar",
    "height": 17,
    "weight": 800,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10163.png",
    "types": [
      "psychic",
      "fairy"
    ],
    "baseExperience": 175,
    "abilities": [
      {
        "name": "run-away",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "pastel-veil",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "anticipation",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10164,
    "name": "slowpoke-galar",
    "height": 12,
    "weight": 360,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10164.png",
    "types": [
      "psychic"
    ],
    "baseExperience": 63,
    "abilities": [
      {
        "name": "gluttony",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "own-tempo",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "regenerator",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10165,
    "name": "slowbro-galar",
    "height": 16,
    "weight": 705,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10165.png",
    "types": [
      "poison",
      "psychic"
    ],
    "baseExperience": 172,
    "abilities": [
      {
        "name": "quick-draw",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "own-tempo",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "regenerator",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10166,
    "name": "farfetchd-galar",
    "height": 8,
    "weight": 420,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10166.png",
    "types": [
      "fighting"
    ],
    "baseExperience": 132,
    "abilities": [
      {
        "name": "steadfast",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "scrappy",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10167,
    "name": "weezing-galar",
    "height": 30,
    "weight": 160,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10167.png",
    "types": [
      "poison",
      "fairy"
    ],
    "baseExperience": 172,
    "abilities": [
      {
        "name": "levitate",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "neutralizing-gas",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "misty-surge",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10168,
    "name": "mr-mime-galar",
    "height": 14,
    "weight": 568,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10168.png",
    "types": [
      "ice",
      "psychic"
    ],
    "baseExperience": 161,
    "abilities": [
      {
        "name": "vital-spirit",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "screen-cleaner",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "ice-body",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10169,
    "name": "articuno-galar",
    "height": 17,
    "weight": 509,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10169.png",
    "types": [
      "psychic",
      "flying"
    ],
    "baseExperience": 290,
    "abilities": [
      {
        "name": "competitive",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10170,
    "name": "zapdos-galar",
    "height": 16,
    "weight": 582,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10170.png",
    "types": [
      "fighting",
      "flying"
    ],
    "baseExperience": 290,
    "abilities": [
      {
        "name": "defiant",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10171,
    "name": "moltres-galar",
    "height": 20,
    "weight": 660,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10171.png",
    "types": [
      "dark",
      "flying"
    ],
    "baseExperience": 290,
    "abilities": [
      {
        "name": "berserk",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10172,
    "name": "slowking-galar",
    "height": 18,
    "weight": 795,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10172.png",
    "types": [
      "poison",
      "psychic"
    ],
    "baseExperience": 172,
    "abilities": [
      {
        "name": "curious-medicine",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "own-tempo",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "regenerator",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10173,
    "name": "corsola-galar",
    "height": 6,
    "weight": 5,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10173.png",
    "types": [
      "ghost"
    ],
    "baseExperience": 144,
    "abilities": [
      {
        "name": "weak-armor",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "cursed-body",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10174,
    "name": "zigzagoon-galar",
    "height": 4,
    "weight": 175,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10174.png",
    "types": [
      "dark",
      "normal"
    ],
    "baseExperience": 56,
    "abilities": [
      {
        "name": "pickup",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "gluttony",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "quick-feet",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10175,
    "name": "linoone-galar",
    "height": 5,
    "weight": 325,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10175.png",
    "types": [
      "dark",
      "normal"
    ],
    "baseExperience": 147,
    "abilities": [
      {
        "name": "pickup",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "gluttony",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "quick-feet",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10176,
    "name": "darumaka-galar",
    "height": 7,
    "weight": 400,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10176.png",
    "types": [
      "ice"
    ],
    "baseExperience": 63,
    "abilities": [
      {
        "name": "hustle",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "inner-focus",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10177,
    "name": "darmanitan-galar-standard",
    "height": 17,
    "weight": 1200,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10177.png",
    "types": [
      "ice"
    ],
    "baseExperience": 168,
    "abilities": [
      {
        "name": "gorilla-tactics",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "zen-mode",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10178,
    "name": "darmanitan-galar-zen",
    "height": 17,
    "weight": 1200,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10178.png",
    "types": [
      "ice",
      "fire"
    ],
    "baseExperience": 189,
    "abilities": [
      {
        "name": "gorilla-tactics",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "zen-mode",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10179,
    "name": "yamask-galar",
    "height": 5,
    "weight": 15,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10179.png",
    "types": [
      "ground",
      "ghost"
    ],
    "baseExperience": 61,
    "abilities": [
      {
        "name": "wandering-spirit",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10180,
    "name": "stunfisk-galar",
    "height": 7,
    "weight": 205,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10180.png",
    "types": [
      "ground",
      "steel"
    ],
    "baseExperience": 165,
    "abilities": [
      {
        "name": "mimicry",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10181,
    "name": "zygarde-10",
    "height": 12,
    "weight": 335,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10181.png",
    "types": [
      "dragon",
      "ground"
    ],
    "baseExperience": 243,
    "abilities": [
      {
        "name": "aura-break",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10182,
    "name": "cramorant-gulping",
    "height": 8,
    "weight": 180,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10182.png",
    "types": [
      "flying",
      "water"
    ],
    "baseExperience": 166,
    "abilities": [
      {
        "name": "gulp-missile",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10183,
    "name": "cramorant-gorging",
    "height": 8,
    "weight": 180,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10183.png",
    "types": [
      "flying",
      "water"
    ],
    "baseExperience": 166,
    "abilities": [
      {
        "name": "gulp-missile",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10184,
    "name": "toxtricity-low-key",
    "height": 16,
    "weight": 400,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10184.png",
    "types": [
      "electric",
      "poison"
    ],
    "baseExperience": 176,
    "abilities": [
      {
        "name": "punk-rock",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "minus",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "technician",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10185,
    "name": "eiscue-noice",
    "height": 14,
    "weight": 890,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10185.png",
    "types": [
      "ice"
    ],
    "baseExperience": 165,
    "abilities": [
      {
        "name": "ice-face",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10186,
    "name": "indeedee-female",
    "height": 9,
    "weight": 280,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10186.png",
    "types": [
      "psychic",
      "normal"
    ],
    "baseExperience": 166,
    "abilities": [
      {
        "name": "own-tempo",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "synchronize",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "psychic-surge",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10187,
    "name": "morpeko-hangry",
    "height": 3,
    "weight": 30,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10187.png",
    "types": [
      "electric",
      "dark"
    ],
    "baseExperience": 153,
    "abilities": [
      {
        "name": "hunger-switch",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10188,
    "name": "zacian-crowned",
    "height": 28,
    "weight": 3550,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10188.png",
    "types": [
      "fairy",
      "steel"
    ],
    "baseExperience": 360,
    "abilities": [
      {
        "name": "intrepid-sword",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10189,
    "name": "zamazenta-crowned",
    "height": 29,
    "weight": 7850,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10189.png",
    "types": [
      "fighting",
      "steel"
    ],
    "baseExperience": 360,
    "abilities": [
      {
        "name": "dauntless-shield",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10190,
    "name": "eternatus-eternamax",
    "height": 1000,
    "weight": 0,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10190.png",
    "types": [
      "poison",
      "dragon"
    ],
    "baseExperience": 563,
    "abilities": [
      {
        "name": "pressure",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10191,
    "name": "urshifu-rapid-strike",
    "height": 19,
    "weight": 1050,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10191.png",
    "types": [
      "fighting",
      "water"
    ],
    "baseExperience": 275,
    "abilities": [
      {
        "name": "unseen-fist",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10192,
    "name": "zarude-dada",
    "height": 18,
    "weight": 700,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10192.png",
    "types": [
      "dark",
      "grass"
    ],
    "baseExperience": 300,
    "abilities": [
      {
        "name": "leaf-guard",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10193,
    "name": "calyrex-ice",
    "height": 24,
    "weight": 8091,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10193.png",
    "types": [
      "psychic",
      "ice"
    ],
    "baseExperience": 340,
    "abilities": [
      {
        "name": "as-one-glastrier",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10194,
    "name": "calyrex-shadow",
    "height": 24,
    "weight": 536,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10194.png",
    "types": [
      "psychic",
      "ghost"
    ],
    "baseExperience": 340,
    "abilities": [
      {
        "name": "as-one-spectrier",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10195,
    "name": "venusaur-gmax",
    "height": 240,
    "weight": 10000,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10195.png",
    "types": [
      "grass",
      "poison"
    ],
    "baseExperience": 236,
    "abilities": [
      {
        "name": "overgrow",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "chlorophyll",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10196,
    "name": "charizard-gmax",
    "height": 280,
    "weight": 10000,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10196.png",
    "types": [
      "fire",
      "flying"
    ],
    "baseExperience": 240,
    "abilities": [
      {
        "name": "blaze",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "solar-power",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10197,
    "name": "blastoise-gmax",
    "height": 250,
    "weight": 10000,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10197.png",
    "types": [
      "water"
    ],
    "baseExperience": 239,
    "abilities": [
      {
        "name": "torrent",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "rain-dish",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10198,
    "name": "butterfree-gmax",
    "height": 170,
    "weight": 10000,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10198.png",
    "types": [
      "bug",
      "flying"
    ],
    "baseExperience": 178,
    "abilities": [
      {
        "name": "compound-eyes",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "tinted-lens",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10199,
    "name": "pikachu-gmax",
    "height": 210,
    "weight": 10000,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10199.png",
    "types": [
      "electric"
    ],
    "baseExperience": 112,
    "abilities": [
      {
        "name": "static",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "lightning-rod",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10200,
    "name": "meowth-gmax",
    "height": 330,
    "weight": 10000,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10200.png",
    "types": [
      "normal"
    ],
    "baseExperience": 58,
    "abilities": [
      {
        "name": "pickup",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "technician",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "unnerve",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10201,
    "name": "machamp-gmax",
    "height": 250,
    "weight": 10000,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10201.png",
    "types": [
      "fighting"
    ],
    "baseExperience": 227,
    "abilities": [
      {
        "name": "guts",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "no-guard",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "steadfast",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10202,
    "name": "gengar-gmax",
    "height": 200,
    "weight": 10000,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10202.png",
    "types": [
      "ghost",
      "poison"
    ],
    "baseExperience": 225,
    "abilities": [
      {
        "name": "cursed-body",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10203,
    "name": "kingler-gmax",
    "height": 190,
    "weight": 10000,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10203.png",
    "types": [
      "water"
    ],
    "baseExperience": 166,
    "abilities": [
      {
        "name": "hyper-cutter",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "shell-armor",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "sheer-force",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10204,
    "name": "lapras-gmax",
    "height": 240,
    "weight": 10000,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10204.png",
    "types": [
      "water",
      "ice"
    ],
    "baseExperience": 187,
    "abilities": [
      {
        "name": "water-absorb",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "shell-armor",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "hydration",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10205,
    "name": "eevee-gmax",
    "height": 180,
    "weight": 10000,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10205.png",
    "types": [
      "normal"
    ],
    "baseExperience": 65,
    "abilities": [
      {
        "name": "run-away",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "adaptability",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "anticipation",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10206,
    "name": "snorlax-gmax",
    "height": 350,
    "weight": 10000,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10206.png",
    "types": [
      "normal"
    ],
    "baseExperience": 189,
    "abilities": [
      {
        "name": "immunity",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "thick-fat",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "gluttony",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10207,
    "name": "garbodor-gmax",
    "height": 210,
    "weight": 10000,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10207.png",
    "types": [
      "poison"
    ],
    "baseExperience": 166,
    "abilities": [
      {
        "name": "stench",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "weak-armor",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "aftermath",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10208,
    "name": "melmetal-gmax",
    "height": 250,
    "weight": 10000,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10208.png",
    "types": [
      "steel"
    ],
    "baseExperience": 270,
    "abilities": [
      {
        "name": "iron-fist",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10209,
    "name": "rillaboom-gmax",
    "height": 280,
    "weight": 10000,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10209.png",
    "types": [
      "grass"
    ],
    "baseExperience": 265,
    "abilities": [
      {
        "name": "overgrow",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "grassy-surge",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10210,
    "name": "cinderace-gmax",
    "height": 270,
    "weight": 10000,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10210.png",
    "types": [
      "fire"
    ],
    "baseExperience": 265,
    "abilities": [
      {
        "name": "blaze",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "libero",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10211,
    "name": "inteleon-gmax",
    "height": 400,
    "weight": 10000,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10211.png",
    "types": [
      "water"
    ],
    "baseExperience": 265,
    "abilities": [
      {
        "name": "torrent",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sniper",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10212,
    "name": "corviknight-gmax",
    "height": 140,
    "weight": 10000,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10212.png",
    "types": [
      "flying",
      "steel"
    ],
    "baseExperience": 248,
    "abilities": [
      {
        "name": "pressure",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "unnerve",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "mirror-armor",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10213,
    "name": "orbeetle-gmax",
    "height": 140,
    "weight": 10000,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10213.png",
    "types": [
      "bug",
      "psychic"
    ],
    "baseExperience": 253,
    "abilities": [
      {
        "name": "swarm",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "frisk",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "telepathy",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10214,
    "name": "drednaw-gmax",
    "height": 240,
    "weight": 10000,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10214.png",
    "types": [
      "water",
      "rock"
    ],
    "baseExperience": 170,
    "abilities": [
      {
        "name": "strong-jaw",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "shell-armor",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "swift-swim",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10215,
    "name": "coalossal-gmax",
    "height": 420,
    "weight": 10000,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10215.png",
    "types": [
      "rock",
      "fire"
    ],
    "baseExperience": 255,
    "abilities": [
      {
        "name": "steam-engine",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "flame-body",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "flash-fire",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10216,
    "name": "flapple-gmax",
    "height": 240,
    "weight": 10000,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10216.png",
    "types": [
      "grass",
      "dragon"
    ],
    "baseExperience": 170,
    "abilities": [
      {
        "name": "ripen",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "gluttony",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "hustle",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10217,
    "name": "appletun-gmax",
    "height": 240,
    "weight": 10000,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10217.png",
    "types": [
      "grass",
      "dragon"
    ],
    "baseExperience": 170,
    "abilities": [
      {
        "name": "ripen",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "gluttony",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "thick-fat",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10218,
    "name": "sandaconda-gmax",
    "height": 220,
    "weight": 10000,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10218.png",
    "types": [
      "ground"
    ],
    "baseExperience": 179,
    "abilities": [
      {
        "name": "sand-spit",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "shed-skin",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "sand-veil",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10219,
    "name": "toxtricity-amped-gmax",
    "height": 240,
    "weight": 10000,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10219.png",
    "types": [
      "electric",
      "poison"
    ],
    "baseExperience": 176,
    "abilities": [
      {
        "name": "punk-rock",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "plus",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "technician",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10220,
    "name": "centiskorch-gmax",
    "height": 750,
    "weight": 10000,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10220.png",
    "types": [
      "fire",
      "bug"
    ],
    "baseExperience": 184,
    "abilities": [
      {
        "name": "flash-fire",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "white-smoke",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "flame-body",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10221,
    "name": "hatterene-gmax",
    "height": 260,
    "weight": 10000,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10221.png",
    "types": [
      "psychic",
      "fairy"
    ],
    "baseExperience": 255,
    "abilities": [
      {
        "name": "healer",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "anticipation",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "magic-bounce",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10222,
    "name": "grimmsnarl-gmax",
    "height": 320,
    "weight": 10000,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10222.png",
    "types": [
      "dark",
      "fairy"
    ],
    "baseExperience": 255,
    "abilities": [
      {
        "name": "prankster",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "frisk",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "pickpocket",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10223,
    "name": "alcremie-gmax",
    "height": 300,
    "weight": 10000,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10223.png",
    "types": [
      "fairy"
    ],
    "baseExperience": 173,
    "abilities": [
      {
        "name": "sweet-veil",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "aroma-veil",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10224,
    "name": "copperajah-gmax",
    "height": 230,
    "weight": 10000,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10224.png",
    "types": [
      "steel"
    ],
    "baseExperience": 175,
    "abilities": [
      {
        "name": "sheer-force",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "heavy-metal",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10225,
    "name": "duraludon-gmax",
    "height": 430,
    "weight": 10000,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10225.png",
    "types": [
      "steel",
      "dragon"
    ],
    "baseExperience": 187,
    "abilities": [
      {
        "name": "light-metal",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "heavy-metal",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "stalwart",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10226,
    "name": "urshifu-single-strike-gmax",
    "height": 290,
    "weight": 10000,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10226.png",
    "types": [
      "fighting",
      "dark"
    ],
    "baseExperience": 275,
    "abilities": [
      {
        "name": "unseen-fist",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10227,
    "name": "urshifu-rapid-strike-gmax",
    "height": 260,
    "weight": 10000,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10227.png",
    "types": [
      "fighting",
      "water"
    ],
    "baseExperience": 275,
    "abilities": [
      {
        "name": "unseen-fist",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10228,
    "name": "toxtricity-low-key-gmax",
    "height": 240,
    "weight": 10000,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10228.png",
    "types": [
      "electric",
      "poison"
    ],
    "baseExperience": 176,
    "abilities": [
      {
        "name": "punk-rock",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "minus",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "technician",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10229,
    "name": "growlithe-hisui",
    "height": 8,
    "weight": 227,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10229.png",
    "types": [
      "fire",
      "rock"
    ],
    "baseExperience": 70,
    "abilities": [
      {
        "name": "intimidate",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "flash-fire",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "rock-head",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10230,
    "name": "arcanine-hisui",
    "height": 20,
    "weight": 1680,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10230.png",
    "types": [
      "fire",
      "rock"
    ],
    "baseExperience": 194,
    "abilities": [
      {
        "name": "intimidate",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "flash-fire",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "rock-head",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10231,
    "name": "voltorb-hisui",
    "height": 5,
    "weight": 130,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10231.png",
    "types": [
      "electric",
      "grass"
    ],
    "baseExperience": 66,
    "abilities": [
      {
        "name": "soundproof",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "static",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "aftermath",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10232,
    "name": "electrode-hisui",
    "height": 12,
    "weight": 710,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10232.png",
    "types": [
      "electric",
      "grass"
    ],
    "baseExperience": 172,
    "abilities": [
      {
        "name": "soundproof",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "static",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "aftermath",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10233,
    "name": "typhlosion-hisui",
    "height": 16,
    "weight": 698,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10233.png",
    "types": [
      "fire",
      "ghost"
    ],
    "baseExperience": 240,
    "abilities": [
      {
        "name": "blaze",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "frisk",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10234,
    "name": "qwilfish-hisui",
    "height": 5,
    "weight": 39,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10234.png",
    "types": [
      "dark",
      "poison"
    ],
    "baseExperience": 88,
    "abilities": [
      {
        "name": "poison-point",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "swift-swim",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "intimidate",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10235,
    "name": "sneasel-hisui",
    "height": 9,
    "weight": 270,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10235.png",
    "types": [
      "fighting",
      "poison"
    ],
    "baseExperience": 86,
    "abilities": [
      {
        "name": "inner-focus",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "keen-eye",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "pickpocket",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10236,
    "name": "samurott-hisui",
    "height": 15,
    "weight": 582,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10236.png",
    "types": [
      "water",
      "dark"
    ],
    "baseExperience": 238,
    "abilities": [
      {
        "name": "torrent",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sharpness",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10237,
    "name": "lilligant-hisui",
    "height": 12,
    "weight": 192,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10237.png",
    "types": [
      "grass",
      "fighting"
    ],
    "baseExperience": 168,
    "abilities": [
      {
        "name": "chlorophyll",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "hustle",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "leaf-guard",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10238,
    "name": "zorua-hisui",
    "height": 7,
    "weight": 125,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10238.png",
    "types": [
      "normal",
      "ghost"
    ],
    "baseExperience": 66,
    "abilities": [
      {
        "name": "illusion",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10239,
    "name": "zoroark-hisui",
    "height": 16,
    "weight": 730,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10239.png",
    "types": [
      "normal",
      "ghost"
    ],
    "baseExperience": 179,
    "abilities": [
      {
        "name": "illusion",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10240,
    "name": "braviary-hisui",
    "height": 17,
    "weight": 434,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10240.png",
    "types": [
      "psychic",
      "flying"
    ],
    "baseExperience": 179,
    "abilities": [
      {
        "name": "keen-eye",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "sheer-force",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "tinted-lens",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10241,
    "name": "sliggoo-hisui",
    "height": 7,
    "weight": 685,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10241.png",
    "types": [
      "steel",
      "dragon"
    ],
    "baseExperience": 158,
    "abilities": [
      {
        "name": "sap-sipper",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "shell-armor",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "gooey",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10242,
    "name": "goodra-hisui",
    "height": 17,
    "weight": 3341,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10242.png",
    "types": [
      "steel",
      "dragon"
    ],
    "baseExperience": 270,
    "abilities": [
      {
        "name": "sap-sipper",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "shell-armor",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "gooey",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10243,
    "name": "avalugg-hisui",
    "height": 14,
    "weight": 2624,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10243.png",
    "types": [
      "ice",
      "rock"
    ],
    "baseExperience": 180,
    "abilities": [
      {
        "name": "strong-jaw",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "ice-body",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "sturdy",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10244,
    "name": "decidueye-hisui",
    "height": 16,
    "weight": 370,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10244.png",
    "types": [
      "grass",
      "fighting"
    ],
    "baseExperience": 239,
    "abilities": [
      {
        "name": "overgrow",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "scrappy",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10245,
    "name": "dialga-origin",
    "height": 70,
    "weight": 8487,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10245.png",
    "types": [
      "steel",
      "dragon"
    ],
    "baseExperience": 306,
    "abilities": [
      {
        "name": "pressure",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "telepathy",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10246,
    "name": "palkia-origin",
    "height": 63,
    "weight": 6590,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10246.png",
    "types": [
      "water",
      "dragon"
    ],
    "baseExperience": 306,
    "abilities": [
      {
        "name": "pressure",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "telepathy",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10247,
    "name": "basculin-white-striped",
    "height": 10,
    "weight": 180,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10247.png",
    "types": [
      "water"
    ],
    "baseExperience": 161,
    "abilities": [
      {
        "name": "rattled",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "adaptability",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "mold-breaker",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10248,
    "name": "basculegion-female",
    "height": 30,
    "weight": 1100,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10248.png",
    "types": [
      "water",
      "ghost"
    ],
    "baseExperience": 265,
    "abilities": [
      {
        "name": "swift-swim",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "adaptability",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "mold-breaker",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10249,
    "name": "enamorus-therian",
    "height": 16,
    "weight": 480,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10249.png",
    "types": [
      "fairy",
      "flying"
    ],
    "baseExperience": 116,
    "abilities": [
      {
        "name": "overcoat",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10250,
    "name": "tauros-paldea-combat-breed",
    "height": 14,
    "weight": 1150,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10250.png",
    "types": [
      "fighting"
    ],
    "baseExperience": 172,
    "abilities": [
      {
        "name": "intimidate",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "anger-point",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "cud-chew",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10251,
    "name": "tauros-paldea-blaze-breed",
    "height": 14,
    "weight": 850,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10251.png",
    "types": [
      "fighting",
      "fire"
    ],
    "baseExperience": 172,
    "abilities": [
      {
        "name": "intimidate",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "anger-point",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "cud-chew",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10252,
    "name": "tauros-paldea-aqua-breed",
    "height": 14,
    "weight": 1100,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10252.png",
    "types": [
      "fighting",
      "water"
    ],
    "baseExperience": 172,
    "abilities": [
      {
        "name": "intimidate",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "anger-point",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "cud-chew",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10253,
    "name": "wooper-paldea",
    "height": 4,
    "weight": 110,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10253.png",
    "types": [
      "poison",
      "ground"
    ],
    "baseExperience": 42,
    "abilities": [
      {
        "name": "poison-point",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "water-absorb",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "unaware",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10254,
    "name": "oinkologne-female",
    "height": 10,
    "weight": 1200,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10254.png",
    "types": [
      "normal"
    ],
    "baseExperience": 171,
    "abilities": [
      {
        "name": "aroma-veil",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "gluttony",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "thick-fat",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10255,
    "name": "dudunsparce-three-segment",
    "height": 45,
    "weight": 474,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10255.png",
    "types": [
      "normal"
    ],
    "baseExperience": 182,
    "abilities": [
      {
        "name": "serene-grace",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "run-away",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "rattled",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10256,
    "name": "palafin-hero",
    "height": 18,
    "weight": 974,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10256.png",
    "types": [
      "water"
    ],
    "baseExperience": 160,
    "abilities": [
      {
        "name": "zero-to-hero",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "zero-to-hero",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10257,
    "name": "maushold-family-of-three",
    "height": 3,
    "weight": 28,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10257.png",
    "types": [
      "normal"
    ],
    "baseExperience": 165,
    "abilities": [
      {
        "name": "friend-guard",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "cheek-pouch",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "technician",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10258,
    "name": "tatsugiri-droopy",
    "height": 3,
    "weight": 80,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10258.png",
    "types": [
      "dragon",
      "water"
    ],
    "baseExperience": 166,
    "abilities": [
      {
        "name": "commander",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "storm-drain",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10259,
    "name": "tatsugiri-stretchy",
    "height": 3,
    "weight": 80,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10259.png",
    "types": [
      "dragon",
      "water"
    ],
    "baseExperience": 166,
    "abilities": [
      {
        "name": "commander",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "storm-drain",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10260,
    "name": "squawkabilly-blue-plumage",
    "height": 6,
    "weight": 24,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10260.png",
    "types": [
      "normal",
      "flying"
    ],
    "baseExperience": 146,
    "abilities": [
      {
        "name": "intimidate",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "hustle",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "guts",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10261,
    "name": "squawkabilly-yellow-plumage",
    "height": 6,
    "weight": 24,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10261.png",
    "types": [
      "normal",
      "flying"
    ],
    "baseExperience": 146,
    "abilities": [
      {
        "name": "intimidate",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "hustle",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "sheer-force",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10262,
    "name": "squawkabilly-white-plumage",
    "height": 6,
    "weight": 24,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10262.png",
    "types": [
      "normal",
      "flying"
    ],
    "baseExperience": 146,
    "abilities": [
      {
        "name": "intimidate",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "hustle",
        "isHidden": false,
        "slot": 2
      },
      {
        "name": "sheer-force",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10263,
    "name": "gimmighoul-roaming",
    "height": 1,
    "weight": 10,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10263.png",
    "types": [
      "ghost"
    ],
    "baseExperience": 60,
    "abilities": [
      {
        "name": "run-away",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "run-away",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10264,
    "name": "koraidon-limited-build",
    "height": 35,
    "weight": 3030,
    "sprite": "",
    "types": [
      "fighting",
      "dragon"
    ],
    "baseExperience": 335,
    "abilities": [
      {
        "name": "orichalcum-pulse",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "orichalcum-pulse",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10265,
    "name": "koraidon-sprinting-build",
    "height": 35,
    "weight": 3030,
    "sprite": "",
    "types": [
      "fighting",
      "dragon"
    ],
    "baseExperience": 335,
    "abilities": [
      {
        "name": "orichalcum-pulse",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "orichalcum-pulse",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10266,
    "name": "koraidon-swimming-build",
    "height": 35,
    "weight": 3030,
    "sprite": "",
    "types": [
      "fighting",
      "dragon"
    ],
    "baseExperience": 335,
    "abilities": [
      {
        "name": "orichalcum-pulse",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "orichalcum-pulse",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10267,
    "name": "koraidon-gliding-build",
    "height": 35,
    "weight": 3030,
    "sprite": "",
    "types": [
      "fighting",
      "dragon"
    ],
    "baseExperience": 335,
    "abilities": [
      {
        "name": "orichalcum-pulse",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "orichalcum-pulse",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10268,
    "name": "miraidon-low-power-mode",
    "height": 28,
    "weight": 2400,
    "sprite": "",
    "types": [
      "electric",
      "dragon"
    ],
    "baseExperience": 335,
    "abilities": [
      {
        "name": "hadron-engine",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "hadron-engine",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10269,
    "name": "miraidon-drive-mode",
    "height": 28,
    "weight": 2400,
    "sprite": "",
    "types": [
      "electric",
      "dragon"
    ],
    "baseExperience": 335,
    "abilities": [
      {
        "name": "hadron-engine",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "hadron-engine",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10270,
    "name": "miraidon-aquatic-mode",
    "height": 28,
    "weight": 2400,
    "sprite": "",
    "types": [
      "electric",
      "dragon"
    ],
    "baseExperience": 335,
    "abilities": [
      {
        "name": "hadron-engine",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "hadron-engine",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10271,
    "name": "miraidon-glide-mode",
    "height": 28,
    "weight": 2400,
    "sprite": "",
    "types": [
      "electric",
      "dragon"
    ],
    "baseExperience": 335,
    "abilities": [
      {
        "name": "hadron-engine",
        "isHidden": false,
        "slot": 1
      },
      {
        "name": "hadron-engine",
        "isHidden": true,
        "slot": 3
      }
    ]
  },
  {
    "id": 10272,
    "name": "ursaluna-bloodmoon",
    "height": 24,
    "weight": 2900,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10272.png",
    "types": [
      "ground",
      "normal"
    ],
    "baseExperience": 275,
    "abilities": [
      {
        "name": "minds-eye",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10273,
    "name": "ogerpon-wellspring-mask",
    "height": 12,
    "weight": 398,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10273.png",
    "types": [
      "grass",
      "water"
    ],
    "baseExperience": 275,
    "abilities": [
      {
        "name": "water-absorb",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10274,
    "name": "ogerpon-hearthflame-mask",
    "height": 12,
    "weight": 398,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10274.png",
    "types": [
      "grass",
      "fire"
    ],
    "baseExperience": 275,
    "abilities": [
      {
        "name": "mold-breaker",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10275,
    "name": "ogerpon-cornerstone-mask",
    "height": 12,
    "weight": 398,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10275.png",
    "types": [
      "grass",
      "rock"
    ],
    "baseExperience": 275,
    "abilities": [
      {
        "name": "sturdy",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10276,
    "name": "terapagos-terastal",
    "height": 3,
    "weight": 160,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10276.png",
    "types": [
      "normal"
    ],
    "baseExperience": 90,
    "abilities": [
      {
        "name": "tera-shell",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10277,
    "name": "terapagos-stellar",
    "height": 17,
    "weight": 770,
    "sprite": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/10277.png",
    "types": [
      "normal"
    ],
    "baseExperience": 90,
    "abilities": [
      {
        "name": "teraform-zero",
        "isHidden": false,
        "slot": 1
      }
    ]
  },
  {
    "id": 10278,
    "name": "clefable-mega",
    "height": 17,
    "weight": 423,
    "sprite": "",
    "types": [
      "fairy",
      "flying"
    ],
    "baseExperience": null,
    "abilities": []
  },
  {
    "id": 10279,
    "name": "victreebel-mega",
    "height": 45,
    "weight": 1255,
    "sprite": "",
    "types": [
      "grass",
      "poison"
    ],
    "baseExperience": null,
    "abilities": []
  },
  {
    "id": 10280,
    "name": "starmie-mega",
    "height": 23,
    "weight": 800,
    "sprite": "",
    "types": [
      "water",
      "psychic"
    ],
    "baseExperience": null,
    "abilities": []
  },
  {
    "id": 10281,
    "name": "dragonite-mega",
    "height": 55,
    "weight": 2900,
    "sprite": "",
    "types": [
      "dragon",
      "flying"
    ],
    "baseExperience": null,
    "abilities": []
  },
  {
    "id": 10282,
    "name": "meganium-mega",
    "height": 24,
    "weight": 2010,
    "sprite": "",
    "types": [
      "grass",
      "fairy"
    ],
    "baseExperience": null,
    "abilities": []
  },
  {
    "id": 10283,
    "name": "feraligatr-mega",
    "height": 23,
    "weight": 1088,
    "sprite": "",
    "types": [
      "water",
      "dragon"
    ],
    "baseExperience": null,
    "abilities": []
  },
  {
    "id": 10284,
    "name": "skarmory-mega",
    "height": 17,
    "weight": 404,
    "sprite": "",
    "types": [
      "steel",
      "flying"
    ],
    "baseExperience": null,
    "abilities": []
  },
  {
    "id": 10285,
    "name": "froslass-mega",
    "height": 26,
    "weight": 296,
    "sprite": "",
    "types": [
      "ice",
      "ghost"
    ],
    "baseExperience": null,
    "abilities": []
  },
  {
    "id": 10286,
    "name": "emboar-mega",
    "height": 18,
    "weight": 1803,
    "sprite": "",
    "types": [
      "fire",
      "fighting"
    ],
    "baseExperience": null,
    "abilities": []
  },
  {
    "id": 10287,
    "name": "excadrill-mega",
    "height": 9,
    "weight": 600,
    "sprite": "",
    "types": [
      "ground",
      "steel"
    ],
    "baseExperience": null,
    "abilities": []
  },
  {
    "id": 10288,
    "name": "scolipede-mega",
    "height": 32,
    "weight": 2305,
    "sprite": "",
    "types": [
      "bug",
      "poison"
    ],
    "baseExperience": null,
    "abilities": []
  },
  {
    "id": 10289,
    "name": "scrafty-mega",
    "height": 11,
    "weight": 310,
    "sprite": "",
    "types": [
      "dark",
      "fighting"
    ],
    "baseExperience": null,
    "abilities": []
  },
  {
    "id": 10290,
    "name": "eelektross-mega",
    "height": 30,
    "weight": 1800,
    "sprite": "",
    "types": [
      "electric"
    ],
    "baseExperience": null,
    "abilities": []
  },
  {
    "id": 10291,
    "name": "chandelure-mega",
    "height": 25,
    "weight": 696,
    "sprite": "",
    "types": [
      "ghost",
      "fire"
    ],
    "baseExperience": null,
    "abilities": []
  },
  {
    "id": 10292,
    "name": "chesnaught-mega",
    "height": 16,
    "weight": 900,
    "sprite": "",
    "types": [
      "grass",
      "fighting"
    ],
    "baseExperience": null,
    "abilities": []
  },
  {
    "id": 10293,
    "name": "delphox-mega",
    "height": 15,
    "weight": 390,
    "sprite": "",
    "types": [
      "fire",
      "psychic"
    ],
    "baseExperience": null,
    "abilities": []
  },
  {
    "id": 10294,
    "name": "greninja-mega",
    "height": 15,
    "weight": 400,
    "sprite": "",
    "types": [
      "water",
      "dark"
    ],
    "baseExperience": null,
    "abilities": []
  },
  {
    "id": 10295,
    "name": "pyroar-mega",
    "height": 15,
    "weight": 933,
    "sprite": "",
    "types": [
      "fire",
      "normal"
    ],
    "baseExperience": null,
    "abilities": []
  },
  {
    "id": 10296,
    "name": "floette-mega",
    "height": 2,
    "weight": 1008,
    "sprite": "",
    "types": [
      "fairy"
    ],
    "baseExperience": null,
    "abilities": []
  },
  {
    "id": 10297,
    "name": "malamar-mega",
    "height": 29,
    "weight": 698,
    "sprite": "",
    "types": [
      "dark",
      "psychic"
    ],
    "baseExperience": null,
    "abilities": []
  },
  {
    "id": 10298,
    "name": "barbaracle-mega",
    "height": 22,
    "weight": 1000,
    "sprite": "",
    "types": [
      "rock",
      "fighting"
    ],
    "baseExperience": null,
    "abilities": []
  },
  {
    "id": 10299,
    "name": "dragalge-mega",
    "height": 21,
    "weight": 1003,
    "sprite": "",
    "types": [
      "poison",
      "dragon"
    ],
    "baseExperience": null,
    "abilities": []
  },
  {
    "id": 10300,
    "name": "hawlucha-mega",
    "height": 10,
    "weight": 250,
    "sprite": "",
    "types": [
      "fighting",
      "flying"
    ],
    "baseExperience": null,
    "abilities": []
  },
  {
    "id": 10301,
    "name": "zygarde-mega",
    "height": 77,
    "weight": 6100,
    "sprite": "",
    "types": [
      "dragon",
      "ground"
    ],
    "baseExperience": null,
    "abilities": []
  },
  {
    "id": 10302,
    "name": "drampa-mega",
    "height": 30,
    "weight": 2405,
    "sprite": "",
    "types": [
      "normal",
      "dragon"
    ],
    "baseExperience": null,
    "abilities": []
  },
  {
    "id": 10303,
    "name": "falinks-mega",
    "height": 16,
    "weight": 990,
    "sprite": "",
    "types": [
      "fighting"
    ],
    "baseExperience": null,
    "abilities": []
  }
];
