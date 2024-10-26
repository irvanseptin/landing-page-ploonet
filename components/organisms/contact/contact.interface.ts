export interface ContactProps {
  description?: string
  title: string | React.ReactNode
  email: string
  subTitle: string
  infos: {
    title: string
    subTitle?: string
  }[]
  children: React.ReactNode
  additionalInfo?: string
}