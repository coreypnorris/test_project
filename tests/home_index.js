var elementHasClass = function (element, elementClass) {
    return element.getAttribute('class').then(function (classes) {
        return classes.split(' ').indexOf(elementClass) !== -1;
    });
};

var getCarouselImages = function(){
    var imagesArray = [];
    for (var i = 1; i <= 5; ++i) {
        imagesArray.push(browser.driver.findElement(by.className('home-page-carousel-image-' + i)));
    }
    return imagesArray;
};

var getSlickDotButtons = function(){
  var buttonsArray = [];
    for (var i = 1; i <= 5; ++i)
        buttonsArray.push(browser.driver.findElement(by.className('slick-dot-' + i)))
    return buttonsArray;
};

describe('home_index page', function() {
    it('should have welcome text.', function() {
        browser.driver.get('http://localhost:3000');
        var welcomeText = browser.driver.findElement(by.className('carousel-welcome-text'));
        expect(welcomeText.getText()).toEqual('Read vintage comics from the public domain.');
    });
    it('should have an interactive carousel with 5 images.', function() {
        browser.driver.get('http://localhost:3000');
        browser.driver.sleep(5000);
        var carouselImages = getCarouselImages();
        var slickDotButtons = getSlickDotButtons();
        expect(elementHasClass(carouselImages[0], 'slick-active')).toEqual(true);
        slickDotButtons[1].click();
        browser.driver.sleep(5000);
        expect(elementHasClass(carouselImages[0], 'slick-active')).toEqual(false);
        expect(elementHasClass(carouselImages[1], 'slick-active')).toEqual(true);
    })
});
