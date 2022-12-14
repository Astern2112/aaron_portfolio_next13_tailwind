import Head from 'next/head';

import { BsFillMoonStarsFill } from 'react-icons/bs';
import { useState } from 'react';

import About from './About';
import Services from './Services';
import Projects from './Projects';
import Skills from './Skills';

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <Head>
        <title>Aaron Stern</title>
        <meta
          name="Aaron Stern's Portfolio"
          content="Generated by create next app"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className=" bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <nav className="py-10 mb-5 flex justify-between dark:text-white">
          <h1 className="font-burtons text-xl">Aaron Stern</h1>
          <ul className="flex items-center">
            <li>
              <BsFillMoonStarsFill
                onClick={() => setDarkMode(!darkMode)}
                className=" cursor-pointer text-2xl"
              />
            </li>
            <li>
              <a
                className="bg-gradient-to-r from-cyan-500 text- to-teal-500 text-white px-4 py-2 border-none rounded-md ml-8"
                href="#"
              >
                Resume
              </a>
            </li>
          </ul>
        </nav>
        <About />
        <Skills />
        {/* <Services /> */}
        <Projects />
      </main>
    </div>
  );
}
