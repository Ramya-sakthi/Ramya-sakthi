package com.naukri.stepdefinition;

import com.naukri.pages.InvalidRegisterPage;
import com.naukri.pages.LoginPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class InvalidRegisterStepDefinition {
	InvalidRegisterPage invalidRegister   = new InvalidRegisterPage();
	LoginPage           login             = new LoginPage();
	@Given("^user launchs the chrome browser for invalid register$")
	public void user_launchs_the_chrome_browser_for_invalid_register() throws Throwable {
		login.launchChrome("chrome");
	}

	@When("^user opens naukri homepage for invalid register$")
	public void user_opens_naukri_homepage_for_invalid_register() throws Throwable {
		login.url();
	}

	@Then("^user enters invalid details for invalid register option$")
	public void user_enters_invalid_details_for_invalid_register_option() throws Throwable {
		invalidRegister.invalidRegister();  
	}

}
