package com.naukri.stepdefinition;

import com.naukri.pages.InvalidLoginPage;
import com.naukri.pages.LoginPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class InvalidLoginStepDefinition {
	InvalidLoginPage    invalidLogin      = new InvalidLoginPage();
	LoginPage           login             = new LoginPage();
	
	@Given("^user launchs the chrome browser for inalid login$")
	public void user_launchs_the_chrome_browser_for_inalid_login() throws Throwable {
		login.launchChrome("chrome");
	}

	@When("^user opens naukri homepage for invalid login$")
	public void user_opens_naukri_homepage_for_invalid_login() throws Throwable {
		login.url();
	}

	
    @Then("^user enters invalid \"([^\"]*)\" and \"([^\"]*)\"$")
	public void user_enters_invalid_and(String username, String password) throws Throwable {
		invalidLogin.invalidLogin(username,password);
	}
}
