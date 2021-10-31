import { initializeApp } from "firebase/app";
import firebaseConfig from "./Firbase.config";

const initializeAuthentication = () => {
  initializeApp(firebaseConfig);
};

export default initializeAuthentication;
