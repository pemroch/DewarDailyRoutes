import { TruckSettingsModule } from './truck-settings.module';

describe('TruckSettingsModule', () => {
  let truckSettingsModule: TruckSettingsModule;

  beforeEach(() => {
    truckSettingsModule = new TruckSettingsModule();
  });

  it('should create an instance', () => {
    expect(truckSettingsModule).toBeTruthy();
  });
});
