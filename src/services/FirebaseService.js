import {firebaseDatabase, firebaseAuth} from '../utils/firebaseConfigs'
import COLLECTIONS from '../utils/collections'

export default class FirebaseService {
    static getDataList = (nodePath, callback, size = 10) => {

        let query = firebaseDatabase.ref(nodePath).limitToLast(size);
        query.on('value', dataSnapshot => {
            let items = [];
            dataSnapshot.forEach(childSnapshot => {
                let item = childSnapshot.val();
                item['key'] = childSnapshot.key;
                items.push(item);
            });
            callback(items);
        });

        return query;
    };

    static pushData = (collection, objToSubmit, callback) => {
        firebaseDatabase.collection(collection).add(objToSubmit)
        .then((doc) =>{
            callback(doc)
        })
        .catch((error) => {
            callback(null, error)
        })
    };

    static remove = (collection, id, callback) => {
        firebaseDatabase.collection(collection).doc(id).delete()
        .then((doc) =>{
            callback(doc)
        })
        .catch((error) => {
            callback(null, error)
        })
    };

    static getUserExtraInfo = (id, callback) => {
        firebaseDatabase.collection(COLLECTIONS.USER).where('uid','==', id)
        .get()
        .then(docs => {
            docs.forEach(doc =>{
                callback(doc.data())
            })
        })
    }

    static getSubjectsList = (id, usertype, callback) => {
        let query
        console.log(COLLECTIONS.SUBEJECTS)
        
        if( usertype === '0' ){
            query = firebaseDatabase.collection(COLLECTIONS.SUBEJECTS).where('teacher', '===', id)
        } else if ( usertype === '1' ) {
            query = firebaseDatabase.collection(COLLECTIONS.SUBEJECTS).where(`students.${id}`, '==', true)
        } else {
            return []
        }
        
        query.get().then(subjects => {
            let data = []
            subjects.forEach(subject =>{
                data.push(subject.data())
            })
            callback(data)
        })
    }

    static getUniqueDataBy = (collection, id) => {
        return firebaseDatabase.collection(collection).doc(id)
    };

    static updateData = (id, node, obj) => {
        return firebaseDatabase.ref(node + '/' + id).set({...obj});
    };

    static createUser = (email, password) => {
        return firebaseAuth.createUserWithEmailAndPassword(email, password)
    };

    static login = (email, password) => {
        return firebaseAuth.signInWithEmailAndPassword(email, password);
    };

    static logout = () => {
        return firebaseAuth.signOut();
    };

    static onAuthChange = (callbackLogin, callbackLogout) => {
        firebaseAuth.onAuthStateChanged(authUser => {
            if (!authUser) {
                callbackLogout(authUser);
            } else {
                callbackLogin(authUser);
            }
        });
    };

}