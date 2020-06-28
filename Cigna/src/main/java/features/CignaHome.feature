Feature: Search home page  on at&t home page
  As a customer i wanted to search home page on cigna.com homepage

  @Test1
  Scenario: Scroll Down the cigna homepage
    When I scroll down the webPage byPixel
    Then I will see the webPage is scrolled down

  @Test2
  Scenario: Scroll Down till the end of cigna homepage
    When I scroll down till the end
    Then I will see the page is  scrolled down  till to the end

    @Test3
    Scenario Outline: Search Log in using parameters
      When I am in Log in page
      And I am passing  <Username> in search  input field
      And I do pass <Password> in input field
      Then I should see Log in
      Examples:
      | Username   | Password |
      | tester1    | 1234     |
      | tester2    | 1232     |
      | tester3    | 1243     |
      | tester4    | 4321     |