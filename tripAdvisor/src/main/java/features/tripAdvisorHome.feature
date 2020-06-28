Feature: As a customer I want to explore tripAdvisor.com

  @Test1
  Scenario: search hotels
    Given I am at tripAdvisor.com now
    And I click on hotels tab
    When I search hotels in the search box
    Then I should see the hotels
  @Test2
  Scenario: scroll Down the cigna homepage
    When i scroll down the webPage byPixel
    Then I will see the the page are scrolled down
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
  Scenario Outline: Search destinations in home page using parameters
    When I am already in trip advisor home page
    And I am looking for <destinations> in home page input field
    And I should see <expected> results
    Then I am able to do validate
    Examples:
      | destinations        | expected                |
      | New York City,NY    | " New York City,NY "    |
      | Singapore,Singapore | " Singapore,Singapore " |
      | Rome,Italy          | " Rome,Italy   "        |
      | Paris,France        | " Paris,France   "      |

  @Test6
  Scenario Outline: Search dream next trip  using parameters
    When I am looking for <dream next trip> in home page input field
    And I should see <expected> results
    Then I am able to do validate
    Examples:
      | dream next trip   | expected              |
      | Washington DC,DC  | " Washington DC,DC "  |
      | Nantucket,MA      | " Nantucket,MA "      |
      | Atlantic City,NJ  | " Atlantic City,NJ "  |
      | Arlington,VA      | " Arlington,VA  "     |
      | Dewey Beach,DE    | " Dewey Beach,DE "    |
      | Cape Neddick , ME | " Cape Neddick , ME " |









