$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/features/GeicoHome.feature");
formatter.feature({
  "name": "As a customer I want to explore on a geico homePage",
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
  "name": "I am at geico.com homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchOnGeico_Step_Definition.i_am_at_geico_com_homepage()"
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
      "name": "@Test4"
    }
  ]
});
formatter.step({
  "name": "i scroll till the end",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnGeico_Step_Definition.i_scroll_till_the_end()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will see the the page are scrolled tillend",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnGeico_Step_Definition.i_will_see_the_the_page_are_scrolled_tillend()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});