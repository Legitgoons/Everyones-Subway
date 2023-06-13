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

async function requestPermission() {
  console.log("권한 요청 중...");

  const permission = await Notification.requestPermission();
  if (permission === "denied") {
    console.log("알림 권한 허용 안됨");
    return;
  }

  console.log("알림 권한이 허용됨");

  const token = await getToken(messaging, {
    vapidKey: 'BOOptFU_7EENDgAqTIldQhqFrxh_g0FR_I8Kt6O0dAO6s67l_gD1mEGLLrz_TtDpM8W84wrMtcp4N_ikR_b8sBM',
  });

  if (token) console.log("token: ", token);
  else console.log("Can not get Token");

  onMessage(messaging, (payload) => {
    console.log("메시지가 도착했습니다.", payload);
    // ...
  });
}

requestPermission();