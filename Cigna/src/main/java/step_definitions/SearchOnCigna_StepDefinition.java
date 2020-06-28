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
    static HomePage homePage; // Reference Variable/ object of HomePage
    public static void getInitElements() {
        homePage = PageFactory.initElements(driver, HomePage.class);
    }


    @Given("I am at cigna.com homepage")
    public void i_am_at_cigna_com_homepage() {
     getInitElements();
    }

    @When("I click on a  the Health Care Providers")
    public void i_click_on_a_the_Health_Care_Providers() {
    homePage.clickonHealthCareProviders();
    }

    @Then("I am able to see  the health care providers")
    public void i_am_able_to_see_the_health_care_providers() {
    getInitElements();
    }

    //Scroll Down the page

    @When("I scroll down the webpage byPixel")
    public void i_scroll_down_the_webpage_byPixel() {
    getInitElements();
    homePage.scrollDownTheWebPage();
    }

    @Then("Then I will see the the page are scrolled down")
    public void then_I_will_see_the_the_page_are_scrolled_down() {
    getInitElements();
    }

    //Scroll Down the pageTillEnd

    @When("i scroll till the end")
    public void i_scroll_till_the_end() {
    getInitElements();
    homePage.scrollDownTillEnd();
    }

    @Then("I will see the the page are scrolled tillend")
    public void i_will_see_the_the_page_are_scrolled_tillend() {
    getInitElements();
    }

    //search footer part
    @When("I am at Aboutcigna  in the homepage")
    public void i_am_at_Aboutcigna_in_the_homepage() {

    }

    @When("I need to clickcompany profilein Footer part")
    public void i_need_to_clickcompany_profilein_Footer_part() {
  //  homePage.clickcompanyprofile();
    }

    @When("I should seecompany profileresults")
    public void i_should_seecompany_profileresults() {
    getInitElements();
    }

    @Then("I am able to validate the item")
    public void i_am_able_to_validate_the_item() {

    }

    @When("I need to clickcareersin Footer part")
    public void i_need_to_clickcareersin_Footer_part() {
  //  homePage.clickconcareers();
    }

    @When("I should seecareersresults")
    public void i_should_seecareersresults() {

    }

    @When("I need to clicknewsroomin Footer part")
    public void i_need_to_clicknewsroomin_Footer_part() {
  //  homePage.clickonnewsroom();
    }

    @When("I should seenewsroomresults")
    public void i_should_seenewsroomresults() {

    }

    @When("I need to clickinvestorsin Footer part")
    public void i_need_to_clickinvestorsin_Footer_part() {
  //  homePage.clickoninvestors();
    }

    @When("I should seeinvestorsresults")
    public void i_should_seeinvestorsresults() {

    }

    @When("I need to clicksuppliersin Footer part")
    public void i_need_to_clicksuppliersin_Footer_part() {
 //   homePage.clickonsuppliers();
    }

    @When("I should seesuppliersresults")
    public void i_should_seesuppliersresults() {

    }

    @When("I need to clickThird party Administratorsin Footer part")
    public void i_need_to_clickThird_party_Administratorsin_Footer_part() {
  //  homePage.clickonthirdpartyadministrators();
    }

    @When("I should seeThird party Administratorsresults")
    public void i_should_seeThird_party_Administratorsresults() {

    }

    @When("I need to clickinternationalin Footer part")
    public void i_need_to_clickinternationalin_Footer_part() {
 //   homePage.clickoninternational();
    }

    @When("I should seeinternationalresults")
    public void i_should_seeinternationalresults() {

    }
    //Hover on Coverage and Claims
    @Given("I hover on Coverage and Claims")
    public void i_hover_on_Coverage_and_Claims() {
     getInitElements();
    }

    @When("I click on a Coverage and Claims")
    public void i_click_on_a_Coverage_and_Claims() {
     homePage.HoveronCoverageandClaims();
    }

    @Then("I will see the Coverage and Claims")
    public void i_will_see_the_Coverage_and_Claims() {
    getInitElements();
    }
    //Click on LogIn Page

    @When("I click on LogIn button")
    public void i_click_on_LogIn_button() {
    getInitElements();
  //  homePage.clickonLogIn();
    }

    @Then("I am able to see LogIn Page")
    public void i_am_able_to_see_LogIn_Page() {
    getInitElements();
    }
   //click on UserId:
   @When("I click on UserID")
   public void i_click_on_UserID() {
    getInitElements();
 //   homePage.clickonuserID();
   }

    @Then("I am able to see the inbox to write my  UserId")
    public void i_am_able_to_see_the_inbox_to_write_my_UserId() {
    getInitElements();
    }
  //click on Logo
   @When("I click on Logo")
   public void i_click_on_Logo() {
   getInitElements();
   homePage.clickonLogo();
  }

    @Then("I am able to see the Logo of Cigna")
    public void i_am_able_to_see_the_Logo_of_Cigna() {
    getInitElements();
    }
   //Hover on Medicare
   @Given("I hover on Medicare")
   public void i_hover_on_Medicare() {
   getInitElements();
 //  homePage.HoveronMedicare();
   }

    @When("I click on a Medicare")
    public void i_click_on_a_Medicare() {
   getInitElements();
    }

    @Then("I will see the Medicare related Items")
    public void i_will_see_the_Medicare_related_Items() {
    getInitElements();
    }

    //Hover on Plans and services:
    @When("I click on the plans and services")
    public void i_click_on_the_plans_and_services() {
    getInitElements();
  //  homePage.mouseHoverByXpath("");
    }

    @Then("I will see all the items included in plans and services")
    public void i_will_see_all_the_items_included_in_plans_and_services() {
    getInitElements();
    }


























}
