$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/features/at_tHome.feature");
formatter.feature({
  "name": "Search Deals on at\u0026t search box",
  "description": "  As a customer i want to search Deals on at\u0026t homepage",
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
  "name": "I am at at\u0026t Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchOnAt_t_StepDefinition.i_am_at_at_t_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "drop Down button of Account Tab",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test2"
    }
  ]
});
formatter.step({
  "name": "I click on drop down button of Account Tab and I can select Manage Profile options",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnAt_t_StepDefinition.i_click_on_drop_down_button_of_Account_Tab_and_I_can_select_Manage_Profile_options()"
});
formatter.result({
  "error_message": "org.openqa.selenium.support.ui.UnexpectedTagNameException: Element should have been \"select\" but was \"div\"\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Tanjinas-MBP.home\u0027, ip: \u0027fe80:0:0:0:c2:918b:66c7:8e97%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.14.5\u0027, java.version: \u002711.0.6\u0027\nDriver info: driver.version: unknown\n\tat org.openqa.selenium.support.ui.Select.\u003cinit\u003e(Select.java:48)\n\tat common.WebAPI.selectOptionByVisibleText(WebAPI.java:395)\n\tat home.HomePage.userclickonDropButton(HomePage.java:37)\n\tat step_definitions.SearchOnAt_t_StepDefinition.i_click_on_drop_down_button_of_Account_Tab_and_I_can_select_Manage_Profile_options(SearchOnAt_t_StepDefinition.java:48)\n\tat ✽.I click on drop down button of Account Tab and I can select Manage Profile options(file:///Users/tanjinarahman/IdeaProjects/BDD_WebAutomationFramework_Team_2/at_t/src/main/java/features/at_tHome.feature:13)\n",
  "status": "failed"
});
formatter.step({
  "name": "I can see the results",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnAt_t_StepDefinition.i_can_see_the_results()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "status": "passed"
});
});