package step_definitions;

import common.WebAPI;
import home.EbayHomePage;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.support.PageFactory;

import java.io.IOException;

public class EbayCategories_Step_Definition extends WebAPI  {

    @Before
    public void openBrowser() throws IOException {
        setUp(false, "browserstack", "windows", "10", "chrome", "83", "https://www.ebay.com/");
    }
    @After
    public void closeBrowser() {
        cleanUp();
    }
    static EbayHomePage homePage;
    public static void getInitElements() {
        homePage = PageFactory.initElements(driver, EbayHomePage.class);
    }

    @Given("I am at Ebay Home Page")
    public void i_am_at_Ebay_Home_Page() {
        getInitElements();
    }
    @When("I hover mouse on motors")
    public void i_hover_mouse_on_motors(){
        getInitElements();
        homePage.motors();
    }
    @Then("I can validate hovering is working")
    public void i_can_validate_hovering_is_working() {
        getInitElements();
        homePage.validatehover("dovalidatehover");
    }
    @When("I am already in Home Page")
    public void i_am_already_in_Home_Page() {
        getInitElements();
    }
    @When("I need to hover over Fashion in Ebay Home Page")
    public void i_need_to_hover_over_Fashion_in_Ebay_Home_Page() {
        getInitElements();
        homePage.fashion();
    }
    @When("I should see {string} results")
    public void i_should_see_results(String string) {
        getInitElements();
    }
    @Then("I am able to validate mouse hovering")
    public void i_am_able_to_validate_mouse_hovering() {
        getInitElements();
    }
    @When("I need to hover over Electronics in Ebay Home Page")
    public void i_need_to_hover_over_Electronics_in_Ebay_Home_Page() {
        getInitElements();
        homePage.electronics();
    }
    @When("I need to hover over Collectibles & Art in Ebay Home Page")
    public void i_need_to_hover_over_Collectibles_Art_in_Ebay_Home_Page() {
        getInitElements();
        homePage.collectandarts();
    }
    @When("I need to hover over Home & Garden in Ebay Home Page")
    public void i_need_to_hover_over_Home_Garden_in_Ebay_Home_Page() {
        getInitElements();
        homePage.homeandgarden();
    }
    @When("I need to hover over Sporting Goods in Ebay Home Page")
    public void i_need_to_hover_over_Sporting_Goods_in_Ebay_Home_Page() {
        getInitElements();
        homePage.sportinggoods();
    }
    @When("I need to hover over Toys in Ebay Home Page")
    public void i_need_to_hover_over_Toys_in_Ebay_Home_Page() {
        getInitElements();
        homePage.toys();
    }
    @When("I need to hover over Business & Industrial in Ebay Home Page")
    public void i_need_to_hover_over_Business_Industrial_in_Ebay_Home_Page() {
        getInitElements();
        homePage.businsandindustrl();
    }
    @When("I need to hover over Music in Ebay Home Page")
    public void i_need_to_hover_over_Music_in_Ebay_Home_Page() {
        getInitElements();
        homePage.music();
    }
    @When("I need to hover over Deals in Ebay Home Page")
    public void i_need_to_hover_over_Deals_in_Ebay_Home_Page() {
        getInitElements();
        homePage.deals();
    }

}
