import { preventDefault } from "../../functions";
import LoginStyled from "./Styled";

function Login() {
  return (
    <LoginStyled>
      <form
        action="#"
        className="login__form">
        <input
          type="text"
          autoComplete="new-password"
          className="login__email"
          placeholder="Email or phone number"
        />
        <input
          type="password"
          autoComplete="new-password"
          className="login__password"
          placeholder="Password"
        />
        <input
          type="submit"
          className="login__submit"
          value="Log In"
          onClick={preventDefault}
        />
        <a
          href="#"
          className="login__forgotpassword">
          Forgot password?
        </a>
        <div className="login__hr">{false}</div>
        <a
          href="#"
          className="login__createaccount">
          Create new account
        </a>
      </form>

      <p className="login__createpage">
        <a
          href="#"
          className="login__link">
          Create a Page
        </a>{" "}
        for a celebrity, brand or business.
      </p>
    </LoginStyled>
  );
}

export default Login;
