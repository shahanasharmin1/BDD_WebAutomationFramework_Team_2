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
        setUp(false, "browserstack", "windows", "10", "chrome", "83", "https://www.tripadvisor.com/");
    }
    @After
    public void closeBrowser() {
        cleanUp();
    }
    static HomePage hmp; // Reference Variable/ object of HomePage

    public static void getInitElements() {
        hmp = PageFactory.initElements(driver, HomePage.class);
    }


    //search hotels
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
    getInitElements();

    }

    @Then("I should see the hotels")
    public void i_should_see_the_hotels() {

    }
    //Search dream next trip
    @When("I am looking for Washington DC,DC in home page input field")
    public void i_am_looking_for_Washington_DC_DC_in_home_page_input_field() {
    getInitElements();
    }

    @When("I should see {string} results")
    public void i_should_see_results(String string) {
    getInitElements();
    }

    @Then("I am able to do validate")
    public void i_am_able_to_do_validate() {
    getInitElements();
    }

    @When("I am looking for Nantucket,MA in home page input field")
    public void i_am_looking_for_Nantucket_MA_in_home_page_input_field() {
    getInitElements();
    }

    @When("I am looking for Atlantic City,NJ in home page input field")
    public void i_am_looking_for_Atlantic_City_NJ_in_home_page_input_field() {
    getInitElements();
    }

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

    //search hotels in california
    @Given("I am at tripAdvisor Home Page")
    public void i_am_at_tripAdvisor_Home_Page() {
    getInitElements();
    }

    @Given("I click on hotels button in homepage")
    public void i_click_on_hotels_button_in_homepage() {
    hmp.clickonHoteltab();
    }

    @When("I click hotels button")
    public void i_click_hotels_button() {
    }
    @Then("I should be able to search hotels in California")
    public void i_should_be_able_to_search_hotels_in_California() {
    }

    //search destinations
    @When("I am already in trip advisor home page")
    public void i_am_already_in_trip_advisor_home_page() {
    getInitElements();
    }

    @When("I am looking for New York City,NY in home page input field")
    public void i_am_looking_for_New_York_City_NY_in_home_page_input_field() {
    getInitElements();
    }

    @When("I am looking for Singapore,Singapore in home page input field")
    public void i_am_looking_for_Singapore_Singapore_in_home_page_input_field() {
    getInitElements();
    }

    @When("I am looking for Rome,Italy in home page input field")
    public void i_am_looking_for_Rome_Italy_in_home_page_input_field() {
    getInitElements();
    }

    @When("I am looking for Paris,France in home page input field")
    public void i_am_looking_for_Paris_France_in_home_page_input_field() {

    }
    //click on trips
    @When("I click on trips")
    public void i_click_on_trips() {
     getInitElements();
    }

    @Then("i am able to see all the trip information")
    public void i_am_able_to_see_all_the_trip_information() {
    getInitElements();
    }
   //click on logo
   @When("I click on logo")
   public void i_click_on_logo() {
    getInitElements();
    hmp.clickonlogo();
    }
    @Then("I can validate the homepage of trip Advisor")
    public void i_can_validate_the_homepage_of_trip_Advisor() {
    getInitElements();
    }

   //scroll down
   @When("i scroll down the webPage byPixel")
   public void i_scroll_down_the_webPage_byPixel() {
    getInitElements();
    hmp.scrollDownTheWebPage();
   }

    @Then("I will see the the page are scrolled down")
    public void i_will_see_the_the_page_are_scrolled_down() {

    }
   //get an image

    @When("I click on image")
    public void i_click_on_image() {
    getInitElements();
 //   hmp.getimage();
    }

    @Then("I am able to get it")
    public void i_am_able_to_get_it() {
    getInitElements();
    }
   //Scroll Down till End
   @When("i scroll till the end")
   public void i_scroll_till_the_end() {
    getInitElements();
    hmp.scrollDownTillEnd();
   }

    @Then("I will see the the page are scrolled tillend")
    public void i_will_see_the_the_page_are_scrolled_tillend() {

    }
  //find vacation rentals
   @When("I click on find vacation rentals options")
   public void i_click_on_find_vacation_rentals_options() {
   getInitElements();
 //  hmp.findvacationrentals();
  }

    @Then("I am able to vsalidate that page")
    public void i_am_able_to_vsalidate_that_page() {
    getInitElements();
    }
   //Hover on search Box
   @When("I click on search button")
   public void i_click_on_search_button() {
   getInitElements();
 //  hmp.hoveronsearchbox();
   }

    @Then("It is selected to search whatever i want to search")
    public void it_is_selected_to_search_whatever_i_want_to_search() {
    getInitElements();
    }

    //Sign in

    @When("I do click in Sign in")
    public void i_do_click_in_Sign_in() {
    getInitElements();

    }

    @When("I should see new page with signin with email")
    public void i_should_see_new_page_with_signin_with_email() {
     getInitElements();
    }

    @When("I pass < email > and < password > in search field")
    public void i_pass_email_and_password_in_search_field() {
    getInitElements();
    hmp.setSearchEmailSearchBox();
    hmp.setSearchPassword();
    }

    @When("I click Log in")
    public void i_click_Log_in() {
    getInitElements();

    }

    @When("I should see forget ID")
    public void i_should_see_forget_ID() {
    getInitElements();
    }

    @Then("I should validate forget ID")
    public void i_should_validate_forget_ID() {
    getInitElements();
    }



















}





