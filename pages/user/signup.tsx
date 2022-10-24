import Button from "../../components/button";
import Link from "next/link";
import useValidInput from "../../hooks/use-valid";
const Signup = () => {
  const {
    value: userName,
    isValid: userNameValid,
    isNotValid: userNameNotValid,
    changeValueHandler: userNameChangeHandler,
    blurHandler: userNameBlur,
    reset: userNameReset,
    valueStyles: userNameStyles,
  } = useValidInput((name) => name.trim().length > 8);

  const {
    value: email,
    isValid: emailValid,
    isNotValid: emailNotValid,
    changeValueHandler: emailChangeHandler,
    blurHandler: emailBlur,
    reset: emailReset,
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
    reset: confirmPasswordReset,
    valueStyles: confirmPasswordStyles,
  } = useValidInput((pass) => pass === password);

  return (
    <main className="flex h-4/6 items-center justify-center">
      <div className="mx-auto w-80 rounded-3xl border-4 border-pistachio p-6">
        <form className="flex flex-col gap-4 text-pistachio">
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
            <Button press="onSubmit">Sign Up</Button>
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
