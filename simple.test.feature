Feature: User login validation on saucedemo website

  Scenario: Verify error message for missing username
    Given User is located on the main page of saucedemo website
    When User clicks the "Login" button
    Then User should see the "Epic sadface: Username is required" error message
