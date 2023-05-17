import useTheme from '@/hooks/use-theme'

type ThemeProps = {
  children: React.ReactNode
}
export default function Theme({ children }: ThemeProps) {
  const [theme] = useTheme()
  return <div className={theme}>{children}</div>
}
