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

public class SearchOnGeico_Step_Definition extends WebAPI {

    @Before
    public void openBrowser() throws IOException {
        setUp(false, "browserstack", "OS X", "10", "chrome", "83", "https://www.geico.com/");
    }
    @After
    public void closeBrowser() {
        cleanUp();
    }
    static HomePage homePage;
    public static void getInitElements() {
        homePage = PageFactory.initElements(driver, HomePage.class);
    }

    @Given("I am at geico.com homepage")
    public void i_am_at_geico_com_homepage() {
        getInitElements();
    }
    @When("I click on  boat Tab")
    public void i_click_on_boat_Tab() {
        homePage.userclickonboatWebelement();
    }
    @Then("I will see the expected result")
    public void i_will_see_the_expected_result() {
        homePage.validateboatWebelement();
    }
    @When("I click on Auto Tab and I set the index {int}")
    public void i_click_on_Auto_Tab_and_I_set_the_index(Integer int1) {
       homePage. dropDownAutoTab();
    }
    @Then("I will see the value whatever I want to see")
    public void i_will_see_the_value_whatever_I_want_to_see() {
        getInitElements();
       homePage. validatetext("Access Your Policy");
    }
    @When("i scroll down the webPage byPixel")
    public void i_scroll_down_the_webPage_byPixel() {
        homePage.thescrollDownThewebPage();
    }
    @Then("I will see the the page are scrolled down")
    public void i_will_see_the_the_page_are_scrolled_down() {
        getInitElements();
        homePage.validatetext("Access Your Policy");
    }
    @When("i scroll till the end")
    public void i_scroll_till_the_end() {
        homePage.theScrollDownTillEnd();
    }
    @Then("I will see the the page are scrolled tillend")
    public void i_will_see_the_the_page_are_scrolled_tillend() {
        homePage.validatetext("Access Your Policy");
    }
}
