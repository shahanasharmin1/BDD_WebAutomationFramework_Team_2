package home;

import common.WebAPI;
import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import static webelements.Webelements.*;

public class HomePage extends WebAPI {
    @FindBy(how = How.CSS, using = medicaretab)
    public WebElement medicareelement;


    @FindBy(how = How.XPATH, using = insuranceelement)
    public WebElement insuranceWebelement;



    public void usermedicareelement() {
        clickByCSS(medicaretab);
    }


    public void scrollDownTheWebPage() {
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("window.scrollBy(0,1000)");
    }

    public void validatetext(String expectedResult) {
        String actualResult = insuranceWebelement.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);

    }

    public void scrollDownTillEnd()  {
        JavascriptExecutor js1 = (JavascriptExecutor) driver;
        js1.executeScript("window.scrollTo(0, document.body.scrollHeight)");
    }

    public void validatetextofpage(String expectedResult) {
        String actualResult = insuranceWebelement.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);

    }






}
