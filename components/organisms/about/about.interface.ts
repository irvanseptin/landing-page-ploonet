export interface AboutProps {
  title: string | React.ReactNode
  subTitle: string
  infos: {
    title: string
    subTitle?: string
  }[]
  children: React.ReactNode
}