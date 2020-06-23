package home;

import common.WebAPI;
import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import static webelements.Webelements.*;


public class HomePage extends WebAPI {

    @FindBy(how= How.CSS,using=logIn)
    WebElement logInElement;


    @FindBy(how= How.XPATH,using=text)
    WebElement textElement;
    @FindBy(how=How.CSS, using=  loginelement)
    public  WebElement  loginWebelement;

    @FindBy(how=How.XPATH, using=  inputbox)
    public  WebElement  inputboxelement;

    @FindBy(how=How.XPATH, using=  inputpassword)
    public  WebElement  inputpasswordelement;

    @FindBy(how=How.CSS, using=  checkbox)
    public  WebElement  checkboxelement;


    @FindBy(how=How.CLASS_NAME, using= validationelement)
    public  WebElement validationelementwebelement;


    @FindBy(how=How.CSS, using= hoverSkyMiles)
    public  WebElement hoverSkyMileswebelement;





    public void userloginbutton(){
        logInElement.click();
    }

    public void validateText(String expectedResult) {
        windowMaximize();
        String actualResult = textElement.getText();
        Assert.assertEquals("Search Result not Displayed", expectedResult, actualResult);
    }


    public void scrollDownTheWebPage() {
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("window.scrollBy(0,1000)");
    }

    public void scrollDownTillEnd()  {
        JavascriptExecutor js1 = (JavascriptExecutor) driver;
        js1.executeScript("window.scrollTo(0, document.body.scrollHeight)");
    }

    public void userlogin(){
        loginWebelement.click();
    }



    public void userinputboxelement(){
        inputboxelement.sendKeys("Mira");
    }

    public void userinputpasswordelement(){
        inputpasswordelement.sendKeys("1234");
    }


    public void usercheckboxelement(){
        checkboxelement.isSelected();
    }


    public void validateLogin(String expectedResult) {
      try{
          String actualResult = validationelementwebelement.getText();
          Assert.assertEquals( "showing nothing",expectedResult,actualResult);
      }catch(Exception e ){

      }

    }


    public void userhoverSkyMileswebelement(){
        windowMaximize();
        mouseHoverByCSS("#headSectab2");
    }









}
