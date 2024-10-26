import About from "@/components/organisms/about"
import Header from "@/components/organisms/header"
import Banner from "@/components/molecules/banner"
import Text from "@/components/atoms/text"
import Gallery from "@/components/organisms/gallery"

export default function Home() {
  return (
    <>
      <Header />
      <Banner src="/images/banner.jpg" alt="Banner Background" />
      <About
        title="영상 제작소"
        subTitle={<>당장 내일  <strong>‘고품질 맞춤</strong> 영상’을 받아보세요.</>}
        infos={[
          { title: 'FAST', subTitle: 'X2' },
          { title: 'QUALITY', subTitle: 'A++' },
          { title: 'LOW PRICE', subTitle: '1/2' },
          { title: 'HIGH TECH', subTitle: 'Gen AI' },
        ]}
      >
        <div className="text-center mt-16 w-[335px] md:w-[662px] mx-auto">
          <Text variant="h3">AI VIDEO ON YOUR DEMAND</Text>
          <Text variant="p" className="mt-5 text-[#AAAAAA]">
          가상인간 뿐 아니라 배경 이미지와 음악 생성 등 국내 최고의 생성 AI 기술에<br/> 영상 전문가의 터치를 더해 비용 및 시간은 절감하고 퀄리티는 보장된 영상을 만듭니다.
          <br /><br />
          가격은 절반으로, 속도는 두배로, 품질은 A++!<br/> 기업 홍보, 제품 소개, 교육 및 행사, 정보 및 안내 영상 등<br/> 당신이 필요한 '그 영상'을 플루닛 영상제작소에 맡겨주세요.
          </Text>
        </div>
      </About>
      <div className="flex-grow h-[1px] rounded-full bg-white w-[240px] md:w-[800px] mx-auto" />
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
    </>
  );
}
