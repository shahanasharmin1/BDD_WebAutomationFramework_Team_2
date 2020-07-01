package step_definitions;
import common.WebAPI;
import home.HomePage;
import home.SearchHomePage;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import org.apache.xmlbeans.impl.xb.xmlconfig.NamespaceList;
import org.openqa.selenium.support.PageFactory;

import java.io.IOException;
import java.util.List;

public class Search_On_Ebay_Product_Step_Definition extends WebAPI {
    @Before
    public void openBrowser() throws IOException {
        setUp(false, "browserstack", "OS X", "10", "chrome", "84", "https://www.ebay.com/");
    }
    @After
    public void closeBrowser() {
        cleanUp();
    }

    static SearchHomePage searchHomePage; // Reference Variable/ object of HomePage

    public static void getInitElements() {
        searchHomePage = PageFactory.initElements(driver, SearchHomePage.class);
    }

    @Given("I Enter  Adidas Women Jacket in search input field")
    public void i_Enter_Adidas_Women_Jacket_in_search_input_field() {
        getInitElements();
        searchHomePage.enterKeyWord("Adidas Women Jacket");

    }

    @Then("I should see Adidas Woman Jacket")
    public void i_should_see_Adidas_Woman_Jacket() {
        getInitElements();
        // searchHomePage.validateSearch("\"Adidas Woman Jacket\"");
    }

    @Given("I Enter Adidas Woman Jacket in search input field")
    public void i_Enter_Adidas_Woman_Jacket_in_search_input_field() {
        getInitElements();
        //searchHomePage.enterKeyWord("Adidas Women Jacket");

    }

    @Given("I Enter {string} in search input field")
    public void i_Enter_in_search_input_field(String string) {
//        getInitElements();
//        searchHomePage.enterKeyWord(string);
    }

    @Then("I should see {string}")
    public void i_should_see(String string) {
        getInitElements();
        // searchHomePage.validateSearch(string);
    }

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
        searchHomePage.validateSearch("items");
    }

    @Then("I should see Expected Items")
    public void i_should_see_Expected_Items(List<String> items) {
        // Write code here that turns the phrase above into concrete actions
        // For automatic transformation, change DataTable to one of
        // E, List<E>, List<List<E>>, List<Map<K,V>>, Map<K,V> or
        // Map<K, List<V>>. E,K,V must be a String, Integer, Float,
        // Double, Byte, Short, Long, BigInteger or BigDecimal.
        //
        // For other transformations you can register a DataTableType.
        getInitElements();
        searchHomePage.validateSearch("items");
    }

//    @Then("I should see \"\"Adidas Woman Jacket\"\"")
//    public void i_should_see_Adidas_Woman_Jacket() {
//        // Write code here that turns the phrase above into concrete actions
//        throw new io.cucumber.java.PendingException();
//    }

    @Then("I should see \"\"Adidas Woman shirt\"\"")
    public void i_should_see_Adidas_Woman_shirt() {
        getInitElements();
        //searchHomePage.validateSearch("\"Adidas Woman shirt\"");
    }

    @Then("I should see \"\"Adidas Woman shoes\"\"")
    public void i_should_see_Adidas_Woman_shoes() {
        getInitElements();
        // searchHomePage.validateSearch("\"Adidas Woman shoes\"");
    }

    @Then("I should see \"\"Adidas Woman sandals\"\"")
    public void i_should_see_Adidas_Woman_sandals() {
        getInitElements();
        // searchHomePage.validateSearch("\"Adidas Woman sandals\"");
    }


}
