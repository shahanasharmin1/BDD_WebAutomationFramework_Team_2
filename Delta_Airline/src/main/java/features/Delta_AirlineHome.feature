Feature: As a customer I want to explore Delta.com homepage

  Background:
    Given I am at delta.com homePage

  @Test1
  Scenario: LogIn button
    When I click on logIn button
    Then I can validate the text of homepage

  @Test2
  Scenario: Scroll Down the delta homepage
    When I scroll down the webPage byPixel
    Then I will see the page is being scrolled down

  @Test3
  Scenario: Scroll till the end of the delta homepage
    When I do scroll till the end
    Then I will see  the page is being scrolled tillToEnd

  @Test4
  Scenario: Enter  username in the Input box
    When I click in login tab
    And I enter username in the input box
    Then I will see the Log In To Delta page

  @Test5
  Scenario: Enter  password in the Input box
    When I click on a login tab
    And I enter password in the input box
    Then I will see the Log In To Delta page

  @Test6
  Scenario: Search Checkbox Pattern
    When I click on a login tab
    And I select the checkbox
    Then I will see the Log In To Delta page

  @Test7
  Scenario:Do HoverOn  SkyMiles Tab
    And I hover on  My SkyMiles
    When I click on a login tab
    Then I will see the Log In To Delta page

  @Test8
  Scenario: Do HoverOn  Travel Info Tab
    And I hover on First Class
    When I click on a login tab
    Then I will see the Log In To Delta page

  @Test9
  Scenario: DO dropDown on Round Trip
    And I click on the drop down button and i select the Multi-City option
    When  I click on a login tab
    Then I do validate the login page

  @Test10
  Scenario: DO dropDown on Round Trip
    And I click on the drop down button and i select the One Way option
    When  I click on a login tab
    Then I do validate the login page

  @Test11
  Scenario: Do check on Refundable Fares
    When I check on Refundable Fares Tab
    Then I should see the Tab are checked and validated

  @Test12
  Scenario: Do check on Shop with Miles
    When I do check on Shop with Miles Tab
    Then I should see the Tab is being  checked and validated

  @Test13
  Scenario: Do check on My dates are Flexible tab
    When I check on My dates are Flexible tab
    Then I am able to see the results is being  checked and validated

    @Test14
    Scenario: Do Search in search box
      When I search Flight status in search box
      And I click on search Button
      Then I should see search results Flight status page

  @Test15
  Scenario: Search in search box
    When I search Refund status in search box
    And I click on search Button
    Then I should see check Refund status page






















