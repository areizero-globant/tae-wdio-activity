/**
* main page object containing all methods, selectors and functionality
* that is shared across all page objects
*/
module.exports = class Page {
    /**
    * Opens a sub page of the page
    * @param path path of the sub page (e.g. /path/to/page.html)
    */
    async open () {
        await browser.url(`http://uitestingplayground.com/classattr/`)
    }

    async open (path) {
        await browser.url(`/${path}`)
    }
}