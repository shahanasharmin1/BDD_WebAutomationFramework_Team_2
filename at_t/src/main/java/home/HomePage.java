package home;

import common.WebAPI;
import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import static webelements.WebElements.*;

public class HomePage extends WebAPI {

    @FindBy(how = How.CSS, using = searchbox )
    public WebElement usersearchbox;
    @FindBy(how = How.CSS, using = clicksearchbutton )
    public WebElement clickonsearchbutton;
    @FindBy(how = How.XPATH,using = searchField)
    public WebElement setSearchField;
    @FindBy(how = How.XPATH,using = validateText)
    public WebElement doValidateText;
    @FindBy(how = How.XPATH,using = dropDownWeb)
    public WebElement dropDownWebElement;


    public void enterKeyWord() throws InterruptedException {
        usersearchbox.sendKeys("AT&T Deals"); }
    public void clickSearchButton() {
        clickonsearchbutton.click(); }
    public void inputSearchField(){
        setSearchField.sendKeys("AT&T PREPAID"); }

    public void scrollDownTheWebPage() {
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("window.scrollBy(0,2000)"); }
    public void scrollDownTillEnd()  {
        JavascriptExecutor js1 = (JavascriptExecutor) driver;
        js1.executeScript("window.scrollTo(0, document.body.scrollHeight)"); }

    public void userdropdownwebelement(){
        windowMaximize();
        selectOptionByVisibleText(dropDownWebElement, "View & pay bill");
        driver.getTitle();
    }


    public void validateSearchProduct(String expectedResult) {
        String actualResult = "AT&T Deals";
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult); }

     public void setDoValidateText(String validateText){
         String actualResult = "AT&T PREPAID";
         Assert.assertEquals("Search Result not Displayed",validateText,actualResult);
     }

}
