import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { NAV_LINKS } from '../constants';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);

  const activeLinkStyle = {
    color: '#0D9488', // teal-600
    fontWeight: '600',
  };

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-transparent">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-24">
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-bold text-slate-800 hover:opacity-80 transition-opacity">
              덤바우
            </Link>
          </div>
          <nav className="hidden md:flex items-center bg-slate-100 space-x-8">
            {NAV_LINKS.slice(1,4).map((link) => (
               <NavLink
                key={link.name}
                to={link.path}
                style={({ isActive }) => (isActive ? activeLinkStyle : {})}
                className="text-slate-600 hover:text-teal-600 transition-colors"
              >
                {link.name.replace(" 주문", "")}
              </NavLink>
            ))}
          </nav>
          <div className="flex items-center gap-4">
            <Link
              to="/onion"
              className="hidden sm:block border border-lime-200 bg-lime-600 text-white rounded-md px-4 py-2 m-2 transition duration-500 ease select-none hover:bg-lime-300 focus:outline-none focus:shadow-outline"
            >
              장보기
            </Link>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-slate-600 hover:text-slate-900 focus:outline-none"
              aria-controls="mobile-menu"
              aria-expanded={isMenuOpen}
            >
              <span className="sr-only">메인 메뉴 열기</span>
              {isMenuOpen ? (
                 <svg className="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-7 w-7" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3 12h18M3 6h18M3 18h18" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden absolute top-24 left-0 right-0 shadow-lg bg-slate-100">
          <div className="px-4 pt-2 pb-4 space-y-1">
            {NAV_LINKS.map((link) => (
              <NavLink
                key={link.name}
                to={link.path}
                onClick={() => setIsMenuOpen(false)}
                style={({ isActive }) => (isActive ? activeLinkStyle : { color: '#334155' })} // slate-700
                className="hover:bg-gray-100/50 block px-3 py-3 rounded-md text-base font-medium transition-colors"
              >
                {link.name}
              </NavLink>
            ))}
             <Link
              to="/onion"
              onClick={() => setIsMenuOpen(false)}
              className="block w-full mt-4 text-center bg-lime-800 rounded-full px-6 py-3 text-sm font-medium text-white hover:bg-lime-200 transition-colors shadow"
            >
              장보기
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;