import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }

  public getItems() {
    return this.firestore.collection('todo').snapshotChanges();
  }

  public createItem(data:{name: string, url: string}){
    return this.firestore.collection('todo').add(data);
  }
}
