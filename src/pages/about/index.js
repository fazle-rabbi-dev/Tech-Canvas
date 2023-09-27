import React from 'react'

function AboutPage() {
  return (
    <section className="pb-4">
      <div className="flex justify-between items-center">
        <h2 className="w-[50%] text-2xl font-satoshi-medium font-bold">
          About Me
        </h2>
        <div className="w-[50%] flex justify-end">
          <img className="border-[.5px] rounded rounded-full border-gray-300 dark:border-gray-900 shadow w-[60%] md:w-[30%]" src="/fazle-rabbi.jpg" alt="Fazle Rabbi" />
        </div>
      </div>
      <div className="my-4 md:flex md:justify-center md:items-center md:gap-4">
        <div className="">
          <p className="font-supreme-regular leading-6 font-light mt-2 text-sm text-gray-700 dark:text-gray-300">
            Greetings! I'm <span className="font-satoshi-medium font-bold">Fazle Rabbi</span>, a passionate MERN stack developer with a penchant for all things tech and coding. With a fervor for creating seamless web applications, I'm on a mission to bring innovative solutions to life.
          </p>
          <p className="font-supreme-regular leading-6 font-light mt-2 text-sm text-gray-700 dark:text-gray-300">
            My journey in the world of programming started with a curiosity that evolved into a full-fledged passion. Over the years, I've dived deep into the realms of JavaScript, React, Node.js, and MongoDB, honing my skills to craft robust and user-friendly applications.
          </p>
          <p className="font-supreme-regular leading-6 font-light mt-2 text-sm text-gray-700 dark:text-gray-300">
            Beyond coding, I'm an avid explorer of the latest trends and breakthroughs in the tech industry. Through this blog, I aim to share insights, tutorials, and thought-provoking articles on a wide range of topics, from front-end wizardry to back-end sorcery.
          </p>
          <p className="font-supreme-regular leading-6 font-light mt-2 text-sm text-gray-700 dark:text-gray-300">
            Join me on this exciting adventure through the ever-evolving landscape of technology. Let's embark on a journey of learning, problem-solving, and innovation together!
          </p>
        </div>
      </div>
    </section>
  )
}

export default AboutPage
