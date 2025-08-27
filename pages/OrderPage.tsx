import React from 'react';
import { Link } from 'react-router-dom';
import { PageType } from '../types';
import { ORDER_PAGE_CONFIG } from '../constants';

interface OrderPageProps {
  pageType: PageType;
}

const OrderPage: React.FC<OrderPageProps> = ({ pageType }) => {
  const currentPage = ORDER_PAGE_CONFIG[pageType];
  const otherPages = Object.values(PageType)
    .filter((type) => type !== pageType)
    .map((type) => ORDER_PAGE_CONFIG[type]);

  return (
    <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
      <div className="text-center mb-8">
        <h1 className="text-4xl font-bold text-teal-700">{currentPage.title}</h1>
      </div>

      <div className="flex justify-center items-center gap-4 mb-12 flex-wrap">
        <span className="text-slate-600 font-medium">다른 상품 보기:</span>
        {otherPages.map((page) => (
          <Link
            key={page.path}
            to={page.path}
            className="px-4 py-2 bg-teal-100 text-teal-800 rounded-md hover:bg-teal-200 transition-colors text-sm font-semibold"
          >
            {page.title.replace(' 주문서','')}
          </Link>
        ))}
      </div>

      <div className="max-w-4xl mx-auto bg-white p-2 sm:p-4 md:p-6 rounded-2xl shadow-lg">
        {currentPage.formUrl ? (
          <iframe
            src={currentPage.formUrl}
            width="100%"
            height="2600"
            frameBorder="0"
            marginHeight={0}
            marginWidth={0}
            title={`${currentPage.title} Google Form`}
            className="rounded-lg"
          >
            로딩 중…
          </iframe>
        ) : (
          <div className="text-center py-20">
            <h2 className="text-2xl font-semibold text-slate-700">주문서 준비 중입니다.</h2>
            <p className="mt-4 text-slate-500">곧 신선한 농산물로 돌아오겠습니다. 잠시만 기다려주세요!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrderPage;