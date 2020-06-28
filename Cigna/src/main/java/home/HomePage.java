package home;

import common.WebAPI;
import org.junit.Assert;
import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import static webelements.Webelements.*;

public class HomePage extends WebAPI {
    @FindBy(how = How.CSS, using = medicaretab)
    public WebElement medicareelement;
    @FindBy(how = How.XPATH, using = insuranceelement)
    public WebElement insuranceWebelement;
    @FindBy(how = How.CSS, using = searchBoxElement)
    public WebElement searchBox;
    @FindBy(how = How.CSS, using = clickButtonelement)
    public WebElement clickButton;
    @FindBy(how = How.CSS, using = validationCignaInternationmalText)
    public WebElement validationCignaInternationmalTextelement;
    @FindBy(how = How.XPATH, using = logInButton)
    public WebElement mouseHoveringForCustomerlogIn;
    @FindBy(how = How.CSS, using = getTitleElement)
    public WebElement getTilte;
    @FindBy(how = How.CSS, using = contactonasTab)
    public WebElement hoveringOnContactanosTab;
    @FindBy(how = How.CSS, using = MedicareTab)
    public WebElement medicare;
    @FindBy(how = How.XPATH, using = clickOnButton)
    public WebElement clickOnOption1;
    @FindBy(how = How.XPATH, using =  searchTab)
    public WebElement searchTabelement;
    @FindBy(how = How.CSS, using =  healthCareProviders)
    public WebElement healthCareProviderselement;
    @FindBy(how = How.CSS, using =  employersAndbrokersTab)
    public WebElement employersAndbrokersTabelement;
    @FindBy(how = How.CSS, using =  IndividualsAndFamiliesElement)
    public WebElement hoverOnIndividualsAndFamiliesElement;

    public void usermedicareelement() {
        clickByCSS(medicaretab);
    }
    public void thescrollDownTheWebPage() {
       scrollDownTheWebPage();
    }
    public void validatetext(String expectedResult) {
        String actualResult = insuranceWebelement.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }
    public void thescrollDownTillEnd()  {
        scrollDownTillEnd();
    }
    public void validatetextofpage(String expectedResult) {
        String actualResult = insuranceWebelement.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }
    public void enterKeyword() {
        typeByCss( searchBoxElement, "health insurance");
    }
    public void clickonButton() {
        clickByCSS( clickButtonelement);
    }
    public void UservalidationCignaInternationmalTextelement(String expectedResult) {
        String actualResult = validationCignaInternationmalTextelement.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }
    public void goToCustomerLogInByMouseHovering() {
        mouseHoverByXpath(logInButton);
    }
    public String getTilteOfcignaInternationalTab() {
        return getTilte.getText();
    }
    public void userHoverOnhealthCareProviderselement() {
        mouseHoverByCSS( healthCareProviders);
    }
    public void useremployersAndbrokersTabelement() {
        mouseHoverByCSS(employersAndbrokersTab );
    }
    public void userhoverOnIndividualsAndFamiliesElement() {
        mouseHoverByCSS(IndividualsAndFamiliesElement );
    }
}
