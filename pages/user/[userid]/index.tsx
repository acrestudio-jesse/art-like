import { useRouter } from "next/router";

const CurrentUser = () => {
  const router = useRouter();
  const { userid } = router.query;
  
  return (
    <>
      {" "}
      <header>header</header>
      <main>
        <p>User Profile: {userid}</p>
      </main>
    </>
  );
};

export default CurrentUser;
