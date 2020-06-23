package home;

import common.WebAPI;

import org.junit.Assert;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import static webelements.Webelements.*;

public class HomePage extends WebAPI {

    @FindBy(how= How.CSS,using=searchElement)
    WebElement searchProductElement;
    @FindBy(how= How.CSS,using=searchButton)
    WebElement searchButtonElement;
    @FindBy(how= How.CSS,using=shoesgetText)
    WebElement shoesgetTextElement;
    @FindBy(how = How.CSS,using =imageelement)
    WebElement imageWebelement;
    @FindBy(how = How.CSS,using =imageGetText)
    WebElement imageGetTextWebelement;

    public void userSeachBox(){
        driver.manage().window().maximize();
        searchProductElement.sendKeys("shoes");
    }
    public void clickOnSearchbutton(){
        searchButtonElement.click();
    }
    public void  validateSearchProduct(){
        String expectedText="shoes";
        String actualText=shoesgetTextElement.getText();
        if( actualText.equals(expectedText) ){
            System.out.println("the actual results are same : " +    actualText);
        }else{
            System.out.println("the actual results are not  same : " +    actualText);
        }
    }
    public void userclickonimageWebelement(){
        imageWebelement.click();
    }
    public void  validateimageElement(){
        String expectedText="Shop, sell, or donate to make a social impact ";
        String actualText=imageGetTextWebelement.getText();
        if( actualText.equals(expectedText) ){
            System.out.println("the actual results are same : " +    actualText);
        }else{
            System.out.println("the actual results are not  same : " +    actualText);
        }
    }
}
