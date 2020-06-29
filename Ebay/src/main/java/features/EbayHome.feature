Feature: Exploring Categories in Ebay
  As a customer i want explore Categories in ebay
  Background:
    Given I am at Ebay Home Page



  @Test
  Scenario: hover on Motors in ebay Home Page
    When I hover mouse on motors
    Then I can validate hovering is working

  @Test
  Scenario Outline: I Explore Ebay Categories by hovering mouse using Parameter
    When I am already in Home Page
    And I need to hover over <categories> in Ebay Home Page
    And I should see <expected> results
    Then I am able to validate mouse hovering
    Examples:
      | categories            | expected                |
      | Fashion               | "Fashion"               |
      | Electronics           | "Electronics"           |
      | Collectibles & Art    | "Collectibles & Art"    |
      | Home & Garden         | "Home & Garden"         |
      | Sporting Goods        | "Sporting Goods"        |
      | Toys                  | "Toys"                  |
      | Business & Industrial | "Business & Industrial" |
      | Music                 | "Music"                 |
      | Deals                 | "Deals"                 |




Feature: Exploring Categories in Ebay
  As a customer i want explore Categories in ebay
  Background:
    Given I am at Ebay Home Page



  @Test
  Scenario: hover on Motors in ebay Home Page
    When I hover mouse on motors
    Then I can validate hovering is working

  @Test
  Scenario Outline: I Explore Ebay Categories by hovering mouse using Parameter
    When I am already in Home Page
    And I need to hover over <categories> in Ebay Home Page
    And I should see <expected> results
    Then I am able to validate mouse hovering
    Examples:
      | categories            | expected                |
      | Fashion               | "Fashion"               |
      | Electronics           | "Electronics"           |
      | Collectibles & Art    | "Collectibles & Art"    |
      | Home & Garden         | "Home & Garden"         |
      | Sporting Goods        | "Sporting Goods"        |
      | Toys                  | "Toys"                  |
      | Business & Industrial | "Business & Industrial" |
      | Music                 | "Music"                 |
      | Deals                 | "Deals"                 |




