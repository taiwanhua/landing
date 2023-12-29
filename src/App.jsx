import video from "./assets/video.mp4";
import service from "./assets/service.png";
import getStack from "./assets/getStack.png";
import selectShop from "./assets/selectShop.png";
import function1 from "./assets/function1.png";
import function2 from "./assets/function2.png";
import useTicket from "./assets/useTicket.png";
import uselessTicket from "./assets/uselessTicket.png";
import step1 from "./assets/step1.png";
import step2 from "./assets/step2.png";
import step3 from "./assets/step3.png";
import rule from "./assets/rule.png";
import pay from "./assets/pay.png";
import case1 from "./assets/case1.png";
import case2 from "./assets/case2.png";
import case3 from "./assets/case3.png";
import left from "./assets/arrow-left-circle.svg";
import right from "./assets/arrow-right-circle.svg";
//- autoplayData
import msi from "./assets/msi.png";
import lab from "./assets/lab.png";
import moztech from "./assets/moztech.png";
import sound from "./assets/sound.png";
import tiger from "./assets/tiger.png";
import h from "./assets/h.png";
import l from "./assets/l.png";
import u from "./assets/u.png";
import { ChakraProvider } from "@chakra-ui/react";
import { Button } from "@chakra-ui/react";
import { useCallback, useMemo, useState } from "react";
import { useWindowSize } from "./hook/useWindowSize";
import CountUp from "react-countup";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { Autoplay } from "swiper/modules";

const autoplayData = [
  {
    img: msi,
    title: "msi",
  },
  {
    img: lab,
    title: "lab",
  },
  {
    img: moztech,
    title: "moztech",
  },
  {
    img: sound,
    title: "sound",
  },
  {
    img: tiger,
    title: "tiger",
  },
  {
    img: h,
    title: "h",
  },
  {
    img: l,
    title: "l",
  },
  {
    img: u,
    title: "u",
  },
];

const caseData = [
  {
    img: case1,
    title: "蝦皮起家寵物商品 AlphaPets 轉戰 Shopify 品牌經營之路",
    content:
      "AlphaPets 創辦人-​​江胤谷其實一開始是做蝦皮的賣家，「後來發現這樣就只能純粹賣東西沒有什麼信任感，所以就開一間實體店讓人家對我們有更多的了解跟信任」，剛好在屏東有一塊區域可以讓我們租下來。",
  },
  {
    img: case2,
    title: "谷底人生重新出發，美國工程師回台從零創業服飾品牌-ILLUMINATE",
    content:
      "ILLUMINATE 創辦人-Victor，在美國曾擔任軟體工程師，從小愛運動的他 “在人生最低潮的時候重拾運動，在那個當下意識到，原來對我而言，運動是一件那麼快樂的事情。”這也讓 Victor 再次感受到對運動的熱愛，也是誕生 ILLUMINATE 運動服飾品牌的主要原因。",
  },
  {
    img: case3,
    title: "從護理師到農夫：利用AI 為消費者量身打造營養方案",
    content:
      "我之前是護理師，先生是警察，我們都想要出國生活，所以澳洲就是最簡單的度假方式，在澳洲從事滿多的工作跟農業比較相關，也很喜歡那樣的生活方式因為比較健康。我認為，工作跟生活要和在一起，才能讓人有完美的平衡。",
  },
  {
    img: case3,
    title: "3",
    content:
      "33333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333",
  },
  {
    img: case3,
    title: "4",
    content:
      "444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444444",
  },
  {
    img: case3,
    title: "5",
    content:
      "555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555555",
  },
];

function App() {
  const { innerWidth } = useWindowSize();

  const [caseIndex, setCaseIndex] = useState(0);

  const isMdUp = useMemo(() => innerWidth >= 768, [innerWidth]);

  const [isFirstCase, isLastCase] = useMemo(() => {
    return [
      caseIndex === 0,
      !isMdUp
        ? caseIndex === caseData.length - 1
        : caseIndex === caseData.length - 3,
    ];
  }, [caseIndex, isMdUp]);

  const toNextCase = useCallback(() => {
    setCaseIndex((caseIndex) => caseIndex + 1);
  }, []);
  const toPreCase = useCallback(() => {
    setCaseIndex((caseIndex) => caseIndex - 1);
  }, []);

  return (
    <>
      <ChakraProvider>
        {/* top */}
        <div className="h-dvh w-full pb-10 pl-20 pr-20 bg-top-color bg-top-pattern bg-no-repeat bg-right-bottom bg-100%-55% md:bg-80%-78%">
          <p className="font-google text-2.5rem pt-36 mb-4 text-top-color font-bold break-words tracking-little-widest">
            Shopify 超商取貨必備安裝 App
          </p>
          <p className="font-google text-1rem text-top-hint-color break-words tracking-0.80px w-10/12 md:w-5/12">
            Shopify 開店，使用 Akohub「台灣物流超商取貨電子發票App」 讓您節省
            90% 繁瑣的出貨流程
          </p>
          <div className="mt-16 md:mt-48">
            <Button
              colorScheme="teal"
              size="lg"
              backgroundColor="#277B7D"
              _hover={{ backgroundColor: "#185b65" }}
            >
              預約專人諮詢
            </Button>
          </div>
        </div>

        {/* video */}
        <div className="min-h-[569px] bg-black grid grid-cols-1 gap-0 md:grid-cols-5 md:gap-[32px]">
          <div className="md:col-span-3 h-[569px]">
            <video
              src={video}
              width="100%"
              height="100%"
              autoPlay
              muted
              loop
              type="video/mp4"
              className="h-full w-full"
            />
          </div>
          <div className="md:col-span-2">
            <p className="font-google text-2.5rem pt-[172px] pr-[100px] text-white font-bold break-words tracking-little-widest">
              使用{" "}
              <span className="font-google text-2.5rem  text-akohub-color font-bold break-words tracking-little-widest">
                Akohub
              </span>{" "}
              超取 App 的夥伴
            </p>
            <p>
              <CountUp
                start={0}
                end={574}
                delay={0}
                suffix="+"
                enableScrollSpy
                formattingFn={(number) => String(number).padStart(4, "0")}
              >
                {({ countUpRef }) => (
                  <span
                    ref={countUpRef}
                    className="font-google text-6rem  text-white font-bold break-words tracking-4.80px"
                  />
                )}
              </CountUp>
              <span className="font-google text-2.5rem  text-white font-bold break-words tracking-4.80px">
                +
              </span>
            </p>
          </div>
        </div>

        {/* 跑馬燈 */}
        <div className="h-[200px]">
          <Swiper
            centeredSlides={true}
            slidesPerView="auto"
            autoplay={{
              delay: 100,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            freeMode
            loop
            allowTouchMove={false}
            spaceBetween={30}
            speed={2000}
          >
            {autoplayData.map(({ img, title }) => (
              <SwiperSlide key={title} style={{ width: "300px" }}>
                <div className="h-[200px] ">
                  <img src={img} />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* 我們提供什麼服務？ */}
        <div className="h-[188px] pt-10 pb-10 pl-20 pr-20 bg-service-color">
          <p className="font-google text-2.25rem text-center text-top-color font-bold break-words tracking-1.80px">
            我們提供什麼服務？
          </p>
          <p className="font-google text-1.5rem mt-[10px] text-center text-green-hint-color font-bold break-words tracking-1.20px">
            超商取貨 & 電子發票
          </p>
        </div>
        <div className="pt-10 pb-10 pl-20 pr-20 bg-service-color grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-[171px]">
          <div className="">
            <img src={service} alt="service" className="h-full w-full" />
          </div>
          <div className="">
            <p className="font-google text-1.5rem mt-[83px] text-left text-black font-bold break-words tracking-1.20px">
              超商取貨/宅配串接
            </p>
            <p className="font-google text-1rem mt-[32px] text-left text-top-hint-color break-words tracking-0.80px">
              在 Shopify
              訂單管理後台一鍵出貨，系統自動傳送出貨通知信&包裹貨態通知信，同時可以直接列印出貨單。
            </p>
          </div>
        </div>
        {/* 超商取貨介面 */}
        <div className="h-[132px] pt-10 pb-10 pl-20 pr-20 bg-green-hint-color">
          <p className="font-google text-2.25rem text-center text-white font-bold break-words tracking-1.80px">
            超商取貨介面
          </p>
        </div>

        <div className="pt-20 pb-20 pl-20 pr-20 bg-service-color grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-[171px]">
          <div className="">
            <p className="font-google text-1.5rem mt-[83px] text-left text-green-hint-color font-bold break-words tracking-1.20px">
              1.地圖選店型
            </p>
            <p className="font-google text-1rem mt-[32px] text-left text-top-hint-color break-words tracking-0.80px">
              台灣主流超商取貨介面 <br />
              提供宅配/超商取貨 (7-11/全家/萊爾富) 超商門市選項
            </p>
            <p className="font-google text-1rem mt-[32px] text-left text-get-stack-hint-color break-words tracking-0.80px">
              適用方案：Basic / Shopify / Advanced / Plus
            </p>
          </div>
          <div className="">
            <img src={getStack} alt="getStack" className="h-full w-full" />
          </div>
        </div>

        <div
          className="pt-20 pb-20 pl-20 pr-20 grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-[171px]"
          style={{
            background:
              "linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, #fff 100%), linear-gradient(266deg, #E4B1FF 0%, #FFC7BF 36%, #AEE4FF 64%, #DDE5FF 100%)",
          }}
        >
          <div className="">
            <img src={selectShop} alt="selectShop" className="h-full w-full" />
          </div>
          <div className="">
            <p className="font-google text-1.5rem mt-[83px] text-left text-green-hint-color font-bold break-words tracking-1.20px">
              2.自動偵測型
              <span className="inline-block align-text-bottom ml-4 pt-[6px] pb-[6px] pl-4 pr-4 rounded-3xl font-google bg-black text-white text-0.75rem font-bold tracking-0.60px break-words">
                NEW 🔥
              </span>
            </p>
            <p className="font-google text-1rem mt-[32px] text-left text-top-hint-color break-words tracking-0.80px">
              兩步驟快速選完門市 <br />
              <span className="text-green-hint-color">Step1.</span>
              輸入完整地址 <br />
              <span className="text-green-hint-color">Step2.</span>
              系統自動偵測周邊超商門市最多10間可選擇 <br />
            </p>
            <p className="font-google text-1rem mt-[32px] text-left text-get-stack-hint-color break-words tracking-0.80px">
              適用方案： Shopify / Advanced / Plus
            </p>
          </div>
        </div>

        <div className="pt-20 pb-20 pl-20 pr-20 bg-white grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-[171px]">
          <div className="">
            <p className="font-google text-1.5rem mt-[83px] text-left text-green-hint-color font-bold break-words tracking-1.20px">
              3.客製化結帳頁
              <span className="inline-block align-text-bottom ml-4 pt-[6px] pb-[6px] pl-4 pr-4 rounded-3xl font-google bg-green-hint-color text-white text-0.75rem font-bold tracking-0.60px break-words">
                功能限定
              </span>
            </p>
            <p className="font-google text-1rem mt-[32px] text-left text-top-hint-color break-words tracking-0.80px">
              崁入電子地圖於結帳頁 <br />
              一頁式結帳流程最佳搭配有效提升轉單率
            </p>
            <p className="font-google text-1rem mt-[32px] text-left text-get-stack-hint-color break-words tracking-0.80px">
              適用方案：Plus
            </p>
          </div>
          <div className="">
            <img src={pay} alt="pay" className="h-full w-full" />
          </div>
        </div>

        {/* 功能介紹 */}
        <div className="h-[172px] pt-20 pb-10 pl-20 pr-20 bg-function-color">
          <p className="font-google text-2.25rem text-center text-top-color font-bold break-words tracking-1.80px">
            功能介紹
          </p>
        </div>

        <div className="pt-10 pb-20 pl-20 pr-20 bg-function-color grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-[171px]">
          <div className="">
            <img src={function1} alt="function1" className="h-full w-full" />
          </div>
          <div className="">
            <p className="font-google text-1.5rem mt-[113px] text-left text-green-hint-color font-bold break-words tracking-1.20px">
              台灣本島、離島運費
            </p>
            <p className="font-google text-1rem mt-[32px] text-left text-top-hint-color break-words tracking-0.80px">
              貼心設計！幫助店家物流成本考量
              <br />
              設計台灣獨有本島、離島運費分別設定
            </p>
          </div>
        </div>

        <div className="pt-10 pb-20 pl-20 pr-20 bg-function-color grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-[171px]">
          <div className="">
            <p className="font-google text-1.5rem mt-[41px] text-left text-green-hint-color font-bold break-words tracking-1.20px">
              產品群分類
            </p>
            <p className="font-google text-1rem mt-[32px] text-left text-top-hint-color break-words tracking-0.80px">
              可將不同溫層、收取不同運費的商品區分開 <br />
              ex: 常溫、冷凍商品不可同時結帳
            </p>
            <p className="font-google text-1.5rem mt-[32px] text-left text-green-hint-color font-bold break-words tracking-1.20px">
              合併運費
            </p>
            <p className="font-google text-1rem mt-[32px] text-left text-top-hint-color break-words tracking-0.80px">
              可擇一設定取運費最大值、最小值、合併運費 <br />
              ex: 行銷優惠活動，凡任一選免運專區商品及整單免運
            </p>
          </div>
          <div className="">
            <img src={function2} alt="function2" className="h-full w-full" />
          </div>
        </div>

        {/* 電子發票 */}
        <div className="h-[165px] pt-10 pb-10 pl-20 pr-20 bg-blue-color">
          <p className="font-google text-2.25rem text-center text-white font-bold break-words tracking-1.80px">
            電子發票
          </p>
          <p className="font-google mt-[10px] text-1rem text-center text-white break-words tracking-0.80px">
            開立發票不用再跟 Excel 埋頭苦戰，我們幫您實現發票開立流程全自動化
          </p>
        </div>

        <div className="pt-10 pb-20 pl-20 pr-20 bg-function-color grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-[171px]">
          <div className="">
            <img src={useTicket} alt="useTicket" className="h-full w-full" />
          </div>
          <div className="">
            <p className="font-google text-1.5rem mt-[113px] text-left text-blue-color font-bold break-words tracking-1.20px">
              電子發票支援類型
            </p>
            <p className="font-google text-1rem mt-[32px] text-left text-top-hint-color break-words tracking-0.80px">
              提供一般電子發票、統一編號、手機載具、捐贈發票，四種開立類型。介面崁入位置可在購物車頁。
            </p>
          </div>
        </div>

        <div className="pt-10 pb-20 pl-20 pr-20 bg-function-color grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-[171px]">
          <div className="">
            <p className="font-google text-1.5rem mt-[41px] text-left text-blue-color font-bold break-words tracking-1.20px">
              作廢發票
            </p>
            <p className="font-google text-1rem mt-[32px] text-left text-top-hint-color break-words tracking-0.80px">
              App
              訂單管理後台，一鍵作廢或重新開立發票，系統端會於隔日將發票作廢後上傳財政部電子發票整合服務平台，並根據發送通知API設定，通知交易相對人(營業人)電子發票已作廢。
            </p>
          </div>
          <div className="">
            <img
              src={uselessTicket}
              alt="uselessTicket"
              className="h-full w-full"
            />
          </div>
        </div>

        <div className="pt-10 pb-20 pl-20 pr-20 bg-function-color grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-[171px]">
          <div className="">
            <img src={rule} alt="rule" className="h-full w-full" />
          </div>
          <div className="">
            <p className="font-google text-1.5rem mt-[41px] text-left text-blue-color font-bold break-words tracking-1.20px">
              開立方式
            </p>
            <p className="font-google text-1rem mt-[32px] text-left text-top-hint-color break-words tracking-0.80px">
              訂單完成後，系統將依照設定條件將電子發票傳送至消費者 Email
              裡。同時在 Shopify 後台查看發票開立時間、發票號碼。
            </p>
            <p className="font-google text-1.5rem mt-[32px] text-left text-blue-color font-bold break-words tracking-1.20px">
              規則設定
            </p>
            <p className="font-google text-1rem mt-[32px] text-left text-top-hint-color break-words tracking-0.80px">
              可設定自動 / 手動開立發票，當付款或出貨且付款後1 / 3 / 5 /
              7天後開立電子發票。
            </p>
          </div>
        </div>

        {/* 一次搞定！ 超商取貨 & 電子發票功能 */}
        <div className="min-h-[696px] pt-20 pb-20 pl-20 pr-20 bg-orange-color">
          <p className="font-google text-2.25rem text-center text-top-color font-bold break-words tracking-1.80px">
            一次搞定！
            <br />
            超商取貨 & 電子發票功能
          </p>

          {/* 步驟1、2、3 */}
          <div className="pt-20 pb-20 grid grid-cols-1 gap-0 md:grid-cols-3 md:gap-[16px] md:pr-[85px] md:pl-[85px] lg:gap-[16px] lg:pr-[165px] lg:pl-[165px]">
            <div className="">
              <div className="">
                <img
                  src={step1}
                  alt="step1"
                  className="h-full w-[170px] mx-auto"
                />
              </div>
              <div className="text-center pt-4 pb-4">
                <span className="font-google inline-block text-1rem rounded-full bg-green-hint-color text-white  break-words w-6 h-6">
                  1
                </span>
              </div>
              <div className="text-center pb-4 md:pb-0">
                <span className="font-google inline-block text-1rem  text-black  break-words">
                  安裝「台灣物流超商取貨電子發票」App
                </span>
              </div>
            </div>
            <div className="">
              <div className="">
                <img
                  src={step2}
                  alt="step2"
                  className="h-full w-[170px] mx-auto"
                />
              </div>
              <div className="text-center pt-4 pb-4">
                <span className="font-google inline-block text-1rem rounded-full bg-green-hint-color text-white  break-words w-6 h-6">
                  2
                </span>
              </div>
              <div className="text-center pb-4 md:pb-0">
                <span className="font-google inline-block text-1rem  text-black  break-words">
                  依需求選擇適合方案
                </span>
              </div>
            </div>
            <div className="">
              <div className="">
                <img
                  src={step3}
                  alt="step3"
                  className="h-full w-[170px] mx-auto"
                />
              </div>
              <div className="text-center pt-4 pb-4">
                <span className="font-google inline-block text-1rem rounded-full bg-green-hint-color text-white  break-words w-6 h-6">
                  3
                </span>
              </div>
              <div className="text-center pb-4 md:pb-0">
                <span className="font-google inline-block text-1rem  text-black  break-words">
                  貼上介接資料即串接完成
                </span>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Button
              colorScheme="teal"
              size="md"
              backgroundColor="#277B7D"
              _hover={{ backgroundColor: "#185b65" }}
            >
              直接聯繫顧問
            </Button>
          </div>
        </div>

        {/* 選擇最適合您的方案 */}
        <div className="min-h-[605px] pt-20 pb-20 pl-20 pr-20 ">
          <p className="font-google pb-20 text-2.25rem text-center text-black font-bold break-words tracking-1.80px">
            選擇最適合您的方案
          </p>

          {/* 顧問救救我、立即安裝 */}
          <div className="pt-20 pb-20 grid grid-cols-1 gap-0 md:grid-cols-2 md:gap-[32px] md:pr-[85px] md:pl-[85px] lg:gap-[32px] lg:pr-[153px] lg:pl-[153px]">
            <div className="bg-green-safe-me-color rounded-2xl pt-11 text-center">
              <div className="inline-block pt-2 pb-2 pl-4 pr-4 rounded-[48px] font-google bg-yellow-good-color text-black text-1rem font-bold tracking-0.60px break-words">
                推薦👍🏿
              </div>
              <p className="font-google pt-6 pb-8 text-1.5rem text-center text-white font-bold break-words tracking-1.20px">
                我需要
                <br />
                完整
                <span className="font-google text-1.5rem  text-akohub-color font-bold break-words tracking-1.20px">
                  超商物流 & 電子發票串接
                </span>
                介紹
              </p>
              <div className="text-center pb-8">
                <Button size="md" color="#399690">
                  顧問救救我
                </Button>
              </div>
            </div>

            <div className="bg-green-install-color rounded-2xl mt-[32px] md:mt-0">
              <p className="font-google pt-[108px] pb-8 text-1.5rem text-center text-black font-bold break-words tracking-1.80px">
                我只需要 <br />
                網站上有超商門市選擇功能
              </p>
              <div className="text-center pb-[57px]">
                <Button colorScheme="teal" size="md">
                  直接聯繫顧問
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* 客戶成功案例分享 */}
        <div className="min-h-[605px] pt-20 pb-20 pl-20 pr-20 bg-case-color">
          <p className="font-google pb-20 text-2.25rem text-center text-black font-bold break-words tracking-1.80px">
            客戶成功案例分享
          </p>
          {/* 案例分頁 */}
          <div className="text-right">
            <img
              src={left}
              alt="Your SVG"
              className={`inline-block cursor-pointer mr-4 ${
                isFirstCase ? "invisible" : ""
              }`}
              onClick={toPreCase}
            />
            <img
              src={right}
              alt="Your SVG"
              className={`inline-block cursor-pointer mr-4 ${
                isLastCase ? "invisible" : ""
              }`}
              onClick={toNextCase}
            />
          </div>

          {isMdUp ? (
            <div className="grid grid-cols-3 gap-9">
              {caseData
                .slice(caseIndex, caseIndex + 3)
                .map(({ img, title, content }) => (
                  <div className="rounded-2xl pt-11 text-center" key={title}>
                    <img src={img} alt={img} className="h-[298px] w-full" />
                    <p className="font-google pt-8 pb-8 text-1.5rem text-left text-black font-bold break-words tracking-1.20px">
                      {title}
                    </p>
                    <p className="font-google text-1rem text-left text-get-stack-hint-color break-words tracking-0.80px line-clamp-3">
                      {content}
                    </p>
                  </div>
                ))}
            </div>
          ) : (
            <div className="rounded-2xl pt-11 text-center">
              <img
                src={caseData[caseIndex].img}
                alt={caseData[caseIndex].img}
                className="h-[298px] w-full"
              />
              <p className="font-google pt-8 pb-8 text-1.5rem text-left text-black font-bold break-words tracking-1.20px">
                {caseData[caseIndex].title}
              </p>
              <p className="font-google text-1rem text-left text-get-stack-hint-color break-words tracking-0.80px line-clamp-3">
                {caseData[caseIndex].content}
              </p>
            </div>
          )}
        </div>
      </ChakraProvider>
    </>
  );
}

export default App;
