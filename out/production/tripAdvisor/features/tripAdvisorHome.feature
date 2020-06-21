Feature: Search Hotels in tripAdvisor
  As a customer i want to search hotels in California

  Scenario: Search Hotels in tripAdvisor
    Given I am at tripAdvisor Home Page
    And I click on hotels button in homepage
    When I click hotels button
    Then I should be able to search hotels in California
