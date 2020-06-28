package home;
import common.WebAPI;
import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import java.util.List;

import static webelements.Webelements.*;

public class HomePage extends WebAPI {
    @FindBy(how = How.CSS, using = searchElement)
    WebElement searchProductElement;
    @FindBy(how = How.CSS, using = searchButton)
    WebElement searchButtonElement;
    @FindBy(how = How.CSS, using = shoesgetText)
    WebElement shoesgetTextElement;
    @FindBy(how = How.CSS, using = imagelement)
    WebElement imageWebelement;
    @FindBy(how = How.CSS, using = imageGetText)
    WebElement imageGetTextWebelement;
    @FindBy(how = How.CSS, using = handsoap)
    WebElement handsoapWebelement;
    @FindBy(how = How.CSS, using = notebook)
    WebElement notebookWebelement;
    @FindBy(how = How.CSS, using = pencils)
    WebElement pencilsWebelement;
    @FindBy(how = How.CSS, using = waterbottle)
    WebElement waterbottleWebelement;
    @FindBy(how = How.CSS, using = ebaylogo)
    WebElement ebaylogoWebelement;



    public void userSeachBox() {
        searchProductElement.sendKeys("shoes");
    }

    public void clickOnSearchbutton() {
        searchButtonElement.click();
    }

    public void validateSearchProduct() {
        // validating the actual and expected text
        String expectedText = "shoes";
        String actualText = shoesgetTextElement.getText();
        // Comparing the text
        if (actualText.equals(expectedText)) {
            System.out.println("the actual results are same : " + actualText);
        } else {
            System.out.println("the actual results are not  same : " + actualText);
        }
    }

    public void userclickonimageWebelement() {
        imageWebelement.click();
    }

    public void validateimageElement() {
        // validating the actual and expected text
        String expectedText = "Shop, sell, or donate to make a social impact ";
        String actualText = imageGetTextWebelement.getText();
        // Comparing the text
        if (actualText.equals(expectedText)) {
            System.out.println("the actual results are same : " + actualText);
        } else {
            System.out.println("the actual results are not  same : " + actualText);
        }
    }

    public void scrollDownTheWebPage() {
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("window.scrollBy(0,1000)");
    }

    public void scrollDownTillEnd() {
        JavascriptExecutor js1 = (JavascriptExecutor) driver;
        js1.executeScript("window.scrollTo(0, document.body.scrollHeight)");
    }

    public void handsoap() {
        handsoapWebelement.click();
    }

    public void notebook() {
        notebookWebelement.click();
    }

    public void waterbottle() {
        waterbottleWebelement.click();
    }

    public void pencils() {
        pencilsWebelement.click();
    }

    public void validateSearchProduct2(String expectedResult) {
        String actualresult = "notebook";
        Assert.assertEquals("Search Result not Displayed", expectedResult, actualresult);
    }

    public void hoveronebaylogo(){
     mouseHoverByXpath(" //img[@id='gh-logo']");

    }




}