Feature: Search Deals on at&t search box
  As a customer i want to search Deals on at&t homepage
  @Test1
  Scenario: Search deals
    Given I am at at&t Home Page
    And I enter deals on the search box in homepage
    When I click search button
    Then I should see deal

   @Test2
   Scenario Outline:I search Header using Parameter
     When I am at  at&thomepage
     And  I need to click<items>in header part
     And  I should see<expected>results
     Then I am able to validate the items
     Examples:
       |   items         |       expected   |
       |   Deals         |       Deals      |
       |  wireless       |       wireless   |
       |  Internet       |       Internet   |
       |   tv            |       tv         |
       |  prepaid        |       prepaid    |

  @Test3
  Scenario: Scroll Down the BOA Homepage
    When I scroll down the webpage byPixel
    Then Then I will see the the page are scrolled down
  @Test4
  Scenario: scroll till the end of the BOA homepage
    When i scroll till the end
    Then I will see the the page are scrolled tillend

  @Test5
  Scenario:click on Image
    When I click on Image
    Then I am able to validate the AT&THomepage

  @Test6
  Scenario:hover on internet
    When I click on internet
    Then I will see the offer of the internet options

  @Test7
  Scenario: drop down on Account Tab
    And I click on the drop down button and i select the View and pay bill
    When  I click account tab
    Then I  can validate the webpage




