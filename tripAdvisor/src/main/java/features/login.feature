Feature: As a customer I want to explore Trip Advisor's homepage

  Background:
    Given I am at tripadvisor.com homepage
    @Test1
    Scenario: In the searchbox
      When  I enter California in the search box
      And   I click on the search button
      Then  I should see the hotels
