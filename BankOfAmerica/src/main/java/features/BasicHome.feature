Feature: I want to explore the whole elements of bank of america Homepage

  Background:
    Given I go on bankofamerica.com

  @Test12
  Scenario: Hover on HomeLoans element
    When i hover on HomeLoans  element
    Then I will see the desire results
  @Test13
  Scenario: Hover on AutoLoans element
    When i hover on AutoLoans element
    Then I will see the desire results
  @Test14
  Scenario: Hover on Investing element
    When i hover on Investing  element
    Then I will see the desire results
  @Test15
  Scenario: Click  on Personal element
    When i Click  on Personal element
    Then I will see the desire results
  @Test16
  Scenario: Click  on small Business element
    When i Click  onsmall Business
    Then I will see the desire results
  @Test17
  Scenario: Click  on Wealth Management element
    When i Click   Wealth Management
    Then I will see the desire results
  @Test18
  Scenario: Click  on Business and Institutions element
    When i Click on  Business and Institutions element
    Then I will see the desire results
  @Test19
  Scenario: Click  on Security element
    When i Click on  Security element
    Then I will see the desire results
  @Test20
  Scenario: Click  on About Us element
    When i Click on About Us element
    Then I will see the desire results
  @Test21
  Scenario Outline: I search Header Object using Parameter
    When I am already in BOA Home Page
    And I need to click <headerItems> in header part
    And I should see <expected> results
    Then I am able to validate
    Examples:
      | headerItems              | expected                   |
      | Personal                 | "Personal"                 |
      | Small Business           | "Small Business"           |
      | Wealth Management        | "Wealth Management "       |
      | Business and Institution | "Business and Institution" |
      | Security                 | "Security"                 |
      | About Us                 | "About Us"                 |