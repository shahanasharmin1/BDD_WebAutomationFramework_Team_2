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

public class SearchOnHBO_SignIn_Step_Definition extends WebAPI {
//    @Before
//    public void openBrowser() throws IOException {
//        setUp(false, "browserstack", "OS X", "10", "chrome", "83", "https://play.hbonow.com/");
//    }
//    @After
//    public void closeBrowser() {
//        cleanUp();
//    }

    static HomePage homePage; // Reference Variable/ object of HomePage

    public static void getInitElements() {
        homePage = PageFactory.initElements(driver, HomePage.class);
    }

    @Given("I am at hbo playHome Page")
    public void i_am_at_hbo_playHome_Page() { getInitElements(); }
    @When("User enter Email Address  tester1234@yahoo.com")
    public void user_enter_Email_Address_tester1234_yahoo_com() { getInitElements(); }
    @When("User enter  password tester1234")
    public void user_enter_password_tester1234() { getInitElements(); }
    @When("User click in SignIn button")
    public void user_click_in_SignIn_button() { getInitElements(); }
    @Then("User see Forget ID\\/Password")
    public void user_see_Forget_ID_Password() { getInitElements(); }
    @When("Users enter EmailAddress {string}")
    public void users_enter_EmailAddress(String string) { getInitElements(); }
    @When("Users enter password {string}")
    public void users_enter_password(String string) {
        getInitElements();
    }
    @When("Users click in SignIn button")
    public void users_click_in_SignIn_button() {
        getInitElements();
    }
    @Then("Users see Forget ID\\/Password")
    public void users_see_Forget_ID_Password() {
        getInitElements();
    }


}