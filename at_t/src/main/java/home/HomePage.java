package home;

import common.WebAPI;
import org.junit.Assert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import static webelements.WebElements.*;

public class HomePage extends WebAPI {

    @FindBy(how = How.CSS, using = searchbox)
    public WebElement usersearchbox;
    @FindBy(how = How.CSS, using = clicksearchbutton)
    public WebElement clickonsearchbutton;
    @FindBy(how = How.XPATH, using = tvelelemnt)
    public WebElement tvWebelelemnt;
    @FindBy(how = How.XPATH, using = accounttab )
    public WebElement accounttabelement ;

    public void enterKeyWord()  {
        usersearchbox.sendKeys("at&t tv");
    }
    public void clickSearchButton() {
        clickonsearchbutton.click();
    }

    public void validateSearchProduct(String expectedResult) {
        windowMaximize();
        String actualResult = tvWebelelemnt.getText();
        Assert.assertEquals("Search Result not Displayed", expectedResult, actualResult);
    }

    public void userclickonDropButton(){
        selectOptionByVisibleText(accounttabelement, "Manage profile");
    }











}
