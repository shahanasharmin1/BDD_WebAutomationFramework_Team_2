$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/features/HBOHome.feature");
formatter.feature({
  "name": "Search Shows on HBO",
  "description": "  As a user i want to search Game of Thrones in HBO search bar.",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Search Game of Thrones in HBO",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am at HBO HomePage",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchOnGeico_Step_Definition.i_am_at_HBO_HomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on search Field",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnGeico_Step_Definition.i_click_on_search_Field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Search Game Of Thrones",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnGeico_Step_Definition.i_Search_Game_Of_Thrones()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should be able to see results for Game of Thrones",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnGeico_Step_Definition.i_should_be_able_to_see_results_for_Game_of_Thrones()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});