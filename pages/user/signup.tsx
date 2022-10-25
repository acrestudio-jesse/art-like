import Link from "next/link";
import useValidInput from "../../hooks/use-valid";
import { auth } from "../../utils/firebase-config";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRouter } from "next/router";

const Signup = () => {
  const router = useRouter();

  const {
    value: userName,
    isValid: userNameValid,
    isNotValid: userNameNotValid,
    changeValueHandler: userNameChangeHandler,
    blurHandler: userNameBlur,
    valueStyles: userNameStyles,
  } = useValidInput((name) => name.trim().length > 8);

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
    reset: passwordReset,
    valueStyles: passwordStyles,
  } = useValidInput((password) => password.trim().length > 8);

  const {
    value: confirmPassword,
    isValid: confirmPasswordValid,
    isNotValid: confirmPasswordNotValid,
    changeValueHandler: confirmPasswordChangeHandler,
    blurHandler: confirmPasswordBlur,
    valueStyles: confirmPasswordStyles,
  } = useValidInput((pass) => pass === password);

  const formValid =
    userNameValid && emailValid && passwordValid && confirmPasswordValid;

  const submitHandler = (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("Sign Up Clicked!");
    if (!formValid) {
      console.log("Form Not Valid!");
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);
        router.push("/");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode,errorMessage)
      });
  };

  return (
    <main className="flex h-4/6 items-center justify-center">
      <div className="mx-auto w-80 rounded-3xl border-4 border-pistachio p-6">
        <form
          onSubmit={submitHandler}
          className="flex flex-col gap-4 text-pistachio"
        >
          <label>Username</label>
          <input
            value={userName}
            className={userNameStyles}
            type="text"
            placeholder="Username"
            onChange={userNameChangeHandler}
            onBlur={userNameBlur}
          ></input>
          {userNameNotValid && (
            <p className="text-orange">Username too short.</p>
          )}

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
          <label>Confirm Password</label>
          <input
            value={confirmPassword}
            className={confirmPasswordStyles}
            type="password"
            placeholder="Confirm Password"
            onChange={confirmPasswordChangeHandler}
            onBlur={confirmPasswordBlur}
          ></input>
          {confirmPasswordNotValid && (
            // eslint-disable-next-line react/no-unescaped-entities
            <p className="text-orange">Password don't match.</p>
          )}
          <span className="flex flex-row justify-between">
            <button
              disabled={!formValid}
              type="submit"
              className="rounded-lg border-2 border-pistachio px-4 py-1 transition-colors duration-200 hover:bg-pistachio hover:text-black "
            >
              Sign Up
            </button>
            <Link href="/user/login">
              <p className="cursor-pointer transition-colors duration-200 hover:text-yellow">
                Log in
              </p>
            </Link>
          </span>
        </form>
      </div>
    </main>
  );
};

export default Signup;
