interface Steps {
  label: string
  title: string
  description: string | React.ReactNode
  icon?: React.ReactNode
}

export interface CardProps {
  title: string
  leftCardTitle: string
  leftCardSubTitle: string
  rightCardTitle: string
  rightCardSubTitle: string
  leftSteps?: Steps[]
  rightSteps?: Steps[]
}