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

public class SearchOnCigna_StepDefinition extends WebAPI {

    @Before
    public void openBrowser() throws IOException {
        setUp(false, "browserstack", "windows", "10", "chrome", "83", "https://www.cigna.com/");
    }
    @After
    public void closeBrowser() {
        cleanUp();
    }
    static HomePage homePage;
    public static void getInitElements() {
        homePage = PageFactory.initElements(driver, HomePage.class);
    }

    @Given("I am at Cigna Home Page")
    public void i_am_at_Cigna_Home_Page() {
        getInitElements();
    }
    @When("I am already in Home Page")
    public void i_am_already_in_Home_Page() {
        getInitElements();
    }
    @When("I need to click on Health Insurance for Individuals and Families in Cigna Home Page")
    public void i_need_to_click_on_Health_Insurance_for_Individuals_and_Families_in_Cigna_Home_Page() {
        getInitElements();
        homePage.dentalPlans();
    }
    @When("I should see {string} results")
    public void i_should_see_results(String string) {
        getInitElements();
    }

    @Then("I am able to validate")
    public void i_am_able_to_validate() {
        getInitElements();
        homePage.validatemediCarePlans("validatemediCarePlans");
    }
    @When("I need to click on Dental Insurance Plans in Cigna Home Page")
    public void i_need_to_click_on_Dental_Insurance_Plans_in_Cigna_Home_Page() {
        getInitElements();
        homePage.dentalPlans();
    }
    @When("I need to click on Medicare Plans in Cigna Home Page")
    public void i_need_to_click_on_Medicare_Plans_in_Cigna_Home_Page() {
        getInitElements();
        homePage.mediCarePlans();
    }
    @When("I need to click on Medicare Supplement Plans in Cigna Home Page")
    public void i_need_to_click_on_Medicare_Supplement_Plans_in_Cigna_Home_Page() {
        getInitElements();
        homePage.mediCareSuppPlans();
    }
    @When("I need to click on Other Supplemental Insurance in Cigna Home Page")
    public void i_need_to_click_on_Other_Supplemental_Insurance_in_Cigna_Home_Page() {
        getInitElements();
        homePage.otherSuppIns();
    }
    @When("I need to click on International Health Insurance in Cigna Home Page")
    public void i_need_to_click_on_International_Health_Insurance_in_Cigna_Home_Page() {
        getInitElements();
        homePage.interNheathIns();
    }
    @When("I scroll down the webPage byPixel")
    public void i_scroll_down_the_webPage_byPixel() {
        getInitElements();
        homePage.scrollDownTheWebPage();
    }
    @Then("I will see the webPage is scrolled down")
    public void i_will_see_the_webPage_is_scrolled_down() { }
    @When("I scroll down till the end")
    public void i_scroll_down_till_the_end() {
        getInitElements();
        homePage.scrollDownTillEnd();
    }
    @Then("I will see the page is  scrolled down  till to the end")
    public void i_will_see_the_page_is_scrolled_down_till_to_the_end() { }
}
