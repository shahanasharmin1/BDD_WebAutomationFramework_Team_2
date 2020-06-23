$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/features/BoaHome.feature");
formatter.feature({
  "name": "As a customer I want to click on a LogIn  button of Bank Of America",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Click On log In Button at bank of America",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test1"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I go on bankofamerica.com",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_go_on_bankofamerica_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i click on the log In Button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_click_on_the_log_In_Button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: chrome\u003d83.0.4103.106)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Tanjinas-MBP.home\u0027, ip: \u0027fe80:0:0:0:1c00:7be:87c0:344a%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.5\u0027, java.version: \u002711.0.6\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.106, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: /var/folders/0_/rvx8j6156p9...}, goog:chromeOptions: {debuggerAddress: localhost:53011}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 3f0eff699f593cafbcaf09a64c3fc721\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:285)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:84)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:51)\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\n\tat home.HomePage.clickLogInButton(HomePage.java:23)\n\tat step_definitions.SearchOnBoa_StepDefinition.i_click_on_the_log_In_Button(SearchOnBoa_StepDefinition.java:36)\n\tat ✽.i click on the log In Button(file:///Users/tanjinarahman/IdeaProjects/BDD_WebAutomationFramework_Team_2/BankOfAmerica/src/main/java/features/BoaHome.feature:6)\n",
  "status": "failed"
});
formatter.step({
  "name": "i am able to see  log in button clicked",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_am_able_to_see_log_in_button_clicked()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});