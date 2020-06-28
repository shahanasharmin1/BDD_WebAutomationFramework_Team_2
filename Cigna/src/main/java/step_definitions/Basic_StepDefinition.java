package step_definitions;

import common.WebAPI;
import home.BasicPage;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.support.PageFactory;

public class Basic_StepDefinition extends WebAPI {
    @Before
    public void openBrowser() throws Exception {
        setUp(false, "browserstack", "OS X", "10", "chrome", "83", "https://www.cigna.com/");
    }
    @After
    public void closeBrowser() {
        cleanUp();
    }
    static BasicPage bpg;
    public static void getInitElements() {
        bpg = PageFactory.initElements(driver, BasicPage.class);
    }

    @When("I enter username in the search box")
    public void i_enter_username_in_the_search_box() {
        getInitElements();
        bpg.enterKeyWordForLogIn();
    }
    @Then("I can see expected result")
    public void i_can_see_expected_result() {
        getInitElements();
        bpg.UservalidationCignaInternationmalTextelement("Cigna International");
    }
    @When("I enter password in the search box")
    public void i_enter_password_in_the_search_box() {
        getInitElements();
        bpg.setEnterKeyWordForPassword();
    }
    @When("I hover on the medicare Tab")
    public void i_hover_on_the_medicare_Tab() {
        getInitElements();
        bpg.hoverOnMedicare();
    }
    @Then("I should see the result")
    public void i_should_see_the_result() {
        getInitElements();
        bpg.UservalidationCignaInternationmalTextelement("Cigna International");
    }
    @When("I hover on About Us Tab")
    public void i_hover_on_About_Us_Tab() {
        getInitElements();
        bpg.userhoverOnaboutUsElement();
    }
    @When("I need to hover on Individuals and Families in header part")
    public void i_need_to_hover_on_Individuals_and_Families_in_header_part() {
        getInitElements();
        bpg.userhoverOnIndividualsAndFamiliesElement();
    }
    @When("I should see {string} results")
    public void i_should_see_results(String string) {
        getInitElements();
    }
    @Then("I am able to validate")
    public void i_am_able_to_validate() {
        bpg.UservalidationCignaInternationmalTextelement("Cigna International");
    }
    @When("I need to hover on Employers and Brokers in header part")
    public void i_need_to_hover_on_Employers_and_Brokers_in_header_part() {
        getInitElements();
        bpg.useremployersAndbrokersTabelement();
    }
    @When("I need to hover on Health Care Providers in header part")
    public void i_need_to_hover_on_Health_Care_Providers_in_header_part() {
        getInitElements();
        bpg.userHoverOnhealthCareProviderselement();
    }
    @When("I need to hover on About Us in header part")
    public void i_need_to_hover_on_About_Us_in_header_part() {
        getInitElements();
        bpg.userhoverOnaboutUsElement();
    }
}
