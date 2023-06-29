// get.ts
import { firebaseOperation, CrudOperation } from '@/services/crudService';
import { Firestore } from 'firebase/firestore';
import { NextApiRequest, NextApiResponse } from 'next';

// Initialisez votre instance Firestore
const database: Firestore = /* Initialisation de votre instance Firestore */;

export default async function getHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'GET') {
    const { collectionPath } = req.body;
    const operation: CrudOperation = 'read';

    try {
      // Appelez la fonction firebaseOperation avec les paramètres appropriés
      const documents = await firebaseOperation(database, operation, collectionPath);

      // Envoyez la réponse
      res.status(200).json({ success: true, data: documents });
    } catch (error: any) {
      // En cas d'erreur, envoyez un message d'erreur
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    // En cas de méthode HTTP invalide
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}
