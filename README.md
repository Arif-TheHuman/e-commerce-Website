# PB Hub

## How to Download APK into Phone

This guide will walk you through the process of building an APK from an Ionic project and installing it on your phone.

### Prerequisites

- Android Studio
- Ionic CLI
- Capacitor
- A USB cable to connect your phone to your machine

### Steps

1. **Connect your phone to your machine using a USB cable.**

2. **Build your Ionic project.** Navigate to your project folder in the terminal and run the following command:

```bash
    ionic build
```

3. **Add Android as a platform to your Capacitor project.** Run the following command:

```bash
    npx cap add android
```

4. **Copy your web code into your Android project.** Run the following command:

```bash
    npx cap copy
```

5. **Open the Android project in Android Studio.** Run the following command:

```bash
    npx cap open android
```

6. **Build your APK.** In Android Studio, navigate to `Build > Build Bundle(s) / APK(s) > Build APK(s)`.

7. **Locate the APK file.** Once the APK is built, Android Studio will show a notification. Click on the `locate` or `event log` link in the notification to find the APK file.

8. **Copy the APK file to your phone.** Navigate to your phone in "This PC" and paste the APK file into a dedicated folder.

9. **Install the APK on your phone.** On your phone, navigate to the dedicated folder using a file manager app and tap on the APK file to install it.

## Navigation For The PB Hub App
The PB Hub app is a shopping platform with various pages that serve different purposes. Here's a brief description of each page and its role in the application:

Home Page (home.page.html): This is the landing page of the app. It displays the product of the day and a list of popular products. Users can click on a product to view its details.

Cart Page (cart.page.html): This page displays all the items that a user has added to their cart. Users can view the items in their cart and proceed to checkout.

Login Page (login.page.html): This page allows users to log into their account by entering their email and password.

Signup Page (signup.page.html): This page allows new users to create an account. They can choose their account type (Seller or Customer) and provide their email and password.

App Component (app.component.html): This is the main component of the app. It contains the navigation menu and the router outlet where different pages are displayed.

Checkout Page (checkout.page.html): This page allows users to finalize their purchase. They can view the total cost and submit payment.

Dashboard Page (dashboard.page.html): This page is accessible to logged-in users. It displays user information, business profile (for sellers), and allows sellers to manage their products.

Performance Page (performance.page.html): This page is accessible to sellers and displays statistics related to their business performance.

Check Reviews Page (check-reviews.page.html): This page allows sellers to view and respond to reviews left by customers.

Product Change Page (product-change.page.html): This page allows sellers to edit the details of their products.

Product Detail Page (product-detail.page.html): This page displays the details of a specific product. Users can add the product to their cart and confirm purchase from this page.

Index Page (index.html): This is the entry point of the app. It contains the root element where the app is bootstrapped.

The navigation between these pages is managed by the Angular Router, which loads different components (pages) based on the current URL.