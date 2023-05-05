import { createContext, useState } from 'react'

type Theme = 'light' | 'dark'

export type ThemeContextType = [
  theme: Theme,
  toggleTheme: () => void
]

export const ThemeContext = createContext<ThemeContextType>([
  'light',
  () => {},
])

export const ThemeProvider = ThemeContext.Provider

export default function useTheme(): ThemeContextType {
  const [theme, setTheme] = useState<Theme>('light')
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return [theme, toggleTheme]
}