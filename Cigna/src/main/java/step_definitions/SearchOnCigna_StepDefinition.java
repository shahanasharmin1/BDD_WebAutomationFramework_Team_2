package step_definitions;

import common.WebAPI;
import home.HomePage;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.support.PageFactory;

public class SearchOnCigna_StepDefinition extends WebAPI {


    @Before
    public void openBrowser() throws Exception {
        setUp(false, "browserstack", "OS X", "10", "chrome", "83", "https://www.cigna.com/");
    }
    @After
    public void closeBrowser() {
        cleanUp();
    }
    static HomePage hmp;
    public static void getInitElements() {
        hmp = PageFactory.initElements(driver, HomePage.class);
    }
    @Given("I am at cigna.com homePage")
    public void i_am_at_cigna_com_homePage() {
     getInitElements();
    }

    @When("I click on a medicare tab")
    public void i_click_on_a_medicare_tab() {

    }

    @Then("I will see lot of things which are medicated related")
    public void i_will_see_lot_of_things_which_are_medicated_related() {

    }
    @When("i scroll down the webPage byPixel")
    public void i_scroll_down_the_webPage_byPixel() {
         hmp.scrollDownTheWebPage();
    }


    @Then("I will see the the page are scrolled down")
    public void i_will_see_the_the_page_are_scrolled_down() {
        hmp.validatetext("Insurance Plans and Products");
    }

    @When("i scroll till the end byPixel")
    public void i_scroll_till_the_end_byPixel() {
     hmp.scrollDownTillEnd();
    }
    @Then("I will see the the page are scrolled tillend")
    public void i_will_see_the_the_page_are_scrolled_tillend() {
        hmp.validatetextofpage("Insurance Plans and Products");
    }










}
