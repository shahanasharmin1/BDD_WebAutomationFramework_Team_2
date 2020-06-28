$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/features/HBOHome.feature");
formatter.feature({
  "name": "Search series on hbo homepage searchBox",
  "description": "  As an user i wanted to search product on hbo.com for watching",
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
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
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
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Regression"
    }
  ]
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
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
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
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@pending"
    }
  ]
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
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@pending"
    }
  ]
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
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@pending"
    }
  ]
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
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@pending"
    }
  ]
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
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@pending"
    }
  ]
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
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@pending"
    }
  ]
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
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@pending"
    }
  ]
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
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@SmokeTest"
    }
  ]
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
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@pending"
    }
  ]
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
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@pending"
    }
  ]
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
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@pending"
    }
  ]
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
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@pending"
    }
  ]
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
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@pending"
    }
  ]
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
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@pending"
    }
  ]
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
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@pending"
    }
  ]
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
  "error_message": "org.openqa.selenium.SessionNotCreatedException: session not created\nfrom disconnected: Unable to receive message from renderer\n  (Session info: chrome\u003d83.0.4103.116)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027Nafiss-Air.lan1\u0027, ip: \u00272604:2000:1601:6003:0:0:0:cb9%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.5\u0027, java.version: \u002711.0.6\u0027\nDriver info: driver.version: ChromeDriver\nremote stacktrace: 0   chromedriver                        0x000000010aae8e99 chromedriver + 4808345\n1   chromedriver                        0x000000010aa835f3 chromedriver + 4392435\n2   chromedriver                        0x000000010a70f29d chromedriver + 770717\n3   chromedriver                        0x000000010a70252e chromedriver + 718126\n4   chromedriver                        0x000000010a70179f chromedriver + 714655\n5   chromedriver                        0x000000010a701a11 chromedriver + 715281\n6   chromedriver                        0x000000010a701192 chromedriver + 713106\n7   chromedriver                        0x000000010a70849f chromedriver + 742559\n8   chromedriver                        0x000000010a70113b chromedriver + 713019\n9   chromedriver                        0x000000010a7020f9 chromedriver + 717049\n10  chromedriver                        0x000000010a70179f chromedriver + 714655\n11  chromedriver                        0x000000010a701a11 chromedriver + 715281\n12  chromedriver                        0x000000010a701192 chromedriver + 713106\n13  chromedriver                        0x000000010a7073d8 chromedriver + 738264\n14  chromedriver                        0x000000010a70113b chromedriver + 713019\n15  chromedriver                        0x000000010a7020f9 chromedriver + 717049\n16  chromedriver                        0x000000010a70179f chromedriver + 714655\n17  chromedriver                        0x000000010a701a11 chromedriver + 715281\n18  chromedriver                        0x000000010a701192 chromedriver + 713106\n19  chromedriver                        0x000000010a6fbe4e chromedriver + 691790\n20  chromedriver                        0x000000010a70113b chromedriver + 713019\n21  chromedriver                        0x000000010a70100d chromedriver + 712717\n22  chromedriver                        0x000000010a710823 chromedriver + 776227\n23  chromedriver                        0x000000010a698d9e chromedriver + 286110\n24  chromedriver                        0x000000010a694da3 chromedriver + 269731\n25  chromedriver                        0x000000010a66e8dd chromedriver + 112861\n26  chromedriver                        0x000000010a66f875 chromedriver + 116853\n27  chromedriver                        0x000000010aaab47f chromedriver + 4555903\n28  chromedriver                        0x000000010aab877a chromedriver + 4609914\n29  chromedriver                        0x000000010aab8509 chromedriver + 4609289\n30  chromedriver                        0x000000010aa8f319 chromedriver + 4440857\n31  chromedriver                        0x000000010aab8d03 chromedriver + 4611331\n32  chromedriver                        0x000000010aaa1083 chromedriver + 4513923\n33  chromedriver                        0x000000010aacf454 chromedriver + 4703316\n34  chromedriver                        0x000000010aaeef57 chromedriver + 4833111\n35  libsystem_pthread.dylib             0x00007fff6b9b3109 _pthread_start + 148\n36  libsystem_pthread.dylib             0x00007fff6b9aeb8b thread_start + 15\n\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.W3CHandshakeResponse.lambda$errorHandler$0(W3CHandshakeResponse.java:62)\n\tat org.openqa.selenium.remote.HandshakeResponse.lambda$getResponseFunction$0(HandshakeResponse.java:30)\n\tat org.openqa.selenium.remote.ProtocolHandshake.lambda$createSession$0(ProtocolHandshake.java:126)\n\tat java.base/java.util.stream.ReferencePipeline$3$1.accept(ReferencePipeline.java:195)\n\tat java.base/java.util.Spliterators$ArraySpliterator.tryAdvance(Spliterators.java:958)\n\tat java.base/java.util.stream.ReferencePipeline.forEachWithCancel(ReferencePipeline.java:127)\n\tat java.base/java.util.stream.AbstractPipeline.copyIntoWithCancel(AbstractPipeline.java:502)\n\tat java.base/java.util.stream.AbstractPipeline.copyInto(AbstractPipeline.java:488)\n\tat java.base/java.util.stream.AbstractPipeline.wrapAndCopyInto(AbstractPipeline.java:474)\n\tat java.base/java.util.stream.FindOps$FindOp.evaluateSequential(FindOps.java:150)\n\tat java.base/java.util.stream.AbstractPipeline.evaluate(AbstractPipeline.java:234)\n\tat java.base/java.util.stream.ReferencePipeline.findFirst(ReferencePipeline.java:543)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:128)\n\tat org.openqa.selenium.remote.ProtocolHandshake.createSession(ProtocolHandshake.java:74)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:136)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.startSession(RemoteWebDriver.java:213)\n\tat org.openqa.selenium.remote.RemoteWebDriver.\u003cinit\u003e(RemoteWebDriver.java:131)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:181)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:168)\n\tat org.openqa.selenium.chrome.ChromeDriver.\u003cinit\u003e(ChromeDriver.java:123)\n\tat common.WebAPI.getLocalDriver(WebAPI.java:69)\n\tat common.WebAPI.setUp(WebAPI.java:53)\n\tat step_definitions.HBOSearchPeteypedia_Step_Definition.openBrowser(HBOSearchPeteypedia_Step_Definition.java:17)\n",
  "status": "failed"
});
formatter.step({
  "name": "I am at HBO main homePage",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.HBOSearchPeteypedia_Step_Definition.i_am_at_HBO_main_homePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.scenario({
  "name": "Search options using Parameter",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@pending"
    }
  ]
});
formatter.step({
  "name": "I am at HBO homePage",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.HBOSearchPeteypedia_Step_Definition.i_am_at_HBO_homePage()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I click in Peteypedia button",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HBOSearchPeteypedia_Step_Definition.i_click_in_Peteypedia_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should see \"MEMO: The Origin Story of \"Sister Night\"\" in PETEYPEDIA page",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.HBOSearchPeteypedia_Step_Definition.i_should_see_MEMO_The_Origin_Story_of_Sister_Night_in_PETEYPEDIA_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "I should see my \"\"MEMO: The Origin Story of \"Sister Night\"\"\"",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.HBOSearchPeteypedia_Step_Definition.i_should_see_my_MEMO_The_Origin_Story_of(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
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
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@pending"
    }
  ]
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
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@pending"
    }
  ]
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