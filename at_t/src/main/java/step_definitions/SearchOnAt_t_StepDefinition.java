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

    @Given("I am at at&t Home Page")
    public void i_am_at_at_t_Home_Page() {
        getInitElements();
    }

    @Given("I enter deals on the search box in homepage")
    public void i_enter_deals_on_the_search_box_in_homepage() throws InterruptedException {
        getInitElements();
        //homePage.enterKeyWord();

    }
    @When("I click search button")
    public void i_click_search_button() {
        getInitElements();
        //homePage.clickSearchButton();
    }
    @Then("I should see deal")
    public void i_should_see_deal() {
        getInitElements();
        //homePage.validateSearchProduct("Results for AT&T Deals - AT&T Search");
        //homePage.validateSearchProduct("AT&T Deals");
    }
}
