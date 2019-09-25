
Feature: Collect Samples

    As a user
    In order to collect Samples
    I want to add results 
    And see those results added to the given Schedule 

@smoke
  Scenario: Verify the correct results are added to the given Schedule
    Given As user I am on  Schedule details page
    When I click the Collect samples button 
    Then I should see the submit module
    When I click the Submit button inside submit module I should be taken to the Schedule  page with "Add Test Results" button present
    When I click the Add Test Results button 
    Then I add Fail result and I should be taken to  Schedule details page and I should see the Fail result added to the given Schedule