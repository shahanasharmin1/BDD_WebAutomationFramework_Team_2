Feature: As a customer I want to explore cigna homepage

  Background:
    Given I am at cigna.com homePage

  @Test1
  Scenario: go on a medicare tab in the homepage
    When I click on a medicare tab
    Then I will see lot of things which are medicated related
  @Test2
  Scenario: scroll Down the cigna homepage
    When i scroll down the webPage byPixel
    Then I will see the the page are scrolled down
  @Test3
  Scenario: scroll till the end of the cigna homepage
    When i scroll till the end byPixel
    Then I will see the the page are scrolled tillend
  @Test4
  Scenario: search Result
    When i enter the health insurance keyword in the search box
    And I click on search button
    Then I can see the page are validated
  @Test5
  Scenario: Hover on Customer LogIn
    When I hover on customer LogIn Tab
    Then I can see the page are validated
  @Test6
  Scenario: Can get Text of cigna International Tab
    When I can get the text of cigna International
    Then I should see  result
  @Test7
  Scenario: Hover On Health Care Tab
    When I hover on the Health Care Tab
    Then I should see the page are validated
  @Test8
  Scenario: Hover On Employers and Brokers Tab
    When I hover Employers and Brokers Tab
    Then I should see the page are validated
  @Test9
  Scenario: Hover On Individuals and Families Tab
    When I hover On Individuals and Families Tab
    Then I should see the page are validated
