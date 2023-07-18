// services/ItemService.ts
import { addArt, deleteArt, getArts } from "@/controllers/art_controller";
import Art from "@/models/art_model";
import { useState, useEffect } from "react";

export const useItems = () => {
  const [items, setItems] = useState<Art[]>([]);

  useEffect(() => {
    const fetchItems = async () => {
      const fetchedItems = await getArts();
      setItems(fetchedItems);
    };
    fetchItems();
  }, []);

  return { items };
};

export const useAddItem = () => {
  const addItemToFirestore = async (item: Art, imageFile: File) => {
    await addArt(item, imageFile);
  };

  return { addItemToFirestore };
};

export const useDeleteItem = () => {
  const deleteItemFromFirestore = async (itemId: string, imageUrl: string) => {
    await deleteArt(itemId, imageUrl);
  };

  return { deleteItemFromFirestore };
};
