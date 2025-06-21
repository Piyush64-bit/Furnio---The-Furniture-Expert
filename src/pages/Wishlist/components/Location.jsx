import React from 'react';

const Location = ({ title = 'CART' }) => {
  return (
    <div className="relative">
      <div className="w-screen h-[300px] bg-[url('src/assets/cartimg.jpg')] bg-cover bg-center blur-[2px] opacity-70"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
        <img src="src/assets/Furnio-logo.png" className="h-[50px] w-[50px]" alt="Logo" />
        <h1>{title}</h1>
        <h6>
          <span className="font-bold">Home &gt;</span> {title}
        </h6>
      </div>
    </div>
  );
};

export default Location;
