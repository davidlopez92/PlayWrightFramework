Feature: Account regsitration, edit and sign in

    Scenario: Create new account
    Given I visit 'https://magento.softwaretestingboard.com/'
    When I create a new account
    Then I validate account is created