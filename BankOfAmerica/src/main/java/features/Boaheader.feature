Feature: testing home page header
  I want to test every header in the home page


  Background:
    Given I'm already in home page

  @SmokeTest
  Scenario: I want to explore Businesses Institution options
    And I click on Businesses Institution
    When I click in see more resources
    Then  All the information tab are displayed

  @SmokeTest
  Scenario: I want to see home equity rate  for Colorado state
    And  I click on Home Loan
    And  I select Home equity option
    And  I enter Colorado in the state box
    When I click state button
    Then I should see the rate

  @SmokeTest
  Scenario: I want to order foreign currency
    And   I enter travel notification in search box
    When  I click on foreign currency
    Then  I should see foreign currency ordering page

  @SmokeTest
  Scenario: I want to explore the retirement planning option
    And   I click on Better Money Habits
    When  I select retirement
    Then  I should see all the retirement information

  @SmokeTest
  Scenario: I want to read information about taxes and income
    And   I click on Better Money Habits
    When  I use mouse hovering to select taxes and income
    Then  information tab should be displayed
