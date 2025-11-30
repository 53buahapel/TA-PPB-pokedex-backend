import { Request } from 'express';
import { API_BASE_PATH } from './api.constants';

export const buildApiBaseUrl = (req: Request): string =>
  `${req.protocol}://${req.get('host')}${API_BASE_PATH}`;

export const buildResourceUrl = (req: Request, path: string): string => {
  const normalizedPath = path.startsWith('/') ? path : `/${path}`;
  return `${buildApiBaseUrl(req)}${normalizedPath}`;
};
