package home;
import common.WebAPI;
import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import static webelements.Webelements.*;

public class HomePage extends WebAPI {


    @FindBy(how = How.XPATH, using =signIn  )
    public WebElement signInElement;
    @FindBy(how = How.XPATH, using =series  )
    public WebElement seriesElement;
    @FindBy(how = How.XPATH, using =movies )
    public WebElement moviesInElement;
    @FindBy(how = How.XPATH, using =specials  )
    public WebElement specialsElement;
    @FindBy(how = How.XPATH, using =sports )
    public WebElement sportsInElement;
    @FindBy(how = How.XPATH, using =kids  )
    public WebElement kidsInElement;
    @FindBy(how = How.XPATH, using =Validatetext )
    public WebElement ValidatetextElement;
    @FindBy(how = How.XPATH, using =HBOLogo )
    public WebElement HBOLogoElement;
    @FindBy(how = How.XPATH, using = hoveronsearchbutton)
    public WebElement hoveronsearchbuttonElement;
    @FindBy(how = How.XPATH, using = dropdownallsearies)
    public WebElement dropdownallseariesElement;
    @FindBy(how = How.TAG_NAME, using =clickonImage )
    public WebElement clickonImageElement;
    @FindBy(how = How.LINK_TEXT, using =clickonfreeepisodes )
    public WebElement clickonfreeepisodesElement ;



    public void clicksignIn(){
    signInElement.click();
    }
    public void clickseries(){
    seriesElement.click();
    }
    public void clickmovies(){
    moviesInElement.click();
    }

    public void clickspecials(){
    specialsElement.click();
    }

    public void clicksports(){
    sportsInElement.click();
    }
    public void clickkids(){
    kidsInElement.click();

    }
    public void Validatetext(String expectedResult){
    String actualResult="text" ;
    Assert.assertEquals("Search Result not Displayeed",expectedResult,actualResult);
    }

    public void scrollDownTheWebPage() {
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("window.scrollBy(0,1000)");
    }
    public void scrollDownTillEnd()  {
        JavascriptExecutor js1 = (JavascriptExecutor) driver;
        js1.executeScript("window.scrollTo(0, document.body.scrollHeight)");
    }
    public void clickonHBOLogo(){
    HBOLogoElement.click();

    }
    public void hoveronsearchbutton(){
    mouseHoverByXpath("//*[@id=\"root\"]/main/div[2]/header/div[1]/div/div[2]/div/div/div");
    }
    public void dropdownallsearies(){
        windowMaximize();
        selectOptionByVisibleText(dropdownallseariesElement, "ALL SERIES");
        driver.getTitle();
    }
    public void clickonImage(){
    clickonImageElement.click();

    }
    public void clickonfreeepisodes(){
        clickonfreeepisodesElement.click();

    }



}
