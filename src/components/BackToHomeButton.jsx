import React from 'react';
import { FaArrowLeft } from 'react-icons/fa';
import { Link } from 'react-router';

const BackToHomeButton = () => {
  return (
    <Link 
      to="/" 
    >
      <h3 className='inline-flex items-center gap-2 text-xl md:text-2xl lg:text-3xl mb-8 md:mb-12'><FaArrowLeft /> Back to home</h3>
    </Link>
  );
};

export default BackToHomeButton;
