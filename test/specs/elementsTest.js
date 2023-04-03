// write a WebdriverIO test which gets a Class Attribute in the page Class Attribute and two adition tests

import { expect } from 'chai';

describe('Elements Test', () => {
    it.only('should get the class attribute of a button', async () => {
        await browser.url('http://uitestingplayground.com/classattr');
        const classAttr = await $('button').getAttribute('class');
        expect(classAttr).to.equal('btn-primary');
    });

});
