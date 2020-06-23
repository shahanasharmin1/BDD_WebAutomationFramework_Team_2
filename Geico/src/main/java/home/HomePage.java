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
        boatWebelement.click();
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
        Select select=new Select(getAutoTabwebelement);
        select.selectByIndex(4);
    }

 public void validatetext(String expectedresult){

     String actualResult = textwebelement.getText();
     Assert.assertEquals("Search Result not Displayed", expectedresult, actualResult);

}
    public void scrollDownTheWebPage() {
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("window.scrollBy(0,1000)");
    }

    public void scrollDownTillEnd()  {
        JavascriptExecutor js1 = (JavascriptExecutor) driver;
        js1.executeScript("window.scrollTo(0, document.body.scrollHeight)");
    }











}
