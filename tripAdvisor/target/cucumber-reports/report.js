$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/features/tripAdvisorHome.feature");
formatter.feature({
  "name": "Search Hotels in tripAdvisor",
  "description": "  As a customer i want to search hotels in California",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Search Hotels in tripAdvisor",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I am at tripAdvisor Home Page",
  "keyword": "Given "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I click on hotels button in homepage",
  "keyword": "And "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I click hotels button",
  "keyword": "When "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.step({
  "name": "I should be able to search hotels in California",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
});