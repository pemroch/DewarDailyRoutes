import { RateSettingsModule } from './rate-settings.module';

describe('RateSettingsModule', () => {
  let rateSettingsModule: RateSettingsModule;

  beforeEach(() => {
    rateSettingsModule = new RateSettingsModule();
  });

  it('should create an instance', () => {
    expect(rateSettingsModule).toBeTruthy();
  });
});
