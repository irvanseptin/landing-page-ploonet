export interface ButtonProps {
  isActive?: boolean
  variant?: 'primary' | 'text'
  size?: 'small' | 'medium' | 'large'
  children: React.ReactNode
  onClick?: () => void
  className?: string
  disabled?: boolean
  color?: string
}