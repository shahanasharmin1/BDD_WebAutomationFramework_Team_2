package home;

import common.WebAPI;
import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.WebElement.*;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import java.util.List;
import static webelements.WebElements.*;


    public class HomePage extends WebAPI {
        @FindBy(how = How.XPATH, using = searchHotels)
        public WebElement getSearchHotels;
        @FindBy(how = How.CSS,using = searchCaliforniaHotels)
        public WebElement getCaliforniaHotels;
        @FindBy(how = How.XPATH,using = signIn)
        public WebElement searchSignIn;
        @FindBy(how = How.XPATH,using = signInWithEmail)
        public WebElement searchSignInWitheEmail;
        @FindBy(how = How.ID,using = emailSearchBox)
        public WebElement searchEmailSearchBox;
        @FindBy(how = How.XPATH,using = passwordSearchBox)
        public WebElement searchPassword;
        @FindBy(how = How.XPATH,using = logIn)
        public WebElement searchLogIn;
        @FindBy(how = How.XPATH,using = forgetSearch)
        public WebElement validateSearch;
        @FindBy(how = How.XPATH,using = searchNY)
        public WebElement setSearchNY;
        @FindBy(how = How.XPATH,using = searchSG)
        public WebElement setSearchSG;
        @FindBy(how = How.XPATH,using = searchRM)
        public WebElement setSearchRM;
        @FindBy(how = How.XPATH,using = searchFR)
        public WebElement setSearchFR;
        @FindBy(how = How.XPATH,using = validate)
        public WebElement doValidateSearch;
        @FindBy(how = How.XPATH,using = searchDC)
        public WebElement doSearchDC;
        @FindBy(how = How.XPATH,using = searchMA)
        public WebElement doSearchMA;
        @FindBy(how = How.XPATH,using = searchNJ)
        public WebElement doSearchNJ;
        @FindBy(how = How.XPATH,using = searchVA)
        public WebElement doSearchVA;
        @FindBy(how = How.XPATH,using = searchDE)
        public WebElement doSearchDE;
        @FindBy(how = How.XPATH,using = searchME)
        public WebElement doSearchME;

        public void getSearchSG(){setSearchSG.click();}
        public void getSearchRM(){setSearchRM.click();}
        public void getSearchNY(){setSearchNY.click();}
        public void getSearchDC(){doSearchDC.click();}
        public void getSearchMA(){doSearchMA.click();}
        public void getSearchNJ(){doSearchNJ.click();}
        public void getSearchVA(){doSearchVA.click();}
        public void getSearchFR(){setSearchFR.click();}
        public void getSearchDE(){doSearchDE.click();}
        public void getSearchME(){doSearchME.click();}
        public void userSearchHotels() throws InterruptedException {
            windowMaximize();
            getSearchHotels.click();
            getSearchHotels.sendKeys("California Hotels");
            wait(2000);
            getCaliforniaHotels.click(); }
        public void scrollDownTheWebPage() {
            JavascriptExecutor js = (JavascriptExecutor) driver;
            js.executeScript("window.scrollBy(0,2000)"); }
        public void scrollDownTillEnd()  {
            JavascriptExecutor js1 = (JavascriptExecutor) driver;
            js1.executeScript("window.scrollTo(0, document.body.scrollHeight)"); }
         public void setSearchSignIn() {
            searchSignIn.click();
         }
         public void setSearchSignInWitheEmail(){
            searchSignInWitheEmail.isSelected();
         }
         public void setSearchEmailSearchBox(){
            searchEmailSearchBox.sendKeys("pnt123@gmail.com"); }
         public void setSearchPassword(){
            searchPassword.sendKeys("123");
         }
         public void getLogIn(){ searchLogIn.click(); }
         public void getValidate(){
            validateSearch.getText(); }
        public void validateSearchProduct(String expectedResult) {
            String actualResult = "Hotels";
            Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
        }
        public void setDoValidateSearch(String expectedResult) {
            String actualResult = " Destinations travelers love";
            Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
        }

    }

