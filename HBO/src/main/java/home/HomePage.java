package home;

import common.WebAPI;
import org.apache.xmlbeans.impl.xb.xsdschema.Public;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import javax.swing.*;
import java.awt.*;
import java.util.List;
import static webelements.HomePageWebElements.*;


public class HomePage extends WebAPI {

    @FindBy(how = How.XPATH,using =searchBoxWebElement)
    public WebElement searchBox;
    @FindBy(how = How.XPATH,using = searchsign)
    public WebElement searchkeySign;
    @FindBy(how = How.XPATH,using = searchEmailAddress)
    public WebElement userEmailAddress;
    @FindBy(how = How.XPATH,using = searchPassword)
    public WebElement userSearchPassword;
    @FindBy(how = How.XPATH,using = searchSignIn)
    public WebElement userSearchSignIn;
    @FindBy(how = How.XPATH,using = searchPeteypedia)
    public WebElement userSearchPeteypedia;
    @FindBy(how=How.XPATH,using = searchTheComAndYou)
    public WebElement userSearchTheComAndYou;
    @FindBy(how = How.XPATH,using = searchTheRoadToReparations)
    public WebElement userSearchTheRoadToReparations;
    @FindBy(how = How.XPATH,using = searchForFourLetters)
    public WebElement userSearchForFourLetters;
    @FindBy(how = How.XPATH,using = searchForEvidence)
    public WebElement userSearchForEvidence;
    @FindBy(how = How.XPATH,using = searchForMediaNostalgia)
    public WebElement userSearchForMediaNostalgia;
    @FindBy(how = How.XPATH,using = searchForClipping)
    public WebElement userSearchForClipping;
    @FindBy(how = How.XPATH,using = searchForSisterNight)
    public WebElement userSearchForSisterNight;
    @FindBy(how = How.XPATH,using = searchForFogdancing)
    public WebElement userSearchForFogdancing;
    @FindBy(how = How.XPATH,using = searchForDalePetey)
    public WebElement userSearchForDalePetey;
    @FindBy(how = How.XPATH,using = searchGS)
    public WebElement userSearchGS;
    @FindBy(how = How.XPATH,using = searchAL)
    public WebElement userSearchAL;
    @FindBy(how = How.XPATH,using = searchTNR)
    public WebElement userSearchTNR;
    @FindBy(how = How.XPATH,using = validate)
    public WebElement doValidate;

    public void enterKeyWord(String keyword) { searchBox.sendKeys(keyword); }
    public void getSearchSign(){ searchkeySign.click(); }
    public void getEmailAddress(){
        userEmailAddress.sendKeys(" Email Address");
    }
    public void getPassword(){
        userSearchPassword.getAttribute("password");
    }
    public void getSignIn(){
        userSearchSignIn.click();
    }
    public void getSearchPeteypedia(){userSearchPeteypedia.click();}
    public void getSearchTheComAndYou(){userSearchTheComAndYou.click();}
    public void getSearchTheRoadToReparations(){userSearchTheRoadToReparations.click();}
    public void getSearchForFourLetters(){userSearchForFourLetters.click();}
    public void getSearchForEvidence(){userSearchForEvidence.click();}
    public void getSearchForMediaNostalgia(){userSearchForMediaNostalgia.click();}
    public void getSearchForClipping(){userSearchForClipping.click();}
    public void getSearchForSisterNight(){userSearchForSisterNight.click();}
    public void getSearchForFogdancing(){userSearchForFogdancing.click();}
    public void getSearchForDalePetey(){userSearchForDalePetey.click();}
    public void getSearchForGS(){userSearchGS.click();}
    public void getSearchForAL(){userSearchAL.click();}
    public void getSearchForTNR(){userSearchTNR.click();}

    public void setDoValidateText(String validateText){
        String actualResult = "doValidate";
        Assert.assertEquals("Search Result not Displayed",validateText,actualResult);
    }


























//    public void validateSearchProduct(String expectedResult) {
//        TextComponent searchValidText = null;
//        String actualResult = searchValidText.getText();
//        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
//
//    }






























//    public void validateSearchProduct(List<String> expectedResult) {
//        String actualResult = searchValidText.getText();
//        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
//
//    }


}
