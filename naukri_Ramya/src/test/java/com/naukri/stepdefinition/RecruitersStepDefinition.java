package com.naukri.stepdefinition;


import com.naukri.pages.LoginPage;
import com.naukri.pages.RecruitersPage;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.When;

public class RecruitersStepDefinition {
	LoginPage           login             = new LoginPage();
	RecruitersPage      recruiters        = new RecruitersPage();
	@Given("^user launchs the chrome browser for recruiters$")
	public void user_launchs_the_chrome_browser_for_recruiters() throws Throwable {
		login.launchChrome("chrome");
	}

	@When("^user opens naukri homepage for recruiters$")
	public void user_opens_naukri_homepage_for_recruiters() throws Throwable {
		login.url();
	}

	@And("^user click recruiters and browse for recruiters$")
	public void user_click_recruiters_and_browse_for_recruiters() throws Throwable {
		recruiters.loginSearch();
		Thread.sleep(5000);
		recruiters.recruitersSearch();
	}

}
