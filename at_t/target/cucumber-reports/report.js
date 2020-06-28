$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/features/at_tBasicPage.feature");
formatter.feature({
  "name": "As a customer I want to explore this page",
  "description": "",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am at a  att.com homePage",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.BasicPageStep_Definition.i_am_at_a_att_com_homePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Handeling Alert",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test12"
    }
  ]
});
formatter.step({
  "name": "I handle the alert window",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.BasicPageStep_Definition.i_handle_the_alert_window()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoAlertPresentException: no such alert\n  (Session info: chrome\u003d83.0.4103.116)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Tanjinas-MBP.home\u0027, ip: \u0027fe80:0:0:0:183d:64f0:a01a:9e4a%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.5\u0027, java.version: \u002711.0.6\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: /var/folders/0_/rvx8j6156p9...}, goog:chromeOptions: {debuggerAddress: localhost:60292}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 15c93ae79f1a56a68febac7a249d811a\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteTargetLocator.alert(RemoteWebDriver.java:932)\n\tat common.WebAPI.okAlert(WebAPI.java:468)\n\tat home.BasicPage.handleAlert(BasicPage.java:34)\n\tat step_definitions.BasicPageStep_Definition.i_handle_the_alert_window(BasicPageStep_Definition.java:48)\n\tat ✽.I handle the alert window(file:///Users/tanjinarahman/IdeaProjects/BDD_WebAutomationFramework_Team_2/at_t/src/main/java/features/at_tBasicPage.feature:11)\n",
  "status": "failed"
});
formatter.step({
  "name": "I will see this results",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.BasicPageStep_Definition.i_will_see_this_results()"
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