package home;
import common.WebAPI;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import java.util.List;

import static webelements.EbayHomePageWebElements.*;

public class SearchHomePage extends WebAPI {
    @FindBy(how = How.XPATH, using = searchWebElement)
    public WebElement searchbox;
    @FindBy(how = How.XPATH, using = searchBoxButtonWebElement)
    public WebElement searchButton;
    @FindBy(how = How.XPATH, using = webElmSearchText)
    public WebElement SearchText;

    public void enterKeyWord(String keyword) {
        searchbox.sendKeys(keyword);
    }

    public void clickSearchButton() {
        searchButton.click();
    }

    public void validateSearch(String product) {
        String actualText = SearchText.getText();
        Assert.assertEquals(product, actualText);
    }
}