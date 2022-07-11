import jsdom from 'jsdom';
import fs from 'fs';
import { expect } from 'chai';

describe('Our first test', ()=>{
  it('it should pass', ()=> {
    expect(true).to.equal(true)
  })
})


describe("index.html", () => {
  it('should print The index page', () => {
      const indexFile = fs.readFileSync('./src/index.html','utf-8');
      const { JSDOM } = jsdom;
      const dom = new JSDOM(indexFile);
      const h1 = dom.window.document.getElementsByTagName('h1')[0];
      expect('The index page').to.equal(h1.innerHTML);
      dom.window.close();
  })
})
