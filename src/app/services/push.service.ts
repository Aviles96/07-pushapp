import { Injectable } from '@angular/core';
import OneSignal from 'onesignal-cordova-plugin';
 
@Injectable(  { providedIn: 'root' })
 
export class PushService {
  constructor() {
    //this.OneSignalInit(); // CREO QUE ESTA LLAMADA ES NECESARIA PERO NO APARECIA EN TU CÓDIGO
  }
 
   OneSignalInit(): void {
    // Uncomment to set OneSignal device logging to VERBOSE  
    // OneSignal.setLogLevel(6, 0);
  
    // NOTE: Update the setAppId value below with your OneSignal AppId.
    OneSignal.setAppId("c1f0f54f-6720-4e0c-b57c-df32709d50d4");
    OneSignal.setNotificationOpenedHandler(function(jsonData) {
        console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
    });
  
    // Prompts the user for notification permissions.
    //    * Since this shows a generic native prompt, we recommend instead using an In-App Message to prompt for notification permission (See step 7) to better communicate to your users what notifications they will get.
    OneSignal.promptForPushNotificationsWithUserResponse(function(accepted) {
        console.log("User accepted notifications: " + accepted);
    });
  }
 
}