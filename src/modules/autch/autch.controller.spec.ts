import { Test, TestingModule } from '@nestjs/testing';
import { AutchController } from './autch.controller.js';

describe('AutchController', () => {
  let controller: AutchController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AutchController],
    }).compile();

    controller = module.get<AutchController>(AutchController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
