import { firebaseOperation } from '@/services/crudService';
import { Firestore } from 'firebase/firestore';
import { NextApiRequest, NextApiResponse } from 'next';

// Initialisez votre instance Firestore
const database: Firestore = /* Initialisation de votre instance Firestore */;

// Créez une API route avec Next.js
export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { operation, collectionPath, documentId, data } = req.body;

  try {
    // Appelez la fonction firebaseOperation avec les paramètres appropriés
    const result = await firebaseOperation(database, operation, collectionPath, documentId, data);

    // Envoyez la réponse
    res.status(200).json({ success: true, data: result });
  } catch (error: any) {
    // En cas d'erreur, envoyez un message d'erreur
    res.status(500).json({ success: false, error: error.message });
  }
}
