Feature: As a customer I want to explore HBO

  @Test1
    Scenario:  SignIn button
    When I click on logIn button
    Then I am able to see signIn options

  @Test2
  Scenario Outline:I search Header using Parameter
   When I am at HBO homepage
   And  I need to click<items>in header part
   And  I should see<expected>results
   Then I am able to validate the item
   Examples:
    |   items      |    expected |
    |  SERIES      |    SERIES   |
    |  MOVIES      |   MOVIES    |
    |  SPECIALS    |   SPECIALS  |
    |   SPORTS     |   SPORTS    |
    |    KIDS      |    KIDS     |
  @Test3
  Scenario: scroll Down the HBO homepage
    When i scroll down the webPage byPixel
    Then I will see the the page are scrolled down

  @Test4
    Scenario: scroll till the end of the HBO homepage
    When i scroll till the end
    Then I will see the the page are scrolled tillend
  @Test5
  Scenario: click on Logo
   When I click on HBO Logo
   Then I will be able to get it
  @Test6
  Scenario:hover on search button
    When I click search button
    Then I will the all the items in the search icon
  @Test7
   Scenario: click on Drop Down Button of All Series
    When I click on the Drop down button of All Series
    Then I should get all the options of it
   @Test8
   Scenario:click on Image
     When I click on Image
     Then I am able to validate the HBO Homepage
   @Test9
   Scenario: As a customer i want to find out free Episodes
    When I click on it
    Then I can see see all Episodes of HBO

