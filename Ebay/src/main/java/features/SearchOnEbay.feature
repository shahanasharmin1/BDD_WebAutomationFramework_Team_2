Feature: Search product on ebay searchBox
  As a customer i want to search product on ebay.com to purchase


  Background:
    Given I am at ebay Home Page

  Scenario: Search product
    Given I am at ebay Home Page
    And I Enter  Adidas Women Jacket in search input field
    When I Click search button
    Then I should see Adidas Woman Jacket

  @SmokeTest
  Scenario: Search product
    And I Enter Adidas Woman Jacket in search input field
    When I Click search button
    Then I should see Adidas Woman Jacket


  @Regression
  Scenario: Search product
    And I Enter Adidas Woman Jacket in search input field
    When I Click search button
    Then I should see Adidas Woman Jacket




  @SmokeTest
  Scenario: Search product using Parameter
    And I Enter "Adidas Woman Jacket" in search input field
    When I Click search button
    Then I should see "\"Adidas Woman Jacket\""



  @pending
  Scenario: Search product using Parameter
    And I Enter Items in search input field
      | Adidas Woman Jacket  |
      | Adidas Woman shirt   |
      | Adidas Woman shoes   |
      | Adidas Woman sandals |
    When I Click search button
    Then I should see Expected Items
      | "Adidas Woman Jacket"  |
      | " Adidas Woman shirt " |
      | "Adidas Woman shoes "  |
      | "Adidas Woman sandals" |


  @pending
  Scenario Outline: Search product using Parameter
    And I Enter "<Items>" in search input field
    When I Click search button
    Then I should see "<ExpectedItems>"

    Examples:
      | Items                | ExpectedItems         |
      | Adidas Woman Jacket  | "Adidas Woman Jacket" |
      | Adidas Woman shirt   | "Adidas Woman shirt"  |
      | Adidas Woman shoes   | "Adidas Woman shoes"  |
      | Adidas Woman sandals | "Adidas Woman sandals"|


  @pending
  Scenario: Search product using Parameter
    And I Enter "Adidas Woman Jacket" in search input field
    When I Click search button
    Then I should see "Adidas Woman Jacket"