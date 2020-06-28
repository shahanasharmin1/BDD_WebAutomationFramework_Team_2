package home;

import com.mysql.cj.jdbc.Driver;
import common.WebAPI;
import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import java.util.List;
import static webelements.WebElements.*;
public class HomePage extends WebAPI {

    //    @FindBy(css=shopLinksWebElements) public List<WebElement> shopLinks;
    @FindBy(how = How.CSS, using = searchbox )
    public WebElement usersearchbox;
    @FindBy(how = How.CSS, using = clicksearchbutton )
    public WebElement clickonsearchbutton;
    @FindBy(how = How.XPATH, using = At_TDeals )
    public WebElement clickAt_TDeals;
    @FindBy(how = How.XPATH, using = validationWE )
    public WebElement checkvalidationWE;
    @FindBy(how = How.XPATH, using =clickonimage  )
    public WebElement clickonimageElement;
    @FindBy(how = How.XPATH, using = hoveroninternet)
    public WebElement hoveroninternetElement;
    @FindBy(how = How.XPATH, using = deals)
    public WebElement dealsElement;
    @FindBy(how = How.XPATH, using =wireless )
    public WebElement wirelessElement;
    @FindBy(how = How.XPATH, using = internet)
    public WebElement internetElement;
    @FindBy(how = How.XPATH, using =tv )
    public WebElement tvElement;
    @FindBy(how = How.XPATH, using =prepaid )
    public WebElement prepaidElement;
    @FindBy(how = How.XPATH, using =accounttab)
    public WebElement accounttabElement;



    public void enterKeyWord(){
        //Enter keyword in search box
        usersearchbox.sendKeys(" At_TDeals");
        Actions drpdown = new Actions(driver);
        drpdown.sendKeys(Keys.ENTER).perform();
    }
    public void clickSearchButton() {
        clickAt_TDeals.click();
        clickonsearchbutton.click();
    }
    public void validateSearchProduct1(String expectedResult) {
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
        js.executeScript("window.scrollBy(0,1000)");
    }
    public void scrollDownTillEnd()  {
        JavascriptExecutor js1 = (JavascriptExecutor) driver;
        js1.executeScript("window.scrollTo(0, document.body.scrollHeight)");
    }
    public void clickonimage(){
    clickonimageElement.click();
    }
    public void hoveroninternet(){
    mouseHoverByXpath("//li[@id='HEADBAND03']//a[@class='_1hxmk']");

    }
   public void deals(){
     dealsElement.click();
   }
    public void wireless(){
        dealsElement.click();
    }
    public void internet(){
        dealsElement.click();
    }
    public void tv(){
        dealsElement.click();
    }
    public void prepaid(){
        dealsElement.click();
    }
    public void validateSearchProduct2(String expectedResult){
     String actualresult= "internet";
     Assert.assertEquals("Search Result not Displayed",expectedResult,actualresult);

    }
    public void userclickonDropButton(){
     selectOptionByVisibleText(accounttabElement,"View and pay bill");

    }



}
