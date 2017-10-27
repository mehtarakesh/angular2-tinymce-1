import { TexteditortestPage } from './app.po';

describe('texteditortest App', () => {
  let page: TexteditortestPage;

  beforeEach(() => {
    page = new TexteditortestPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
