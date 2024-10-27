export interface TextProps {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'p' | 'span' | 'small'
  children: React.ReactNode
  className?: string
  isPrimary?: boolean
  style?: any
}