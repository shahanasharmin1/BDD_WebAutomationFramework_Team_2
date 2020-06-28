$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/features/EbayHome.feature");
formatter.feature({
  "name": "Explore ebay HomePage",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "search product in the search input box",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am at ebay.com",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchOnEbay_Step_Definition.i_am_at_ebay_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I type shoes in the search box",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnEbay_Step_Definition.i_type_shoes_in_the_search_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click the search the button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnEbay_Step_Definition.i_click_the_search_the_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the shoes options",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnEbay_Step_Definition.i_should_see_the_shoes_options()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "click on ebay homePage image",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test2"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on ebay.com",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchOnEbay_Step_Definition.i_am_on_ebay_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on image of ebayHomePage",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnEbay_Step_Definition.i_click_on_image_of_ebayHomePage()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#rtm_list1 \u003e div \u003e a \u003e div \u003e div\"}\n  (Session info: chrome\u003d83.0.4103.116)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Tanjinas-MBP.home\u0027, ip: \u0027fe80:0:0:0:c77:5cee:7fcb:a111%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.5\u0027, java.version: \u002711.0.6\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: /var/folders/0_/rvx8j6156p9...}, goog:chromeOptions: {debuggerAddress: localhost:49575}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 86ab81ad1cd8a53822f20742347f0a0e\n*** Element info: {Using\u003dcss selector, value\u003d#rtm_list1 \u003e div \u003e a \u003e div \u003e div}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\n\tat home.HomePage.userclickonimageWebelement(HomePage.java:55)\n\tat step_definitions.SearchOnEbay_Step_Definition.i_click_on_image_of_ebayHomePage(SearchOnEbay_Step_Definition.java:55)\n\tat ✽.I click on image of ebayHomePage(file:///Users/tanjinarahman/IdeaProjects/BDD_WebAutomationFramework_Team_2/Ebay/src/main/java/features/EbayHome.feature:21)\n",
  "status": "failed"
});
formatter.step({
  "name": "I should see  variety section",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnEbay_Step_Definition.i_should_see_variety_section()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});