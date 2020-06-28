package home;

import common.WebAPI;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import static webelements.Webelements.*;
import static webelements.Webelements.loginelement;

public class BasicPage extends WebAPI {

    @FindBy(how= How.XPATH,using=checkingElement)
    WebElement hoverOnCheckingElement;
    @FindBy(how = How.CSS, using = validationSignin)
    public WebElement validationSigninelement;
    @FindBy(how = How.CSS, using = savingselement)
    public WebElement savingsWebelement;
    @FindBy(how = How.XPATH, using = CreditCards)
    public WebElement CreditCardsWebelement;
    @FindBy(how = How.CSS, using = homeLoans)
    public WebElement homeLoansWebelement;
    @FindBy(how = How.XPATH, using = autoLoans)
    public WebElement autoLoansWebelement;
    @FindBy(how = How.CSS, using = investingElement)
    public WebElement investingElementWebelement;
    @FindBy(how = How.CSS, using = personalElement)
    public WebElement personalElementWebelement;
    @FindBy(how = How.CSS, using = smallBusiness)
    public WebElement smallBusinessWebelement;
    @FindBy(how = How.CSS, using =  wealthManagement)
    public WebElement  wealthManagementWebelement;
    @FindBy(how = How.CSS, using =  businessAndInstitutions)
    public WebElement  businessAndInstitutionsWebelement;
    @FindBy(how = How.CSS, using = securityElement)
    public WebElement  securityElementWebelement;
    @FindBy(how = How.CSS, using = aboutUs)
    public WebElement  aboutUsWebelement;


    public void userhoverOnCheckingElement() {
        mouseHoverByCSS(checkingElement);
    }
    public void uservalidationSigninelement(String expectedResult){
        try{
            String actual= validationSigninelement.getText();
            Assert.assertEquals("actual",expectedResult,"nothing");
        }catch(Exception e){
        }
    }
    public void userhoverOnsavingsWebelement(){
        mouseHoverByCSS(savingselement);
    }
    public void userhoverOnCreditCardsWebelement(){
        mouseHoverByXpath(CreditCards);
    }
    public void userhoverOnhomeLoansWebelement(){
        mouseHoverByCSS(homeLoans);
    }
    public void userhoverOnautoLoansWebelement(){
        mouseHoverByXpath(autoLoans);
    }
    public void userhoverOninvestingElementWebelement(){
        mouseHoverByCSS(investingElement);
    }
    public void userpersonaltWebelement(){
        clickByCSS(personalElement);
    }
    public void usersmallBusinessWebelement(){
        clickByCSS(personalElement);
    }
    public void userwealthManagementWebelement(){
        clickByCSS(wealthManagement);
    }
    public void userbusinessAndInstitutionsWebelement(){
        clickByCSS(businessAndInstitutions);
    }
    public void usersecurityElementWebelement(){
        clickByCSS(securityElement);
    }
    public void useraboutUsWebelement(){
        clickByCSS(aboutUs);
    }
}
