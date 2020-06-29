Feature: Search Hotels in tripAdvisor
  As a customer i want to search hotels in California

  @Test1
  Scenario: Search Hotels in tripAdvisor
    Given I am at tripAdvisor Home Page
    And I click on hotels button in homepage
    When I click hotels button
    Then I should be able to search hotels in California
  @Test2
  Scenario: Scroll Down the tripAdviser homepage
    When I scroll down the webPage byPixel
    Then I will see the webPage is scrolled down

  @Test3
  Scenario: Scroll Down till the end of tripAdvisor homepage
    When I scroll down till the end
    Then I will see the page is  scrolled down  till to the end

  @Test4
  Scenario: I am at home page
    When I do click in Sign in
    And  I should see new page with signin with email
    And  I pass < email > and < password > in search field
    And  I click Log in
    And I should see forget ID
    Then I should validate forget ID

  @Test5
  Scenario Outline: Search dream next trip  using parameters
    When I am looking for <dream next trip> in home page input field
    And I should see <expected> results
    Then I am able to do validate
    Examples:
      | dream next trip     | expected              |
      | Cape Neddick , ME   | " Washington DC,DC "  |
      | Dewey Beach,DE      | " Dewey Beach,DE "    |
      | Atlantic City,NJ    | " Atlantic City,NJ "  |
      | Arlington,VA        | " Arlington,VA  "     |
      | Nantucket,MA        | " Nantucket,MA "      |
      | Washington DC,DC    | " Cape Neddick , ME " |
