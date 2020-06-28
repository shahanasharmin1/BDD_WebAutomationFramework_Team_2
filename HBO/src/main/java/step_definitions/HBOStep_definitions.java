package step_definitions;

import common.WebAPI;
import home.HBOHomePage;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.Given;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.openqa.selenium.support.PageFactory;

import java.io.IOException;

public class HBOStep_definitions extends WebAPI {

    @Before
    public void openBrowser() throws IOException {
        setUp(false, "browserstack", "OS X", "Catalina", "chrome", "83", "https://www.hbo.com/");
    }

    @After
    public void closeBrowser() {
        cleanUp();
    }

    static HBOHomePage hbohomePage;

    public static void getInitElements() {
        hbohomePage = PageFactory.initElements(driver, HBOHomePage.class);
    }

    @Given("I'm in the home page")
    public void i_m_in_the_home_page() {
        getInitElements();
    }

    @Given("I click sign in  tab")
    public void i_click_sign_in_tab() {
        getInitElements();
        hbohomePage.clickSignIn();
    }

    @Given("I choose HBO plan")
    public void i_choose_HBO_plan() {
        getInitElements();
        hbohomePage.chooseHBOPlan();
    }

    @Given("I get in sign in page")
    public void i_get_in_sign_in_page() {
        getInitElements();
        hbohomePage.getInSignInPage();
    }

    @Given("I enter email address")
    public void i_enter_email_address() {
        getInitElements();
        hbohomePage.enterEmail();
    }

    @Given("I enter password")
    public void i_enter_password() {
        getInitElements();
        hbohomePage.enterPassword();
    }

    @When("I click on login button")
    public void i_click_on_login_button() {
        getInitElements();
        hbohomePage.execute();
    }

    @Then("I should have error")
    public void i_should_have_error() {
        getInitElements();
        hbohomePage.validateLogIn();
    }

    @Given("I select movie tab")
    public void i_select_movie_tab() {
      getInitElements();
      hbohomePage.selectMovies();
    }
    @Given("I mouse hover to Choose documentaries")
    public void i_mouse_hover_to_Choose_documentaries() {
      getInitElements();
      hbohomePage.mouseHoverByXpath("//*[@id=\"root\"]/main/div[2]/header/div[2]/div/div/div/div/ul/li[2]/div/a");
    }
    @Given("wait some time")
    public void wait_some_time() {
     getInitElements();
     hbohomePage.timeOuts();
    }
    @When("I click documentaries")
    public void i_click_documentaries() {
     getInitElements();
     hbohomePage.chooseDocumentaries();
    }
    @Then("The page should displays")
    public void the_page_should_displays() {
      getInitElements();
      hbohomePage.validateDocPage();
    }
    @Given("I select series tab")
    public void i_select_series_tab() {
       getInitElements();
       hbohomePage.selectSeries();
    }
    @Given("I hover to all series")
    public void i_hover_to_all_series() {
       getInitElements();
       hbohomePage.mouseHoverByXpath("//body/div/main/div/header/div/div/div[1]/div[1]/div[1]/ul[1]/li[2]/div[1]/a[1]");
    }
    @When("I click on all series")
    public void i_click_on_all_series() {
        getInitElements();
        hbohomePage.chooseAllSeries();
    }
    @Then("the page should display")
    public void the_page_should_display() {
         getInitElements();
         hbohomePage.validateAllSeriesPage();
    }
    @Given("I select specials tab")
    public void i_select_specials_tab() {
         getInitElements();
         hbohomePage.selectSpecials();
    }
    @Given("I hover to all specials")
    public void i_hover_to_all_specials() {
      getInitElements();
      hbohomePage.mouseHoverByXpath("//*[@id=\"root\"]/main/div[2]/header/div[2]/div/div/div/div/ul/li[2]/div/a");
    }
    @When("I click on all specials")
    public void i_click_on_all_specials() {
       getInitElements();
       hbohomePage.chooseAllSpecials();
    }
    @Then("the page is displayed")
    public void the_page_is_displayed() {
       getInitElements();
       hbohomePage.validateAllSpecialsPage();
    }
    @Given("I select kids")
    public void i_select_kids() {
     getInitElements();
     hbohomePage.selectKids();
    }
    @Given("I mouse hover to roy element")
    public void i_mouse_hover_to_roy_element() {
     getInitElements();
     hbohomePage.mouseHoverByXpath("//body/div/main/div/header/div/div/div[1]/div[1]/div[1]/ul[1]/li[2]/div[1]/a[1]");
    }
    @When("I click on roy")
    public void i_click_on_roy() {
      getInitElements();
      hbohomePage.chooseRoy();
    }
    @Then("I can see the page")
    public void i_can_see_the_page() {
       getInitElements();
       hbohomePage.validateKidsPage();
    }
    @Given("I select sport")
    public void i_select_sport() {
       getInitElements();
       hbohomePage.selectSports();
    }
    @Given("I mouse hover all sport element")
    public void i_mouse_hover_all_sport_element() {
      getInitElements();
      hbohomePage.mouseHoverByXpath("//body/div/main/div/header/div/div/div[1]/div[1]/div[1]/ul[1]/li[2]/div[1]/a[1]");
    }
    @When("I click all sport")
    public void i_click_all_sport() {
      getInitElements();
      hbohomePage.chooseALLSports();
    }

    @Then("I should see the page")
    public void i_should_see_the_page() {
     getInitElements();
     hbohomePage.validateSportsPage();
    }

    @When("I click about tab")
    public void i_click_about_tab() {
       getInitElements();
       hbohomePage.clickAboutTab();
    }
    @Then("I should see the page display")
    public void i_should_see_the_page_display() {
        getInitElements();
        hbohomePage.validateUrl();
    }
    @Given("I select facebook tab")
    public void i_select_facebook_tab() {
       getInitElements();
       hbohomePage.facebookTab();
    }
    @Given("I mouse hover to facebook photos")
    public void i_mouse_hover_to_facebook_photos() {
       getInitElements();
       hbohomePage.mouseHoverByXpath("//span[contains(text(),'Photos')]");
    }
    @When("I click facebook photos")
    public void i_click_facebook_photos() {
        getInitElements();
        hbohomePage.fbPhotos();
    }
    @Then("I should be in the facebook photo page")
    public void i_should_be_in_the_facebook_photo_page() {
       getInitElements();
       hbohomePage.validateFbTab();
    }
    @When("I click free episode  tab")
    public void i_click_free_episode_tab() {
        getInitElements();
        hbohomePage.selectFreeEpisode();
    }
    @Then("I should see the free episode page")
    public void i_should_see_the_free_episode_page() {
       getInitElements();
       hbohomePage.validateFreeEpisode();
    }

    @When("I click privacy policy   tab")
    public void i_click_privacy_policy_tab() {
        getInitElements();
        hbohomePage.selectPrivacyPolicy();
    }
    @Then("I should see the privacy policy page")
    public void i_should_see_the_privacy_policy_page() {
        getInitElements();
        hbohomePage.validatePrivacyPolicy();
    }



}













