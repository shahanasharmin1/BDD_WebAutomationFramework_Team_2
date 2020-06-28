Feature: Search headers on BOA homePage as a user
  As an user i wanted to search headers on boa.com

  Background:
    Given I am already at Bank Of America Home Page

  @SmokeTest
  Scenario: Search Checking
    When  I am already at BOA Home Page
    And I click on Checking
    Then I should see Checking page with Sign In

  @RegressionTest
  Scenario: Search Savings
    When I click on Savings
    Then I Should see savings page with Sign In page

  @SmokeTest
  Scenario: Search Home Loans
    When I click on Home Loans
    Then I Should see Mortgages page

  @RegressionTest
  Scenario: Search Auto Loans
    When I click on Auto Loans
    Then I Should see Auto Loan Rates page

  @SmokeTest
  Scenario: Search Better Money Habits
    When I click on Better Money Habits header
    And I Should see Better Money Habits page
    And I should see Retirement
    And I click on Retirement
    Then I can validate Retirement

