package home;

import common.WebAPI;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import static webelements.GEICOWebElements.*;
public class GEICOHomePage extends WebAPI {

    @FindBy(how = How.XPATH, using = logInTadWebElement) public WebElement logIn;
    @FindBy(how = How.ID, using = userIdWebElement) public WebElement userId;
    @FindBy(how = How.ID, using = passwordWebElement) public WebElement password;
    @FindBy(how = How.XPATH, using = logInButtonWebElement) public WebElement logInButton;
    @FindBy(how = How.XPATH, using = cookieWebElement) public WebElement cookieClose;
    @FindBy(how = How.XPATH, using = locationWebElement) public WebElement location;
    @FindBy(how = How.XPATH, using = zipCodeWebElement) public WebElement zipCode;
    @FindBy(how = How.XPATH, using = updateButtonWebElement) public WebElement updateButton;
    @FindBy(how = How.XPATH, using = insuranceWebElement) public WebElement insurance;
    @FindBy(how = How.XPATH, using = vehicleInsuranceWebElement) public WebElement vehicleInsurance;
    @FindBy(how = How.XPATH, using = autoWebElement) public WebElement auto;
    @FindBy(how = How.XPATH, using = startHereWebElement) public WebElement startHere;
    @FindBy(how = How.XPATH, using = policyNumberWebElement) public WebElement policyNumber;
    @FindBy(how = How.XPATH, using = birthDayWebElement) public WebElement birthDay;
    @FindBy(how = How.XPATH, using = zipWebElement) public WebElement zip;
    @FindBy(how = How.XPATH, using = continueWebElement) public WebElement continueButton;



    public void closeCookie() {cookieClose.click();}
    public void clickLogIn() {
        logIn.click();
    }
    public void clickLogInButton() {
        logInButton.click();
    }
    public void selectLocation() { location.click(); }
    public void enterZipCode() { zipCode.sendKeys("22191"); }
    public void clickUpdate() { updateButton.click(); }
    public void selectInsurance() {insurance.click(); }
    public void selectVehicleInsurance() {vehicleInsurance.click(); }
    public void clickAuto() {auto.click(); }
    public void clickStartHere() {startHere.click(); }
    public void continueButton() {continueButton.click(); }
    public void enterUserId(String id){userId.sendKeys(id);}
    public void enterPassword(String pass){password.sendKeys(pass);}
    public void enterPolicyNumber(String pNumber){policyNumber.sendKeys(pNumber);}
    public void enterDateOfBirth(String Dbirth){birthDay.sendKeys(Dbirth);}
    public void enterZipCode(String zcode ){zip.sendKeys(zcode);}

    public void logIn(String id,String pass){
      closeCookie();
      clickLogIn();
      userId.sendKeys(id);
      password.sendKeys(pass);
      clickLogInButton();
    }
    public void validateLogIn(){
        Boolean  verifyTitle = driver.getTitle().equalsIgnoreCase("successfully login");
        Assert.assertFalse(verifyTitle);
    }
    public void updateLocation() {
        selectLocation();
        enterZipCode();
        clickUpdate();
    }
    public void exploreInsurance(){
        selectInsurance();
        mouseHoverByXpath("//*[@id=\"primary-navigation\"]/div[2]/ul/li[1]/a/span[2]");
        clickAuto();
    }
    public void validateAutoInsurancePage(){
        String actualResult=driver.getCurrentUrl();
        Assert.assertEquals("https://www.geico.com/auto-insurance/",actualResult);
    }
   public void registerToGeico(String pNumber,String Bday, String zCode){
        closeCookie();
        clickStartHere();
        policyNumber.sendKeys(pNumber);
        birthDay.sendKeys(Bday);
        zip.sendKeys(zCode);
        continueButton();
   }
    public void validateClaim(){
        Boolean  verifyTitle = driver.getTitle().equalsIgnoreCase("successfully login");
        Assert.assertFalse(verifyTitle);
    }
}