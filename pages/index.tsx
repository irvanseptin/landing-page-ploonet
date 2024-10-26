import About from '@/components/organisms/about'
import Text from '@/components/atoms/text'
import Header from "@/components/organisms/header"
import Banner from "@/components/molecules/banner"
import Card from '@/components/organisms/card'
import Gallery from '@/components/organisms/gallery'

import IconDocument from '@/public/icons/document.svg'
import IconCamera from '@/public/icons/camera.svg'
import IconVideo from '@/public/icons/video.svg'


export default function Home() {
  return (
    <>
      <Header />
      <Banner src="/images/banner.jpg" alt="Banner Background" />
      <About
        subTitle="영상 제작소"
        title={<>당장 내일  <strong>‘고품질 맞춤</strong> 영상’을 받아보세요.</>}
        infos={[
          { title: 'FAST', subTitle: 'X2' },
          { title: 'QUALITY', subTitle: 'A++' },
          { title: 'LOW PRICE', subTitle: '1/2' },
          { title: 'HIGH TECH', subTitle: 'Gen AI' },
        ]}
      >
        <div className="text-center mt-16 w-[335px] md:w-[662px] mx-auto">
          <Text variant="h3">AI VIDEO ON YOUR DEMAND</Text>
          <Text variant="p" className="mt-5 text-[#FFFFFF99] !important">
            가상인간 뿐 아니라 배경 이미지와 음악 생성 등 국내 최고의 생성 AI 기술에<br/> 영상 전문가의 터치를 더해 비용 및 시간은 절감하고 퀄리티는 보장된 영상을 만듭니다.
            <br /><br />
            가격은 절반으로, 속도는 두배로, 품질은 A++!<br/> 기업 홍보, 제품 소개, 교육 및 행사, 정보 및 안내 영상 등<br/> 당신이 필요한 '그 영상'을 플루닛 영상제작소에 맡겨주세요.
          </Text>
        </div>
      </About>
      <div className="flex-grow h-[1px] rounded-full bg-[#FFFFFF26] w-[240px] md:w-[800px] mx-auto" />
      <Gallery
        title="PREVIOUS WORKS"
        images={[
          '/images/01.jpg',
          '/images/02.jpg',
          '/images/03.jpg',
          '/images/04.jpg',
          '/images/05.jpg',
          '/images/06.jpg',
          '/images/07.jpg',
          '/images/08.jpg',
          '/images/09.jpg',
          '/images/10.jpg',
          '/images/11.jpg',
          '/images/12.jpg',
        ]}
      />
      <Card
        title="MAKING PROCESS"
        leftCardTitle="일반 제작"
        leftCardSubTitle="제작 시작 후 5영업일 이내"
        rightCardTitle="Ploonet Quickserve™"
        rightCardSubTitle="제작 시작 후 12~48시간 이내"
        leftSteps={[
          {
            label: 'STEP1',
            title: '사전 논의',
            description: <>
              영상 제작 문의를 통해 의뢰 확인 후<br/>
              상담을 통해 방향 설정 및 내용 협의
            </>
          },
          {
            label: 'STEP2',
            title: '영상 기획',
            description: <>
              스토리보드 전달&수정을 통한 기획안 확정<br/>
              가상인간 발화용 스크립트 작성과 프롬프팅
            </>
          },
          {
            label: 'STEP3',
            title: '영상 생성',
            description: <>
              작성한 스크립트로 가상인간 영상 생성<br/>
              그외 이미지, 배경 음악 등 필요 요소 생성
            </>
          },
          {
            label: 'STEP4',
            title: '영상 편집',
            description: <>
              영상 전문가의 편집, 디자인, 후반 작업 단계<br/>
              필요시 실사 촬영 병행하여 편집본 완성
            </>
          },
          {
            label: 'STEP5',
            title: '최종 납품',
            description: <>
              고객 피드백 반영하여 최종본 완성 및 납품<br/>
              * 영상 수정 무료 1회 제공
            </>
          },
        ]}
        rightSteps={[
          {
            label: 'STEP1',
            icon: <IconDocument />,
            title: '사전 논의',
            description: <>
              영상 제작 문의를 통해 의뢰 확인 후<br/>
              상담을 통해 방향 설정 및 내용 협의
            </>
          },
          {
            label: 'STEP2',
            icon: <IconCamera />,
            title: '영상 기획',
            description: <>
              스토리보드 전달&수정을 통한 기획안 확정<br/>
              가상인간 발화용 스크립트 작성과 프롬프팅
            </>
          },
          {
            label: 'STEP3',
            icon: <IconVideo />,
            title: '영상 생성',
            description: <>
              작성한 스크립트로 가상인간 영상 생성<br/>
              그외 이미지, 배경 음악 등 필요 요소 생성
            </>
          },
        ]}
      />
    </>
  );
}
