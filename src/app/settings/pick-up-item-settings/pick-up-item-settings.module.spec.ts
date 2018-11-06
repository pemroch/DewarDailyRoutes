import { PickUpItemSettingsModule } from './pick-up-item-settings.module';

describe('PickUpItemSettingsModule', () => {
  let pickUpItemSettingsModule: PickUpItemSettingsModule;

  beforeEach(() => {
    pickUpItemSettingsModule = new PickUpItemSettingsModule();
  });

  it('should create an instance', () => {
    expect(pickUpItemSettingsModule).toBeTruthy();
  });
});
