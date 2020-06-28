$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/features/HBOHome.feature");
formatter.feature({
  "name": "As a customer I want to explore HBO",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "SignIn button",
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
  "name": "I click on logIn button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_click_on_logIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to see signIn options",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_am_able_to_see_signIn_options()"
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
  "name": "I am at HBO homepage",
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
  "name": "I am able to validate the item",
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
        "SERIES",
        "SERIES"
      ]
    },
    {
      "cells": [
        "MOVIES",
        "MOVIES"
      ]
    },
    {
      "cells": [
        "SPECIALS",
        "SPECIALS"
      ]
    },
    {
      "cells": [
        "SPORTS",
        "SPORTS"
      ]
    },
    {
      "cells": [
        "KIDS",
        "KIDS"
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
  "name": "I am at HBO homepage",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_am_at_HBO_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I need to clickSERIESin header part",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_need_to_clickSERIESin_header_part()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should seeSERIESresults",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_should_seeSERIESresults()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to validate the item",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_am_able_to_validate_the_item()"
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
  "name": "I am at HBO homepage",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_am_at_HBO_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I need to clickMOVIESin header part",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_need_to_clickMOVIESin_header_part()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should seeMOVIESresults",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_should_seeMOVIESresults()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to validate the item",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_am_able_to_validate_the_item()"
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
  "name": "I am at HBO homepage",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_am_at_HBO_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I need to clickSPECIALSin header part",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_need_to_clickSPECIALSin_header_part()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should seeSPECIALSresults",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_should_seeSPECIALSresults()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to validate the item",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_am_able_to_validate_the_item()"
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
  "name": "I am at HBO homepage",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_am_at_HBO_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I need to clickSPORTSin header part",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_need_to_clickSPORTSin_header_part()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should seeSPORTSresults",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_should_seeSPORTSresults()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to validate the item",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_am_able_to_validate_the_item()"
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
  "name": "I am at HBO homepage",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_am_at_HBO_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I need to clickKIDSin header part",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_need_to_clickKIDSin_header_part()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should seeKIDSresults",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_should_seeKIDSresults()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to validate the item",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_am_able_to_validate_the_item()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "scroll Down the HBO homepage",
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
  "name": "i scroll down the webPage byPixel",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_scroll_down_the_webPage_byPixel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will see the the page are scrolled down",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_will_see_the_the_page_are_scrolled_down()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "scroll till the end of the HBO homepage",
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
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_scroll_till_the_end()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will see the the page are scrolled tillend",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_will_see_the_the_page_are_scrolled_tillend()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "click on Logo",
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
  "name": "I click on HBO Logo",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_click_on_HBO_Logo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will be able to get it",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_will_be_able_to_get_it()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "hover on search button",
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
  "name": "I click search button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will the all the items in the search icon",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_will_the_all_the_items_in_the_search_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "click on Drop Down Button of All Series",
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
  "name": "I click on the Drop down button of All Series",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_click_on_the_Drop_down_button_of_All_Series()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get all the options of it",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_should_get_all_the_options_of_it()"
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
      "name": "@Test8"
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
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_click_on_Image()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to validate the HBO Homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_am_able_to_validate_the_HBO_Homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "As a customer i want to find out free Episodes",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test9"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I click on it",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_click_on_it()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I can see see all Episodes of HBO",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_can_see_see_all_Episodes_of_HBO()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});