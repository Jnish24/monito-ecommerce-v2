import "./assets/styles/App.css";
import { NavigationContext } from "./utils/context";
import Home from "./pages/Home";

const App: React.FC = () => {
  const navItems = ["Home", "Category", "About", "Contact"];

  return (
    <>
      <NavigationContext.Provider value={navItems}>
        <Home />
      </NavigationContext.Provider>
    </>
  );
};

export default App;
