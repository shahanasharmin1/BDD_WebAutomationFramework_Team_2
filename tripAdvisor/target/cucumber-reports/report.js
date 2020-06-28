$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/features/tripAdvisorHome.feature");
formatter.feature({
  "name": "As a customer I want to explore tripAdvisor.com",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "search hotels",
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
  "name": "I am at tripAdvisor.com now",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_am_at_tripAdvisor_com_now()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on hotels tab",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_click_on_hotels_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I search hotels in the search box",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_search_hotels_in_the_search_box()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see the hotels",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_should_see_the_hotels()"
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
      "name": "@Test2"
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
      "name": "@Test2"
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
      "name": "@Test2"
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
      "name": "@Test2"
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
      "name": "@Test2"
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
      "name": "@Test2"
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
      "name": "@Test2"
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
formatter.scenario({
  "name": "Search Hotels in tripAdvisor",
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
  "name": "as a customer i want to click on trips",
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
  "name": "I click on trips",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_click_on_trips()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "i am able to see all the trip information",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_am_able_to_see_all_the_trip_information()"
});
formatter.result({
  "status": "passed"
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
formatter.scenario({
  "name": "click on logo",
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
  "name": "I click on logo",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_click_on_logo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I can validate the homepage of trip Advisor",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_can_validate_the_homepage_of_trip_Advisor()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "scroll Down the trip Advisor homepage",
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
  "name": "i scroll down the webPage byPixel",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_scroll_down_the_webPage_byPixel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will see the the page are scrolled down",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_will_see_the_the_page_are_scrolled_down()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "get an image",
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
  "name": "I click on image",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_click_on_image()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to get it",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_am_able_to_get_it()"
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
      "name": "@Test9"
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
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_scroll_till_the_end()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will see the the page are scrolled tillend",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_will_see_the_the_page_are_scrolled_tillend()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "find vacation rentals",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test10"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I click on find vacation rentals options",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_click_on_find_vacation_rentals_options()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to vsalidate that page",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_am_able_to_vsalidate_that_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenario({
  "name": "hover on search box",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test11"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I click on search button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_click_on_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "It is selected to search whatever i want to search",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.it_is_selected_to_search_whatever_i_want_to_search()"
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
      "name": "@Test12"
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
  "status": "passed"
});
formatter.step({
  "name": "I should see new page with signin with email",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_should_see_new_page_with_signin_with_email()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I pass \u003c email \u003e and \u003c password \u003e in search field",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOntripAdvisor_Step_definition.i_pass_email_and_password_in_search_field()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#regSignIn\\.email\"}\n  (Session info: chrome\u003d83.0.4103.116)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027DESKTOP-QGBDCVE\u0027, ip: \u0027192.168.1.112\u0027, os.name: \u0027Windows 10\u0027, os.arch: \u0027amd64\u0027, os.version: \u002710.0\u0027, java.version: \u002711.0.6\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 83.0.4103.116, chrome: {chromedriverVersion: 83.0.4103.39 (ccbf011cb2d2b..., userDataDir: C:\\Users\\NASRI_~1\\AppData\\L...}, goog:chromeOptions: {debuggerAddress: localhost:53296}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: WINDOWS, platformName: WINDOWS, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: b293a92dd115817bb4458a2b8a6a15e8\n*** Element info: {Using\u003did, value\u003dregSignIn.email}\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\r\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\r\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\r\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\r\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\r\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\r\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementById(RemoteWebDriver.java:372)\r\n\tat org.openqa.selenium.By$ById.findElement(By.java:188)\r\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\r\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\r\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\r\n\tat com.sun.proxy.$Proxy19.sendKeys(Unknown Source)\r\n\tat home.HomePage.setSearchEmailSearchBox(HomePage.java:135)\r\n\tat step_definitions.SearchOntripAdvisor_Step_definition.i_pass_email_and_password_in_search_field(SearchOntripAdvisor_Step_definition.java:231)\r\n\tat ✽.I pass \u003c email \u003e and \u003c password \u003e in search field(file:///C:/Users/nasri_9gklr9r/IdeaProjects/BDD_WebAutomationFramework_Team_2/tripAdvisor/src/main/java/features/tripAdvisorHome.feature:79)\r\n",
  "status": "failed"
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
});