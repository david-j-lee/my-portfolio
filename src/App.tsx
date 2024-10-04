import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';

import Box from './Box';
import { BoxClickable } from './BoxClickable';
import BoxesRow from './BoxesRow';
import CornerBottom from './CornerBottom';
import CornerTop from './CornerTop';
import ThemePicker from './ThemePicker';
import { projects } from './assets/projects';

const App = () => (
  <div className="size-full bg-lightest text-darkest dark:bg-darkest dark:text-lightest">
    <ThemePicker />
    <BoxesRow />
    <div className="m-auto w-full max-w-[600px]">
      <Box className="relative border-t-0">
        <CornerTop className="!-left-px !-top-px" />
        <h1 className="mb-4 text-5xl">
          Hi, I am <b className="uppercase">David Lee</b>
        </h1>
        <p className="text-xl opacity-70">
          I like to build stuff and solve problems with code.
        </p>
        <CornerBottom />
      </Box>
      <Box className="h-4 border-t-0 !p-0" />
      <Box className="relative border-y-0">
        <CornerTop className="!-left-px !-top-px" />
        <h2 className="text-sm uppercase opacity-70">Projects</h2>
      </Box>
      <div className="relative">
        <ul className="grid grid-cols-1 gap-px border border-light bg-light sm:grid-cols-2 dark:border-dark dark:bg-dark">
          {projects.map((project) => (
            <li key={project.title} className="bg-lightest dark:bg-darkest">
              <BoxClickable
                href={project.link ?? project.github}
                className="h-full border-0"
              >
                <h3 className="text-lg uppercase">{project.title}</h3>
                <p className="opacity-50">{project.description}</p>
              </BoxClickable>
            </li>
          ))}
        </ul>
        <CornerBottom className="!bottom-px !right-px" />
      </div>
      {/* <Box className="h-3 border-t-0 p-0" />
      <Box className="border-y-0">
        <h2 className="text-sm uppercase opacity-70">Experience</h2>
      </Box>
      <Box>
        <ul className="grid gap-4">
          <li className="flex flex-nowrap gap-px">
            <div className="mr-4 w-1/3 text-right">2018 - Now</div>
            <div className="ml-4 w-2/3">
              <div className="text-xl">TechEmpower</div>
              <div className="opacity-50">Lead Developer 2</div>
            </div>
          </li>
          <li className="flex flex-nowrap gap-px">
            <div className="mr-4 w-1/3 text-right">2015 - 2018</div>
            <div className="ml-4 w-2/3">
              <div className="text-xl">Orchid Orthopedic Solutions</div>
              <div className="opacity-50">Senior Financial Analyst</div>
            </div>
          </li>
          <li className="flex flex-nowrap gap-px">
            <div className="mr-4 w-1/3 text-right">2011 - 2015</div>
            <div className="ml-4 w-2/3">
              <div className="text-xl">Spencer N Enterprises</div>
              <div className="opacity-50">Accountant</div>
            </div>
          </li>
          <li className="flex flex-nowrap gap-px">
            <div className="mr-4 w-1/3 text-right">2015</div>
            <div className="ml-4 w-2/3">
              <div className="text-xl">
                California State University, Fullerton
              </div>
              <div className="opacity-50">
                Information Systems and Accounting
              </div>
            </div>
          </li>
        </ul>
      </Box> */}
      <Box className="h-4 border-t-0 !p-0" />
      <div className="relative flex flex-nowrap">
        <CornerTop className="-top-px" />
        <BoxClickable
          href="https://github.com/david-j-lee"
          className="flex w-1/3 items-center justify-center border-y-0 p-8 text-3xl"
        >
          <FaGithub />
        </BoxClickable>
        <BoxClickable
          href="https://www.linkedin.com/in/david-j-lee/"
          className="flex w-1/3 items-center justify-center border-y-0 p-8 text-3xl"
        >
          <FaLinkedin />
        </BoxClickable>
        <BoxClickable
          href="https://stackoverflow.com/users/6535663/david-lee?tab=profile"
          className="flex w-1/3 items-center justify-center border-y-0 p-8 text-3xl"
        >
          <FaStackOverflow />
        </BoxClickable>
        <CornerBottom className="!right-px" />
      </div>
    </div>
    <BoxesRow bottom />
  </div>
);

export default App;
