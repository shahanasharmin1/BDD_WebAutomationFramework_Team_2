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
    @FindBy(how=How.CSS, using=  checkbox)
    public  WebElement  checkboxelement;
    @FindBy(how=How.CLASS_NAME, using= validationelement)
    public  WebElement validationelementwebelement;
    @FindBy(how=How.CSS, using= hoverSkyMiles)
    public  WebElement hoverSkyMileswebelement;
    @FindBy(how=How.CSS, using= dropdown)
    public  WebElement dropdownwebelement;
    @FindBy(how=How.XPATH, using= refundableFares)
    public  WebElement refundableFareswebelement;
    @FindBy(how=How.XPATH, using= checkonmydatesareflexible)
    public  WebElement checkonmydatesareflexiblewebelement;
    @FindBy(how = How.XPATH,using = myDatesareflexible)
    public WebElement checkmyDatesareflexible;
    @FindBy(how = How.ID,using = searchbox)
    public WebElement doSearch;
    @FindBy(how = How.XPATH,using = searchButton)
    public WebElement doSearchButton;
    @FindBy(how = How.ID,using = travelInfo)
    public WebElement doTravelInfo;
    @FindBy(how = How.XPATH,using = hoverFirstClass)
    public WebElement hoverFirstClassWebelement;
    @FindBy(how = How.XPATH,using = flightStatus)
    public WebElement doFlightStatus;
    @FindBy(how = How.XPATH,using = refundStatus)
    public WebElement doRefundStatus;
    @FindBy(how=How.CLASS_NAME, using= validatehomepage)
    public  WebElement validatehomepagewebelement;

    public void userloginbutton(){ logInElement.click();}
    public void doSearchBox(){doSearch.click();}
    public void doSearchButton(){doSearchButton.click();}
    public void doSearchTravelInfo(){doTravelInfo.click();}
    public void setDoFlightStatus(){doFlightStatus.click();}
    public void setDoRefundStatus(){doRefundStatus.click();}
    public void validateText(String expectedResult) {
        //windowMaximize();
        String actualResult = textElement.getText();
        Assert.assertEquals("Search Result not Displayed", expectedResult, actualResult); }
    public void scrollDownTheWebPage() {
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("window.scrollBy(0,1000)"); }
    public void scrollDownTillEnd()  {
        JavascriptExecutor js1 = (JavascriptExecutor) driver;
        js1.executeScript("window.scrollTo(0, document.body.scrollHeight)"); }
    public void userlogin(){ loginWebelement.click(); }
    public void userinputboxelement(){ inputboxelement.sendKeys("Shahana"); }
    public void userinputpasswordelement(){ inputpasswordelement.sendKeys("1234"); }
    public void usercheckboxelement(){ checkboxelement.isSelected(); }
    public void validateLogin(String expectedResult) {
        try{
            String actualResult = validationelementwebelement.getText();
            Assert.assertEquals( "showing nothing",expectedResult,actualResult);
        }catch(Exception e ){

        }
    }
    public void userhoverSkyMileswebelement(){ mouseHoverByCSS("#headSectab2"); }
    public void userhoverFirstClassWebelement(){ mouseHoverByXpath("//a[contains(text(),'First Class')]"); }
    public void userdropdownwebelement(){
       // windowMaximize();
        selectOptionByVisibleText(dropdownwebelement, "One Way");
        driver.getTitle();
    }
    public void userrefundableFareswebelement() {
       // windowMaximize();
        refundableFareswebelement.isSelected();
    }
    public void uservalidatehomepagewebelement(String expectedResult) {
        try{
            String actualresult=validatehomepagewebelement.getText();
            Assert.assertEquals("actualresult",expectedResult,"showing nothing");

        }catch(Exception e)
        {
        }
    }
    public void usercheckonmydatesareflexiblewebelement() { checkonmydatesareflexiblewebelement.isSelected(); }
    public void enterKeyWord() { inputboxelement.sendKeys("shahana"); }

}