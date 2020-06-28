

Feature: Search Deals on at&t search box
  As a customer i want to search Deals on at&t homepage

  @Test1
  Scenario: Search deals
    Given I am at at&t Home Page
    And I enter deals on the search box in homepage
    When I click search button
    Then I should see deals

  @Test2
  Scenario: Scroll Down the at&t homepage
    When I scroll down the webPage byPixel
    Then I will see the webPage is scrolled down

  @Test3
  Scenario: Scroll Down till the end of at&t homepage
    When I scroll down till the end
    Then I will see the page is  scrolled down  till to the end

  @Test4
  Scenario Outline: Search offers in Search box input field
    When I am in search box input field
    And I am looking for <deals> in search box input field
    And I should see <expected> results
    Then I am able to do validate
    Examples:
      | deals                 | expected |
      | Upgrade a device      | "Upgrade a device       |
      | AT&T PREPAID          | "AT&T PREPAID "         |
      | TV & internet bundles | "TV & internet bundles" |
      | AT&T deals            | " AT&T deals  "         |

  @Test5
  Scenario: Scenario: DO dropDown on Account
    When I click on the drop down button and i select View & pay bill
    Then I should see Sign in page




