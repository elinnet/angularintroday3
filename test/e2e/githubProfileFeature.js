describe('GitHub profile finder', function(){

  var searchBox = element(by.model('searchCtrl.searchTerm'));
  var searchButton = element(by.className('btn'));

  beforeEach(function(){
    browser.get('http://localhost:8080');
  });

  it('has a title', function(){
    expect(browser.getTitle()).toEqual('Github user search');
  });

  it('finds profiles', function(){
    // searchBox.sendKeys('spike01');
    // searchButton.click();
    // expect(element(by.binding('user.login')).getText()).toEqual('spike01');
    searchBox.sendKeys('spike01');
    searchButton.click();

    var profiles = element.all(by.repeater('user in searchCtrl.searchResult.items'));
    expect(profiles.get(0).getText()).toEqual('spike01');
  });

  it('finds the last Spike', function(){
    searchBox.sendKeys('spike01');
    searchButton.click();

    var profiles = element.all(by.repeater('user in searchCtrl.searchResult.items'));
    expect(profiles.last().getText()).toEqual('spike01');

  });

  // it('displays profile pictures', function(){
  //   searchBox.sendKeys('spike01');
  //   searchButton.click();
  //   $$('li a').click();
  //   // element(by.repeater('user in searchCtrl.searchResult.items'))
  // 
  //   expect(browser.getCurrentUrl()).toEqual("https://github.com/spike01");
  //
  //   expect(element(by.binding('user.login'))
  // });
});
