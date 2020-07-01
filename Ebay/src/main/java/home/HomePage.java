package home;

import common.WebAPI;
import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import java.util.List;
import static webelements.EbayHomePageWebElements;

public class HomePage  extends WebAPI {

    @FindBy(how = How.XPATH,using =searchBoxElement)
    public WebElement searchBox;
    @FindBy(how = How.XPATH,using = clickSearchButton)
    public WebElement searchButton;
    @FindBy(how = How.XPATH,using = clickPhotoFrame)
    public WebElement photoFrameSearch;
    @FindBy(how= How.CSS,using=shoesgetText)
    WebElement shoesgetTextElement;
    @FindBy(how = How.CSS,using =imageelement)
    WebElement imageWebelement;
    @FindBy(how = How.CSS,using =imageGetText)
    WebElement imageGetTextWebelement;
    @FindBy(how= How.CSS,using=searchWebElement)
    WebElement searchProductElement;
    @FindBy(how= How.CSS,using=searchWebButton)
    WebElement searchButtonElement;



    // Steps:1: // Enter keyword in search box
    public void getSearchBox(String keyword){
        driver.manage().window().maximize();
        searchBox.sendKeys(" photo frame");
    }
    // Steps:2: // Click on Search Button
    public void clickOnSearchButton(){
        searchButton.click();
    }
    // Steps:3: // Validation expected and actual
    public void validateSearchProduct(String expectedResult) {
        String actualResult = "photo frame";
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);
    }
    public void userSeachBox(){
        driver.manage().window().maximize();
        searchProductElement.sendKeys("shoes");
    }
    public void clickOnSearchbutton(){
        searchButtonElement.click();}

    public void  validateSearchProduct() {
        // validating the actual and expected text
        String expectedText = "shoes";
        String actualText = shoesgetTextElement.getText();
        // Comparing the text
        if (actualText.equals(expectedText)) {
            System.out.println("the actual results are same : " + actualText);
        } else {
            System.out.println("the actual results are not  same : " + actualText);
        }
    }

    public void userclickonimageWebelement(){
        imageWebelement.click();
    }

    public void  validateimageElement(){
        // validating the actual and expected text
        String expectedText="Shop, sell, or donate to make a social impact ";
        String actualText=imageGetTextWebelement.getText();
        // Comparing the text
        if( actualText.equals(expectedText) ){
            System.out.println("the actual results are same : " +    actualText);
        }else{
            System.out.println("the actual results are not  same : " +    actualText);
        }
    }
}
