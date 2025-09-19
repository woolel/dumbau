import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
      <div className="container mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
          <div>
            <h3 className="text-xl font-bold text-white">덤바우</h3>
            <p className="mt-2 text-sm text-teal-200">이웃들과 함께 하는 생태 농장</p>
          </div>
          <div className="text-sm">
             <h4 className="font-semibold text-white tracking-wider uppercase">연락처</h4>
             <div className="mt-2 space-y-1 text-teal-200">
                <p><span className="font-medium text-white">계좌:</span> 농협 737033-56-041817 (김선미)</p>
                <p><span className="font-medium text-white">전화:</span> 010-7238-5181</p>
                <p><span className="font-medium text-white">이메일:</span> ykwoo3@gmail.com</p>
             </div>
          </div>
          <div>
            <h4 className="font-semibold text-white tracking-wider uppercase"> </h4>
            <p className="mt-2 text-sm text-teal-200"> </p>
          </div>
        </div>
        <div className="mt-10 pt-8 border-t border-teal-800 text-center text-xs text-teal-300">
          <p>&copy; 2024 덤바우</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;