package home;

import common.WebAPI;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import java.util.List;
import java.util.concurrent.TimeUnit;

import static webelements.WebElements.*;

public class HomePage extends WebAPI {

    @FindBy(how = How.XPATH, using = searchBoxWebElement) public WebElement searchBox;
    @FindBy(how = How.CSS, using = buttonWebElement) public WebElement button;
    @FindBy(how = How.XPATH, using = validationSearchWebElement) public WebElement validationSearch;
    @FindBy(how = How.XPATH, using = sellSearchWebElement) public WebElement sell;
    @FindBy(how = How.XPATH, using =dealsWebElement ) public WebElement deals;
    @FindBy(how = How.XPATH, using =validationSearch3WebElement ) public WebElement validationSearch1;
    @FindBy(how = How.XPATH, using =dailyDealsWebElement ) public WebElement dailyDeals;
    @FindBy(how = How.XPATH, using =seeAllCompaniesWebElement ) public WebElement seeAllCompanies;
    @FindBy(how = How.XPATH, using =careersWebElement ) public WebElement careers ;
    @FindBy(how = How.XPATH, using =buildOpportunityWebElement) public WebElement buildOpportunity ;
    @FindBy(how = How.XPATH, using = musicWebElement) public WebElement musics;
    @FindBy(how = How.LINK_TEXT, using = concertsWebElement) public WebElement concert;
    @FindBy(how = How.XPATH, using = ebayCommunityWebElement) public WebElement ebayCommunity;
    @FindBy(how = How.XPATH, using = aboutTheCommunityWebElement) public WebElement aboutTheCommunity;
    @FindBy(how = How.XPATH, using = developersWebElement) public WebElement developers;
    @FindBy(how = How.XPATH, using = registerWebElement) public WebElement register;
    @FindBy(how = How.XPATH, using = policiesWebElement) public WebElement policies;
    @FindBy(how = How.XPATH, using = feedbackPoliciesWebElement) public WebElement feedbackPolicies;
    @FindBy(how = How.XPATH, using = investorWebElement) public WebElement investor;
    @FindBy(how = How.XPATH, using = globalImpactWebElement) public WebElement globalImpact;
    @FindBy(how = How.XPATH,using = shopAllCategoriesWebElement) public WebElement shopAllCategories;
    @FindBy(how = How.XPATH,using = electronicsWebElement) public WebElement electronics;
    @FindBy(how = How.XPATH ,using =homeSurveillanceWebElement) public WebElement homeSurveillance ;
    @FindBy(how = How.XPATH, using = myEbayWebElement) public WebElement myEbay;
    @FindBy(how = How.XPATH, using = recentlyViewedWebElement) public WebElement recentlyViewed;

    public void enterSearch() {
        searchBox.sendKeys(" kids swimming pool");
    }
    public void clickSearchTab() {
        button.click();
    }
    public void validateSearch(String expectedResult){
            String actualResult = validationSearch.getText();
            Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
        }
    public void enterkeyWord(String keyWord){
       searchBox.sendKeys(keyWord);
    }
    public void validateSearchProduct(List<String>expectedResult) {
        String actualResult = validationSearch.getText();
        Assert.assertEquals("Search Result not Displayed", expectedResult, actualResult);
    }
    public void clickSellTab() {sell.click(); }
    public void validationSearch1(){
        String actualTitle = driver.getTitle();
        System.out.println("Page Title: " + actualTitle);
        Assert.assertEquals("Selling on eBay | Electronics, Fashion, Home & Garden | eBay",actualTitle);
    }
    public void clickDealsTab() {deals.click();}
    public void validationSearch2(){
        String actualTitle = driver.getTitle();
        System.out.println("Page Title: " + actualTitle);
        Assert.assertEquals("Daily Deals on eBay | Best deals and Free Shipping",actualTitle);
    }
    public void enterSearch1() { searchBox.sendKeys("flowers"); }
    public void validateSearch3(String expectedResult) {
        String actualResult = validationSearch1.getText();
        Assert.assertEquals("Search Result not Displayed", expectedResult, actualResult);
    }
    public void clickDailyDealsTab() {dailyDeals.click();}
    public void validationSearch4(){
        String actualTitle = driver.getTitle();
        System.out.println("Page Title: " + actualTitle);
        Assert.assertEquals("Daily Deals on eBay | Best deals and Free Shipping",actualTitle);
    }
    public void clickSeeAllCompanies() {
        seeAllCompanies.click();
        driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
    }
    public void validationSearch5(){
        String actualTitle = driver.getTitle();
        System.out.println("Page Title: " + actualTitle);
        Assert. assertEquals("Daily Deals on eBay | Best deals and Free Shipping",actualTitle);
    }
    public void clickCareers() {careers.click();}
    public void clickBuildOpportunity() {buildOpportunity.click();}
    public void validationSearch6(){
        String actualTitle = driver.getTitle();
       System.out.println("Page Title: " + actualTitle);
        Assert.assertEquals("Daily Deals on eBay | Best deals and Free Shipping",actualTitle);
    }
    public void selectMusic() {musics.click(); }
    public void clickConcert() {concert.click(); }
    public void validationSearch11() {
        String actualResult = driver.getCurrentUrl();
        Assert.assertEquals("https://www.ebay.com/b/Concert-Tickets/173634/bn_1865448",actualResult);
    }
    public void selectEbayCommunity() {ebayCommunity.click(); }
    public void clickAboutCommunity() {aboutTheCommunity.click(); }
    public void validationSearch9() {
        String actualResult = driver.getCurrentUrl();
        Assert.assertEquals( "https://community.ebay.com/t5/About-the-Community/About-Community/m-p/26164272?nobounce=",actualResult);
    }
    public void selectDevelopers() {developers.click(); }
    public void clickRegister() {register.click(); }
    public void validationSearch8(){
        String actualResult=driver.getCurrentUrl();
        Assert.assertEquals("https://developer.ebay.com/signin?tab=register",actualResult);
    }
    public void selectPolicies() {policies.click(); }
    public void clickPoliciesFeedback() {feedbackPolicies.click(); }
    public void validationSearch7(){
        String actualResult=driver.getCurrentUrl();
        Assert.assertEquals("https://www.ebay.com/help/policies/default/ebays-rules-policies?id=4205",actualResult);
    }
    public void clickInvestor() { investor.click(); }
    public void selectGlobalImpact() { globalImpact.click();}
        public void validationSearch15(){
        String actualResult=driver.getCurrentUrl();
        Assert.assertEquals("https://investors.ebayinc.com/overview/default.aspx",actualResult);
    }
     public void setShopAllCategories() { shopAllCategories.click(); }
    public void electronicsOptions(){
        setShopAllCategories();
        mouseHoverByXpath("//*[@id=\"gh-sbc\"]/tbody/tr/td[1]/h3[2]/a");
        electronics.click();
        mouseHoverByXpath("//a[contains(text(),'Home Surveillance')]");
        homeSurveillance.click();
    }
    public void validationSearch10(){
        String actualResult=driver.getTitle();
        Assert.assertEquals("Home Surveillance Systems for sale | In Stock | eBay",actualResult);
    }

    public String enterItem(String items) {
        searchBox.sendKeys();
        return items;
    }







}














