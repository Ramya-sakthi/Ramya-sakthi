package com.naukri.stepdefinition;

import com.naukri.pages.LoginPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ValidLoginStepDefinition {
	LoginPage           login             = new LoginPage();
	@Given("^user launchs the chrome browser for login$")
	public void user_launchs_the_chrome_browser_for_login() throws Throwable {
		login.launchChrome("chrome");
	}

	@When("^user opens naukri homepage for login$")
	public void user_opens_naukri_homepage_for_login() throws Throwable {
		login.url();
	}

	@Then("^user login into the account for login scenario$")
	public void user_login_into_the_account_for_login_scenario() throws Throwable {
		login.login();
		Thread.sleep(3000);
		login.closeApp();
	}

}
