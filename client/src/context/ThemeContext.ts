import { createContext } from "react"
import type { ThemeContextType } from "../types/CardTypes";

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);