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

    static HomePage homePage; // Reference Variable/ object of HomePage
    public static void getInitElements() {
        homePage = PageFactory.initElements(driver, HomePage.class);
    }
//    @Given("I am at geico homePage")
//    public void i_am_at_geico_homePage() {
//        getInitElements();
//    }

    @Given("I Enter am geico homePage")
    public void i_Enter_am_geico_homePage() {
        getInitElements();
    }

    @When("I pass value for zipcode {int}")
    public void i_pass_value_for_zipcode(Integer int1) {
        getInitElements();
    }
    @When("I click on Start Quote searchButton")
    public void i_click_on_Start_Quote_searchButton() {
        getInitElements();
    }
    @Then("I should see Auto")
    public void i_should_see_Auto() {
        getInitElements();
        // homePage.getSearchAuto();
    }
    @Given("I Enter offers in  input field")
    public void i_Enter_offers_in_input_field() {getInitElements();
        // Write code here that turns the phrase above into concrete actions
        // For automatic transformation, change DataTable to one of
        // E, List<E>, List<List<E>>, List<Map<K,V>>, Map<K,V> or
        // Map<K, List<V>>. E,K,V must be a String, Integer, Float,
        // Double, Byte, Short, Long, BigInteger or BigDecimal.
        //
        // For other transformations you can register a DataTableType.
        // throw new io.cucumber.java.PendingException();
    }
    @When("I Click search button")
    public void i_Click_search_button() {
        getInitElements(); }
    @Then("I should see Expected Items")
    public void i_should_see_Expected_Items() {getInitElements();
        // Write code here that turns the phrase above into concrete actions
        // For automatic transformation, change DataTable to one of
        // E, List<E>, List<List<E>>, List<Map<K,V>>, Map<K,V> or
        // Map<K, List<V>>. E,K,V must be a String, Integer, Float,
        // Double, Byte, Short, Long, BigInteger or BigDecimal.
        //
        // For other transformations you can register a DataTableType.
        // throw new io.cucumber.java.PendingException();
    }
    @When("I Enter {string} in  input field")
    public void i_Enter_in_input_field(String string) {
        getInitElements(); }
    @When("I Click Start Quote search button")
    public void i_Click_Start_Quote_search_button() {
        getInitElements(); }
    @Then("I Should see \"\"Auto {string}")
    public void i_Should_see_Auto(String string) {
        getInitElements(); }
    @Then("I Should see {string} Renters {string}")
    public void i_Should_see_Renters(String string, String string2) {
        getInitElements(); }
    @Then("I Should see {string} Home {string}")
    public void i_Should_see_Home(String string, String string2) {
        getInitElements(); }
    @Then("I Should see {string} Condo {string}")
    public void i_Should_see_Condo(String string, String string2) {
        getInitElements(); }

}
