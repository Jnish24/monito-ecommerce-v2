import { createContext, useContext } from "react";

export const NavigationContext = createContext<string[] | undefined>(undefined);

export function useNavContext() {
  const navItems = useContext(NavigationContext);
  if (!navItems) {
    throw new Error("useNavContext must be used within the NavProvider");
  }
  return navItems;
}
