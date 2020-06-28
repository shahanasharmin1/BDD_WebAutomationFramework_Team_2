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
    public WebElement usersearch;
    @FindBy(how = How.XPATH, using = validateText )
    public WebElement uservalidateText;

    public void searchbar() {
        windowMaximize();
        clickByXpath(searchbar);
    }
    public void searchshows(){
        typeByXpath(search,"Game of Thrones");
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
