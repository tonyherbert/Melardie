// delete.ts
import { firebaseOperation, CrudOperation } from '@/services/crudService';
import { Firestore } from 'firebase/firestore';
import { NextApiRequest, NextApiResponse } from 'next';

// Initialisez votre instance Firestore
const database: Firestore = /* Initialisation de votre instance Firestore */;

export default async function deleteHandler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'DELETE') {
    const { collectionPath, documentId } = req.body;
    const operation: CrudOperation = 'delete';

    try {
      // Appelez la fonction firebaseOperation avec les paramètres appropriés
      await firebaseOperation(database, operation, collectionPath, documentId);

      // Envoyez la réponse
      res.status(200).json({ success: true, message: 'Document supprimé avec succès' });
    } catch (error: any) {
      // En cas d'erreur, envoyez un message d'erreur
      res.status(500).json({ success: false, error: error.message });
    }
  } else {
    // En cas de méthode HTTP invalide
    res.status(405).json({ success: false, error: 'Method Not Allowed' });
  }
}
