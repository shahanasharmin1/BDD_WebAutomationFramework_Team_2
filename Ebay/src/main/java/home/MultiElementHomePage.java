package home;

import common.WebAPI;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import static webelements.Webelements.*;

public class MultiElementHomePage extends WebAPI {
    @FindBy(how = How.ID,using = searchWebElement)
    public WebElement searchbox;
    @FindBy(how = How.XPATH,using = searchBoxButtonWebElement)
    public WebElement searchButton;
    @FindBy(how = How.XPATH,using = webElementSearchText)
    public WebElement SearchText;

    public void enterKeyWord(String keyword){
        searchbox.sendKeys(keyword);
    }
    public void clickSearchButton(){
        searchButton.click();
    }

    public void validateSearch(String product){
        String actualText=SearchText.getText();
        Assert.assertEquals(product,actualText);
    }

}

