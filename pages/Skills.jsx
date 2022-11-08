import { DiJava, DiCss3, DiHtml5 } from 'react-icons/di';
import {
  SiJavascript,
  SiReact,
  SiSass,
  SiTypescript,
  SiSolidity,
  SiNextdotjs,
  SiFigma,
} from 'react-icons/si';
import { FaHardHat, FaNpm } from 'react-icons/fa';

const Skills = () => {
  return (
    <section>
      <div>
        <h3 className="text-3xl py-1 dark:text-white text-center mb-4">
          Some tools I have experience with
        </h3>
        <div className=" flex justify-center flex-wrap max-w-5xl m-auto items-center gap-16 py-3 dark:text-gray-400">
          <figure className="flex flex-col items-center justify-center">
            <DiJava size={'80px'} />
            <figcaption>Java</figcaption>
          </figure>
          <figure className="flex flex-col items-center justify-center">
            <DiHtml5 className="" size={'80px'} />
            <figcaption>HTML</figcaption>
          </figure>
          <figure className="flex flex-col items-center justify-center">
            <DiCss3 className="" size={'80px'} />
            <figcaption>CSS</figcaption>
          </figure>
          <figure className="flex flex-col gap-1 items-center justify-center">
            <SiSass className="" size={'70px'} />
            <figcaption>SASS</figcaption>
          </figure>
          <figure className="flex flex-col gap-1 items-center justify-center">
            <SiJavascript className="rounded-lg" size={'70px'} />
            <figcaption>Javascript</figcaption>
          </figure>
          <figure className="flex flex-col gap-1 items-center justify-center">
            <SiTypescript className="rounded-lg" size={'70px'} />
            <figcaption>Typescript</figcaption>
          </figure>
          <figure className="flex flex-col items-center justify-center">
            <SiReact className="" size={'80px'} />
            <figcaption>React.js</figcaption>
          </figure>
          <figure className="flex flex-col items-center justify-center">
            <SiNextdotjs className="" size={'80px'} />
            <figcaption>Next.js</figcaption>
          </figure>
          <figure className="flex flex-col items-center justify-center">
            <SiSolidity className="" size={'80px'} />
            <figcaption>Solidity</figcaption>
          </figure>
          <figure className="flex flex-col items-center justify-center">
            <FaHardHat className="" size={'80px'} />
            <figcaption>HardHat</figcaption>
          </figure>
          <figure className="flex flex-col items-center justify-center">
            <FaNpm className="" size={'80px'} />
            <figcaption>npm</figcaption>
          </figure>
          <figure className="flex flex-col items-center justify-center">
            <SiFigma className="" size={'80px'} />
            <figcaption>Figma</figcaption>
          </figure>
        </div>
      </div>
    </section>
  );
};

export default Skills;
