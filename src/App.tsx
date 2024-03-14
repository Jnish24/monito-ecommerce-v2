import "./assets/styles/App.css";
import { NavigationContext, AnimalCardContext } from "./utils/context";
import Home from "./pages/Home";

const App: React.FC = () => {
  const navItems = ["Home", "Category", "About", "Contact"];

  const animalData = [
    {
      id: "MO231",
      breed: "Pomeranian",
      size: "Tiny",
      color: "White",
      gender: "Male",
      age: "2 months",
      price: "45.000",
    },
    {
      id: "MO231",
      breed: "Pomeranian",
      size: "Tiny",
      color: "White",
      gender: "Male",
      age: "2 months",
      price: "45.000",
      gift: "YESasdasdasdasdasdYES",
    },
    {
      id: "MO231",
      breed: "Pomeranian",
      size: "Tiny",
      color: "White",
      gender: "Male",
      age: "2 months",
      price: "45.000",
    },
    {
      id: "MO231",
      breed: "Pomeranian",
      size: "Tiny",
      color: "White",
      gender: "Male",
      age: "2 months",
      price: "45.000",
    },
    {
      id: "MO231",
      breed: "Pomeranian",
      size: "Tiny",
      color: "White",
      gender: "Male",
      age: "2 months",
      price: "45.000",
    },
    {
      id: "MO231",
      breed: "Pomeranian",
      size: "Tiny",
      color: "White",
      gender: "Male",
      age: "2 months",
      price: "45.000",
    },
    {
      id: "MO231",
      breed: "Pomeranian",
      size: "Tiny",
      color: "White",
      gender: "Male",
      age: "2 months",
      price: "45.000",
    },
    {
      id: "MO231",
      breed: "Pomeranian",
      size: "Tiny",
      color: "White",
      gender: "Male",
      age: "2 months",
      price: "45.000",
    },
  ];

  return (
    <>
      <AnimalCardContext.Provider value={animalData}>
        <NavigationContext.Provider value={navItems}>
          <Home />
        </NavigationContext.Provider>
      </AnimalCardContext.Provider>
    </>
  );
};

export default App;
