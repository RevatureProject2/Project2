package com.revature.assignforce.pages;

import java.io.FileInputStream;
import java.io.FileNotFoundException;
import java.io.IOException;
import java.io.InputStream;
import java.util.Properties;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import com.revature.util.WebDriverHelper;

public class LoginPage {
	
	private WebDriver driver;
	
	private String usernameLocator;
	private String passwordLocator;
	private String loginButtonLocator;
	private String logoutButtonLocator;
	private String errorLoggingInMessageLocator;
	
	public String managerUsername;
	public String managerPassword;
	
	// This will precede all locators in property file for this page
	private static final String pageIdentifier = "loginpage";
	
	public LoginPage(WebDriver d) throws IOException {
		this.driver = d;
		
		Properties props = new Properties();
		
		InputStream inputPropertyFile = new FileInputStream("src/test/resources/locator.properties");
		props.load(inputPropertyFile);
		
		this.usernameLocator = props.getProperty(pageIdentifier + "-username");
		this.passwordLocator = props.getProperty(pageIdentifier + "-password");
		this.loginButtonLocator = props.getProperty(pageIdentifier + "-loginbutton");
		
		this.managerUsername = props.getProperty(pageIdentifier + "-managerusername");
		this.managerPassword = props.getProperty(pageIdentifier + "-managerpassword");
		
		this.logoutButtonLocator = props.getProperty(pageIdentifier + "-logoutbutton");
		this.errorLoggingInMessageLocator = props.getProperty(pageIdentifier + "-errorlogginginmessage");
	}
	
	public WebElement getUsernameField() {
		return WebDriverHelper.waitUntilVisible(driver, usernameLocator);
	}
	
	public WebElement getPasswordField() {
		return WebDriverHelper.waitUntilVisible(driver, passwordLocator);
	}
	
	public WebElement getLoginButton() {
		return WebDriverHelper.waitUntilVisible(driver, loginButtonLocator);
	}
	
	public WebElement getLogoutButton() {
		return WebDriverHelper.waitUntilVisible(driver, logoutButtonLocator);
	}
	
	public WebElement getLoginErrorMessage() {
		return WebDriverHelper.waitUntilVisible(driver, errorLoggingInMessageLocator);
	}
	
	public void attemptManagerLogin() {
		getUsernameField().sendKeys(managerUsername);
		getPasswordField().sendKeys(managerPassword);
		getLoginButton().click();
	}
}
