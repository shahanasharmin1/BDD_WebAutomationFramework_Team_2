$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/features/Delta_AirlineHome.feature");
formatter.feature({
  "name": "As a customer I want to explore Delta.com homepage",
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
  "name": "I am at delta.com homePage",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchOnDelta_Airline_StepDefinition.i_am_at_delta_com_homePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "HoverOn SkyMiles Tab",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test7"
    }
  ]
});
formatter.step({
  "name": "I hover on SkyMiles",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnDelta_Airline_StepDefinition.i_hover_on_SkyMiles()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on a login tab",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnDelta_Airline_StepDefinition.i_click_on_a_login_tab()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will see the log in page",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnDelta_Airline_StepDefinition.i_will_see_the_log_in_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});