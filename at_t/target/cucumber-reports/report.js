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
  "name": "I should see deal",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnAt_t_StepDefinition.i_should_see_deal()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "I search Header using Parameter",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test2"
    }
  ]
});
formatter.step({
  "name": "I am at  at\u0026thomepage",
  "keyword": "When "
});
formatter.step({
  "name": "I need to click\u003citems\u003ein header part",
  "keyword": "And "
});
formatter.step({
  "name": "I should see\u003cexpected\u003eresults",
  "keyword": "And "
});
formatter.step({
  "name": "I am able to validate the items",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "items",
        "expected"
      ]
    },
    {
      "cells": [
        "Deals",
        "Deals"
      ]
    },
    {
      "cells": [
        "wireless",
        "wireless"
      ]
    },
    {
      "cells": [
        "Internet",
        "Internet"
      ]
    },
    {
      "cells": [
        "tv",
        "tv"
      ]
    },
    {
      "cells": [
        "prepaid",
        "prepaid"
      ]
    }
  ]
});
formatter.scenario({
  "name": "I search Header using Parameter",
  "description": "",
  "keyword": "Scenario Outline",
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
  "name": "I am at  at\u0026thomepage",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnAt_t_StepDefinition.i_am_at_at_thomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I need to clickDealsin header part",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnAt_t_StepDefinition.i_need_to_clickDealsin_header_part()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should seeDealsresults",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnAt_t_StepDefinition.i_should_seeDealsresults()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to validate the items",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnAt_t_StepDefinition.i_am_able_to_validate_the_items()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "I search Header using Parameter",
  "description": "",
  "keyword": "Scenario Outline",
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
  "name": "I am at  at\u0026thomepage",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnAt_t_StepDefinition.i_am_at_at_thomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I need to clickwirelessin header part",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnAt_t_StepDefinition.i_need_to_clickwirelessin_header_part()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should seewirelessresults",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnAt_t_StepDefinition.i_should_seewirelessresults()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to validate the items",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnAt_t_StepDefinition.i_am_able_to_validate_the_items()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "I search Header using Parameter",
  "description": "",
  "keyword": "Scenario Outline",
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
  "name": "I am at  at\u0026thomepage",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnAt_t_StepDefinition.i_am_at_at_thomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I need to clickInternetin header part",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnAt_t_StepDefinition.i_need_to_clickInternetin_header_part()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should seeInternetresults",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnAt_t_StepDefinition.i_should_seeInternetresults()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to validate the items",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnAt_t_StepDefinition.i_am_able_to_validate_the_items()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "I search Header using Parameter",
  "description": "",
  "keyword": "Scenario Outline",
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
  "name": "I am at  at\u0026thomepage",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnAt_t_StepDefinition.i_am_at_at_thomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I need to clicktvin header part",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnAt_t_StepDefinition.i_need_to_clicktvin_header_part()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should seetvresults",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnAt_t_StepDefinition.i_should_seetvresults()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to validate the items",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnAt_t_StepDefinition.i_am_able_to_validate_the_items()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "I search Header using Parameter",
  "description": "",
  "keyword": "Scenario Outline",
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
  "name": "I am at  at\u0026thomepage",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnAt_t_StepDefinition.i_am_at_at_thomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I need to clickprepaidin header part",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnAt_t_StepDefinition.i_need_to_clickprepaidin_header_part()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should seeprepaidresults",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnAt_t_StepDefinition.i_should_seeprepaidresults()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to validate the items",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnAt_t_StepDefinition.i_am_able_to_validate_the_items()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "Scroll Down the BOA Homepage",
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
  "name": "I scroll down the webpage byPixel",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnAt_t_StepDefinition.i_scroll_down_the_webpage_byPixel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Then I will see the the page are scrolled down",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnAt_t_StepDefinition.then_I_will_see_the_the_page_are_scrolled_down()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "scroll till the end of the BOA homepage",
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
  "name": "i scroll till the end",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnAt_t_StepDefinition.i_scroll_till_the_end()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will see the the page are scrolled tillend",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnAt_t_StepDefinition.i_will_see_the_the_page_are_scrolled_tillend()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "click on Image",
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
  "name": "I click on Image",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnAt_t_StepDefinition.i_click_on_Image()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to validate the AT\u0026THomepage",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnAt_t_StepDefinition.i_am_able_to_validate_the_AT_THomepage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "hover on internet",
  "description": "",
  "keyword": "Scenario",
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
  "name": "I click on internet",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnAt_t_StepDefinition.i_click_on_internet()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will see the offer of the internet options",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnAt_t_StepDefinition.i_will_see_the_offer_of_the_internet_options()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "drop down on Account Tab",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test7"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I click on the drop down button and i select the View and pay bill",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnAt_t_StepDefinition.i_click_on_the_drop_down_button_and_i_select_the_View_and_pay_bill()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click account tab",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnAt_t_StepDefinition.i_click_account_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I  can validate the webpage",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnAt_t_StepDefinition.i_can_validate_the_webpage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});