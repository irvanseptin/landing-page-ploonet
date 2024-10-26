import Text from "@/components/atoms/text"
import Title from "@/components/molecules/title"
import Input from "@/components/atoms/input"
import Textarea from "@/components/atoms/textarea"
import Select from "@/components/atoms/select"

import { ContactProps } from "./contact.interface"

const About: React.FC<ContactProps> = ({
  description,
  title,
  email,
  subTitle,
  children,
  additionalInfo,
}) => {
  return (
    <div className="bg-black pb-20">
      <div className="bg-black w-[337px] md:w-[844px] mx-auto p-6 text-center pt-24">
        <Title title={title} subTitleTop={subTitle} />
        <Text variant="h3" className="w-[350px] md:w-[630px] mx-auto text-[#FFFFFF99] mt-12">
          {description}
        </Text>
        <Text variant="p" className="text-[#666666] mt-8 mb-14">{email}</Text>
      </div>

      <div className="mx-auto text-center w-full md:w-[901px]">
        <Select
          placeholder="영상 유형 선택"
          className="mb-6"
          options={[
            { label: '영상 유형 선택 2K', value: '영상 유형 선택 2K'},
            { label: '영상 유형 선택 4K', value: '영상 유형 선택 4K'},
            { label: '영상 유형 선택 FULL HD', value: '영상 유형 선택 FULL HD'},
          ]}
        />
        <Input placeholder="연락 받으실 담당자 성함" className="mb-6"/>
        <Input placeholder="이메일" className="mb-6"/>
        <Input placeholder="휴대폰 번호" className="mb-6"/>
        <Textarea
          className="mb-6"
          placeholder={`의뢰하실 영상내용
아래 예시를 참고하셔서 이 중 편하신 내용을 기재해주세요.

고객님의 비즈니스 유형 : 관공서/일반기업/소상공인 등
영상 장르 : 홍보,프로모션/IR/프레젠테이션 등
내용 : 제작하시고자 하는 영상의 내용을 간단히 기재해주세요.
`}/>
        <Input placeholder="참고 영상" className="mb-6" />
        <Text variant="p" className="text-[#FF6D51] ml-5 mb-14 text-left">{additionalInfo}</Text>

        <div className="flex flex-col md:flex-row items-center justify-between w-full px-8 py-12">
          <div className="w-full md:w-1/2 flex justify-start items-center">
            <div className="text-white">
              Left
            </div>
          </div>

          <div className="w-full md:w-1/2 flex justify-end items-center">
            <div className="text-white text-right md:text-left">
              Right
            </div>
          </div>
        </div>
      </div>

      {children}
    </div>
  )
}

export default About
