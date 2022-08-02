import { Test, TestingModule } from '@nestjs/testing';
import { ClickService } from '../click.service';

describe('ClickService', () => {
  let service: ClickService;
  const mockedClicktData = { color: 'blue', count: 0 };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClickService],
    }).compile();
    service = module.get<ClickService>(ClickService);
  });

  describe('data  after clicking', () => {
    it('count should be +1 and start is false', async () => {
      const data = await service.handleClick(mockedClicktData);
      expect(data.count - mockedClicktData.count).toEqual(0);
    });
  });
});
