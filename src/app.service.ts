import { Injectable } from '@nestjs/common';
import { Request } from 'express';
import { buildResourceUrl } from './common/url.utils';

@Injectable()
export class AppService {
  getApiIndex(req: Request) {
    return {
      pokemon: buildResourceUrl(req, '/pokemon/'),
      type: buildResourceUrl(req, '/type/'),
    };
  }
}
