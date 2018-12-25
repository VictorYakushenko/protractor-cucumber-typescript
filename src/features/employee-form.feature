Feature: Employee Review

    Scenario: Supervisor fill review form right
        Given I am on review form page
        When I fill Employee Review form right
        And I click submit button
        Then I see message: "The form was submitted successfully."