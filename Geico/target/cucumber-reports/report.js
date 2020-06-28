$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/features/GeicoHome.feature");
formatter.feature({
  "name": "Search Bundle \u0026 Saves on geico homepage",
  "description": "  As an user i wanted to search product on geico.com for offers",
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
  "name": "I am at geico homePage",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Search offers for bundle",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I Enter am geico homePage",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnGeico_Step_Definition.i_Enter_am_geico_homePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I pass value for zipcode 11373",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnGeico_Step_Definition.i_pass_value_for_zipcode(java.lang.Integer)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click on Start Quote searchButton",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnGeico_Step_Definition.i_click_on_Start_Quote_searchButton()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should see Auto",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnGeico_Step_Definition.i_should_see_Auto()"
});
formatter.result({
  "status": "skipped"
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
formatter.step({
  "name": "I am at geico homePage",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Search Bundle Offers using Parameter",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@pending"
    }
  ]
});
formatter.step({
  "name": "I Enter \u003c Bundle Offers\u003e in  input field",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I Click search button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnGeico_Step_Definition.i_Click_search_button()"
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
  "location": "step_definitions.SearchOnGeico_Step_Definition.i_should_see_Expected_Items()"
});
formatter.result({
  "status": "skipped"
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
  "name": "I Enter \"\u003cBundle Offers\u003e\" in  input field",
  "keyword": "When "
});
formatter.step({
  "name": "I Click Start Quote search button",
  "keyword": "When "
});
formatter.step({
  "name": "I Should see \"\u003cExpectedItems\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Bundle Offers",
        "ExpectedItems"
      ]
    },
    {
      "cells": [
        "Auto",
        "\" Auto \""
      ]
    },
    {
      "cells": [
        "Renters",
        "\" Renters \""
      ]
    },
    {
      "cells": [
        "Home",
        "\" Home \""
      ]
    },
    {
      "cells": [
        "Condo",
        "\" Condo \""
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
formatter.step({
  "name": "I am at geico homePage",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
  "name": "I Enter \"Auto\" in  input field",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnGeico_Step_Definition.i_Enter_in_input_field(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Click Start Quote search button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnGeico_Step_Definition.i_Click_Start_Quote_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Should see \"\" Auto \"\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
formatter.step({
  "name": "I am at geico homePage",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
  "name": "I Enter \"Renters\" in  input field",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnGeico_Step_Definition.i_Enter_in_input_field(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Click Start Quote search button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnGeico_Step_Definition.i_Click_Start_Quote_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Should see \"\" Renters \"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnGeico_Step_Definition.i_Should_see_Renters(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
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
formatter.step({
  "name": "I am at geico homePage",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
  "name": "I Enter \"Home\" in  input field",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnGeico_Step_Definition.i_Enter_in_input_field(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Click Start Quote search button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnGeico_Step_Definition.i_Click_Start_Quote_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Should see \"\" Home \"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnGeico_Step_Definition.i_Should_see_Home(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
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
formatter.step({
  "name": "I am at geico homePage",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
  "name": "I Enter \"Condo\" in  input field",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnGeico_Step_Definition.i_Enter_in_input_field(java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Click Start Quote search button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnGeico_Step_Definition.i_Click_Start_Quote_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Should see \"\" Condo \"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnGeico_Step_Definition.i_Should_see_Condo(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/main/java/features/GeicoHomePage.feature");
formatter.feature({
  "name": "As a customer I want to explore Geico.com homepage",
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
  "name": "I am at geico.com homePage",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Scroll Down the geico homepage",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I scroll down the webPage byPixel",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I will see the page is being scrolled down",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
formatter.step({
  "name": "I am at geico.com homePage",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "Scroll till the end of the geico homepage",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "name": "I do scroll till the end",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I will see  the page is being scrolled tillToEnd",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
formatter.step({
  "name": "I am at geico.com homePage",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "DO dropDown on Insurance",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "I click on the drop down button and i select the Property Insurance",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I should see types of Property Insurance page for Home",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
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
formatter.step({
  "name": "I am at geico.com homePage",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.scenario({
  "name": "DO dropDown on Information",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@RegressionTest"
    }
  ]
});
formatter.step({
  "name": "I click on the drop down button and i select My Account",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I should see My Account Page",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I can pass my email id in search field",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I enter my password",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I click on Log In button",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I should see Forget User ID/Password page",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "passed"
});
});