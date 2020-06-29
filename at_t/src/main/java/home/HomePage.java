package home;

import common.WebAPI;
import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import java.util.List;

import static webelements.WebElements.*;
import static webelements.WebElements.dropDownWeb;

public class HomePage extends WebAPI {

    //@FindBy(css=shopLinksWebElements) public List<WebElement> shopLinks;
    @FindBy(how = How.CSS, using = searchbox )
    public WebElement usersearchbox;
    @FindBy(how = How.CSS, using = clicksearchbutton )
    public WebElement clickonsearchbutton;
    @FindBy(how = How.XPATH, using = At_TDeals )
    public WebElement clickAt_TDeals;
    @FindBy(how = How.XPATH, using = validationWE )
    public WebElement checkvalidationWE;
    @FindBy(how = How.XPATH,using = searchField)
    public WebElement setSearchField;
    @FindBy(how = How.XPATH,using = validateText)
    public WebElement doValidateText;
    @FindBy(how = How.XPATH,using = dropDownWeb)
    public WebElement dropDownWebElement;

    public void enterKeyWord(){
        //Enter keyword in search box
        usersearchbox.sendKeys("AT&T Deals");
        Actions drpdown = new Actions(driver);
        drpdown.sendKeys(Keys.ENTER).perform();
    }
    public void clickSearchButton() {
        clickAt_TDeals.click();
        clickonsearchbutton.click();
    }
    public void validateSearchProduct(String expectedResult) {
        //String actualResult = checkvalidationWE.getText();
        String actualResult = driver.getTitle();
        System.out.println(actualResult);

       // Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }
    public void validateSearchProduct(List<String> expectedResult) {
        String actualResult = checkvalidationWE.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }
    public void scrollDownTheWebPage() {
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("window.scrollBy(0,2000)"); }
    public void scrollDownTillEnd()  {
        JavascriptExecutor js1 = (JavascriptExecutor) driver;
        js1.executeScript("window.scrollTo(0, document.body.scrollHeight)"); }

    public void Scrolldown() {
        }
    public void inputSearchField(){
        setSearchField.sendKeys("AT&T PREPAID"); }
}


