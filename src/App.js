import Layout from "./components/Layout";
import AuthProvider from "./context/auth";

function App() {
  return (
    <AuthProvider>
      <Layout />
    </AuthProvider>
  );
}

export default App;
