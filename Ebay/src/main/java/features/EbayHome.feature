Feature: Search series on ebay homepage searchBox
  As an user i wanted to search product on ebay.com for watching

  Background:
    Given I am at ebay Home Page

  @SmokeTest
  Scenario: Search product
    And I Enter photo frame in search input field
    When I Click search button
    Then I should see photo frame

  @Regression
  Scenario: Search product
    And I Enter photo frame in search input field
    When I Click search button
    Then I should see photo frame