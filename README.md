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