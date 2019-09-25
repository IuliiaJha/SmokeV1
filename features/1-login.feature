
  Feature: Login to prodaction
    
    As a user 
    In order to perform successful Login
    I want to enter username and password
    And be navigated into my account Home page 


    @smoke
    Scenario: Verify if a user can log in with a valid email address and password.
        Given As an existing user I go to login Page
        When I found the title as "Login"
        When I found the Login form and "Sign In" button
        When I enter valid userName and password and click the Sign In button
        Then I should be taken on the users home page

  
    

# Feature: Login
# In order to perform successful Login
# As a user
# I want to enter correct username and password

#     Scenario: In order to verify login to facebook 

#         Given I go to "https://www.protractortest.org";
#         When I found the title as "Protractor - end-to-end testing for AngularJS 1";