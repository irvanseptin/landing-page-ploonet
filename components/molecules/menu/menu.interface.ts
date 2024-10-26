export interface MenuProps {
  menus: {
    label: string
    target: string
    isActive?: boolean
  }[]
  isVertical?: boolean
}