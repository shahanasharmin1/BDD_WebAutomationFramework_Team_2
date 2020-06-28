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

public class SearchOnAt_t_StepDefinition extends WebAPI {
    @Before
    public void openBrowser() throws IOException {
        setUp(false, "browserstack", "OS X", "10", "chrome", "83", "https://www.att.com/");
    }
    @After
    public void closeBrowser() {
        cleanUp();
    }
    static HomePage homePage; // Reference Variable/ object of HomePage
    public static void getInitElements() {
        homePage = PageFactory.initElements(driver, HomePage.class);
    }

    @Given("I am at at&t Home Page")
    public void i_am_at_at_t_Home_Page() {
        getInitElements();
    }
    @Given("I enter deals on the search box in homepage")
    public void i_enter_deals_on_the_search_box_in_homepage() throws InterruptedException {
        getInitElements();
       // homePage.enterKeyWord();
    }
    @When("I click search button")
    public void i_click_search_button() {
        getInitElements();
       // homePage.clickSearchButton();
    }
    @Then("I should see deals")
    public void i_should_see_deals() {
        getInitElements();
    //  homePage.validateSearchProduct("\"AT&T Deals\"");
   }
    @When("I scroll down the webPage byPixel")
    public void i_scroll_down_the_webPage_byPixel() {
        homePage.scrollDownTheWebPage(); }
    @Then("I will see the webPage is scrolled down")
    public void i_will_see_the_webPage_is_scrolled_down() {
        getInitElements(); }
    @When("I scroll down till the end")
    public void i_scroll_down_till_the_end() {
        homePage.scrollDownTillEnd(); }
    @Then("I will see the page is  scrolled down  till to the end")
    public void i_will_see_the_page_is_scrolled_down_till_to_the_end() { }
    @When("I am in search box input field")
    public void i_am_in_search_box_input_field() {
       // homePage.inputSearchField();
        }
    @When("I am looking for Upgrade a device in search box input field")
    public void i_am_looking_for_Upgrade_a_device_in_search_box_input_field() { }
    @When("I should see \"Upgrade a device results")
    public void i_should_see_Upgrade_a_device_results() { }
    @Then("I am able to do validate")
    public void i_am_able_to_do_validate() {
       // homePage.validateSearchProduct("AT&T PREPAID");
    }
    @When("I am looking for AT&T PREPAID in search box input field")
    public void i_am_looking_for_AT_T_PREPAID_in_search_box_input_field() {
        getInitElements();
        homePage.inputSearchField();
    }
    @When("I should see {string} results")
    public void i_should_see_results(String string) { }
    @When("I am looking for TV & internet bundles in search box input field")
    public void i_am_looking_for_TV_internet_bundles_in_search_box_input_field() {
        getInitElements();
        homePage.inputSearchField();
    }
    @When("I am looking for AT&T deals in search box input field")
    public void i_am_looking_for_AT_T_deals_in_search_box_input_field() { }
    @When("I click on the drop down button and i select View & pay bill")
    public void i_click_on_the_drop_down_button_and_i_select_View_pay_bill() {
     // homePage.userdropdownwebelement();
    }
    @Then("I should see Sign in page")
    public void i_should_see_Sign_in_page() {
        getInitElements();
        //homePage.setDoValidateText("Sign in");
    }

}
