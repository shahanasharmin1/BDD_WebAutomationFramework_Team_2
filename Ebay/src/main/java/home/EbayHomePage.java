package home;

import common.WebAPI;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import static webelements.webelements.*;

public class EbayHomePage extends WebAPI {

    @FindBy(how= How.XPATH, using= motors)
    public WebElement hoverMotors;
    @FindBy(how= How.XPATH, using=  validatehover)
    public WebElement dovalidatehover;
    @FindBy(how= How.XPATH, using=  fashion)
    public WebElement hoverfashion;
    @FindBy(how= How.XPATH, using=  electronics)
    public WebElement hoverelectronics;
    @FindBy(how= How.XPATH, using=  collectandarts)
    public WebElement hovercollectandarts;
    @FindBy(how= How.XPATH, using=  homeandgarden)
    public WebElement hoverhomeandgarden;
    @FindBy(how= How.XPATH, using=  sportinggoods)
    public WebElement hoversportinggoods;
    @FindBy(how= How.XPATH, using= toys)
    public WebElement hovertoys;
    @FindBy(how= How.XPATH, using=  businsandindustrl)
    public WebElement hoverbusinsandindustrl;
    @FindBy(how= How.XPATH, using=  validatedeals)
    public WebElement dovalidatedeals;
    @FindBy(how= How.XPATH, using=  music)
    public WebElement hovermusic;
    @FindBy(how= How.XPATH, using=  deals)
    public WebElement hoverdeals;

    public void motors(){
        mouseHover(hoverMotors);
        implicitwait();
    }
    public void validatehover(String expectedResult) {
        String actualResult = "dovalidatehover";
        Assert.assertEquals("Search Result not Displayed", expectedResult, actualResult);
    }
    public void fashion(){
        mouseHover(hoverfashion);
    }
    public void electronics(){
        mouseHover(hoverelectronics);
    }
    public void collectandarts(){
        mouseHover(hovercollectandarts);
    }
    public void homeandgarden(){
        mouseHover(hoverhomeandgarden);
    }
    public void sportinggoods(){
        mouseHover(hoversportinggoods);
    }
    public void toys(){
        mouseHover(hovertoys);
    }
    public void businsandindustrl(){
        mouseHover(hoverbusinsandindustrl);
    }
    public void music(){
        mouseHover(hovermusic);
    }
    public void deals(){
        mouseHover(hoverdeals);
    }
    public void validatedeals(){
        mouseHover(dovalidatedeals);
    }
}
