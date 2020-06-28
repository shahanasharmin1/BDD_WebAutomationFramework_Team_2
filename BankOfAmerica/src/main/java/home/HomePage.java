package home;

import common.WebAPI;
import org.junit.Assert;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.How;
import static webelements.Webelements.*;

public class HomePage extends WebAPI {
    @FindBy(how = How.CSS,using = searchCreditCards)
    public WebAPI findSearchCreditCards;
    @FindBy(how = How.LINK_TEXT,using = searchCardsForStudents)
    public WebAPI findSearchCardsForStudents;
    @FindBy(how = How.CSS,using = searchLowerInterestRatesCards)
    public WebAPI findSearchLowerInterestRatesCards;
    @FindBy(how = How.CSS,using = searchPointsRewardsCards)
    public WebAPI findSearchPointsRewardsCards;
    @FindBy(how = How.ID,using = searchCashRewardsCreditCards)
    public WebAPI findSearchCashRewardsCreditCards;
    @FindBy(how = How.CSS,using = searchTravelAndAirlinesRewardsCards)
    public WebAPI findSearchTravelAndAirlinesRewardsCards;
    @FindBy(how = How.XPATH,using = searchChecking)
    public WebAPI getSearchChecking;
    @FindBy(how = How.CSS,using = searchSavings)
    public WebAPI getSearchSavings;
    @FindBy(how = How.CSS,using = searchHomeLoan)
    public WebAPI getSearchHomeLoans;
    @FindBy(how = How.CSS,using = searchAutoLoan)
    public WebAPI getSearchAutoLoan;
    @FindBy(how = How.CSS,using = searchBmh)
    public WebAPI getSearchBmh;
    @FindBy(how = How.XPATH,using = searchBmhRetirement)
    public WebAPI getSearchBmhRetirement;


    public void setFindSearchCreditCards() throws InterruptedException {
        findSearchCreditCards.wait(3);
        findSearchCreditCards.clickByXpath("searchCreditCards"); }
    public void setFindSearchCardsForStudents(){
        findSearchCardsForStudents.clickOnElement("searchCardsForStudents");
    }
    public void setFindSearchLowerInterestRatesCards() {
        findSearchLowerInterestRatesCards.clickOnElement("searchLowerInterestRatesCards"); }
    public void getSearchPointsRewardsCards(){
        findSearchPointsRewardsCards.clickOnElement("searchPointsRewardsCards"); }
    public void setFindSearchCashRewardsCreditCards(){
        findSearchCashRewardsCreditCards.clickOnElement("findSearchCashRewardsCreditCards"); }
    public void setFindSearchTravelAndAirlinesRewardsCards(){
        findSearchTravelAndAirlinesRewardsCards.clickOnElement("searchTravelAndAirlinesRewardsCards"); }
    public void setGetSearchChecking(){
        getSearchChecking.clickByXpath("searchChecking"); }
    public void setGetSearchSavings(){
        getSearchSavings.clickOnElement("Savings"); }

    public void validateSearchProduct(String expectedResult) {
        String actualResult = "Retirement";
        Assert.assertEquals("Search Result not Displayed",expectedResult,actualResult);

    }
}

