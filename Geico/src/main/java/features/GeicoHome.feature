Feature:  work on registration and login to geico
  I try to regisster and login to geico

  Background:
    Given  I'm in geico home page
    @Pending
  Scenario Outline: log in to geico with invalid credential
    And I click on lob in tab
    And I enter first  "<user Id>"
    And I enter second "<password>"
    When I click on log in button
    Then I should see invalid userId and Password message
    Examples:
       |id  |pass|
      |Anika|ab123445|
      |Mahid|cd456677|
      |Asif |ef455677|
      |Mezbah|gh87321|
      |kahina|rt45672|
      |Kenzy |ds567889|
      |John  |gh234567|

    @SmokeTest
    Scenario Outline: create a claim in   Geico website
      And I click start here tab
      And First I enter "<policy number>"
      And Second step is enter "<date if birth>"
      And I finally I enter the "<Zip code>"
      When I click continue Button
      Then Invalid data message should appear

      Examples:
      |policy number|date of birth|Zip code|
      |1234567890   |09/25/1987   |22191   |
      |2345678901   |11/07/2002   |22193   |
      |3456789012   |06/14/1979   |22193   |
      |4567890123   |06/27/1964   |22192   |
      |6789012345   |03/17/1972   |22191   |
      |7890123456   |04/08/2006   |22192   |
      |8904567219   |08/06/1950   |22191   |
      |5678909872   |12/13/2004   |22195   |

