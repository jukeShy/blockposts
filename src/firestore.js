import firebase from 'firebase/app';
import 'firebase/firebase-firestore';
import { config } from './dbconfig';

firebase.initializeApp(config);
const db = firebase.firestore();
db.settings({ timestampsInSnapshots: true })

export default db;