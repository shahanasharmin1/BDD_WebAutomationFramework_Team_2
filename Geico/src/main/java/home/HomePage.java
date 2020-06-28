package home;
import common.WebAPI;
import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import static webelements.Webelements.*;
public class HomePage extends WebAPI {
    @FindBy(how = How.XPATH, using =logInButton )
    WebElement logInButtonElement;
    @FindBy(how = How.XPATH, using =clickradioButton )
    WebElement clickradioButtonElement;
    @FindBy(how = How.XPATH, using = checkBox)
    WebElement checkBoxElement;
    @FindBy(how = How.XPATH, using =  clicklogo)
    WebElement  clicklogoElement;
    @FindBy(how = How.TAG_NAME, using = clickonimage)
    WebElement clickonimageElement;
    @FindBy(how = How.XPATH, using = hoveronAccessYourPolicymenu)
    WebElement hoveronAccessYourPolicymenuElement;
    @FindBy(how = How.LINK_TEXT, using =Trackaclaim)
    WebElement TrackaclaimElement;
    @FindBy(how = How.XPATH, using =clickonsearchbutton)
    WebElement clickonsearchbuttonElement;
    @FindBy(how = How.XPATH, using =REPORTANINCIDENT)
    WebElement REPORTANINCIDENTElement;
    @FindBy(how = How.XPATH, using =Information)
    WebElement InformationElement;
    @FindBy(how = How.XPATH, using =DropDownonButton)
    WebElement DropDownonbuttonElement;
    @FindBy(how = How.XPATH, using =VehicleInsurancebyDropDown)
    WebElement VehicleInsurancebyDropDownElement;
    @FindBy(how = How.CLASS_NAME, using =customerservice)
    WebElement customerserviceElement;
    @FindBy(how = How.CLASS_NAME, using =sales)
    WebElement salesElement;
    @FindBy(how = How.CLASS_NAME, using =claims)
    WebElement claimsElement;
    @FindBy(how = How.CLASS_NAME, using =leadershipdevelopment)
    WebElement leadershipdevelopmentElement;
    @FindBy(how = How.CLASS_NAME, using =autodamage)
    WebElement autodamageElement;
    @FindBy(how = How.CLASS_NAME, using =corporateandtechnology)
    WebElement corporateandtechnologyElement ;
    @FindBy(how = How.CLASS_NAME, using =validatetext)
    WebElement validatetextElement ;
    @FindBy(how = How.CLASS_NAME, using =dropdownautotab)
    WebElement autotabElement;


    public void clickonlogInButton(){
    logInButtonElement.click();
    }
    public void clickonRadioButton(){
    clickradioButtonElement.click();
    }
    public void checkBox(){
    checkBoxElement.click();
    }
    public void clickonLogo(){
    clicklogoElement.click();
    }
    public void clickonimage(){
    clickonimageElement.click();
    }
    public void  hoveronAccessYourPolicy()throws InterruptedException{
        Actions actions = new Actions(driver);
    }
    public void clickonTrackaclaim(){
    TrackaclaimElement.click();
    }
    public void clickonsearchbutton(){
    clickonsearchbuttonElement.click();
    }
    public void REPORTANINCIDENT(){
    REPORTANINCIDENTElement.click();
    }
    public  void clickonInformation(){
     InformationElement.click();
    }
    public void clickonDropDownbutton(){
    DropDownonbuttonElement.click();
    }
    public void selectVehicleInsurancebyDropDown() {
        selectOptionByVisibleText(VehicleInsurancebyDropDownElement, "Vechile Insurance");
        driver.getTitle();
    }
    public void clickoncustomerservice() {
            customerserviceElement.click();
        }
    public void clickonsales(){
    salesElement.click();
        }
    public void clickonclaims(){
    claimsElement.click();
    }
    public void clickonleadershipdevelopment(){
    leadershipdevelopmentElement.click();
    }
    public  void clickonautodamage(){
    autodamageElement.click();
    }
    public void clickoncorporateandtechnology(){
    corporateandtechnologyElement.click();
    }
    public void Validatetext(String expectedResult){
        String actualResult="text" ;
        Assert.assertEquals("Search Result not Displayeed",expectedResult,actualResult);
    }
    public void validatefooterItem(String expectedResult) {
        String actualresult = "customerserviceElement";
        Assert.assertEquals("Search Result not Displayed", expectedResult, actualresult);
    }
        public void userclickonDropButton(){
        selectOptionByVisibleText(autotabElement,"Identity Protection");
    }
    public void hoveringonSPORTS() throws InterruptedException {
        Actions actions = new Actions(driver);
    }




}




