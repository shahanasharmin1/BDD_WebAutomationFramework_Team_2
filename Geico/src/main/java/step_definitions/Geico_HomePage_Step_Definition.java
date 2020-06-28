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

public class Geico_HomePage_Step_Definition extends WebAPI {
        @Before
    public void openBrowser() throws IOException {
        setUp(false, "browserstack", "OS X", "10", "chrome", "83", "https://www.geico.com/");
    }
    @After
    public void closeBrowser() {
        cleanUp();
    }

    static HomePage homePage; // Reference Variable/ object of HomePage
    public static void getInitElements() {
        homePage = PageFactory.initElements(driver, HomePage.class);
    }
    @Given("I am at geico homePage")
    public void i_am_at_geico_homePage() {
        getInitElements();
    }
    @Given("I am at geico.com homePage")
    public void i_am_at_geico_com_homePage() { }

    @When("I scroll down the webPage byPixel")
    public void i_scroll_down_the_webPage_byPixel() {
        homePage.scrollDownTheWebPage();
    }

    @Then("I will see the page is being scrolled down")
    public void i_will_see_the_page_is_being_scrolled_down() {
     getInitElements();
    }

    @When("I do scroll till the end")
    public void i_do_scroll_till_the_end() {
        homePage.scrollDownTillEnd();
    }

    @Then("I will see  the page is being scrolled tillToEnd")
    public void i_will_see_the_page_is_being_scrolled_tillToEnd() {
    //getInitElements();
    }

    @When("I click on the drop down button and i select the Property Insurance")
    public void i_click_on_the_drop_down_button_and_i_select_the_Property_Insurance() {

    }

    @Then("I should see types of Property Insurance page for Home")
    public void i_should_see_types_of_Property_Insurance_page_for_Home() {
        homePage.validateSearchProduct("Property Insurance");

    }

    @When("I click on the drop down button and i select My Account")
    public void i_click_on_the_drop_down_button_and_i_select_My_Account() {
     //homePage.dropdownwebelement.sendKeys("My Account");

    }

    @When("I should see My Account Page")
    public void i_should_see_My_Account_Page() {

    }

    @When("I can pass my email id in search field")
    public void i_can_pass_my_email_id_in_search_field() {
       //homePage.searchBoxWebElement.sendKeys("pnt123@gmail.com");

    }

    @When("I enter my password")
    public void i_enter_my_password() {
      //  homePage.setSearchBoxWebElement.sendKeys("123");

    }

    @When("I click on Log In button")
    public void i_click_on_Log_In_button() {
        getInitElements();
        //homePage.SearchLogIn.click();

    }

    @Then("I should see Forget User ID\\/Password page")
    public void i_should_see_Forget_User_ID_Password_page() {
        getInitElements();
        //homePage.validateSearchProduct("Forget User ID/Password");


    }


}
