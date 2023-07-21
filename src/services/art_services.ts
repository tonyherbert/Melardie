// services/Artservice.ts
import { addArt, deleteArt, getArts } from "@/controllers/art_controller";
import Art from "@/models/art_model";
import { useState, useEffect } from "react";

export const useArts = () => {
  const [arts, setArts] = useState<Art[]>([]);

  useEffect(() => {
    const fetchArts = async () => {
      const fetchedArts = await getArts();
      console.log("query ", process.env.NEXT_PUBLIC_FIREBASE_API_KEY);

      setArts(fetchedArts);
    };
    fetchArts();
  }, []);

  return { arts };
};

export const useAddItem = () => {
  const addItemToFirestore = async (art: Art, imageFile: File) => {
    await addArt(art, imageFile);
  };

  return { addItemToFirestore };
};

export const useDeleteItem = () => {
  const deleteItemFromFirestore = async (artId: string, imageUrl: string) => {
    await deleteArt(artId, imageUrl);
  };

  return { deleteItemFromFirestore };
};
