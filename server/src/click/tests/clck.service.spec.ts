import { Test, TestingModule } from '@nestjs/testing';
import { ClickService } from '../click.service';

describe('ClickService', () => {
  let service: ClickService;
  const mockedStartData = { color: 'blue', count: 0, start: true };
  const mockedClicktData = { color: 'blue', count: 0, start: false };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClickService],
    }).compile();
    service = module.get<ClickService>(ClickService);
  });

  describe('data  at start', () => {
    it('count should be 0 and start is true', async () => {
      const data = await service.handleClick(mockedStartData);
      expect(data.count).toEqual(0);
      expect(data.start).toEqual(true);
    });
  });

  describe('data  after clicking', () => {
    it('count should be +1 and start is false', async () => {
      const data = await service.handleClick(mockedClicktData);
      expect(data.count - mockedClicktData.count).toEqual(0);
      expect(data.start).toEqual(false);
    });
  });
});
