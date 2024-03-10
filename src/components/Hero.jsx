import Image from 'next/image';

const Hero = () => {
  return (
    <section className="text-center">
      <h1 className="font-satoshi-medium text-4xl font-extrabold bg-gradient-to-b from-blue-600 to-purple-500 bg-clip-text text-transparent">
        Explore The World Of Technology
      </h1>
      <div className="md:flex md:justify-center md:items-center md:flex-row-reverse">
        <div className="md:w-[40%]">
          <Image className="w-[100%]" src="/hero.svg" width={1000} height={600} />
        </div>
        <p className="md:w-[60%] leading-7 my-2 font-supreme-regular text-gray-700 dark:text-gray-200">
          Stay Ahead in the Digital World with Expert Articles, Tutorials, and Reviews from Tech-Canvas.
          
          🚀 Embrace the Future with Tech! Explore the latest innovations, trends, and gadgets that are shaping our world. 
        </p>
      </div>
    </section>
  );
};

export default Hero;
