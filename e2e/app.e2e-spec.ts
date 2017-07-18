import { AngularMarsRover2Page } from './app.po';

describe('angular-mars-rover2 App', () => {
  let page: AngularMarsRover2Page;

  beforeEach(() => {
    page = new AngularMarsRover2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
