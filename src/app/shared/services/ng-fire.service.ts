// Angular
import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';

@Injectable()
export class NgFireService {
    loadDocument(collection: string, document: string) {
        return this.angularFirestore
        .collection(collection)
        .doc(document)
        .valueChanges();
    }

    loadCollection(collection: string, orderBy?: string, sort?: any) {
        return orderBy ?
        this.angularFirestore
        .collection(collection, ref => ref
            .orderBy(orderBy, sort))
        .valueChanges() :
        this.angularFirestore
        .collection(collection, ref => ref)
        .valueChanges();
    }

    loadCollectionLimit(collection: string, limit: number, orderBy?: string, sort?: any) {
        return orderBy ?
        this.angularFirestore
        .collection(collection, ref => ref
            .orderBy(orderBy, sort).limit(limit))
        .valueChanges() :
        this.angularFirestore
        .collection(collection, ref => ref.limit(limit))
        .valueChanges();
    }

    load1Condition( collection: string, field1: string, operator1: any, value1: any, orderBy?: string, sort?: any) {
        return orderBy ?
        this.angularFirestore
        .collection(collection, ref => ref
            .where(field1, operator1, value1)
            .orderBy(orderBy, sort)
        ).valueChanges() :
        this.angularFirestore
        .collection(collection, ref => ref
            .where(field1, operator1, value1)
        ).valueChanges();
    }

    load2Conditions(collection: string, field1: string, operator1: any, value1: any, field2: string, operator2: any, value2: any, orderBy?: string, sort?: any) {
        return orderBy ?
        this.angularFirestore
        .collection(collection, ref => ref
            .where(field1, operator1, value1)
            .where(field2, operator2, value2)
            .orderBy(orderBy, sort)
        ).valueChanges() :
        this.angularFirestore
        .collection(collection, ref => ref
            .where(field1, operator1, value1)
            .where(field2, operator2, value2)
        ).valueChanges();
    }

    load3Conditions(collection: string, field1: string, operator1: any, value1: any, field2: string, operator2: any, value2: any, field3: string, operator3: any, value3: any, orderBy?: string, sort?: any) {
        return orderBy ?
        this.angularFirestore
        .collection(collection, ref => ref
            .where(field1, operator1, value1)
            .where(field2, operator2, value2)
            .where(field3, operator3, value3)
            .orderBy(orderBy, sort)
        ).valueChanges() :
        this.angularFirestore
        .collection(collection, ref => ref
            .where(field1, operator1, value1)
            .where(field2, operator2, value2)
            .where(field3, operator3, value3)
        ).valueChanges();
    }

    load4Conditions(collection: string, field1: string, operator1: any, value1: any, field2: string, operator2: any, value2: any, field3: string, operator3: any, value3: any, field4: string, operator4: any, value4: any, orderBy?: string, sort?: any) {
        return orderBy ?
        this.angularFirestore
        .collection(collection, ref => ref
            .where(field1, operator1, value1)
            .where(field2, operator2, value2)
            .where(field3, operator3, value3)
            .where(field4, operator4, value4)
            .orderBy(orderBy, sort)
        ).valueChanges() :
        this.angularFirestore
        .collection(collection, ref => ref
            .where(field1, operator1, value1)
            .where(field2, operator2, value2)
            .where(field3, operator3, value3)
            .where(field4, operator4, value4)
        ).valueChanges();
    }

    load6Conditions(
        collection: string,
        field1: string, operator1: any, value1: any,
        field2: string, operator2: any, value2: any,
        field3: string, operator3: any, value3: any,
        field4: string, operator4: any, value4: any,
        field5: string, operator5: any, value5: any,
        field6: string, operator6: any, value6: any,
        orderBy?: string,
        sort?: any
    ) {
        return orderBy ?
        this.angularFirestore
        .collection(collection, ref => ref
            .where(field1, operator1, value1)
            .where(field2, operator2, value2)
            .where(field3, operator3, value3)
            .where(field4, operator4, value4)
            .where(field5, operator5, value5)
            .where(field6, operator6, value6)
            .orderBy(orderBy, sort)
        ).valueChanges() :
        this.angularFirestore
        .collection(collection, ref => ref
            .where(field1, operator1, value1)
            .where(field2, operator2, value2)
            .where(field3, operator3, value3)
            .where(field4, operator4, value4)
            .where(field5, operator5, value5)
            .where(field6, operator6, value6)
        ).valueChanges();
    }

    add(collection, obj: any) {
        const ref = this.angularFirestore.firestore.collection(collection).doc();
        obj.id = ref.id;
        return this.angularFirestore.collection(collection).doc(obj.id).set(obj);
    }

    addBatch(collection: string, arr: any[]) {
        // Create variable to hold batch data.
        const batch = this.angularFirestore.firestore.batch();
        // Loop through array and set array data to batch.
        for (let i = 0; i < arr.length; i++) {
            const ref = this.angularFirestore.firestore.collection(collection).doc();
            arr[i].id = ref.id;
            batch.set(ref, arr[i]);
        }
        // Commit batch to database.
        return batch.commit();
    }

    set(collection: string, document: string, obj: {}) {
        return this.angularFirestore.collection(collection).doc(document).set(obj);
    }

    setBatchMerge(arr: any[], collection: string, propDocIdRef: string) {
        // Create variable to hold batch data.
        const batch = this.angularFirestore.firestore.batch();
        // Loop through array and set array data to batch.
        for (let i = 0; i < arr.length; i++) {
            const ref = this.angularFirestore.firestore.collection(collection).doc(arr[i][propDocIdRef]);
            batch.set(ref, arr[i], { merge: true });
        }
        // Commit batch to database.
        return batch.commit();
    }

    update(collection: string, document: string, obj: {}) {
        return this.angularFirestore.collection(collection).doc(document).update(obj);
    }

    delete(collection: string, docId: string) {
        return this.angularFirestore.collection(collection).doc(docId).delete();
    }

    deleteBatch(arr: any[], collection: string, propDocIdRef: string) {
        // Create variable to hold batch data.
        const batch = this.angularFirestore.firestore.batch();
        // Loop through array and set array data to batch.
        for (let i = 0; i < arr.length; i++) {
            const ref = this.angularFirestore.firestore.collection(collection).doc(arr[i][propDocIdRef]);
            batch.delete(ref);
        }
        // Commit batch to database.
        return batch.commit();
    }

    constructor(private angularFirestore: AngularFirestore) { }
}
