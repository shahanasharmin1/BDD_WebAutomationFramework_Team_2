$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/features/at_tHome.feature");
formatter.feature({
  "name": "Search Deals on at\u0026t search box",
  "description": "  As a customer i want to search Deals on at\u0026t homepage",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Search deals",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
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
formatter.after({
  "status": "passed"
});
});