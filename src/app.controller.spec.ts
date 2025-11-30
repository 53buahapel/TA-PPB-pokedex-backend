import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Request } from 'express';

describe('AppController', () => {
  let appController: AppController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    appController = app.get<AppController>(AppController);
  });

  describe('root', () => {
    it('should expose resource urls', () => {
      const mockRequest = {
        protocol: 'http',
        get: () => 'localhost:3000',
      } as unknown as Request;

      expect(appController.getIndex(mockRequest)).toEqual({
        pokemon: 'http://localhost:3000/api/v2/pokemon/',
        type: 'http://localhost:3000/api/v2/type/',
      });
    });
  });
});
