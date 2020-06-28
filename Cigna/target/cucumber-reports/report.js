$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/features/CignaHome.feature");
formatter.feature({
  "name": "Search home page  on at\u0026t home page",
  "description": "  As a customer i wanted to search home page on cigna.com homepage",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Scroll Down the cigna homepage",
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
  "name": "I scroll down the webPage byPixel",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnCigna_StepDefinition.i_scroll_down_the_webPage_byPixel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will see the webPage is scrolled down",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnCigna_StepDefinition.i_will_see_the_webPage_is_scrolled_down()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Scroll Down till the end of cigna homepage",
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
  "name": "I scroll down till the end",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnCigna_StepDefinition.i_scroll_down_till_the_end()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will see the page is  scrolled down  till to the end",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnCigna_StepDefinition.i_will_see_the_page_is_scrolled_down_till_to_the_end()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Search Log in using parameters",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test3"
    }
  ]
});
formatter.step({
  "name": "I am in Log in page",
  "keyword": "When "
});
formatter.step({
  "name": "I am passing  \u003cUsername\u003e in search  input field",
  "keyword": "And "
});
formatter.step({
  "name": "I do pass \u003cPassword\u003e in input field",
  "keyword": "And "
});
formatter.step({
  "name": "I should see Log in",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Username",
        "Password"
      ]
    },
    {
      "cells": [
        "tester1",
        "1234"
      ]
    },
    {
      "cells": [
        "tester2",
        "1232"
      ]
    },
    {
      "cells": [
        "tester3",
        "1243"
      ]
    },
    {
      "cells": [
        "tester4",
        "4321"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Search Log in using parameters",
  "description": "",
  "keyword": "Scenario Outline",
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
  "name": "I am in Log in page",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnCigna_StepDefinition.i_am_in_Log_in_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am passing  tester1 in search  input field",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnCigna_StepDefinition.i_am_passing_tester1_in_search_input_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I do pass 1234 in input field",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnCigna_StepDefinition.i_do_pass_in_input_field(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see Log in",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnCigna_StepDefinition.i_should_see_Log_in()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Search Log in using parameters",
  "description": "",
  "keyword": "Scenario Outline",
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
  "name": "I am in Log in page",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnCigna_StepDefinition.i_am_in_Log_in_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am passing  tester2 in search  input field",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnCigna_StepDefinition.i_am_passing_tester2_in_search_input_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I do pass 1232 in input field",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnCigna_StepDefinition.i_do_pass_in_input_field(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see Log in",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnCigna_StepDefinition.i_should_see_Log_in()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Search Log in using parameters",
  "description": "",
  "keyword": "Scenario Outline",
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
  "name": "I am in Log in page",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnCigna_StepDefinition.i_am_in_Log_in_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am passing  tester3 in search  input field",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnCigna_StepDefinition.i_am_passing_tester3_in_search_input_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I do pass 1243 in input field",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnCigna_StepDefinition.i_do_pass_in_input_field(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see Log in",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnCigna_StepDefinition.i_should_see_Log_in()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Search Log in using parameters",
  "description": "",
  "keyword": "Scenario Outline",
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
  "name": "I am in Log in page",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnCigna_StepDefinition.i_am_in_Log_in_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am passing  tester4 in search  input field",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnCigna_StepDefinition.i_am_passing_tester4_in_search_input_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I do pass 4321 in input field",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnCigna_StepDefinition.i_do_pass_in_input_field(java.lang.Integer)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see Log in",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnCigna_StepDefinition.i_should_see_Log_in()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});