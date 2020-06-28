Feature: Search Shows on HBO
  As a user i want to search Game of Thrones in HBO search bar.

  Scenario: Search Game of Thrones in HBO
    Given I am at HBO HomePage
    And I click on search Field
    When I Search Game Of Thrones
    Then I should be able to see results for Game of Thrones
