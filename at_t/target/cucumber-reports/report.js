$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/features/at_tHome.feature");
formatter.feature({
  "name": "Search Deals on at\u0026t search box",
  "description": "  As a customer i want to search Deals on at\u0026t homepage",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Search deals",
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
  "status": "passed"
});
formatter.step({
  "name": "I should see deals",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnAt_t_StepDefinition.i_should_see_deals()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Scroll Down the at\u0026t homepage",
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
  "location": "step_definitions.SearchOnAt_t_StepDefinition.i_scroll_down_the_webPage_byPixel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will see the webPage is scrolled down",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnAt_t_StepDefinition.i_will_see_the_webPage_is_scrolled_down()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Scroll Down till the end of at\u0026t homepage",
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
  "location": "step_definitions.SearchOnAt_t_StepDefinition.i_scroll_down_till_the_end()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will see the page is  scrolled down  till to the end",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnAt_t_StepDefinition.i_will_see_the_page_is_scrolled_down_till_to_the_end()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Search offers in Search box input field",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test4"
    }
  ]
});
formatter.step({
  "name": "I am in search box input field",
  "keyword": "When "
});
formatter.step({
  "name": "I am looking for \u003cdeals\u003e in search box input field",
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
        "deals",
        "expected"
      ]
    },
    {
      "cells": [
        "Upgrade a device",
        "\"Upgrade a device"
      ]
    },
    {
      "cells": [
        "AT\u0026T PREPAID",
        "\"AT\u0026T PREPAID \""
      ]
    },
    {
      "cells": [
        "TV \u0026 internet bundles",
        "\"TV \u0026 internet bundles\""
      ]
    },
    {
      "cells": [
        "AT\u0026T deals",
        "\" AT\u0026T deals  \""
      ]
    }
  ]
});
formatter.scenario({
  "name": "Search offers in Search box input field",
  "description": "",
  "keyword": "Scenario Outline",
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
  "name": "I am in search box input field",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnAt_t_StepDefinition.i_am_in_search_box_input_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am looking for Upgrade a device in search box input field",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnAt_t_StepDefinition.i_am_looking_for_Upgrade_a_device_in_search_box_input_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"Upgrade a device results",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnAt_t_StepDefinition.i_should_see_Upgrade_a_device_results()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to do validate",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnAt_t_StepDefinition.i_am_able_to_do_validate()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Search offers in Search box input field",
  "description": "",
  "keyword": "Scenario Outline",
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
  "name": "I am in search box input field",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnAt_t_StepDefinition.i_am_in_search_box_input_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am looking for AT\u0026T PREPAID in search box input field",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnAt_t_StepDefinition.i_am_looking_for_AT_T_PREPAID_in_search_box_input_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"AT\u0026T PREPAID \" results",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnAt_t_StepDefinition.i_should_see_results(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to do validate",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnAt_t_StepDefinition.i_am_able_to_do_validate()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Search offers in Search box input field",
  "description": "",
  "keyword": "Scenario Outline",
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
  "name": "I am in search box input field",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnAt_t_StepDefinition.i_am_in_search_box_input_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am looking for TV \u0026 internet bundles in search box input field",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnAt_t_StepDefinition.i_am_looking_for_TV_internet_bundles_in_search_box_input_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"TV \u0026 internet bundles\" results",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnAt_t_StepDefinition.i_should_see_results(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to do validate",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnAt_t_StepDefinition.i_am_able_to_do_validate()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Search offers in Search box input field",
  "description": "",
  "keyword": "Scenario Outline",
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
  "name": "I am in search box input field",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnAt_t_StepDefinition.i_am_in_search_box_input_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am looking for AT\u0026T deals in search box input field",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnAt_t_StepDefinition.i_am_looking_for_AT_T_deals_in_search_box_input_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \" AT\u0026T deals  \" results",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnAt_t_StepDefinition.i_should_see_results(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to do validate",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnAt_t_StepDefinition.i_am_able_to_do_validate()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Scenario: DO dropDown on Account",
  "description": "",
  "keyword": "Scenario",
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
  "name": "I click on the drop down button and i select View \u0026 pay bill",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnAt_t_StepDefinition.i_click_on_the_drop_down_button_and_i_select_View_pay_bill()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see Sign in page",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnAt_t_StepDefinition.i_should_see_Sign_in_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});