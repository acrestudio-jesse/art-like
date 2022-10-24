import { useState, useEffect } from "react";
import { PortfolioDisplay } from "../interfaces";

//takes a string that is the end point within API
function useGallery({
  galleryName,
  id,
}: {
  galleryName: string;
  id?: string | string[];
}) {
  const [gallery, setGallery] = useState(null);
  const [image, setImage] = useState<PortfolioDisplay>({
    name: "",
    id: "",
    image: "",
    alt: "",
  });
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    setIsLoading(true);
    fetch(`/api/images/${galleryName}`)
      .then((res) => res.json())
      .then((data) => {
        setGallery(data);
        console.log(data);
        if (!id) return;
        const [img] = data.filter((el: { id: string }) => el.id === id);
        setImage(img);
      });
    setIsLoading(false);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { gallery, isLoading, image };
}

export default useGallery;
