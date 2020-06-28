Feature: Search Deals on at&t search box
  As a customer i want to search Deals on at&t homepage

  Background:
    Given I am at at&t Home Page

  @Test1
  Scenario: Search at&t tv
    And I enter at&t tv on the search box in homepage
    When I click search button
    Then I should see at&t tv
  @Test2
  Scenario: drop Down button of Account Tab
    When I click on drop down button of Account Tab and I can select Manage Profile options
    Then I can see the results
  @Test3
  Scenario: hover on menu tab
    When I hover on menu Tab
    Then I can see the expected results are validated
  @Test4
  Scenario: Scroll down the att homepage
    When I scroll the web page
    Then I can see the expected results are validated
  @Test5
  Scenario: Scroll down the att homepage till the end
    When I scroll the web page till the end
    Then I can see the expected results are validated
  @Test6
  Scenario: Click on Image of Att homepage
    And I will go the next url of deals menu
    When I click on image
    Then I should see the results
  @Test7
  Scenario: Select Item From the Drop Down Tab
    And I will go the next url of  phones Tab
    When I select item from the Tab
    Then I should see the results
  @Test8
  Scenario: Select Item From the Drop Down Tab
    And I will go the next url of  phones Tab
    When I select item from the Tab
    Then I should see the results
  @Test9
  Scenario: Click on Prepaid Tab
    When I click on Prepaid Tab
    Then I should see the Tab are validated
  @Test10
  Scenario: Hover On SignIn Tab
    When I Hover On sign In Tab
    Then I should see the validated results






