import { AngularFirestore, AngularFirestoreDocument } from "@angular/fire/compat/firestore";
import firebase from "firebase/compat/app";
import * as i0 from "@angular/core";
export declare const collections: {
    users: string;
};
export declare class FirestoreSyncService {
    afs: AngularFirestore;
    constructor(afs: AngularFirestore);
    getUserDocRefByUID(uid: string): AngularFirestoreDocument<firebase.UserInfo>;
    deleteUserData(uid: string): Promise<any>;
    updateUserData(user: firebase.UserInfo): Promise<any>;
    static ɵfac: i0.ɵɵFactoryDeclaration<FirestoreSyncService, never>;
    static ɵprov: i0.ɵɵInjectableDeclaration<FirestoreSyncService>;
}
