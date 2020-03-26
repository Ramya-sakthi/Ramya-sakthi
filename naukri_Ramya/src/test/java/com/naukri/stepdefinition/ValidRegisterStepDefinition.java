package com.naukri.stepdefinition;

import com.naukri.pages.LoginPage;
import com.naukri.pages.RegisterPage;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class ValidRegisterStepDefinition {
	RegisterPage        register          = new RegisterPage();
	LoginPage           login             = new LoginPage();
	@Given("^user launchs the chrome browser for valid register$")
	public void user_launchs_the_chrome_browser_for_valid_register() throws Throwable {
		login.launchChrome("chrome");
	}

	@When("^user opens naukri homepage for valid register$")
	public void user_opens_naukri_homepage_for_valid_register() throws Throwable {
		login.url();
	}

	@Then("^user enters valid details for valid register option$")
	public void user_enters_valid_details_for_valid_register_option() throws Throwable {
		register.register();
	}


}
