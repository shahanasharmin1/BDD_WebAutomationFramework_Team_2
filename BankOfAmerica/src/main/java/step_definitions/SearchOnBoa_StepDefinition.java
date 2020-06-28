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

public class SearchOnBoa_StepDefinition extends WebAPI {
    @Before
    public void openBrowser() throws IOException {
        setUp(false, "browserstack", "windows", "10", "chrome", "83", "https://www.bankofamerica.com/");
    }

    @After
    public void closeBrowser() {
        cleanUp();
    }
    static HomePage homePage; // Reference Variable/ object of HomePage
    public static void getInitElements() {
        homePage = PageFactory.initElements(driver, HomePage.class);
    }

    //login
    @Given("user is already in BOA home page")
    public void user_is_already_in_BOA_home_page() {
    getInitElements();
    }

    @Given("user enters shamima")
    public void user_enters_shamima() {
    getInitElements();
     homePage.enterID();
    }

    @Given("user enters pl944985")
    public void user_enters_pl944985() {
    getInitElements();
    homePage.enterpassword();
    }

    @When("user clicks sign in button")
    public void user_clicks_sign_in_button() {
     getInitElements();
        homePage.clicksignbutton();
    }

    @Then("user sees Forgot ID\\/Password")
    public void user_sees_Forgot_ID_Password() {
    getInitElements();
  //  homePage.validationLogIn();
    }

   // search credit cards using parameter
   @Given("I Enter Items in search input field")
   public void i_Enter_Items_in_search_input_field(io.cucumber.datatable.DataTable dataTable) {

   }

    @When("I Click search button")
    public void i_Click_search_button() {

    }

    @Then("I should see Expected Items")
    public void i_should_see_Expected_Items(io.cucumber.datatable.DataTable dataTable) {

    }

    //Scroll Down
   @When("I scroll down the webpage byPixel")
   public void i_scroll_down_the_webpage_byPixel() {
   homePage.scrollDownTheWebPage();
  }

    @Then("Then I will see the the page are scrolled down")
    public void then_I_will_see_the_the_page_are_scrolled_down() {
   getInitElements();
    }

   //Scroll Down tillend
   @When("i scroll till the end")
   public void i_scroll_till_the_end() {
    homePage.scrollDownTillEnd();
   }

    @Then("I will see the the page are scrolled tillend")
    public void i_will_see_the_the_page_are_scrolled_tillend() {
     getInitElements();
    }
   //Hover on Home Loans
   @Given("I hover on Home Loans")
   public void i_hover_on_Home_Loans() {
    getInitElements();
       // homePage.mouseHoverByXpath("");
   }

   //search Footer using parameter

       @When("I am at BOA  homepage")
       public void i_am_at_BOA_homepage() {

       }

       @When("I need to clicklocationsin Footer part")
       public void i_need_to_clicklocationsin_Footer_part() {

       }

       @When("I should seelocationsresults")
       public void i_should_seelocationsresults() {

       }

       @Then("I am able to validate the item")
       public void i_am_able_to_validate_the_item() {

       }

       @When("I need to clickcontact usin Footer part")
       public void i_need_to_clickcontact_usin_Footer_part() {

       }

       @When("I should seecontact usresults")
       public void i_should_seecontact_usresults() {

       }

       @When("I need to clickhelpin Footer part")
       public void i_need_to_clickhelpin_Footer_part() {

       }

       @When("I should seehelpresults")
       public void i_should_seehelpresults() {

       }

       @When("I need to clickaccessible bankingin Footer part")
       public void i_need_to_clickaccessible_bankingin_Footer_part() {

       }

       @When("I should seeaccessible bankingresults")
       public void i_should_seeaccessible_bankingresults() {

       }

       @When("I need to clickcareersin Footer part")
       public void i_need_to_clickcareersin_Footer_part() {

       }

       @When("I should seecareersresults")
       public void i_should_seecareersresults() {

       }

       @When("I need to clickprivacy and securityin Footer part")
       public void i_need_to_clickprivacy_and_securityin_Footer_part() {

       }

       @When("I should seeprivacy and securityresults")
       public void i_should_seeprivacy_and_securityresults() {

       }

       @When("I need to clickmcafeein Footer part")
       public void i_need_to_clickmcafeein_Footer_part() {

       }

       @When("I should seemcafeeresults")
       public void i_should_seemcafeeresults() {

       }

       @When("I need to clicksitemapin Footer part")
       public void i_need_to_clicksitemapin_Footer_part() {

       }

       @When("I should seesitemapresults")
       public void i_should_seesitemapresults() {

       }

       @When("I need to clickadvertising practicein Footer part")
       public void i_need_to_clickadvertising_practicein_Footer_part() {

       }

       @When("I should seeadvertising practiceresults")
       public void i_should_seeadvertising_practiceresults() {

       }

       @When("I need to clickfeedbackin Footer part")
       public void i_need_to_clickfeedbackin_Footer_part() {

       }

       @When("I should seefeedbackresults")
       public void i_should_seefeedbackresults() {

       }

       @When("I need to clickview full online banking sitein Footer part")
       public void i_need_to_clickview_full_online_banking_sitein_Footer_part() {

       }

       @When("I should seeview full online banking siteresults")
       public void i_should_seeview_full_online_banking_siteresults() {

       }

    //Hover on Home Loans
    @When("I click on a Home Loans")
    public void i_click_on_a_Home_Loans() {
    getInitElements();
  //  homePage.mouseHoverByXpath("");
    }

    @Then("I will validate the Home Loan page")
    public void i_will_validate_the_Home_Loan_page() {
    getInitElements();
    }


    //click on Auto loans
   @When("I click on Auto loans")
   public void i_click_on_Auto_loans() {
 //  homePage.clickonautoloans();
   }

    @Then("I can get infomation on how In can apply for the loan")
    public void i_can_get_infomation_on_how_In_can_apply_for_the_loan() {
    getInitElements();
    }

  //search mobile banking

    @Given("I am at BOA Home Page")
    public void i_am_at_BOA_Home_Page() {

    }

    @Given("I enter mobile banking on the search box in homepage")
    public void i_enter_mobile_banking_on_the_search_box_in_homepage() {

    }

    @When("I click search button")
    public void i_click_search_button() {

    }

    @Then("I should see mobile banking")
    public void i_should_see_mobile_banking() {

    }






    //click on logo
   @When("I click on logo")
   public void i_click_on_logo() {
 //  homePage.clickonlogo();
   }

    @Then("I can validate the page")
    public void i_can_validate_the_page() {

    }
    //clickon image
  @When("I click on image")
  public void i_click_on_image() {
 // homePage.clickonimage();
  }

    @Then("I am able to see the image")
    public void i_am_able_to_see_the_image() {

    }











}
