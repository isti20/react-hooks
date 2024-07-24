import Login from "../page/Login";
import LoginReducer from "../page/LoginReducer.js";

const Layout = () => {
  return (
    <div className="page">
      <h1>Login Page</h1>
      {/* <Login /> */}
      <LoginReducer />
    </div>
  );
};

export default Layout;
