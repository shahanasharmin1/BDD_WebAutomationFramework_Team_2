package step_definitions;

import common.WebAPI;
import home.HomePage;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.support.PageFactory;

import java.io.IOException;

public class BankOfAmericaLogInStep_Definition extends WebAPI {


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


    @Given("user is already in home page")
    public void user_is_already_in_home_page() {
        getInitElements();
        homePage.maximize();
    }
    @And("user enters kahina")
    public void user_enters_kahina() {
        getInitElements();
        homePage.enterId();
    }
    @And("user enters test123")
    public void user_enters_test123() {
        getInitElements();
        homePage.enterPassword();
    }
    @Given("user enters first id {string}")
    public void user_enters_first_id(String string) {
        getInitElements();
        homePage.enterStringId(string);
    }
    @Given("user enters  second password {string}")
    public void user_enters_second_password(String string) {
        getInitElements();
        homePage.enterStringPassword(string);
    }
    @When("user clicks sign in button")
    public void user_clicks_sign_in_button() {
        getInitElements();
        homePage.clickSignButton();
    }
    @Then("user sees Forgot ID\\/Password")
    public void user_sees_Forgot_ID_Password() {
        getInitElements();
        homePage.validationLogIn();
    }



}
