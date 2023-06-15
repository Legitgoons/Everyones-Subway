import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
  apiKey: "AIzaSyAYgQsTe3epHmqO5CWZqLYLD47eZLfNiEo",
  authDomain: "everyons-s-subway.firebaseapp.com",
  projectId: "everyons-s-subway",
  storageBucket: "everyons-s-subway.appspot.com",
  messagingSenderId: "778591534292",
  appId: "1:778591534292:web:fb067b93c0a321d9654f41",
  measurementId: "G-J5QSKQNXJ3"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

onMessage(messaging, (payload) => {
  console.log("Message received. ", payload);

  // Assuming your server sends notification data in payload.data
  const notificationTitle = payload.data.title;
  const notificationOptions = {
    body: payload.data.body,
    icon: '/firebase-logo.png'  // Optional: include a custom icon
  };

  if (!("Notification" in window)) {
    console.log("This browser does not support system notifications");
  }
  else if (Notification.permission === "granted") {
    new Notification(notificationTitle, notificationOptions);
  }
});

export const requestPermission = async () => {
  const permission = await Notification.requestPermission();
  if (permission === "granted") {
    console.log("Notification permission granted.");
  }
  else {
    console.log("Notification permission denied.");
  }
};