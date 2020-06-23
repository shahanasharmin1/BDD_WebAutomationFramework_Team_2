package home;

import common.WebAPI;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import static webelements.Webelements.*;

public class HomePage extends WebAPI {

    @FindBy(how= How.XPATH,using=loginelement)
    WebElement logInButton;
    @FindBy(how= How.XPATH,using=bankofAmericaElement)
    WebElement bankofAmericaText;

    public void clickLogInButton(){
     driver.manage().window().maximize();
     logInButton.click();
 }
    public void userbankOfAmericaText() {
        String actualResult = logInButton.getText();
        Assert.assertEquals(" Result not Displayed", "logInButton.getText()",actualResult);
    }
}
