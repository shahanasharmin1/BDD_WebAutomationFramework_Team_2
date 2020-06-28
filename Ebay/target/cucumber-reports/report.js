$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/features/EbayHome.feature");
formatter.feature({
  "name": "Search series on ebay homepage searchBox",
  "description": "  As an user i wanted to search product on ebay.com for watching",
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
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am at ebay Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchOnEbay_Step_Definition.i_am_at_ebay_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search product",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I Enter photo frame in search input field",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnEbay_Step_Definition.i_Enter_photo_frame_in_search_input_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click search button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnEbay_Step_Definition.i_Click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see photo frame",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnEbay_Step_Definition.i_should_see_photo_frame()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am at ebay Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchOnEbay_Step_Definition.i_am_at_ebay_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search product",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
});
formatter.step({
  "name": "I Enter photo frame in search input field",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnEbay_Step_Definition.i_Enter_photo_frame_in_search_input_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click search button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnEbay_Step_Definition.i_Click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see photo frame",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnEbay_Step_Definition.i_should_see_photo_frame()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/main/java/features/EbayProduct.feature");
formatter.feature({
  "name": "Explore ebay HomePage",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "click on ebay homePage image",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am on ebay.com",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchOn_EbayProduct_Step_Definition.i_am_on_ebay_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on image of ebayHomePage",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOn_EbayProduct_Step_Definition.i_click_on_image_of_ebayHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see  variety section",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOn_EbayProduct_Step_Definition.i_should_see_variety_section()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/main/java/features/MultipleSearchOnEbay.feature");
formatter.feature({
  "name": "Search Multiple product",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Search multiple product",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I Enter \"\u003cproduct\u003e\" in search input field",
  "keyword": "And "
});
formatter.step({
  "name": "I click search button",
  "keyword": "When "
});
formatter.step({
  "name": "I should see \"\u003cExpectedResult\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "product",
        "ExpectedResult"
      ]
    },
    {
      "cells": [
        "Watch",
        "\"Watch\""
      ]
    },
    {
      "cells": [
        "playstation 2",
        "\"playstation 2\""
      ]
    },
    {
      "cells": [
        "playstation 3",
        "\"playstation 3\""
      ]
    },
    {
      "cells": [
        "playstation 4",
        "\"playstation 4\""
      ]
    },
    {
      "cells": [
        "playstation 4 pro",
        "\"playstation 4 pro\""
      ]
    }
  ]
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
formatter.before({
  "status": "passed"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am at ebay Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchOnEbay_Step_Definition.i_am_at_ebay_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search multiple product",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I Enter \"Watch\" in search input field",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Search_On_Ebay_Product_Step_Definition.i_Enter_in_search_input_field(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click search button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.MultipleSearchEbay_Step_Definition.i_click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"\"Watch\"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.MultipleSearchEbay_Step_Definition.i_should_see_Watch()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
formatter.before({
  "status": "passed"
});
formatter.before({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d83.0.4103.116)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Nafiss-Air.lan1\u0027, ip: \u00272604:2000:1601:6003:0:0:0:cb9%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.5\u0027, java.version: \u002711.0.6\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: /var/folders/c9/b31c6jgd781...}, goog:chromeOptions: {debuggerAddress: localhost:62208}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: ad616c8eb45b2fbebef6635efeaade0e\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\n\tat common.WebAPI.setUp(WebAPI.java:57)\n\tat step_definitions.SearchOnEbay_Step_Definition.openBrowser(SearchOnEbay_Step_Definition.java:17)\n",
  "status": "failed"
});
formatter.step({
  "name": "I am at ebay Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchOnEbay_Step_Definition.i_am_at_ebay_Home_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Search multiple product",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I Enter \"playstation 2\" in search input field",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Search_On_Ebay_Product_Step_Definition.i_Enter_in_search_input_field(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click search button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.MultipleSearchEbay_Step_Definition.i_click_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should see \"\"playstation 2\"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.MultipleSearchEbay_Step_Definition.i_should_see_playstation(java.lang.Integer)"
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
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom unknown error: cannot determine loading status\nfrom disconnected: received Inspector.detached event\n  (Session info: chrome\u003d83.0.4103.116)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Nafiss-Air.lan1\u0027, ip: \u00272604:2000:1601:6003:0:0:0:cb9%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.5\u0027, java.version: \u002711.0.6\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: /var/folders/c9/b31c6jgd781...}, goog:chromeOptions: {debuggerAddress: localhost:62334}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: a8bfe1f5764da3da4ba11b417495a44e\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\n\tat common.WebAPI.setUp(WebAPI.java:57)\n\tat step_definitions.SearchOn_EbayProduct_Step_Definition.openBrowser(SearchOn_EbayProduct_Step_Definition.java:18)\n",
  "status": "failed"
});
formatter.before({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom unknown error: cannot determine loading status\nfrom disconnected: unable to send message to renderer\n  (Session info: chrome\u003d83.0.4103.116)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Nafiss-Air.lan1\u0027, ip: \u00272604:2000:1601:6003:0:0:0:cb9%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.5\u0027, java.version: \u002711.0.6\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: /var/folders/c9/b31c6jgd781...}, goog:chromeOptions: {debuggerAddress: localhost:62360}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: d56833d6e96974c0d73a4f32ecdb7d0f\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\n\tat common.WebAPI.setUp(WebAPI.java:57)\n\tat step_definitions.MultipleSearchEbay_Step_Definition.openBrowser(MultipleSearchEbay_Step_Definition.java:17)\n",
  "status": "failed"
});
formatter.before({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: target window already closed\nfrom unknown error: web view not found\n  (Session info: chrome\u003d83.0.4103.116)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Nafiss-Air.lan1\u0027, ip: \u00272604:2000:1601:6003:0:0:0:cb9%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.5\u0027, java.version: \u002711.0.6\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: /var/folders/c9/b31c6jgd781...}, goog:chromeOptions: {debuggerAddress: localhost:62387}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 3bd345739c6acf50e4f220a9aef4eca1\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:837)\n\tat common.WebAPI.setUp(WebAPI.java:58)\n\tat step_definitions.Search_On_Ebay_Product_Step_Definition.openBrowser(Search_On_Ebay_Product_Step_Definition.java:19)\n",
  "status": "failed"
});
formatter.before({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom unknown error: cannot determine loading status\nfrom disconnected: unable to send message to renderer\n  (Session info: chrome\u003d83.0.4103.116)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Nafiss-Air.lan1\u0027, ip: \u00272604:2000:1601:6003:0:0:0:cb9%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.5\u0027, java.version: \u002711.0.6\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: /var/folders/c9/b31c6jgd781...}, goog:chromeOptions: {debuggerAddress: localhost:62424}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 640bb8f126ef0230a5ed6a62674700d0\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\n\tat common.WebAPI.setUp(WebAPI.java:57)\n\tat step_definitions.SearchOnEbay_Step_Definition.openBrowser(SearchOnEbay_Step_Definition.java:17)\n",
  "status": "failed"
});
formatter.step({
  "name": "I am at ebay Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchOnEbay_Step_Definition.i_am_at_ebay_Home_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Search multiple product",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I Enter \"playstation 3\" in search input field",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Search_On_Ebay_Product_Step_Definition.i_Enter_in_search_input_field(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click search button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.MultipleSearchEbay_Step_Definition.i_click_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should see \"\"playstation 3\"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.MultipleSearchEbay_Step_Definition.i_should_see_playstation(java.lang.Integer)"
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
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
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
  "error_message": "org.openqa.selenium.WebDriverException: java.net.ConnectException: Failed to connect to localhost/0:0:0:0:0:0:0:1:39428\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Nafiss-Air.lan1\u0027, ip: \u00272604:2000:1601:6003:0:0:0:cb9%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.5\u0027, java.version: \u002711.0.6\u0027\nDriver info: driver.version: RemoteWebDriver\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:92)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\n\tat common.WebAPI.setUp(WebAPI.java:57)\n\tat step_definitions.MultipleSearchEbay_Step_Definition.openBrowser(MultipleSearchEbay_Step_Definition.java:17)\nCaused by: java.net.ConnectException: Failed to connect to localhost/0:0:0:0:0:0:0:1:39428\n\tat okhttp3.internal.connection.RealConnection.connectSocket(RealConnection.java:247)\n\tat okhttp3.internal.connection.RealConnection.connect(RealConnection.java:165)\n\tat okhttp3.internal.connection.StreamAllocation.findConnection(StreamAllocation.java:257)\n\tat okhttp3.internal.connection.StreamAllocation.findHealthyConnection(StreamAllocation.java:135)\n\tat okhttp3.internal.connection.StreamAllocation.newStream(StreamAllocation.java:114)\n\tat okhttp3.internal.connection.ConnectInterceptor.intercept(ConnectInterceptor.java:42)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\n\tat okhttp3.internal.cache.CacheInterceptor.intercept(CacheInterceptor.java:93)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\n\tat okhttp3.internal.http.BridgeInterceptor.intercept(BridgeInterceptor.java:93)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\n\tat okhttp3.internal.http.RetryAndFollowUpInterceptor.intercept(RetryAndFollowUpInterceptor.java:126)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:147)\n\tat okhttp3.internal.http.RealInterceptorChain.proceed(RealInterceptorChain.java:121)\n\tat okhttp3.RealCall.getResponseWithInterceptorChain(RealCall.java:200)\n\tat okhttp3.RealCall.execute(RealCall.java:77)\n\tat org.openqa.selenium.remote.internal.OkHttpClient.execute(OkHttpClient.java:103)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:155)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\n\tat common.WebAPI.setUp(WebAPI.java:57)\n\tat step_definitions.MultipleSearchEbay_Step_Definition.openBrowser(MultipleSearchEbay_Step_Definition.java:17)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeMethodAccessorImpl.invoke(NativeMethodAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\n\tat io.cucumber.java.JavaHookDefinition.execute(JavaHookDefinition.java:61)\n\tat io.cucumber.core.runner.CoreHookDefinition.execute(CoreHookDefinition.java:31)\n\tat io.cucumber.core.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:20)\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:47)\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\nCaused by: java.net.ConnectException: Connection refused (Connection refused)\n\tat java.base/java.net.PlainSocketImpl.socketConnect(Native Method)\n\tat java.base/java.net.AbstractPlainSocketImpl.doConnect(AbstractPlainSocketImpl.java:399)\n\tat java.base/java.net.AbstractPlainSocketImpl.connectToAddress(AbstractPlainSocketImpl.java:242)\n\tat java.base/java.net.AbstractPlainSocketImpl.connect(AbstractPlainSocketImpl.java:224)\n\tat java.base/java.net.SocksSocketImpl.connect(SocksSocketImpl.java:403)\n\tat java.base/java.net.Socket.connect(Socket.java:608)\n\tat okhttp3.internal.platform.Platform.connectSocket(Platform.java:129)\n\tat okhttp3.internal.connection.RealConnection.connectSocket(RealConnection.java:245)\n\t... 61 more\n",
  "status": "failed"
});
