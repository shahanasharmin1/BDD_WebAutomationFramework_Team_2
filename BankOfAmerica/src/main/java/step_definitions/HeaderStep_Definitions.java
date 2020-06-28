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

public class HeaderStep_Definitions extends WebAPI {

    @Before
    public void openBrowser() throws IOException {
        setUp(false, "browserstack", "OS X", "Catalina", "chrome", "83", "https://www.bankofamerica.com/");
    }
    @After
    public void closeBrowser() {
        cleanUp();
    }
    static HomePage homePage;

    public static void getInitElements() {
        homePage = PageFactory.initElements(driver, HomePage.class);
    }


    @Given("I'm already in home page")
    public void i_m_already_in_home_page() {
        getInitElements();
        homePage.maximize();
    }
    @Given("I click on Businesses Institution")
    public void i_click_on_Businesses_Institution() {
    getInitElements();
    homePage.clickBusinessesInstitution();
    }
    @When("I click in see more resources")
    public void i_click_in_see_more_resources() {
    getInitElements();
    homePage.clickResources();
    }
    @Then("All the information tab are displayed")
    public void All_the_information_tab_are_displayed() {
     getInitElements();
     homePage.validateBusinessInstitutionOption();
    }
    @Given("I click on Home Loan")
    public void i_click_on_Home_Loan() {
        getInitElements();
        homePage.clickHomeLoan();
    }
    @Given("I select Home equity option")
    public void i_select_Home_equity_option() {
        getInitElements();
        homePage.clickHomeEquity();
    }
    @Given("I enter Colorado in the state box")
    public void i_enter_Colorado_in_the_state_box() {
        getInitElements();
       homePage.enterStateName();
    }
    @When( "I click state button")
    public void i_click_state_button(){
        getInitElements();
        homePage.clickSubmit();
    }
    @Then("I should see the rate")
    public void i_should_see_the_rate() {
        getInitElements();
        homePage.validateSearch();
    }
    @Given("I enter travel notification in search box")
    public void i_enter_travel_notification_in_search_box() {
        getInitElements();
        homePage.enterKeyWord2();
    }
    @When("I click on foreign currency")
    public void i_click_on_foreign_currency() {
        getInitElements();
        homePage.selectForeignCurrency();
    }
    @Then("I should see foreign currency ordering page")
    public void i_should_see_foreign_currency_ordering_page() {
        getInitElements();
        homePage.validateSearch1();
    }
    @Given("I click on Better Money Habits")
    public void i_click_on_Better_Money_Habits() {
        getInitElements();
        homePage.moneyHabits();
    }
    @When("I select retirement")
    public void i_select_retirement() {
        getInitElements();
        homePage.clickRetirement();
    }
    @Then("I should see all the retirement information")
    public void i_should_see_all_the_retirement_information() {
        getInitElements();
        homePage.validateSearch2();
    }
    @When("I use mouse hovering to select taxes and income")
    public void i_use_mouse_hovering_to_select_taxes_and_income() {
        getInitElements();
        homePage.mouseHover();
    }
    @Then("information tab should be displayed")
    public void information_tab_should_be_displayed() {
        getInitElements();
        homePage.validateSearch3();
    }
}






























