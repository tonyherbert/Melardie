import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  DocumentData,
  DocumentReference,
  getDocs,
  getDoc,
  QuerySnapshot,
  updateDoc,
} from "firebase/firestore";
import { Firestore } from "firebase/firestore";
import { NextApiRequest, NextApiResponse } from "next";

export type CrudOperation = "create" | "read" | "update" | "delete";

export async function firebaseOperation(
  database: Firestore,
  operation: CrudOperation,
  collectionPath: string,
  documentId?: string,
  data?: any
): Promise<unknown> {
  const collectionRef = collection(database, collectionPath);
  let documentRef: DocumentReference<DocumentData> | null = null;

  if (documentId) {
    documentRef = doc(collectionRef, documentId);
    const documentSnapshot = await getDoc(documentRef);
    if (!documentSnapshot.exists()) {
      throw new Error("Document does not exist");
    }
  }

  switch (operation) {
    case "create":
      return addDoc(collectionRef, data);
    case "read":
      const querySnapshot = await getDocs(collectionRef);
      return querySnapshot.docs;
    case "update":
      if (documentRef) {
        return updateDoc(documentRef, data);
      }
      throw new Error("Invalid document reference");
    case "delete":
      if (documentRef) {
        return deleteDoc(documentRef);
      }
      throw new Error("Invalid document reference");
    default:
      throw new Error("Invalid CRUD operation");
  }
}
