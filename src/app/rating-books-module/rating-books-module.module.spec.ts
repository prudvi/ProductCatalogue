import { RatingBooksModuleModule } from './rating-books-module.module';

describe('RatingBooksModuleModule', () => {
  let ratingBooksModuleModule: RatingBooksModuleModule;

  beforeEach(() => {
    ratingBooksModuleModule = new RatingBooksModuleModule();
  });

  it('should create an instance', () => {
    expect(ratingBooksModuleModule).toBeTruthy();
  });
});
