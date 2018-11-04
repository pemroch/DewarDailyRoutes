import { ActiveRoutesModule } from './active-routes.module';

describe('ActiveRoutesModule', () => {
  let activeRoutesModule: ActiveRoutesModule;

  beforeEach(() => {
    activeRoutesModule = new ActiveRoutesModule();
  });

  it('should create an instance', () => {
    expect(activeRoutesModule).toBeTruthy();
  });
});
