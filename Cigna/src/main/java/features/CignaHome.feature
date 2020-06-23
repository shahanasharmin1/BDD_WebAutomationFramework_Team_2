Feature: As a customer I want to explore cigna homepage
  Background:
    Given I am at cigna.com homePage
#    @Test1
#    Scenario: go on a medicare tab in the homepage
#      When I click on a medicare tab
#      Then I will see lot of things which are medicated related
##
      @Test2
      Scenario: scroll Down the cigna homepage
        When i scroll down the webPage byPixel
        Then I will see the the page are scrolled down


  @Test3
  Scenario: scroll till the end of the cigna homepage
    When i scroll till the end byPixel
    Then I will see the the page are scrolled tillend
