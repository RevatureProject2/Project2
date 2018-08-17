package com.revature.assignforce.pages;

import java.io.IOException;

import org.openqa.selenium.WebDriver;

import com.revature.util.WebDriverHelper;

public class TempTest {
	public static void main(String[] args) throws InterruptedException {
		WebDriver driver = WebDriverHelper.launchApplication("https://assignforce-client.cfapps.io", false);
		try {			
			LoginPage l = new LoginPage(driver);
			l.getUsernameField().sendKeys("haha");
			Thread.sleep(5000);
		} catch (IOException e) {
			System.out.println(e);
		}
	}
}
