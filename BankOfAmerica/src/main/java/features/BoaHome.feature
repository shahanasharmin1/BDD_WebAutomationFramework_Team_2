Feature: As a customer I want to click on a LogIn  button of Bank Of America
  Background:
    Given I go on bankofamerica.com
  @Test1
  Scenario: Click On log In Button at bank of America
    When i click on the log In Button
    Then i am able to see  log in button clicked
  @Test2
  Scenario: SignIn Page without dynamic method
    And I enter the Online Id in the input box
    And I enter the Passcode in the input box
    When I check on the saveOnline Id
    And I click on the signIn button
    Then I am able to see of a signin button are validated
  @Test3
  Scenario: SignIn Page
    And I enter  "Online Id" in the input box
    And I enter "Passcode" of the input box
    When I check on the saveOnline Id
    And I click on the signIn button
    Then I am able to see it invalidvalidation
  @Test4
  Scenario: Create new Account
    And I enter Account Number
    Then I am able to validate the page
  @Test5
  Scenario: Create new Account
    And I enter SSN Number
    Then I am able to validate the page
  @Test6
  Scenario: scroll Down the bankOfAmerica homepage
    When i scroll down the webPage byPixel
    Then I will see the the page are scrolled down
  @Test7
  Scenario: scroll till the end of the bankOfAmerica homepage
    When i scroll till the end
    Then I will see the the page are scrolled tillend
  @Test8
  Scenario: scroll till the end of the bankOfAmerica homepage
    When i scroll till the end
    Then I will see the the page are scrolled tillend
  @Test9
  Scenario: Hover on checking element
    When i hover on checking element
    Then I will see the results
  @Test10
  Scenario: Hover on savings element
    When i hover on savings element
    Then I will see the results
  @Test11
  Scenario: Hover on Credit Cards element
    When i hover on Credit Cards  element
    Then I will see the results