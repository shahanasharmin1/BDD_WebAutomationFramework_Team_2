package home;

import common.WebAPI;
import org.apache.xmlbeans.impl.xb.xsdschema.Public;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import static webelements.HomePageWebElements.*;


public class HomePage extends WebAPI {

    @FindBy(how = How.XPATH,using = searchGS)
    public WebElement userSearchGS;
    @FindBy(how = How.XPATH,using = searchAL)
    public WebElement userSearchAL;
    @FindBy(how = How.XPATH,using = searchTNR)
    public WebElement userSearchTNR;
    @FindBy(how = How.XPATH,using = validate)
    public WebElement doValidate;

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
