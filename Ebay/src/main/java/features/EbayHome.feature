Feature: Search product in EbayHome search box
  I want to search for product

  Background:
    Given I'm already in Ebay home page

@SmokeTest
  Scenario: Search product
    And I enter kids swimming pool is search box
    When I click on search
    Then I should See kids swimming pool

@SmokeTest
  Scenario: Search product using Parameter
    And I Enter Items in search input field
       | "Flower seeds"|
       |"Kids books"   |
       |"T shirt"      |
       |"Silver rings " |
       |"Handbags       |
       |Men's shoes     |
    When I Click search button
    Then I should see Expected Items
      | "Flower seeds"|
      |"Kids books"   |
      |"T shirt"      |
      |"Silver rings " |
      |"Handbags       |
      |Men's shoes     |
