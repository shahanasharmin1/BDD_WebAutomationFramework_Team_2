package home;


import common.WebAPI;
import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import org.openqa.selenium.support.ui.Select;

import java.util.concurrent.TimeUnit;

import static webelements.WebElements.*;

public class HomePage<retirement> extends WebAPI {

    @FindBy(how = How.ID, using = onlineIdWebElement) public WebElement onlineId;
    @FindBy(how = How.ID, using = passwordWebElement) public WebElement password;
    @FindBy(how = How.XPATH, using = signInWebElement) public WebElement signIn;
    @FindBy(how = How.XPATH, using = businessesInstitutionsWebElement) public WebElement businessesInstitutions;
    @FindBy(how = How.XPATH, using = resourcesWebElement) public WebElement resources;
    @FindBy(how = How.LINK_TEXT, using = homeLoanWebElement) public WebElement homeLoan;
    @FindBy(how = How.XPATH, using = homeEquityWebElement) public WebElement homeEquity;
    @FindBy(how = How.ID, using = selectStateWebElement) public WebElement selectState;
    @FindBy(how = How.ID, using = submitWebElement) public WebElement submit;
    @FindBy(how = How.XPATH, using = searchBoxWebElement) public WebElement searchBox;
    @FindBy(how = How.XPATH, using = foreignCurrencyWebElement) public WebElement foreignCurrency;
    @FindBy(how = How.XPATH, using = betterMoneyHabitsWebElement) public WebElement betterMoneyHabits;
    @FindBy(how = How.XPATH, using = retirementWebElement) public WebElement retirement;
    @FindBy(how = How.XPATH, using = taxesAndIncomeWebElement) public WebElement taxesAndIncome;
    @FindBy(how = How.XPATH, using = helpWebElement) public WebElement help;
    @FindBy(how = How.XPATH, using = suspiciousEmailWebElement) public WebElement suspiciousEmail;
    @FindBy(how = How.XPATH, using = whatToDoWebElement) public WebElement whatToDo;
    @FindBy(how = How.XPATH, using = lifeServicesWebElement) public WebElement lifeServices;
    @FindBy(how = How.XPATH, using = eldercareWebElement )public WebElement elderCare;
    @FindBy(how = How.XPATH, using = securityAndPrivacyWebElement )public WebElement securityAndPrivacy;
    @FindBy(how = How.XPATH, using = completeDetailsWebElement )public WebElement completeDetails;
    @FindBy(how = How.XPATH, using = howWebElement )public WebElement how;

    public void maximize(){ driver.manage().window().maximize();}
    public void enterId() {
        onlineId.sendKeys("kahina");
    }
    public void enterPassword() {
        password.sendKeys("test123");
    }
    public void enterStringId(String string) {
        onlineId.sendKeys(string);
    }
    public void enterStringPassword(String string) {
        password.sendKeys(string);
    }
    public void clickSignButton() {
        signIn.click();
    }
    public void validationLogIn() {
        String actualResult = driver.getTitle();
        System.out.println(actualResult);
        Assert.assertEquals("Bank of America | Online Banking | Sign In | Online ID", actualResult);
    }
    public void clickBusinessesInstitution() {
        businessesInstitutions.click();
    }
    public void clickResources() {
        resources.click();
    }
    public void validateBusinessInstitutionOption() {
        String actualResult = driver.getTitle();
        System.out.println(actualResult);
        Assert.assertEquals("Featured Business and Banking Insights from Bank of America Merrill Lynch", actualResult);
    }
    public void clickHomeLoan() {
        homeLoan.click();
    }
    public void clickHomeEquity() {
        homeEquity.click();
    }
    public void clickSubmit() {
        submit.click();
    }
    public void enterStateName() {
        Select state = new Select(selectState);
        state.selectByVisibleText("Colorado");
    }
    public void validateSearch() {
        String actualResult = driver.getTitle();
        System.out.println(actualResult);
        Assert.assertEquals("Home Equity Line of Credit (HELOC) from Bank of America", actualResult);
    }

    public void enterKeyWord2() {
        searchBox.sendKeys("travel notification");
    }

    public void selectForeignCurrency() {
        foreignCurrency.click();
    }

    public void validateSearch1() {
        String actualResult = driver.getTitle();
        System.out.println(actualResult);
        Assert.assertEquals("Foreign Currency Ordering—Convenient and Secure", actualResult);
    }
    public void moneyHabits() {
        betterMoneyHabits.click();
    }
    public void clickRetirement() {
        retirement.click();
    }
    public void validateSearch2() {
        String actualResult = driver.getTitle();
        System.out.println(actualResult);
        Assert.assertEquals("Tips on Planning and Saving for Retirement", actualResult);
    }
    public void mouseHover() {
        Actions action = new Actions(driver);
        action.moveToElement(taxesAndIncome).click().build().perform();
    }
    public void validateSearch3() {
        String actualResult = driver.getTitle();
        System.out.println(actualResult);
        Assert.assertEquals("Tips for Managing Income and Understanding Taxes", actualResult);
    }
    public void selectHelp() { help.click(); }
    public void clickSuspiciousEmail() { suspiciousEmail.click(); }
    public void clickWhatToDo() { whatToDo.click(); }
    public void scrowllDown() {
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeAsyncScript("scroll(0,2000)");
    }
    public void validateSearch4() {
        String actualResult = driver.getTitle();
        System.out.println(actualResult);
        Assert.assertEquals("Report Suspicious Activities & Transactions on Accounts", actualResult);
    }
    public void clickLifeServices() {lifeServices.click(); }
    public void clickElderServices() {elderCare.click(); }
    public void validateSearch5() {
        String actualResult = driver.getTitle();
        System.out.println(actualResult);
        Assert.assertEquals("Bank of America Help Center - Get Your Questions Answered", actualResult);
    }
    public void clickSecurityAndPrivacy() {securityAndPrivacy.click(); }
    public void clickCompleteDetails() {
        driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);
        completeDetails.click(); }
    public void selectHowToProtectYou() {how.click(); }
    public void validateSearch6() {
        String actualResult = driver.getTitle();
        System.out.println(actualResult);
        Assert.assertEquals("Online & Mobile Banking Security Guarantee from Bank of America", actualResult);
    }

}