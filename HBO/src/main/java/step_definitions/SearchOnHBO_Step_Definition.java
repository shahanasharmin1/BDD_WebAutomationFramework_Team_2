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
import java.util.List;

public class SearchOnHBO_Step_Definition extends WebAPI {
    @Before
    public void openBrowser() throws IOException {
        setUp(false, "browserstack", "OS X", "10", "chrome", "83", "https://www.hbo.com/");
    }
    @After
    public void closeBrowser() {
        cleanUp();
    }

    static HomePage homePage; // Reference Variable/ object of HomePage
    public static void getInitElements() {
        homePage = PageFactory.initElements(driver, HomePage.class);
    }

    @Given("I am at hbo Home Page")
    public void i_am_at_hbo_Home_Page() {
       getInitElements();
    }
    @Given("I Enter Series in search input field")
    public void i_Enter_Series_in_search_input_field() {
        getInitElements(); }
    @When("I Click search button")
    public void i_Click_search_button() { getInitElements(); }
    @Then("I should see SERIES")
    public void i_should_see_SERIES() {
        getInitElements();
    }
    @Given("I Enter {string} in search input field")
    public void i_Enter_in_search_input_field(String string) {
        getInitElements();
    }
    @Then("I should see {string}")
    public void i_should_see(String string) {
        getInitElements();
        homePage.setDoValidateText("doValidate"); }
    @Given("I Enter Items in search input field")
    public void i_Enter_Items_in_search_input_field(List<String> items) {
        // Write code here that turns the phrase above into concrete actions
        // For automatic transformation, change DataTable to one of
        // E, List<E>, List<List<E>>, List<Map<K,V>>, Map<K,V> or
        // Map<K, List<V>>. E,K,V must be a String, Integer, Float,
        // Double, Byte, Short, Long, BigInteger or BigDecimal.
        //
        // For other transformations you can register a DataTableType.
        getInitElements();
      // homePage.validateSearchProduct(items);
    }
    @Then("I should see Expected Items")
    public void i_should_see_Expected_Items(io.cucumber.datatable.DataTable dataTable) {
//         Write code here that turns the phrase above into concrete actions
//         For automatic transformation, change DataTable to one of
//         E, List<E>, List<List<E>>, List<Map<K,V>>, Map<K,V> or
//         Map<K, List<V>>. E,K,V must be a String, Integer, Float,
//         Double, Byte, Short, Long, BigInteger or BigDecimal.
//
//         For other transformations you can register a DataTableType.
//        getInitElements();
//        homePage.validateSearchProduct(items);
    }

    @Then("I Should see {string}")
    public void i_Should_see(String string) {
        getInitElements();
        homePage.setDoValidateText("doValidate"); }
    @Then("I should see \"\"Girls Season\"\"")
    public void i_should_see_T_shirt() {
        getInitElements();
        homePage.getSearchForGS(); }
    @Then("I should see \"\"Alien 3\"\"")
    public void i_should_see_Hand_soap() {
        homePage.getSearchForAL(); }
    @Then("I should see \"\"The Newsroom\"\"")
    public void i_should_see_I_Phone_Pro_Max(Integer int1) {
        getInitElements();
        homePage.getSearchForTNR(); }

}
