import Image from 'next/image';
import web1 from '../public/web1.png';
import web2 from '../public/web2.png';
import web3 from '../public/web3.png';
import web4 from '../public/web4.png';
import web5 from '../public/web5.png';
import web6 from '../public/web6.png';

const Projects = () => {
  const projects = [
    {
      title: 'Web1',
      image: web1,
      url: 'https://www.nike.com/',
    },
    {
      title: 'Web2',
      image: web2,
      url: '',
    },
    {
      title: 'Web3',
      image: web3,
      url: '',
    },
    {
      title: 'Web4',
      image: web4,
      url: '',
    },
    {
      title: 'Web5',
      image: web5,
      url: '',
    },
    {
      title: 'Web6',
      image: web6,
      url: '',
    },
  ];
  return (
    <section className="py-10">
      <div>
        <h3 className="text-3xl py-1 dark:text-white text-center"> Projects</h3>
        <p className="text-md py-2 leading-8 text-center text-gray-800 dark:text-gray-200">
          Here are some projects that I have worked on...
        </p>
      </div>
      <div className="flex flex-col gap-10 py-10 lg:flex-row lg:flex-wrap">
        {projects.map((p) => (
          <div className="basis-1/3 flex-1 " key={p.title}>
            <a href={p.url} rel="noopener noreferrer" target="_blank">
              <Image
                className="rounded-lg object-cover hover:scale-105 ease-in duration-300"
                width={'100%'}
                height={'100%'}
                style={{ layout: 'responsive' }}
                src={p.image}
                alt={p.title}
              />
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
