package step_definitions;

import common.WebAPI;
import home.BasicPage;
import home.HomePage;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.support.PageFactory;

import java.io.IOException;

public class BasicHomePage_StepDefinition extends WebAPI {


    static BasicPage bap;

    public void getInItElements() {
        bap = PageFactory.initElements(driver, BasicPage.class);
    }

    @Before
    public void setUp() throws IOException {
        setUp(false, "browserstack", "OS X", "10", "chrome", "83",
                "http://bankofamerica.com/");
    }
    @After
    public void cleanUp() {
        driver.quit();
    }

    @When("i hover on checking element")
    public void i_hover_on_checking_element() {
        getInItElements();
        bap.userhoverOnCheckingElement();
    }
    @Then("I will see the results")
    public void i_will_see_the_results() {
        getInItElements();
        bap.uservalidationSigninelement("Sign In");
    }
    @When("i hover on savings element")
    public void i_hover_on_savings_element() {
        getInItElements();
        bap.userhoverOnsavingsWebelement();
    }
    @When("i hover on Credit Cards  element")
    public void i_hover_on_Credit_Cards_element() {
        getInItElements();
        bap.userhoverOnCreditCardsWebelement();
    }
    @When("i hover on HomeLoans  element")
    public void i_hover_on_HomeLoans_element() {
        getInItElements();
        bap.userhoverOnhomeLoansWebelement();
    }
    @Then("I will see the desire results")
    public void i_will_see_the_desire_results() {
        getInItElements();
        bap.uservalidationSigninelement("Sign In");
    }
    @When("i hover on AutoLoans element")
    public void i_hover_on_AutoLoans_element() {
        getInItElements();
        bap.userhoverOnautoLoansWebelement();
    }
    @When("i hover on Investing  element")
    public void i_hover_on_Investing_element() {
        getInItElements();
        bap.userhoverOninvestingElementWebelement();
    }
    @When("i Click  on Personal element")
    public void i_Click_on_Personal_element() {
        getInItElements();
        bap.userpersonaltWebelement();
    }
    @When("i Click  onsmall Business")
    public void i_Click_onsmall_Business() {
        getInItElements();
        bap.usersmallBusinessWebelement();
    }
    @When("i Click   Wealth Management")
    public void i_Click_Wealth_Management() {
        getInItElements();
        bap.userwealthManagementWebelement();
    }
    @When("i Click on  Business and Institutions element")
    public void i_Click_on_Business_and_Institutions_element() {
        getInItElements();
        bap.userbusinessAndInstitutionsWebelement();
    }
    @When("i Click on  Security element")
    public void i_Click_on_Security_element() {
        getInItElements();
        bap.usersecurityElementWebelement();
    }
    @When("i Click on About Us element")
    public void i_Click_on_About_Us_element() {
        getInItElements();
        bap.useraboutUsWebelement();
    }
    @When("I am already in BOA Home Page")
    public void i_am_already_in_BOA_Home_Page() {
        getInItElements();
    }
    @When("I need to click Personal in header part")
    public void i_need_to_click_Personal_in_header_part() {
        bap.userpersonaltWebelement();
    }
    @When("I should see {string} results")
    public void i_should_see_results(String string) {
    }
    @Then("I am able to validate")
    public void i_am_able_to_validate() {
        bap.uservalidationSigninelement("Sign In");
    }
    @When("I need to click Small Business in header part")
    public void i_need_to_click_Small_Business_in_header_part() {
        bap.usersmallBusinessWebelement();
    }
    @When("I need to click Wealth Management in header part")
    public void i_need_to_click_Wealth_Management_in_header_part() {
        bap.userwealthManagementWebelement();
    }
    @When("I need to click Business and Institution in header part")
    public void i_need_to_click_Business_and_Institution_in_header_part() {
        bap.userbusinessAndInstitutionsWebelement();
    }
    @When("I need to click Security in header part")
    public void i_need_to_click_Security_in_header_part() {
        bap.usersecurityElementWebelement();
    }
    @When("I need to click About Us in header part")
    public void i_need_to_click_About_Us_in_header_part() {
        bap.useraboutUsWebelement();
    }
}
