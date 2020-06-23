//package step_definitions;
//
//import common.WebAPI;
//import home.HomePage;
//import io.cucumber.java.After;
//import io.cucumber.java.Before;
//import io.cucumber.java.en.Then;
//import io.cucumber.java.en.When;
//import org.openqa.selenium.support.PageFactory;
//
//import java.io.IOException;
//
//public class SignInOption_Step_Definition extends WebAPI {
//
//    @Before
//    public void openBrowser() throws IOException {
//        setUp(false, "browserstack", "windows", "10", "chrome", "83", "https://www.att.com/");
//    }
//    @After
//    public void closeBrowser() {
//        cleanUp();
//    }
//    static HomePage homePage; // Reference Variable/ object of HomePage
//    public static void getInitElements() {
//        homePage = PageFactory.initElements(driver, HomePage.class);
//    }
//
//    @When("I click Account button")
//    public void i_click_Account_button() {
//
//    }
//
//    @Then("I should see Sign in")
//    public void i_should_see_Sign_in() {
//
//    }
//
//}
