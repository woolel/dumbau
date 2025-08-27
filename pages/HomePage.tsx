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
        흙은 지구의 물질 순환과 에너지 흐름에 핵심적인 역할을 하는 역동적인 생태계입니다.
        지상 못지 않은 거대한 생태 도서관과 다르지 않아 지구의 역사를 고스란히 담고 있습니다.
        식물은 약 4억 7천만 년 전 지상과 지하를 꿰뚫으며 지상에 우뚝 섰는데, 흙과 빛을
        전혀 새로운 기운으로 바꾸어 놓았습니다. 덤바우는 이 역사가 새겨진 작은 도서관이고, 우리 부부는
        말하자면 사서입니다. 어려운 일이었고, 지금도 여전히 버겁습니다만 책 한권을
        권하듯이 작물을 여러분과 나눌 수 있어 즐겁습니다.   
      </p>
    </div>
  </div>
</div>
      </section>
      
      {/* Features Section */}
      <section>
      
      <div className="w-full h-screen bg-cover bg-center" 
      style={{ backgroundImage: 'url("https://iili.io/K2lve5B.jpg")' }}>
      </div>

      </section>

      {/* Products Section */}
      <section id="products" className="">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionIntro category="제철 특선" title="태양의 맛" subtitle="자연 최고의 맛을 만끽하세요. 우리의 디지털 식료품 저장실은 색과 맛으로 가득 차 있습니다." />
          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {products.map((product, index) => (
              <div key={product.title} className="relative group">
                <span className="absolute top-0 left-0 -mt-2 -ml-2 text-8xl font-black text-gray-200/50 opacity-70 z-0">
                  0{index + 1}
                </span>
                <div className="relative z-10 p-4 pt-12">
                  <div className="bg-white p-4 rounded-2xl shadow-lg dotted-border group-hover:shadow-xl transition-shadow duration-300">
                    <div className="overflow-hidden rounded-xl">
                      <img src={product.imageUrl} alt={product.title} className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"/>
                    </div>
                    <div className="mt-4 flex justify-between items-center">
                       <div>
                          <h3 className="text-lg font-bold text-slate-800">{product.title}</h3>
                          <p className="text-slate-500">{product.price}</p>
                       </div>
                       <Link to={product.linkTo} className="bg-teal-500 text-white rounded-full p-3 hover:bg-teal-600 transition-colors">
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                          </svg>
                       </Link>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
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