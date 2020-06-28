Feature: As a customer I want to explore this page

  Background:
    Given I am at a  att.com homePage

  @Test11
  Scenario: Enter UserID
    When I enter the user id in the input field
    Then I will see this results
  @Test12
  Scenario: Handeling Alert
    When I handle the alert window
    Then I will see this results
