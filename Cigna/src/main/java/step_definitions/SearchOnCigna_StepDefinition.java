package step_definitions;

import common.WebAPI;
import home.CignaHomePage;
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
        setUp(false, "browserstack", "OS X", "Catalina", "chrome", "83", "https://www.cigna.com/");
    }
    @After
    public void closeBrowser() {
        cleanUp();
    }
    static CignaHomePage homePage;

    public static void getInitElements() {
        homePage = PageFactory.initElements(driver,CignaHomePage .class);
    }


    @Given("I'm already in cigna home page")
    public void i_m_already_in_cigna_home_page() {
        getInitElements();
    }
    @Given("I click on cigna international")
    public void i_click_on_cigna_international() {
        getInitElements();
        homePage.clickCignaInternational();
    }

    @Given("I click on I individual plan")
    public void i_click_on_I_individual_plan() {
       getInitElements();
       homePage.clickIndividualPlan();
    }

    @When("I click on silver plan")
    public void i_click_on_silver_plan() {
        getInitElements();
        homePage.clickSliver();
    }

    @Then("I get all the details")
    public void i_get_all_the_details() {
        getInitElements();
        homePage.validateSearch1();
    }

    @Given("I on click individual family plan")
    public void i_on_click_individual_family_plan() {
        getInitElements();
        homePage.individualFamilyPlan();
    }

    @Given("I click on health insurance plan")
    public void i_click_on_health_insurance_plan() {
        getInitElements();
        homePage.healthInsurancePlan();
    }

    @When("I select customer service")
    public void i_select_customer_service() {
       getInitElements();
       homePage.customerService();
    }
    @Then("all the help info are displayed")
    public void all_the_help_info_are_displayed() {
        getInitElements();
        homePage.validateSearch2();
    }
    @Given("I on health Care Provider")
    public void i_on_health_Care_Provider() {
      getInitElements();
      homePage.healthCareProvider();
    }
    @Given("I click on  Credential")
    public void i_click_on_Credential() {
       getInitElements();
       homePage.getCredential();
    }
    @When("I select MedicalCredential")
    public void i_select_MedicalCredential() {
        getInitElements();
        homePage.getMedicalCredential();
    }
    @Then("all the  info are displayed")
    public void all_the_info_are_displayed() {
       getInitElements();
       homePage.validateSearch3();
    }
    @Given("I  go to employer and broker")
    public void i_go_to_employer_and_broker() {
       getInitElements();
       homePage.goToEmployerAndBroker();
    }

    @Given("I click on WhyCigna")
    public void i_click_on_WhyCigna() {
       getInitElements();
       homePage.whyCigna();
    }
    @Given("I go to Cost and Improvement")
    public void i_go_to_Cost_and_Improvement() {
       getInitElements();
       homePage.goToCostAndImprovement();
    }
    @When("I click get company names")
    public void i_click_get_company_names() {
       getInitElements();
       homePage.getCompanyNames();
    }

    @Then("all the us companies name should display")
    public void all_the_us_companies_name_should_display() {
       getInitElements();
       homePage.validateSearch4();
    }
    @Given("I click Member Resources")
    public void I_click_Member_Resources() {
        getInitElements();
        homePage.clickMemberResources();
    }
    @When("I click MobileApps")
    public void i_click_MobileApps() {
        getInitElements();
        homePage.clickMobileApps();
    }
    @Then("I can install the app in my phone")
    public void i_can_install_the_app_in_my_phone() {
       getInitElements();
       homePage.validateSearch5();
    }
    @Given("I go to healthCareProvider")
    public void i_go_to_healthCareProvider() {
       getInitElements();
       homePage.healthCareProvider();
    }

    @Given("I click pharmacy")
    public void i_click_pharmacy() {
       getInitElements();
       homePage.pharmacyOption();
    }

    @When("I click Drug list")
    public void i_click_Drug_list() {
        getInitElements();
        homePage.clickDrugList();
    }
    @Then("the information page displays")
    public void the_information_page_displays() {
        getInitElements();
        homePage.validateSearch6();
    }
    @Given("I click on log in")
    public void i_click_on_log_in() {
        getInitElements();
        homePage.clickLogIn();
    }
    @Given("I enter user name")
    public void i_enter_user_name() {
        getInitElements();
        homePage.enterUseName();
    }
    @Given("I enter password")
    public void i_enter_password() {
        getInitElements();
        homePage.enterPassword();
    }
    @When("I click on login button")
    public void i_click_on_login_button() {
        getInitElements();
        homePage.clickLogInButton();
    }
    @Then("wrong user name and password display")
    public void wrong_user_name_and_password_display() {
        getInitElements();
        homePage.validateSearch7();
    }
    @Given("I go to find  forms")
    public void i_go_to_find_forms() {
        getInitElements();
        homePage.goToFindForm();
    }
    @When("I click on dental form")
    public void i_click_on_dental_form() {
        getInitElements();
        homePage.clickDentalForm();
    }
    @Then("the form displays")
    public void the_form_displays() {
        getInitElements();
          homePage.validateSearch8();
    }
    @Given("I go to health care provider")
    public void i_go_to_health_care_provider() {
       getInitElements();
       homePage.healthCareProvider();
    }
    @Given("I click coverage claims")
    public void i_click_coverage_claims() {
      getInitElements();
      homePage.getCoverageClaims();
    }

    @Given("I click coverage policies")
    public void i_click_coverage_policies() {
      getInitElements();
      homePage.getCoveragePolicies();
    }
    @When("I select standard policies")
    public void i_select_standard_policies() {
      getInitElements();
      homePage.getStandardPolicies();
    }
    @Then("I can read the policies")
    public void i_can_read_the_policies() {
     getInitElements();
     homePage.validateSearch9();
    }
    @Given("I select About Us")
    public void i_select_About_Us() {
        getInitElements();
       homePage. selectAboutUS() ;
    }
    @Given("I click on News Room")
    public void i_click_on_News_Room() {
        getInitElements();
        homePage.clickNewsRoom();
    }
    @When("I select news and views")
    public void i_select_news_and_views() {
        getInitElements();
        homePage.selectNewsAndViews();
    }
    @Then("I should see all the articles their")
    public void i_should_see_all_the_articles_their() {
        getInitElements();
        homePage.validateSearch12();
    }
    @Given("I select health care provider")
    public void i_select_health_care_provider() {
       getInitElements();
       homePage.healthCareProvider();
    }
    @When("I click referrals")
    public void i_click_referrals() {
        getInitElements();
        homePage.clickReferrals();
    }
    @Then("I should be able to reach the referral page")
    public void i_should_be_able_to_reach_the_referral_page() {
        getInitElements();
        homePage.validateSearch11();
    }
    @Given("I select health and wellness")
    public void i_select_health_and_wellness() {
        getInitElements();
        homePage.selectHealthWellness();
    }
    @When("I click autism link")
    public void i_click_autism_link() {
       getInitElements();
       homePage.clickAutism();
    }
    @Then("I can read all the information")
    public void i_can_read_all_the_information() {
        getInitElements();
       homePage.validateSearch10();
    }
    @Given("I select glossary link")
    public void i_select_glossary_link() {
      getInitElements();
      homePage.selectGlossary();
    }
    @Given("I click category")
    public void i_click_category() {
        getInitElements();
        homePage.clickCategory();
    }
    @When("I check one of the radio button")
    public void i_check_one_of_the_radio_button() {
       getInitElements();
       homePage.checkRadioButton();
    }
    @Then("Information should be displayed")
    public void information_should_be_displayed() {
        getInitElements();
        homePage.validateSearch15();
    }

































}
