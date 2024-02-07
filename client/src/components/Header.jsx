import React from 'react';

import { header } from '../assets';

const Header = () => {
  return (
    <div className="flex space-x-12 items-center bg-[#13131a] px-4 py-5">
      <img src={header} alt="header" className="w-14 h-14 mr-2" />
      <span className="text-2xl font-semibold text-2xl font-epilogue text-white">Budi Human</span>
    </div>
  );
}

export default Header;