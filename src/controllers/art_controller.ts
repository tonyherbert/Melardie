// controllers/ItemController.ts
import { firestore } from "@/firebase/firestore";
import { storage } from "@/firebase/storage";
import Art from "@/models/art_model";
import {
  collection,
  getDocs,
  addDoc,
  doc,
  deleteDoc,
} from "firebase/firestore";
import { ref, uploadBytes, deleteObject } from "firebase/storage";

const db = firestore;

export const getArts = async (): Promise<Art[]> => {
  const querySnapshot = await getDocs(collection(db, "picturesArt"));
  return querySnapshot.docs.map(
    (doc) => ({ id: doc.id, ...doc.data() } as Art)
  );
};

export const addArt = async (item: Art, imageFile: File): Promise<void> => {
  const collectionRef = collection(db, "picturesArt");
  const docRef = await addDoc(collectionRef, item);

  const storageRef = ref(storage, `images/${docRef.id}`);
  await uploadBytes(storageRef, imageFile);
};

export const deleteArt = async (
  itemId: string,
  imageUrl: string
): Promise<void> => {
  const itemDocRef = doc(db, "picturesArt", itemId);
  await deleteDoc(itemDocRef);

  const storageRef = ref(storage, imageUrl);
  await deleteObject(storageRef);
};
