$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/features/BoaHome.feature");
formatter.feature({
  "name": "Log into bank of america account",
  "description": "",
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
formatter.scenario({
  "name": "Log In with Invalid credential",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test1"
    }
  ]
});
formatter.step({
  "name": "user is already in BOA home page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.user_is_already_in_BOA_home_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters shamima",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.user_enters_shamima()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user enters pl944985",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.user_enters_pl944985()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks sign in button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.user_clicks_sign_in_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user sees Forgot ID/Password",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.user_sees_Forgot_ID_Password()"
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
formatter.scenario({
  "name": "Search credit cards using Parameter",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test2"
    }
  ]
});
formatter.step({
  "name": "I Enter Items in search input field",
  "rows": [
    {},
    {},
    {},
    {},
    {},
    {}
  ],
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_Enter_Items_in_search_input_field(io.cucumber.datatable.DataTable)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I Click search button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_Click_search_button()"
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
    {},
    {},
    {}
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_should_see_Expected_Items(io.cucumber.datatable.DataTable)"
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
formatter.scenario({
  "name": "Scroll Down the BOA Homepage",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test3"
    }
  ]
});
formatter.step({
  "name": "I scroll down the webpage byPixel",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_scroll_down_the_webpage_byPixel()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Then I will see the the page are scrolled down",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.then_I_will_see_the_the_page_are_scrolled_down()"
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
formatter.scenario({
  "name": "scroll till the end of the BOA homepage",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test4"
    }
  ]
});
formatter.step({
  "name": "i scroll till the end",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_scroll_till_the_end()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will see the the page are scrolled tillend",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_will_see_the_the_page_are_scrolled_tillend()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "I search Footer using Parameter",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test5"
    }
  ]
});
formatter.step({
  "name": "I am at BOA  homepage",
  "keyword": "When "
});
formatter.step({
  "name": "I need to click\u003citems\u003ein Footer part",
  "keyword": "And "
});
formatter.step({
  "name": "I should see\u003cexpected\u003eresults",
  "keyword": "And "
});
formatter.step({
  "name": "I am able to validate the item",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "items",
        "expected"
      ]
    },
    {
      "cells": [
        "locations",
        "locations"
      ]
    },
    {
      "cells": [
        "contact us",
        "contact us"
      ]
    },
    {
      "cells": [
        "help",
        "help"
      ]
    },
    {
      "cells": [
        "accessible banking",
        "accessible banking"
      ]
    },
    {
      "cells": [
        "careers",
        "careers"
      ]
    },
    {
      "cells": [
        "privacy and security",
        "privacy and security"
      ]
    },
    {
      "cells": [
        "mcafee",
        "mcafee"
      ]
    },
    {
      "cells": [
        "sitemap",
        "sitemap"
      ]
    },
    {
      "cells": [
        "advertising practice",
        "advertising practice"
      ]
    },
    {
      "cells": [
        "feedback",
        "feedback"
      ]
    },
    {
      "cells": [
        "view full online banking site",
        "view full online banking site"
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
formatter.scenario({
  "name": "I search Footer using Parameter",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test5"
    }
  ]
});
formatter.step({
  "name": "I am at BOA  homepage",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_am_at_BOA_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I need to clicklocationsin Footer part",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_need_to_clicklocationsin_Footer_part()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should seelocationsresults",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_should_seelocationsresults()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to validate the item",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_am_able_to_validate_the_item()"
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
formatter.scenario({
  "name": "I search Footer using Parameter",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test5"
    }
  ]
});
formatter.step({
  "name": "I am at BOA  homepage",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_am_at_BOA_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I need to clickcontact usin Footer part",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_need_to_clickcontact_usin_Footer_part()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should seecontact usresults",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_should_seecontact_usresults()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to validate the item",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_am_able_to_validate_the_item()"
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
formatter.scenario({
  "name": "I search Footer using Parameter",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test5"
    }
  ]
});
formatter.step({
  "name": "I am at BOA  homepage",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_am_at_BOA_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I need to clickhelpin Footer part",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_need_to_clickhelpin_Footer_part()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should seehelpresults",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_should_seehelpresults()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to validate the item",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_am_able_to_validate_the_item()"
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
formatter.scenario({
  "name": "I search Footer using Parameter",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test5"
    }
  ]
});
formatter.step({
  "name": "I am at BOA  homepage",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_am_at_BOA_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I need to clickaccessible bankingin Footer part",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_need_to_clickaccessible_bankingin_Footer_part()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should seeaccessible bankingresults",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_should_seeaccessible_bankingresults()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to validate the item",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_am_able_to_validate_the_item()"
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
formatter.scenario({
  "name": "I search Footer using Parameter",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test5"
    }
  ]
});
formatter.step({
  "name": "I am at BOA  homepage",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_am_at_BOA_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I need to clickcareersin Footer part",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_need_to_clickcareersin_Footer_part()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should seecareersresults",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_should_seecareersresults()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to validate the item",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_am_able_to_validate_the_item()"
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
formatter.scenario({
  "name": "I search Footer using Parameter",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test5"
    }
  ]
});
formatter.step({
  "name": "I am at BOA  homepage",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_am_at_BOA_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I need to clickprivacy and securityin Footer part",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_need_to_clickprivacy_and_securityin_Footer_part()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should seeprivacy and securityresults",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_should_seeprivacy_and_securityresults()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to validate the item",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_am_able_to_validate_the_item()"
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
formatter.scenario({
  "name": "I search Footer using Parameter",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test5"
    }
  ]
});
formatter.step({
  "name": "I am at BOA  homepage",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_am_at_BOA_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I need to clickmcafeein Footer part",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_need_to_clickmcafeein_Footer_part()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should seemcafeeresults",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_should_seemcafeeresults()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to validate the item",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_am_able_to_validate_the_item()"
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
formatter.scenario({
  "name": "I search Footer using Parameter",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test5"
    }
  ]
});
formatter.step({
  "name": "I am at BOA  homepage",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_am_at_BOA_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I need to clicksitemapin Footer part",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_need_to_clicksitemapin_Footer_part()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should seesitemapresults",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_should_seesitemapresults()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to validate the item",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_am_able_to_validate_the_item()"
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
formatter.scenario({
  "name": "I search Footer using Parameter",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test5"
    }
  ]
});
formatter.step({
  "name": "I am at BOA  homepage",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_am_at_BOA_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I need to clickadvertising practicein Footer part",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_need_to_clickadvertising_practicein_Footer_part()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should seeadvertising practiceresults",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_should_seeadvertising_practiceresults()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to validate the item",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_am_able_to_validate_the_item()"
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
formatter.scenario({
  "name": "I search Footer using Parameter",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test5"
    }
  ]
});
formatter.step({
  "name": "I am at BOA  homepage",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_am_at_BOA_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I need to clickfeedbackin Footer part",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_need_to_clickfeedbackin_Footer_part()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should seefeedbackresults",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_should_seefeedbackresults()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to validate the item",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_am_able_to_validate_the_item()"
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
formatter.scenario({
  "name": "I search Footer using Parameter",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test5"
    }
  ]
});
formatter.step({
  "name": "I am at BOA  homepage",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_am_at_BOA_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I need to clickview full online banking sitein Footer part",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_need_to_clickview_full_online_banking_sitein_Footer_part()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should seeview full online banking siteresults",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_should_seeview_full_online_banking_siteresults()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to validate the item",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_am_able_to_validate_the_item()"
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
formatter.scenario({
  "name": "HoverOn Home Loans",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test6"
    }
  ]
});
formatter.step({
  "name": "I hover on Home Loans",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_hover_on_Home_Loans()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on a Home Loans",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_click_on_a_Home_Loans()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I will validate the Home Loan page",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_will_validate_the_Home_Loan_page()"
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
formatter.scenario({
  "name": "click on Auto Loans",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test7"
    }
  ]
});
formatter.step({
  "name": "I click on Auto loans",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_click_on_Auto_loans()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I can get infomation on how In can apply for the loan",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_can_get_infomation_on_how_In_can_apply_for_the_loan()"
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
formatter.scenario({
  "name": "Search mobile banking in search box",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test8"
    }
  ]
});
formatter.step({
  "name": "I am at BOA Home Page",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_am_at_BOA_Home_Page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I enter mobile banking on the search box in homepage",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_enter_mobile_banking_on_the_search_box_in_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click search button",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_click_search_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see mobile banking",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_should_see_mobile_banking()"
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
formatter.scenario({
  "name": "click on BOA logo",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test9"
    }
  ]
});
formatter.step({
  "name": "I click on logo",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_click_on_logo()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I can validate the page",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_can_validate_the_page()"
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
formatter.scenario({
  "name": "click on Image",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@Test10"
    }
  ]
});
formatter.step({
  "name": "I click on image",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_click_on_image()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to see the image",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.SearchOnBoa_StepDefinition.i_am_able_to_see_the_image()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});