package step_definitions;

import common.WebAPI;
import home.HomePage;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.support.PageFactory;

import java.io.IOException;

public class SearchOnDelta_Airline_StepDefinition extends WebAPI {
    @Before
    public void openBrowser() throws IOException, IOException {
        setUp(false, "browserstack", "OS X", "10", "chrome", "83", "https://www.delta.com/");
    }
    @After
    public void closeBrowser() { cleanUp(); }

    static HomePage homePage;
    public static void getInitElements() { homePage = PageFactory.initElements(driver, HomePage.class); }

    @Given("I am at delta.com homePage")
    public void i_am_at_delta_com_homePage() { getInitElements(); }
    @When("I click on logIn button")
    public void i_click_on_logIn_button() {
        homePage.userloginbutton(); }
    @Then("I can validate the text of homepage")
    public void i_can_validate_the_text_of_homepage() { getInitElements(); }
    @When("I scroll down the webPage byPixel")
    public void i_scroll_down_the_webPage_byPixel() {
        homePage.scrollDownTheWebPage(); }
    @Then("I will see the page is being scrolled down")
    public void i_will_see_the_page_is_being_scrolled_down() { getInitElements(); }
    @When("I do scroll till the end")
    public void i_do_scroll_till_the_end() {
        homePage.scrollDownTillEnd(); }
    @Then("I will see  the page is being scrolled tillToEnd")
    public void i_will_see_the_page_is_being_scrolled_tillToEnd() { }
    @When("I click in login tab")
    public void i_click_in_login_tab() {
        homePage.userlogin(); }
    @When("I enter username in the input box")
    public void i_enter_username_in_the_input_box() {
        // homePage.userinputboxelement();
    }
    @Then("I will see the Log In To Delta page")
    public void i_will_see_the_Log_In_To_Delta_page() {
        homePage.validateLogin("Log In"); }
    @When("I click on a login tab")
    public void i_click_on_a_login_tab() {
        homePage.validateLogin("Log In"); }
    @When("I enter password in the input box")
    public void i_enter_password_in_the_input_box() throws IOException {
        getInitElements();
        homePage.takeScreenShot(); }
    @When("I select the checkbox")
    public void i_select_the_checkbox() { }
    @Given("I hover on  My SkyMiles")
    public void i_hover_on_My_SkyMiles() {
        homePage.userhoverSkyMileswebelement(); }
    @Given("I hover on First Class")
    public void i_hover_on_First_Class() {
        getInitElements();
        //homePage.userhoverFirstClassWebelement();
        }
    @Given("I click on the drop down button and i select the Multi-City option")
    public void i_click_on_the_drop_down_button_and_i_select_the_Multi_City_option() {
       // homePage.userdropdownwebelement();
        }
    @Then("I do validate the login page")
    public void i_do_validate_the_login_page() {
        homePage.validateLogin("Log In"); }
    @Given("I click on the drop down button and i select the One Way option")
    public void i_click_on_the_drop_down_button_and_i_select_the_One_Way_option() {
        getInitElements();
       // homePage.userdropdownwebelement();
        }
    @When("I check on Refundable Fares Tab")
    public void i_check_on_Refundable_Fares_Tab() {
        homePage.userrefundableFareswebelement(); }
    @Then("I should see the Tab are checked and validated")
    public void i_should_see_the_Tab_are_checked_and_validated() {
        homePage.uservalidatehomepagewebelement("SEARCH OPTIONS"); }
    @When("I do check on Shop with Miles Tab")
    public void i_do_check_on_Shop_with_Miles_Tab() { }
    @Then("I should see the Tab is being  checked and validated")
    public void i_should_see_the_Tab_is_being_checked_and_validated() {
        //homePage.validateText("validateText");
        }
    @When("I check on My dates are Flexible tab")
    public void i_check_on_My_dates_are_Flexible_tab() {
        homePage.usercheckonmydatesareflexiblewebelement(); }
    @Then("I am able to see the results is being  checked and validated")
    public void i_am_able_to_see_the_results_is_being_checked_and_validated() {
        homePage.uservalidatehomepagewebelement("SEARCH OPTIONS"); }
    @When("I search Flight status in search box")
    public void i_search_Flight_status_in_search_box() {
        getInitElements();
       // homePage.doSearchBox();
        }
    @When("I click on search Button")
    public void i_click_on_search_Button() {
        getInitElements();
        //homePage.doSearchButton();
        }
    @Then("I should see search results Flight status page")
    public void i_should_see_search_results_Flight_status_page() { }
    @When("I search Refund status in search box")
    public void i_search_Refund_status_in_search_box() {
        getInitElements();
       // homePage.doSearchBox();
        }
    @Then("I should see check Refund status page")
    public void i_should_see_check_Refund_status_page(){ }

}
