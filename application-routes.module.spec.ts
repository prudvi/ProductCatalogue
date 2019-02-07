import { ApplicationRoutesModule } from './application-routes.module';

describe('ApplicationRoutesModule', () => {
  let applicationRoutesModule: ApplicationRoutesModule;

  beforeEach(() => {
    applicationRoutesModule = new ApplicationRoutesModule();
  });

  it('should create an instance', () => {
    expect(applicationRoutesModule).toBeTruthy();
  });
});
