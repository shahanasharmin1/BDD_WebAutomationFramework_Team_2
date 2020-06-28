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

public class SearchOnHBO_Step_Definition extends WebAPI {

    @Before
    public void openBrowser() throws IOException {
        setUp(false, "browserstack", "windows", "10", "chrome", "83", "https://www.hbo.com/");
    }
    @After
    public void closeBrowser() {
        cleanUp();
    }
    static HomePage homePage; // Reference Variable/ object of HomePage
    public static void getInitElements() {
        homePage = PageFactory.initElements(driver, HomePage.class);
    }


   // Click on SignIn
    @When("I click on logIn button")
    public void i_click_on_logIn_button() {
   // homePage.clicksignIn();
    }

    @Then("I am able to see signIn options")
    public void i_am_able_to_see_signIn_options() {
    getInitElements();
    }
    //Header Item Search
    @When("I am at HBO homepage")
    public void i_am_at_HBO_homepage() {
    getInitElements();
    }

    @When("I need to clickSERIESin header part")
    public void i_need_to_clickSERIESin_header_part() {
    getInitElements();
    homePage.clickseries();
    }
    @When("I should seeSERIESresults")
    public void i_should_seeSERIESresults() {

    }

    @Then("I am able to validate the item")
    public void i_am_able_to_validate_the_item() {
    homePage.Validatetext("text");
    }

    @When("I need to clickMOVIESin header part")
    public void i_need_to_clickMOVIESin_header_part() {
    homePage.clickmovies();
    }

    @When("I should seeMOVIESresults")
    public void i_should_seeMOVIESresults() {

    }

    @When("I need to clickSPECIALSin header part")
    public void i_need_to_clickSPECIALSin_header_part() {
    homePage.clickspecials();
    }

    @When("I should seeSPECIALSresults")
    public void i_should_seeSPECIALSresults() {

    }

    @When("I need to clickSPORTSin header part")
    public void i_need_to_clickSPORTSin_header_part() {
    homePage.clicksports();
    }

    @When("I should seeSPORTSresults")
    public void i_should_seeSPORTSresults() {

    }

    @When("I need to clickKIDSin header part")
    public void i_need_to_clickKIDSin_header_part() {
    homePage.clickkids();
    }

    @When("I should seeKIDSresults")
    public void i_should_seeKIDSresults() {

    }
   //Scroll Down the Webpage
   @When("i scroll down the webPage byPixel")
   public void i_scroll_down_the_webPage_byPixel() {
    getInitElements();
   homePage.scrollDownTheWebPage();
   }

    @Then("I will see the the page are scrolled down")
    public void i_will_see_the_the_page_are_scrolled_down() {

    }
   //Scroll Down tillEnd
   @When("i scroll till the end")
   public void i_scroll_till_the_end() {
   homePage.scrollDownTillEnd();
   }

    @Then("I will see the the page are scrolled tillend")
    public void i_will_see_the_the_page_are_scrolled_tillend() {
    }
   //Click on Logo
   @When("I click on HBO Logo")
   public void i_click_on_HBO_Logo() {

   }

    @Then("I will be able to get it")
    public void i_will_be_able_to_get_it() {

    }
  //  hover on search button
    @When("I click search button")
    public void i_click_search_button() {
   // homePage.mouseHoverByXpath("");
    }

    @Then("I will the all the items in the search icon")
    public void i_will_the_all_the_items_in_the_search_icon() {

    }
    //Drop Down
    @When("I click on the Drop down button of All Series")
    public void i_click_on_the_Drop_down_button_of_All_Series() {
  //  homePage.dropdownallsearies();
    }

    @Then("I should get all the options of it")
    public void i_should_get_all_the_options_of_it() {

    }

   //click on Image
   @When("I click on Image")
   public void i_click_on_Image() {
 //  homePage.clickonImage();
   }

    @Then("I am able to validate the HBO Homepage")
    public void i_am_able_to_validate_the_HBO_Homepage() {
    getInitElements();
    }
  //click on free Episodes
   @When("I click on it")
   public void i_click_on_it() {
 //  homePage.clickonfreeepisodes();
  }

    @Then("I can see see all Episodes of HBO")
    public void i_can_see_see_all_Episodes_of_HBO() {
    getInitElements();
    }































}




