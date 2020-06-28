package home;

import common.WebAPI;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import static webelements.Webelements.*;
import java.time.Duration;
import org.openqa.selenium.support.ui.WebDriverWait;

public class HomePage extends WebAPI {

    @FindBy(how= How.XPATH,using=loginelement)
    WebElement logInButton;
    @FindBy(how= How.XPATH,using=bankofAmericaElement)
    WebElement bankofAmericaText;
    @FindBy(how = How.CSS, using = OnlineIDWebElements)
    public WebElement onlineID;
    @FindBy(how = How.CSS, using = passcodeWebElement)
    public WebElement passCodeId;
    @FindBy(how = How.CSS, using = saveOnlineIdWebElement)
    public WebElement clickOnCheckBox;
    @FindBy(how = How.CSS, using = signinbutton)
    public WebElement clickOnsigninbutton;
    @FindBy(how = How.CSS, using = validationSignin)
    public WebElement validationSigninelement;
    @FindBy(how = How.CSS, using = invalidValidation)
    public WebElement invalidValidationelement;
    @FindBy(how = How.CSS, using = radiobutton)
    public WebElement radiobuttonelement;
    @FindBy(how = How.XPATH, using = acNumber)
    public WebElement acNumberelement;
    @FindBy(how = How.CSS, using = validatetext)
    public WebElement validatetextelement;
    @FindBy(how = How.XPATH, using = SSNnumber)
    public WebElement SSNnumberelement;
    @FindBy (css = webElementButtonHomeLoans)
    private WebElement buttonHomeLoans;
    @FindBy (css = webElementButtonFindAHome)
    private WebElement buttonFindAHome;
    @FindBy (css = webElementInputLocation)
    private WebElement inputLocation;
    @FindBy (css = webElementListItemFirstSearchResult)
    private WebElement listItemFirstSearchResult;
    @FindBy (css = webElementButtonContinueModal)
    private WebElement buttonContinueModal;
    @FindBy (css = webElementTextPartnerSiteFilterTag)
    private WebElement textPartnerSiteFilterTag;
    @FindBy (css = webElementButtonHomeValue)
    private WebElement buttonHomeValue;
    @FindBy (css = webElementTextFirstLineHomeAddress)
    private WebElement textFirstLineHomeAddress;
    @FindBy (css = webElementTextSecondLineHomeAddress)
    private WebElement textSecondLineHomeAddress;


    public void clickLogInButton(){
     windowMaximize();
     clickByXpath(loginelement);
 }
    public void userbankOfAmericaText() {
        String actualResult = logInButton.getText();
        Assert.assertEquals(" Result not Displayed", "logInButton.getText()",actualResult);
    }
    public void enterKeyword(String keyword) {
        typeByCss(OnlineIDWebElements,keyword);
    }
    public void enterPassword(String password) {
        typeByCss(passcodeWebElement,password);
        System.out.println(passCodeId.getSize() + passCodeId.getAttribute("password") + passCodeId.getText());
    }
    public void checkOnsaveOnlineIdBox() {
       checkBoxSelectedByCSS(saveOnlineIdWebElement);
    }
    public void userSignin(){
        clickByCSS(signinbutton);
    }
    public void uservalidationSigninelement(String expectedResult){
        try{
            String actual= validationSigninelement.getText();
            Assert.assertEquals("actual",expectedResult,"nothing");
        }catch(Exception e){
        }
    }
    public void userinvalidValidationelement(String expectedResult){
        try{
            String actual= invalidValidationelement.getText();
            Assert.assertEquals("actual",expectedResult,"nothing");
        }catch(Exception e){
        }
    }
    public void userradiobuttonelement(){
        navigateTo("https://secure.bankofamerica.com/applynow/welcome.go");
        clickByCSS(radiobutton);
    }
    public void useracNumberelement(){
        navigateTo("https://secure.bankofamerica.com/auth/forgot/reset-entry/?reason=MSGSFR01");
        typeByCss(acNumber, "789345");
    }
    public void uservalidatetextelement(String expected){
        try{
            navigateTo("https://secure.bankofamerica.com/auth/forgot/reset-entry/?reason=MSGSFR01");
            String actual=validatetextelement.getText();
            Assert.assertEquals("actual",expected ,"nothing");
        }catch(Exception e){
        }
    }
    public void userSSNnumberelement(){
        navigateTo("https://secure.bankofamerica.com/auth/forgot/reset-entry/?reason=MSGSFR01");
        typeByCss(SSNnumber, "234567");
    }
   public void scrollDown(){
        scrollDownTheWebPage();
 }
  public void scrollDowntillofthepage(){
      scrollDownTillEnd();
    }
    private void clickJScript(WebElement buttonHomeLoans) {
    }
    public void inputSearchTermLocationInputField(String searchTerm) {
        typeByCss(webElementInputLocation,searchTerm);
        System.out.println("Input \"" + searchTerm + "\" in Location input field");
    }
    public String getPageTitle(String pageTitle) {
        String capturedPageTitle = driver.getTitle();
        System.out.println("Captured page title: " + capturedPageTitle);
        return capturedPageTitle;
    }
    public String getTextPartnerSiteFilterTag() {
        String capturedFilterTagText = textPartnerSiteFilterTag.getText();
        System.out.println("Captured filter tag text: " + capturedFilterTagText);
        return capturedFilterTagText;
    }
    public void clickButtonHomeValue() {
        try {
            clickJScript(buttonHomeValue);
            System.out.println("Clicked \"Home Value\" button");
        } catch (Exception e) {
            System.out.println("UNABLE TO CLICK \"HOME VALUE\" BUTTON --- TRYING AGAIN");
            clickJScript(buttonHomeValue);
        }
    }
    public void switchTabs() {
        java.util.Iterator<String> iter = driver.getWindowHandles().iterator();
        String parentWindow = iter.next();
        String childWindow = iter.next();
        driver.switchTo().window(childWindow);
        String actualTitle = driver.getTitle();
        System.out.println("Switched to tab: " + actualTitle);
    }
    public String getTextHomeAddressHomeValueSearchResultPage() {
        String address1 = textFirstLineHomeAddress.getText();
        String address2 = textSecondLineHomeAddress.getText();
        String capturedAddress = address1 + ", " + address2;
        System.out.println("Captured address: " + capturedAddress);
        return capturedAddress;
    }
    public void navigateToRealEstateCenterPage() {
        try{
            clickJScript(buttonHomeLoans);
            System.out.println("Clicked \"Home Loans\" button");
        } catch (Exception e) {
            System.out.println("UNABLE TO CLICK \"HOME LOANS\" BUTTON --- TRYING AGAIN");
            clickJScript(buttonHomeLoans);
        }
        try{
            clickJScript(buttonFindAHome);
            System.out.println("Clicked \"Find A Home\" button");
        } catch (Exception e) {
            System.out.println("UNABLE TO CLICK \"FIND A HOME\" BUTTON --- TRYING AGAIN");
            clickJScript(buttonFindAHome);
        }
    }

    public void clickSearchResultLocationInputFieldDropdown() {
        try {
            clickJScript(listItemFirstSearchResult);
            System.out.println("Clicked first search result");
        } catch (Exception e) {
            System.out.println("UNABLE TO CLICK FIRST SEARCH RESULT --- TRYING AGAIN");
            clickJScript(listItemFirstSearchResult);
        }
    }
    public void clickContinueModalContainer() {
        try {
            clickJScript(buttonContinueModal);
            System.out.println("Clicked Continue in modal container");
        } catch (Exception e) {
            System.out.println("UNABLE TO CLICK CONTINUE IN MODAL CONTAINER --- TRYING AGAIN");
            clickJScript(buttonContinueModal);
        }
    }


}
