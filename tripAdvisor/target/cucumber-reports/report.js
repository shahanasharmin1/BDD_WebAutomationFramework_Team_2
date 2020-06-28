$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/features/login.feature");
formatter.feature({
  "name": "As a customer I want to explore Trip Advisor\u0027s homepage",
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
formatter.step({
  "name": "I am at tripadvisor.com homepage",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "In the searchbox",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test1"
    }
  ]
});
formatter.step({
  "name": "I enter California in the search box",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I click on the search button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I should see the hotels",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/main/java/features/tripAdvisorHome.feature");
formatter.feature({
  "name": "Search Hotels in tripAdvisor",
  "description": "  As a customer i want to search  in  tripAdvisor.com for hotels in California",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Search Hotels in tripAdvisor",
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
  "name": "I am at tripAdvisor Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_am_at_tripAdvisor_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on hotels button in homepage",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_click_on_hotels_button_in_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click hotels button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_click_hotels_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to search hotels in California",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_should_be_able_to_search_hotels_in_California()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Scroll Down the tripAdviser homepage",
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
  "name": "I scroll down the webPage byPixel",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_scroll_down_the_webPage_byPixel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will see the webPage is scrolled down",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_will_see_the_webPage_is_scrolled_down()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Scroll Down till the end of tripAdvisor homepage",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test3"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I scroll down till the end",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_scroll_down_till_the_end()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will see the page is  scrolled down  till to the end",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_will_see_the_page_is_scrolled_down_till_to_the_end()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "I am at home page",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test4"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I do click in Sign in",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_do_click_in_Sign_in()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchSessionException: Session ID is null. Using WebDriver after calling quit()?\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Nafiss-Air.lan1\u0027, ip: \u00272604:2000:1601:6003:0:0:0:cb9%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.5\u0027, java.version: \u002711.0.6\u0027\nDriver info: driver.version: RemoteWebDriver\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:125)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByXPath(RemoteWebDriver.java:428)\n\tat org.openqa.selenium.By$ByXPath.findElement(By.java:353)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy19.click(Unknown Source)\n\tat home.HomePage.setSearchSignIn(HomePage.java:113)\n\tat step_definitions.SearchOntripAdvisor_Step_definition.i_do_click_in_Sign_in(SearchOntripAdvisor_Step_definition.java:57)\n\tat ✽.I do click in Sign in(file:///Users/nafisshamsuzzoha/BDD_WebAutomationFramework_Team_2/tripAdvisor/src/main/java/features/tripAdvisorHome.feature:23)\n",
  "status": "failed"
});
formatter.step({
  "name": "I should see new page with signin with email",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_should_see_new_page_with_signin_with_email()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I pass \u003c email \u003e and \u003c password \u003e in search field",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_pass_email_and_password_in_search_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click Log in",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_click_Log_in()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should see forget ID",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_should_see_forget_ID()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should validate forget ID",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_should_validate_forget_ID()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Search destinations in home page using parameters",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test5"
    }
  ]
});
formatter.step({
  "name": "I am already in trip advisor home page",
  "keyword": "When "
});
formatter.step({
  "name": "I am looking for \u003cdestinations\u003e in home page input field",
  "keyword": "And "
});
formatter.step({
  "name": "I should see \u003cexpected\u003e results",
  "keyword": "And "
});
formatter.step({
  "name": "I am able to do validate",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "destinations",
        "expected"
      ]
    },
    {
      "cells": [
        "New York City,NY",
        "\" New York City,NY \""
      ]
    },
    {
      "cells": [
        "Singapore,Singapore",
        "\" Singapore,Singapore \""
      ]
    },
    {
      "cells": [
        "Rome,Italy",
        "\" Rome,Italy   \""
      ]
    },
    {
      "cells": [
        "Paris,France",
        "\" Paris,France   \""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Search destinations in home page using parameters",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test5"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am already in trip advisor home page",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_am_already_in_trip_advisor_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am looking for New York City,NY in home page input field",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_am_looking_for_New_York_City_NY_in_home_page_input_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \" New York City,NY \" results",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_should_see_results(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to do validate",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_am_able_to_do_validate()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Search destinations in home page using parameters",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test5"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am already in trip advisor home page",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_am_already_in_trip_advisor_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am looking for Singapore,Singapore in home page input field",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_am_looking_for_Singapore_Singapore_in_home_page_input_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \" Singapore,Singapore \" results",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_should_see_results(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to do validate",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_am_able_to_do_validate()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Search destinations in home page using parameters",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test5"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am already in trip advisor home page",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_am_already_in_trip_advisor_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am looking for Rome,Italy in home page input field",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_am_looking_for_Rome_Italy_in_home_page_input_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \" Rome,Italy   \" results",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_should_see_results(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to do validate",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_am_able_to_do_validate()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Search destinations in home page using parameters",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test5"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am already in trip advisor home page",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_am_already_in_trip_advisor_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am looking for Paris,France in home page input field",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_am_looking_for_Paris_France_in_home_page_input_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \" Paris,France   \" results",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_should_see_results(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to do validate",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_am_able_to_do_validate()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Search dream next trip  using parameters",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test6"
    }
  ]
});
formatter.step({
  "name": "I am looking for \u003cdream next trip\u003e in home page input field",
  "keyword": "When "
});
formatter.step({
  "name": "I should see \u003cexpected\u003e results",
  "keyword": "And "
});
formatter.step({
  "name": "I am able to do validate",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "dream next trip",
        "expected"
      ]
    },
    {
      "cells": [
        "Washington DC,DC",
        "\" Washington DC,DC \""
      ]
    },
    {
      "cells": [
        "Nantucket,MA",
        "\" Nantucket,MA \""
      ]
    },
    {
      "cells": [
        "Atlantic City,NJ",
        "\" Atlantic City,NJ \""
      ]
    },
    {
      "cells": [
        "Arlington,VA",
        "\" Arlington,VA  \""
      ]
    },
    {
      "cells": [
        "Dewey Beach,DE",
        "\" Dewey Beach,DE \""
      ]
    },
    {
      "cells": [
        "Cape Neddick , ME",
        "\" Cape Neddick , ME \""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Search dream next trip  using parameters",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test6"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am looking for Washington DC,DC in home page input field",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_am_looking_for_Washington_DC_DC_in_home_page_input_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \" Washington DC,DC \" results",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_should_see_results(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to do validate",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_am_able_to_do_validate()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Search dream next trip  using parameters",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test6"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am looking for Nantucket,MA in home page input field",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_am_looking_for_Nantucket_MA_in_home_page_input_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \" Nantucket,MA \" results",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_should_see_results(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to do validate",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_am_able_to_do_validate()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Search dream next trip  using parameters",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test6"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am looking for Atlantic City,NJ in home page input field",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_am_looking_for_Atlantic_City_NJ_in_home_page_input_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \" Atlantic City,NJ \" results",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_should_see_results(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to do validate",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_am_able_to_do_validate()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Search dream next trip  using parameters",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test6"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am looking for Arlington,VA in home page input field",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_am_looking_for_Arlington_VA_in_home_page_input_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \" Arlington,VA  \" results",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_should_see_results(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to do validate",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_am_able_to_do_validate()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Search dream next trip  using parameters",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test6"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am looking for Dewey Beach,DE in home page input field",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_am_looking_for_Dewey_Beach_DE_in_home_page_input_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \" Dewey Beach,DE \" results",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_should_see_results(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to do validate",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_am_able_to_do_validate()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Search dream next trip  using parameters",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test6"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am looking for Cape Neddick , ME in home page input field",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_am_looking_for_Cape_Neddick_ME_in_home_page_input_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \" Cape Neddick , ME \" results",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_should_see_results(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to do validate",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_am_able_to_do_validate()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});