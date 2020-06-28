Feature: Search Bundle & Saves on geico homepage
  As an user i wanted to search product on geico.com for offers

  Background:
    Given I am at geico homePage

  @SmokeTest
  Scenario: Search offers for bundle
    And I Enter am geico homePage
    When I pass value for zipcode 11373
    And I click on Start Quote searchButton
    Then I should see Auto

  @pending
  Scenario: Search Bundle Offers using Parameter
    And I Enter < Bundle Offers> in  input field
      | Auto        |
      | Renters     |
      | Home        |
      | Condo       |
    When I Click search button
    Then I should see Expected Items
      | " Auto "    |
      | " Renters " |
      | " Home "    |
      | " Condo "   |

  @pending
  Scenario Outline: Search product using Parameter
    When I Enter "<Bundle Offers>" in  input field
    When I Click Start Quote search button
    Then I Should see "<ExpectedItems>"

    Examples:
      | Bundle Offers | ExpectedItems   |
      | Auto          | " Auto "        |
      | Renters       | " Renters "     |
      | Home          | " Home "        |
      | Condo         | " Condo "       |
