package home;
import common.WebAPI;
import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import static webelements.Webelements.*;

public class HomePage extends WebAPI {

    @FindBy(how= How.CSS,using=logIn)
    WebElement logInElement;
    @FindBy(how= How.XPATH,using=text)
    WebElement textElement;
    @FindBy(how=How.CSS, using=  loginelement)
    public  WebElement  loginWebelement;
    @FindBy(how=How.XPATH, using=  inputbox)
    public  WebElement  inputboxelement;
    @FindBy(how=How.XPATH, using=  inputpassword)
    public  WebElement  inputpasswordelement;
    @FindBy(how=How.XPATH, using=  checkbox)
    public  WebElement  checkboxelement;
    @FindBy(how=How.CLASS_NAME, using= validationelement)
    public  WebElement validationelementwebelement;
    @FindBy(how=How.CSS, using= hoverSkyMiles)
    public  WebElement hoverSkyMileswebelement;
    @FindBy(how=How.CLASS_NAME, using= dropdown)
    public  WebElement dropdownwebelement;
    @FindBy(how=How.XPATH, using= refundableFares)
    public  WebElement refundableFareswebelement;
    @FindBy(how=How.XPATH, using= checkonmydatesareflexible)
    public  WebElement checkonmydatesareflexiblewebelement;
    @FindBy(how=How.CLASS_NAME, using= validatehomepage)
    public  WebElement validatehomepagewebelement;
    @FindBy(how=How.XPATH, using=safertravel )
    public  WebElement safertravelElement ;
    @FindBy(how=How.XPATH, using=airlinepartners )
    public  WebElement airlinepartnersElement ;
    @FindBy(how=How.XPATH, using=baggage )
    public  WebElement baggageElement ;
    @FindBy(how=How.XPATH, using=checkinandsafety)
    public  WebElement checkinandsafetyElement ;
    @FindBy(how=How.XPATH, using=deltaskyclub )
    public  WebElement deltaskyclubElement ;

    public void userloginbutton(){
        logInElement.click();
    }
    public void validateText(String expectedResult) {
        windowMaximize();
        String actualResult = textElement.getText();
        Assert.assertEquals("Search Result not Displayed", expectedResult, actualResult);
    }
    public void scrollDownTheWebPage() {
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("window.scrollBy(0,1000)");
    }
    public void scrollDownTillEnd()  {
        JavascriptExecutor js1 = (JavascriptExecutor) driver;
        js1.executeScript("window.scrollTo(0, document.body.scrollHeight)");
    }

    public void userlogin(){
        loginWebelement.click();
    }

    public void userinputboxelement(){
        inputboxelement.sendKeys("Shamima");
    }
    public void userinputpasswordelement(){
        inputpasswordelement.sendKeys("9449");
    }
    public void usercheckboxelement(){
        checkboxelement.isSelected();
    }
    public void validateLogin(String expectedResult) {
        try{
            String actualResult = validationelementwebelement.getText();
            Assert.assertEquals( "showing nothing",expectedResult,actualResult);
        }catch(Exception e ){

        }

    }
    public void userhoverSkyMileswebelement(){
        mouseHoverByCSS("#headSectab2");
    }
    public void userdropdownwebelement(){
        windowMaximize();
        selectOptionByVisibleText(dropdownwebelement, "One Way");
        driver.getTitle();
    }
    public void userrefundableFareswebelement() {
        windowMaximize();
        refundableFareswebelement.isSelected();
    }

    public void uservalidatehomepagewebelement(String expectedResult) {
        try{
            String actualresult=validatehomepagewebelement.getText();
            Assert.assertEquals("actualresult",expectedResult,"showing nothing");

        }catch(Exception e){

        }
    }
    public void usercheckonmydatesareflexiblewebelement() {
        checkonmydatesareflexiblewebelement.isSelected();
    }
    public void enterKeyWord() {
        inputboxelement.sendKeys("shamima");
    }


    public void clickonsafertravel(){
        safertravelElement.click();
    }
    public void clickairlinepartners(){
    airlinepartnersElement.click();
    }
    public void clickbaggage(){
        baggageElement.click();
    }

    public void clickoncheckinandsafety(){
        checkinandsafetyElement.click();
    }
    public void clickdeltaskyclub(){
        deltaskyclubElement.click();
    }
    public void Validatesafertravel(String expectedResult){
        String actualResult="safertravel" ;
        Assert.assertEquals("Search Result not Displayeed",expectedResult,actualResult);
    }


}








