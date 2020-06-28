$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/features/HBOHome.feature");
formatter.feature({
  "name": "Search series on hbo homepage searchBox",
  "description": " As an user i wanted to search product on hbo.com for watching",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am at hbo Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_am_at_hbo_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search product",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I Enter Series in search input field",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_Enter_Series_in_search_input_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click search button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_Click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see SERIES",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_should_see_SERIES()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am at hbo Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_am_at_hbo_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search product",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I Enter Series in search input field",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_Enter_Series_in_search_input_field()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click search button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_Click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see SERIES",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_should_see_SERIES()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am at hbo Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_am_at_hbo_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search product using Parameter",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I Enter \"SERIES\" in search input field",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_Enter_in_search_input_field(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click search button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_Click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"\\\"SERIES\\\"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_should_see(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am at hbo Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_am_at_hbo_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search product using Parameter",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I Enter Items in search input field",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_Enter_Items_in_search_input_field(java.util.List\u003cjava.lang.String\u003e)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click search button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_Click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see Expected Items",
  "rows": [
    {},
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_should_see_Expected_Items(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Search product using Parameter",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I Enter \"\u003cItems\u003e\" in search input field",
  "keyword": "And "
});
formatter.step({
  "name": "I Click search button",
  "keyword": "When "
});
formatter.step({
  "name": "I Should see \"\u003cExpectedItems\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Items"
      ]
    },
    {
      "cells": [
        "SERIES"
      ]
    },
    {
      "cells": [
        "Girls Season"
      ]
    },
    {
      "cells": [
        "Alien 3"
      ]
    },
    {
      "cells": [
        "The Newsroom"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am at hbo Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_am_at_hbo_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search product using Parameter",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I Enter \"SERIES\" in search input field",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_Enter_in_search_input_field(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click search button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_Click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Should see \"\u003cExpectedItems\u003e\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_Should_see(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am at hbo Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_am_at_hbo_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search product using Parameter",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I Enter \"Girls Season\" in search input field",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_Enter_in_search_input_field(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click search button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_Click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Should see \"\u003cExpectedItems\u003e\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_Should_see(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am at hbo Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_am_at_hbo_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search product using Parameter",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I Enter \"Alien 3\" in search input field",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_Enter_in_search_input_field(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click search button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_Click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Should see \"\u003cExpectedItems\u003e\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_Should_see(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am at hbo Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_am_at_hbo_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search product using Parameter",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I Enter \"The Newsroom\" in search input field",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_Enter_in_search_input_field(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click search button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_Click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Should see \"\u003cExpectedItems\u003e\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_Should_see(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am at hbo Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_am_at_hbo_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search product using Parameter",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I Enter \"SERIES\" in search input field",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_Enter_in_search_input_field(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click search button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_Click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"SERIES\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_Step_Definition.i_should_see(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/main/java/features/HBOSearchPeteypedia.feature");
formatter.feature({
  "name": "Search options on HBO homePage as a user",
  "description": "  As an user i wanted to search options on hbo.com",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am at HBO main homePage",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HBOSearchPeteypedia_Step_Definition.i_am_at_HBO_main_homePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search different options",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "I am at HBO homePage",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.HBOSearchPeteypedia_Step_Definition.i_am_at_HBO_homePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see Peteypedia  in homepage",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HBOSearchPeteypedia_Step_Definition.i_should_see_Peteypedia_in_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click in Peteypedia button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HBOSearchPeteypedia_Step_Definition.i_click_in_Peteypedia_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should PETEYPEDIA in next page",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.HBOSearchPeteypedia_Step_Definition.i_should_PETEYPEDIA_in_next_page()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "Search options using Parameter",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am at HBO homePage",
  "keyword": "When "
});
formatter.step({
  "name": "I click in Peteypedia button",
  "keyword": "And "
});
formatter.step({
  "name": "I should see \"\u003cContents\u003e\" in PETEYPEDIA page",
  "keyword": "And "
});
formatter.step({
  "name": "I should see my \"\u003cExpectedItems\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Contents",
        "ExpectedItems"
      ]
    },
    {
      "cells": [
        "MEMO: The Computer and You",
        "\"MEMO: The Computer and You  \""
      ]
    },
    {
      "cells": [
        "LEGAL: The Road to Reparations",
        "\"LEGAL: The Road to Reparations \""
      ]
    },
    {
      "cells": [
        "EVIDENCE: Four Letters",
        "\"EVIDENCE: Four Letters  \""
      ]
    },
    {
      "cells": [
        "EVIDENCE: \"Excalibur,\" MerlinCorp. Raid (4/28/95)",
        "\"EVIDENCE: \"Excalibur,\" MerlinCorp. Raid (4/28/95)\""
      ]
    },
    {
      "cells": [
        "MEDIA: NOSTALGIA (2007)",
        "\"MEDIA: NOSTALGIA (2007) \""
      ]
    },
    {
      "cells": [
        "CLIPPING: \"Lady Trieu: Fact or Fiction\"",
        "\"CLIPPING: \"Lady Trieu: Fact or Fiction\"\""
      ]
    },
    {
      "cells": [
        "MEMO: The Origin Story of \"Sister Night\"",
        "\"MEMO: The Origin Story of \"Sister Night\"\""
      ]
    },
    {
      "cells": [
        "MEMO: Fogdancing",
        "\"MEMO: Fogdancing \""
      ]
    },
    {
      "cells": [
        "MEMO: Dale Petey",
        "\"MEMO: Dale Petey \""
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am at HBO main homePage",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HBOSearchPeteypedia_Step_Definition.i_am_at_HBO_main_homePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search options using Parameter",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am at HBO homePage",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.HBOSearchPeteypedia_Step_Definition.i_am_at_HBO_homePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click in Peteypedia button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HBOSearchPeteypedia_Step_Definition.i_click_in_Peteypedia_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"MEMO: The Computer and You\" in PETEYPEDIA page",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HBOSearchPeteypedia_Step_Definition.i_should_see_in_PETEYPEDIA_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see my \"\"MEMO: The Computer and You  \"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.HBOSearchPeteypedia_Step_Definition.i_should_see_my_MEMO_The_Computer_and_You(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am at HBO main homePage",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HBOSearchPeteypedia_Step_Definition.i_am_at_HBO_main_homePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search options using Parameter",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am at HBO homePage",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.HBOSearchPeteypedia_Step_Definition.i_am_at_HBO_homePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click in Peteypedia button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HBOSearchPeteypedia_Step_Definition.i_click_in_Peteypedia_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"LEGAL: The Road to Reparations\" in PETEYPEDIA page",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HBOSearchPeteypedia_Step_Definition.i_should_see_in_PETEYPEDIA_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see my \"\"LEGAL: The Road to Reparations \"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.HBOSearchPeteypedia_Step_Definition.i_should_see_my_LEGAL_The_Road_to_Reparations(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am at HBO main homePage",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HBOSearchPeteypedia_Step_Definition.i_am_at_HBO_main_homePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search options using Parameter",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am at HBO homePage",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.HBOSearchPeteypedia_Step_Definition.i_am_at_HBO_homePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click in Peteypedia button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HBOSearchPeteypedia_Step_Definition.i_click_in_Peteypedia_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"EVIDENCE: Four Letters\" in PETEYPEDIA page",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HBOSearchPeteypedia_Step_Definition.i_should_see_in_PETEYPEDIA_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see my \"\"EVIDENCE: Four Letters  \"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.HBOSearchPeteypedia_Step_Definition.i_should_see_my_EVIDENCE_Four_Letters(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am at HBO main homePage",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HBOSearchPeteypedia_Step_Definition.i_am_at_HBO_main_homePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search options using Parameter",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am at HBO homePage",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.HBOSearchPeteypedia_Step_Definition.i_am_at_HBO_homePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click in Peteypedia button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HBOSearchPeteypedia_Step_Definition.i_click_in_Peteypedia_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"EVIDENCE: \"Excalibur,\" MerlinCorp. Raid (4/28/95)\" in PETEYPEDIA page",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HBOSearchPeteypedia_Step_Definition.i_should_see_EVIDENCE_Excalibur_in_PETEYPEDIA_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see my \"\"EVIDENCE: \"Excalibur,\" MerlinCorp. Raid (4/28/95)\"\"",
  "keyword": "Then "
});
formatter.match({});
formatter.result({
  "status": "undefined"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am at HBO main homePage",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HBOSearchPeteypedia_Step_Definition.i_am_at_HBO_main_homePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search options using Parameter",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am at HBO homePage",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.HBOSearchPeteypedia_Step_Definition.i_am_at_HBO_homePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click in Peteypedia button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HBOSearchPeteypedia_Step_Definition.i_click_in_Peteypedia_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"MEDIA: NOSTALGIA (2007)\" in PETEYPEDIA page",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HBOSearchPeteypedia_Step_Definition.i_should_see_in_PETEYPEDIA_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see my \"\"MEDIA: NOSTALGIA (2007) \"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.HBOSearchPeteypedia_Step_Definition.i_should_see_my_MEDIA_NOSTALGIA(java.lang.Integer,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am at HBO main homePage",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HBOSearchPeteypedia_Step_Definition.i_am_at_HBO_main_homePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search options using Parameter",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am at HBO homePage",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.HBOSearchPeteypedia_Step_Definition.i_am_at_HBO_homePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click in Peteypedia button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HBOSearchPeteypedia_Step_Definition.i_click_in_Peteypedia_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"CLIPPING: \"Lady Trieu: Fact or Fiction\"\" in PETEYPEDIA page",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HBOSearchPeteypedia_Step_Definition.i_should_see_CLIPPING_Lady_Trieu_Fact_or_Fiction_in_PETEYPEDIA_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see my \"\"CLIPPING: \"Lady Trieu: Fact or Fiction\"\"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.HBOSearchPeteypedia_Step_Definition.i_should_see_my_CLIPPING(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am at HBO main homePage",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HBOSearchPeteypedia_Step_Definition.i_am_at_HBO_main_homePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search options using Parameter",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am at HBO homePage",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.HBOSearchPeteypedia_Step_Definition.i_am_at_HBO_homePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click in Peteypedia button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HBOSearchPeteypedia_Step_Definition.i_click_in_Peteypedia_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"MEMO: The Origin Story of \"Sister Night\"\" in PETEYPEDIA page",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HBOSearchPeteypedia_Step_Definition.i_should_see_MEMO_The_Origin_Story_of_Sister_Night_in_PETEYPEDIA_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see my \"\"MEMO: The Origin Story of \"Sister Night\"\"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.HBOSearchPeteypedia_Step_Definition.i_should_see_my_MEMO_The_Origin_Story_of(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am at HBO main homePage",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HBOSearchPeteypedia_Step_Definition.i_am_at_HBO_main_homePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search options using Parameter",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am at HBO homePage",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.HBOSearchPeteypedia_Step_Definition.i_am_at_HBO_homePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click in Peteypedia button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HBOSearchPeteypedia_Step_Definition.i_click_in_Peteypedia_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"MEMO: Fogdancing\" in PETEYPEDIA page",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HBOSearchPeteypedia_Step_Definition.i_should_see_in_PETEYPEDIA_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see my \"\"MEMO: Fogdancing \"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.HBOSearchPeteypedia_Step_Definition.i_should_see_my_MEMO_Fogdancing(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am at HBO main homePage",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HBOSearchPeteypedia_Step_Definition.i_am_at_HBO_main_homePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Search options using Parameter",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "I am at HBO homePage",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.HBOSearchPeteypedia_Step_Definition.i_am_at_HBO_homePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click in Peteypedia button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HBOSearchPeteypedia_Step_Definition.i_click_in_Peteypedia_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"MEMO: Dale Petey\" in PETEYPEDIA page",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HBOSearchPeteypedia_Step_Definition.i_should_see_in_PETEYPEDIA_page(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see my \"\"MEMO: Dale Petey \"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.HBOSearchPeteypedia_Step_Definition.i_should_see_my_MEMO_Dale_Petey(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/main/java/features/HBOSignIn.feature");
formatter.feature({
  "name": "Search SignIn on hbo playHome page SignIn button",
  "description": "  As an user i wanted to search SignIn on hbo.com with invalid credentials",
  "keyword": "Feature"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am at hbo playHome Page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_SignIn_Step_Definition.i_am_at_hbo_playHome_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "User SignIn with invalid credential",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "User enter Email Address  tester1234@yahoo.com",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_SignIn_Step_Definition.user_enter_Email_Address_tester1234_yahoo_com()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enter  password tester1234",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_SignIn_Step_Definition.user_enter_password_tester1234()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User click in SignIn button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_SignIn_Step_Definition.user_click_in_SignIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User see Forget ID/Password",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_SignIn_Step_Definition.user_see_Forget_ID_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "SignIn with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "Users enter EmailAddress \"\u003cEmail Address\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Users enter password \"\u003cpassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Users click in SignIn button",
  "keyword": "And "
});
formatter.step({
  "name": "Users see Forget ID/Password",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Email Address",
        "password"
      ]
    },
    {
      "cells": [
        "tester1234@yahoo.com",
        "tester1234"
      ]
    },
    {
      "cells": [
        "tester123@yahoo.com",
        "tester 123"
      ]
    },
    {
      "cells": [
        "tester12@yahoo.com",
        "tester 12"
      ]
    },
    {
      "cells": [
        "tester1@yahoo.com",
        "tester 1"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am at hbo playHome Page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_SignIn_Step_Definition.i_am_at_hbo_playHome_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "SignIn with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "Users enter EmailAddress \"tester1234@yahoo.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_SignIn_Step_Definition.users_enter_EmailAddress(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Users enter password \"tester1234\"",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_SignIn_Step_Definition.users_enter_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Users click in SignIn button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_SignIn_Step_Definition.users_click_in_SignIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Users see Forget ID/Password",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_SignIn_Step_Definition.users_see_Forget_ID_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am at hbo playHome Page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_SignIn_Step_Definition.i_am_at_hbo_playHome_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "SignIn with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "Users enter EmailAddress \"tester123@yahoo.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_SignIn_Step_Definition.users_enter_EmailAddress(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Users enter password \"tester 123\"",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_SignIn_Step_Definition.users_enter_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Users click in SignIn button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_SignIn_Step_Definition.users_click_in_SignIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Users see Forget ID/Password",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_SignIn_Step_Definition.users_see_Forget_ID_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am at hbo playHome Page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_SignIn_Step_Definition.i_am_at_hbo_playHome_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "SignIn with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "Users enter EmailAddress \"tester12@yahoo.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_SignIn_Step_Definition.users_enter_EmailAddress(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Users enter password \"tester 12\"",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_SignIn_Step_Definition.users_enter_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Users click in SignIn button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_SignIn_Step_Definition.users_click_in_SignIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Users see Forget ID/Password",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_SignIn_Step_Definition.users_see_Forget_ID_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am at hbo playHome Page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_SignIn_Step_Definition.i_am_at_hbo_playHome_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "SignIn with invalid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
});
formatter.step({
  "name": "Users enter EmailAddress \"tester1@yahoo.com\"",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_SignIn_Step_Definition.users_enter_EmailAddress(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Users enter password \"tester 1\"",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_SignIn_Step_Definition.users_enter_password(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Users click in SignIn button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_SignIn_Step_Definition.users_click_in_SignIn_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Users see Forget ID/Password",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnHBO_SignIn_Step_Definition.users_see_Forget_ID_Password()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});