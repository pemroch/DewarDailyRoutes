import { CustomerSettingsModule } from './customer-settings.module';

describe('CustomerSettingsModule', () => {
  let customerSettingsModule: CustomerSettingsModule;

  beforeEach(() => {
    customerSettingsModule = new CustomerSettingsModule();
  });

  it('should create an instance', () => {
    expect(customerSettingsModule).toBeTruthy();
  });
});
