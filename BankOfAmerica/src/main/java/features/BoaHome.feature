
Feature: Search options on BOA homePage as a user
  As an user i wanted to search options on boa.com

  Background:
    Given I am at Bank Of America homePage

  @SmokeTest
  Scenario: Search different options
    When  I am at BOA homePage
    And I click on Credit cards button in homepage
    And I click in Credit cards button
    Then I should see Cards For Students

  @pending
  Scenario Outline: Search options using Parameter
    When I am at BOA homePage
    And I click in Credit cards button
    And I should see "<Items>" in Credit card page
    Then I should see my "<ExpectedItems>"
    Examples:
      | Items                             | ExpectedItems                        |
      | Cards For Students                | "Cards For Students "                |
      | Lower Interest Rates Cards        | "Lower Interest Rates Cards"         |
      | Points Rewards Cards              | "Points Rewards Cards "              |
      | Cash Rewards Credit Cards         | "Cash Rewards Credit Cards"          |
      | Travel And Airlines Rewards Cards | "Travel And Airlines Rewards Cards " |





























