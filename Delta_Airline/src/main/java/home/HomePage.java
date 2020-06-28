package home;

import common.WebAPI;
import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import static webelements.Webelements.*;

public class HomePage extends WebAPI {

    @FindBy(how = How.CSS, using = logIn)
    WebElement logInElement;
    @FindBy(how = How.XPATH, using = text)
    WebElement textElement;
    @FindBy(how = How.CSS, using = loginelement)
    public WebElement loginWebelement;
    @FindBy(how = How.XPATH, using = inputbox)
    public WebElement inputboxelement;
    @FindBy(how = How.XPATH, using = inputpassword)
    public WebElement inputpasswordelement;
    @FindBy(how = How.CSS, using = checkbox)
    public WebElement checkboxelement;
    @FindBy(how = How.CLASS_NAME, using = validationelement)
    public WebElement validationelementwebelement;
    @FindBy(how = How.CSS, using = hoverSkyMiles)
    public WebElement hoverSkyMileswebelement;
    @FindBy(how = How.CSS, using = dropdown)
    public WebElement dropdownwebelement;
    @FindBy(how = How.XPATH, using = refundableFares)
    public WebElement refundableFareswebelement;
    @FindBy(how = How.XPATH, using = checkonmydatesareflexible)
    public WebElement checkonmydatesareflexiblewebelement;
    @FindBy(how = How.CLASS_NAME, using = validatehomepage)
    public WebElement validatehomepagewebelement;

    public void userloginbutton() {
        clickByCSS(logIn);
    }
    public void validateText(String expectedResult) {
        windowMaximize();
        String actualResult = textElement.getText();
        Assert.assertEquals("Search Result not Displayed", expectedResult, actualResult);
    }
    public void theScrollDownTheWebPage() {
      scrollDownTheWebPage();
    }
    public void theScrollDownTillEnd() {
        scrollDownTillEnd();
    }
    public void userlogin() {
        clickByCSS( loginelement);
    }
    public void userinputboxelement() {
        typeByXpath(inputbox,"Mira");
    }
    public void userinputpasswordelement() {
        typeByXpath(inputpassword,"1234");
    }
    public void usercheckboxelement() {
        checkBoxSelectedByCSS(checkbox);
    }
    public void validateLogin(String expectedResult) {
        try {
            String actualResult = validationelementwebelement.getText();
            Assert.assertEquals("showing nothing", expectedResult, actualResult);
        } catch (Exception e) {
        }
    }
    public void userhoverSkyMileswebelement() {
        mouseHoverByCSS("#headSectab2");
    }
    public void userdropdownwebelement() {
        windowMaximize();
        selectOptionByVisibleText(dropdownwebelement, "One Way");
        driver.getTitle();
    }
    public void userrefundableFareswebelement() {
        windowMaximize();
        checkBoxSelectedByXpath(refundableFares);
    }
    public void uservalidatehomepagewebelement(String expectedResult) {
        try {
            String actualresult = validatehomepagewebelement.getText();
            Assert.assertEquals("actualresult", expectedResult, "showing nothing");
        } catch (Exception e) {
        }
    }
    public void usercheckonmydatesareflexiblewebelement() {
        checkBoxSelectedByXpath(checkonmydatesareflexible);
    }
    public void enterKeyWord() {
        typeByXpath(inputbox,"mira");
    }
}
