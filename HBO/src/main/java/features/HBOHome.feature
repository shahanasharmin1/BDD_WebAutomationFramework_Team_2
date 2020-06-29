Feature: Search series on hbo homepage searchBox
 As an user i wanted to search product on hbo.com for watching

  Background:
    Given I am at hbo Home Page

    @SmokeTest
    Scenario: Search product
      And I Enter Series in search input field
      When I Click search button
      Then I should see SERIES

    @Regression
    Scenario: Search product
       And I Enter Series in search input field
       When I Click search button
       Then I should see SERIES

    @SmokeTest
      Scenario: Search product using Parameter
        And I Enter "Shows" in search input field
        When I Click search button
        Then I should see "\"Shows\""

    @pending
        Scenario: Search product using Parameter
          And I Enter Items in search input field
          | Shows           |
          | Game of thrones |
          | Van Halsing     |
          | Alien 3         |
          When I Click search button
          Then I should see Expected Items
            | "Shows"            |
            | "Game of thrones"  |
            | "Van Halsing"      |
            | "Alien 3"          |

    @pending
          Scenario Outline: Search product using Parameter
            And I Enter "<Items>" in search input field
            When I Click search button
            Then I Should see "<ExpectedItems>"

            Examples:
            | Items           | ExpectedItems
            | Game of thrones | "Game of thrones"
            | Van Halsing     | "Van Halsing"
            | Alien 3         | "Alien 3"
            | The Newsroom    | "The Newsroom"
    @pending
            Scenario: Search product using Parameter
              And I Enter "Shows" in search input field
              When I Click search button
              Then I should see "Shows"


