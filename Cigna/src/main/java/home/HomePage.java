package home;

import common.WebAPI;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import static webelements.Webelements.*;

public class HomePage extends WebAPI {

    @FindBy(how = How.XPATH,using = cignaLogIn )
    public WebElement doLogIn;
    @FindBy(how = How.XPATH,using = userNameSearch )
    public WebElement doUser;
    @FindBy(how = How.XPATH,using = userPasswordSearch)
    public WebElement doPwS;
    @FindBy(how = How.CSS,using = userLI)
    public WebElement doLI;
    @FindBy(how = How.XPATH,using = validationSearch)
    public WebElement doValidation;

    public void setDoLogIn(){
        doLogIn.click();
    }
    public void setDoUser(){
        doUser.getAttribute("User name");
    }
    public void setDoPwS(){
        doPwS.findElement(By.xpath(userPasswordSearch));
    }
    public void setDoLI(){
        doLI.click();
    }

    public void scrollDownTheWebPage() {
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("window.scrollBy(0,2000)"); }
    public void scrollDownTillEnd()  {
        JavascriptExecutor js1 = (JavascriptExecutor) driver;
        js1.executeScript("window.scrollTo(0, document.body.scrollHeight)"); }

    public void validateSearchProduct(String expectedResult) {
        String actualResult = "Haven’t created an account yet? ";
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult); }



}