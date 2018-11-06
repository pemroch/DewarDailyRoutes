import { LocationSettingsModule } from './location-settings.module';

describe('LocationSettingsModule', () => {
  let locationSettingsModule: LocationSettingsModule;

  beforeEach(() => {
    locationSettingsModule = new LocationSettingsModule();
  });

  it('should create an instance', () => {
    expect(locationSettingsModule).toBeTruthy();
  });
});
