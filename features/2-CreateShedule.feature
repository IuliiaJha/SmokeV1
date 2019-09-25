
Feature: Create  new schedule

    As a user
    In order to create a new schedule
    I want to fill out the table on the new schedule page
    And be navigated to schedule detail  page


@smoke
  Scenario: Verify the Schedule link navigates to schedule page
    Given As user I am on  Dashboard Page
    When I found the "Schedule" Link
    When I click the Schedule link
    Then I should be taken to the Schedule  page with "Add Schedule" button present
@smoke
  Scenario: Verify the User is able to create a new schedule
    Given As a user I am on the Schedule page
    When  I Click the ADD Schedule button
    Then  "NEW SCHEDULE DETAILS" module should appear
    And I should be able to select Test Method
    And I should be able to find Test Points
    And I should be able to select  Test Points randomly
    And I click "Save Schedule" button
    Then I should  see the schedule detail page opened
