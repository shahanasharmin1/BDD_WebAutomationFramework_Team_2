Feature: Search Deals on at&t search box
  As a customer i want to search Deals on at&t homepage

  Scenario: Search deals
    Given I am at at&t Home Page
    And I enter deals on the search box in homepage
    When I click search button
    Then I should see deals

#    Scenario: Sign in option
#      Given I am at at&t Home Page
#      When I click Account button
#      Then I should see Sign in



