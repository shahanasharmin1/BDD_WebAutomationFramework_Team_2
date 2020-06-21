Feature: Explore ebay HomePage
  @SmokeTest
  Scenario: search product in the search input box
    Given I am at ebay.com
    And I type shoes in the search box
    When I click the search the button
    Then I should see the shoes options

  @Test1
  Scenario: click on ebay homePage image
    Given I am on ebay.com
    When I click on image of ebayHomePage
    Then I should see  variety section

