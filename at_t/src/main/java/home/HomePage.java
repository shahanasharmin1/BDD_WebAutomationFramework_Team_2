package home;

import common.WebAPI;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import java.util.List;
import java.util.concurrent.TimeUnit;

import static webelements.WebElements.*;

public class HomePage extends WebAPI {

    @FindBy(how = How.CSS, using =  headerWebElements) public List<WebElement> header;
    @FindBy(how = How.XPATH, using = dealsWebElement) public WebElement deals;
    @FindBy(how = How.LINK_TEXT, using = internet_TvWebElement) public WebElement internet_Tv;
    @FindBy(how = How.XPATH, using = supportWebElement) public WebElement support;
    @FindBy(how = How.XPATH, using = signINWebElement) public WebElement signIn;
    @FindBy(how = How.XPATH ,using = IdWebElement) public WebElement userId;
    @FindBy(how = How.ID, using = passwordWebElement) public WebElement password;
    @FindBy(how = How.XPATH, using = sinInButtonWebElement) public WebElement signInButton;
    @FindBy(how = How.XPATH, using = prepaidWebElement) public WebElement prepaid;
    @FindBy(how = How.XPATH, using = bayPhonePlanWebElement) public WebElement phonePlan;
    @FindBy(how = How.XPATH, using = appleWebElement) public WebElement apple;
    @FindBy(how = How.XPATH, using = wirelessWebElement) public WebElement wireless;
    @FindBy(how = How.XPATH, using = wirelessDealsWebElement) public WebElement wirelessDeals;
    @FindBy(how = How.XPATH, using = TvWebElement) public WebElement tv;
    @FindBy(how = How.XPATH, using = channelLineUpWebElement) public WebElement channelLineUp;
    @FindBy(how = How.XPATH, using = bundlesWebElement) public WebElement bundles;
    @FindBy(how = How.XPATH, using = feedbackWebElement) public WebElement feedback;
    @FindBy(how = How.XPATH, using = box3WebElement) public WebElement box3;
    @FindBy(how = How.ID, using = topicSelectionWebElement) public WebElement topicSelection;
    @FindBy(how = How.XPATH, using =submitWebElement ) public WebElement submit;
    @FindBy(how = How.XPATH, using =closeWebElement) public WebElement close;
    @FindBy(how = How.XPATH, using =appleWatchWebElement) public WebElement appleWatches;
    @FindBy(how = How.XPATH, using =shopAllAppleWatchesWebElement) public WebElement shopAllAppleWatches;
    @FindBy(how = How.XPATH, using =prepaidDealsWebElement) public WebElement prepaidDeals;
    @FindBy(how = How.XPATH, using =accessoriesWebElement) public WebElement accessories;
    @FindBy(how = How.XPATH, using =sportWebElement) public WebElement sport;
    @FindBy(how = How.XPATH, using =internetWebElement) public WebElement internet;
    @FindBy(how = How.XPATH, using =internetPlanWebElement) public WebElement internetPlan;
    @FindBy(how = How.XPATH, using =wifiTechnologyWebElement) public WebElement wifiTechnology;
    @FindBy(how = How.ID, using = accountWebElement) public WebElement account;
    @FindBy(how = How.XPATH, using = moveMyServicesWebElement) public WebElement moveMyServices;



    public void waitTime(){driver.manage().timeouts().implicitlyWait(3,TimeUnit.SECONDS);}
    public List<WebElement> getHeader() {
        List<WebElement> headerName = header;
        for (WebElement head : header) {
            System.out.println(head.getText());
        }
        return headerName;
    }
    public void checkDeals() { deals.click(); }
    public void selectInternet_Tv() { internet_Tv.click(); }
    public void selectSupport() { support.click();}
    public void clickSingIn() { signIn.click();
        driver.manage().timeouts().implicitlyWait(2,TimeUnit.SECONDS);}
    public void enterUserId() { userId.sendKeys("kahina12"); }
    public void enterPassword() { password.sendKeys("test123"); }
    public void signInButton() { signInButton.click(); }
    public void selectPrepaid() { prepaid.click(); }
    public void choosePhonePlan() { phonePlan.click(); }
    public void exploreAppleOptions() { apple.click(); }
    public void chooseWireless() { wireless.click(); }
    public void exploreWirelessDeals() { wirelessDeals.click(); }
    public void selectTv(){tv.click();}
    public void clickChannelLineUp(){channelLineUp.click();}
    public void selectBundles(){bundles.click();}
    public void hoverToFeedback(){mouseHoverByXpath("//a[@id='oo_tab']");}
    public void clickFeedback(){feedback.click();}
    public void selectBox3(){box3.click();}
    public void clickSubmit(){submit.click();}
    public void clickClose(){close.click();}
    public void appleWatches(){appleWatches.click();}
    public void shopAllAppleWatches(){shopAllAppleWatches.click();}
    public void prepaidDeals(){prepaidDeals.click();}
    public void setAccessories(){accessories.click();}
    public void setSport(){sport.click();}
    public void selectInternet(){internet.click();}
    public void planAndPrice (){internetPlan.click();}
    public void wifiTechnologies(){wifiTechnology.click();}
    public void selectAccount(){account.click();}
    public void setMoveMyServices(){moveMyServices.click();}



    public void readHeader() { getHeader(); }
    public void internet_tvDealsPage() {
        checkDeals();
        mouseHoverByXpath("//span[contains(text(),'Deals')]");
        selectInternet_Tv();
    }
    public void validateDeals() {
        String actualResult = driver.getCurrentUrl();
        Assert.assertEquals( "https://www.att.com/deals/internet-tv/",actualResult);
    }
    public void signInForSupport() {
        selectSupport();
        clickSingIn();
        enterUserId();
        enterPassword();
        signInButton();
    }
        public void validateSignIn(){
        Boolean verifyTitle = driver.getTitle().equalsIgnoreCase("successfully login");
        Assert.assertFalse(verifyTitle);
    }
    public void getPrepaidPhonePlan() {
        selectPrepaid();
        choosePhonePlan();
        exploreAppleOptions();
    }
    public void validatePhonePlan() {
        String actualResult = driver.getCurrentUrl();
        Assert.assertEquals( "https://www.att.com/buy/prepaid-phones/",actualResult);
    }
    public void wirelessDeals() {
        chooseWireless();
        mouseHoverByXpath("//span[contains(text(),'Wireless deals')]");
        exploreWirelessDeals();
    }
    public void validateWirelessDeals() {
        String actualResult = driver.getCurrentUrl();
        Assert.assertEquals( "https://www.att.com/deals/cell-phone-deals/",actualResult);
    }
    public void exploreTvOptions(){
        selectTv();
        mouseHoverByXpath("//*[@id=\"HEADBAND01\"]/span/a/span");
        clickChannelLineUp();
    }
    public void validateTvOptions() {
        String actualResult = driver.getCurrentUrl();
        Assert.assertEquals("https://www.att.com/channels/att-tv/",actualResult);
    }
    public void giveFeedBack(){
        driver.manage().timeouts().implicitlyWait(5, TimeUnit.SECONDS);
        selectBundles();
        hoverToFeedback();
        clickFeedback();
        handleWindow();
        driver.manage().timeouts().implicitlyWait(3,TimeUnit.SECONDS);
        selectBox3();
        selectOptionByVisibleText(topicSelection,"Website Feedback");
        clickSubmit();
        clickClose();
    }
    public void shopAppleWatchesOption(){
        waitUntilClickAble(By.xpath("//span[contains(text(),'Apple Watch')]"));
        appleWatches();
        shopAllAppleWatches();
    }
    public void validateAppleWatches() {
        String actualResult = driver.getCurrentUrl();
        Assert.assertEquals( "https://www.att.com/brand/apple/watch/",actualResult);
    }
    public void explorePrepaidDeals(){
        selectPrepaid();
        driver.manage().timeouts().implicitlyWait(3,TimeUnit.SECONDS);
        prepaidDeals();
    }
    public void validatePrepaidDeals() {
        String actualResult = driver.getCurrentUrl();
        Assert.assertEquals( "https://www.att.com/prepaid/",actualResult);
    }
    public void accessoriesInWireless(){
        chooseWireless();
        setAccessories();
    }
    public void validateAccessoriesPage() {
        String actualResult = driver.getCurrentUrl();
        Assert.assertEquals("https://www.att.com/accessories/",actualResult);
    }
    public void sportPage(){
        selectTv();
        setSport();
    }
    public void validateSportPage() {
        String actualResult = driver.getCurrentUrl();
        Assert.assertEquals("https://www.att.com/sports/",actualResult);
    }
    public void InternetPlanPage(){
        selectInternet();
        planAndPrice();
    }
    public void validateInternetPlanPage() {
        String actualResult = driver.getCurrentUrl();
        Assert.assertEquals("https://www.att.com/internet/internet-services/",actualResult);
    }
    public void wifiTechnologiesPage(){
        selectInternet();
        wifiTechnologies();
        driver.manage().timeouts().implicitlyWait(3,TimeUnit.SECONDS);
    }
    public void validateWifiTechnologiesPage() {
        String actualResult = driver.getCurrentUrl();
        Assert.assertEquals( "https://www.att.com/internet/smart-home/",actualResult);
    }
    public void moveServicesPage(){
        selectAccount();
        mouseHoverByXpath("//span[contains(text(),'Move my service')]");
        setMoveMyServices();
        driver.manage().timeouts().implicitlyWait(3,TimeUnit.SECONDS);
    }
    public void validateMoveServicesPage() {
        String actualResult = driver.getCurrentUrl();
        Assert.assertEquals( "https://www.att.com/moving/",actualResult);
    }

}
