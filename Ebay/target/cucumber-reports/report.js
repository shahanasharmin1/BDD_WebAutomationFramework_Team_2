$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/features/EbayHome.feature");
formatter.feature({
  "name": "Explore ebay HomePage",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "click on ebay homePage image",
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
  "name": "I am on ebay.com",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchOnEbay_Step_Definition.i_am_on_ebay_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on image of ebayHomePage",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnEbay_Step_Definition.i_click_on_image_of_ebayHomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see  variety section",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnEbay_Step_Definition.i_should_see_variety_section()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});