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

public class SearchOnBoa_StepDefinition extends WebAPI {
    @Before
    public void openBrowser() throws IOException {
        setUp(false, "browserstack", "OS X", "10", "chrome", "83", "https://www.bankofamerica.com/");
    }
    @After
    public void closeBrowser() {
        cleanUp();
    }

    static HomePage homePage; // Reference Variable/ object of HomePage

    public static void getInitElements() {
        homePage = PageFactory.initElements(driver, HomePage.class);
    }
    @Given("I am at Bank Of America homePage")
    public void i_am_at_Bank_Of_America_homePage() {
        getInitElements();
    }
    @When("I am at BOA homePage")
    public void i_am_at_BOA_homePage() {
        getInitElements();
    }
    @When("I click on Credit cards button in homepage")
    public void i_click_on_Credit_cards_button_in_homepage() {
        getInitElements();
    }
    @When("I click in Credit cards button")
    public void i_click_in_Credit_cards_button() {
        getInitElements();
    }
    @Then("I should see Cards For Students")
    public void i_should_see_Cards_For_Students() {
        getInitElements();
       // homePage.setFindSearchCardsForStudents();
    }
    @When("I should see {string} in Credit card page")
    public void i_should_see_in_Credit_card_page(String string) {
        getInitElements();
    }
    @Then("I should see my \"\"Cards For Students {string}")
    public void i_should_see_my_Cards_For_Students(String string) {
        getInitElements();
    }
    @Then("I should see my \"\"Lower Interest Rates Cards\"\"")
    public void i_should_see_my_Lower_Interest_Rates_Cards() {
        getInitElements();
       // homePage.setFindSearchLowerInterestRatesCards();
    }
    @Then("I should see my \"\"Points Rewards Cards {string}")
    public void i_should_see_my_Points_Rewards_Cards(String string) {
        getInitElements();
       // homePage.getSearchPointsRewardsCards();
    }
    @Then("I should see my \"\"Cash Rewards Credit Cards\"\"")
    public void i_should_see_my_Cash_Rewards_Credit_Cards() {
        getInitElements();
       // homePage.setFindSearchCashRewardsCreditCards();
    }
    @Then("I should see my \"\"Travel And Airlines Rewards Cards {string}")
    public void i_should_see_my_Travel_And_Airlines_Rewards_Cards(String string) {
        getInitElements();
       // homePage.setFindSearchTravelAndAirlinesRewardsCards();
    }
}
