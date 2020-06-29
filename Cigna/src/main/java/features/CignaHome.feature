Feature: Shop for Plans and Products
  As a user i want explore health plans and products
  Background:
    Given I am at Cigna Home Page

  @Test1
  Scenario Outline: I explore Health plans using Parameter
    When I am already in Home Page
    And I need to click on <Health Plans> in Cigna Home Page
    And I should see <expected Plans> results
    Then I am able to validate
    Examples:
      | Health Plans                                    | expected Plans                                     |
      | Health Insurance for Individuals and Families   | "Health Insurance for Individuals and Families"    |
      | Dental Insurance Plans                          | "Dental Insurance Plans"                           |
      | Medicare Plans                                  | "Medicare Plans"                                   |
      | Medicare Supplement Plans                       | "Medicare Supplement Plans"                        |
      | Other Supplemental Insurance                    | "Other Supplemental Insurance"                     |
      | International Health Insurance                  | "International Health Insurance"                   |

  @Test1
  Scenario: Scroll Down the cigna homepage
    When I scroll down the webPage byPixel
    Then I will see the webPage is scrolled down

  @Test2
  Scenario: Scroll Down till the end of cigna homepage
    When I scroll down till the end
    Then I will see the page is  scrolled down  till to the end
