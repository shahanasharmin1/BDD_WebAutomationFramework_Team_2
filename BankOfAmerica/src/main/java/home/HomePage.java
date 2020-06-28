package home;
import common.WebAPI;
import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import webelements.Webelements;
import java.sql.SQLOutput;
import java.util.List;

import static webelements.Webelements.*;
public class HomePage extends WebAPI {

    //    @FindBy(css=shopLinksWebElements) public List<WebElement> shopLinks;
    @FindBy(how = How.XPATH, using = onlineID )
    WebElement onlineIDElement ;
    @FindBy(how = How.XPATH, using = password )
    WebElement passwordElement ;
    @FindBy(how = How.XPATH, using =signIn )
    WebElement signInElement ;
    @FindBy(how = How.XPATH, using = hoveronhomeloans )
    WebElement hoveronhomeloansElement ;
    @FindBy(how = How.XPATH, using =autoloans )
    WebElement autoloansElement ;
    @FindBy(how = How.XPATH, using =cashrewardscreditcards )
    WebElement cashrewardscreditcardsElement ;
    @FindBy(how = How.XPATH, using =validationtext)
    WebElement  validationtextElement;
    @FindBy(how = How.XPATH, using =searchbox)
    WebElement  searchboxElement;
    @FindBy(how = How.XPATH, using =searchbutton)
    WebElement  searchbuttonElement;
    @FindBy(how = How.XPATH, using =validationtext)
    WebElement validationelementElement;
    @FindBy(how = How.XPATH, using = logo )
    WebElement logoElement ;
    @FindBy(how = How.XPATH, using = clickonimage )
    WebElement clickonimageElement ;


    public void enterID(){
        onlineIDElement.sendKeys("shamima");
    }
   public void enterpassword(){
       passwordElement.sendKeys("pl944985");

   }
   public void clicksignbutton(){
        signInElement.click();
    }

    public void validationLogIn() {
        String title = driver.getTitle();
        System.out.println(title);
        Assert.assertEquals("Bank of america|Online Banking|SignIn|Online ID", "Bank of America |Online Banking|Sign In|Online ID");
    }

    public void scrollDownTheWebPage() {
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("window.scrollBy(0,1000)");
    }
    public void scrollDownTillEnd()  {
        JavascriptExecutor js1 = (JavascriptExecutor) driver;
        js1.executeScript("window.scrollTo(0, document.body.scrollHeight)");
    }
    public void userhoveronhomeloansElement() {
        mouseHoverByXpath("//a[@id='navHomeLoans']//span[@class='title'][contains(text(),'Home L");

    }
    public void clickonautoloans(){
    autoloansElement.click();
    }
    public void clickCashrewardscreditcards(){
     cashrewardscreditcardsElement.click();
    }
    public void Validatetext(String expectedResult){
        String actualResult="text" ;
        Assert.assertEquals("Search Result not Displayeed",expectedResult,actualResult);
    }

    public void enterKeyWord() {
        //Enter keyword in search box
        searchboxElement.sendKeys("mobile banking");
        Actions drpdown = new Actions(driver);
        drpdown.sendKeys(Keys.ENTER).perform();
    }
    public void clickSearchButton() {
        searchbuttonElement.sendKeys("mobile banking");
    }

    public void validateSearchProduct(List<String> expectedResult) {
        String actualResult = searchbuttonElement.getText();
        Assert.assertEquals("Search Result not Displayed", expectedResult, actualResult);

    }
    public void clickonlogo() {
        logoElement.click();
    }

    public void clickonimage() {
        clickonimageElement.click();
    }



}















