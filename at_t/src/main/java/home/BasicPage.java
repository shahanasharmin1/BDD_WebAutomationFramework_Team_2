package home;

import common.WebAPI;
import org.junit.Assert;
import org.openqa.selenium.Alert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import static webelements.WebElements.userID;
import static webelements.WebElements.validationtext;

public class BasicPage extends WebAPI {
    @FindBy(how= How.XPATH,using=  userID)
    WebElement userIDwebElement;
    @FindBy(how = How.CSS, using = validationtext)
    WebElement validationtextElement;

    public void userIDElement(){
        windowMaximize();
        typeByCssNEnter( userID, "tanjina");
    }
    public void uservalidationtextElement(String expected) {
        try{
            String actualResult = validationtextElement.getText();
            Assert.assertEquals(" Result not Displayed", expected, actualResult);
        }catch(Exception e){

        }
    }
    public void handleAlert(){
        navigateTo("https://www.att.com/prepaid/");
        okAlert();
    }



}
