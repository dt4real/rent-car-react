import { Link } from 'react-router-dom';

import MainTitle from '../MainTitle';

const Hero = () => {
  return (
    <section className="hero mt-[-8rem] w-screen">
      <div className="max-container absolute left-0 top-[4rem] flex h-full w-full flex-col items-start justify-start p-20 text-white wide:top-[8rem] wide:mt-[2rem]">
        <p>All Inclusive</p>
        <MainTitle className="mb-6 max-w-[950px] p-3 font-bold drop-shadow-2xl md:text-8xl">
          Your Key to <span className="gradient">Freedom</span> to explore the world.
        </MainTitle>
        <p className="mb-4 max-w-[600px] py-2 text-[1.1rem] drop-shadow-2xl">
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industry&apos;s standard dummy text ever since the 1500s, when an unknown printer
          a galley of type and scrambled it to make a type specimen book.
        </p>
        <Link to="/catalog" className="small-button cursor-pointer px-2 text-center">
          Reserve Now
        </Link>
      </div>
    </section>
  );
};

export default Hero;
