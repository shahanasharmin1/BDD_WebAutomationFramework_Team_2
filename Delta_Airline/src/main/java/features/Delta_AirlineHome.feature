Feature: As a customer I want to explore Delta.com homepage
  Background:
    Given I am at delta.com homePage
    @Test1
    Scenario:  LogIn button
      When I click on logIn button
      Then I can validate the text of homepage

  @Test2
  Scenario: scroll Down the cigna homepage
    When i scroll down the webPage byPixel
    Then I will see the the page are scrolled down

  @Test3
  Scenario: scroll till the end of the cigna homepage
    When i scroll till the end
    Then I will see the the page are scrolled tillend


@Test4
Scenario: Enter  username in the Input box
  When I click on a login tab
  And I enter username in the input box
  Then I will see the log in page


  @Test5
  Scenario: Enter  password in the Input box
    When I click on a login tab
    And I enter password in the input box
    Then I will see the log in page

@Test6
Scenario:  checkbox Pattern
  When I click on a login tab
  And I select the checkbox
  Then I will see the log in page

  @Test7
  Scenario: HoverOn SkyMiles Tab
    And I hover on SkyMiles
    When I click on a login tab
    Then I will see the log in page
