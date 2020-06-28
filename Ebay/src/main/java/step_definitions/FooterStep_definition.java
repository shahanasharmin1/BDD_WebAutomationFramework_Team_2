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
import java.util.concurrent.TimeUnit;

public class FooterStep_definition extends WebAPI {

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

    @Given("I'm already inside Ebay home page")
    public void i_m_already_inside_Ebay_home_page() {
        getInitElements();
    }
    @When("I select see all companies")
    public void i_select_see_all_companies() {
        getInitElements();
        homePage.clickSeeAllCompanies();
    }
    @Then("companies with Ebay name sould display")
    public void companies_with_Ebay_name_sould_display() {
        getInitElements();
        homePage.validationSearch5();
    }
    @Given("I click on careers")
     public void i_click_on_careers() {
        getInitElements();
        homePage.clickCareers();
    }
    @When("I select build opportunity")
    public void i_select_build_opportunity() {
      getInitElements();
      homePage.clickBuildOpportunity();
    }
    @Then("I should see job offers")
    public void i_should_see_job_offers() {
     getInitElements();
     homePage.validationSearch6();
    }
    @Given("I select ebay community")
    public void i_select_ebay_community() {
       getInitElements();
       homePage.selectEbayCommunity();
    }
    @When("I click about community")
    public void i_click_about_community() {
     homePage.clickAboutCommunity();
    }
    @Then("I can learn more about the community")
    public void i_can_learn_more_about_the_community() {
     getInitElements();
     homePage.validationSearch9();
    }
    @Given("I select developers link")
    public void i_select_developers_link() {
      getInitElements();
      homePage.selectDevelopers();
    }
    @When("I click register")
    public void i_click_register() {
       getInitElements();
       homePage.clickRegister();
    }
    @Then("I can see registration page")
    public void i_can_see_registration_page() {
       getInitElements();
       homePage.validationSearch8();
    }
    @Given("select policies  link")
    public void select_policies_link() {
        getInitElements();
        homePage.selectPolicies();
    }
    @When("I click feedback policy link")
    public void i_click_feedback_policy_link() {
       getInitElements();
       homePage.clickPoliciesFeedback();
    }
    @Then("I can read more information")
    public void i_can_read_more_information() {
        getInitElements();
        homePage.validationSearch7();
    }
    @Given("I select global impact")
    public void i_select_global_impact() {
       getInitElements();
       homePage.selectGlobalImpact();
    }
    @Given("I hover to investor")
    public void i_hover_to_investor() {
      getInitElements();
      homePage.mouseHoverByXpath("//*[@id=\"main-nav-menu\"]/nav/ul/li[6]/a");
    }
    @When("I click on investor tab")
    public void i_click_on_investor_tab() {
      getInitElements();
      homePage.clickInvestor();
    }
    @Then("I should see the investor relation page")
    public void i_should_see_the_investor_relation_page() {
        getInitElements();
        homePage.validationSearch15();
    }



















}
