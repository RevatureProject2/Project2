package com.revature.testng;

import java.io.IOException;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.testng.Assert;
import org.testng.annotations.AfterSuite;
import org.testng.annotations.BeforeMethod;
import org.testng.annotations.BeforeSuite;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import com.revature.assignforce.pages.LoginPage;
import com.revature.util.WebDriverHelper;

public class ManagerLoginTests {
	private static WebDriver driver;
	private static LoginPage l;
	
	@BeforeSuite
	public static void setupDriver() {
		driver = WebDriverHelper.launchApplication("https://assignforce-client.cfapps.io", true);
		
		try {			
			l = new LoginPage(driver);
		} catch (IOException e) {			
			Assert.fail("Unable to build Login Page POM");
		}
	}
	
	@Test(groups="manager", priority=0)
	public static void managerIsAbleToLogin() {
		l.attemptManagerLogin();
		
		Boolean pass = false;
		try {				
			pass = WebDriverHelper.waitForUrlToContain(driver, "overview");
		} catch (Exception e) {
			Assert.fail("Manager homepage failed to load after login / or took too long to load");
		}
		
		Assert.assertTrue(pass, "Failed to navigate to overview page after manager login");
	}
	
	@Test(groups="manager", dependsOnMethods="managerIsAbleToLogin", priority=1)
	public static void managerIsAbleToLogout() {	
		Boolean pass = false;
		
		l.getLogoutButton().click();
		try {
			pass = WebDriverHelper.waitForUrlToContain(driver, "/login");
		} catch (Exception e) {
			pass = false;
		}
		
		Assert.assertTrue(pass, "Failed to navigate to login page after clicking logout / or took to long");
	}
	
	@Test(groups="manager", dependsOnMethods="managerIsAbleToLogout")
	public static void rejectsIncorrectLogin() {
		l.getUsernameField().sendKeys("Incorrect@whoops.io");
		l.getPasswordField().sendKeys("foobar");
		l.getLoginButton().click();
		
		Boolean rejectedAttempt = (l.getLoginErrorMessage().getText().equals("WRONG EMAIL OR PASSWORD.") || l.getLoginErrorMessage().getText().equals("YOUR ACCOUNT HAS BEEN BLOCKED AFTER MULTIPLE CONSECUTIVE LOGIN ATTEMPTS."));
		Assert.assertTrue(rejectedAttempt, "Failed to reject login attempt with incorrect email and password");
	}
	
	@Test(groups="manager", dependsOnMethods="rejectsIncorrectLogin")
	public static void rejectsCorrectEmailInvalidPassword() {
		driver.navigate().refresh();
		
		WebElement username = l.getUsernameField();
		WebElement password = l.getPasswordField();
		
		username.sendKeys(l.managerUsername);
		password.sendKeys("asdf");
		
		l.getLoginButton().click();
		String errorMessage = l.getLoginErrorMessage().getText();
		
		Boolean rejectedAttempt = (l.getLoginErrorMessage().getText().equals("WRONG EMAIL OR PASSWORD.") || l.getLoginErrorMessage().getText().equals("YOUR ACCOUNT HAS BEEN BLOCKED AFTER MULTIPLE CONSECUTIVE LOGIN ATTEMPTS."));
		Assert.assertTrue(rejectedAttempt, "Failed to reject login attempt with incorrect email and password");
	}
	
	@AfterSuite
	public static void closeDriver() {
		driver.quit();
	}
}
