export interface AboutProps {
  title: string
  subTitle: string | React.ReactNode
  infos: {
    title: string
    subTitle?: string
  }[]
  children: React.ReactNode
}