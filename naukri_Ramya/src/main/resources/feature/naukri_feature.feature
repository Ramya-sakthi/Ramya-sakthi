@naukri_Feature
Feature: naukri website

@tc01_Valid_Register
Scenario: To check that the user is able to register an account
	Given  user launchs the chrome browser for valid register
	When  user opens naukri homepage for valid register
	Then user enters valid details for valid register option

@tc02_Invalid_Register
Scenario: To check that the user is not able to register an existing account	
	Given  user launchs the chrome browser for invalid register
	When  user opens naukri homepage for invalid register
	Then user enters invalid details for invalid register option

@tc03_login
Scenario: To check that the user can login naukri account
	Given  user launchs the chrome browser for login
	When  user opens naukri homepage for login
	Then user login into the account for login scenario 
	


@tc04_InvalidLogin
Scenario Outline: To check that the user is not able to login an account with invalid details
	Given  user launchs the chrome browser for inalid login
	When  user opens naukri homepage for invalid login
	Then user enters invalid "<username>" and "<password>"

Examples:
|username                            |password            |
|swasthikswast                       |!234                |
|sanjeev                             |!24                 |


	
@tc05_Recruiters
Scenario: To check that the user can search for recruiters
	Given  user launchs the chrome browser for recruiters
	When  user opens naukri homepage for recruiters
	And  user click recruiters and browse for recruiters


	