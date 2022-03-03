import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
const config = {
	apiKey: process.env.REACT_APP_FIREBASE_KEY,
	authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
};
firebase.initializeApp(config);
export default firebase;
