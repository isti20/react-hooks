import { createContext } from "react";
import Topbar from "./components/Topbar.js";
import "./App.css";

export const UserContext = createContext({
  email: "erdecode@gmail.com",
  name: "Erdecode Channel",
  id: "123wefdsf4",
});

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Topbar />
      </header>
    </div>
  );
}

export default App;
