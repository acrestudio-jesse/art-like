import type { NextPage } from "next";
import Head from "next/head";
import Navbar from "../components/navbar";
import Gallery from "../components/Gallery";
import useGallery from "../hooks/use-gallery";
import { auth } from "../utils/firebase-config";

const Home: NextPage = () => {
  const user = auth.currentUser;


  if (user !== null) {
    const displayName = user.displayName;
    const email = user.email;
    console.log(displayName, email)
  }



  const { gallery: illustrations, isLoading } = useGallery({
    galleryName: "illustrations",
  });

  if (isLoading) return <p> Images Loading...</p>;
  if (!illustrations) return <p>No illustrations found.</p>;

  return (
    <>
      <Head>
        <title>ArtLike</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <header>
        <Navbar />
      </header>
      <main className="h-100 bg-black">
        <Gallery displayImages={illustrations} imagePath="/" />
      </main>
    </>
  );
};

export default Home;
