Feature: As a customer I want to explore tripAdvisor.com
  @Test1
  Scenario: search hotels
    Given I am at tripAdvisor.com now
    And I click on hotels tab
    When I search hotels in the search box
    Then I should see the hotels
