Feature: testing home page footer
  I to check if footer parameters are working fine

  Background:
    Given I'm in the home page
  @SmokeTest
  Scenario: check the help option
    And  I click on  Help element
    And I select suspicious email
    When I click on what to do
    Then I can see the response
   @SmokeTest
  Scenario: explore elder financial care
    And  I click on  Help element
    And I click on life service
    When I click on explore on Elder financial care
    Then I can see caring for elder page
  @SmokeTest
  Scenario: check the security policy
    And I click on security and privacy
    And I click on complete details
    When I select how we guarantee your protection
    Then I can read all the policies
