package home;

import com.mysql.cj.jdbc.Driver;
import common.WebAPI;
import org.junit.Assert;
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
}
