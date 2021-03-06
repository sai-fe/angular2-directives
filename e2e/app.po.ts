import { browser, element, by } from 'protractor/globals';

export class DirectivesPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('dir-root h1')).getText();
  }
}
