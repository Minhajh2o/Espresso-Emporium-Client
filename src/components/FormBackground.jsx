import React from 'react';
import formBg from '../assets/more/11.png';

const FormBackground = ({ children }) => {
  return (
    <div 
      className="bg-cover bg-center pt-12 pb-24 px-4"
      style={{ backgroundImage: `url(${formBg})` }}
    >
      <div className="container max-w-5xl mx-auto">
        {children}
      </div>
    </div>
  );
};

export default FormBackground;
