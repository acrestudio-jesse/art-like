import { PortfolioDisplay } from "../interfaces";
import Image from "next/image";
import Link from "next/link";

interface imageProps {
  displayImages: Array<PortfolioDisplay>;
  imagePath: string;
}

const Gallery = ({ displayImages, imagePath }: imageProps) => {
  return (
    <>
      <div className="grid mt-2 items-center justify-center grid-rows-4  md:grid-cols-2 lg:grid-cols-4">
        {displayImages.map((img: PortfolioDisplay) => {
          return (
            <Link
              key={img.id}
              href={{ pathname: `${imagePath}${img.id}`, query: img }}
            >
              <div className="relative h-[25vw] w-[25vw] md:h-[35vh] md:w-[50vw]">
                <Image
                  className="object-cover"
                  src={img.image}
                  alt={img.alt}
                  layout="intrinsic"
                  width={470}
                  height={318}
                />
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Gallery;
