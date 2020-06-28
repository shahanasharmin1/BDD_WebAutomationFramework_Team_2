$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/main/java/features/BasicHomePage.feature");
formatter.feature({
  "name": "As a customer I want to explore cigna homepage",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "I hover on  Header Object using Parameter",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test14"
    }
  ]
});
formatter.step({
  "name": "I need to hover on \u003cheaderItems\u003e in header part",
  "keyword": "When "
});
formatter.step({
  "name": "I should see \u003cexpected\u003e results",
  "keyword": "And "
});
formatter.step({
  "name": "I am able to validate",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "headerItems",
        "expected"
      ]
    },
    {
      "cells": [
        "Individuals and Families",
        "\"Individuals and Families\""
      ]
    },
    {
      "cells": [
        "Employers and Brokers",
        "\"Employers and Brokers \""
      ]
    },
    {
      "cells": [
        "Health Care Providers",
        "\"Health Care Providers \""
      ]
    },
    {
      "cells": [
        "About Us",
        "\"About Us\""
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
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am at cigna.com homePage",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchOnCigna_StepDefinition.i_am_at_cigna_com_homePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "I hover on  Header Object using Parameter",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test14"
    }
  ]
});
formatter.step({
  "name": "I need to hover on Individuals and Families in header part",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.Basic_StepDefinition.i_need_to_hover_on_Individuals_and_Families_in_header_part()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"Individuals and Families\" results",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Basic_StepDefinition.i_should_see_results(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to validate",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.Basic_StepDefinition.i_am_able_to_validate()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: Search Result not Displayed expected:\u003c[Cigna International]\u003e but was:\u003c[]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:117)\n\tat home.BasicPage.UservalidationCignaInternationmalTextelement(BasicPage.java:66)\n\tat step_definitions.Basic_StepDefinition.i_am_able_to_validate(Basic_StepDefinition.java:73)\n\tat ✽.I am able to validate(file:///Users/tanjinarahman/IdeaProjects/BDD_WebAutomationFramework_Team_2/Cigna/src/main/java/features/BasicHomePage.feature:29)\n",
  "status": "failed"
});
formatter.after({
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
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am at cigna.com homePage",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchOnCigna_StepDefinition.i_am_at_cigna_com_homePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "I hover on  Header Object using Parameter",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test14"
    }
  ]
});
formatter.step({
  "name": "I need to hover on Employers and Brokers in header part",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.Basic_StepDefinition.i_need_to_hover_on_Employers_and_Brokers_in_header_part()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"Employers and Brokers \" results",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Basic_StepDefinition.i_should_see_results(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to validate",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.Basic_StepDefinition.i_am_able_to_validate()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
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
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am at cigna.com homePage",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchOnCigna_StepDefinition.i_am_at_cigna_com_homePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "I hover on  Header Object using Parameter",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test14"
    }
  ]
});
formatter.step({
  "name": "I need to hover on Health Care Providers in header part",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.Basic_StepDefinition.i_need_to_hover_on_Health_Care_Providers_in_header_part()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"Health Care Providers \" results",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Basic_StepDefinition.i_should_see_results(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to validate",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.Basic_StepDefinition.i_am_able_to_validate()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: Search Result not Displayed expected:\u003c[Cigna International]\u003e but was:\u003c[]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:117)\n\tat home.BasicPage.UservalidationCignaInternationmalTextelement(BasicPage.java:66)\n\tat step_definitions.Basic_StepDefinition.i_am_able_to_validate(Basic_StepDefinition.java:73)\n\tat ✽.I am able to validate(file:///Users/tanjinarahman/IdeaProjects/BDD_WebAutomationFramework_Team_2/Cigna/src/main/java/features/BasicHomePage.feature:29)\n",
  "status": "failed"
});
formatter.after({
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
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I am at cigna.com homePage",
  "keyword": "Given "
});
formatter.match({
  "location": "step_definitions.SearchOnCigna_StepDefinition.i_am_at_cigna_com_homePage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "I hover on  Header Object using Parameter",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Test14"
    }
  ]
});
formatter.step({
  "name": "I need to hover on About Us in header part",
  "keyword": "When "
});
formatter.match({
  "location": "step_definitions.Basic_StepDefinition.i_need_to_hover_on_About_Us_in_header_part()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should see \"About Us\" results",
  "keyword": "And "
});
formatter.match({
  "location": "step_definitions.Basic_StepDefinition.i_should_see_results(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I am able to validate",
  "keyword": "Then "
});
formatter.match({
  "location": "step_definitions.Basic_StepDefinition.i_am_able_to_validate()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});