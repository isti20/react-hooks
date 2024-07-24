import Topbar from "./Topbar";
import LoginContextPage from "../page/LoginContextPage";

const Layout = () => {

  return (
    <div className="page">
      <Topbar />
      <div className="page">
        <LoginContextPage />
      </div>
    </div>
  );
};

export default Layout;
