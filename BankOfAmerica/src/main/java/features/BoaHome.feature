  Feature:Log into bank of america account
  Background:
  @Test1
  Scenario: Log In with Invalid credential
  Given  user is already in BOA home page
  And  user enters shamima
  And  user enters pl944985
  When user clicks sign in button
  Then user sees Forgot ID/Password

  @Test2
  Scenario: Search credit cards using Parameter
    And I Enter Items in search input field
      | cash rewards credit cards                |
      | travel and airlines rewards credit card  |
      | lower interest rate cards                |
      |  points rewards cards                    |
      | cards to build or rebuild credit         |
      |cards for students                        |
    When I Click search button
    Then I should see Expected Items
      | cash rewards credit cards                |
      | travel and airlines rewards credit card  |
      | lower interest rate cards                |
      |  points rewards cards                    |
      | cards to build or rebuild credit         |
      |cards for students                        |

   @Test3
   Scenario: Scroll Down the BOA Homepage
    When I scroll down the webpage byPixel
    Then Then I will see the the page are scrolled down
   @Test4
   Scenario: scroll till the end of the BOA homepage
    When i scroll till the end
    Then I will see the the page are scrolled tillend

   @Test5
   Scenario Outline:I search Footer using Parameter
     When I am at BOA  homepage
     And  I need to click<items>in Footer part
     And  I should see<expected>results
     Then I am able to validate the item
     Examples:
       |   items                        |            expected                |
       |   locations                    |          locations                 |
       |   contact us                   |          contact us                |
       |   help                         |            help                    |
       |   accessible banking           |          accessible banking        |
       |   careers                      |           careers                  |
       |   privacy and security         |            privacy and security    |
       |   mcafee                       |            mcafee                  |
       |   sitemap                      |            sitemap                 |
       |advertising practice            |            advertising practice    |
       | feedback                       |            feedback                |
       |view full online banking site   |       view full online banking site|

    @Test6
  Scenario: HoverOn Home Loans
    And I hover on Home Loans
    When I click on a Home Loans
    Then I will validate the Home Loan page

   @Test7
   Scenario: click on Auto Loans
   When I click on Auto loans
   Then I can get infomation on how In can apply for the loan
   @Test8
     Scenario: Search mobile banking in search box
      Given I am at BOA Home Page
      And I enter mobile banking on the search box in homepage
      When I click search button
      Then I should see mobile banking

    @Test9
    Scenario: click on BOA logo
      When I click on logo
      Then I can validate the page

    @Test10
    Scenario: click on Image
      When I click on image
      Then I am able to see the image








