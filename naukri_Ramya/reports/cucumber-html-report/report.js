$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/main/resources/feature/naukri_feature.feature");
formatter.feature({
  "line": 2,
  "name": "naukri website",
  "description": "",
  "id": "naukri-website",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@naukri_Feature"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "To check that the user is able to register an account",
  "description": "",
  "id": "naukri-website;to-check-that-the-user-is-able-to-register-an-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 4,
      "name": "@tc01_Valid_Register"
    }
  ]
});
formatter.step({
  "line": 6,
  "name": "user launchs the chrome browser for valid register",
  "keyword": "Given "
});
formatter.step({
  "line": 7,
  "name": "user opens naukri homepage for valid register",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "user enters valid details for valid register option",
  "keyword": "Then "
});
formatter.match({
  "location": "ValidRegisterStepDefinition.user_launchs_the_chrome_browser_for_valid_register()"
});
formatter.result({
  "duration": 3819636800,
  "status": "passed"
});
formatter.match({
  "location": "ValidRegisterStepDefinition.user_opens_naukri_homepage_for_valid_register()"
});
formatter.result({
  "duration": 9767822800,
  "status": "passed"
});
formatter.match({
  "location": "ValidRegisterStepDefinition.user_enters_valid_details_for_valid_register_option()"
});
formatter.result({
  "duration": 12625270200,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "To check that the user is not able to register an existing account",
  "description": "",
  "id": "naukri-website;to-check-that-the-user-is-not-able-to-register-an-existing-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 10,
      "name": "@tc02_Invalid_Register"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user launchs the chrome browser for invalid register",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user opens naukri homepage for invalid register",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user enters invalid details for invalid register option",
  "keyword": "Then "
});
formatter.match({
  "location": "InvalidRegisterStepDefinition.user_launchs_the_chrome_browser_for_invalid_register()"
});
formatter.result({
  "duration": 2020420200,
  "status": "passed"
});
formatter.match({
  "location": "InvalidRegisterStepDefinition.user_opens_naukri_homepage_for_invalid_register()"
});
formatter.result({
  "duration": 9756779700,
  "status": "passed"
});
formatter.match({
  "location": "InvalidRegisterStepDefinition.user_enters_invalid_details_for_invalid_register_option()"
});
formatter.result({
  "duration": 12097504600,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "To check that the user can login naukri account",
  "description": "",
  "id": "naukri-website;to-check-that-the-user-can-login-naukri-account",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@tc03_login"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user launchs the chrome browser for login",
  "keyword": "Given "
});
formatter.step({
  "line": 19,
  "name": "user opens naukri homepage for login",
  "keyword": "When "
});
formatter.step({
  "line": 20,
  "name": "user login into the account for login scenario",
  "keyword": "Then "
});
formatter.match({
  "location": "ValidLoginStepDefinition.user_launchs_the_chrome_browser_for_login()"
});
formatter.result({
  "duration": 1816934000,
  "status": "passed"
});
formatter.match({
  "location": "ValidLoginStepDefinition.user_opens_naukri_homepage_for_login()"
});
formatter.result({
  "duration": 7062163800,
  "status": "passed"
});
formatter.match({
  "location": "ValidLoginStepDefinition.user_login_into_the_account_for_login_scenario()"
});
formatter.result({
  "duration": 30167609000,
  "status": "passed"
});
formatter.scenarioOutline({
  "line": 25,
  "name": "To check that the user is not able to login an account with invalid details",
  "description": "",
  "id": "naukri-website;to-check-that-the-user-is-not-able-to-login-an-account-with-invalid-details",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 24,
      "name": "@tc04_InvalidLogin"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "user launchs the chrome browser for inalid login",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "user opens naukri homepage for invalid login",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user enters invalid \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "Then "
});
formatter.examples({
  "line": 30,
  "name": "",
  "description": "",
  "id": "naukri-website;to-check-that-the-user-is-not-able-to-login-an-account-with-invalid-details;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 31,
      "id": "naukri-website;to-check-that-the-user-is-not-able-to-login-an-account-with-invalid-details;;1"
    },
    {
      "cells": [
        "swasthikswast",
        "!234"
      ],
      "line": 32,
      "id": "naukri-website;to-check-that-the-user-is-not-able-to-login-an-account-with-invalid-details;;2"
    },
    {
      "cells": [
        "sanjeev",
        "!24"
      ],
      "line": 33,
      "id": "naukri-website;to-check-that-the-user-is-not-able-to-login-an-account-with-invalid-details;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 32,
  "name": "To check that the user is not able to login an account with invalid details",
  "description": "",
  "id": "naukri-website;to-check-that-the-user-is-not-able-to-login-an-account-with-invalid-details;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@naukri_Feature"
    },
    {
      "line": 24,
      "name": "@tc04_InvalidLogin"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "user launchs the chrome browser for inalid login",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "user opens naukri homepage for invalid login",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user enters invalid \"swasthikswast\" and \"!234\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "InvalidLoginStepDefinition.user_launchs_the_chrome_browser_for_inalid_login()"
});
formatter.result({
  "duration": 2158057500,
  "status": "passed"
});
formatter.match({
  "location": "InvalidLoginStepDefinition.user_opens_naukri_homepage_for_invalid_login()"
});
formatter.result({
  "duration": 10657460900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "swasthikswast",
      "offset": 21
    },
    {
      "val": "!234",
      "offset": 41
    }
  ],
  "location": "InvalidLoginStepDefinition.user_enters_invalid_and(String,String)"
});
formatter.result({
  "duration": 9781694600,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "To check that the user is not able to login an account with invalid details",
  "description": "",
  "id": "naukri-website;to-check-that-the-user-is-not-able-to-login-an-account-with-invalid-details;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@naukri_Feature"
    },
    {
      "line": 24,
      "name": "@tc04_InvalidLogin"
    }
  ]
});
formatter.step({
  "line": 26,
  "name": "user launchs the chrome browser for inalid login",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "user opens naukri homepage for invalid login",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user enters invalid \"sanjeev\" and \"!24\"",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "InvalidLoginStepDefinition.user_launchs_the_chrome_browser_for_inalid_login()"
});
formatter.result({
  "duration": 1823612000,
  "status": "passed"
});
formatter.match({
  "location": "InvalidLoginStepDefinition.user_opens_naukri_homepage_for_invalid_login()"
});
formatter.result({
  "duration": 11053436400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sanjeev",
      "offset": 21
    },
    {
      "val": "!24",
      "offset": 35
    }
  ],
  "location": "InvalidLoginStepDefinition.user_enters_invalid_and(String,String)"
});
formatter.result({
  "duration": 8987799600,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "To check that the user can search for recruiters",
  "description": "",
  "id": "naukri-website;to-check-that-the-user-can-search-for-recruiters",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 37,
      "name": "@tc05_Recruiters"
    }
  ]
});
formatter.step({
  "line": 39,
  "name": "user launchs the chrome browser for recruiters",
  "keyword": "Given "
});
formatter.step({
  "line": 40,
  "name": "user opens naukri homepage for recruiters",
  "keyword": "When "
});
formatter.step({
  "line": 41,
  "name": "user click recruiters and browse for recruiters",
  "keyword": "And "
});
formatter.match({
  "location": "RecruitersStepDefinition.user_launchs_the_chrome_browser_for_recruiters()"
});
formatter.result({
  "duration": 2182176000,
  "status": "passed"
});
formatter.match({
  "location": "RecruitersStepDefinition.user_opens_naukri_homepage_for_recruiters()"
});
formatter.result({
  "duration": 6915026100,
  "status": "passed"
});
formatter.match({
  "location": "RecruitersStepDefinition.user_click_recruiters_and_browse_for_recruiters()"
});
formatter.result({
  "duration": 25655674100,
  "status": "passed"
});
});