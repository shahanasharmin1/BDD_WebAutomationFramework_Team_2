package home;

import com.mysql.cj.jdbc.Driver;
import common.WebAPI;
import org.junit.Assert;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.Select;

import java.util.List;

import static webelements.WebElements.*;

public class HomePage extends WebAPI {

    @FindBy(how = How.CSS, using = searchbox)
    public WebElement usersearchbox;
    @FindBy(how = How.CSS, using = clicksearchbutton)
    public WebElement clickonsearchbutton;
    @FindBy(how = How.XPATH, using = tvelelemnt)
    public WebElement tvWebelelemnt;
    @FindBy(how = How.XPATH, using = accounttab)
    public WebElement accounttabelement;
    @FindBy(how = How.CSS, using = hoverOnMenu)
    WebElement MenuElement;
    @FindBy(how = How.CSS, using = validationtext)
    WebElement validationtextElement;
    @FindBy(how=How.CSS,using=imageElement)
    WebElement clickOnImageelement;
    @FindBy(how=How.CSS,using=clickOnDropButton)
    WebElement dropButtonWebElement;
    @FindBy(how=How.CSS,using=PrePaidElement)
    WebElement PrePaidWebElement;
    @FindBy(how=How.CSS,using=  accountSign)
    WebElement accountsignwebElement;

    public void enterKeyWord() {
       typeByCss(searchbox,"AT&T Deals");
    }
    public void clickSearchButton() {
        clickByCSS(clicksearchbutton);
    }
    public void validateSearchProduct(String expectedResult) {
        windowMaximize();
        String actualResult = tvWebelelemnt.getText();
        Assert.assertEquals("Search Result not Displayed", expectedResult, actualResult);
    }
    public void userclickonDropButton() {
        selectOptionByVisibleText(accounttabelement, "Manage profile");
    }
    public void hoveringOnMenuElement() {
        mouseHoverByCSS(hoverOnMenu);
    }
    public void uservalidationtextElement(String expected) {
        try{
            String actualResult = validationtextElement.getText();
            Assert.assertEquals(" Result not Displayed", expected, actualResult);
        }catch(Exception e){
        }
    }
    public void userScrollTheWebPage(){
        scrollDownTheWebPage();
}
    public void uesrScrollTillTheEnd(){
        scrollDownTillEnd();
}
    public void UserclickOnImageelement() {
        clickByCSS(imageElement);
    }
    public void dealsUrl(){
        navigateTo("https://www.att.com/deals/");
    }
    public void userClickOndropButton(){
        try{
            selectOptionByIndex(dropButtonWebElement, "3");
        }catch (Exception e ){
            System.out.println(" Not going to select anything");
        }
        System.out.println("It will Shows Current title:" +  driver.getTitle());
        driver.close();
    }
    public void phonesUrl(){
        navigateTo("https://www.att.com/buy/phones/apple-iphone-se-2020-256gb-white.html?offerid=13700010");
    }
    public void clickOnPrepaidTab(){
        clickByCSS(PrePaidElement);
    }
    public void userHoverSignInTab()  {
        mouseHoverByCSS(accountSign);
    }
    public void userIDElement(){
        windowMaximize();
        typeByCssNEnter( userID, "tanjina");
    }
}
