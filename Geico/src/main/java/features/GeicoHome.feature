Feature:As a customer i want to explore Geico homepage
  Background:
  @Test1
   Scenario: Click logIn
    Given I am at Geico Home Page
    When I click on log in button
    Then I should see the logIn option
  @Test2
  Scenario Outline: Log in with invalid credential
    And user enters first id<id>
    And user enters first password <password>
    When user clicks sign in button
    Then user sees Forgot ID?Password
  Examples:
    |id       | password|
    |Shamima  | Pl944985|
    |Tanjina  | pl56789  |
    |Shahana  | pl145678 |
    |Mezbah   | pl679540 |
    |Asif     | pl678943 |

  @Test3
  Scenario: scroll Down the Geico homepage
    When i scroll down the webPage byPixel
    Then I will see the the page are scrolled down

  @Test4
  Scenario: scroll till the end of the Geico homepage
    When i scroll till the end
    Then I will see the the page are scrolled tillend

  @Test5
  Scenario Outline:I search Footer using Parameter
    When I am at Geico Careers in the homepage
    And  I need to click<items>in Footer part
    And  I should see<expected>results
    Then I am able to validate the item
    Examples:
      |   items                    |        expected                |
      |   Customer Service         |      Customer Service          |
      |   Sales                    |        Sales                   |
      |   Claims                   |        Claims                  |
      |   Leadership Development   |     Leadership Development     |
      |   Auto Damage              |       Auto Damage              |
      |   Corporate & Technology   |       Corporate & Technology   |


  @Test6
  Scenario:
  When I click on RadioButton
  Then The RadioButton supposed to be clicked
  @Test7
   Scenario:
    When I click on checkBox
    Then The checkBox to be clicked
  @Test8
  Scenario:
    When I click on Logo
    Then The Logo element supposed to be clicked to validate the homepage

  @Test9
  Scenario:
    When I click on Image
    Then I am able to validate the geico Homepage

  @Test10
  Scenario: HoverOn Access Your Policy
    And I hover on Access Your Policy
    When I click Access Your Policy
    Then I will enter Access Your Policy options
  @Test11
  Scenario:
    When I click on Track a claim
    Then The Track a claim options supposed to be clicked

  @Test12
  Scenario:
    When I click on search Button
    Then The search Button supposed to be clicked

  @Test13
  Scenario:
    When I click on REPORTANINCIDENT
    Then The  REPORTANINCIDENT options supposed to be clicked
   @Test14
   Scenario:search Information
     When I click on Infomation
     Then I am able to search Information about Geico
  @Test15
  Scenario: click on Drop Down Button of the Insurance
   When I click on the Drop down button
   Then I should get all the options of the Insurance
  @Test16
  Scenario: select Vechile Insurance by DropDown
    When I select the Vechile Insurance
    Then I should get the Vechile Insurance options
  @Test17
  Scenario: drop down on Auto Tab
    And I click on the drop down button of auto tab and i select the identity protection
    When  I click auto tab
    Then I  am able to select identity protection
