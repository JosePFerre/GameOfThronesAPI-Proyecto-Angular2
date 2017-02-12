import { GoTProjectPage } from './app.po';

describe('go-tproject App', function() {
  let page: GoTProjectPage;

  beforeEach(() => {
    page = new GoTProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
