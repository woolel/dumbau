import React from 'react';
import { Link } from 'react-router-dom';
import { ORDER_PAGE_CONFIG } from '../constants';
import { PageType } from '../types';

const SectionIntro: React.FC<{ category: string; title: string; subtitle: string }> = ({ category, title, subtitle }) => (
  <div className="text-center max-w-2xl mx-auto">
    <p className="text-teal-600 font-semibold">— {category}</p>
    <h2 className="mt-2 text-4xl md:text-5xl font-bold tracking-tight text-slate-900">{title}</h2>
    <p className="mt-4 text-lg text-slate-600">{subtitle}</p>
  </div>
);

const FaqItem: React.FC<{ question: string; answer: string }> = ({ question, answer }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <div className="border-b border-slate-200 py-6">
      <dt>
        <button onClick={() => setIsOpen(!isOpen)} className="flex w-full items-start justify-between text-left text-slate-800">
          <span className="text-lg font-medium">{question}</span>
          <span className="ml-6 flex h-7 items-center">
            <svg className={`h-6 w-6 transform transition-transform duration-200 ${isOpen ? '-rotate-180' : 'rotate-0'}`} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
            </svg>
          </span>
        </button>
      </dt>
      {isOpen && (
        <dd className="mt-4 pr-12 text-base text-slate-600">
          <p>{answer}</p>
        </dd>
      )}
    </div>
  );
};

const HomePage: React.FC = () => {

  const products = [
    {
      title: "햇살 토마토",
      imageUrl: "https://i.postimg.cc/vHt0s9Fs/01.jpg?q=80&w=987&auto=format&fit=crop",
      linkTo: ORDER_PAGE_CONFIG[PageType.Onion].path,
      price: "₩7,500"
    },
    {
      title: "에메랄드 채소",
      imageUrl: "https://images.unsplash.com/photo-1599971216858-a475d72f8883?q=80&w=987&auto=format&fit=crop",
      linkTo: ORDER_PAGE_CONFIG[PageType.Jalapeno].path,
      price: "₩4,500"
    },
    {
      title: "진홍빛 베리",
      imageUrl: "https://images.unsplash.com/photo-1629837266859-9a3b641855a8?q=80&w=987&auto=format&fit=crop",
      linkTo: ORDER_PAGE_CONFIG[PageType.GreenChili].path,
      price: "₩9,200"
    },
     {
      title: "황금 옥수수",
      imageUrl: "https://images.unsplash.com/photo-1598170845058-32b9d6a5da37?q=80&w=987&auto=format&fit=crop",
      linkTo: ORDER_PAGE_CONFIG[PageType.Onion].path,
      price: "₩6,300"
    },
  ];

  const features = [
    {
      title: "속도",
      description: "트랙터보다 빠릅니다. 채소가 뽑힌 줄도 모를 때 도착하죠.",
      imageUrl: "https://i.postimg.cc/zX8Jc7kC/feature1.jpg"
    },
    {
      title: "품질",
      description: "너무 신선해서 윙크를 할 정도입니다. 시든 채소는 안녕, 최고의 채소를 만나보세요.",
      imageUrl: "https://i.postimg.cc/8c5zL2sN/feature2.jpg"
    },
    {
      title: "다양성",
      description: "가을의 다람쥐보다 더 많은 선택지. 이국적인 뿌리채소부터 일상적인 채소까지.",
      imageUrl: "https://i.postimg.cc/C5Y3QZqg/feature3.jpg"
    },
    {
      title: "가치",
      description: "우리는 흙을 소중히 다룹니다. 지속 가능한 농법으로 어머니 지구를 자랑스럽게 만듭니다.",
      imageUrl: "https://i.postimg.cc/tCT0M0jD/feature4.jpg"
    },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* Hero Section */}
      <section className="mt-20">
<div className="sm:flex items-center max-w-screen-xl">
  <div className="sm:w-1/2 p-10">
    <div className="image object-center text-center">
      <img src="https://iili.io/K2wTkzv.png" />
    </div>
  </div>
  <div className="sm:w-1/2 p-5">
    <div className="text">
      <span className="text-gray-500 border-b-2 border-indigo-600 uppercase">
        About us
      </span>
      <h1 className="font-bold text-3xl mt-6 mb-10">
        덤바우는 우리 부부의 생태 농장입니다.
      </h1>
      <p className="text-gray-700">
        흙은 거대한 생태 도서관이어서 지구의 역사를 고스란히 담고 있습니다.
        약 4억 7천만 년 전 식물은 지상과 지하를 꿰뚫으며 우뚝 서 흙과 빛, 공기를
        전혀 새로운 기운으로 바꾸어 놓았습니다. 덤바우는 이 역사가 새겨진 작은 책갈피이고, 우리 부부는
        말하자면 사서입니다. 버거운 일입니다만, 책 한권을
        권하듯 작물을 여러분과 나눌 수 있어 즐겁습니다.
      </p>
    </div>
  </div>
</div>
      </section>

      {/* TOC Section */}
      <section className="">

<div className="container mx-auto p-4 sm:p-8">
  <div className="max-w-xl mx-auto bg-white rounded-lg shadow-xl p-6 sm:p-10 bg-[url('https://iili.io/KJoCNdx.png')] bg-cover bg-center">
    {/* TOC Header */}
    <h1 className="text-3xl sm:text-4xl font-bold font-serif text-gray-800 border-b-2 border-gray-200 pb-4 mb-8">
      Table of Contents
    </h1>
    {/* TOC List */}
    <ul className="space-y-4 text-gray-700">
      {/* Chapter 1 - Top Level */}
      <li>
        <a
          href="#chapter1"
          className="flex justify-between items-baseline text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors duration-200"
        >
          <span className="pr-2">1. The Beginning</span>
          {/* 점선: flex-grow가 남은 공간을 모두 채웁니다. */}
          <span className="flex-grow mx-2 border-b border-dotted border-gray-400" />
          <span className="pl-2 font-sans font-bold">할랖피뇨</span>
        </a>
      </li>
      {/* Chapter 2 - With Sub-sections */}
      <li>
        <a
          href="#chapter2"
          className="flex justify-between items-baseline text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors duration-200"
        >
          <span className="pr-2">2. Core Concepts</span>
          <span className="flex-grow mx-2 border-b border-dotted border-gray-400" />
          <span className="pl-2 font-sans font-bold">15</span>
        </a>
        {/* Sub-section List */}
        <ul className="mt-3 ml-6 space-y-3 text-gray-600 border-l-2 border-gray-100 pl-6">
          <li>
            <a
              href="#section2.1"
              className="flex justify-between items-baseline hover:text-blue-600 transition-colors duration-200"
            >
              <span className="pr-2">2.1 The First Principle</span>
              <span className="flex-grow mx-2 border-b border-dotted border-gray-400" />
              <span className="pl-2 font-sans text-sm font-semibold">17</span>
            </a>
          </li>
          <li>
            <a
              href="#section2.2"
              className="flex justify-between items-baseline hover:text-blue-600 transition-colors duration-200"
            >
              <span className="pr-2">2.2 The Second Principle</span>
              <span className="flex-grow mx-2 border-b border-dotted border-gray-400" />
              <span className="pl-2 font-sans text-sm font-semibold">23</span>
            </a>
          </li>
        </ul>
      </li>
      {/* Chapter 3 - A chapter with a long title to show wrapping behavior */}
      <li>
        <a
          href="#chapter3"
          className="flex justify-between items-baseline text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors duration-200"
        >
          {/* 긴 제목이 줄바꿈 되어도 레이아웃이 깨지지 않습니다. */}
          <span className="pr-2">
            3. Advanced Techniques and Further Explorations
          </span>
          <span className="flex-grow mx-2 border-b border-dotted border-gray-400" />
          <span className="pl-2 font-sans font-bold">48</span>
        </a>
      </li>
      {/* Chapter 4 - Top Level */}
      <li>
        <a
          href="#chapter4"
          className="flex justify-between items-baseline text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors duration-200"
        >
          <span className="pr-2">4. Conclusion</span>
          <span className="flex-grow mx-2 border-b border-dotted border-gray-400" />
          <span className="pl-2 font-sans font-bold">72</span>
        </a>
      </li>
      {/* Appendix */}
      <li>
        <a
          href="#appendix"
          className="flex justify-between items-baseline text-lg font-medium text-gray-800 hover:text-blue-600 transition-colors duration-200"
        >
          <span className="pr-2">Appendix</span>
          <span className="flex-grow mx-2 border-b border-dotted border-gray-400" />
          <span className="pl-2 font-sans font-bold">85</span>
        </a>
      </li>
    </ul>
  </div>
</div>

      </section>      

      {/* Features Section */}
      <section>
      
      <div className="w-full bg-cover h-screen  bg-center" 
      style={{ backgroundImage: 'url("https://iili.io/K3EKimB.png")' }}>
      </div>

      </section>



      {/* FAQ Section */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-12">
                <div className="lg:col-span-1">
                     <SectionIntro category="자주 묻는 질문" title="궁금증에 대한 답변" subtitle="이상한 질문에도 답변해 드립니다." />
                </div>
                <div className="lg:col-span-2">
                    <dl className="space-y-4">
                        <FaqItem question="채소에도 감정이 있나요?" answer="감정은 없지만, 저희는 모든 채소를 최대한의 관심과 존중으로 다룹니다. 여러분의 식탁에 오르기 전에 행복한 삶을 살았다고 생각하고 싶어요."/>
                        <FaqItem question="농장에 방문할 수 있나요?" answer="물론입니다! 방문객을 환영합니다. 마법이 일어나는 곳을 보시려면 사전에 연락하여 투어를 예약해주세요."/>
                        <FaqItem question="주문이 마음에 들지 않으면 어떡하나요?" answer="100% 만족 보장 제도가 있습니다. 어떤 이유로든 주문이 마음에 들지 않으면 알려주세요. 묻지도 따지지도 않고 바로잡아 드리겠습니다."/>
                        <FaqItem question="여기가 최고의 온라인 농산물 가게인가요?" answer="저희는 그렇게 생각하며, 매일 그것을 증명하기 위해 열심히 노력합니다. 하지만 저희 말을 믿지 마시고, 여러분의 미각으로 직접 판단해보세요!"/>
                    </dl>
                </div>
            </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;