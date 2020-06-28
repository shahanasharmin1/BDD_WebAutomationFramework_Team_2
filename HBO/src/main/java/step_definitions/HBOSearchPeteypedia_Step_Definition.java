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

public class HBOSearchPeteypedia_Step_Definition extends WebAPI {
    @Before
    public void openBrowser() throws IOException {
        setUp(false, "browserstack", "OS X", "10", "chrome", "83", "https://www.hbo.com/");
    }
    @After
    public void closeBrowser() { cleanUp(); }
    static HomePage homePage; // Reference Variable/ object of HomePage
    public static void getInitElements() {
        homePage = PageFactory.initElements(driver, HomePage.class);
    }

    @Given("I am at HBO main homePage")
    public void i_am_at_HBO_main_homePage() {
        getInitElements();
    }
    @When("I am at HBO homePage")
    public void i_am_at_HBO_homePage() {
       getInitElements(); }
    @When("I should see Peteypedia  in homepage")
    public void i_should_see_Peteypedia_in_homepage() {
      getInitElements(); }
    @When("I click in Peteypedia button")
    public void i_click_in_Peteypedia_button() {
        getInitElements();
        //homePage.getSearchPeteypedia();
    }
    @Then("I should PETEYPEDIA in next page")
    public void i_should_PETEYPEDIA_in_next_page() {
        getInitElements();
       homePage.navigateForward(); }
    @When("I should see {string} in PETEYPEDIA page")
    public void i_should_see_in_PETEYPEDIA_page(String string) {
        getInitElements();
    }
    @Then("I should see my \"\"MEMO: The Computer and You  {string}")
    public void i_should_see_my_MEMO_The_Computer_and_You(String string) {
        getInitElements();
        //homePage.getSearchTheComAndYou();
    }
    @Then("I should see my \"\"LEGAL: The Road to Reparations {string}")
    public void i_should_see_my_LEGAL_The_Road_to_Reparations(String string) {
        getInitElements();
        //homePage.getSearchTheRoadToReparations();
    }
    @Then("I should see my \"\"EVIDENCE: Four Letters  {string}")
    public void i_should_see_my_EVIDENCE_Four_Letters(String string) {
        getInitElements();
       // homePage.getSearchForFourLetters();
    }
    @When("I should see \"EVIDENCE: \"Excalibur,{string} in PETEYPEDIA page")
    public void i_should_see_EVIDENCE_Excalibur_in_PETEYPEDIA_page(String string) {
       getInitElements();
      // homePage.getSearchForEvidence();
    }
//    @Then("I should see my \"\"EVIDENCE: {string} MerlinCorp. Raid \\({int}\\/{int}\\/{int}){string}")
//    public void i_should_see_my_EVIDENCE_MerlinCorp_Raid(String string, Integer int1, Integer int2, Integer int3, String string2) {
//       getInitElements();
//    }
    @Then("I should see my \"\"MEDIA: NOSTALGIA \\({int}) {string}")
    public void i_should_see_my_MEDIA_NOSTALGIA(Integer int1, String string) {
        getInitElements();
      // homePage.getSearchForMediaNostalgia();
    }
    @When("I should see \"CLIPPING: \"Lady Trieu: Fact or Fiction\"\" in PETEYPEDIA page")
    public void i_should_see_CLIPPING_Lady_Trieu_Fact_or_Fiction_in_PETEYPEDIA_page() {
        getInitElements();
       // homePage.getSearchForClipping();
    }
    @Then("I should see my \"\"CLIPPING: {string}{string}")
    public void i_should_see_my_CLIPPING(String string, String string2) {
        getInitElements();
    }
    @When("I should see \"MEMO: The Origin Story of \"Sister Night\"\" in PETEYPEDIA page")
    public void i_should_see_MEMO_The_Origin_Story_of_Sister_Night_in_PETEYPEDIA_page() {
        getInitElements();
       // homePage.getSearchForSisterNight();
    }
    @Then("I should see my \"\"MEMO: The Origin Story of {string}{string}")
    public void i_should_see_my_MEMO_The_Origin_Story_of(String string, String string2) {
       getInitElements();
    }
    @Then("I should see my \"\"MEMO: Fogdancing {string}")
    public void i_should_see_my_MEMO_Fogdancing(String string) {
        getInitElements();
       // homePage.getSearchForFogdancing();
    }
    @Then("I should see my \"\"MEMO: Dale Petey {string}")
    public void i_should_see_my_MEMO_Dale_Petey(String string) {
        getInitElements();
       // homePage.getSearchForDalePetey();
    }
}
