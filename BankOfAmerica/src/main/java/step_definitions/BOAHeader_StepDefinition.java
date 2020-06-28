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

public class BOAHeader_StepDefinition extends WebAPI {
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


    @Given("I am already at Bank Of America Home Page")
    public void i_am_already_at_Bank_Of_America_Home_Page() { }
    @When("I am already at BOA Home Page")
    public void i_am_already_at_BOA_Home_Page() { }
    @When("I click on Checking")
    public void i_click_on_Checking() {
        getInitElements();
       // homePage.getSearchChecking.clickByXpath("searchChecking");
        }
    @Then("I should see Checking page with Sign In")
    public void i_should_see_Checking_page_with_Sign_In() { }
    @When("I click on Savings")
    public void i_click_on_Savings() {
       // homePage.getSearchSavings.clickOnElement("Savings");
    }
    @Then("I Should see savings page with Sign In page")
    public void i_Should_see_savings_page_with_Sign_In_page() { }
    @When("I click on Home Loans")
    public void i_click_on_Home_Loans() {
       // homePage.getSearchHomeLoans.clickOnElement("Home Loans");
    }
    @Then("I Should see Mortgages page")
    public void i_Should_see_Mortgages_page() { }
    @When("I click on Auto Loans")
    public void i_click_on_Auto_Loans() {
        //homePage.getSearchAutoLoan.clickOnElement("Auto Loans");
    }
    @Then("I Should see Auto Loan Rates page")
    public void i_Should_see_Auto_Loan_Rates_page() { }
    @When("I click on Better Money Habits header")
    public void i_click_on_Better_Money_Habits_header() {
       // homePage.getSearchBmh.clickOnElement("Better Money Habits");
    }
    @When("I Should see Better Money Habits page")
    public void i_Should_see_Better_Money_Habits_page() { }
    @When("I should see Retirement")
    public void i_should_see_Retirement() { }
    @When("I click on Retirement")
    public void i_click_on_Retirement() {
        getInitElements(); }
    @Then("I can validate Retirement")
    public void i_can_validate_Retirement() {
        homePage.validateSearchProduct("Retirement"); }
}
