Feature:As a customer I want to explore cigna homepage
Background:
Given I am at cigna.com homepage
  @Test1
  Scenario:Health Care Providers  in the homepage
  When I click on a  the Health Care Providers
  Then I am able to see  the health care providers
  @Test2
  Scenario: Scroll Down the Cigna Homepage
  When I scroll down the webpage byPixel
  Then Then I will see the the page are scrolled down
  @Test3
  Scenario: scroll till the end of the Delta homepage
    When i scroll till the end
    Then I will see the the page are scrolled tillend

  @Test4
  Scenario Outline:I search Footer using Parameter
    When I am at Aboutcigna  in the homepage
    And  I need to click<items>in Footer part
    And  I should see<expected>results
    Then I am able to validate the item
    Examples:
      |   items                       |            expected                   |
      |  company profile              |           company profile             |
      |   careers                     |            careers                    |
      |   newsroom                    |            newsroom                   |
      |  investors                    |            investors                  |
      |   suppliers                   |            suppliers                  |
      |  Third party Administrators   |           Third party Administrators  |
      |  international                |           international               |

  @Test5
  Scenario: HoverOn Coverage and Claims
    And I hover on Coverage and Claims
    When I click on a Coverage and Claims
    Then I will see the Coverage and Claims
  @Test6
  Scenario:click on LogIn
  When I click on LogIn button
  Then I am able to see LogIn Page

  @Test7
  Scenario:click on UserID
    When I click on UserID
    Then I am able to see the inbox to write my  UserId
   @Test8
   Scenario: click on Logo
   When I click on Logo
   Then  I am able to see the Logo of Cigna
   @Test9
   Scenario: HoverOn Medicare
     And I hover on Medicare
     When I click on a Medicare
     Then I will see the Medicare related Items
    @Test10
    Scenario: HoverOn plans and services
      When I click on the plans and services
      Then I will see all the items included in plans and services