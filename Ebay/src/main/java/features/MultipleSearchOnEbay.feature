Feature: Search Multiple product

  Background:
    Given I am at ebay Home Page


  Scenario Outline: Search multiple product
    And I Enter "<product>" in search input field
    When I click search button
    Then I should see "<ExpectedResult>"

    Examples:
      |product|ExpectedResult|
      | Watch             | "Watch"            |
      | playstation 2     | "playstation 2"    |
      | playstation 3     | "playstation 3"    |
      | playstation 4     | "playstation 4"    |
      | playstation 4 pro | "playstation 4 pro"|
