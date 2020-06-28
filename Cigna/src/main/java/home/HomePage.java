package home;
import common.WebAPI;
import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import webelements.Webelements;
import static webelements.Webelements.*;
public class HomePage extends WebAPI {

    //    @FindBy(css=shopLinksWebElements) public List<WebElement> shopLinks;

    @FindBy(how = How.XPATH, using = HealthCareProviders )
     WebElement HealthCareProvidersElement ;
    @FindBy(how = How.CSS, using = hoveronCoverageandClaims)
    WebElement  hoveronCoverageandClaimsElement ;
    @FindBy(how = How.XPATH, using = hoveronMedicare)
    WebElement hoveronMedicareElement ;
    @FindBy(how = How.ID, using = clickonLogIn)
    WebElement  clickonLogInElement ;
    @FindBy(how = How.ID, using = clickonuserID)
    WebElement clickonuserIDElement  ;
    @FindBy(how = How.ID, using = clickonpassword)
    WebElement clickonpasswordElement  ;
    @FindBy(how = How.XPATH, using =clickonLogo )
    WebElement clickonLogoElement  ;
    @FindBy(how = How.XPATH, using =plansandservices )
    WebElement plansandservicesElement  ;
    @FindBy(how = How.XPATH, using =companyprofile )
    WebElement companyprofileElement  ;
    @FindBy(how = How.XPATH, using = careers)
    WebElement careersElement  ;
    @FindBy(how = How.XPATH, using =newsroom )
    WebElement newsroomElement  ;
    @FindBy(how = How.XPATH, using =investors)
    WebElement investorsElement  ;
    @FindBy(how = How.XPATH, using =suppliers )
    WebElement suppliersElement  ;
    @FindBy(how = How.XPATH, using =thirdpartyadministrators )
    WebElement thirdpartyadministratorsElement  ;
    @FindBy(how = How.XPATH, using =international )
    WebElement internationalElement  ;
    @FindBy(how = How.XPATH, using = validationelement)
    WebElement validationelementElement  ;


    public void clickonHealthCareProviders(){
     HealthCareProvidersElement.click();
    }
    public void scrollDownTheWebPage() {
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("window.scrollBy(0,1000)");
    }
    public void scrollDownTillEnd()  {
        JavascriptExecutor js1 = (JavascriptExecutor) driver;
        js1.executeScript("window.scrollTo(0, document.body.scrollHeight)");
    }
    public void HoveronCoverageandClaims(){
    mouseHoverByCSS("body.js-focus-visible div.ls-canvas:nth-child(4) div.ls-row:nth-child(1) ");
    }

    public  void clickonLogIn(){
    clickonLogInElement.click();
    }
    public  void clickonuserID(){
    clickonuserIDElement.click();
    }
    public void clickonLogo(){
    clickonLogoElement.click();
    }
    public void HoveronMedicare() {
        mouseHoverByXpath("//div[3]//cigna-search-category-card[1]//div[1]//button[1]//img[1]");
    }
    public void userhoveronplansandservices(){
        mouseHoverByXpath("//button[contains(text(),'Plans and Services')]");
    }
    public void clickcompanyprofile(){
    companyprofileElement.click();
    }

    public void clickconcareers(){
        careersElement.click();
    }
    public void clickonnewsroom(){
        newsroomElement.click();
    }
    public void clickoninvestors(){
        investorsElement.click();
    }

    public void clickonsuppliers(){
        suppliersElement.click();
    }
    public void clickonthirdpartyadministrators(){
        thirdpartyadministratorsElement.click();
    }

    public void clickoninternational(){
        internationalElement.click();
    }
    public void clickon(){
        companyprofileElement.click();
    }

    public void Validatetext(String expectedResult){
        String actualResult="text" ;
        Assert.assertEquals("Search Result not Displayeed",expectedResult,actualResult);
    }






}
