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
            setUp(false, "browserstack", "OS X", "10", "chrome", "83", "https://www.ebay.com/");
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
            hoP. userclickonimageWebelement();
        }
        @Then("I should see  variety section")
        public void i_should_see_variety_section() {
            getInitElements();
            hoP. validateimageElement();
        }
}

