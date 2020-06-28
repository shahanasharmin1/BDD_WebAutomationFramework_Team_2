Feature: As a customer I want to explore cigna homepage

  Background:
    Given I am at cigna.com homePage

  @Test10
  Scenario: Enter username  for logIn
    When I enter username in the search box
    Then I can see expected result
  @Test11
  Scenario: Enter  password for logIn
    When I enter password in the search box
    Then I can see expected result
  @Test12
  Scenario: Hover On Medicare Tab
    When I hover on the medicare Tab
    Then I should see the result
  @Test13
  Scenario: Hover On About Us Tab
    When I hover on About Us Tab
    Then I should see the result
  @Test14
  Scenario Outline: I hover on  Header Object using Parameter
    When  I need to hover on <headerItems> in header part
    And I should see <expected> results
    Then I am able to validate
    Examples:
      | headerItems              | expected                   |
      | Individuals and Families | "Individuals and Families" |
      | Employers and Brokers    | "Employers and Brokers "   |
      | Health Care Providers    | "Health Care Providers "   |
      | About Us                 | "About Us"                 |


