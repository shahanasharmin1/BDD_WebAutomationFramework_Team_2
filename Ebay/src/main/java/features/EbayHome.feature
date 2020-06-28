Feature: Search product on ebay .
  As user i am locating a book and adding to cart.


  Scenario: Search product
    Given I am at Ebay Home Page
    And I Enter Maven Book in search input field
    When I Click search button
    Then I should see the desired Maven Book
