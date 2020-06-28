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

public class FooterStep_Definitions extends WebAPI {

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


    @Given("I'm in the home page")
    public void i_m_in_the_home_page() {
       getInitElements();
       homePage.maximize();
    }
    @Given("I click on  Help element")
    public void i_click_on_Help_element() {
        getInitElements();
        homePage.selectHelp();
    }
    @Given("I select suspicious email")
    public void i_select_suspicious_email() {
        getInitElements();
        homePage.clickSuspiciousEmail();
    }
    @When("I click on what to do")
    public void i_click_on_what_to_do() {
        getInitElements();
        homePage.clickWhatToDo();
    }
    @Then("I can see the response")
    public void i_can_see_the_response() {
        getInitElements();
        homePage.validateSearch4();
    }
    @Given("I click on life service")
    public void i_click_on_life_service() {
        getInitElements();
        homePage.clickLifeServices();
    }
        @When("I click on explore on Elder financial care")
    public void i_click_on_explore_on_Elder_financial_care() {
        getInitElements();
        homePage.clickElderServices();
    }
    @Then("I can see caring for elder page")
    public void i_can_see_caring_for_elder_page() {
        getInitElements();
        homePage.validateSearch5();
    }
    @Given("I click on security and privacy")
    public void i_click_on_security_and_privacy() {
        getInitElements();
        homePage.clickSecurityAndPrivacy();
    }
    @Given("I click on complete details")
    public void i_click_on_complete_details() {
        getInitElements();
        homePage.clickCompleteDetails();
    }
    @When("I select how we guarantee your protection")
    public void i_select_how_we_guarantee_your_protection() {
        getInitElements();
        homePage.selectHowToProtectYou();
    }
    @Then("I can read all the policies")
    public void i_can_read_all_the_policies() {
        getInitElements();
        homePage.validateSearch6();
    }






























}
