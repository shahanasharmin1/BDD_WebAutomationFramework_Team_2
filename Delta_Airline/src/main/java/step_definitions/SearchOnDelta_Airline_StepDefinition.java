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

public class SearchOnDelta_Airline_StepDefinition extends WebAPI {

    @Before
    public void openBrowser() throws IOException {
        setUp(false, "browserstack", "OS X", "10", "chrome", "83", "https://www.delta.com/");
    }
    @After
    public void closeBrowser() {
        cleanUp();
    }
    static HomePage homePage;
    public static void getInitElements() {
        homePage = PageFactory.initElements(driver, HomePage.class);
    }

    @Given("I am at delta.com homePage")
    public void i_am_at_delta_com_homePage() {
     getInitElements();
    }

    @When("I click on logIn button")
    public void i_click_on_logIn_button() {
        homePage.userloginbutton();

    }

    @Then("I can validate the text of homepage")
    public void i_can_validate_the_text_of_homepage() {
        getInitElements();
    }


    @When("i scroll down the webPage byPixel")
    public void i_scroll_down_the_webPage_byPixel() {
        homePage.scrollDownTheWebPage();
    }

    @Then("I will see the the page are scrolled down")
    public void i_will_see_the_the_page_are_scrolled_down() {
        getInitElements();
    }



    @When("i scroll till the end")
    public void i_scroll_till_the_end() {
        homePage.scrollDownTillEnd();
    }

    @Then("I will see the the page are scrolled tillend")
    public void i_will_see_the_the_page_are_scrolled_tillend() {

    }


    @When("I click on a login tab")
    public void i_click_on_a_login_tab() {
        homePage.userlogin();
    }

    @When("I enter username in the input box")
    public void i_enter_username_in_the_input_box() {
     homePage.userinputboxelement();
    }

    @Then("I will see the log in page")
    public void i_will_see_the_log_in_page() {
       homePage. validateLogin(" Log In ");

        }


    @When("I enter password in the input box")
    public void i_enter_password_in_the_input_box() {
        homePage.userinputpasswordelement();
    }

    @When("I select the checkbox")
    public void i_select_the_checkbox() {
        homePage.usercheckboxelement();
    }

    @Given("I hover on SkyMiles")
    public void i_hover_on_SkyMiles() {
        homePage.userhoverSkyMileswebelement();
    }




}



















