import "./assets/styles/App.css";
import {
  NavigationContext,
  AnimalCardContext,
  ProductCardContext,
} from "./utils/context";
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

  const productData = [
    {
      name: "Reflex Plus Adult Cat Food Salmon",
      type: "Dog Food",
      size: "385",
      price: "89",
    },
    {
      name: "Reflex Plus Adult Cat Food Salmon",
      type: "Dog Food",
      size: "385",
      price: "89",
    },
    {
      name: "Reflex Plus Adult Cat Food Salmon",
      type: "Dog Food",
      size: "385",
      price: "89",
    },
    {
      name: "Reflex Plus Adult Cat Food Salmon",
      type: "Dog Food",
      size: "385",
      price: "89",
    },
    {
      name: "Reflex Plus Adult Cat Food Salmon",
      type: "Dog Food",
      size: "385",
      price: "89",
    },
    {
      name: "Reflex Plus Adult Cat Food Salmon",
      type: "Dog Food",
      size: "385",
      price: "89",
    },
    {
      name: "Reflex Plus Adult Cat Food Salmon",
      type: "Dog Food",
      size: "385",
      price: "89",
    },
    {
      name: "Reflex Plus Adult Cat Food Salmon",
      type: "Dog Food",
      size: "385",
      price: "89",
    },
  ];

  return (
    <>
      <ProductCardContext.Provider value={productData}>
        <AnimalCardContext.Provider value={animalData}>
          <NavigationContext.Provider value={navItems}>
            <Home />
          </NavigationContext.Provider>
        </AnimalCardContext.Provider>
      </ProductCardContext.Provider>
    </>
  );
};

export default App;
