Feature: Test Scenarios to check the functionalities

  Scenario: Getting the Title of Playwright
    Given I go to Playwright
     When I Check the Title
     Then I Checked For the footer


  Scenario: Successful Login
    Given I am on the Orange HRM login page
    When I enter my username as "<username>"
    And I enter my password as "<password>"
    And I click the login button
    Then I should be redirected to the dashboard page
    And I should see the title as "<title>"

    
    Examples:
        | username | password | title |
        | Admin  |  admin123  | OrangeHRM  |