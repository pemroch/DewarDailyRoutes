import { UserSettingsModule } from './user-settings.module';

describe('UserSettingsModule', () => {
  let userSettingsModule: UserSettingsModule;

  beforeEach(() => {
    userSettingsModule = new UserSettingsModule();
  });

  it('should create an instance', () => {
    expect(userSettingsModule).toBeTruthy();
  });
});
