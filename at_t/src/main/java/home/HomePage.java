package home;

import common.WebAPI;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import static webelements.WebElements.*;

public class HomePage extends WebAPI {

    //    @FindBy(css=shopLinksWebElements) public List<WebElement> shopLinks;
    @FindBy(how = How.CSS, using = searchbox )
    public WebElement usersearchbox;
    @FindBy(how = How.CSS, using = clicksearchbutton )
    public WebElement clickonsearchbutton;

    public void enterKeyWord() throws InterruptedException {
        //Enter keyword in search box
        driver.manage().window().maximize();
        Thread.sleep(3000);
        usersearchbox.sendKeys("AT&T Deals");

    }
    public void clickSearchButton() {
        clickonsearchbutton.click();
    }

    public void validateSearchProduct(String expectedResult) {
        String actualResult = "AT&T Deals";
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);

    }


}
