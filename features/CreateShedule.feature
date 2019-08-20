
  Feature: Create  new schedule
    
    As a user 
    In order to create a new schedule
    I want to fill out the table on the new schedule page
    And be navigated to schedule detail  page


    
    Scenario: Verify the Schedule link navigates to schedule page
        Given As user I am on a Dashboard Page
        When I found the "Schedule" Link 
        When I click the Schedule link
        Then I should be taken to the Schedule  page with "Add Schedule" button present 
