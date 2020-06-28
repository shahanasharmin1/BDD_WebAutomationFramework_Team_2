 Feature: work on HBO home page
   I want to test the HBO home page
   Background:
     Given I'm in the home page

   @SmokeTest
   Scenario: login to HBO with invalid credential
     And I click sign in  tab
     And I choose HBO plan
     And I get in sign in page
     And I enter email address
     And I enter password
     When  I click on login button
     Then I should have error

   @SmokeTest
    Scenario: validate documentaries page
     And I select movie tab
     And I mouse hover to Choose documentaries
     And wait some time
     When I click documentaries
     Then The page should displays

   @SmokeTest
   Scenario: validate all series page
     And I select series tab
     And I hover to all series
     When I click on all series
     Then the page should display

   @SmokeTest
   Scenario: validate all special  page
     And I select specials tab
     And I hover to all specials
     When I click on all specials
     Then the page is displayed

   @SmokeTest
     Scenario: validate kids page
     And I select kids
     And I mouse hover to roy element
     When I click on roy
     Then I can see the page

   @SmokeTest
   Scenario: validate sport page
     And I select sport
     And I mouse hover all sport element
     When I click all sport
     Then I should see the page

   @SmokeTest
   Scenario: validate about page
     When I click about tab
     Then I should see the page display

   @SmokeTest
   Scenario: validate facebook photo page
     And I select facebook tab
     And I mouse hover to facebook photos
     When I click facebook photos
     Then I should be in the facebook photo page

   @SmokeTest
   Scenario: validate free episode page
     When I click free episode  tab
     Then I should see the free episode page

   @SmokeTest
   Scenario: validate privacy policy page
     When I click privacy policy   tab
     Then I should see the privacy policy page