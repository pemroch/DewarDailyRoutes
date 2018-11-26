import { TrailerSettingsModule } from './trailer-settings.module';

describe('TrailerSettingsModule', () => {
  let trailerSettingsModule: TrailerSettingsModule;

  beforeEach(() => {
    trailerSettingsModule = new TrailerSettingsModule();
  });

  it('should create an instance', () => {
    expect(trailerSettingsModule).toBeTruthy();
  });
});
