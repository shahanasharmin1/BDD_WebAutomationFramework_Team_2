Feature: Search series on hbo homepage searchBox
  As an user i wanted to search product on hbo.com for watching

  Background:
    Given I am at hbo Home Page

  @SmokeTest
  Scenario: Search product
    And I Enter Series in search input field
    When I Click search button
    Then I should see SERIES

  @Regression
  Scenario: Search product
    And I Enter Series in search input field
    When I Click search button
    Then I should see SERIES

  @SmokeTest
  Scenario: Search product using Parameter
    And I Enter "SERIES" in search input field
    When I Click search button
    Then I should see "\"SERIES\""

  @pending
  Scenario: Search product using Parameter
    And I Enter Items in search input field
      | SERIES       |
      | Girls Season |
      | Alien 3      |
      | The Newsroom |
    When I Click search button
    Then I should see Expected Items
      | "SERIES"       |
      | "Girls Season" |
      | "Alien 3"      |
      | "The Newsroom" |

  @pending
  Scenario Outline: Search product using Parameter
    And I Enter "<Items>" in search input field
    When I Click search button
    Then I Should see "<ExpectedItems>"

    Examples:
      | Items        | ExpectedItems
      | SERIES       | "SERIES"
      | Girls Season | "Girls Season"
      | Alien 3      | "Alien 3"
      | The Newsroom | "The Newsroom"

  @pending
  Scenario: Search product using Parameter
    And I Enter "SERIES" in search input field
    When I Click search button
    Then I should see "SERIES"
