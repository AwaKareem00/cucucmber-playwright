Feature: Wiki search functionality

#   Scenario: Validate wiki search
#     Given user navigates to "https://www.wikipedia.org/"
#     When user should search for "Elon Musk" on wikipedia
#     Then user should see "Elon Musk" in the title
#     And user should see "Elon Musk" in the URL
#     And user should see "Elon Musk" in the first heading

#   Scenario: Validate wiki search
#     Given user navigates to "https://www.wikipedia.org/"
#     When user should search for "Jeff Bezos" on wikipedia
#     Then user should see "Jeff Bezos" in the title
#     And user should see "Jeff Bezos" in the URL
#     And user should see "Jeff Bezos" in the first heading
    
#   Scenario: Validate wiki search
#     Given user navigates to "https://www.wikipedia.org/"
#     When user should search for "Barak Obama" on wikipedia
#     Then user should see "Barak Obama" in the title
#     And user should see "Barak Obama" in the URL
#     And user should see "Barak Obama" in the first heading


    Scenario Outline: Validate wiki search
        Given user navigates to "https://www.wikipedia.org/"
        When user should search for "<person>" on wikipedia
        Then user should see "<person>" in the title
        And user should see "<person>" in the URL
        And user should see "<person>" in the first heading
        Examples:
            | person      |
            | Elon Musk   |
            | Jeff Bezos  |
            | Barack Obama |

