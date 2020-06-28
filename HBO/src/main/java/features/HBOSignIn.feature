Feature: Search SignIn on hbo playHome page SignIn button
  As an user i wanted to search SignIn on hbo.com with invalid credentials

  Background:
    Given I am at hbo playHome Page

  @SmokeTest
  Scenario: User SignIn with invalid credential
  When User enter Email Address  tester1234@yahoo.com
  And User enter  password tester1234
  And User click in SignIn button
  Then User see Forget ID/Password

  @SmokeTest
  Scenario Outline: SignIn with invalid credentials
    When Users enter EmailAddress "<Email Address>"
    And Users enter password "<password>"
    And Users click in SignIn button
    Then Users see Forget ID/Password
    Examples:
    | Email Address         | password   |
    | tester1234@yahoo.com  | tester1234 |
    | tester123@yahoo.com   | tester 123 |
    | tester12@yahoo.com    | tester 12  |
    | tester1@yahoo.com     | tester 1   |