
import React from 'react';
import logo1 from '../assets/logos/logo1.png';
import logo2 from '../assets/logos/logo2.png';
import logo3 from '../assets/logos/logo3.png';
import logo4 from '../assets/logos/logo4.png';
import logo5 from '../assets/logos/logo5.png';
import logo6 from '../assets/logos/logo6.png';
import logo7 from '../assets/logos/logo7.png';
import logo8 from '../assets/logos/logo8.png';
import logo9 from '../assets/logos/logo9.png';
import logo10 from '../assets/logos/logo10.png';

const Marquee = () => {
  const logos = [
    logo1,
    logo2,
    logo3,
    logo4,
    logo5,
    logo6,
    logo7,
    logo8,
    logo9,
    logo10,
  ];

  return (
    <section className='mx-5 md:container md:mx-auto my-10'>
        <h1 className='text-2xl lg:text-5xl text-center font-semibold my-10'>Pensaki BlackBoard Includes</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 px-4 ">
      {logos.map((logo, index) => (
        <div key={index} className="flex justify-center items-center">
          <img src={logo} alt={`Logo ${index + 1}`} className="max-w-28 lg:max-w-60 md:max-w-56 h-auto hover:scale-110 transition-all duration-300 rounded-xl shadow-md hover:border-2 border-gray-600" />
        </div>
      ))}
    </div>
    </section>
  );
};

export default Marquee;

