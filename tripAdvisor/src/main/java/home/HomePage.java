package home;

import common.WebAPI;
import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import static webelements.WebElements.*;

public class HomePage extends WebAPI {

    @FindBy(how = How.CSS, using = Hotelselement)
    WebElement hotelsWebelement;
    @FindBy(how = How.CSS, using = enterKeywordelement)
    WebElement enterKeywordWebelement;
    @FindBy(how = How.CSS, using = textElement)
    WebElement textWebelement;
    @FindBy(how = How.XPATH, using = searchHotels)
    public WebElement getSearchHotels;
    @FindBy(how = How.CSS, using = searchCaliforniaHotels)
    public WebElement getCaliforniaHotels;
    @FindBy(how = How.XPATH, using = signIn)
    public WebElement searchSignIn;
    @FindBy(how = How.XPATH, using = signInWithEmail)
    public WebElement searchSignInWitheEmail;
    @FindBy(how = How.ID, using = emailSearchBox)
    public WebElement searchEmailSearchBox;
    @FindBy(how = How.XPATH, using = passwordSearchBox)
    public WebElement searchPassword;
    @FindBy(how = How.XPATH, using = logIn)
    public WebElement searchLogIn;
    @FindBy(how = How.XPATH, using = forgetSearch)
    public WebElement validateSearch;
    @FindBy(how = How.XPATH, using = searchNY)
    public WebElement setSearchNY;
    @FindBy(how = How.XPATH, using = searchSG)
    public WebElement setSearchSG;
    @FindBy(how = How.XPATH, using = searchRM)
    public WebElement setSearchRM;
    @FindBy(how = How.XPATH, using = searchFR)
    public WebElement setSearchFR;
    @FindBy(how = How.XPATH, using = validate)
    public WebElement doValidateSearch;
    @FindBy(how = How.XPATH, using = searchDC)
    public WebElement doSearchDC;
    @FindBy(how = How.XPATH, using = searchMA)
    public WebElement doSearchMA;
    @FindBy(how = How.XPATH, using = searchNJ)
    public WebElement doSearchNJ;
    @FindBy(how = How.XPATH, using = searchVA)
    public WebElement doSearchVA;
    @FindBy(how = How.XPATH, using = searchDE)
    public WebElement doSearchDE;
    @FindBy(how = How.XPATH, using = searchME)
    public WebElement doSearchME;

    public void getSearchSG() {
        clickByXpath(searchSG);
    }
    public void getSearchRM() {
        clickByXpath(searchRM);
    }
    public void getSearchNY() {
        clickByXpath(searchNY);
    }
    public void getSearchDC() {
        clickByXpath(searchDC);
    }
    public void getSearchMA() {
        clickByXpath(searchMA);
    }
    public void getSearchNJ() {
        clickByXpath(searchNJ);
    }
    public void getSearchVA() {
        clickByXpath(searchVA);
    }
    public void getSearchFR() {
        clickByXpath(searchFR);
    }
    public void getSearchDE() {
        clickByXpath(searchDE);
    }
    public void getSearchME() {
        clickByXpath(searchME);
    }
    public void userSearchHotels()  {
        windowMaximize();
        clickByXpath(searchHotels);
        typeByXpath(searchHotels,"California Hotels");
       clickByCSS(searchCaliforniaHotels);
    }
    public void setSearchSignIn() {
        clickByXpath(signIn);
    }
    public void setSearchSignInWitheEmail() {
        checkBoxSelectedByXpath(signInWithEmail);
    }
    public void setSearchEmailSearchBox() {
        typeByID(emailSearchBox,"pnt123@gmail.com");
    }
    public void setSearchPassword() {
        typeByXpath(passwordSearchBox,"123");
    }
    public void getLogIn() {
        clickByXpath(logIn);
    }
    public void getValidate() {
        validateSearch.getText();
    }
    public void validateSearchProduct(String expectedResult) {
        String actualResult = "Hotels";
        Assert.assertEquals("Search Result not Displayed", expectedResult, actualResult);
    }
    public void setDoValidateSearch(String expectedResult) {
        String actualResult = " Destinations travelers love";
        Assert.assertEquals("Search Result not Displayed", expectedResult, actualResult);
    }
    public void clickonHoteltab() {
        clickByCSS(Hotelselement);
    }
    public void enterKeyword() {
        typeByCss(enterKeywordelement,"Miami");
    }
    public void validatingsearchBox() {
        String expectedText = "Nearby";
        String actualText = textWebelement.getText();
        if (actualText.equals(expectedText)) {
            System.out.println("the actual results are same : " + actualText);
        } else {
            System.out.println("the actual results are not  same : " + actualText);
        }
    }
    public void scrollWebPage() {
        scrollDownTheWebPage();
    }
    public void theScrollDownTillEnd() {
        scrollDownTillEnd();
    }
}