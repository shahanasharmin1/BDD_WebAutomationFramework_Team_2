Feature: Search Deals on at&t search box
  As a customer i want to search Deals on at&t homepage

  Background:
    Given I am at at&t Home Page
  @Test1
  Scenario: Search deals
    And I enter deals on the search box in homepage
    When I click search button
    Then I should see deal
  @Test2
  Scenario: Scroll Down
    When I use the scroll down
    Then I should see scroll working
  @Test3
  Scenario: Search at&t tv
    And I enter at&t tv on the search box in homepage
    When I click search button
    Then I should see at&t tv
  @Test4
  Scenario: drop Down button of Account Tab
    When I click on drop down button of Account Tab and I can select Manage Profile options
    Then I can see the results
  @Test5
  Scenario: hover on menu tab
    When I hover on menu Tab
    Then I can see the expected results are validated
  @Test6
  Scenario: Scroll down the att homepage
    When I scroll the web page
    Then I can see the expected results are validated
  @Test7
  Scenario: Scroll down the att homepage till the end
    When I scroll the web page till the end
    Then I can see the expected results are validated
  @Test8
  Scenario Outline: Search offers in Search box input field
    When I am in search box input field
    And I am looking for <deals> in search box input field
    And I should see <expected> results
    Then I am able to do validate
    Examples:
      | deals                 | expected |
      | Upgrade a device      | "Upgrade a device       |
      | AT&T PREPAID          | "AT&T PREPAID "         |
      | TV & internet bundles | "TV & internet bundles" |
      | AT&T deals            | " AT&T deals  "         |






