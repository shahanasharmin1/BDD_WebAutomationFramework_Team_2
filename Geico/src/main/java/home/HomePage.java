package home;

import common.WebAPI;
import io.cucumber.java.en.Then;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.Select;
import static webelements.Webelements.*;

public class HomePage extends WebAPI {

    @FindBy(how= How.CSS,using=boatelement)
    WebElement boatWebelement;
    @FindBy(how= How.CSS,using=getBoatelement)
    WebElement getBoatwebelement;
    @FindBy(how = How.CSS, using = getAutoTab)
    WebElement getAutoTabwebelement;
    @FindBy(how = How.CSS, using =text)
    WebElement textwebelement;

    public void userclickonboatWebelement(){
        clickByCSS(boatelement);
    }
    public void validateboatWebelement(){
        String expectedText=" Boat";
        String actualText=getBoatwebelement.getText();
        if( actualText.equals(expectedText) ){
            System.out.println(    actualText);
        }else{
            System.out.println(  actualText);
        }
    }
    public void dropDownAutoTab(){
        selectOptionByIndex(getAutoTabwebelement,"4");
    }
 public void validatetext(String expectedresult){
     String actualResult = textwebelement.getText();
     Assert.assertEquals("Search Result not Displayed", expectedresult, actualResult);
}
    public void thescrollDownThewebPage() {
        scrollDownTheWebPage();

    }
    public void theScrollDownTillEnd()  {
       scrollDownTillEnd();
    }
}
