import { createContext, useContext, useState } from 'react'

type Theme = 'light' | 'dark'

export type ThemeContextType = [
  theme: Theme,
  toggleTheme: () => void
]

const ThemeContext = createContext<ThemeContextType>([
  'light',
  () => {},
])

type ThemeProviderProps = {
  children: React.ReactNode
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<Theme>('light')
  
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light')
  }

  return (
    <ThemeContext.Provider value={[theme, toggleTheme]}>
      {children}
    </ThemeContext.Provider>
  )
} 

export default function useTheme() {
  return useContext(ThemeContext);
}