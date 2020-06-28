package step_definitions;


import common.WebAPI;
import home.HomePage;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.support.PageFactory;

public class SearchOnBoa_StepDefinition extends WebAPI {
    @Before
    public void openBrowser() throws Exception {
        setUp(false, "browserstack", "OS X", "10", "chrome", "83", "https://www.bankofamerica.com/");
    }
    @After
    public void closeBrowser() {
        cleanUp();
    }
    static HomePage hmp;
    public static void getInitElements() {
        hmp = PageFactory.initElements(driver, HomePage.class);
    }

    @Given("I go on bankofamerica.com")
    public void i_go_on_bankofamerica_com() {
        getInitElements();
    }
    @When("i click on the log In Button")
    public void i_click_on_the_log_In_Button() {
        getInitElements();
        hmp.clickLogInButton();
    }
    @Then("i am able to see  log in button clicked")
    public void i_am_able_to_see_log_in_button_clicked() {
        getInitElements();
        hmp.userbankOfAmericaText();
    }
    @Given("I enter the Online Id in the input box")
    public void i_enter_the_Online_Id_in_the_input_box() {
        hmp.enterKeyword("Halena");
    }
    @Given("I enter the Passcode in the input box")
    public void i_enter_the_Passcode_in_the_input_box() {
        hmp.enterPassword("12345");
    }
    @When("I check on the saveOnline Id")
    public void i_check_on_the_saveOnline_Id() {
        hmp.checkOnsaveOnlineIdBox();
    }
    @When("I click on the signIn button")
    public void i_click_on_the_signIn_button() {
        hmp.userSignin();
    }
    @Then("I am able to see of a signin button are validated")
    public void i_am_able_to_see_of_a_signin_button_are_validated() {
        hmp.uservalidationSigninelement("Sign In");
    }
    @Given("I enter  {string} in the input box")
    public void i_enter_in_the_input_box(String string) {
        hmp.enterKeyword(string);
    }
    @Given("I enter {string} of the input box")
    public void i_enter_of_the_input_box(String string) {
        hmp.enterPassword(string);
    }
    @Then("I am able to see it invalidvalidation")
    public void i_am_able_to_see_it_invalidvalidation() {
        hmp.userinvalidValidationelement("Forgot ID/Passcode");
    }
    @Given("I enter Account Number")
    public void i_enter_Account_Number() {
        hmp.useracNumberelement();
    }
    @Then("I am able to validate the page")
    public void i_am_able_to_validate_the_page() {
        hmp.uservalidatetextelement("Forgot Online ID & Passcode");
    }
    @Given("I enter SSN Number")
    public void i_enter_SSN_Number() {
        hmp.userSSNnumberelement();
    }
    @When("i scroll down the webPage byPixel")
    public void i_scroll_down_the_webPage_byPixel() {
        hmp.scrollDown();
    }
    @Then("I will see the the page are scrolled down")
    public void i_will_see_the_the_page_are_scrolled_down() {
    }
    @When("i scroll till the end")
    public void i_scroll_till_the_end() {
        hmp.scrollDowntillofthepage();
    }
    @Then("I will see the the page are scrolled tillend")
    public void i_will_see_the_the_page_are_scrolled_tillend() {
    }
    @Given("user is at Real Estate Center page")
    public void userIsAtRealEstateCenterPage() {
        getInitElements();
        hmp.navigateToRealEstateCenterPage();
    }
    @And("user inputs {string} in search input")
    public void userInputs_InSearchInput(String searchTerm) {
        getInitElements();
        hmp.inputSearchTermLocationInputField(searchTerm);
    }
    @And("user clicks on search result corresponding to {string} in dropdown results")
    public void userClicksOnSearchResultCorrespondingTo_InDropdownResults(String searchTerm) {
        getInitElements();
        hmp.clickSearchResultLocationInputFieldDropdown();
    }
    @And("user clicks Continue in modal container to be navigated to partner site")
    public void userClicksContinueInModalContainerToBeNavigatedToPartnerSite() {
        getInitElements();
        hmp.clickContinueModalContainer();
    }
    @And("user should be navigated to partner site with page title {string}")
    public void userShouldBeNavigatedToPartnerSiteWithPageTitle_(String expectedPageTitle) {
        getInitElements();
        String actualPageTitle = hmp.getPageTitle(expectedPageTitle);
        Assert.assertEquals(actualPageTitle, expectedPageTitle, "PAGE TITLE DOES NOT MATCH");
    }
    @And("user should see {string} in filter tag next to search bar")
    public void userShouldSee_InFilterTagNextToSearchBar(String searchTerm) {
        getInitElements();
        String actualFilterTagText = hmp.getTextPartnerSiteFilterTag();
        Assert.assertEquals(actualFilterTagText, searchTerm, "FILTER TAG TEXT ON PARTNER SITE DOES NOT MATCH");
    }
    @And("user clicks Home Value button in Home Search interface")
    public void userClicksHomeValueButtonInHomeSearchInterface() {
        getInitElements();
        hmp.clickButtonHomeValue();
    }
    @And("user switches to newly opened tab")
    public void userSwitchesToNewlyOpenedTab() {
        getInitElements();
        hmp.switchTabs();
    }
    @And("user should see {string} to the left of property picture")
    public void userShouldSeeToTheLeftOfPropertyPicture(String expectedAddress) {
        getInitElements();
        String actualAddress = hmp.getTextHomeAddressHomeValueSearchResultPage();
        Assert.assertEquals(actualAddress, expectedAddress.toUpperCase(), "ADDRESS ON SEARCH RESULT PAGE DOES NOT MATCH");
    }
}








