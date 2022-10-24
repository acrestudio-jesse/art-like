import Link from "next/link";

const linkStyle =
  "rounded-lg border-2 border-pistachio px-4 py-1 transition-colors duration-200 hover:bg-pistachio hover:text-black ";

const Navbar = () => {
  return (
    <div>
      <ul className="flex flex-row justify-end gap-3 text-pistachio">
        <Link href="/user/login">
          <p className={linkStyle}>
            Log In
          </p>
        </Link>
        <Link href="/user/signup">
          <p className={linkStyle}>Sign Up</p>
        </Link>
        <Link href="/user/">
          <p className={linkStyle}>My Profile</p>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;
