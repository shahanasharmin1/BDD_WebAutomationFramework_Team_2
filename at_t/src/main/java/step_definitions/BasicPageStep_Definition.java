package step_definitions;

import common.WebAPI;
import home.BasicPage;
import home.HomePage;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.support.PageFactory;

import java.io.IOException;

public class BasicPageStep_Definition extends WebAPI {

    @Before
    public void openBrowser() throws IOException {
        setUp(false, "browserstack", "OS X", "10", "chrome", "83", "https://www.att.com/");
    }
    @After
    public void closeBrowser() {
        cleanUp();
    }
    static BasicPage basic;
    public static void getInitElements() {
        basic = PageFactory.initElements(driver, BasicPage.class);
    }

    @Given("I am at a  att.com homePage")
    public void i_am_at_a_att_com_homePage() {
        getInitElements();
    }
    @When("I enter the user id in the input field")
    public void i_enter_the_user_id_in_the_input_field() {
        basic.userIDElement();
    }
    @Then("I will see this results")
    public void i_will_see_this_results() {
        basic.uservalidationtextElement("Gift your grad iPhone 11 for half off");
    }
    @When("I handle the alert window")
    public void i_handle_the_alert_window() {
        basic.handleAlert();
    }
}
