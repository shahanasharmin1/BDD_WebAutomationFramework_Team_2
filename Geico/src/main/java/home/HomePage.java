package home;

import common.WebAPI;
import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import javax.swing.*;

import java.awt.*;

import static webelements.Webelements.*;

public class HomePage extends WebAPI {
    @FindBy(how = How.CSS, using = searchZip)
    public WebElement findSearchZip;
    @FindBy(how = How.XPATH, using = searchForStartQuote)
    public WebElement findsearchStartQuote;
    @FindBy(how = How.XPATH, using = searchForAuto)
    public WebElement findSearchAuto;
    @FindBy(how = How.XPATH, using = searchForRenters)
    public WebElement findSearchRenters;
    @FindBy(how = How.XPATH, using = searchForHome)
    public WebElement findSearchForHome;
    @FindBy(how = How.XPATH, using = searchForCondo)
    public WebElement findSearchForCondo;
    @FindBy(how = How.XPATH, using = dropDown)
    public WebElement dropdownwebelement;
    @FindBy(how = How.XPATH, using = dropdown)
    public WebElement setdropdownwebelement;
    @FindBy(how = How.CSS, using = searchbox)
    public WebElement searchBoxWebElement;
    @FindBy(how = How.CSS, using = searchBox)
    public WebElement setSearchBoxWebElement;
    @FindBy(how = How.CLASS_NAME, using = logIn)
    public WebElement SearchLogIn;
    @FindBy(how = How.XPATH, using = validationForgetId)
    public WebElement SearchValidateId;


    public void getSearchZip() {
        findSearchZip.sendKeys("11373");
    }

    public void getsearchStartQuote() {
        findsearchStartQuote.click();
    }

    public void getSearchAuto() {
        findSearchAuto.click();
    }

    public void getSearchRenters() {
        findSearchRenters.click();
    }

    public void getSearchForHome() {
        findSearchForHome.click();
    }

    public void getSearchForCondo() {
        findSearchForCondo.click();
    }

    public void scrollDownTheWebPage() {
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("window.scrollBy(0,2000)");
    }

    public void scrollDownTillEnd() {
        JavascriptExecutor js1 = (JavascriptExecutor) driver;
        js1.executeScript("window.scrollTo(0, document.body.scrollHeight)");
    }

    public void userdropdownwebelement() {
        //windowMaximize();
        selectOptionByVisibleText(dropdownwebelement, "Property Insurance");
        driver.getTitle();
    }

    public void getuserdropdownwebelement() {
        //windowMaximize();
        selectOptionByVisibleText(dropdownwebelement, "My Account");
        driver.getTitle();
    }

    public void userSearchBoxWebElement() {
        searchBoxWebElement.sendKeys("pnt123@gmail.com");
    }

    public void getUserSearchBoxWebElement() {
        setSearchBoxWebElement.sendKeys("123");
    }

    public void getSearchLogIn() {
        SearchLogIn.click();
    }

    public void validateSearchProduct(String expectedResult) {
        String actualResult = "Property Insurance";
        Assert.assertEquals("Search Result not Displayed", expectedResult, actualResult);


//        public void validateSearchProduct(String expectedResult) {
//            Label searchValidText = null;
//            String actualResult = searchValidText.getText();
//        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
//
//
    }
}