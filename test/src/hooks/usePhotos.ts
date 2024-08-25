import { useEffect } from "react";
import { useActions } from "./useActions";
import { useGetPhotosQuery } from "../store/api/getPhotos";
import { photosTypes } from "../components/Cart/photosType";
import { useTypedSelector } from "./useTypedSelector";

export const usePhotos = () => {
  const { data = [], isLoading, isError  } = useGetPhotosQuery([]);
  const { addToPhotos } = useActions();

  useEffect(() => {
    if (isLoading == false) {
      const dataPhotos = data.characters.map(
        (item: photosTypes, id: number) => item
      );
      addToPhotos(dataPhotos);
    }
  }, [isLoading]);
  const photos = useTypedSelector((state) => state.photos.photos);

  return { photos, isLoading, isError  };
};
