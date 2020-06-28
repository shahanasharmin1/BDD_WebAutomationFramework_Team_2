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
        hmp.thescrollDownTheWebPage();
    }
    @Then("I will see the the page are scrolled down")
    public void i_will_see_the_the_page_are_scrolled_down() {
        hmp.validatetext("Insurance Plans and Products");
    }
    @When("i scroll till the end byPixel")
    public void i_scroll_till_the_end_byPixel() {
        hmp.thescrollDownTillEnd();
    }
    @Then("I will see the the page are scrolled tillend")
    public void i_will_see_the_the_page_are_scrolled_tillend() {
        hmp.validatetextofpage("Insurance Plans and Products");
    }
    @When("i enter the health insurance keyword in the search box")
    public void i_enter_the_health_insurance_keyword_in_the_search_box() {
        hmp.enterKeyword();
    }
    @When("I click on search button")
    public void i_click_on_search_button() {
        hmp.clickonButton();
    }
    @Then("I can see the page are validated")
    public void i_can_see_the_page_are_validated() {
        hmp.UservalidationCignaInternationmalTextelement("Cigna International");
    }
    @When("I hover on customer LogIn Tab")
    public void i_hover_on_customer_LogIn_Tab() {
        hmp.goToCustomerLogInByMouseHovering();
    }
    @When("I write the text of cigna International")
    public void i_write_the_text_of_cigna_International() {
        hmp.getTilteOfcignaInternationalTab();
    }
    @Then("I can see  result")
    public void i_can_see_result() {
        hmp.UservalidationCignaInternationmalTextelement("Cigna International");
    }
    @When("I can get the text of cigna International")
    public void i_can_get_the_text_of_cigna_International() {
        hmp.getTilteOfcignaInternationalTab();
    }
    @Then("I should see  result")
    public void i_should_see_result() {
        hmp.UservalidationCignaInternationmalTextelement("Cigna International");
    }
    @When("I hover on the Health Care Tab")
    public void i_hover_on_the_Health_Care_Tab() {
        hmp.userHoverOnhealthCareProviderselement();
    }
    @Then("I should see the page are validated")
    public void i_should_see_the_page_are_validated() {
        hmp.UservalidationCignaInternationmalTextelement("Cigna International");
    }
    @When("I hover Employers and Brokers Tab")
    public void i_hover_Employers_and_Brokers_Tab() {
        hmp.useremployersAndbrokersTabelement();
    }
    @When("I hover On Individuals and Families Tab")
    public void i_hover_On_Individuals_and_Families_Tab() {
        hmp.userhoverOnIndividualsAndFamiliesElement();
    }
}
