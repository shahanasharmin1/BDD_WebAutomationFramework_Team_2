package home;

import common.WebAPI;
import org.openqa.selenium.Keys;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;

import static webelements.Webelements.*;

public class HomePage extends WebAPI {

    @FindBy(how = How.XPATH, using = searchbar )
    public WebElement usersearchbar;
    @FindBy(how = How.XPATH, using = search )
    public WebElement usersear;
    @FindBy(how = How.XPATH, using = validateText )
    public WebElement uservalidateText;

    public void searchbar() throws InterruptedException {
        driver.manage().window().maximize();
        Thread.sleep(5000);
        usersearchbar.click();
    }
    public void searchshows(){
        usersear.sendKeys("Game of Thrones");
        Actions drpdown = new Actions(driver);
        drpdown.sendKeys(Keys.ENTER).perform();
    }
    public void validateText(){
        String expectedText="shoes";
        String actualText=uservalidateText.getText();
        if( actualText.equals(expectedText) ){
            System.out.println("the actual results are same : " +    actualText);
        }else{
            System.out.println("the actual results are not  same : " +    actualText);
        }
    }
}
