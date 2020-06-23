package home;

import common.WebAPI;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import static webelements.WebElements.*;

public class HomePage extends WebAPI {

    @FindBy(how = How.CSS, using = Hotelselement)
    WebElement hotelsWebelement;
    @FindBy(how = How.CSS, using = enterKeywordelement)
    WebElement enterKeywordWebelement;
    @FindBy(how = How.CSS, using = textElement)
    WebElement textWebelement;

    public void clickonHoteltab() {
        hotelsWebelement.click();
    }
    public void enterKeyword() {
        enterKeywordWebelement.sendKeys("Miami");
    }
    public void validatingsearchBox() {
        String expectedText = "Nearby";
        String actualText = textWebelement.getText();
        if (actualText.equals(expectedText)) {
            System.out.println("the actual results are same : " + actualText);
        } else {
            System.out.println("the actual results are not  same : " + actualText);
        }
    }
}
