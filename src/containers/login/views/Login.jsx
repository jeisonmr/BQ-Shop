// import logo from "../../../global/utils/img/logo.svg";
import "../components/styles/Login.scss";

export const Login = () => {
  return (
        <div className="login">
          <div className="form-container">
            {/* <img src={logo} atl="logo" className="logo App-logo" /> */}

            <h1 className="title">Create a new password</h1>
            <p className="subtitle">Enter a new password for you account</p>

            <form action="/" className="form">
              <label className="label" for="password">
                Password
              </label>
              <input
                type="password"
                className="input input-password"
                placeholder="**************"
              ></input>

              <label className="label" for="new-password">
                Confirm Password
              </label>
              <input
                type="password"
                id="new-password"
                placerholder="*************"
                className="input input-password"
              ></input>

              <input
                type="submit"
                value="Confirm"
                className="primary-button login-button"
              ></input>
            </form>
          </div>
        </div>
  );
}