import { Injectable } from "@angular/core";
import * as i0 from "@angular/core";
import * as i1 from "@angular/fire/compat/firestore";
export const collections = {
    users: "users",
};
export class FirestoreSyncService {
    constructor(afs) {
        this.afs = afs;
        // this.afs.firestore.settings({timestampsInSnapshots: true});
    }
    // get timestamp() {
    //     return firebase.firestore.FieldValue.serverTimestamp();
    // }
    getUserDocRefByUID(uid) {
        return this.afs.doc(`${collections.users}/${uid}`);
    }
    deleteUserData(uid) {
        const userRef = this.getUserDocRefByUID(uid);
        return userRef.delete();
    }
    updateUserData(user) {
        // Sets user$ data to firestore on login
        const userRef = this.getUserDocRefByUID(user.uid);
        const data = {
            uid: user.uid,
            email: user.email,
            displayName: user.displayName,
            photoURL: user.photoURL,
            phoneNumber: user.phoneNumber,
            providerId: user.providerId,
        };
        return userRef.set(data, { merge: true });
    }
}
FirestoreSyncService.ɵfac = i0.ɵɵngDeclareFactory({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: FirestoreSyncService, deps: [{ token: i1.AngularFirestore }], target: i0.ɵɵFactoryTarget.Injectable });
FirestoreSyncService.ɵprov = i0.ɵɵngDeclareInjectable({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: FirestoreSyncService, providedIn: "root" });
i0.ɵɵngDeclareClassMetadata({ minVersion: "12.0.0", version: "13.2.2", ngImport: i0, type: FirestoreSyncService, decorators: [{
            type: Injectable,
            args: [{
                    providedIn: "root",
                }]
        }], ctorParameters: function () { return [{ type: i1.AngularFirestore }]; } });
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZmlyZXN0b3JlLXN5bmMuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uLy4uLy4uL3Byb2plY3RzL25neC1hdXRoLWZpcmViYXNldWkvc3JjL2xpYi9zZXJ2aWNlcy9maXJlc3RvcmUtc3luYy5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7OztBQU8zQyxNQUFNLENBQUMsTUFBTSxXQUFXLEdBQUc7SUFDekIsS0FBSyxFQUFFLE9BQU87Q0FDZixDQUFDO0FBS0YsTUFBTSxPQUFPLG9CQUFvQjtJQUMvQixZQUFtQixHQUFxQjtRQUFyQixRQUFHLEdBQUgsR0FBRyxDQUFrQjtRQUN0Qyw4REFBOEQ7SUFDaEUsQ0FBQztJQUVELG9CQUFvQjtJQUNwQiw4REFBOEQ7SUFDOUQsSUFBSTtJQUVHLGtCQUFrQixDQUN2QixHQUFXO1FBRVgsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxHQUFHLFdBQVcsQ0FBQyxLQUFLLElBQUksR0FBRyxFQUFFLENBQUMsQ0FBQztJQUNyRCxDQUFDO0lBRU0sY0FBYyxDQUFDLEdBQVc7UUFDL0IsTUFBTSxPQUFPLEdBQWdELElBQUksQ0FBQyxrQkFBa0IsQ0FDbEYsR0FBRyxDQUNKLENBQUM7UUFDRixPQUFPLE9BQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQztJQUMxQixDQUFDO0lBRU0sY0FBYyxDQUFDLElBQXVCO1FBQzNDLHdDQUF3QztRQUN4QyxNQUFNLE9BQU8sR0FBZ0QsSUFBSSxDQUFDLGtCQUFrQixDQUNsRixJQUFJLENBQUMsR0FBRyxDQUNULENBQUM7UUFDRixNQUFNLElBQUksR0FBc0I7WUFDOUIsR0FBRyxFQUFFLElBQUksQ0FBQyxHQUFHO1lBQ2IsS0FBSyxFQUFFLElBQUksQ0FBQyxLQUFLO1lBQ2pCLFdBQVcsRUFBRSxJQUFJLENBQUMsV0FBVztZQUM3QixRQUFRLEVBQUUsSUFBSSxDQUFDLFFBQVE7WUFDdkIsV0FBVyxFQUFFLElBQUksQ0FBQyxXQUFXO1lBQzdCLFVBQVUsRUFBRSxJQUFJLENBQUMsVUFBVTtTQUM1QixDQUFDO1FBQ0YsT0FBTyxPQUFPLENBQUMsR0FBRyxDQUFDLElBQUksRUFBRSxFQUFFLEtBQUssRUFBRSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0lBQzVDLENBQUM7O2lIQXBDVSxvQkFBb0I7cUhBQXBCLG9CQUFvQixjQUZuQixNQUFNOzJGQUVQLG9CQUFvQjtrQkFIaEMsVUFBVTttQkFBQztvQkFDVixVQUFVLEVBQUUsTUFBTTtpQkFDbkIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7XG4gIEFuZ3VsYXJGaXJlc3RvcmUsXG4gIEFuZ3VsYXJGaXJlc3RvcmVEb2N1bWVudCxcbn0gZnJvbSBcIkBhbmd1bGFyL2ZpcmUvY29tcGF0L2ZpcmVzdG9yZVwiO1xuaW1wb3J0IGZpcmViYXNlIGZyb20gXCJmaXJlYmFzZS9jb21wYXQvYXBwXCI7XG5cbmV4cG9ydCBjb25zdCBjb2xsZWN0aW9ucyA9IHtcbiAgdXNlcnM6IFwidXNlcnNcIixcbn07XG5cbkBJbmplY3RhYmxlKHtcbiAgcHJvdmlkZWRJbjogXCJyb290XCIsXG59KVxuZXhwb3J0IGNsYXNzIEZpcmVzdG9yZVN5bmNTZXJ2aWNlIHtcbiAgY29uc3RydWN0b3IocHVibGljIGFmczogQW5ndWxhckZpcmVzdG9yZSkge1xuICAgIC8vIHRoaXMuYWZzLmZpcmVzdG9yZS5zZXR0aW5ncyh7dGltZXN0YW1wc0luU25hcHNob3RzOiB0cnVlfSk7XG4gIH1cblxuICAvLyBnZXQgdGltZXN0YW1wKCkge1xuICAvLyAgICAgcmV0dXJuIGZpcmViYXNlLmZpcmVzdG9yZS5GaWVsZFZhbHVlLnNlcnZlclRpbWVzdGFtcCgpO1xuICAvLyB9XG5cbiAgcHVibGljIGdldFVzZXJEb2NSZWZCeVVJRChcbiAgICB1aWQ6IHN0cmluZ1xuICApOiBBbmd1bGFyRmlyZXN0b3JlRG9jdW1lbnQ8ZmlyZWJhc2UuVXNlckluZm8+IHtcbiAgICByZXR1cm4gdGhpcy5hZnMuZG9jKGAke2NvbGxlY3Rpb25zLnVzZXJzfS8ke3VpZH1gKTtcbiAgfVxuXG4gIHB1YmxpYyBkZWxldGVVc2VyRGF0YSh1aWQ6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgY29uc3QgdXNlclJlZjogQW5ndWxhckZpcmVzdG9yZURvY3VtZW50PGZpcmViYXNlLlVzZXJJbmZvPiA9IHRoaXMuZ2V0VXNlckRvY1JlZkJ5VUlEKFxuICAgICAgdWlkXG4gICAgKTtcbiAgICByZXR1cm4gdXNlclJlZi5kZWxldGUoKTtcbiAgfVxuXG4gIHB1YmxpYyB1cGRhdGVVc2VyRGF0YSh1c2VyOiBmaXJlYmFzZS5Vc2VySW5mbyk6IFByb21pc2U8YW55PiB7XG4gICAgLy8gU2V0cyB1c2VyJCBkYXRhIHRvIGZpcmVzdG9yZSBvbiBsb2dpblxuICAgIGNvbnN0IHVzZXJSZWY6IEFuZ3VsYXJGaXJlc3RvcmVEb2N1bWVudDxmaXJlYmFzZS5Vc2VySW5mbz4gPSB0aGlzLmdldFVzZXJEb2NSZWZCeVVJRChcbiAgICAgIHVzZXIudWlkXG4gICAgKTtcbiAgICBjb25zdCBkYXRhOiBmaXJlYmFzZS5Vc2VySW5mbyA9IHtcbiAgICAgIHVpZDogdXNlci51aWQsXG4gICAgICBlbWFpbDogdXNlci5lbWFpbCxcbiAgICAgIGRpc3BsYXlOYW1lOiB1c2VyLmRpc3BsYXlOYW1lLFxuICAgICAgcGhvdG9VUkw6IHVzZXIucGhvdG9VUkwsXG4gICAgICBwaG9uZU51bWJlcjogdXNlci5waG9uZU51bWJlcixcbiAgICAgIHByb3ZpZGVySWQ6IHVzZXIucHJvdmlkZXJJZCxcbiAgICB9O1xuICAgIHJldHVybiB1c2VyUmVmLnNldChkYXRhLCB7IG1lcmdlOiB0cnVlIH0pO1xuICB9XG59XG4iXX0=