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

public class SearchOnEbay_Step_Definition extends WebAPI {

        @Before
        public void openBrowser() throws IOException {
            setUp(false, "browserstack", "windows", "10", "chrome", "83", "https://www.ebay.com/");
        }
        @After
        public void closeBrowser() {
            cleanUp();
        }
        static HomePage hoP; // Reference Variable/ object of HomePage
        public static void getInitElements() {
            hoP = PageFactory.initElements(driver, HomePage.class);
        }
        @Given("I am at ebay.com")
        public void i_am_at_ebay_com() {
            getInitElements();
        }
        @Given("I type shoes in the search box")
        public void i_type_shoes_in_the_search_box() {
            getInitElements();
            hoP.userSeachBox();
        }
        @When("I click the search the button")
        public void i_click_the_search_the_button() {
            getInitElements();
            hoP.clickOnSearchbutton();
        }
        @Then("I should see the shoes options")
        public void i_should_see_the_shoes_options() {
            getInitElements();
            hoP.validateSearchProduct();
        }
        @Given("I am on ebay.com")
        public void i_am_on_ebay_com() {
            getInitElements();
        }
        @When("I click on image of ebayHomePage")
        public void i_click_on_image_of_ebayHomePage() {
            getInitElements();
     //      hoP. userclickonimageWebelement();
        }
        @Then("I should see  variety section")
        public void i_should_see_variety_section() {
            getInitElements();
            hoP. validateimageElement();
        }
    //Scroll Down
    @When("i scroll down the webPage byPixel")
    public void i_scroll_down_the_webPage_byPixel() {
    getInitElements();
    hoP.scrollDownTheWebPage();
    }

    @Then("I will see the the page are scrolled down")
    public void i_will_see_the_the_page_are_scrolled_down() {
    getInitElements();
    }
    //Scroll till the End
    @When("i scroll till the end")
    public void i_scroll_till_the_end() {
    getInitElements();
    hoP.scrollDownTillEnd();
    }

    @Then("I will see the the page are scrolled tillend")
    public void i_will_see_the_the_page_are_scrolled_tillend() {

    }
   //search product using parameter

    @Given("I Enter {string} in search input field")
    public void i_Enter_in_search_input_field(String string) {
    getInitElements();
    }

    @When("I Click search button")
    public void i_Click_search_button() {
    getInitElements();
    hoP.clickOnSearchbutton();
    }

    @Then("I should see {string} Hand soap {string}")
    public void i_should_see_Hand_soap(String string, String string2) {
    getInitElements();
    }

    @Then("I should see \"\"note book\"\"")
    public void i_should_see_note_book() {
    getInitElements();
    }

    @Then("I should see \"\"water bottle\"\"")
    public void i_should_see_water_bottle() {
    getInitElements();
    }

    @Then("I should see {string} pencils {string}")
    public void i_should_see_pencils(String string, String string2) {
    getInitElements();
    }
   //Hover on logo
   @When("I click on logo")
   public void i_click_on_logo() {
   hoP.hoveronebaylogo();
   }

    @Then("I am able to validate the ebay homepage")
    public void i_am_able_to_validate_the_ebay_homepage() {

    }












}

