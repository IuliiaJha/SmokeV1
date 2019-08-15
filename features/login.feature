
  Feature: Login to prodaction
    
    As a user 
    In order to perform successful Login
    I want to enter username and password
    And be navigated into my account Home page 


    
    Scenario: Verify if a user can log in with a valid email address and password.
        Given As an existing user I go to login Page
        When I found the title as "Login"
        When I found the Login form and "Sign In" button
        When I enter valid userName and password and click the Sign In button
        Then I should be taken on the users home page

  
    # Scenario: Verify Login functionality with valid credintials
    
    #     When I enter valid userName and password
    #     Then Application should navigate to user Home page, User's email should be displayed on the left side of screen


    #  Scenario: Verify Login functionality with invalid credintials
    #     When I enter invalid user name  and invalid password  And  I click LogIn button 
      
    #       Then I showld see error Message "Invalid Password/Username"


    #  Scenario: Verify Login button 
      

    #     Then Login button is disabled by default
    #     When I entered valid user name  
    #     When I left  password field  blank
    #     And  I click LogIn button 
    #     Then Login button should remain disabled 
    #     When I clean up  username field
    #     And I enetered valid password 
    #     And  I click LogIn button 
    #     Then Login button should remain disabled 
        


# Feature: Login
# In order to perform successful Login
# As a user
# I want to enter correct username and password

#     Scenario: In order to verify login to facebook 

#         Given I go to "https://www.protractortest.org";
#         When I found the title as "Protractor - end-to-end testing for AngularJS 1";