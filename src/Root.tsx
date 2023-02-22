import { Outlet } from "react-router";
import Header from "./components/Header";

function App() {
  return (
    <div>
      <Header />
      <Outlet context={{ darkMode: true }} />
    </div>
  );
}

export default App;
