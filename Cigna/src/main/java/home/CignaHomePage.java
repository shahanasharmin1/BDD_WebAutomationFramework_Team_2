package home;

import common.WebAPI;
import org.junit.Assert;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.interactions.Actions;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import java.util.List;
import java.util.concurrent.TimeUnit;
import static webelements.Webelements.*;
public class CignaHomePage extends WebAPI {

    @FindBy(how = How.XPATH, using = cignaInternationalWebElement) public WebElement cignaInternational;
    @FindBy(how = How.XPATH, using = individualPlanWebElement) public WebElement individualPlan;
    @FindBy(how = How.XPATH, using = silverWebElement) public WebElement silver;
    @FindBy(how = How.XPATH, using = headerWebElements) public List<WebElement> header;
    @FindBy(how = How.LINK_TEXT, using = individualFamilyWebElement) public WebElement individualFamily;
    @FindBy(how = How.LINK_TEXT, using = healthInsuranceWebElement) public WebElement healthInsurance;
    @FindBy(how = How.LINK_TEXT, using = customerServiceWebElement) public WebElement customerService;
    @FindBy(how = How.XPATH, using = healthCareProviderWebElement) public WebElement healthCareProvider;
    @FindBy(how = How.XPATH, using = credentialWebElement) public WebElement credential;
    @FindBy(how = How.XPATH, using = medicalCredentialWebElement) public WebElement medicalCredential;
    @FindBy(how = How.LINK_TEXT, using = BrokersAndEmployersWebElement) public WebElement brokerAndEmployers;
    @FindBy(how = How.XPATH, using = whyCignaWebElement) public WebElement whyCigna;
    @FindBy(how = How.LINK_TEXT, using = costImprovementWebElement) public WebElement costAndImprovement;
    @FindBy(how = How.XPATH, using = companyNamesWebElement) public WebElement companyNames;
    @FindBy(how = How.LINK_TEXT, using = memberSourcesWebElement) public WebElement memberResources;
    @FindBy(how = How.LINK_TEXT, using = mobileAppsWebElement) public WebElement mobileApps;
    @FindBy(how = How.XPATH, using = pharmacyWebElement) public WebElement pharmacy;
    @FindBy(how = How.XPATH, using = drugListWebElement) public WebElement drugList;
    @FindBy(how = How.LINK_TEXT, using = LogInWebElement) public WebElement logIn;
    @FindBy(how = How.ID, using = userNameWebElement) public WebElement userName;
    @FindBy(how = How.XPATH, using = passwordWebElement) public WebElement password;
    @FindBy(how = How.CSS, using = logInButtonWebElement) public WebElement logInButton;
    @FindBy(how = How.LINK_TEXT, using = findFormsWebElement) public WebElement findForm;
    @FindBy(how = How.XPATH, using = dentalFormWebElement) public WebElement dentalForm;
    @FindBy(how = How.XPATH, using = coverageClaimsWebElement) public WebElement coverageClaims;
    @FindBy(how = How.LINK_TEXT, using = coveragePoliciesWebElement) public WebElement coveragePolicies;
    @FindBy(how = How.XPATH, using = standardPoliciesWebElement) public WebElement standardPolicies;
    @FindBy(how = How.XPATH, using = aboutUsWebElement) public WebElement aboutUs;
    @FindBy(how = How.XPATH, using = newsRoomWebElement) public WebElement newsRoom;
    @FindBy(how = How.XPATH, using = newsAndViewsWebElement) public WebElement newsAndViews;
    @FindBy(how = How.XPATH, using = coverageAndClaimWebElement) public WebElement coverageAndClaim;
    @FindBy(how = How.LINK_TEXT, using = referralsWebElement) public WebElement referrals;
    @FindBy(how = How.XPATH, using = healthWellnessWebElement) public WebElement healthWellness;
    @FindBy(how = How.XPATH, using = autismInfoWebElement) public WebElement autism;
    @FindBy(how = How.XPATH, using = glossaryWebElement) public WebElement glossary;
    @FindBy(how = How.XPATH, using = categoryWebElement) public WebElement category;
    @FindBy(how = How.XPATH, using = radioButtonWebElement) public WebElement radioButton;

    public void clickCignaInternational() {
        cignaInternational.click();
        driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);
    }
    public void clickIndividualPlan() {
        individualPlan.click();
    }
    public void clickSliver() {
        silver.click();
    }
    public List<WebElement> getHeader() {
        List<WebElement> headerName = header;
        for (WebElement head : header) {
            System.out.println(head.getText());
        }
        return headerName;
    }
    public void individualFamilyPlan() {
        individualFamily.click();
    }
    public void healthInsurancePlan() {
        healthInsurance.click();
    }
    public void customerService() {
        customerService.click();
    }
    public void healthCareProvider() {
        healthCareProvider.click();
    }
    public void getCredential() {
        credential.click();
    }
    public void getMedicalCredential() { medicalCredential.click(); }
    public void goToEmployerAndBroker() {
        brokerAndEmployers.click();
    }
    public void whyCigna() {
        whyCigna.click();
    }
    public void goToCostAndImprovement() {
        costAndImprovement.click();
    }
    public void getCompanyNames() {
        companyNames.click();
    }
    public void clickMemberResources() {
        memberResources.click();
    }
    public void clickMobileApps() {
        mobileApps.click();
    }
    public void clickPharmacy() {
        pharmacy.click();
    }
    public void clickDrugList() { drugList.click(); }
    public void clickLogIn() {
        WebElement element = logIn;
        JavascriptExecutor js = (JavascriptExecutor) driver;
        js.executeScript("arguments[0].click()", element);
        driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);
    }
    public void enterUseName() {
        handleWindow();
        userName.sendKeys("testing1");
        driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);
    }
    public void enterPassword() {
        password.sendKeys("12345");
    }
    public void clickLogInButton() {
        logInButton.click();
    }
    public void goToFindForm() {
        findForm.click();
    }
    public void clickDentalForm() { dentalForm.click();}

    public void exploreInternationalOption() {
        clickCignaInternational();
        clickIndividualPlan();
        driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);
        clickSliver();
    }
    public void validateSearch1() {
        String actualResult = driver.getTitle();
        Assert.assertEquals( "International Medical Insurance Plans for Individuals | Cigna",actualResult);
    }
    public void readHeader() {
        getHeader();
    }
    public void validateHeader() {
        boolean actualResult = true;
        Assert.assertEquals(true, true);
    }
    public void getInsurancePlanInfo() {
        individualFamilyPlan();
        driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);
        healthInsurancePlan();
        customerService();
    }
    public void validateSearch2() {
        String actualResult = driver.getTitle();
        Assert.assertEquals( "Contact Us | Customer Service | Cigna",actualResult);
    }
    public void medicalCredential() {
        healthCareProvider();
        driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);
        getCredential();
        getMedicalCredential();
    }
    public void validateSearch3() {
        String actualResult = driver.getTitle();
        Assert.assertEquals( "Cigna Medical Network Credentialing | Cigna",actualResult);
    }
    public void searchCompanyNames() {
        goToEmployerAndBroker();
        whyCigna();
        goToCostAndImprovement();
        getCompanyNames();
    }
    public void validateSearch4() {
        String actualResult = driver.getTitle();
        Assert.assertEquals( "Cigna Company Names and Other Disclosures",actualResult);
    }
    public void exploreMemberResources() {
        clickMemberResources();
        clickMobileApps();
    }
    public void validateSearch5() {
        String actualResult = driver.getTitle();
        Assert.assertEquals("Manage Your Health with Cigna Mobile Apps | Cigna",actualResult);
    }
    public void pharmacyOption() {
        healthCareProvider();
        clickPharmacy();
        clickDrugList();
        driver.navigate().back();
    }
    public void validateSearch6() {
        String actualResult = driver.getTitle();
        Assert.assertEquals( "Health Care Providers | Cigna",actualResult);
    }
    public void tryToLogIn() {
        clickLogIn();
        driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);
        enterUseName();
        driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);
        enterPassword();
        clickLogInButton();
    }
    public void validateSearch7() {
        String actualResult = driver.getCurrentUrl();
        Assert.assertEquals("https://my.cigna.com/pkmslogin.form",actualResult);
    }
    public void searchForms() {
        driver.manage().timeouts().implicitlyWait(2, TimeUnit.SECONDS);
        goToFindForm();
        clickDentalForm();
    }
    public void validateSearch8() {
        String actualResult = driver.getTitle();
        Assert.assertEquals("Health Insurance & Medical Forms for Customers | Cigna",actualResult);
    }
    public void mouseHover() {
        Actions action = new Actions(driver);
        WebElement header1 = individualFamily;
        action.moveToElement(header1).build().perform();
        WebElement header2 = brokerAndEmployers;
        action.moveToElement(header2).build().perform();
        WebElement header3 = healthCareProvider;
        action.moveToElement(header3).build().perform();
        header3.click();
    }
    public void getCoverageClaims(){coverageClaims.click();}
    public void getCoveragePolicies(){coveragePolicies.click();}
    public void getStandardPolicies(){standardPolicies.click();}
    public void validateSearch9() {
        String actualResult = driver.getTitle();
        Assert.assertEquals(actualResult, "Coverage Policies | Cigna");
    }
    public void selectAboutUS() {aboutUs.click();}
    public void clickNewsRoom() {newsRoom.click();}
    public void selectNewsAndViews() {newsAndViews.click();}
    public void validateSearch12() {
        String actualResult = driver.getCurrentUrl();
        Assert.assertEquals(actualResult, "https://www.cigna.com/about-us/newsroom/news-and-views/");
    }
    public void clickReferrals() {referrals.click();}
    public void validateSearch11() {
        String actualResult = driver.getCurrentUrl();
        Assert.assertEquals(actualResult, "https://www.cigna.com/health-care-providers/coverage-and-claims/referrals/");
    }
    public void selectHealthWellness() {healthWellness.click();}
    public void clickAutism() {autism.click();}
    public void validateSearch10() {
        String actualResult = driver.getCurrentUrl();
        Assert.assertEquals(actualResult, "https://www.cigna.com/individuals-families/health-wellness/topic-autism/");
    }
    public void selectGlossary() { glossary.click();}
    public void clickCategory() { category.click();}
    public void checkRadioButton() { radioButton.click();}
    public void validateSearch15() {
        String actualResult = driver.getCurrentUrl();
        Assert.assertEquals(actualResult, "https://www.cigna.com/glossary#category_3");
    }










}













