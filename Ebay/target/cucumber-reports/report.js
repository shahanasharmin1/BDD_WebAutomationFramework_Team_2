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
  "name": "I Enter \"playstation 2\" in search input field",
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
  "name": "I should see \"\"playstation 2\"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.MultipleSearchEbay_Step_Definition.i_should_see_playstation(java.lang.Integer)"
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
  "name": "I should see \"\"playstation 3\"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.MultipleSearchEbay_Step_Definition.i_should_see_playstation(java.lang.Integer)"
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
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Chrome failed to start: crashed.\n  (unknown error: DevToolsActivePort file doesn\u0027t exist)\n  (The process started from chrome location /Applications/Google Chrome.app/Contents/MacOS/Google Chrome is no longer running, so ChromeDriver is assuming that Chrome has crashed.)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Shahanas-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:1cd8:4a56:fac:5018%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.5\u0027, java.version: \u002711.0.6\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: 0   chromedriver                        0x000000010506fe99 chromedriver + 4808345\n1   chromedriver                        0x000000010500a5f3 chromedriver + 4392435\n2   chromedriver                        0x0000000104c9629d chromedriver + 770717\n3   chromedriver                        0x0000000104bf00f4 chromedriver + 90356\n4   chromedriver                        0x0000000104becc99 chromedriver + 76953\n5   chromedriver                        0x0000000104c1efa3 chromedriver + 282531\n6   chromedriver                        0x0000000104c1bda3 chromedriver + 269731\n7   chromedriver                        0x0000000104bf58dd chromedriver + 112861\n8   chromedriver                        0x0000000104bf6875 chromedriver + 116853\n9   chromedriver                        0x000000010503247f chromedriver + 4555903\n10  chromedriver                        0x000000010503f77a chromedriver + 4609914\n11  chromedriver                        0x000000010503f509 chromedriver + 4609289\n12  chromedriver                        0x0000000105016319 chromedriver + 4440857\n13  chromedriver                        0x000000010503fd03 chromedriver + 4611331\n14  chromedriver                        0x0000000105028083 chromedriver + 4513923\n15  chromedriver                        0x0000000105056454 chromedriver + 4703316\n16  chromedriver                        0x0000000105075f57 chromedriver + 4833111\n17  libsystem_pthread.dylib             0x00007fff6dc86109 _pthread_start + 148\n18  libsystem_pthread.dylib             0x00007fff6dc81b8b thread_start + 15\n\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:127)\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:502)\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:488)\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:543)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\n\tat common.WebAPI.getLocalDriver(WebAPI.java:72)\n\tat common.WebAPI.setUp(WebAPI.java:54)\n\tat step_definitions.Search_On_Ebay_Product_Step_Definition.openBrowser(Search_On_Ebay_Product_Step_Definition.java:19)\n",
  "status": "failed"
});
formatter.before({
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d83.0.4103.116)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Shahanas-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:1cd8:4a56:fac:5018%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.5\u0027, java.version: \u002711.0.6\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: 0   chromedriver                        0x000000010acdae99 chromedriver + 4808345\n1   chromedriver                        0x000000010ac755f3 chromedriver + 4392435\n2   chromedriver                        0x000000010a9010f2 chromedriver + 770290\n3   chromedriver                        0x000000010a8f6b84 chromedriver + 727940\n4   chromedriver                        0x000000010a8ea700 chromedriver + 677632\n5   chromedriver                        0x000000010a88a0dc chromedriver + 282844\n6   chromedriver                        0x000000010a886da3 chromedriver + 269731\n7   chromedriver                        0x000000010a8608dd chromedriver + 112861\n8   chromedriver                        0x000000010a861875 chromedriver + 116853\n9   chromedriver                        0x000000010ac9d47f chromedriver + 4555903\n10  chromedriver                        0x000000010acaa77a chromedriver + 4609914\n11  chromedriver                        0x000000010acaa509 chromedriver + 4609289\n12  chromedriver                        0x000000010ac81319 chromedriver + 4440857\n13  chromedriver                        0x000000010acaad03 chromedriver + 4611331\n14  chromedriver                        0x000000010ac93083 chromedriver + 4513923\n15  chromedriver                        0x000000010acc1454 chromedriver + 4703316\n16  chromedriver                        0x000000010ace0f57 chromedriver + 4833111\n17  libsystem_pthread.dylib             0x00007fff6dc86109 _pthread_start + 148\n18  libsystem_pthread.dylib             0x00007fff6dc81b8b thread_start + 15\n\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:127)\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:502)\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:488)\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:543)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\n\tat common.WebAPI.getLocalDriver(WebAPI.java:72)\n\tat common.WebAPI.setUp(WebAPI.java:54)\n\tat step_definitions.SearchOnEbay_Step_Definition.openBrowser(SearchOnEbay_Step_Definition.java:17)\n",
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
  "name": "I Enter \"playstation 4\" in search input field",
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
  "name": "I should see \"\"playstation 4\"\"",
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
  "status": "passed"
});
formatter.before({
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created\nfrom tab crashed\n  (Session info: chrome\u003d83.0.4103.116)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Shahanas-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:1cd8:4a56:fac:5018%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.5\u0027, java.version: \u002711.0.6\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: 0   chromedriver                        0x000000010a433e99 chromedriver + 4808345\n1   chromedriver                        0x000000010a3ce5f3 chromedriver + 4392435\n2   chromedriver                        0x000000010a05a0f2 chromedriver + 770290\n3   chromedriver                        0x000000010a04e2fb chromedriver + 721659\n4   chromedriver                        0x000000010a04ddb6 chromedriver + 720310\n5   chromedriver                        0x000000010a04d513 chromedriver + 718099\n6   chromedriver                        0x000000010a04c79f chromedriver + 714655\n7   chromedriver                        0x000000010a04ca11 chromedriver + 715281\n8   chromedriver                        0x000000010a04c192 chromedriver + 713106\n9   chromedriver                        0x000000010a0586f6 chromedriver + 763638\n10  chromedriver                        0x000000010a04c13b chromedriver + 713019\n11  chromedriver                        0x000000010a04d0f9 chromedriver + 717049\n12  chromedriver                        0x000000010a04c79f chromedriver + 714655\n13  chromedriver                        0x000000010a04ca11 chromedriver + 715281\n14  chromedriver                        0x000000010a04c192 chromedriver + 713106\n15  chromedriver                        0x000000010a0561f5 chromedriver + 754165\n16  chromedriver                        0x000000010a04c13b chromedriver + 713019\n17  chromedriver                        0x000000010a04d0f9 chromedriver + 717049\n18  chromedriver                        0x000000010a04c79f chromedriver + 714655\n19  chromedriver                        0x000000010a04ca11 chromedriver + 715281\n20  chromedriver                        0x000000010a04c192 chromedriver + 713106\n21  chromedriver                        0x000000010a0533f6 chromedriver + 742390\n22  chromedriver                        0x000000010a04c13b chromedriver + 713019\n23  chromedriver                        0x000000010a04d0f9 chromedriver + 717049\n24  chromedriver                        0x000000010a04c79f chromedriver + 714655\n25  chromedriver                        0x000000010a04ca11 chromedriver + 715281\n26  chromedriver                        0x000000010a04c192 chromedriver + 713106\n27  chromedriver                        0x000000010a0523d8 chromedriver + 738264\n28  chromedriver                        0x000000010a04c13b chromedriver + 713019\n29  chromedriver                        0x000000010a04d0f9 chromedriver + 717049\n30  chromedriver                        0x000000010a04c79f chromedriver + 714655\n31  chromedriver                        0x000000010a04ca11 chromedriver + 715281\n32  chromedriver                        0x000000010a04c192 chromedriver + 713106\n33  chromedriver                        0x000000010a046e4e chromedriver + 691790\n34  chromedriver                        0x000000010a04c13b chromedriver + 713019\n35  chromedriver                        0x000000010a04c00d chromedriver + 712717\n36  chromedriver                        0x000000010a05b823 chromedriver + 776227\n37  chromedriver                        0x0000000109fe3d9e chromedriver + 286110\n38  chromedriver                        0x0000000109fdfda3 chromedriver + 269731\n39  chromedriver                        0x0000000109fb98dd chromedriver + 112861\n40  chromedriver                        0x0000000109fba875 chromedriver + 116853\n41  chromedriver                        0x000000010a3f647f chromedriver + 4555903\n42  chromedriver                        0x000000010a40377a chromedriver + 4609914\n43  chromedriver                        0x000000010a403509 chromedriver + 4609289\n44  chromedriver                        0x000000010a3da319 chromedriver + 4440857\n45  chromedriver                        0x000000010a403d03 chromedriver + 4611331\n46  chromedriver                        0x000000010a3ec083 chromedriver + 4513923\n47  chromedriver                        0x000000010a41a454 chromedriver + 4703316\n48  chromedriver                        0x000000010a439f57 chromedriver + 4833111\n49  libsystem_pthread.dylib             0x00007fff6dc86109 _pthread_start + 148\n50  libsystem_pthread.dylib             0x00007fff6dc81b8b thread_start + 15\n\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:127)\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:502)\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:488)\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:543)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\n\tat common.WebAPI.getLocalDriver(WebAPI.java:72)\n\tat common.WebAPI.setUp(WebAPI.java:54)\n\tat step_definitions.Search_On_Ebay_Product_Step_Definition.openBrowser(Search_On_Ebay_Product_Step_Definition.java:19)\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.scenario({
  "name": "Search multiple product",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I Enter \"playstation 4 pro\" in search input field",
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
  "name": "I should see \"\"playstation 4 pro\"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.MultipleSearchEbay_Step_Definition.i_should_see_playstation_pro(java.lang.Integer)"
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
formatter.uri("file:src/main/java/features/SearchOnEbay.feature");
formatter.feature({
  "name": "Search product on ebay searchBox",
  "description": "  As a customer i want to search product on ebay.com to purchase",
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
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Chrome failed to start: crashed.\n  (unknown error: DevToolsActivePort file doesn\u0027t exist)\n  (The process started from chrome location /Applications/Google Chrome.app/Contents/MacOS/Google Chrome is no longer running, so ChromeDriver is assuming that Chrome has crashed.)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Shahanas-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:1cd8:4a56:fac:5018%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.5\u0027, java.version: \u002711.0.6\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: 0   chromedriver                        0x000000010c4efe99 chromedriver + 4808345\n1   chromedriver                        0x000000010c48a5f3 chromedriver + 4392435\n2   chromedriver                        0x000000010c11629d chromedriver + 770717\n3   chromedriver                        0x000000010c0700f4 chromedriver + 90356\n4   chromedriver                        0x000000010c06cc99 chromedriver + 76953\n5   chromedriver                        0x000000010c09efa3 chromedriver + 282531\n6   chromedriver                        0x000000010c09bda3 chromedriver + 269731\n7   chromedriver                        0x000000010c0758dd chromedriver + 112861\n8   chromedriver                        0x000000010c076875 chromedriver + 116853\n9   chromedriver                        0x000000010c4b247f chromedriver + 4555903\n10  chromedriver                        0x000000010c4bf77a chromedriver + 4609914\n11  chromedriver                        0x000000010c4bf509 chromedriver + 4609289\n12  chromedriver                        0x000000010c496319 chromedriver + 4440857\n13  chromedriver                        0x000000010c4bfd03 chromedriver + 4611331\n14  chromedriver                        0x000000010c4a8083 chromedriver + 4513923\n15  chromedriver                        0x000000010c4d6454 chromedriver + 4703316\n16  chromedriver                        0x000000010c4f5f57 chromedriver + 4833111\n17  libsystem_pthread.dylib             0x00007fff6dc86109 _pthread_start + 148\n18  libsystem_pthread.dylib             0x00007fff6dc81b8b thread_start + 15\n\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:127)\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:502)\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:488)\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:543)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\n\tat common.WebAPI.getLocalDriver(WebAPI.java:72)\n\tat common.WebAPI.setUp(WebAPI.java:54)\n\tat step_definitions.Search_On_Ebay_Product_Step_Definition.openBrowser(Search_On_Ebay_Product_Step_Definition.java:19)\n",
  "status": "failed"
});
formatter.before({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Chrome failed to start: crashed.\n  (unknown error: DevToolsActivePort file doesn\u0027t exist)\n  (The process started from chrome location /Applications/Google Chrome.app/Contents/MacOS/Google Chrome is no longer running, so ChromeDriver is assuming that Chrome has crashed.)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Shahanas-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:1cd8:4a56:fac:5018%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.5\u0027, java.version: \u002711.0.6\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: 0   chromedriver                        0x000000010f61ae99 chromedriver + 4808345\n1   chromedriver                        0x000000010f5b55f3 chromedriver + 4392435\n2   chromedriver                        0x000000010f24129d chromedriver + 770717\n3   chromedriver                        0x000000010f19b0f4 chromedriver + 90356\n4   chromedriver                        0x000000010f197c99 chromedriver + 76953\n5   chromedriver                        0x000000010f1c9fa3 chromedriver + 282531\n6   chromedriver                        0x000000010f1c6da3 chromedriver + 269731\n7   chromedriver                        0x000000010f1a08dd chromedriver + 112861\n8   chromedriver                        0x000000010f1a1875 chromedriver + 116853\n9   chromedriver                        0x000000010f5dd47f chromedriver + 4555903\n10  chromedriver                        0x000000010f5ea77a chromedriver + 4609914\n11  chromedriver                        0x000000010f5ea509 chromedriver + 4609289\n12  chromedriver                        0x000000010f5c1319 chromedriver + 4440857\n13  chromedriver                        0x000000010f5ead03 chromedriver + 4611331\n14  chromedriver                        0x000000010f5d3083 chromedriver + 4513923\n15  chromedriver                        0x000000010f601454 chromedriver + 4703316\n16  chromedriver                        0x000000010f620f57 chromedriver + 4833111\n17  libsystem_pthread.dylib             0x00007fff6dc86109 _pthread_start + 148\n18  libsystem_pthread.dylib             0x00007fff6dc81b8b thread_start + 15\n\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:127)\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:502)\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:488)\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:543)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\n\tat common.WebAPI.getLocalDriver(WebAPI.java:72)\n\tat common.WebAPI.setUp(WebAPI.java:54)\n\tat step_definitions.SearchOnEbay_Step_Definition.openBrowser(SearchOnEbay_Step_Definition.java:17)\n",
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
  "name": "Search product",
  "description": "",
  "keyword": "Scenario"
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
formatter.step({
  "name": "I Enter  Adidas Women Jacket in search input field",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Search_On_Ebay_Product_Step_Definition.i_Enter_Adidas_Women_Jacket_in_search_input_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Click search button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnEbay_Step_Definition.i_Click_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should see Adidas Woman Jacket",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.Search_On_Ebay_Product_Step_Definition.i_should_see_Adidas_Woman_Jacket()"
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
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Chrome failed to start: crashed.\n  (chrome not reachable)\n  (The process started from chrome location /Applications/Google Chrome.app/Contents/MacOS/Google Chrome is no longer running, so ChromeDriver is assuming that Chrome has crashed.)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Shahanas-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:1cd8:4a56:fac:5018%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.5\u0027, java.version: \u002711.0.6\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: 0   chromedriver                        0x00000001019dae99 chromedriver + 4808345\n1   chromedriver                        0x00000001019755f3 chromedriver + 4392435\n2   chromedriver                        0x000000010160129d chromedriver + 770717\n3   chromedriver                        0x000000010155b0f4 chromedriver + 90356\n4   chromedriver                        0x0000000101557c99 chromedriver + 76953\n5   chromedriver                        0x0000000101589fa3 chromedriver + 282531\n6   chromedriver                        0x0000000101586da3 chromedriver + 269731\n7   chromedriver                        0x00000001015608dd chromedriver + 112861\n8   chromedriver                        0x0000000101561875 chromedriver + 116853\n9   chromedriver                        0x000000010199d47f chromedriver + 4555903\n10  chromedriver                        0x00000001019aa77a chromedriver + 4609914\n11  chromedriver                        0x00000001019aa509 chromedriver + 4609289\n12  chromedriver                        0x0000000101981319 chromedriver + 4440857\n13  chromedriver                        0x00000001019aad03 chromedriver + 4611331\n14  chromedriver                        0x0000000101993083 chromedriver + 4513923\n15  chromedriver                        0x00000001019c1454 chromedriver + 4703316\n16  chromedriver                        0x00000001019e0f57 chromedriver + 4833111\n17  libsystem_pthread.dylib             0x00007fff6dc86109 _pthread_start + 148\n18  libsystem_pthread.dylib             0x00007fff6dc81b8b thread_start + 15\n\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:127)\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:502)\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:488)\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:543)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\n\tat common.WebAPI.getLocalDriver(WebAPI.java:72)\n\tat common.WebAPI.setUp(WebAPI.java:54)\n\tat step_definitions.MultipleSearchEbay_Step_Definition.openBrowser(MultipleSearchEbay_Step_Definition.java:17)\n",
  "status": "failed"
});
formatter.before({
  "status": "passed"
});
formatter.before({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Chrome failed to start: crashed.\n  (unknown error: DevToolsActivePort file doesn\u0027t exist)\n  (The process started from chrome location /Applications/Google Chrome.app/Contents/MacOS/Google Chrome is no longer running, so ChromeDriver is assuming that Chrome has crashed.)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Shahanas-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:1cd8:4a56:fac:5018%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.5\u0027, java.version: \u002711.0.6\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: 0   chromedriver                        0x000000010cefee99 chromedriver + 4808345\n1   chromedriver                        0x000000010ce995f3 chromedriver + 4392435\n2   chromedriver                        0x000000010cb2529d chromedriver + 770717\n3   chromedriver                        0x000000010ca7f0f4 chromedriver + 90356\n4   chromedriver                        0x000000010ca7bc99 chromedriver + 76953\n5   chromedriver                        0x000000010caadfa3 chromedriver + 282531\n6   chromedriver                        0x000000010caaada3 chromedriver + 269731\n7   chromedriver                        0x000000010ca848dd chromedriver + 112861\n8   chromedriver                        0x000000010ca85875 chromedriver + 116853\n9   chromedriver                        0x000000010cec147f chromedriver + 4555903\n10  chromedriver                        0x000000010cece77a chromedriver + 4609914\n11  chromedriver                        0x000000010cece509 chromedriver + 4609289\n12  chromedriver                        0x000000010cea5319 chromedriver + 4440857\n13  chromedriver                        0x000000010ceced03 chromedriver + 4611331\n14  chromedriver                        0x000000010ceb7083 chromedriver + 4513923\n15  chromedriver                        0x000000010cee5454 chromedriver + 4703316\n16  chromedriver                        0x000000010cf04f57 chromedriver + 4833111\n17  libsystem_pthread.dylib             0x00007fff6dc86109 _pthread_start + 148\n18  libsystem_pthread.dylib             0x00007fff6dc81b8b thread_start + 15\n\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:127)\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:502)\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:488)\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:543)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\n\tat common.WebAPI.getLocalDriver(WebAPI.java:72)\n\tat common.WebAPI.setUp(WebAPI.java:54)\n\tat step_definitions.SearchOnEbay_Step_Definition.openBrowser(SearchOnEbay_Step_Definition.java:17)\n",
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
  "name": "I Enter Adidas Woman Jacket in search input field",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Search_On_Ebay_Product_Step_Definition.i_Enter_Adidas_Woman_Jacket_in_search_input_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Click search button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnEbay_Step_Definition.i_Click_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should see Adidas Woman Jacket",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.Search_On_Ebay_Product_Step_Definition.i_should_see_Adidas_Woman_Jacket()"
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
  "error_message": "org.openqa.selenium.WebDriverException: chrome not reachable\n  (Session info: chrome\u003d83.0.4103.116)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Shahanas-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:1cd8:4a56:fac:5018%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.5\u0027, java.version: \u002711.0.6\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: /var/folders/zf/jqsbyv4j0j5...}, goog:chromeOptions: {debuggerAddress: localhost:60963}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: ac369f18f7e6143d8441a7bd8882849a\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:837)\n\tat common.WebAPI.setUp(WebAPI.java:59)\n\tat step_definitions.SearchOn_EbayProduct_Step_Definition.openBrowser(SearchOn_EbayProduct_Step_Definition.java:18)\n",
  "status": "failed"
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
  "status": "skipped"
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
  "name": "I Enter Adidas Woman Jacket in search input field",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Search_On_Ebay_Product_Step_Definition.i_Enter_Adidas_Woman_Jacket_in_search_input_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Click search button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnEbay_Step_Definition.i_Click_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should see Adidas Woman Jacket",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.Search_On_Ebay_Product_Step_Definition.i_should_see_Adidas_Woman_Jacket()"
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
  "name": "Search product using Parameter",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I Enter \"Adidas Woman Jacket\" in search input field",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Search_On_Ebay_Product_Step_Definition.i_Enter_in_search_input_field(java.lang.String)"
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
  "name": "I should see \"\\\"Adidas Woman Jacket\\\"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.Search_On_Ebay_Product_Step_Definition.i_should_see(java.lang.String)"
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
  "name": "Search product using Parameter",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@pending"
    }
  ]
});
formatter.step({
  "name": "I Enter Items in search input field",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Search_On_Ebay_Product_Step_Definition.i_Enter_Items_in_search_input_field(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"xpath\",\"selector\":\"//span[contains(text(),\u0027adidas women jacket\u0027)]\"}\n  (Session info: chrome\u003d83.0.4103.116)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Shahanas-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:1cd8:4a56:fac:5018%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.5\u0027, java.version: \u002711.0.6\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: /var/folders/zf/jqsbyv4j0j5...}, goog:chromeOptions: {debuggerAddress: localhost:63018}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 0bc57e0d51f91f23c6923677019ef3c5\n*** Element info: {Using\u003dxpath, value\u003d//span[contains(text(),\u0027adidas women jacket\u0027)]}\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy19.getText(Unknown Source)\n\tat home.SearchHomePage.validateSearch(SearchHomePage.java:28)\n\tat step_definitions.Search_On_Ebay_Product_Step_Definition.i_Enter_Items_in_search_input_field(Search_On_Ebay_Product_Step_Definition.java:74)\n\tat ✽.I Enter Items in search input field(file:///Users/shahanasharmin/IdeaProjects/BDD_WebAutomationFramework_Team_2/Ebay/src/main/java/features/SearchOnEbay.feature:40)\n",
  "status": "failed"
});
formatter.step({
  "name": "I Click search button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnEbay_Step_Definition.i_Click_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should see Expected Items",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.Search_On_Ebay_Product_Step_Definition.i_should_see_Expected_Items(java.util.List\u003cjava.lang.String\u003e)"
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
formatter.scenarioOutline({
  "name": "Search product using Parameter",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@pending"
    }
  ]
});
formatter.step({
  "name": "I Enter \"\u003cItems\u003e\" in search input field",
  "keyword": "And "
});
formatter.step({
  "name": "I Click search button",
  "keyword": "When "
});
formatter.step({
  "name": "I should see \"\u003cExpectedItems\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Items",
        "ExpectedItems"
      ]
    },
    {
      "cells": [
        "Adidas Woman Jacket",
        "\"Adidas Woman Jacket\""
      ]
    },
    {
      "cells": [
        "Adidas Woman shirt",
        "\"Adidas Woman shirt\""
      ]
    },
    {
      "cells": [
        "Adidas Woman shoes",
        "\"Adidas Woman shoes\""
      ]
    },
    {
      "cells": [
        "Adidas Woman sandals",
        "\"Adidas Woman sandals\""
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
  "name": "Search product using Parameter",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@pending"
    }
  ]
});
formatter.step({
  "name": "I Enter \"Adidas Woman Jacket\" in search input field",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Search_On_Ebay_Product_Step_Definition.i_Enter_in_search_input_field(java.lang.String)"
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
  "name": "I should see \"\"Adidas Woman Jacket\"\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Chrome failed to start: crashed.\n  (unknown error: DevToolsActivePort file doesn\u0027t exist)\n  (The process started from chrome location /Applications/Google Chrome.app/Contents/MacOS/Google Chrome is no longer running, so ChromeDriver is assuming that Chrome has crashed.)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Shahanas-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:1cd8:4a56:fac:5018%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.5\u0027, java.version: \u002711.0.6\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: 0   chromedriver                        0x0000000108befe99 chromedriver + 4808345\n1   chromedriver                        0x0000000108b8a5f3 chromedriver + 4392435\n2   chromedriver                        0x000000010881629d chromedriver + 770717\n3   chromedriver                        0x00000001087700f4 chromedriver + 90356\n4   chromedriver                        0x000000010876cc99 chromedriver + 76953\n5   chromedriver                        0x000000010879efa3 chromedriver + 282531\n6   chromedriver                        0x000000010879bda3 chromedriver + 269731\n7   chromedriver                        0x00000001087758dd chromedriver + 112861\n8   chromedriver                        0x0000000108776875 chromedriver + 116853\n9   chromedriver                        0x0000000108bb247f chromedriver + 4555903\n10  chromedriver                        0x0000000108bbf77a chromedriver + 4609914\n11  chromedriver                        0x0000000108bbf509 chromedriver + 4609289\n12  chromedriver                        0x0000000108b96319 chromedriver + 4440857\n13  chromedriver                        0x0000000108bbfd03 chromedriver + 4611331\n14  chromedriver                        0x0000000108ba8083 chromedriver + 4513923\n15  chromedriver                        0x0000000108bd6454 chromedriver + 4703316\n16  chromedriver                        0x0000000108bf5f57 chromedriver + 4833111\n17  libsystem_pthread.dylib             0x00007fff6dc86109 _pthread_start + 148\n18  libsystem_pthread.dylib             0x00007fff6dc81b8b thread_start + 15\n\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:127)\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:502)\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:488)\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:543)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\n\tat common.WebAPI.getLocalDriver(WebAPI.java:72)\n\tat common.WebAPI.setUp(WebAPI.java:54)\n\tat step_definitions.MultipleSearchEbay_Step_Definition.openBrowser(MultipleSearchEbay_Step_Definition.java:17)\n",
  "status": "failed"
});
formatter.before({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Chrome failed to start: crashed.\n  (unknown error: DevToolsActivePort file doesn\u0027t exist)\n  (The process started from chrome location /Applications/Google Chrome.app/Contents/MacOS/Google Chrome is no longer running, so ChromeDriver is assuming that Chrome has crashed.)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Shahanas-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:1cd8:4a56:fac:5018%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.5\u0027, java.version: \u002711.0.6\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: 0   chromedriver                        0x0000000104582e99 chromedriver + 4808345\n1   chromedriver                        0x000000010451d5f3 chromedriver + 4392435\n2   chromedriver                        0x00000001041a929d chromedriver + 770717\n3   chromedriver                        0x00000001041030f4 chromedriver + 90356\n4   chromedriver                        0x00000001040ffc99 chromedriver + 76953\n5   chromedriver                        0x0000000104131fa3 chromedriver + 282531\n6   chromedriver                        0x000000010412eda3 chromedriver + 269731\n7   chromedriver                        0x00000001041088dd chromedriver + 112861\n8   chromedriver                        0x0000000104109875 chromedriver + 116853\n9   chromedriver                        0x000000010454547f chromedriver + 4555903\n10  chromedriver                        0x000000010455277a chromedriver + 4609914\n11  chromedriver                        0x0000000104552509 chromedriver + 4609289\n12  chromedriver                        0x0000000104529319 chromedriver + 4440857\n13  chromedriver                        0x0000000104552d03 chromedriver + 4611331\n14  chromedriver                        0x000000010453b083 chromedriver + 4513923\n15  chromedriver                        0x0000000104569454 chromedriver + 4703316\n16  chromedriver                        0x0000000104588f57 chromedriver + 4833111\n17  libsystem_pthread.dylib             0x00007fff6dc86109 _pthread_start + 148\n18  libsystem_pthread.dylib             0x00007fff6dc81b8b thread_start + 15\n\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:127)\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:502)\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:488)\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:543)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\n\tat common.WebAPI.getLocalDriver(WebAPI.java:72)\n\tat common.WebAPI.setUp(WebAPI.java:54)\n\tat step_definitions.Search_On_Ebay_Product_Step_Definition.openBrowser(Search_On_Ebay_Product_Step_Definition.java:19)\n",
  "status": "failed"
});
formatter.before({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Chrome failed to start: crashed.\n  (unknown error: DevToolsActivePort file doesn\u0027t exist)\n  (The process started from chrome location /Applications/Google Chrome.app/Contents/MacOS/Google Chrome is no longer running, so ChromeDriver is assuming that Chrome has crashed.)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Shahanas-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:1cd8:4a56:fac:5018%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.5\u0027, java.version: \u002711.0.6\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: 0   chromedriver                        0x0000000106786e99 chromedriver + 4808345\n1   chromedriver                        0x00000001067215f3 chromedriver + 4392435\n2   chromedriver                        0x00000001063ad29d chromedriver + 770717\n3   chromedriver                        0x00000001063070f4 chromedriver + 90356\n4   chromedriver                        0x0000000106303c99 chromedriver + 76953\n5   chromedriver                        0x0000000106335fa3 chromedriver + 282531\n6   chromedriver                        0x0000000106332da3 chromedriver + 269731\n7   chromedriver                        0x000000010630c8dd chromedriver + 112861\n8   chromedriver                        0x000000010630d875 chromedriver + 116853\n9   chromedriver                        0x000000010674947f chromedriver + 4555903\n10  chromedriver                        0x000000010675677a chromedriver + 4609914\n11  chromedriver                        0x0000000106756509 chromedriver + 4609289\n12  chromedriver                        0x000000010672d319 chromedriver + 4440857\n13  chromedriver                        0x0000000106756d03 chromedriver + 4611331\n14  chromedriver                        0x000000010673f083 chromedriver + 4513923\n15  chromedriver                        0x000000010676d454 chromedriver + 4703316\n16  chromedriver                        0x000000010678cf57 chromedriver + 4833111\n17  libsystem_pthread.dylib             0x00007fff6dc86109 _pthread_start + 148\n18  libsystem_pthread.dylib             0x00007fff6dc81b8b thread_start + 15\n\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:127)\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:502)\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:488)\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:543)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\n\tat common.WebAPI.getLocalDriver(WebAPI.java:72)\n\tat common.WebAPI.setUp(WebAPI.java:54)\n\tat step_definitions.SearchOnEbay_Step_Definition.openBrowser(SearchOnEbay_Step_Definition.java:17)\n",
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
  "name": "Search product using Parameter",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@pending"
    }
  ]
});
formatter.step({
  "name": "I Enter \"Adidas Woman shirt\" in search input field",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Search_On_Ebay_Product_Step_Definition.i_Enter_in_search_input_field(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Click search button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnEbay_Step_Definition.i_Click_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should see \"\"Adidas Woman shirt\"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.Search_On_Ebay_Product_Step_Definition.i_should_see_Adidas_Woman_shirt()"
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
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: cannot determine loading status\nfrom disconnected: Unable to receive message from renderer\n  (Session info: chrome\u003d83.0.4103.116)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Shahanas-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:1cd8:4a56:fac:5018%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.5\u0027, java.version: \u002711.0.6\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: /var/folders/zf/jqsbyv4j0j5...}, goog:chromeOptions: {debuggerAddress: localhost:64860}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 150332161928d99d29247c8e70a5ddc5\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\n\tat common.WebAPI.setUp(WebAPI.java:58)\n\tat step_definitions.MultipleSearchEbay_Step_Definition.openBrowser(MultipleSearchEbay_Step_Definition.java:17)\n",
  "status": "failed"
});
formatter.before({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: session deleted because of page crash\nfrom unknown error: cannot determine loading status\nfrom tab crashed\n  (Session info: chrome\u003d83.0.4103.116)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Shahanas-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:1cd8:4a56:fac:5018%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.5\u0027, java.version: \u002711.0.6\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: /var/folders/zf/jqsbyv4j0j5...}, goog:chromeOptions: {debuggerAddress: localhost:64957}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: 3c1815a669ea223dcf2054cb88f72624\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.get(RemoteWebDriver.java:277)\n\tat common.WebAPI.setUp(WebAPI.java:58)\n\tat step_definitions.Search_On_Ebay_Product_Step_Definition.openBrowser(Search_On_Ebay_Product_Step_Definition.java:19)\n",
  "status": "failed"
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
  "status": "skipped"
});
formatter.scenario({
  "name": "Search product using Parameter",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@pending"
    }
  ]
});
formatter.step({
  "name": "I Enter \"Adidas Woman shoes\" in search input field",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Search_On_Ebay_Product_Step_Definition.i_Enter_in_search_input_field(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Click search button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnEbay_Step_Definition.i_Click_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should see \"\"Adidas Woman shoes\"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.Search_On_Ebay_Product_Step_Definition.i_should_see_Adidas_Woman_shoes()"
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
  "status": "passed"
});
formatter.before({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Chrome failed to start: crashed.\n  (unknown error: DevToolsActivePort file doesn\u0027t exist)\n  (The process started from chrome location /Applications/Google Chrome.app/Contents/MacOS/Google Chrome is no longer running, so ChromeDriver is assuming that Chrome has crashed.)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Shahanas-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:1cd8:4a56:fac:5018%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.5\u0027, java.version: \u002711.0.6\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: 0   chromedriver                        0x00000001006cfe99 chromedriver + 4808345\n1   chromedriver                        0x000000010066a5f3 chromedriver + 4392435\n2   chromedriver                        0x00000001002f629d chromedriver + 770717\n3   chromedriver                        0x00000001002500f4 chromedriver + 90356\n4   chromedriver                        0x000000010024cc99 chromedriver + 76953\n5   chromedriver                        0x000000010027efa3 chromedriver + 282531\n6   chromedriver                        0x000000010027bda3 chromedriver + 269731\n7   chromedriver                        0x00000001002558dd chromedriver + 112861\n8   chromedriver                        0x0000000100256875 chromedriver + 116853\n9   chromedriver                        0x000000010069247f chromedriver + 4555903\n10  chromedriver                        0x000000010069f77a chromedriver + 4609914\n11  chromedriver                        0x000000010069f509 chromedriver + 4609289\n12  chromedriver                        0x0000000100676319 chromedriver + 4440857\n13  chromedriver                        0x000000010069fd03 chromedriver + 4611331\n14  chromedriver                        0x0000000100688083 chromedriver + 4513923\n15  chromedriver                        0x00000001006b6454 chromedriver + 4703316\n16  chromedriver                        0x00000001006d5f57 chromedriver + 4833111\n17  libsystem_pthread.dylib             0x00007fff6dc86109 _pthread_start + 148\n18  libsystem_pthread.dylib             0x00007fff6dc81b8b thread_start + 15\n\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:127)\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:502)\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:488)\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:543)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\n\tat common.WebAPI.getLocalDriver(WebAPI.java:72)\n\tat common.WebAPI.setUp(WebAPI.java:54)\n\tat step_definitions.Search_On_Ebay_Product_Step_Definition.openBrowser(Search_On_Ebay_Product_Step_Definition.java:19)\n",
  "status": "failed"
});
formatter.before({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Chrome failed to start: crashed.\n  (unknown error: DevToolsActivePort file doesn\u0027t exist)\n  (The process started from chrome location /Applications/Google Chrome.app/Contents/MacOS/Google Chrome is no longer running, so ChromeDriver is assuming that Chrome has crashed.)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Shahanas-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:1cd8:4a56:fac:5018%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.5\u0027, java.version: \u002711.0.6\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: 0   chromedriver                        0x00000001032bfe99 chromedriver + 4808345\n1   chromedriver                        0x000000010325a5f3 chromedriver + 4392435\n2   chromedriver                        0x0000000102ee629d chromedriver + 770717\n3   chromedriver                        0x0000000102e400f4 chromedriver + 90356\n4   chromedriver                        0x0000000102e3cc99 chromedriver + 76953\n5   chromedriver                        0x0000000102e6efa3 chromedriver + 282531\n6   chromedriver                        0x0000000102e6bda3 chromedriver + 269731\n7   chromedriver                        0x0000000102e458dd chromedriver + 112861\n8   chromedriver                        0x0000000102e46875 chromedriver + 116853\n9   chromedriver                        0x000000010328247f chromedriver + 4555903\n10  chromedriver                        0x000000010328f77a chromedriver + 4609914\n11  chromedriver                        0x000000010328f509 chromedriver + 4609289\n12  chromedriver                        0x0000000103266319 chromedriver + 4440857\n13  chromedriver                        0x000000010328fd03 chromedriver + 4611331\n14  chromedriver                        0x0000000103278083 chromedriver + 4513923\n15  chromedriver                        0x00000001032a6454 chromedriver + 4703316\n16  chromedriver                        0x00000001032c5f57 chromedriver + 4833111\n17  libsystem_pthread.dylib             0x00007fff6dc86109 _pthread_start + 148\n18  libsystem_pthread.dylib             0x00007fff6dc81b8b thread_start + 15\n\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:127)\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:502)\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:488)\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:543)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\n\tat common.WebAPI.getLocalDriver(WebAPI.java:72)\n\tat common.WebAPI.setUp(WebAPI.java:54)\n\tat step_definitions.SearchOnEbay_Step_Definition.openBrowser(SearchOnEbay_Step_Definition.java:17)\n",
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
  "name": "Search product using Parameter",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@pending"
    }
  ]
});
formatter.step({
  "name": "I Enter \"Adidas Woman sandals\" in search input field",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Search_On_Ebay_Product_Step_Definition.i_Enter_in_search_input_field(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Click search button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnEbay_Step_Definition.i_Click_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should see \"\"Adidas Woman sandals\"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.Search_On_Ebay_Product_Step_Definition.i_should_see_Adidas_Woman_sandals()"
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
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: Chrome failed to start: crashed.\n  (unknown error: DevToolsActivePort file doesn\u0027t exist)\n  (The process started from chrome location /Applications/Google Chrome.app/Contents/MacOS/Google Chrome is no longer running, so ChromeDriver is assuming that Chrome has crashed.)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Shahanas-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:1cd8:4a56:fac:5018%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.5\u0027, java.version: \u002711.0.6\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: 0   chromedriver                        0x0000000107270e99 chromedriver + 4808345\n1   chromedriver                        0x000000010720b5f3 chromedriver + 4392435\n2   chromedriver                        0x0000000106e9729d chromedriver + 770717\n3   chromedriver                        0x0000000106df10f4 chromedriver + 90356\n4   chromedriver                        0x0000000106dedc99 chromedriver + 76953\n5   chromedriver                        0x0000000106e1ffa3 chromedriver + 282531\n6   chromedriver                        0x0000000106e1cda3 chromedriver + 269731\n7   chromedriver                        0x0000000106df68dd chromedriver + 112861\n8   chromedriver                        0x0000000106df7875 chromedriver + 116853\n9   chromedriver                        0x000000010723347f chromedriver + 4555903\n10  chromedriver                        0x000000010724077a chromedriver + 4609914\n11  chromedriver                        0x0000000107240509 chromedriver + 4609289\n12  chromedriver                        0x0000000107217319 chromedriver + 4440857\n13  chromedriver                        0x0000000107240d03 chromedriver + 4611331\n14  chromedriver                        0x0000000107229083 chromedriver + 4513923\n15  chromedriver                        0x0000000107257454 chromedriver + 4703316\n16  chromedriver                        0x0000000107276f57 chromedriver + 4833111\n17  libsystem_pthread.dylib             0x00007fff6dc86109 _pthread_start + 148\n18  libsystem_pthread.dylib             0x00007fff6dc81b8b thread_start + 15\n\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:127)\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:502)\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:488)\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:543)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\n\tat common.WebAPI.getLocalDriver(WebAPI.java:72)\n\tat common.WebAPI.setUp(WebAPI.java:54)\n\tat step_definitions.MultipleSearchEbay_Step_Definition.openBrowser(MultipleSearchEbay_Step_Definition.java:17)\n",
  "status": "failed"
});
formatter.before({
  "error_message": "org.openqa.selenium.WebDriverException: unknown error: failed to unzip automation extension\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Shahanas-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:1cd8:4a56:fac:5018%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.5\u0027, java.version: \u002711.0.6\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: 0   chromedriver                        0x0000000106925e99 chromedriver + 4808345\n1   chromedriver                        0x00000001068c05f3 chromedriver + 4392435\n2   chromedriver                        0x000000010654c29d chromedriver + 770717\n3   chromedriver                        0x00000001064a8000 chromedriver + 98304\n4   chromedriver                        0x00000001064a4d50 chromedriver + 85328\n5   chromedriver                        0x00000001064a2c99 chromedriver + 76953\n6   chromedriver                        0x00000001064d4fa3 chromedriver + 282531\n7   chromedriver                        0x00000001064d1da3 chromedriver + 269731\n8   chromedriver                        0x00000001064ab8dd chromedriver + 112861\n9   chromedriver                        0x00000001064ac875 chromedriver + 116853\n10  chromedriver                        0x00000001068e847f chromedriver + 4555903\n11  chromedriver                        0x00000001068f577a chromedriver + 4609914\n12  chromedriver                        0x00000001068f5509 chromedriver + 4609289\n13  chromedriver                        0x00000001068cc319 chromedriver + 4440857\n14  chromedriver                        0x00000001068f5d03 chromedriver + 4611331\n15  chromedriver                        0x00000001068de083 chromedriver + 4513923\n16  chromedriver                        0x000000010690c454 chromedriver + 4703316\n17  chromedriver                        0x000000010692bf57 chromedriver + 4833111\n18  libsystem_pthread.dylib             0x00007fff6dc86109 _pthread_start + 148\n19  libsystem_pthread.dylib             0x00007fff6dc81b8b thread_start + 15\n\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:127)\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:502)\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:488)\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:543)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\n\tat common.WebAPI.getLocalDriver(WebAPI.java:72)\n\tat common.WebAPI.setUp(WebAPI.java:54)\n\tat step_definitions.Search_On_Ebay_Product_Step_Definition.openBrowser(Search_On_Ebay_Product_Step_Definition.java:19)\n",
  "status": "failed"
});
formatter.before({
  "error_message": "org.openqa.selenium.WebDriverException: Timed out waiting for driver server to start.\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Shahanas-MacBook-Pro.local\u0027, ip: \u0027fe80:0:0:0:1cd8:4a56:fac:5018%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.5\u0027, java.version: \u002711.0.6\u0027\nDriver info: driver.version: ChromeDriver\n\tat org.openqa.selenium.remote.service.DriverService.waitUntilAvailable(DriverService.java:202)\n\tat org.openqa.selenium.remote.service.DriverService.start(DriverService.java:188)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:79)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\n\tat common.WebAPI.getLocalDriver(WebAPI.java:72)\n\tat common.WebAPI.setUp(WebAPI.java:54)\n\tat step_definitions.SearchOnEbay_Step_Definition.openBrowser(SearchOnEbay_Step_Definition.java:17)\nCaused by: org.openqa.selenium.net.UrlChecker$TimeoutException: Timed out waiting for [http://localhost:36358/status] to be available after 20015 ms\n\tat org.openqa.selenium.net.UrlChecker.waitUntilAvailable(UrlChecker.java:100)\n\tat org.openqa.selenium.remote.service.DriverService.waitUntilAvailable(DriverService.java:197)\n\tat org.openqa.selenium.remote.service.DriverService.start(DriverService.java:188)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:79)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\n\tat common.WebAPI.getLocalDriver(WebAPI.java:72)\n\tat common.WebAPI.setUp(WebAPI.java:54)\n\tat step_definitions.SearchOnEbay_Step_Definition.openBrowser(SearchOnEbay_Step_Definition.java:17)\n\tat jdk.internal.reflect.GeneratedMethodAccessor4.invoke(Unknown Source)\n\tat java.base/jdk.internal.reflect.DelegatingMethodAccessorImpl.invoke(DelegatingMethodAccessorImpl.java:43)\n\tat java.base/java.lang.reflect.Method.invoke(Method.java:566)\n\tat io.cucumber.java.Invoker.invoke(Invoker.java:27)\n\tat io.cucumber.java.JavaHookDefinition.execute(JavaHookDefinition.java:61)\n\tat io.cucumber.core.runner.CoreHookDefinition.execute(CoreHookDefinition.java:31)\n\tat io.cucumber.core.runner.HookDefinitionMatch.runStep(HookDefinitionMatch.java:20)\n\tat io.cucumber.core.runner.TestStep.executeStep(TestStep.java:64)\n\tat io.cucumber.core.runner.TestStep.run(TestStep.java:49)\n\tat io.cucumber.core.runner.TestCase.run(TestCase.java:47)\n\tat io.cucumber.core.runner.Runner.runPickle(Runner.java:67)\n\tat io.cucumber.junit.PickleRunners$NoStepDescriptions.run(PickleRunners.java:149)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:83)\n\tat io.cucumber.junit.FeatureRunner.runChild(FeatureRunner.java:24)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:185)\n\tat io.cucumber.junit.Cucumber.runChild(Cucumber.java:83)\n\tat org.junit.runners.ParentRunner$4.run(ParentRunner.java:331)\n\tat org.junit.runners.ParentRunner$1.schedule(ParentRunner.java:79)\n\tat org.junit.runners.ParentRunner.runChildren(ParentRunner.java:329)\n\tat org.junit.runners.ParentRunner.access$100(ParentRunner.java:66)\n\tat org.junit.runners.ParentRunner$2.evaluate(ParentRunner.java:293)\n\tat io.cucumber.junit.Cucumber$RunCucumber.evaluate(Cucumber.java:219)\n\tat org.junit.runners.ParentRunner$3.evaluate(ParentRunner.java:306)\n\tat org.junit.runners.ParentRunner.run(ParentRunner.java:413)\n\tat org.junit.runner.JUnitCore.run(JUnitCore.java:137)\n\tat com.intellij.junit4.JUnit4IdeaTestRunner.startRunnerWithArgs(JUnit4IdeaTestRunner.java:68)\n\tat com.intellij.rt.junit.IdeaTestRunner$Repeater.startRunnerWithArgs(IdeaTestRunner.java:33)\n\tat com.intellij.rt.junit.JUnitStarter.prepareStreamsAndStart(JUnitStarter.java:230)\n\tat com.intellij.rt.junit.JUnitStarter.main(JUnitStarter.java:58)\nCaused by: java.util.concurrent.TimeoutException\n\tat java.base/java.util.concurrent.FutureTask.get(FutureTask.java:204)\n\tat com.google.common.util.concurrent.SimpleTimeLimiter.callWithTimeout(SimpleTimeLimiter.java:156)\n\tat org.openqa.selenium.net.UrlChecker.waitUntilAvailable(UrlChecker.java:75)\n\t... 48 more\n",
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
  "name": "Search product using Parameter",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@pending"
    }
  ]
});
formatter.step({
  "name": "I Enter \"Adidas Woman Jacket\" in search input field",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Search_On_Ebay_Product_Step_Definition.i_Enter_in_search_input_field(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Click search button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnEbay_Step_Definition.i_Click_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should see \"Adidas Woman Jacket\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.Search_On_Ebay_Product_Step_Definition.i_should_see(java.lang.String)"
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
});