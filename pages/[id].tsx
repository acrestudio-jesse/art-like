import Image from "next/image";
import { useRouter } from "next/router";
import Navbar from "../components/navbar";

export default function Art() {
  const router = useRouter();
  const {image, alt}: any = router.query;

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <div className='flex items-center justify-center mt-4'>
          <Image
            className='object-contain'
            src={image}
            alt={alt}
            layout='intrinsic'
            width={1000}
            height={850}
          />
        </div>
      </main>
    </>
  );
}
