import { KendoGridNg4Page } from './app.po';

describe('kendo-grid-ng4 App', () => {
  let page: KendoGridNg4Page;

  beforeEach(() => {
    page = new KendoGridNg4Page();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
