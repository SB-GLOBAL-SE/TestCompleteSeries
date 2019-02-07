Feature: TestComplete - Shopping Cart


  Scenario: Log into the Shopping Cart
    Given I have I have navigated to the Shopping Cart URL
    And I input test@test.com into the username field
    And I input test into the password field
    And I click the login button
    Then the user test@test.com should successfully be logged onto the Shopping Cart
    And we add a new step
