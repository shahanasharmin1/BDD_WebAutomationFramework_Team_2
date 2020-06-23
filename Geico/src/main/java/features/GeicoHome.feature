Feature: As a customer I want to explore on a geico homePage
  Background:
    Given I am at geico.com homepage
  @Test1
  Scenario:  click On Boat element
    When  I click on  boat Tab
  Then I will see the expected result

    @Test2
    Scenario:  Drop Down of Auto Tab
    When I click on Auto Tab and I set the index 4
    Then I will see the value whatever I want to see

  @Test3
  Scenario: scroll Down the cigna homepage
    When i scroll down the webPage byPixel
    Then I will see the the page are scrolled down


  @Test4
  Scenario: scroll till the end of the cigna homepage
    When i scroll till the end
    Then I will see the the page are scrolled tillend
