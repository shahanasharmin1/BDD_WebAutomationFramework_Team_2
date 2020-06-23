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
        homePage. enterKeyWord();
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

    }










}
