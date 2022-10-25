import Link from "next/link";
import { useRouter } from "next/router";
import useValidInput from "../../hooks/use-valid";
import { auth } from "../../utils/firebase-config";
import { signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";

const Login = () => {
  const router = useRouter()

  const {
    value: email,
    isValid: emailValid,
    isNotValid: emailNotValid,
    changeValueHandler: emailChangeHandler,
    blurHandler: emailBlur,
    valueStyles: emailStyles,
  } = useValidInput(
    (email) =>
      !!email
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        )
  );

  const {
    value: password,
    isValid: passwordValid,
    isNotValid: passwordNotValid,
    changeValueHandler: passwordChangeHandler,
    blurHandler: passwordBlur,
    valueStyles: passwordStyles,
  } = useValidInput((password) => password.trim().length > 8);

  const formValid = emailValid && passwordValid;

  const submitHandler = (e: { preventDefault: () => void }) => {
    if (!formValid) {
      console.log("Form Not Valid!");
      return;
    }
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        router.push('/')
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode, errorMessage);
      });
  };

  return (
    <main className="flex h-4/6 items-center justify-center">
      <div className="mx-auto w-80 rounded-3xl border-4 border-pistachio p-6">
        <form
          onSubmit={submitHandler}
          className="flex flex-col gap-4 text-pistachio"
        >
          <label>E-mail</label>
          <input
            value={email}
            className={emailStyles}
            type="email"
            placeholder="Email"
            onChange={emailChangeHandler}
            onBlur={emailBlur}
          ></input>
          {emailNotValid && (
            <p className="text-orange">Email format not valid.</p>
          )}
          <label>Password</label>
          <input
            value={password}
            className={passwordStyles}
            type="password"
            placeholder="Password"
            onChange={passwordChangeHandler}
            onBlur={passwordBlur}
          ></input>
          {passwordNotValid && (
            <p className="text-orange">Password too short.</p>
          )}
          <span className="flex flex-row justify-between">
            <Link href="/user/signup">
              <p className="cursor-pointer transition-colors duration-200 hover:text-yellow">
                Sign Up
              </p>
            </Link>
            <button
              disabled={!formValid}
              type="submit"
              className="rounded-lg border-2 border-pistachio px-4 py-1 transition-colors duration-200 hover:bg-pistachio hover:text-black "
            >
              Log In
            </button>
          </span>
        </form>
      </div>
    </main>
  );
};

export default Login;
