import {
  AiFillTwitterCircle,
  AiFillLinkedin,
  AiFillGithub,
} from 'react-icons/ai';
import deved from '../public/dev-ed-wave.png';
import Image from 'next/image';

const About = () => {
  return (
    <section className="min-h-screen ">
      <div className="mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 relative overflow-hidden mt-20 md:h-96 md:w-96">
        <Image src={deved} fill={true} style={{ objectFit: 'cover' }} alt="" />
      </div>
      <div className="text-center p-10 py-10">
        <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
          Aaron Stern
        </h2>
        <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
          Web Developer
        </h3>
        <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
          Hi! I am Aaron. Thai and Croatian Computer Science major at Dickinson
          College, varsity swimmer... I am...
        </p>
        <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
          <a
            href="https://www.linkedin.com/in/aaron-stern-38a105199/"
            rel="noreferrer"
            target="blank"
          >
            <AiFillLinkedin />
          </a>

          <AiFillTwitterCircle />
          <a
            href="https://github.com/Astern2112"
            rel="noreferrer"
            target="blank"
          >
            <AiFillGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
