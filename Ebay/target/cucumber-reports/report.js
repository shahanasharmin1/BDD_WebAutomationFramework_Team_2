$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/features/EbayHome.feature");
formatter.feature({
  "name": "Search product on ebay .",
  "description": "  As user i am locating a book and adding to cart.",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Search product",
  "description": "",
  "keyword": "Scenario"
});
formatter.before({
  "error_message": "java.lang.IllegalStateException: The driver executable does not exist: /Users/abidur/Documents/BDD_WebAutomationFramework_Team_2/Ebay/BrowserDriver/mac/chromedriver\n\tat com.google.common.base.Preconditions.checkState(Preconditions.java:585)\n\tat org.openqa.selenium.remote.service.DriverService.checkExecutable(DriverService.java:146)\n\tat org.openqa.selenium.remote.service.DriverService.findExecutable(DriverService.java:141)\n\tat org.openqa.selenium.chrome.ChromeDriverService.access$000(ChromeDriverService.java:35)\n\tat org.openqa.selenium.chrome.ChromeDriverService$Builder.findDefaultExecutable(ChromeDriverService.java:159)\n\tat org.openqa.selenium.remote.service.DriverService$Builder.build(DriverService.java:355)\n\tat org.openqa.selenium.chrome.ChromeDriverService.createDefaultService(ChromeDriverService.java:94)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\n\tat common.WebAPI.getLocalDriver(WebAPI.java:70)\n\tat common.WebAPI.setUp(WebAPI.java:54)\n\tat step_definitions.SearchOnEbay_Step_Definition.openBrowser(SearchOnEbay_Step_Definition.java:17)\n",
  "status": "failed"
});
formatter.step({
  "name": "I am at Ebay Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchOnEbay_Step_Definition.i_am_at_Ebay_Home_Page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Enter Maven Book in search input field",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnEbay_Step_Definition.i_Enter_Maven_Book_in_search_input_field()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I Click search button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnEbay_Step_Definition.i_Click_search_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should see the desired Maven Book",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnEbay_Step_Definition.i_should_see_the_desired_Maven_Book()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "java.lang.NullPointerException\n\tat common.WebAPI.cleanUp(WebAPI.java:40)\n\tat step_definitions.SearchOnEbay_Step_Definition.closeBrowser(SearchOnEbay_Step_Definition.java:21)\n",
  "status": "failed"
});
});