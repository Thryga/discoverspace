import { DiscoverSpacePage } from './app.po';

describe('discover-space App', () => {
  let page: DiscoverSpacePage;

  beforeEach(() => {
    page = new DiscoverSpacePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
