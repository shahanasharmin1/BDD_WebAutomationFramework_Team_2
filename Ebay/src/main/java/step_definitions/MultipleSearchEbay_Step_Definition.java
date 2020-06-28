package step_definitions;

import common.WebAPI;
import home.HomePage;
import home.MultiElementHomePage;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.support.PageFactory;

import java.io.IOException;

public class MultipleSearchEbay_Step_Definition extends WebAPI {
    @Before
    public void openBrowser() throws IOException {
        setUp(false, "browserstack", "OS X", "10", "chrome", "83", "https://www.ebay.com/");
    }
    @After
    public void closeBrowser() {
        cleanUp();
    }
    static HomePage homePage;
    static MultiElementHomePage multiElementHomePage;

    public static void getInitElements() {
        multiElementHomePage = PageFactory.initElements(driver, MultiElementHomePage.class);
        homePage = PageFactory.initElements(driver, HomePage.class);
    }

    @When("I click search button")
    public void i_click_search_button() {
        getInitElements();
        //homePage.searchButton.click();
    }

    @Then("I should see \"\"Watch\"\"")
    public void i_should_see_Watch() {
        getInitElements();
        // multiElementHomePage.validateSearch("Watch");
    }

    @Then("I should see \"\"playstation {int}\"\"")
    public void i_should_see_playstation(Integer int1) {
        getInitElements();
        // multiElementHomePage.enterKeyWord("String");
    }

    @Then("I should see \"\"playstation {int} pro\"\"")
    public void i_should_see_playstation_pro(Integer int1) {
        getInitElements();
        //multiElementHomePage.validateSearch();
    }



































}