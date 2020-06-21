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

public class SearchOnGeico_Step_Definition extends WebAPI {

    @Before
    public void openBrowser() throws IOException {
        setUp(false, "browserstack", "windows", "10", "chrome", "83", "https://www.hbo.com/");
    }
    @After
    public void closeBrowser() {
        cleanUp();
    }
    static HomePage homePage; // Reference Variable/ object of HomePage
    public static void getInitElements() {
        homePage = PageFactory.initElements(driver, HomePage.class);
    }
    @Given("I am at HBO HomePage")
    public void i_am_at_HBO_HomePage() {
         getInitElements();
    }
    @Given("I click on search Field")
    public void i_click_on_search_Field() throws InterruptedException {
       getInitElements();
       homePage.searchbar();
    }
    @When("I Search Game Of Thrones")
    public void i_Search_Game_Of_Thrones() {
        getInitElements();
        homePage.searchshows();
    }
    @Then("I should be able to see results for Game of Thrones")
    public void i_should_be_able_to_see_results_for_Game_of_Thrones() {

    }
}
