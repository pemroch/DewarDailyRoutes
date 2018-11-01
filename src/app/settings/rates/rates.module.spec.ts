import { RatesModule } from './rates.module';

describe('RatesModule', () => {
  let ratesModule: RatesModule;

  beforeEach(() => {
    ratesModule = new RatesModule();
  });

  it('should create an instance', () => {
    expect(ratesModule).toBeTruthy();
  });
});
