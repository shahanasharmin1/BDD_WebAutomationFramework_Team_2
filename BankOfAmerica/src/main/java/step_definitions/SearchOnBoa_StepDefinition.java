package step_definitions;


import common.WebAPI;
import home.HomePage;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.support.PageFactory;

public class SearchOnBoa_StepDefinition extends WebAPI {
    @Before
    public void openBrowser() throws Exception {
        setUp(false, "browserstack", "OS X", "10", "chrome", "83", "https://www.bankofamerica.com/");
    }
    @After
    public void closeBrowser() {
        cleanUp();
    }
    static HomePage hmp;
    public static void getInitElements() {
        hmp = PageFactory.initElements(driver, HomePage.class);
    }
    @Given("I go on bankofamerica.com")
    public void i_go_on_bankofamerica_com() {
        getInitElements();
    }
    @When("i click on the log In Button")
    public void i_click_on_the_log_In_Button() {
        getInitElements();
        hmp.clickLogInButton();
    }
    @Then("i am able to see  log in button clicked")
    public void i_am_able_to_see_log_in_button_clicked() {
        getInitElements();
        hmp.userbankOfAmericaText();
    }
}
