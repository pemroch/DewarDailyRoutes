import { DriverSettingsModule } from './driver-settings.module';

describe('DriverSettingsModule', () => {
  let driverSettingsModule: DriverSettingsModule;

  beforeEach(() => {
    driverSettingsModule = new DriverSettingsModule();
  });

  it('should create an instance', () => {
    expect(driverSettingsModule).toBeTruthy();
  });
});
