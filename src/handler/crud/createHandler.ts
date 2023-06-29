import { firebaseOperation, CrudOperation } from '@/services/crudService';
import { Firestore } from 'firebase/firestore';
import { NextApiRequest, NextApiResponse } from 'next';

// Initialisez votre instance Firestore
const database: Firestore = /* Initialisation de votre instance Firestore */;

export default async function createHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { collectionPath, data } = req.body;
    const operation: CrudOperation = 'create';

    try {
      // Appelez directement la fonction firebaseOperation avec les paramètres appropriés
      const result = await firebaseOperation(database, operation, collectionPath, undefined, data);

      // Envoyez la réponse
      res.status(200).json({ success: true, data: result });
    } catch (error: any) {
      // En cas d'erreur, envoyez un message d'erreur
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    // En cas de méthode HTTP invalide
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}
