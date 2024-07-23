import { useTheme } from "../context/Theme";

const Topbar = () => {
  const theme = useTheme();
  console.log('Topbar', theme)

  return (
    <nav className="topbar">
      <div className="topbar-container">
        <div>
          <h1>Topbar App</h1>
        </div>
      </div>
    </nav>
  );
};

export default Topbar;
