Feature: log into bank of america account
     I try to login with invalid invalid credential

  Background:
   Given user is already in home page
 @SmokeTest
 Scenario: Log in with invalid credential
  And user enters kahina
  And user enters test123
  When user clicks sign in button
  Then user sees Forgot ID/Password

 @SmokeTest
  Scenario Outline:  Log in with invalid credential
  And user enters first id "<Id>"
  And user enters  second password "<Password>"
  When user clicks sign in button
  Then user sees Forgot ID/Password
   Examples:
    | Id  | password|
   |kahina| test123|
   |pnt   | test124|
   |marufa| test 135|
   |Asif  | test456 |
   |shahana| test2356|
   |team  | test7890|