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

public class HeaderStep_Definition extends WebAPI {

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


    @Given("I'm already in home page")
    public void i_m_already_in_home_page() {
          getInitElements();
    }

    @When("I click on sell tab")
    public void i_click_on_sell_tab() {
        getInitElements();
        homePage.clickSellTab();
    }

    @Then("sell page should open")
    public void sell_page_should_open() {
        getInitElements();
        homePage.validationSearch1();
    }

    @When("I click on deals tab")
    public void i_click_on_deals_tab() {
        getInitElements();
        homePage.clickDealsTab();
    }
    @Then("deals page should open")
    public void deals_page_should_open() {
        getInitElements();
        homePage.validationSearch2();
    }
    @Given("I enter flowers is search box")
    public void i_enter_flowers_is_search_box() {
        getInitElements();
        homePage.enterSearch1();
    }
    @Then("I should See flowers page")
    public void i_should_See_flowers_page() {
        getInitElements();
        homePage.validateSearch3("flowers");
    }
    @When("open Daily deals page")
    public void open_Daily_deals_page() {
        getInitElements();
        homePage.clickDailyDealsTab();
    }
    @Then("I can see all the deals")
    public void i_can_see_all_the_deals() {
      getInitElements();
      homePage.validationSearch4();
    }
    @Given("I select Music")
    public void i_select_Music() {
        getInitElements();
        homePage.selectMusic();
    }
    @When("I click on Concert tickets")
    public void i_click_on_Concert_tickets() {
        getInitElements();
        homePage.clickConcert();
    }
    @Then("I can reach the page to bay tickets")
    public void i_can_reach_the_page_to_bay_tickets() {
        getInitElements();
       homePage.validationSearch11();
    }
    @Given("I click on shop All categories")
    public void i_click_on_shop_All_categories() {
        getInitElements();
        homePage.setShopAllCategories();
    }
    @Given("I hover to electronics")
    public void i_hover_to_electronics() {
       getInitElements();
       homePage.mouseHoverByXpath("//*[@id=\"gh-sbc\"]/tbody/tr/td[1]/h3[2]/a");
    }
    @Given("I click electronics")
    public void i_click_electronics() {
        getInitElements();
        homePage.electronics.click();
    }
    @Given("again hover to home surveillance")
    public void again_hover_to_home_surveillance() {
        getInitElements();
        homePage.mouseHoverByXpath("//a[contains(text(),'Home Surveillance')]");
    }
    @When("I click home surveillance")
    public void i_click_home_surveillance() {
        getInitElements();
        homePage.homeSurveillance.click();
    }
    @Then("the page should open")
    public void the_page_should_open() {
      getInitElements();
      homePage.validationSearch10();
    }





















}
