$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/features/at_tHome.feature");
formatter.feature({
  "name": "Search Deals on at\u0026t search box",
  "description": "  As a customer i want to search Deals on at\u0026t homepage",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Search deals",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am at at\u0026t Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchOnAt_t_StepDefinition.i_am_at_at_t_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter deals on the search box in homepage",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnAt_t_StepDefinition.i_enter_deals_on_the_search_box_in_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click search button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnAt_t_StepDefinition.i_click_search_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementClickInterceptedException: element click intercepted: Element is not clickable at point (2591, 23)\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-HKN9H90\u0027, ip: \u0027192.168.1.25\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.6\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\asifu\\AppData\\Loca...}, goog:chromeOptions: {debuggerAddress: localhost:57675}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 219f4cc4bb67f45cc73a2ce52973e9d9\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\r\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\r\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\r\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\r\n\tat home.HomePage.clickSearchButton(HomePage.java:29)\r\n\tat step_definitions.SearchOnAt_t_StepDefinition.i_click_search_button(SearchOnAt_t_StepDefinition.java:43)\r\n\tat ✽.I click search button(file:///F:/SeleniumProject/BDD_WebAutomationFramework_Team_2/at_t/src/main/java/features/at_tHome.feature:7)\r\n",
  "status": "failed"
});
formatter.step({
  "name": "I should see deals",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnAt_t_StepDefinition.i_should_see_deals()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});