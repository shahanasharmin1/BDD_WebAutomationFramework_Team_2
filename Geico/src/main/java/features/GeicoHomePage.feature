Feature: As a customer I want to explore Geico.com homepage

  Background:
    Given I am at geico.com homePage

  @SmokeTest
  Scenario: Scroll Down the geico homepage
    When I scroll down the webPage byPixel
    Then I will see the page is being scrolled down

  @RegressionTest
  Scenario: Scroll till the end of the geico homepage
    When I do scroll till the end
    Then I will see  the page is being scrolled tillToEnd

  @SmokeTest
  Scenario: DO dropDown on Insurance
    When I click on the drop down button and i select the Property Insurance
    Then I should see types of Property Insurance page for Home

  @RegressionTest
  Scenario: DO dropDown on Information
    When I click on the drop down button and i select My Account
    And  I should see My Account Page
    And  I can pass my email id in search field
    And  I enter my password
    And  I click on Log In button
    Then I should see Forget User ID/Password page
