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

public class SearchOnGeico_Step_Definition extends WebAPI {

    @Before
    public void openBrowser() throws IOException {
        setUp(false, "browserstack", "windows", "10", "chrome", "83", "https://www.geico.com/");
    }
    @After
    public void closeBrowser() {
        cleanUp();
    }
    static HomePage hmp; // Reference Variable/ object of HomePage

    public static void getInitElements() {
        hmp = PageFactory.initElements(driver, HomePage.class);
    }

    //log in
    @Given("I am at Geico Home Page")
    public void i_am_at_Geico_Home_Page() {
    getInitElements();
    }
    @When("I click on log in button")
    public void i_click_on_log_in_button() {
     getInitElements();
     hmp.clickonlogInButton();
    }

    @Then("I should see the logIn option")
    public void i_should_see_the_logIn_option() {
    }
    //Log In with InvalidID

    @Given("user enters first idShamima")
    public void user_enters_first_idShamima() {

    }

    @Given("user enters first password Pl944985")
    public void user_enters_first_password_Pl944985() {

    }

    @When("user clicks sign in button")
    public void user_clicks_sign_in_button() {

    }

    @Then("user sees Forgot ID?Password")
    public void user_sees_Forgot_ID_Password() {

    }

    @Given("user enters first idTanjina")
    public void user_enters_first_idTanjina() {

    }

    @Given("user enters first password pl56789")
    public void user_enters_first_password_pl56789() {

    }

    @Given("user enters first idShahana")
    public void user_enters_first_idShahana() {

    }

    @Given("user enters first password pl145678")
    public void user_enters_first_password_pl145678() {

    }

    @Given("user enters first idMezbah")
    public void user_enters_first_idMezbah() {

    }

    @Given("user enters first password pl679540")
    public void user_enters_first_password_pl679540() {

    }

    @Given("user enters first idAsif")
    public void user_enters_first_idAsif() {

    }

    @Given("user enters first password pl678943")
    public void user_enters_first_password_pl678943() {

    }

    //Scroll down theWebPage:
    @When("i scroll down the webPage byPixel")
    public void i_scroll_down_the_webPage_byPixel() {
     getInitElements();
     hmp.scrollDownTheWebPage();
    }

    @Then("I will see the the page are scrolled down")
    public void i_will_see_the_the_page_are_scrolled_down() {
     getInitElements();
    }
    //scroll down tillEnd
    @When("i scroll till the end")
    public void i_scroll_till_the_end() {
     getInitElements();
     hmp.scrollDownTillEnd();
    }

    @Then("I will see the the page are scrolled tillend")
    public void i_will_see_the_the_page_are_scrolled_tillend() {
    getInitElements();
    }

    //search Footer Part
    @When("I am at Geico Careers in the homepage")
    public void i_am_at_Geico_Careers_in_the_homepage() {
    getInitElements();
    }

    @When("I need to clickCustomer Servicein Footer part")
    public void i_need_to_clickCustomer_Servicein_Footer_part() {
    getInitElements();
 //   hmp.clickoncustomerservice();
    }

    @When("I should seeCustomer Serviceresults")
    public void i_should_seeCustomer_Serviceresults() {
    getInitElements();

    }

    @Then("I am able to validate the item")
    public void i_am_able_to_validate_the_item() {
    getInitElements();
 //   hmp.Validatetext("text");
    }

    @When("I need to clickSalesin Footer part")
    public void i_need_to_clickSalesin_Footer_part() {
    getInitElements();
    hmp.clickonsales();
    }

    @When("I should seeSalesresults")
    public void i_should_seeSalesresults() {
    getInitElements();
    }

    @When("I need to clickClaimsin Footer part")
    public void i_need_to_clickClaimsin_Footer_part() {
 //   hmp.clickonclaims();
    }

    @When("I should seeClaimsresults")
    public void i_should_seeClaimsresults() {
    getInitElements();
    }

    @When("I need to clickLeadership Developmentin Footer part")
    public void i_need_to_clickLeadership_Developmentin_Footer_part() {
//    hmp.clickonleadershipdevelopment();
    }

    @When("I should seeLeadership Developmentresults")
    public void i_should_seeLeadership_Developmentresults() {
    getInitElements();
    }

    @When("I need to clickAuto Damagein Footer part")
    public void i_need_to_clickAuto_Damagein_Footer_part() {
    getInitElements();
 //   hmp.clickonautodamage();
    }

    @When("I should seeAuto Damageresults")
    public void i_should_seeAuto_Damageresults() {
    getInitElements();
    }

    @When("I need to clickCorporate & Technologyin Footer part")
    public void i_need_to_clickCorporate_Technologyin_Footer_part() {
    getInitElements();
//    hmp.clickoncorporateandtechnology();
    }

    @When("I should seeCorporate & Technologyresults")
    public void i_should_seeCorporate_Technologyresults() {
    getInitElements();
    }

    //Click on Radio Button
    @When("I click on RadioButton")
    public void i_click_on_RadioButton() {
    getInitElements();
 //   hmp.clickonRadioButton();
    }

    @Then("The RadioButton supposed to be clicked")
    public void the_RadioButton_supposed_to_be_clicked() {
    getInitElements();
    }
    //Click on CheckBox:
    @When("I click on checkBox")
    public void i_click_on_checkBox() {
    getInitElements();
//    hmp.checkBox();
    }

    @Then("The checkBox to be clicked")
    public void the_checkBox_to_be_clicked() {
     getInitElements();
    }

    //Click on Logo
    @When("I click on Logo")
    public void i_click_on_Logo() {
    getInitElements();
  //  hmp.clickonLogo();
    }
    @Then("The Logo element supposed to be clicked to validate the homepage")
    public void the_Logo_element_supposed_to_be_clicked_to_validate_the_homepage() {
    getInitElements();
    }

    //Click on Image
    @When("I click on Image")
    public void i_click_on_Image() {
    getInitElements();
   // hmp.clickonimage();
    }

    @Then("I am able to validate the geico Homepage")
    public void i_am_able_to_validate_the_geico_Homepage() {
    getInitElements();
    }

    //Hover on Access Your Policy

    @Given("I hover on Access Your Policy")
   public void i_hover_on_Access_Your_Policy() {
   getInitElements();
 //  hmp.hoveronAccessYourPolicy();
   }
   @When("I click Access Your Policy")
    public void i_click_Access_Your_Policy() {
    getInitElements();
    }
    @Then("I will enter Access Your Policy options")
    public void i_will_enter_Access_Your_Policy_options() {

    }

    //Click on Track a claim

    @When("I click on Track a claim")
    public void i_click_on_Track_a_claim() {
    getInitElements();
    hmp.clickonTrackaclaim();
    }
    @Then("The Track a claim options supposed to be clicked")
    public void the_Track_a_claim_options_supposed_to_be_clicked() {
    getInitElements();
    }
    //Click on Search Button
    @When("I click on search Button")
    public void i_click_on_search_Button() {
    getInitElements();
    hmp.clickonsearchbutton();
    }
    @Then("The search Button supposed to be clicked")
    public void the_search_Button_supposed_to_be_clicked() {
     getInitElements();
    }

    //Report An Incident
    @When("I click on REPORTANINCIDENT")
    public void i_click_on_REPORTANINCIDENT() {
    getInitElements();
    hmp.REPORTANINCIDENT();
    }

    @Then("The  REPORTANINCIDENT options supposed to be clicked")
    public void the_REPORTANINCIDENT_options_supposed_to_be_clicked() {
    getInitElements();
    }
    //Information about Geico
    @When("I click on Infomation")
    public void i_click_on_Infomation() {
    getInitElements();
    hmp.clickonInformation();
    }

    @Then("I am able to search Information about Geico")
    public void i_am_able_to_search_Information_about_Geico() {
    getInitElements();
    }

    //DropDown
    @When("I click on the Drop down button")
    public void i_click_on_the_Drop_down_button() {
 //   hmp.clickonDropDownbutton();
    }
    @Then("I should get all the options of the Insurance")
    public void i_should_get_all_the_options_of_the_Insurance() {
    getInitElements();
    }

   //Select Vehicle Insurance by DropDown
   @When("I select the Vechile Insurance")
   public void i_select_the_Vechile_Insurance() {
   getInitElements();
 //  hmp.selectVehicleInsurancebyDropDown();;
   }

    @Then("I should get the Vechile Insurance options")
    public void i_should_get_the_Vechile_Insurance_options() {
    getInitElements();
    }
    //Drop Down on Identity Protection
    @Given("I click on the drop down button of auto tab and i select the identity protection")
    public void i_click_on_the_drop_down_button_of_auto_tab_and_i_select_the_identity_protection() {
    getInitElements();
//    hmp.userclickonDropButton();
    }
    @When("I click auto tab")
    public void i_click_auto_tab() {
    getInitElements();
    }
    @Then("I  am able to select identity protection")
    public void i_am_able_to_select_identity_protection() {
    getInitElements();
    }
}






















