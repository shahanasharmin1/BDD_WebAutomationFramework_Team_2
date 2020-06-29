package home;

import common.WebAPI;
import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import static webelements.Webelements.*;

public class HomePage extends WebAPI {
    @FindBy(how = How.XPATH, using = InsforIndandfamilies)
    public WebElement checkInsforIndandfamilies;
    @FindBy(how = How.XPATH, using = dentalPlans)
    public WebElement checkdentalPlans;
    @FindBy(how = How.XPATH, using = mediCarePlans)
    public WebElement checkmediCarePlans;
    @FindBy(how = How.XPATH, using = mediCareSuppPlans)
    public WebElement checkmediCareSuppPlans;
    @FindBy(how = How.XPATH, using = otherSuppIns)
    public WebElement checkotherSuppIns;
    @FindBy(how = How.XPATH, using = interNheathIns)
    public WebElement checkinterNheathIns;
    @FindBy(how = How.XPATH, using = validatemediCarePlans)
    public WebElement dovalidatemediCarePlans;

    public void InsforIndandfamilies(){
        checkInsforIndandfamilies.click();
    }
    public void dentalPlans(){
        checkdentalPlans.click();
    }
    public void mediCarePlans(){
        checkmediCarePlans.click();
    }
    public void mediCareSuppPlans(){
        checkmediCareSuppPlans.click();
    }
    public void otherSuppIns(){
        checkotherSuppIns.click();
    }
    public void interNheathIns(){
        checkinterNheathIns.click();
    }
    public void validatemediCarePlans(String expectedResult) {
        String actualResult = "validatemediCarePlans";
        Assert.assertEquals("Search Result not Displayed", expectedResult, actualResult);
    }
    public void scrollDownTheWebPage() {
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("window.scrollBy(0,2000)"); }

    public void scrollDownTillEnd()  {
        JavascriptExecutor js1 = (JavascriptExecutor) driver;
        js1.executeScript("window.scrollTo(0, document.body.scrollHeight)"); }
}
