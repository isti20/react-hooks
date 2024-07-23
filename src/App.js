import Layout from "./components/Layout";
import ThemeProvider from "./context/Theme";

function App() {
  return (
    <ThemeProvider>
      <Layout />
    </ThemeProvider>
  );
}

export default App;
