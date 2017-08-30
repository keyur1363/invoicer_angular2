import { InvoicerAngularPage } from './app.po';

describe('invoicer-angular App', function() {
  let page: InvoicerAngularPage;

  beforeEach(() => {
    page = new InvoicerAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
