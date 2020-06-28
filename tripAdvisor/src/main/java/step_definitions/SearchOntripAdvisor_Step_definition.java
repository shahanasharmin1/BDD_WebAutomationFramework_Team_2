package step_definitions;

import common.WebAPI;
import home.HomePage;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Test;
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
    static HomePage hmp;
    public static void getInitElements() {
        hmp = PageFactory.initElements(driver, HomePage.class);
    }

    @Given("I am at tripAdvisor.com now")
    public void i_am_at_tripAdvisor_com_now() {
     getInitElements();
    }
    @Given("I click on hotels tab")
    public void i_click_on_hotels_tab() {
        getInitElements();
        hmp.clickonHoteltab();
    }
    @When("I search hotels in the search box")
    public void i_search_hotels_in_the_search_box() {
        hmp.enterKeyword();
    }
    @Then("I should see the hotels")
    public void i_should_see_the_hotels () {
        hmp.validatingsearchBox();
        }
    @When("i scroll down the webPage byPixel")
    public void i_scroll_down_the_webPage_byPixel() {
        getInitElements();
        hmp.scrollWebPage();
    }
    @Then("I will see the the page are scrolled down")
    public void i_will_see_the_the_page_are_scrolled_down() {
     getInitElements() ;
        hmp.validatingsearchBox();
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
    @When("I scroll down till the end")
    public void i_scroll_down_till_the_end() {
        hmp.theScrollDownTillEnd(); }
    @Then("I will see the page is  scrolled down  till to the end")
    public void i_will_see_the_page_is_scrolled_down_till_to_the_end() { }
    @When("I do click in Sign in")
    public void i_do_click_in_Sign_in() {
        hmp.setSearchSignIn(); }
    @When("I should see new page with signin with email")
    public void i_should_see_new_page_with_signin_with_email() { }
    @When("I pass < email > and < password > in search field")
    public void i_pass_email_and_password_in_search_field() {
        getInitElements();
        hmp.setSearchEmailSearchBox();
        hmp.setSearchPassword(); }
    @When("I click Log in")
    public void i_click_Log_in() {
        getInitElements();
        hmp.getLogIn(); }
    @When("I should see forget ID")
    public void i_should_see_forget_ID() {
        getInitElements();
        hmp.getValidate(); }
    @Then("I should validate forget ID")
    public void i_should_validate_forget_ID() {
        getInitElements();
        hmp.getValidate(); }
    @When("I am already in trip advisor home page")
    public void i_am_already_in_trip_advisor_home_page() {
        getInitElements(); }
    @When("I am looking for New York City,NY in home page input field")
    public void i_am_looking_for_New_York_City_NY_in_home_page_input_field() {
        getInitElements();
        hmp.getSearchNY(); }
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
        hmp.getSearchSG(); }
    @When("I am looking for Rome,Italy in home page input field")
    public void i_am_looking_for_Rome_Italy_in_home_page_input_field() {
        getInitElements();
        hmp.getSearchRM(); }
    @When("I am looking for Paris,France in home page input field")
    public void i_am_looking_for_Paris_France_in_home_page_input_field() {
        getInitElements();
        hmp.getSearchFR(); }
    @When("I am looking for Washington DC,DC in home page input field")
    public void i_am_looking_for_Washington_DC_DC_in_home_page_input_field() {
        getInitElements();
        hmp.getSearchDC(); }
    @When("I am looking for Nantucket,MA in home page input field")
    public void i_am_looking_for_Nantucket_MA_in_home_page_input_field() {
        getInitElements();
        hmp.getSearchMA(); }
    @When("I am looking for Atlantic City,NJ in home page input field")
    public void i_am_looking_for_Atlantic_City_NJ_in_home_page_input_field() {
        getInitElements();
        hmp.getSearchNJ(); }
    @When("I am looking for Arlington,VA in home page input field")
    public void i_am_looking_for_Arlington_VA_in_home_page_input_field() {
        getInitElements();
    }
    @When("I am looking for Dewey Beach,DE in home page input field")
    public void i_am_looking_for_Dewey_Beach_DE_in_home_page_input_field() {
        getInitElements();
    }
    @When("I am looking for Cape Neddick , ME in home page input field")
    public void i_am_looking_for_Cape_Neddick_ME_in_home_page_input_field() {
        getInitElements();
    }
    }
