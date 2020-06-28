 Feature: work on cigna home page
   I will be testing the home page

   Background:
     Given I'm already in cigna home page

   @SmokeTest
   Scenario: Explore silver plan for cigna international
     And  I click on cigna international
     And  I click on I individual plan
     When I click on silver plan
     Then I get all the details

   @SmokeTest
    Scenario: get insurance plan info
    And I on click individual family plan
    And I click on health insurance plan
   When I select customer service
   Then all the help info are displayed

   @SmokeTest
     Scenario: get medical credential
     And I on health Care Provider
     And I click on  Credential
     When I select MedicalCredential
     Then all the  info are displayed

   @SmokeTest
   Scenario: search company names
     And I  go to employer and broker
     And I click on WhyCigna
     And I go to Cost and Improvement
     When I click get company names
     Then all the us companies name should display

   @SmokeTest
   Scenario: manage health with cigna App
     And I click Member Resources
     When I click MobileApps
     Then I can install the app in my phone

   @SmokeTest
   Scenario: explore drug list in pharmacy option
     And I go to healthCareProvider
     And I click pharmacy
     When I click Drug list
     Then the information page displays

   @SmokeTest
   Scenario: log in with invalid credential
     And I click on log in
     And I enter user name
     And I enter password
     When I click on login button
     Then wrong user name and password display

   @SmokeTest
   Scenario: find dental insurance form
     And I go to find  forms
     When I click on dental form
     Then the form displays

   @SmokeTest
   Scenario: explore coverage claims
     And I go to health care provider
     And I click coverage claims
     And I click coverage policies
     When I select standard policies
     Then I can read the policies
   @SmokeTest
    Scenario: checkCignaInTheNews
      And I select About Us
      And I click on News Room
      When I select news and views
      Then I should see all the articles their

   @SmokeTest
   Scenario: Get referrals info
     And I select health care provider
     And I click coverage claims
     When I click referrals
     Then I should be able to reach the referral page

   @SmokeTest
    Scenario: Get more information about autism coverage
      And I select health and wellness
      When I click autism link
      Then I can read all the information

   @SmokeTest
   Scenario: explore glossary page
     And I select glossary link
     And I click category
     When I check one of the radio button
     Then Information should be displayed