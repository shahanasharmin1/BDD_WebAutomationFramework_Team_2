Feature: Explore ebay HomePage
   @Test1
   Scenario: search product in the search input box
    Given I am at ebay.com
    And I type shoes in the search box
    When I click the search the button
    Then I should see the shoes options

    @Test2
    Scenario: click on ebay homePage image
    Given I am on ebay.com
    When I click on image of ebayHomePage
    Then I should see  variety section
    @Test3
      Scenario Outline: Search product using Parameter
      And I Enter "<Items>" in search input field
      When I Click search button
      Then I should see "<ExpectedItems>"

        Examples:
        | Items              | ExpectedItems  |
        | Hand soap          |   " Hand soap "|
        | note book          |    "note book" |
        | water bottle       |  "water bottle"|
        | pencils            |   " pencils "  |
  @Test4
  Scenario:hover on ebay logo
    When I click on logo
    Then I am able to validate the ebay homepage
  @Test5
  Scenario: scroll Down the Ebay homepage
    When i scroll down the webPage byPixel
    Then I will see the the page are scrolled down

  @Test6
  Scenario: scroll till the end of the Ebay homepage
    When i scroll till the end
    Then I will see the the page are scrolled tillend

