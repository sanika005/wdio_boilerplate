Feature: Login
  @Test
  Scenario: Verify that user is able to login with valid credentials
    Given user is on login page
    When user enters username
    When user enters password
    When user clicks on login button
    Then user should be logged in successfully and directed to the dashboard

  Scenario Outline: Verify that user is not able to login with empty username
    Given user is on login page
    When user leaves the username field empty
    When user enters password
    When user clicks on login button
    Then user should not be able to login and should receive and error message indicating that "Username is required"

  Scenario Outline: Verify that user is not able to login with empty password
    Given user is on login page
    When user enters username
    When user leaves the password field empty
    When user clicks on login button
    Then user should not be able to login and should receive and error message indicating that "Password is required"

  Scenario Outline: Verify that user is not able to login with invalid username
    Given user is on login page
    When user enters invalid username
    When user enters valid password
    When user clicks on login button
    Then user should not be able to login and should receive and error message indicating that "Username and password do not match any user in this service"

  Scenario Outline: Verify that user is not able to login with invalid password
    Given user is on login page
    When user enters valid username
    When user enters invalid password
    When user clicks on login button
    Then user should not be able to login and should receive and error message indicating that "Username and password do not match any user in this service"

  Scenario Outline: Verify that user is able to login with invalid credentials
    Given user is on login page
    When user enters invalid username
    When user enters invalid password
    When user clicks on login button
    Then User should not be able to login and should receive and error message indicating that "Username and password do not match any user in this service"
