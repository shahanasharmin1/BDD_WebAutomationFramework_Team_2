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
        setUp(false, "browserstack", "windows", "10", "chrome", "83", "https://www.delta.com/");
    }

    @After
    public void closeBrowser() {
        cleanUp();
    }
    static HomePage homePage; // Reference Variable/ object of HomePage
    public static void getInitElements() {
        homePage = PageFactory.initElements(driver, HomePage.class);
    }


    @Given("I am at delta.com homePage")
    public void i_am_at_delta_com_homePage() {
    getInitElements();
    }
    //log in
    @When("I click on logIn button")
    public void i_click_on_logIn_button() {
//    homePage.userloginbutton();
    }
    @Then("I can validate the text of homepage")
    public void i_can_validate_the_text_of_homepage() {
    getInitElements();
    }
    //search travel info
    @When("I am at delta homepage")
    public void i_am_at_delta_homepage() {
    }
    @When("I need to clicksafer travelin travel info")
    public void i_need_to_clicksafer_travelin_travel_info() {
    getInitElements();
//    homePage.clickoncheckinandsafety();
    }
    @When("I should seesafer travelresults")
    public void i_should_seesafer_travelresults() {
    getInitElements();
    }

    @Then("I am able to validate the item")
    public void i_am_able_to_validate_the_item() {
    getInitElements();
    }

    @When("I need to clickairline partnersin travel info")
    public void i_need_to_clickairline_partnersin_travel_info() {
    getInitElements();
//    homePage.clickairlinepartners();
    }
    @When("I should seeairline partnersresults")
    public void i_should_seeairline_partnersresults() {
    getInitElements();
    }
    @When("I need to clickbaggagein travel info")
    public void i_need_to_clickbaggagein_travel_info() {
//    homePage.clickbaggage();
    }
    @When("I should seebaggageresults")
    public void i_should_seebaggageresults() {
    }
    @When("I need to clickcheck-in & safetyin travel info")
    public void i_need_to_clickcheck_in_safetyin_travel_info() {
 //   homePage.clickoncheckinandsafety();
    }

    @When("I should seecheck-in & safetyresults")
    public void i_should_seecheck_in_safetyresults() {
    getInitElements();
    }

    @When("I need to clickdelta sky clubin travel info")
    public void i_need_to_clickdelta_sky_clubin_travel_info() {
    getInitElements();

    //homePage.clickdeltaskyclub();
    }
    @When("I should seedelta sky clubresults")
    public void i_should_seedelta_sky_clubresults() {
    }
    @When("I need to clickairport maps and locationsin travel info")
    public void i_need_to_clickairport_maps_and_locationsin_travel_info() {
    getInitElements();
    }
    @When("I should seeairport maps and locationsresults")
    public void i_should_seeairport_maps_and_locationsresults() {
    }
    //scroll down
    @When("i scroll down the webPage byPixel")
    public void i_scroll_down_the_webPage_byPixel() {
    homePage.scrollDownTheWebPage();
    }

    @Then("I will see the the page are scrolled down")
    public void i_will_see_the_the_page_are_scrolled_down() {
    getInitElements();
    }
    //scroll down till end
    @When("i scroll till the end")
    public void i_scroll_till_the_end() {
    homePage.scrollDownTillEnd();
    }

    @Then("I will see the the page are scrolled tillend")
    public void i_will_see_the_the_page_are_scrolled_tillend() {
    getInitElements();
    }

    @When("I click on a login tab")
    public void i_click_on_a_login_tab() {
 //   homePage.userlogin();
    }

    @When("I enter username in the input box")
    public void i_enter_username_in_the_input_box() {
 //    homePage.userinputboxelement();
    }
    @Then("I will see the log in page")
    public void i_will_see_the_log_in_page() {
 //   homePage.validateLogin("Log In");
    }

    @When("I enter password in the input box")
    public void i_enter_password_in_the_input_box() {
 //   homePage.userinputpasswordelement();
    }

    @When("I select the checkbox")
    public void i_select_the_checkbox() {
 //   homePage.usercheckboxelement();
    }

    @Given("I hover on SkyMiles")
    public void i_hover_on_SkyMiles() {
    homePage.userhoverSkyMileswebelement();
    }

    @Given("I click on the drop down button and i select the One Way options")
    public void i_click_on_the_drop_down_button_and_i_select_the_One_Way_options() {
 //   homePage.userdropdownwebelement();
    }

    @Then("I validate the login page")
    public void i_validate_the_login_page() {
    homePage.validateLogin("Log In");
    }

    @When("I check on Refundable Fares Tab")
    public void i_check_on_Refundable_Fares_Tab() {
  //  homePage.userrefundableFareswebelement();
    }

    @Then("I should see the Tab are checked and validated")
    public void i_should_see_the_Tab_are_checked_and_validated() {
    homePage.uservalidatehomepagewebelement("SEARCH OPTIONS");
    }

    @When("I check on Mydates are flexible tab")
    public void i_check_on_Mydates_are_flexible_tab() {
    homePage.usercheckonmydatesareflexiblewebelement();
    }

    @Then("I am able to see the results are it validated")
    public void i_am_able_to_see_the_results_are_it_validated() {
    homePage.uservalidatehomepagewebelement("SEARCH OPTIONS");
    }


}
