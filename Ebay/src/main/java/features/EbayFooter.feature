Feature: work on Ebay footer elements
  I want to test couple element pages from Ebay footer

  Background:
    Given I'm already inside Ebay home page

  @Regression
  Scenario: see all the companies under Ebay name
    When I select see all companies
    Then  companies with Ebay name sould display

  @Regression
  Scenario: explore job offers
    And  I click on careers
    When I select build opportunity
    Then I should see job offers

  @Regression
  Scenario: bay a concert tickets
    And I select Music
    When  I click on Concert tickets
    Then I can reach the page to bay tickets

  @Regression
  Scenario: learn about ebay community
    And I select ebay community
    When I click about community
    Then I can learn more about the community
  @SmokeTest
  Scenario: validate Register as a developers page
    And I select developers link
    When I click register
    Then I can see registration page

  @SmokeTest
  Scenario: learn more about the feedback policy
    And select policies  link
    When I click feedback policy link
    Then I can read more information

  @SmokeTest
  Scenario: Ebay global impact
    And I select global impact
    And I hover to investor
    When I click on investor tab
    Then I should see the investor relation page
