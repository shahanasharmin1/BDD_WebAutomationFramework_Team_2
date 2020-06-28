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
import java.util.Collections;
import java.util.List;

public class SearchOnEbay_Step_Definition extends WebAPI {


    @Before
    public void openBrowser() throws IOException {
        setUp(false, "browserstack", "OS X", "Catalina", "chrome", "83", "https://www.ebay.com/");
    }

    @After
    public void closeBrowser() {
        cleanUp();
    }

    static HomePage homePage;

    public static void getInitElements() {
        homePage = PageFactory.initElements(driver, HomePage.class);
    }

    @Given("I'm already in Ebay home page")
    public void i_m_already_in_Ebay_home_page()  {
        getInitElements();
    }

    @Given("I enter kids swimming pool is search box")
    public void i_enter_kids_swimming_pool_is_search_box() {
        getInitElements();
        homePage.enterSearch();
    }
    @When("I click on search")
    public void i_click_on_search() {
        getInitElements();
        homePage.clickSearchTab();
    }
    @Then("I should See kids swimming pool")
    public void i_should_See_kids_swimming_pool() {
        getInitElements();
        homePage.validateSearch("kids swimming pool");
    }
    @Given("I Enter Items in search input field")
    public void i_Enter_Items_in_search_input_field(String items)  {
      getInitElements();
      homePage.enterItem(items);
    }
    @When("I Click search button")
    public void i_Click_search_button() {
      getInitElements();
      homePage.clickSearchTab();
    }
    @Then("I should see Expected Items")
    public void i_should_see_Expected_Items(List<String> items)  {
    }


}