package home;

import common.WebAPI;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import java.util.List;

public class HomePage  extends WebAPI {

    @FindBy(xpath = "//input[@id='gh-ac']")
    WebElement searchLink;
    @FindBy(id = "gh-btn")
    WebElement clickSearchButton;
    @FindBy(xpath = "//*[@id=\"srp-river-results\"]/ul/li[6]/div/div[2]/a/h3")
    WebElement selectBook;
    @FindBy(id = "binBtn_btn")
    WebElement addBook;


    // Steps:1: // Enter keyword in search box
    public void enterKeyWord(String keyword) {
        // Enter keyword in search box
        searchLink.sendKeys(keyword);
    }

    public void clickSearchButton() {
        // Click searchButton
        clickSearchButton.click();
    }
    // Steps:3:
    public void clickProduct() {
        // Click Product
        selectBook.click();
    }
    // Steps:4:
    public void clickAddToCart() {
        // Click Add to Cart
        addBook.click();
    }
//    public void validateSearchProduct(String expectedResult) {
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
