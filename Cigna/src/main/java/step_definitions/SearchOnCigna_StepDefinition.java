package step_definitions;

import common.WebAPI;
import home.HomePage;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.support.PageFactory;

import java.io.IOException;

public class SearchOnCigna_StepDefinition extends WebAPI {
    @Before
    public void openBrowser() throws IOException {
        setUp(false, "browserstack", "OS X", "10", "chrome", "83", "https://www.cigna.com/");
    }
    @After
    public void closeBrowser() {
        cleanUp();
    }

    static HomePage homePage; // Reference Variable/ object of HomePage
    public static void getInitElements() {
        homePage = PageFactory.initElements(driver, HomePage.class);
    }

    @When("I scroll down the webPage byPixel")
    public void i_scroll_down_the_webPage_byPixel() {
        getInitElements();
        homePage.scrollDownTheWebPage(); }
    @Then("I will see the webPage is scrolled down")
    public void i_will_see_the_webPage_is_scrolled_down() { }
    @When("I scroll down till the end")
    public void i_scroll_down_till_the_end() {
        getInitElements();
        homePage.scrollDownTillEnd(); }
    @Then("I will see the page is  scrolled down  till to the end")
    public void i_will_see_the_page_is_scrolled_down_till_to_the_end() { }
    @When("I am in Log in page")
    public void i_am_in_Log_in_page() {
        getInitElements(); }
    @When("I am passing  tester1 in search  input field")
    public void i_am_passing_tester1_in_search_input_field() {
        getInitElements();
        //homePage.doUser.click();
    }
    @When("I do pass {int} in input field")
    public void i_do_pass_in_input_field(Integer int1) {
        getInitElements(); }
    @Then("I should see Log in")
    public void i_should_see_Log_in() {
        getInitElements();
        homePage.setDoLogIn(); }
    @When("I am passing  tester2 in search  input field")
    public void i_am_passing_tester2_in_search_input_field() {
        getInitElements(); }
    @When("I am passing  tester3 in search  input field")
    public void i_am_passing_tester3_in_search_input_field() {
        getInitElements();
       // homePage.doUser.click();
    }
    @When("I am passing  tester4 in search  input field")
    public void i_am_passing_tester4_in_search_input_field() {
        getInitElements();
       // homePage.doUser.click();
    }
}
