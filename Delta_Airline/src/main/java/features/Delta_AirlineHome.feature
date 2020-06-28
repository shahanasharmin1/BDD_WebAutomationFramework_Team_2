Feature: As a customer I want to explore Delta.com homepage
  Background:
    Given I am at delta.com homePage
  @Test1
   Scenario:  LogIn button
    When I click on logIn button
    Then I can validate the text of homepage

  @Test2
   Scenario Outline:I search travel info using Parameter
    When I am at delta homepage
    And  I need to click<items>in travel info
    And  I should see<expected>results
    Then I am able to validate the item
    Examples:
      |   items                    |    expected                  |
      |   safer travel             |    safer travel              |
      |   airline partners         |    airline partners          |
      |   baggage                  |    baggage                   |
      |   check-in & safety        |   check-in & safety          |
      |   delta sky club           |   delta sky club             |
      |  airport maps and locations|   airport maps and locations |

  @Test3
  Scenario: scroll Down the Delta homepage
    When i scroll down the webPage byPixel
    Then I will see the the page are scrolled down

  @Test4
  Scenario: scroll till the end of the Delta homepage
    When i scroll till the end
    Then I will see the the page are scrolled tillend


  @Test5
  Scenario: Enter  username in the Input box
    When I click on a login tab
    And I enter username in the input box
    Then I will see the log in page


  @Test6
  Scenario: Enter  password in the Input box
    When I click on a login tab
    And I enter password in the input box
    Then I will see the log in page

  @Test7
  Scenario:  checkbox Pattern
    When I click on a login tab
    And I select the checkbox
    Then I will see the log in page

  @Test8
  Scenario: HoverOn SkyMiles Tab
    And I hover on SkyMiles
    When I click on a login tab
    Then I will see the log in page

  @Test9
  Scenario: drop down on Round Trip
    And I click on the drop down button and i select the One Way options
    When  I click on a login tab
    Then I validate the login page

  @Test10
  Scenario: check on Refundable Fares
    When I check on Refundable Fares Tab
    Then I should see the Tab are checked and validated

  @Test11
  Scenario: check on mydates are Flexible tab
    When I check on Mydates are flexible tab
    Then I am able to see the results are it validated






















