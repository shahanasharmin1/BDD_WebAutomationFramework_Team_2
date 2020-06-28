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

public class SearchOnAt_t_StepDefinition extends WebAPI {
    @Before
    public void openBrowser() throws IOException {
        setUp(false, "browserstack", "windows", "10", "chrome", "83", "https://www.att.com/");
    }

    @After
    public void closeBrowser() {
        cleanUp();
    }
    static HomePage homePage; // Reference Variable/ object of HomePage
    public static void getInitElements() {
        homePage = PageFactory.initElements(driver, HomePage.class);
    }
    //search deals
    @Given("I am at at&t Home Page")
    public void i_am_at_at_t_Home_Page() {
        getInitElements();
    }

    @Given("I enter deals on the search box in homepage")
    public void i_enter_deals_on_the_search_box_in_homepage() throws InterruptedException {
        getInitElements();
        //homePage.enterKeyWord();

    }
    @When("I click search button")
    public void i_click_search_button() {
        getInitElements();
        //homePage.clickSearchButton();
    }
    @Then("I should see deal")
    public void i_should_see_deal() {
        getInitElements();
        //homePage.validateSearchProduct("Results for AT&T Deals - AT&T Search");
        //homePage.validateSearchProduct("AT&T Deals");

    }
        //header search
    @When("I am at  at&thomepage")
    public void i_am_at_at_thomepage() {

    }
    @When("I need to clickDealsin header part")
    public void i_need_to_clickDealsin_header_part() {

    }
    @When("I should seeDealsresults")
    public void i_should_seeDealsresults() {

    }

    @Then("I am able to validate the items")
    public void i_am_able_to_validate_the_items() {

    }

    @When("I need to clickwirelessin header part")
    public void i_need_to_clickwirelessin_header_part() {

    }

    @When("I should seewirelessresults")
    public void i_should_seewirelessresults() {

    }

    @When("I need to clickInternetin header part")
    public void i_need_to_clickInternetin_header_part() {

    }

    @When("I should seeInternetresults")
    public void i_should_seeInternetresults() {

    }

    @When("I need to clicktvin header part")
    public void i_need_to_clicktvin_header_part() {

    }

    @When("I should seetvresults")
    public void i_should_seetvresults() {

    }

    @When("I need to clickprepaidin header part")
    public void i_need_to_clickprepaidin_header_part() {

    }

    @When("I should seeprepaidresults")
    public void i_should_seeprepaidresults() {

    }

    //Scroll Downn the page
    @When("I scroll down the webpage byPixel")
    public void i_scroll_down_the_webpage_byPixel() {

    }

    @Then("Then I will see the the page are scrolled down")
    public void then_I_will_see_the_the_page_are_scrolled_down() {

    }
    //Scroll Down Till End

    @When("i scroll till the end")
    public void i_scroll_till_the_end() {
    getInitElements();
    homePage.scrollDownTillEnd();
    }

    @Then("I will see the the page are scrolled tillend")
    public void i_will_see_the_the_page_are_scrolled_tillend() {

    }
   //click on image
   @When("I click on Image")
   public void i_click_on_Image() {
 //  homePage.clickonimage();
   }

    @Then("I am able to validate the AT&THomepage")
    public void i_am_able_to_validate_the_AT_THomepage() {

    }
   //Hover on Internet

    @When("I click on internet")
    public void i_click_on_internet() {
     getInitElements();
     homePage.hoveroninternet();
    }

    @Then("I will see the offer of the internet options")
    public void i_will_see_the_offer_of_the_internet_options() {

    }
    //Drop Down
    @Given("I click on the drop down button and i select the View and pay bill")
    public void i_click_on_the_drop_down_button_and_i_select_the_View_and_pay_bill() {
     getInitElements();
   //  homePage.userclickonDropButton();
    }

    @When("I click account tab")
    public void i_click_account_tab() {

    }

    @Then("I  can validate the webpage")
    public void i_can_validate_the_webpage() {

    }














}
