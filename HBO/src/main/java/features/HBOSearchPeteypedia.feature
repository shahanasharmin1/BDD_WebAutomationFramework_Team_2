Feature: Search options on HBO homePage as a user
  As an user i wanted to search options on hbo.com

  Background:
    Given I am at HBO main homePage

  @SmokeTest
  Scenario: Search different options
    When  I am at HBO homePage
    And I should see Peteypedia  in homepage
    And I click in Peteypedia button
    Then I should PETEYPEDIA in next page

  @pending
  Scenario Outline: Search options using Parameter
    When I am at HBO homePage
    And I click in Peteypedia button
    And I should see "<Contents>" in PETEYPEDIA page
    Then I should see my "<ExpectedItems>"
    Examples:
      | Contents                                          | ExpectedItems                                       |
      | MEMO: The Computer and You                        | "MEMO: The Computer and You  "                      |
      | LEGAL: The Road to Reparations                    | "LEGAL: The Road to Reparations "                   |
      | EVIDENCE: Four Letters                            | "EVIDENCE: Four Letters  "                          |
      | EVIDENCE: "Excalibur," MerlinCorp. Raid (4/28/95) | "EVIDENCE: "Excalibur," MerlinCorp. Raid (4/28/95)" |
      | MEDIA: NOSTALGIA (2007)                           | "MEDIA: NOSTALGIA (2007) "                          |
      | CLIPPING: "Lady Trieu: Fact or Fiction"           | "CLIPPING: "Lady Trieu: Fact or Fiction""           |
      | MEMO: The Origin Story of "Sister Night"          | "MEMO: The Origin Story of "Sister Night""          |
      | MEMO: Fogdancing                                  | "MEMO: Fogdancing "                                 |
      | MEMO: Dale Petey                                  | "MEMO: Dale Petey "                                 |
