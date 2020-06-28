package home;

import common.WebAPI;
import io.cucumber.java.After;
import io.cucumber.java.Before;
import io.cucumber.java.en.When;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.PageFactory;
import static webelements.Webelements.*;

public class BasicPage extends WebAPI {
    @FindBy(how = How.XPATH, using = PasswordElement)
    public WebElement EnterKeyWordForPassword;
    @FindBy(how = How.CSS, using = getTitleElement)
    public WebElement getTilte;
    @FindBy(how = How.CSS, using = contactonasTab)
    public WebElement hoveringOnContactanosTab;
    @FindBy(how = How.CSS, using = MedicareTab)
    public WebElement medicare;
    @FindBy(how = How.XPATH, using = clickOnButton)
    public WebElement clickOnOption1;
    @FindBy(how = How.CSS, using = medicaretab)
    public WebElement medicareelement;
    @FindBy(how = How.XPATH, using =  searchTab)
    public WebElement searchTabelement;
    @FindBy(how = How.CSS, using = userNameTab)
    public WebElement Username;
    @FindBy(how = How.CSS, using = validationCignaInternationmalText)
    public WebElement validationTextelement;
    @FindBy(how = How.CSS, using =  healthCareProviders)
    public WebElement healthCareProviderselement;
    @FindBy(how = How.CSS, using =  employersAndbrokersTab)
    public WebElement employersAndbrokersTabelement;
    @FindBy(how = How.CSS, using =  IndividualsAndFamiliesElement)
    public WebElement hoverOnIndividualsAndFamiliesElement;
    @FindBy(how = How.CSS, using = aboutUsTab)
    public WebElement aboutUsElement;

    public void enterKeyWordForLogIn() {
        typeByCss( userNameTab, "mohana@gmail.com") ;
    }
    public void setEnterKeyWordForPassword() {
        typeByXpath( PasswordElement, "1234");
    }
    public void mouseHoverOnAquienesServimos() {
        mouseHoverByCSS(contactonasTab);
    }
    public void hoverOnMedicare() {
        mouseHoverByCSS( MedicareTab);
    }
    public void userClickOnOprion1() {
        mouseHoverByCSS(MedicareTab);
        mouseHoverByXpath(clickOnButton);
    }
    public void UservalidationCignaInternationmalTextelement(String expectedResult) {
        String actualResult = validationTextelement.getText();
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }
    public void setSearchwebElement() {
        typeByCss(searchTab, "Help");
    }
    public void userhoverOnaboutUsElement() {
        mouseHoverByCSS( aboutUsTab);
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
