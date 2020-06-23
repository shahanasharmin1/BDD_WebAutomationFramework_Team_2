package step_definitions;

import common.WebAPI;
import home.HomePage;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Test;
import org.openqa.selenium.support.PageFactory;
import java.io.IOException;

public class SearchOntripAdvisor_Step_definition extends WebAPI {

    @Before
    public void openBrowser() throws IOException {
        setUp(false, "browserstack", "OS X", "10", "chrome", "83", "https://www.tripadvisor.com/");
    }
    @After
    public void closeBrowser() {
        cleanUp();
    }
    static HomePage hmp;
    public static void getInitElements() {
        hmp = PageFactory.initElements(driver, HomePage.class);
    }

    @Given("I am at tripAdvisor.com now")
    public void i_am_at_tripAdvisor_com_now() {
     getInitElements();
    }

    @Given("I click on hotels tab")
    public void i_click_on_hotels_tab() {
        getInitElements();
        hmp.clickonHoteltab();
    }
    @When("I search hotels in the search box")
    public void i_search_hotels_in_the_search_box() {
        hmp.enterKeyword();
    }
    @Then("I should see the hotels")
        public void i_should_see_the_hotels () {
        hmp.validatingsearchBox();
        }
    }
