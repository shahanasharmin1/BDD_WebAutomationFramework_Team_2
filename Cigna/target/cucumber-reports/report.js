$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/features/CignaHome.feature");
formatter.feature({
  "name": "As a customer I want to explore cigna homepage",
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
  "name": "I am at cigna.com homePage",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchOnCigna_StepDefinition.i_am_at_cigna_com_homePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "scroll till the end of the cigna homepage",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test3"
    }
  ]
});
formatter.step({
  "name": "i scroll till the end byPixel",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnCigna_StepDefinition.i_scroll_till_the_end_byPixel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will see the the page are scrolled tillend",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnCigna_StepDefinition.i_will_see_the_the_page_are_scrolled_tillend()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});