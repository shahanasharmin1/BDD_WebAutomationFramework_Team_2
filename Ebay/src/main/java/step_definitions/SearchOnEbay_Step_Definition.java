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
        setUp(false, "browserstack", "OS X", "10", "chrome", "83", "https://www.ebay.com/");
    }
    @After
    public void closeBrowser() {
        cleanUp();
    }

    static HomePage homePage; // Reference Variable/ object of HomePage

    public static void getInitElements() {
        homePage = PageFactory.initElements(driver, HomePage.class);
    }

    @Given("I am at ebay Home Page")
    public void i_am_at_ebay_Home_Page() {
        getInitElements();
    }

    @Given("I Enter photo frame in search input field")
    public void i_Enter_photo_frame_in_search_input_field() {
        getInitElements();
    }

    @When("I Click search button")
    public void i_Click_search_button() {
        getInitElements();
    }

    @Then("I should see photo frame")
    public void i_should_see_photo_frame() {
        getInitElements();
    }



}
