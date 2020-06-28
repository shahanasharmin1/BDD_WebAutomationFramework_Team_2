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

public class SearchOntripAdvisor_Step_definition extends WebAPI {
    @Before
    public void openBrowser() throws IOException {
        setUp(false, "browserstack", "OS X", "10", "chrome", "83", "https://www.tripadvisor.com/");
    }
    @After
    public void closeBrowser() {
        cleanUp();
    }

    static HomePage homePage; // Reference Variable/ object of HomePage

    public static void getInitElements() {
        homePage = PageFactory.initElements(driver, HomePage.class);
    }

    @Given("I am at tripAdvisor Home Page")
    public void i_am_at_tripAdvisor_Home_Page() {
        getInitElements(); }
    @Given("I click on hotels button in homepage")
    public void i_click_on_hotels_button_in_homepage() {
        getInitElements();
    }
    @When("I click hotels button")
    public void i_click_hotels_button() {
        getInitElements();
    }
    @Then("I should be able to search hotels in California")
    public void i_should_be_able_to_search_hotels_in_California() {
        getInitElements();
    }
    @When("I scroll down the webPage byPixel")
    public void i_scroll_down_the_webPage_byPixel() {
        homePage.scrollDownTheWebPage(); }
    @Then("I will see the webPage is scrolled down")
    public void i_will_see_the_webPage_is_scrolled_down() { }
    @When("I scroll down till the end")
    public void i_scroll_down_till_the_end() {
        homePage.scrollDownTillEnd(); }
    @Then("I will see the page is  scrolled down  till to the end")
    public void i_will_see_the_page_is_scrolled_down_till_to_the_end() { }
    @When("I do click in Sign in")
    public void i_do_click_in_Sign_in() {
        homePage.setSearchSignIn(); }
    @When("I should see new page with signin with email")
    public void i_should_see_new_page_with_signin_with_email() { }
    @When("I pass < email > and < password > in search field")
    public void i_pass_email_and_password_in_search_field() {
        getInitElements();
        homePage.setSearchEmailSearchBox();
        homePage.setSearchPassword(); }
    @When("I click Log in")
    public void i_click_Log_in() {
        getInitElements();
        homePage.getLogIn(); }
    @When("I should see forget ID")
    public void i_should_see_forget_ID() {
        getInitElements();
        homePage.getValidate(); }
    @Then("I should validate forget ID")
    public void i_should_validate_forget_ID() {
        getInitElements();
        homePage.getValidate(); }
    @When("I am already in trip advisor home page")
    public void i_am_already_in_trip_advisor_home_page() {
        getInitElements(); }
    @When("I am looking for New York City,NY in home page input field")
    public void i_am_looking_for_New_York_City_NY_in_home_page_input_field() {
        getInitElements();
        homePage.getSearchNY(); }
    @When("I should see {string} results")
    public void i_should_see_results(String string) {
        getInitElements(); }
    @Then("I am able to do validate")
    public void i_am_able_to_do_validate() {
        getInitElements();
        //homePage.setDoValidateSearch("Destinations travelers love");
    }
    @When("I am looking for Singapore,Singapore in home page input field")
    public void i_am_looking_for_Singapore_Singapore_in_home_page_input_field() {
        getInitElements();
        homePage.getSearchSG(); }
    @When("I am looking for Rome,Italy in home page input field")
    public void i_am_looking_for_Rome_Italy_in_home_page_input_field() {
        getInitElements();
        homePage.getSearchRM(); }
    @When("I am looking for Paris,France in home page input field")
    public void i_am_looking_for_Paris_France_in_home_page_input_field() {
        getInitElements();
        homePage.getSearchFR(); }
    @When("I am looking for Washington DC,DC in home page input field")
    public void i_am_looking_for_Washington_DC_DC_in_home_page_input_field() {
        getInitElements();
        homePage.getSearchDC(); }
    @When("I am looking for Nantucket,MA in home page input field")
    public void i_am_looking_for_Nantucket_MA_in_home_page_input_field() {
        getInitElements();
        homePage.getSearchMA(); }
    @When("I am looking for Atlantic City,NJ in home page input field")
    public void i_am_looking_for_Atlantic_City_NJ_in_home_page_input_field() {
        getInitElements();
        homePage.getSearchNJ(); }
    @When("I am looking for Arlington,VA in home page input field")
    public void i_am_looking_for_Arlington_VA_in_home_page_input_field() {
        getInitElements();
        //homePage.getSearchVA();
    }
    @When("I am looking for Dewey Beach,DE in home page input field")
    public void i_am_looking_for_Dewey_Beach_DE_in_home_page_input_field() {
        getInitElements();
        // homePage.getSearchDE();
    }
    @When("I am looking for Cape Neddick , ME in home page input field")
    public void i_am_looking_for_Cape_Neddick_ME_in_home_page_input_field() {
        getInitElements();
        // homePage.getSearchME();
    }

}










