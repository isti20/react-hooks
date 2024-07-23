import { createContext } from "react";
import Topbar from "./components/Topbar.js";
import Footer from "./components/Footer.js";
import Dashboard from "./components/Dashboard.js";
import "./App.css";

export const UserContext = createContext({
  email: "erdecode@gmail.com",
  name: "Erdecode Channel",
  id: "123wefdsf4",
});

export const ThemeContext = createContext({
  theme: "dark",
  primary: "red",
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Topbar />
        <Dashboard />
        <Footer />
      </header>
    </div>
  );
}

export default App;
