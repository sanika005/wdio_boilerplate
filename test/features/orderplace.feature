Feature: Order Place
  Scenario: Verify that users can successfully place an order for selected products
    Given user logs in with valid credentials
    When user adds product to the cart
    Then the selected product should be added to the cart
    When user navigates to cart page
    Then user should be redirected to the cart page where the added product is displayed
    When user proceed to checkout from cart page
    Then user should be redirected to the checkout page to complete the order
    When user adds shipping details
    Then user should be able to add shipping details and able to click on continue button
    When user navigates to overview details page
    Then user should be able to check the details of product, payment information, shipping information and able to click on FINISH button
    When user navigates to order place page
    Then user should see thank you message "THANK YOU FOR YOUR ORDER"

  Scenario: Verify that users can successfully place an order for multiple products
    Given user logs in with valid credentials
    When user adds multiple products to the cart
    Then the selected products should be added to the cart
    When user navigates to cart page
    Then user should be redirected to the cart page where the added products are displayed
    When user proceed to checkout from cart page
    Then user should be redirected to the checkout page to complete the order
    When user adds shipping details
    Then user should be able to add shipping details and able to click on continue button
    When user navigates to overview details page
    Then user should be able to check the details of product, payment information, shipping information and able to click on FINISH button
    When user navigates to order place page
    Then user should see thank you message "THANK YOU FOR YOUR ORDER"
  
  Scenario: Verify that user can successfully apply filters
    Given user logs in with valid credentials
    When user apply filter product name Z to A and adds firts product to the cart
    Then verify that products are in ascending order by product name z to a
    When user apply filter product price low to high and adds firts product to the cart
    Then verify that products are in ascending order by product price low to high
    When user apply filter product price high to low and adds firts product to the cart
    Then verify that products are in ascending order by product price high to low
    When user apply filter product name A to Z and adds firts product to the cart
    Then verify that products are in ascending order by product name A to Z
    When user navigates to cart page
    Then user should be redirected to the cart page where the added products are displayed
    When user proceed to checkout from cart page
    Then user should be redirected to the checkout page to complete the order
    When user adds shipping details
    Then user should be able to add shipping details and able to click on continue button
    When user navigates to overview details page
    Then user should be able to check the details of product, payment information, shipping information and able to click on FINISH button
    When user navigates to order place page
    Then user should see thank you message "THANK YOU FOR YOUR ORDER"