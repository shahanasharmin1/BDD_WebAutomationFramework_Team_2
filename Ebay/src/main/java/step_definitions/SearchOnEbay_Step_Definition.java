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

public class SearchOnEbay_Step_Definition extends WebAPI {
    @Before
    public void openBrowser() throws IOException {
        setUp(false, "browserstack", "OS X", "10", "chrome", "84", "https://www.ebay.com/");
    }
    @After
    public void closeBrowser() {
        cleanUp();
    }

    static HomePage homePage; // Reference Variable/ object of HomePage

    public static void getInitElements() {
        homePage = PageFactory.initElements(driver, HomePage.class);
    }

    @Given("I am at Ebay Home Page")
    public void i_am_at_Ebay_Home_Page() {
getInitElements();
    }

    @Given("I Enter Maven Book in search input field")
    public void i_Enter_Maven_Book_in_search_input_field() {

    }

    @When("I Click search button")
    public void i_Click_search_button() {

    }

    @Then("I should see the desired Maven Book")
    public void i_should_see_the_desired_Maven_Book() {
        // Write code here that turns the phrase above into concrete actions
        throw new io.cucumber.java.PendingException();
    }


}
