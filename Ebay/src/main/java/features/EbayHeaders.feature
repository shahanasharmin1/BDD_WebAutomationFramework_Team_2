Feature: work with Ebay headers
  I want to test the functionality of the headers elements
   Background:
     Given I'm already in home page
  @Regression
  Scenario: check the title of sell element
    When I click on sell tab
    Then  sell page should open

  @Regression
  Scenario: check the title deals element
    When I click on deals tab
    Then deals page should open

  @Regression
  Scenario: Search product
    And I enter kids swimming pool is search box
    When I click on search
    Then I should See kids swimming pool

  @Regression
    Scenario: search flowers in search box
      And I enter flowers is search box
      When I click on search
      Then I should See flowers page

  @Regression
   Scenario: Browse on daily deals
     When open Daily deals page
     Then I can see all the deals

  @Regression
  Scenario: bay a concert tickets
    And I select Music
    When  I click on Concert tickets
    Then I can reach the page to bay tickets

  @SmokeTest
  Scenario: explore home surveillance in electronic options
    And I click on shop All categories
    And I hover to electronics
    And I click electronics
    And again hover to home surveillance
    When I click home surveillance
    Then the page should open








