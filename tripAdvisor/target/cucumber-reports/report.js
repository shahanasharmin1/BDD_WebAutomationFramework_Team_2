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
});