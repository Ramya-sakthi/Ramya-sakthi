package com.naukri.pages;

import java.io.IOException;

import org.openqa.selenium.By;

//Sends invalid username and clicks login buttton
public class InvalidLoginPage extends LoginPage {

	public void invalidLogin(String username,String password) throws InterruptedException, IOException {
		driver.findElement(By.xpath("//*[@id=\"login_Layer\"]/div")).click();
		//Enter invalid details
		driver.findElement(By.id("eLoginNew")).sendKeys(username);
		driver.findElement(By.id("pLogin")).sendKeys(password);
		driver.findElement(By.xpath("//*[@id=\"lgnFrmNew\"]/div[9]/button")).click();
		Thread.sleep(3000);
		screenshot("src\\test\\resources\\Screenshot\\InvalidLogin.png");  //calls screenshot method from login page

		driver.close();

	}
}
