import { createContext, useContext } from "react";

export interface AnimalCard {
  id: string;
  breed: string;
  size: string;
  color: string;
  gender: string;
  age: string;
  price: string;
}

// Context
export const NavigationContext = createContext<string[] | undefined>(undefined);

export const AnimalCardContext = createContext<AnimalCard[] | undefined>(
  undefined,
);

// Functions
export function useNavContext() {
  const items = useContext(NavigationContext);
  if (!items) {
    throw new Error("useNavContext must be used within the NavProvider");
  }
  return items;
}

export function useAnimalContext() {
  const items = useContext(AnimalCardContext);
  if (!items) {
    throw new Error("useAnimalContext must be used within the NavProvider");
  }
  return items;
}
