package step_definitions;

import common.WebAPI;
import home.GEICOHomePage;
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
        setUp(false, "browserstack", "OS X", "Catalina", "chrome", "83", "https://www.geico.com/");
    }
    @After
    public void closeBrowser() {
        cleanUp();
    }
    static GEICOHomePage  geicohomePage;

    public static void getInitElements() {
        geicohomePage = PageFactory.initElements(driver, GEICOHomePage.class);
    }
    @Given("I'm in geico home page")
    public void i_m_in_geico_home_page() {
       getInitElements();
    }
    @Given("I click on lob in tab")
    public void i_click_on_lob_in_tab() {
       getInitElements();
       geicohomePage.clickLogIn();
    }
    @Given("I enter first  {string}")
    public void i_enter_first(String id) {
        getInitElements();
        geicohomePage.enterUserId(id);
    }
    @Given("I enter second {string}")
    public void i_enter_second(String pass) {
        getInitElements();
        geicohomePage.enterPassword(pass);
    }
    @When("I click on log in button")
    public void i_click_on_log_in_button() {
        getInitElements();
        geicohomePage.clickLogInButton();
    }
    @Then("I should see invalid userId and Password message")
    public void i_should_see_invalid_userId_and_Password_message() {
           getInitElements();
           geicohomePage.validateLogIn();
    }
    @Given("I click start here tab")
    public void i_click_start_here_tab() {
      getInitElements();
      geicohomePage.clickStartHere();
    }
    @Given("First I enter {string}")
    public void first_I_enter(String pNumber) {
      getInitElements();
      geicohomePage.enterPolicyNumber(pNumber);
    }
    @Given("Second step is enter {string}")
    public void second_step_is_enter(String Dbirth) {
       getInitElements();
       geicohomePage.enterDateOfBirth(Dbirth);
    }
    @Given("I finally I enter the {string}")
    public void i_finally_I_enter_the(String Zcode) {
      getInitElements();
      geicohomePage.enterZipCode(Zcode);
    }
    @When("I click continue Button")
    public void i_click_continue_Button() {
     getInitElements();
     geicohomePage.continueButton();
    }
    @Then("Invalid data message should appear")
    public void invalid_data_message_should_appear() {
        getInitElements();
        geicohomePage.validateClaim();
    }
}
