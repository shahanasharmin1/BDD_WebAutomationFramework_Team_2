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

public class HomePageStepDefinition extends WebAPI {

    @Before
    public void openBrowser() throws IOException {
        setUp(false, "browserstack", "windows", "10", "chrome", "83", "https://www.att.com/");
    }
    @After
    public void closeBrowser() {
        cleanUp();
    }
    static HomePage homePage; // Reference Variable/ object of HomePage
    public static void getInitElements() {
        homePage = PageFactory.initElements(driver, HomePage.class);
    }

    @When("I use the scroll down")
    public void i_use_the_scroll_down() {
        getInitElements();
        homePage.Scrolldown();
    }
    @Then("I should see scroll working")
    public void i_should_see_scroll_working() {
        getInitElements();
    }
    @When("I click search button")
    public void i_click_search_button() {
        getInitElements();
        // homePage.clickSearchButton();
    }
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

}
