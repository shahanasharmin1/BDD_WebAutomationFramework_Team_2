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
    static HomePage homePage;
    public static void getInitElements() {
        homePage = PageFactory.initElements(driver, HomePage.class);
    }

    @Given("I am at at&t Home Page")
    public void i_am_at_at_t_Home_Page() {
        getInitElements();
    }
    @Given("I enter at&t tv on the search box in homepage")
    public void i_enter_at_t_tv_on_the_search_box_in_homepage() {
        homePage.enterKeyWord();
    }
    @When("I click search button")
    public void i_click_search_button() {
        homePage.clickSearchButton();
    }
    @Then("I should see at&t tv")
    public void i_should_see_at_t_tv() {
        getInitElements();
    }
    @When("I click on drop down button of Account Tab and I can select Manage Profile options")
    public void i_click_on_drop_down_button_of_Account_Tab_and_I_can_select_Manage_Profile_options() {
        homePage.userclickonDropButton();
    }
    @Then("I can see the results")
    public void i_can_see_the_results() {
      getInitElements();
    }
    @When("I hover on menu Tab")
    public void i_hover_on_menu_Tab() {
        homePage.hoveringOnMenuElement();
    }
    @Then("I can see the expected results are validated")
    public void i_can_see_the_expected_results_are_validated() {
        homePage.uservalidationtextElement("Gift your grad iPhone 11 for half off");
    }
    @When("I scroll the web page")
    public void i_scroll_the_web_page() {
       homePage. userScrollTheWebPage();
    }
    @When("I scroll the web page till the end")
    public void i_scroll_the_web_page_till_the_end() {
        homePage.uesrScrollTillTheEnd();
    }
    @Given("I will go the next url of deals menu")
    public void i_will_go_the_next_url_of_deals_menu() {
       homePage.dealsUrl();
    }
    @When("I click on image")
    public void i_click_on_image() {
       homePage.UserclickOnImageelement();
    }
    @Then("I should see the results")
    public void i_should_see_the_results() {
        homePage.uservalidationtextElement("Gift your grad iPhone 11 for half off");
    }
    @Given("I will go the next url of  phones Tab")
    public void i_will_go_the_next_url_of_phones_Tab() {
       homePage.phonesUrl();
    }
    @When("I select item from the Tab")
    public void i_select_item_from_the_Tab() {
       homePage. userClickOndropButton();
    }
    @When("I click on Prepaid Tab")
    public void i_click_on_Prepaid_Tab() {
       homePage. clickOnPrepaidTab();
    }
    @Then("I should see the Tab are validated")
    public void i_should_see_the_Tab_are_validated() {
        homePage.uservalidationtextElement("Gift your grad iPhone 11 for half off");
    }
    @When("I Hover On sign In Tab")
    public void i_Hover_On_sign_In_Tab() {
        homePage.userHoverSignInTab();
    }
    @Then("I should see the validated results")
    public void i_should_see_the_validated_results() {
        homePage.uservalidationtextElement("Gift your grad iPhone 11 for half off");
    }
}








