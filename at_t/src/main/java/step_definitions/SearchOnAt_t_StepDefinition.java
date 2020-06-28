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

public class SearchOnAt_t_StepDefinition extends WebAPI {
    @Before
    public void openBrowser() throws IOException {
        setUp(false, "browserstack", "OS X", "Catalina", "chrome", "83", "https://www.att.com/");
    }

    @After
    public void closeBrowser() {
        cleanUp();
    }
    static HomePage homePage;
    public static void getInitElements() {
        homePage = PageFactory.initElements(driver, HomePage.class);
    }


    @Given("I'm in AT&T  deals page")
    public void i_m_in_AT_T_deals_page() {
        getInitElements();
    }
    @Given("I select tv&internet deals")
    public void i_select_tv_internet_deals() {
        getInitElements();
        homePage.checkDeals();
    }
    @Given("hover to select internet_tv")
    public void hover_to_select_internet_tv() {
        getInitElements();
        mouseHoverByXpath("//span[contains(text(),'Deals')]");
    }
    @When("I click internet_tv link")
    public void i_click_internet_tv_link() {
       getInitElements();
       homePage.selectInternet_Tv();
    }
    @Then("the page should open")
    public void the_page_should_open() {
       getInitElements();
       homePage.validateDeals();
    }
    @Given("I select Support")
    public void i_select_Support() {
      getInitElements();
      homePage.selectSupport();
    }
    @Given("I click SingIn")
    public void i_click_SingIn() {
      getInitElements();
      homePage.clickSingIn();
    }
    @Given("I enter UserId")
    public void i_enter_UserId() {
      getInitElements();
      homePage.enterUserId();
    }
    @Given("I enter Password")
    public void i_enter_Password() {
     getInitElements();
     homePage.enterPassword();
    }
    @When("I click signIn Button")
    public void i_click_signIn_Button() {
       homePage.signInButton();
    }
    @Then("I should see error message")
    public void i_should_see_error_message() {
       getInitElements();
       homePage.validateSignIn();
    }
    @Given("I select prepaid link")
    public void i_select_prepaid_link() {
        getInitElements();
        homePage.selectPrepaid();
    }
    @Given("I  choose phone plan;")
    public void i_choose_phone_plan() {
        getInitElements();
        homePage.choosePhonePlan();
    }
    @When("I explore apple options")
    public void i_explore_apple_options() {
       getInitElements();
       homePage.exploreAppleOptions();
    }
    @Then("I can see the offers for apple")
    public void i_can_see_the_offers_for_apple() {
        getInitElements();
        homePage.validatePhonePlan();
    }
    @Given("I  choose Wireless")
    public void i_choose_Wireless() {
       getInitElements();
       homePage.chooseWireless();
    }
    @Given("I mouse hover to wireless deals")
    public void i_mouse_hover_to_wireless_deals() {
        getInitElements();
      homePage.mouseHoverByXpath("//span[contains(text(),'Wireless deals')]");
    }
    @When("I click wireless deals")
    public void i_click_wireless_deals() {
      getInitElements();
      homePage.exploreWirelessDeals();
    }
    @Then("I can see all the deals")
    public void i_can_see_all_the_deals() {
      getInitElements();
      homePage.validateWirelessDeals();
    }
    @Given("I select Tv link")
    public void i_select_Tv_link() {
      getInitElements();
      homePage.selectTv();
    }
    @Given("I mouse hover to channel lineup")
    public void i_mouse_hover_to_channel_lineup() {
      getInitElements();
      homePage.mouseHoverByXpath("//*[@id=\"HEADBAND01\"]/span/a/span");
    }
    @When("I click channel lineUp")
    public void i_click_channel_lineUp() {
      getInitElements();
      homePage.clickChannelLineUp();
    }
    @Then("I should get the channels option")
    public void i_should_get_the_channels_option() {
        getInitElements();
        homePage.validateTvOptions();
    }
    @Given("I select prepaid tab")
    public void i_select_prepaid_tab() {
      getInitElements();
      homePage.selectPrepaid();
    }
    @Given("I wait some time")
    public void i_wait_some_time() {
     getInitElements();
     homePage. waitTime();
    }
    @When("I click prepaid deals")
    public void i_click_prepaid_deals() {
      getInitElements();
      homePage.prepaidDeals();
    }
    @Then("I should see the page opened")
    public void i_should_see_the_page_opened() {
      getInitElements();
      homePage.validatePrepaidDeals();
    }
    @Given("I choose wireless link")
    public void i_choose_wireless_link() {
        getInitElements();
        homePage.chooseWireless();
    }
    @When("I click on accessories")
    public void i_click_on_accessories() {
      getInitElements();
      homePage.setAccessories();
    }
    @Then("accessories page is displayed")
    public void accessories_page_is_displayed() {
        getInitElements();
        homePage.validateAccessoriesPage();
    }
    @Given("I select tv link")
    public void i_select_tv_link() {
      getInitElements();
      homePage.selectTv();
    }
    @When("I click on sport")
    public void i_click_on_sport() {
     getInitElements();
     homePage.setSport();
    }
    @Then("sport page should display")
    public void sport_page_should_display() {
       getInitElements();
       homePage.validateSportPage();
    }
    @Given("I select internet tab")
    public void i_select_internet_tab() {
       getInitElements();
       homePage.selectInternet();
    }
    @When("I click plan and price")
    public void i_click_plan_and_price() {
      getInitElements();
      homePage.planAndPrice();
    }
    @Then("the page should display")
    public void the_page_should_display() {
      getInitElements();
      homePage.validateInternetPlanPage();
    }
    @Given("I select internet")
    public void i_select_internet() {
     getInitElements();
     homePage.selectInternet();
    }
    @When("I click wifi technologies")
    public void i_click_wifi_technologies() {
       getInitElements();
       homePage.wifiTechnologies();
       driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
    }
    @Then("page should display")
    public void page_should_display() {
      getInitElements();
      homePage.validateWifiTechnologiesPage();
    }
    @Given("I select account tab")
    public void i_select_account_tab() {
        getInitElements();
        homePage.selectAccount();
    }
    @Given("I hover to move my services element")
    public void i_hover_to_move_my_services_element() {
      getInitElements();
      homePage.mouseHoverByXpath("//span[contains(text(),'Move my service')]");
    }
    @When("I click move my services")
    public void i_click_move_my_services() {
      getInitElements();
      homePage.setMoveMyServices();
    }
    @Then("the page should displays")
    public void the_page_should_displays() {
      getInitElements();
      homePage.validateMoveServicesPage();
    }







}