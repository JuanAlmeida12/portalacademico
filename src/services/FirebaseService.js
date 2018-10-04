import {firebaseDatabase, firebaseAuth} from '../utils/firebaseConfigs'
import COLLECTIONS from '../utils/collections'

export default class FirebaseService {
    static getDataList = (nodePath, callback, size = 10) => {

        let query = firebaseDatabase.ref(nodePath).limitToLast(size)
        query.on('value', dataSnapshot => {
            let items = []
            dataSnapshot.forEach(childSnapshot => {
                let item = childSnapshot.val()
                item['key'] = childSnapshot.key
                items.push(item)
            })
            callback(items)
        })

        return query
    }

    static pushData = (collection, objToSubmit, callback) => {
        firebaseDatabase.collection(collection).add(objToSubmit)
        .then((doc) =>{
            callback(doc)
        })
        .catch((error) => {
            callback(null, error)
        })
    }

    static remove = (collection, id, callback) => {
        firebaseDatabase.collection(collection).doc(id).delete()
        .then((doc) =>{
            callback(doc)
        })
        .catch((error) => {
            callback(null, error)
        })
    }

    static getUserExtraInfo = (id, callback) => {
        firebaseDatabase.collection(COLLECTIONS.USER).where('uid','==', id)
        .get()
        .then(docs => {
            docs.forEach(doc =>{
                callback(doc.data())
            })
        })
    }

    static getSubject = (id, callback) => {
        firebaseDatabase.collection(COLLECTIONS.SUBEJECTS).doc(id).get()
        .then(doc => {
            callback(doc.data())
        })
        .catch(error =>{
            callback(null, error)
        })
    }

    static subjectRegisterStudent = (subject, student , callback) => {
        firebaseDatabase.collection(COLLECTIONS.SUBEJECTS).doc(subject.id).set({ ...subject, students:{ ...subject.students, [student.uid]: student } })
        .then(() => {
            callback()
        })
        .catch(error =>{
            callback(error)
        })
    }


    static getSubjectsList = (id, usertype, status, callback) => {
        let query
        console.log('typeeeeeeeeeeeeeee', id)
        if (id) {
            if( usertype === '0' ){
                query = firebaseDatabase.collection(COLLECTIONS.SUBEJECTS).where('status', '==', status).where('professor.uid', '==', id)
            } else if ( usertype === '1' ) {
                query = firebaseDatabase.collection(COLLECTIONS.SUBEJECTS).where('status', '==', status).where(`students.${id}.registered`, '==', true)
            } else {
                return []
            }
        } else {
            query = firebaseDatabase.collection(COLLECTIONS.SUBEJECTS).where('status', '==', status)
        }
        query.get().then(subjects => {
            let data = []
            subjects.forEach(subject =>{
                data.push(subject.data())
            })
            callback(data)
        })
    }

    static getAllSubjectsList = (id, usertype, callback) => {
        let query
        console.log(COLLECTIONS.SUBEJECTS)
        
        if( usertype === '0' ){
            query = firebaseDatabase.collection(COLLECTIONS.SUBEJECTS).where('professor.uid', '==', id)
        } else if ( usertype === '1' ) {
            query = firebaseDatabase.collection(COLLECTIONS.SUBEJECTS).where(`students.${id}.registered`, '==', true)
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
    }

    static updateData = (collection, id , obj, callback) => {
        return firebaseDatabase.collection(collection).doc(id).set(obj)
        .then(data => {
            callback(data.data())
        }).catch(error =>{
            callback(null, error)
        })
    }

    static createUser = (email, password) => {
        return firebaseAuth.createUserWithEmailAndPassword(email, password)
    }

    static login = (email, password) => {
        return firebaseAuth.signInWithEmailAndPassword(email, password)
    }

    static logout = () => {
        return firebaseAuth.signOut()
    }

    static getUserConnected = () => {
        return firebaseAuth.currentUser
    }

    static onAuthChange = (callbackLogin, callbackLogout) => {
        firebaseAuth.onAuthStateChanged(authUser => {
            if (!authUser) {
                callbackLogout(authUser)
            } else {
                callbackLogin(authUser)
            }
        })
    }

}