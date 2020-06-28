Feature: Explore AT&T home page
  I want to  check all the pages from AT&T home page

  Background:
    Given I'm in AT&T  deals page

  @SmokeTest
  Scenario: validate tv_internet page
    And  I select tv&internet deals
    And  hover to select internet_tv
    When I click internet_tv link
    Then the page should open

  @SmokeTest
  Scenario: signInForSupport
    And I select Support
    And I click SingIn
    And I enter UserId
    And I enter Password
    When I click signIn Button
    Then I should see error message

  @SmokeTest
  Scenario:  get prepaid apple phone plan
    And I select prepaid link
    And I  choose phone plan;
    When I explore apple options
    Then I can see the offers for apple

  @SmokeTest
  Scenario:  explore wireless deals
    And I  choose Wireless
    And I mouse hover to wireless deals
    When I click wireless deals
    Then I can see all the deals

  @SmokeTest
  Scenario: look up for the tv options
    And I select Tv link
    And I mouse hover to channel lineup
    When I click channel lineUp
    Then I should get the channels option

  @SmokeTest
  Scenario: prepaid deals page
    And I select prepaid tab
    And I wait some time
    When I click prepaid deals
    Then I should see the page opened

  @SmokeTest
  Scenario: validate accessories in wireless page
   And I choose wireless link
   When I click on accessories
   Then accessories page is displayed

  @SmokeTest
  Scenario: validate sports page
    And I select tv link
    When I click on sport
    Then  sport page should display

  @SmokeTest
    Scenario: validate internet plan page
    And I select internet tab
    When I click plan and price
    Then the page should display

  @SmokeTest
    Scenario: validate wifi technologies page
      And I select internet
      When I click wifi technologies
      Then page should display

  @SmokeTest
  Scenario: validate move service page
    And I select account tab
    And I hover to move my services element
    When I click move my services
    Then the page should displays

