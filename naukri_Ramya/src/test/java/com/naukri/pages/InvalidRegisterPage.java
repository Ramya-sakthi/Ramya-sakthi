package com.naukri.pages;

import java.io.IOException;

import org.openqa.selenium.By;

//Sends invalid details and clicks register button
public class InvalidRegisterPage extends LoginPage {

	public void invalidRegister() throws InterruptedException, IOException {

		driver.findElement(By.xpath("//*[@id=\"p0widget\"]/div/div[1]/div/input")).click();                  
		driver.findElement(By.xpath("//*[@id=\"flowBifurcation\"]/div[2]/form/div[1]/div/button")).click(); 
		//Enter invalid details
		driver.findElement(By.id("fname")).sendKeys("maji");
		driver.findElement(By.id("email")).sendKeys("majitha@gmail");
		driver.findElement(By.name("password")).sendKeys("!234567E");
		driver.findElement(By.name("number")).sendKeys("8765434561");
		driver.findElement(By.xpath("//*[@id=\"basicDetailForm\"]/resman-location/div/div/div[1]/suggestor/div/div/input")).click();
		driver.findElement(By.xpath("//*[@id=\"basicDetailForm\"]/resman-location/div/div/div[1]/div/ul/li[4]")).click();
		driver.findElement(By.name("basicDetailSubmit")).click();

		Thread.sleep(3000);
		screenshot("src\\test\\resources\\Screenshot\\InvalidRegister.png");  //calls screenshot method from login page

		driver.close();

	}
}
