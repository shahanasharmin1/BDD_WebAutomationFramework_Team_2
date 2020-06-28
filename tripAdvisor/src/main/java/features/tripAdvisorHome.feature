Feature: As a customer I want to explore tripAdvisor.com
   @Test1
  Scenario: search hotels
    Given I am at tripAdvisor.com now
    And I click on hotels tab
    When I search hotels in the search box
    Then I should see the hotels

    @Test2
    Scenario Outline: Search dream next trip  using parameters
    When I am looking for <dream next trip> in home page input field
    And I should see <expected> results
    Then I am able to do validate
    Examples:
      | dream next trip     | expected              |
      | Washington DC,DC    | " Washington DC,DC "  |
      | Nantucket,MA        | " Nantucket,MA "      |
      | Atlantic City,NJ    | " Atlantic City,NJ "  |
      | Arlington,VA        | " Arlington,VA  "     |
      | Dewey Beach,DE      | " Dewey Beach,DE "    |
      | Cape Neddick , ME   | " Cape Neddick , ME " |

   @Test3
   Scenario: Search Hotels in tripAdvisor
    Given I am at tripAdvisor Home Page
    And I click on hotels button in homepage
    When I click hotels button
    Then I should be able to search hotels in California

   @Test4
   Scenario: as a customer i want to click on trips
    When I click on trips
    Then i am able to see all the trip information

    @Test5
     Scenario Outline: Search destinations in home page using parameters
     When I am already in trip advisor home page
     And I am looking for <destinations> in home page input field
     And I should see <expected> results
     Then I am able to do validate
     Examples:
       | destinations            | expected                |
       | New York City,NY        | " New York City,NY "    |
       | Singapore,Singapore     | " Singapore,Singapore " |
       | Rome,Italy              | " Rome,Italy   "        |
       | Paris,France            | " Paris,France   "      |

   @Test6
   Scenario: click on logo
    When I click on logo
    Then I can validate the homepage of trip Advisor
   @Test7
   Scenario: scroll Down the trip Advisor homepage
     When i scroll down the webPage byPixel
     Then I will see the the page are scrolled down

    @Test8
    Scenario: get an image
    When I click on image
    Then I am able to get it
    @Test9
    Scenario: scroll till the end of the HBO homepage
      When i scroll till the end
      Then I will see the the page are scrolled tillend

    @Test10
    Scenario: find vacation rentals
    When I click on find vacation rentals options
    Then I am able to vsalidate that page
    @Test11
    Scenario: hover on search box
    When I click on search button
    Then It is selected to search whatever i want to search

  @Test12
  Scenario: I am at home page
    When I do click in Sign in
    And  I should see new page with signin with email
    And  I pass < email > and < password > in search field
    And  I click Log in
    And I should see forget ID
    Then I should validate forget ID

